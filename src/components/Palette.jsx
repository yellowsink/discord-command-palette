import { persist } from "@cumcord/pluginData";

import { findByProps, findByDisplayName } from "@cumcord/modules/webpack";
import { ErrorBoundary } from "@cumcord/ui/components";
import PaletteItem from "./PaletteItem.jsx";
import PaletteMd from "./PaletteMd.jsx";
import search from "../search.js";
import showErrorModal from "./ErrorModal.jsx";

const useState = React.useState;
const { openModal } = findByProps("openModalLazy");
const ModalComponents = findByProps("ModalCloseButton");
const TextInput = findByDisplayName("TextInput");

const Component = ({ e, prompt, rawEntries, closeAction, markdown }) => {
    let [searchterm, setSearchterm] = useState("");
    let [selected, setSelected] = useState(0);

    let entries = [];
    try {
        entries = search(rawEntries, persist.ghost.usageCounts, searchterm).filter(
            (entry) => entry && (entry.condition?.() ?? true)
        );
    } catch (err) {
        setSearchterm("");
        showErrorModal(err);
    }

    const finish = () => {
        // close modal
        e.onClose();
        // increment usages count (helps with ranking entries)
        let entry = entries[selected];
        if (entry.id) {
            let usages = persist.ghost.usageCounts;
            let currentUsage = usages.get(entry.id) ?? 0;
            usages.set(entry.id, currentUsage + 1);
            persist.store.usageCounts = usages;
        }

        // run entry action
        entry.action();
    };

    const keyHandler = (k) => {
        switch (k.code) {
            case "ArrowUp":
                if (selected > 0) setSelected(selected - 1);
                else setSelected(entries.length - 1);
                break;

            case "ArrowDown":
                if (selected < entries.length - 1) setSelected(selected + 1);
                else setSelected(0);
                break;

            case "Enter":
                finish();
                break;

            default:
                document
                    .getElementsByClassName("ysink_palette_input")[0]
                    .children[0].focus();
                break;
        }

        document
            .getElementById(`palette_item_${selected}`)
            ?.scrollIntoView(false);
    };

    if (e.transitionState == 3 && closeAction) closeAction();
    return (
        <ErrorBoundary>
            <ModalComponents.ModalRoot
                transitionState={e.transitionState}
                size="small"
                className="ysink_palette_modal"
                onKeyDown={keyHandler}
            >
                <ModalComponents.ModalContent className="ysink_palette_palette">
                    {!markdown ? [] : <PaletteMd>{markdown}</PaletteMd>}

                    <div className="ysink_palette_input_wrapper">
                        &gt;
                        <TextInput
                            className="ysink_palette_input"
                            placeholder={prompt ?? "Search Actions"}
                            type="text"
                            value={searchterm}
                            onChange={(e) => setSearchterm(e)}
                        />
                    </div>

                    <div className="ysink_palette_scrollcontainer">
                        {entries.map((entry, index) => (
                            <PaletteItem
                                entry={entry}
                                id={`palette_item_${index}`}
                                selected={index == selected}
                                icon={entry.icon}
                                hover={() => setSelected(index)}
                                finish={finish}
                            />
                        ))}
                    </div>
                </ModalComponents.ModalContent>
            </ModalComponents.ModalRoot>
        </ErrorBoundary>
    );
};

let openPalette = (prompt, rawEntries, markdown, closeAction) =>
    openModal((e) => (
        <Component {...{ e, prompt, rawEntries, closeAction, markdown }} />
    ));

let openPalettePromisified = (prompt, entries, markdown) =>
    new Promise((resolve, reject) => {
        openPalette(
            prompt,
            entries.map((entry) => ({
                id: entry,
                label: entry,
                action: () => resolve(entry),
            })),
            markdown,
            () => reject()
        );
    });

export default openPalette;
export { openPalette, openPalettePromisified };
