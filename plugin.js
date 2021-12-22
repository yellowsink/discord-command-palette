(function(g,m,U,d,He,ae,Ge,Ve,Ye,ce,le,Je,Qe){"use strict";function ue(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var Xe=ue(g),B=ue(He),Ze=()=>cumcord.patcher.injectCSS(".ysink_palette_modal{position:absolute;top:5rem;left:0;width:100vw;display:flex;align-items:center;background:none!important;box-shadow:none!important}.ysink_palette_modal.ysink_palette_textentrymodal{min-height:0}.ysink_palette_palette{width:50rem;background-color:var(--background-secondary);color:#fff;padding:.75rem 0 0;border-radius:0;overflow:unset!important}.ysink_palette_item{padding:.3rem 1rem .3rem .5rem;transition:background-color .15s;display:flex}.ysink_palette_icon{width:1.5rem;display:inline-block;text-align:center}.ysink_palette_icon_container{width:1.5rem;display:inline-flex;justify-content:center}.ysink_palette_icon_container>img{height:1rem}.ysink_palette_iconseparator{border:solid 1px #ffffff55;margin:-.3rem .5rem}.ysink_palette_item.ysink_palette_selected{background-color:#0005}.ysink_palette_input_wrapper{margin:0 .5rem 1rem;border:#ffffff33 solid 1px;display:flex;align-items:center;padding-left:.5rem}.ysink_palette_input{flex:1;margin-left:.5rem}.ysink_palette_input input{border:none!important;background:none!important;padding:0!important}.ysink_palette_source{text-transform:uppercase;font-style:italic;color:#aaa}.ysink_palette_scrollcontainer{overflow:hidden scroll;max-height:30rem;padding-bottom:.75rem}.ysink_palette_scrollcontainer::-webkit-scrollbar{width:1rem;background-color:#0003}.ysink_palette_scrollcontainer::-webkit-scrollbar-thumb{background-color:#fff3;min-height:40px}.ysink_palette_md{margin:0 .5rem 1rem;padding:.5rem;background-color:#fff1;border:1px solid #ffffff33}.ysink_palette_md>*>:last-child{margin-bottom:0}.ysink_palette_settings{font-size:2rem;display:grid;grid-template-columns:auto 1fr;gap:.75em 2em;align-items:center}.ysink_palette_settings .ysink_palette_slabel{grid-column:1;display:inline;font-size:.6em!important;text-align:right}.ysink_palette_settings .ysink_palette_sinput{grid-column:2;width:1.3em;height:1.3em}.ysink_palette_settings .ysink_palette_sbutton{width:6em}.ysink_palette_settings_container{display:flex;justify-content:center;margin-top:5em}.ysink_palette_aboutcontainer{display:flex;flex-flow:row nowrap;padding:3rem;height:24rem}.ysink_palette_aboutcontainer .ysink_palette_abouticon{margin-right:2rem;width:15rem;height:15rem}.ysink_palette_aboutcontainer .ysink_palette_right_pane{display:flex;flex-flow:column nowrap;flex:1;gap:1rem}.ysink_palette_aboutcontainer .ysink_palette_right_pane .ysink_palette_entrycount{font-size:1.2rem;line-height:1.2rem}.ysink_palette_aboutcontainer .ysink_palette_right_pane .ysink_palette_warntext{color:var(--text-danger);font-size:1.1rem}"),qe=({entry:t,selected:e,id:s,icon:n,finish:r,hover:i})=>{n||(n="");let o=!1;try{new URL(n),o=!0}catch{}return d.React.createElement("div",{className:e?"ysink_palette_item ysink_palette_selected":"ysink_palette_item",id:s,onClick:r,onMouseOver:i},o?d.React.createElement("div",{className:"ysink_palette_icon_container"},d.React.createElement("img",{src:n})):d.React.createElement("span",{className:"ysink_palette_icon"},n),d.React.createElement("span",{className:"ysink_palette_iconseparator"}),t.label,d.React.createElement("div",{style:{flex:1}}),d.React.createElement("span",{className:"ysink_palette_source"},t.source))};const et=m.findByProps("rules");var de=({children:t})=>d.React.createElement("div",{class:"ysink_palette_md"},d.React.createElement(et,null,t));function R(t){return Array.isArray?Array.isArray(t):fe(t)==="[object Array]"}const tt=1/0;function st(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-tt?"-0":e}function nt(t){return t==null?"":st(t)}function w(t){return typeof t=="string"}function he(t){return typeof t=="number"}function rt(t){return t===!0||t===!1||it(t)&&fe(t)=="[object Boolean]"}function pe(t){return typeof t=="object"}function it(t){return pe(t)&&t!==null}function E(t){return t!=null}function Y(t){return!t.trim().length}function fe(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const bs="Extended search is not available",ot="Incorrect 'index' type",at=t=>`Invalid value for key ${t}`,ct=t=>`Pattern length exceeds max of ${t}.`,lt=t=>`Missing ${t} property in key`,ut=t=>`Property 'weight' in key '${t}' must be a positive integer`,ge=Object.prototype.hasOwnProperty;class dt{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let r=me(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function me(t){let e=null,s=null,n=null,r=1;if(w(t)||R(t))n=t,e=ye(t),s=J(t);else{if(!ge.call(t,"name"))throw new Error(lt("name"));const i=t.name;if(n=i,ge.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(ut(i));e=ye(i),s=J(i)}return{path:e,id:s,weight:r,src:n}}function ye(t){return R(t)?t:t.split(".")}function J(t){return R(t)?t.join("."):t}function ht(t,e){let s=[],n=!1;const r=(i,o,a)=>{if(!!E(i))if(!o[a])s.push(i);else{let c=o[a];const l=i[c];if(!E(l))return;if(a===o.length-1&&(w(l)||he(l)||rt(l)))s.push(nt(l));else if(R(l)){n=!0;for(let u=0,f=l.length;u<f;u+=1)r(l[u],o,a+1)}else o.length&&r(l,o,a+1)}};return r(t,w(e)?e.split("."):e,0),n?s:s[0]}var p={...{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},...{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},...{location:0,threshold:.6,distance:100},...{useExtendedSearch:!1,getFn:ht,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const pt=/[^ ]+/g;function ft(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(r){const i=r.match(pt).length;if(s.has(i))return s.get(i);const o=1/Math.pow(i,.5*t),a=parseFloat(Math.round(o*n)/n);return s.set(i,a),a},clear(){s.clear()}}}class Q{constructor({getFn:e=p.getFn,fieldNormWeight:s=p.fieldNormWeight}={}){this.norm=ft(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,w(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();w(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!E(e)||Y(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let o=this.getFn(e,r.path);if(!!E(o)){if(R(o)){let a=[];const c=[{nestedArrIndex:-1,value:o}];for(;c.length;){const{nestedArrIndex:l,value:u}=c.pop();if(!!E(u))if(w(u)&&!Y(u)){let f={v:u,i:l,n:this.norm.get(u)};a.push(f)}else R(u)&&u.forEach((f,h)=>{c.push({nestedArrIndex:h,value:f})})}n.$[i]=a}else if(!Y(o)){let a={v:o,n:this.norm.get(o)};n.$[i]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function _e(t,e,{getFn:s=p.getFn,fieldNormWeight:n=p.fieldNormWeight}={}){const r=new Q({getFn:s,fieldNormWeight:n});return r.setKeys(t.map(me)),r.setSources(e),r.create(),r}function gt(t,{getFn:e=p.getFn,fieldNormWeight:s=p.fieldNormWeight}={}){const{keys:n,records:r}=t,i=new Q({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function K(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:r=p.distance,ignoreLocation:i=p.ignoreLocation}={}){const o=e/t.length;if(i)return o;const a=Math.abs(n-s);return r?o+a/r:a?1:o}function mt(t=[],e=p.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let o=t.length;i<o;i+=1){let a=t[i];a&&n===-1?n=i:!a&&n!==-1&&(r=i-1,r-n+1>=e&&s.push([n,r]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const N=32;function yt(t,e,s,{location:n=p.location,distance:r=p.distance,threshold:i=p.threshold,findAllMatches:o=p.findAllMatches,minMatchCharLength:a=p.minMatchCharLength,includeMatches:c=p.includeMatches,ignoreLocation:l=p.ignoreLocation}={}){if(e.length>N)throw new Error(ct(N));const u=e.length,f=t.length,h=Math.max(0,Math.min(n,f));let y=i,_=h;const k=a>1||c,$=k?Array(f):[];let S;for(;(S=t.indexOf(e,_))>-1;){let M=K(e,{currentLocation:S,expectedLocation:h,distance:r,ignoreLocation:l});if(y=Math.min(M,y),_=S+u,k){let C=0;for(;C<u;)$[S+C]=1,C+=1}}_=-1;let T=[],A=1,G=u+f;const ws=1<<u-1;for(let M=0;M<u;M+=1){let C=0,P=G;for(;C<P;)K(e,{errors:M,currentLocation:h+P,expectedLocation:h,distance:r,ignoreLocation:l})<=y?C=P:G=P,P=Math.floor((G-C)/2+C);G=P;let Ke=Math.max(1,h-P+1),oe=o?f:Math.min(h+P,f)+u,O=Array(oe+2);O[oe+1]=(1<<M)-1;for(let x=oe;x>=Ke;x-=1){let V=x-1,We=s[t.charAt(V)];if(k&&($[V]=+!!We),O[x]=(O[x+1]<<1|1)&We,M&&(O[x]|=(T[x+1]|T[x])<<1|1|T[x+1]),O[x]&ws&&(A=K(e,{errors:M,currentLocation:V,expectedLocation:h,distance:r,ignoreLocation:l}),A<=y)){if(y=A,_=V,_<=h)break;Ke=Math.max(1,2*h-_)}}if(K(e,{errors:M+1,currentLocation:h,expectedLocation:h,distance:r,ignoreLocation:l})>y)break;T=O}const ie={isMatch:_>=0,score:Math.max(.001,A)};if(k){const M=mt($,a);M.length?c&&(ie.indices=M):ie.isMatch=!1}return ie}function _t(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<n-s-1}return e}class Ee{constructor(e,{location:s=p.location,threshold:n=p.threshold,distance:r=p.distance,includeMatches:i=p.includeMatches,findAllMatches:o=p.findAllMatches,minMatchCharLength:a=p.minMatchCharLength,isCaseSensitive:c=p.isCaseSensitive,ignoreLocation:l=p.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:l},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(h,y)=>{this.chunks.push({pattern:h,alphabet:_t(h),startIndex:y})},f=this.pattern.length;if(f>N){let h=0;const y=f%N,_=f-y;for(;h<_;)u(this.pattern.substr(h,N),h),h+=N;if(y){const k=f-N;u(this.pattern.substr(k),k)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let _={isMatch:!0,score:0};return n&&(_.indices=[[0,e.length-1]]),_}const{location:r,distance:i,threshold:o,findAllMatches:a,minMatchCharLength:c,ignoreLocation:l}=this.options;let u=[],f=0,h=!1;this.chunks.forEach(({pattern:_,alphabet:k,startIndex:$})=>{const{isMatch:S,score:T,indices:A}=yt(e,_,k,{location:r+$,distance:i,threshold:o,findAllMatches:a,minMatchCharLength:c,includeMatches:n,ignoreLocation:l});S&&(h=!0),f+=T,S&&A&&(u=[...u,...A])});let y={isMatch:h,score:h?f/this.chunks.length:1};return h&&n&&(y.indices=u),y}}class v{constructor(e){this.pattern=e}static isMultiMatch(e){return ke(e,this.multiRegex)}static isSingleMatch(e){return ke(e,this.singleRegex)}search(){}}function ke(t,e){const s=t.match(e);return s?s[1]:null}class Et extends v{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class kt extends v{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Mt extends v{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class It extends v{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class xt extends v{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Rt extends v{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Me extends v{constructor(e,{location:s=p.location,threshold:n=p.threshold,distance:r=p.distance,includeMatches:i=p.includeMatches,findAllMatches:o=p.findAllMatches,minMatchCharLength:a=p.minMatchCharLength,isCaseSensitive:c=p.isCaseSensitive,ignoreLocation:l=p.ignoreLocation}={}){super(e);this._bitapSearch=new Ee(e,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Ie extends v{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const X=[Et,Ie,Mt,It,Rt,xt,kt,Me],xe=X.length,wt=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,bt="|";function St(t,e={}){return t.split(bt).map(s=>{let n=s.trim().split(wt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=n.length;i<o;i+=1){const a=n[i];let c=!1,l=-1;for(;!c&&++l<xe;){const u=X[l];let f=u.isMultiMatch(a);f&&(r.push(new u(f,e)),c=!0)}if(!c)for(l=-1;++l<xe;){const u=X[l];let f=u.isSingleMatch(a);if(f){r.push(new u(f,e));break}}}return r})}const vt=new Set([Me.type,Ie.type]);class Ct{constructor(e,{isCaseSensitive:s=p.isCaseSensitive,includeMatches:n=p.includeMatches,minMatchCharLength:r=p.minMatchCharLength,ignoreLocation:i=p.ignoreLocation,findAllMatches:o=p.findAllMatches,location:a=p.location,threshold:c=p.threshold,distance:l=p.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:a,threshold:c,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=St(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],a=0;for(let c=0,l=s.length;c<l;c+=1){const u=s[c];o.length=0,i=0;for(let f=0,h=u.length;f<h;f+=1){const y=u[f],{isMatch:_,indices:k,score:$}=y.search(e);if(_){if(i+=1,a+=$,n){const S=y.constructor.type;vt.has(S)?o=[...o,...k]:o.push(k)}}else{a=0,i=0,o.length=0;break}}if(i){let f={isMatch:!0,score:a/i};return n&&(f.indices=o),f}}return{isMatch:!1,score:1}}}const Z=[];function Pt(...t){Z.push(...t)}function q(t,e){for(let s=0,n=Z.length;s<n;s+=1){let r=Z[s];if(r.condition(t,e))return new r(t,e)}return new Ee(t,e)}const D={AND:"$and",OR:"$or"},ee={PATH:"$path",PATTERN:"$val"},te=t=>!!(t[D.AND]||t[D.OR]),Bt=t=>!!t[ee.PATH],Nt=t=>!R(t)&&pe(t)&&!te(t),Re=t=>({[D.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function we(t,e,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const o=Bt(r);if(!o&&i.length>1&&!te(r))return n(Re(r));if(Nt(r)){const c=o?r[ee.PATH]:i[0],l=o?r[ee.PATTERN]:r[c];if(!w(l))throw new Error(at(c));const u={keyId:J(c),pattern:l};return s&&(u.searcher=q(l,e)),u}let a={children:[],operator:i[0]};return i.forEach(c=>{const l=r[c];R(l)&&l.forEach(u=>{a.children.push(n(u))})}),a};return te(t)||(t=Re(t)),n(t)}function $t(t,{ignoreFieldNorm:e=p.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:o})=>{const a=r?r.weight:null;n*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(e?1:i))}),s.score=n})}function At(t,e){const s=t.matches;e.matches=[],!!E(s)&&s.forEach(n=>{if(!E(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let o={indices:r,value:i};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),e.matches.push(o)})}function Lt(t,e){e.score=t.score}function Tt(t,e,{includeMatches:s=p.includeMatches,includeScore:n=p.includeScore}={}){const r=[];return s&&r.push(At),n&&r.push(Lt),t.map(i=>{const{idx:o}=i,a={item:e[o],refIndex:o};return r.length&&r.forEach(c=>{c(i,a)}),a})}class L{constructor(e,s={},n){this.options={...p,...s},this.options.useExtendedSearch,this._keyStore=new dt(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof Q))throw new Error(ot);this._myIndex=s||_e(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!E(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:a}=this.options;let c=w(e)?w(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return $t(c,{ignoreFieldNorm:a}),i&&c.sort(o),he(s)&&s>-1&&(c=c.slice(0,s)),Tt(c,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const s=q(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:o,n:a})=>{if(!E(i))return;const{isMatch:c,score:l,indices:u}=s.searchIn(i);c&&r.push({item:i,idx:o,matches:[{score:l,value:i,norm:a,indices:u}]})}),r}_searchLogical(e){const s=we(e,this.options),n=(a,c,l)=>{if(!a.children){const{keyId:u,searcher:f}=a,h=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(c,u),searcher:f});return h&&h.length?[{idx:l,item:c,matches:h}]:[]}switch(a.operator){case D.AND:{const u=[];for(let f=0,h=a.children.length;f<h;f+=1){const y=a.children[f],_=n(y,c,l);if(_.length)u.push(..._);else return[]}return u}case D.OR:{const u=[];for(let f=0,h=a.children.length;f<h;f+=1){const y=a.children[f],_=n(y,c,l);if(_.length){u.push(..._);break}}return u}}},r=this._myIndex.records,i={},o=[];return r.forEach(({$:a,i:c})=>{if(E(a)){let l=n(s,a,c);l.length&&(i[c]||(i[c]={idx:c,item:a,matches:[]},o.push(i[c])),l.forEach(({matches:u})=>{i[c].matches.push(...u)}))}}),o}_searchObjectList(e){const s=q(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:a})=>{if(!E(o))return;let c=[];n.forEach((l,u)=>{c.push(...this._findMatches({key:l,value:o[u],searcher:s}))}),c.length&&i.push({idx:a,item:o,matches:c})}),i}_findMatches({key:e,value:s,searcher:n}){if(!E(s))return[];let r=[];if(R(s))s.forEach(({v:i,i:o,n:a})=>{if(!E(i))return;const{isMatch:c,score:l,indices:u}=n.searchIn(i);c&&r.push({score:l,key:e,value:i,idx:o,norm:a,indices:u})});else{const{v:i,n:o}=s,{isMatch:a,score:c,indices:l}=n.searchIn(i);a&&r.push({score:c,key:e,value:i,norm:o,indices:l})}return r}}L.version="6.5.0",L.createIndex=_e,L.parseIndex=gt,L.config=p,L.parseQuery=we,Pt(Ct);const Ot=t=>{let e=t.filter(r=>!r.id),[s,n]=e.reduce((r,i)=>(i.source!="Built In"?r[0].push(i):r[1].push(i),r),[[],[]]);if(n.length!=0)throw`One or more built-in entries had no ID. Please ping Yellowsink constantly with this:

\`\`\`
${n.map(r=>r.label).join(`
`)}
\`\`\``;if(s.length!=0)throw`One or more custom entries had no ID. Please disable the following entry sources:

\`\`\`
${s.map(r=>r.source).join(`
`)}
\`\`\`

The devs of those sources would likely appreciate this info too:

\`\`\`
${s.map(r=>r.label).join(`
`)}
\`\`\``},be=(t,e)=>{let s=t.slice(),n=[];return e.forEach((r,i)=>{let o=s.findIndex(a=>a.id==i);o!=-1&&(n.push([s[o],r]),s.splice(o,1))}),n=n.sort((r,i)=>i[1]-r[1]).map(r=>r[0]),n.concat(s)},Dt=(t,e)=>{Ot(t);const s={threshold:.5,useExtendedSearch:!0,keys:["label","id"]};return new L(t,s).search(e).map(n=>n.item)};var Ft=(t,e,s)=>{if(!s||s=="")return be(t,e);let n=Dt(t,s);return be(n,e)};const W=m.findByProps("ModalCloseButton"),Se=m.findByProps("Sizes","Tags"),ve=m.findByDisplayName("Flex"),{openModal:jt}=m.findByProps("openModalLazy"),zt=m.findByDisplayName("FormSection");m.findByProps("Sizes","Colors","Looks","DropdownSizes");const Ut=m.findByProps("rules"),Kt=({err:t,e})=>d.React.createElement(U.ErrorBoundary,null,d.React.createElement(W.ModalRoot,{transitionState:e.transitionState,size:"small",className:"ysink_palette_errormodal"},d.React.createElement(W.ModalHeader,{separator:!1},d.React.createElement(ve.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},d.React.createElement(Se,{tag:"h2",size:Se.Sizes.SIZE_20},"We screwed up!!!")),d.React.createElement(ve.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},d.React.createElement(W.ModalCloseButton,{onClick:e.onClose}))),d.React.createElement(W.ModalContent,null,d.React.createElement(zt,null,d.React.createElement(Ut,null,t)))));var Wt=t=>jt(e=>d.React.createElement(Kt,{e,err:t}));const Ce=d.React.useState,{openModal:Ht}=m.findByProps("openModalLazy"),Pe=m.findByProps("ModalCloseButton"),Gt=m.findByDisplayName("TextInput"),Vt=({e:t,prompt:e,rawEntries:s,closeAction:n,markdown:r})=>{let[i,o]=Ce(""),[a,c]=Ce(0),l=[];try{l=Ft(s,g.persist.ghost.usageCounts,i).filter(h=>h&&(h.condition?.()??!0))}catch(h){o(""),Wt(h)}const u=()=>{t.onClose();let h=l[a];if(h.id){let y=g.persist.ghost.usageCounts,_=y.get(h.id)??0;y.set(h.id,_+1),g.persist.store.usageCounts=y}h.action()},f=h=>{switch(h.code){case"ArrowUp":a>0?c(a-1):c(l.length-1);break;case"ArrowDown":a<l.length-1?c(a+1):c(0);break;case"Enter":u();break;default:document.getElementsByClassName("ysink_palette_input")[0].children[0].focus();break}document.getElementById(`palette_item_${a}`)?.scrollIntoView(!1)};return t.transitionState==3&&n&&n(),d.React.createElement(U.ErrorBoundary,null,d.React.createElement(Pe.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal",onKeyDown:f},d.React.createElement(Pe.ModalContent,{className:"ysink_palette_palette"},r?d.React.createElement(de,null,r):[],d.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",d.React.createElement(Gt,{className:"ysink_palette_input",placeholder:e??"Search Actions",type:"text",value:i,onChange:h=>o(h)})),d.React.createElement("div",{className:"ysink_palette_scrollcontainer"},l.map((h,y)=>d.React.createElement(qe,{entry:h,id:`palette_item_${y}`,selected:y==a,icon:h.icon,hover:()=>c(y),finish:u}))))))};let b=(t,e,s,n)=>Ht(r=>d.React.createElement(Vt,{e:r,prompt:t,rawEntries:e,closeAction:n,markdown:s})),Yt=(t,e,s)=>new Promise((n,r)=>{b(t,e.map(i=>({id:i,label:i,action:()=>n(i)})),s,()=>r())});const Jt="\u{1F389} Welcome to **Command Palette**! \u{1F389} Start typing to pick an item from the list, or visit the API Docs to start building custom actions at https://yellowsink.github.io/discord-command-palette/docs";var Qt=t=>{let e=n=>{if(g.state.ghost.pickingBind)return;let r=g.persist.ghost.keyBind;if((n.ctrlKey||n.metaKey)==r.ctrlMeta&&n.shiftKey==r.shift&&n.which==r.code){let o=g.persist.ghost.firstRun!==!1?Jt:null;b(null,t.concat(g.state.ghost.customEntries),o),g.persist.store.firstRun=!1}},s=new AbortController;return document.addEventListener("keyup",e,{signal:s.signal}),()=>s.abort()};const{getGuildPermissions:Xt}=m.findByProps("getGuildPermissions"),{getLastSelectedGuildId:I}=m.findByProps("getLastSelectedGuildId"),Be=(t,e)=>{let s=Xt({id:t});return!!(s&&(s&e)!=0)},Zt=()=>Be(I(),BigInt(4)),qt=()=>Be(I(),BigInt(2)),es=d.React.useState,{openModal:ts}=m.findByProps("openModalLazy"),Ne=m.findByProps("ModalCloseButton"),ss=m.findByDisplayName("TextInput"),ns=({e:t,prompt:e,finishAction:s,closeAction:n,markdown:r})=>{let[i,o]=es("");return d.React.createElement(U.ErrorBoundary,null,d.React.createElement(Ne.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal ysink_palette_textentrymodal",onKeyDown:a=>{a.which==13&&(t.onClose(),s(i))}},d.React.createElement(Ne.ModalContent,{className:"ysink_palette_palette"},r?d.React.createElement(de,null,r):[],d.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",d.React.createElement(ss,{className:"ysink_palette_input",placeholder:e,type:"text",value:i,onChange:a=>o(a),onBlur:()=>n()})))))},F=(t,e,s,n)=>ts(r=>d.React.createElement(ns,{e:r,prompt:t,finishAction:e,markdown:s,closeAction:n})),$e=(t,e)=>new Promise((s,n)=>{F(t,s,e,()=>n("user closed textentry"))}),{getMembers:Ae}=m.findByProps("getMembers"),{getUser:Le}=m.findByProps("getUser"),{banUser:rs,kickUser:is}=m.findByProps("banUser"),Te="\u{1F6E0}";var os=[{icon:Te,id:"moderation_banuser",label:"Ban user from current guild",condition:Zt,action:async()=>{b("Which user to ban?",await Promise.all(Ae(I()).map(async t=>{let e=await Le(t.userId),s=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${s} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>F("Enter ban reason",n=>{rs(I(),t.userId,null,n)})}})))}},{icon:Te,id:"moderation_kickuser",label:"Kick user from current guild",condition:qt,action:async()=>{b("Which user to kick?",await Promise.all(Ae(I()).map(async t=>{let e=await Le(t.userId),s=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${s} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>F("Enter kick reason",n=>{is(I(),t.userId,n)})}})))}}];const j="\u{1F4A7}";var as=[{icon:j,id:"cumcord_installplug",label:"Install plugin from URL",action:async()=>{try{let t=await $e("Enter URL");await B.default.importPlugin(t),ae.showToast({title:"Installed plugin",duration:3e3})}catch{}}},{icon:j,id:"cumcord_removeplug",label:"Remove plugin",action:()=>{let t=Object.keys(B.default.installed.ghost).map(e=>[e,B.default.installed.ghost[e]]);b("Choose plugin to remove",t.map(e=>({id:e[0],label:e[1].manifest.name,action:()=>B.default.removePlugin(e[0])})))}},{icon:j,id:"cumcord_toggleplug",label:"Toggle plugin",action:()=>{let t=Object.keys(B.default.installed.ghost).map(e=>[e,B.default.installed.ghost[e]]);b("Choose plugin to toggle",t.map(e=>({id:e[0],label:(e[1].enabled?"\u{1F7E2} ":"\u{1F534} ")+e[1].manifest.name,action:()=>B.default.togglePlugin(e[0])})))}},{icon:j,id:"cumcord_uninject",label:"Uninject Cumcord",action:()=>setTimeout(async()=>{await Ge.showConfirmationModal({header:"Really uninject Cumcord?",content:"This will disable all of your plugins, and Cumcord will be completely removed",type:"danger",confirmText:"Uninject",cancelText:"Actually, never mind"})&&Ve.uninject()},500)},{icon:j,id:"cumcord_toggle_dev",label:"Toggle DevMode",action:Ye.toggleDevMode}];const Oe="\u267B";var cs=[{icon:Oe,id:"reboot_reload",label:"Reload Discord",action:()=>window.location.reload()},{icon:Oe,id:"reboot_relaunch",label:"Relaunch Discord to updater",condition:()=>window.DiscordNative,action:()=>window.DiscordNative.app.relaunch()}];const{getMembers:ls}=m.findByProps("getMembers"),{getUser:us}=m.findByProps("getUser"),{openUserProfileModal:De}=m.findByProps("openUserProfileModal"),ds=m.findByProps("submitComplete").open,{getUserSettingsSections:hs}=m.findByProps("getUserSettingsSections"),se="\u{1F680}";var ps=[{icon:se,id:"navigate_user_profile_id",label:"Open user profile by ID",action:()=>{F("Enter user ID",t=>{setTimeout(()=>{try{De({userId:t})}catch{ae.showToast({title:"Failed! - Is the user ID correct?",duration:3e3})}},200)})}},{icon:se,id:"navigate_user_profile_server",label:"Open user profile from current server",action:async()=>{b("Which profile to open?",await Promise.all(ls(I()).map(async t=>{let e=await us(t.userId),s=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${s} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>setTimeout(()=>De({userId:t.userId}),200)}})))}},{icon:se,id:"navigate_user_settings",label:"Open user settings",action:()=>{b("Which section to open?",Object.values(hs("")).map(t=>({id:t.section,label:t.label,action:()=>ds(t.section)})))}}];const{openModal:fs}=m.findByProps("openModalLazy"),Fe=m.findByProps("ModalCloseButton"),je=m.findByProps("Sizes","Tags"),ne=m.findByDisplayName("FormText"),gs=({e:t})=>d.React.createElement(U.ErrorBoundary,null,d.React.createElement(Fe.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal"},d.React.createElement(Fe.ModalContent,{className:"ysink_palette_palette"},d.React.createElement("div",{className:"ysink_palette_aboutcontainer"},d.React.createElement("img",{src:"https://yellowsink.github.io/discord-command-palette/assets/icon.png",className:"ysink_palette_abouticon"}),d.React.createElement("div",{className:"ysink_palette_right_pane"},d.React.createElement(je,{tag:"h2",size:je.Sizes.SIZE_20},"Discord Command Palette"),d.React.createElement(ne,{className:"ysink_palette_warntext"},"\u26A0 This is pre-release software, expect bugs! \u26A0"),d.React.createElement(ne,{className:"ysink_palette_entrycount"},H.length," built in entries loaded"),d.React.createElement(ne,{className:"ysink_palette_entrycount"},g.state.ghost.customEntries.length," custom entries registered"))))));var ms=()=>fs(t=>d.React.createElement(gs,{e:t}));const{updateChannelOverrideSettings:ys}=m.findByProps("updateChannelOverrideSettings"),{getCurrentChannelSettings:_s}=m.findByProps("getCurrentChannelSettings"),{getChannelId:ze}=m.findByProps("getChannelId","getVoiceChannelId"),{updateGuildNotificationSettings:Es}=m.findByProps("updateGuildNotificationSettings"),{isMuted:ks}=m.findByProps("getMuteConfig");var Ms=[{icon:"\u{1F507}",id:"misc_toggle_channel_mute",label:"Toggle current channel mute",action:()=>{let t=_s(I(),ze()).channel_is_muted;ys(I(),ze(),{muted:!t,suppress_everyone:!t,suppress_roles:!t})}},{icon:"\u{1F507}",id:"misc_toggle_guild_mute",label:"Toggle current guild mute",action:()=>{let t=ks(I());Es(I(),{muted:!t,suppress_everyone:!t,suppress_roles:!t})}},{icon:"\u2139",id:"misc_show_about",label:"About Command Palette",action:()=>{ms()}}];const Ue="Built In",H=os.concat(as).concat(cs).concat(ps).concat(Ms).map(t=>({source:Ue,...t}));var Is=()=>(window.commandPalette={openPalette:b,openPaletteAsync:Yt,openTextEntry:F,openTextEntryAsync:$e,registerEntry({source:t,id:e,label:s,icon:n,action:r,condition:i}){if(!e||e=="")throw"Register failed: Please supply an ID (string) for your entry";if(!t||t=="")throw"Register failed: Please identify a source (string) for your entry";if(!s||s=="")throw"Register failed: Please supply a label (string) for your entry";if(!r)throw"Register failed: Please supply an action (JS function) for your entry";if(t==Ue)throw"Register failed: That source is reserved for built in entries";if(H.find(a=>a.id==e)!=null)throw"Register failed: Entry ID taken by a built in entry";let o=g.state.ghost.customEntries.findIndex(a=>a.id==e);if(o!=-1)throw`Register failed: Entry ID taken by entry from source ${g.state.ghost.customEntries[o].source}`;g.state.ghost.customEntries.push({id:e,source:t,label:s,action:r,icon:n,console})},unregisterEntry(t){if(!t||t=="")throw"Unregister failed: Please supply an ID (string) to deregister";let e=g.state.ghost.customEntries,s=e.findIndex(r=>r.id==t);if(s==-1)throw"Unregister failed: No entry with that ID could be found";let n=e[s];return e.splice(s,1),g.state.store.customEntries=e,n},unregisterSource(t){let e=g.state.ghost.customEntries,s=e.filter(n=>n.source!=t);if(s.length!=e.length)return g.state.store.customEntries=s,e.filter(n=>n.source==t)},getEntries:()=>H.concat(g.state.ghost.customEntries)},ce.log("|| COMMAND PALETTE || Initialised window.commandPalette API"),()=>{window.commandPalette=void 0,delete window.commandPalette,ce.log("|| COMMAND PALETTE || Disposed window.commandPalette API")});const re=m.findByDisplayName("FormText"),z=m.findByProps("Sizes","Colors","Looks","DropdownSizes");var xs=()=>{if(le.useNest(g.state),le.useNest(g.persist),g.state.ghost.pickingBind){const t=e=>{g.persist.store.keyBind.code=e.which,g.state.store.pickingBind=!1};document.addEventListener("keyup",t,{once:!0})}return d.React.createElement("div",{className:"ysink_palette_settings_container"},d.React.createElement("div",{className:"ysink_palette_settings"},d.React.createElement(re,{className:"ysink_palette_slabel"},"Keycode: ",String.fromCharCode(g.persist.ghost.keyBind.code)),d.React.createElement(z,{className:"ysink_palette_sbutton",size:z.Sizes.TINY,color:g.state.ghost.pickingBind?z.Colors.RED:z.Colors.GREEN,look:z.Looks.OUTLINED,onClick:()=>g.state.store.pickingBind=!g.state.ghost.pickingBind,onBlur:()=>g.state.store.pickingBind=!1},g.state.ghost.pickingBind?"Cancel":"Change"),d.React.createElement(re,{className:"ysink_palette_slabel"},"Shift"),d.React.createElement("input",{className:"ysink_palette_sinput",type:"checkbox",onChange:t=>g.persist.store.keyBind.shift=t.target.checked,checked:g.persist.ghost.keyBind.shift,disabled:g.state.ghost.pickingBind}),d.React.createElement(re,{className:"ysink_palette_slabel"},"Ctrl / Meta / Cmd \u2318"),d.React.createElement("input",{className:"ysink_palette_sinput",type:"checkbox",onChange:t=>g.persist.store.keyBind.ctrlMeta=t.target.checked,checked:g.persist.ghost.keyBind.ctrlMeta,disabled:g.state.ghost.pickingBind})))},Rs=({persist:t,id:e})=>{t.ghost.keyBind||(t.store.keyBind={ctrlMeta:!0,shift:!0,code:80}),t.ghost.usageCounts||(t.store.usageCounts=new Map),Xe.default.state=Qe.nests.make({pickingBind:!1,customEntries:[]});const s=[Ze(),Qt(H),Is()];return{onUnload:()=>s.forEach(n=>n()),settings:Je.createElement(xs)}};return Rs})(cumcord.pluginData,cumcord.modules.webpack,cumcord.ui.components,cumcord.modules.common,cumcord.plugins,cumcord.ui.toasts,cumcord.ui.modals,cumcord,cumcord.dev,cumcord.utils.logger,cumcord.utils,cumcord.modules.common.React,cumcord.modules.internal);
