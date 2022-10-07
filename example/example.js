(()=>{var t,e={432:t=>{!function(e,n){const r="*",o=Object.defineProperties,s=Object.entries,i=(t,e)=>(n,r)=>(t.has(n)?t.get(n).add(r):t.set(n,(new Set).add(r)),e),a=(t,e)=>(n,o)=>(n!==r||o?((t,e,n,r)=>{if(r){const e=t.get(n);e&&(e.delete(r),0===e.size&&t.delete(n))}else t.delete(n)})(t,0,n,o):t.clear(),e),u=(t,e)=>(t,n)=>e.on(t,(function r(...o){e.off(t,r),n.apply(e,o)})),c=(t,e)=>(n,...o)=>{const s=t.get(n);return s&&s.forEach((t=>t.apply(e,o))),t.get(r)&&n!==r&&e.trigger(r,n,...o),e};t.exports=function(t){const e=new Map;return o(t=t||{},s({on:i,off:a,one:u,trigger:c}).reduce(((n,[r,o])=>(n[r]={value:o(e,t),enumerable:!1,writable:!1,configurable:!1},n)),{})),t}}("undefined"!=typeof window&&window)},107:(t,e,n)=>{"use strict";const r={EACH:0,IF:1,SIMPLE:2,TAG:3,SLOT:4};n(155);function o(t,e){return typeof t===e}function s(t){const e=t.ownerSVGElement;return!!e||null===e}function i(t){return"template"===t.tagName.toLowerCase()}function a(t){return o(t,"function")}function u(t){return!c(t)&&t.constructor===Object}function c(t){return null==t}const l=new Map,h=Symbol("riot-component"),p=new Set,d="mount",m="update",f="unmount",b="shouldUpdate",v="onBeforeMount",g="onMounted",y="onBeforeUpdate",x="onUpdated",O="onBeforeUnmount",w="onUnmounted",T="props",N="state",E="slots",j="root",C=Symbol("pure"),A=Symbol("is_updating"),M=Symbol("parent"),k=Symbol("attributes"),S=Symbol("template");function _(t){return t.replace(/-(\w)/g,((t,e)=>e.toUpperCase()))}function L(t){for(;t.firstChild;)t.removeChild(t.firstChild)}const I=t=>t&&t.parentNode&&t.parentNode.removeChild(t),D=(t,e)=>e&&e.parentNode&&e.parentNode.insertBefore(t,e),U={ATTRIBUTE:0,EVENT:1,TEXT:2,VALUE:3};function P(){return this}function B(t){return a(t)?t.prototype&&t.prototype.constructor?new t:t():t}function $(t){throw new Error(t)}function z(t){const e=new Map,n=n=>(e.has(n)||e.set(n,t.call(this,n)))&&e.get(n);return n.cache=e,n}function F(t){return t.reduce(((t,e)=>{const{value:n,type:r}=e;switch(!0){case!e.name&&0===r:return{...t,...n};case 3===r:t.value=e.value;break;default:t[_(e.name)]=e.value}return t}),{})}function V(t,e,n,r={}){return Object.defineProperty(t,e,{value:n,enumerable:!1,writable:!1,configurable:!0,...r}),t}function H(t,e,n){return Object.entries(e).forEach((([e,r])=>{V(t,e,r,n)})),t}function K(t,e){return Object.entries(e).forEach((([e,n])=>{t[e]||(t[e]=n)})),t}
/* Riot WIP, @license MIT */
const X=Object.freeze({[d]:P,[m]:P,[f]:P}),q=Object.assign({},X,{clone:P,createDOM:P}),G=Symbol(),R=Symbol();function Q(t){const e=t.dom.cloneNode(!0),{head:n,tail:r}=function(){const t=document.createTextNode(""),e=document.createTextNode("");return t[G]=!0,e[R]=!0,{head:t,tail:e}}();return{avoidDOMInjection:!0,fragment:e,head:n,tail:r,children:[n,...Array.from(e.childNodes),r]}}const W=Symbol("unmount"),Y={nodes:[],mount(t,e){return this.update(t,e)},update(t,e){const{placeholder:n,nodes:r,childrenMap:o}=this,s=t===W?null:this.evaluate(t),i=s?Array.from(s):[],{newChildrenMap:a,batches:u,futureNodes:c}=function(t,e,n,r){const{condition:o,template:s,childrenMap:i,itemName:a,getKey:u,indexName:c,root:l,isTemplateTag:h}=r,p=new Map,d=[],m=[];return t.forEach(((t,r)=>{const f=function(t,{itemName:e,indexName:n,index:r,item:o}){V(t,e,o),n&&V(t,n,r);return t}(Object.create(e),{itemName:a,indexName:c,index:r,item:t}),b=u?u(f):r,v=i.get(b),g=[];if(function(t,e){return!!t&&!t(e)}(o,f))return;const y=!v,x=v?v.template:s.clone(),O=x.el||l.cloneNode(),w=h&&y?Q(x):x.meta;y?d.push((()=>x.mount(O,f,n,w))):d.push((()=>x.update(f,n))),h?g.push(...w.children):g.push(O),i.delete(b),m.push(...g),p.set(b,{nodes:g,template:x,context:f,index:r})})),{newChildrenMap:p,batches:d,futureNodes:m}}(i,t,e,this);return((t,e,n,r)=>{const o=e.length;let s=t.length,i=o,a=0,u=0,c=null;for(;a<s||u<i;)if(s===a){const t=i<o?u?n(e[u-1],-0).nextSibling:n(e[i-u],0):r;for(;u<i;)D(n(e[u++],1),t)}else if(i===u)for(;a<s;)c&&c.has(t[a])||I(n(t[a],-1)),a++;else if(t[a]===e[u])a++,u++;else if(t[s-1]===e[i-1])s--,i--;else if(t[a]===e[i-1]&&e[u]===t[s-1]){const r=n(t[--s],-1).nextSibling;D(n(e[u++],1),n(t[a++],-1).nextSibling),D(n(e[--i],1),r),t[s]=e[i]}else{if(!c){c=new Map;let t=u;for(;t<i;)c.set(e[t],t++)}if(c.has(t[a])){const r=c.get(t[a]);if(u<r&&r<i){let o=a,p=1;for(;++o<s&&o<i&&c.get(t[o])===r+p;)p++;if(p>r-u){const o=n(t[a],0);for(;u<r;)D(n(e[u++],1),o)}else l=n(e[u++],1),(h=n(t[a++],-1))&&h.parentNode&&h.parentNode.replaceChild(l,h)}else a++}else I(n(t[a++],-1))}var l,h})(r,c,function(t,e){return(n,r)=>{if(r<0){const n=t[t.length-1];if(n){const{template:r,nodes:o,context:s}=n;o.pop(),o.length||(t.pop(),r.unmount(s,e,null))}}return n}}(Array.from(o.values()),e),n),u.forEach((t=>t())),this.childrenMap=a,this.nodes=c,this},unmount(t,e){return this.update(W,e),this}};const Z={mount(t,e){return this.update(t,e)},update(t,e){const n=!!this.evaluate(t),r=!this.value&&n,o=this.value&&!n,s=()=>{const n=this.node.cloneNode();D(n,this.placeholder),this.template=this.template.clone(),this.template.mount(n,t,e)};switch(!0){case r:s();break;case o:this.unmount(t);break;default:n&&this.template.update(t,e)}return this.value=n,this},unmount(t,e){return this.template.unmount(t,e,!0),this}};const J="undefined"==typeof Element?{}:Element.prototype,tt=z((t=>J.hasOwnProperty(t)));function et(t,{name:e},n,r){if(!e)return r&&function(t,e,n){const r=e?Object.keys(e):[];Object.keys(n).filter((t=>!r.includes(t))).forEach((e=>t.removeAttribute(e)))}(t,n,r),void(n&&function(t,e){Object.entries(e).forEach((([e,n])=>et(t,{name:e},n)))}(t,n));!tt(e)&&(function(t){return o(t,"boolean")}(n)||u(n)||a(n))&&(t[e]=n),!function(t){return!t&&0!==t}(n)?function(t){return!0===t||["string","number"].includes(typeof t)}(n)&&t.setAttribute(e,function(t,e){return!0===e?t:e}(e,n)):t.removeAttribute(e)}const nt=/^on/,rt={handleEvent(t){this[t.type](t)}},ot=new WeakMap;function st(t){return c(t)?"":t}const it=(t,e)=>{const n=t.childNodes[e];if(n.nodeType===Node.COMMENT_NODE){const e=document.createTextNode("");return t.replaceChild(e,n),e}return n};const at={0:et,1:function(t,{name:e},n){const r=e.replace(nt,""),o=ot.get(t)||(t=>{const e=Object.create(rt);return ot.set(t,e),e})(t),[s,i]=(t=>Array.isArray(t)?t:[t,!1])(n),a=o[r],u=s&&!a;a&&!s&&t.removeEventListener(r,o),u&&t.addEventListener(r,o,i),o[r]=s},2:function(t,e,n){t.data=st(n)},3:function(t,e,n){t.value=st(n)}},ut={mount(t){return this.value=this.evaluate(t),ct(this,this.value),this},update(t){const e=this.evaluate(t);return this.value!==e&&(ct(this,e),this.value=e),this},unmount(){return 1===this.type&&ct(this,null),this}};function ct(t,e){return at[t.type](t.node,t,e,t.value)}function lt(t,e){return{...ut,...e,node:2===e.type?it(t,e.childNodeIndex):t}}const ht=(t,e)=>t[M]||e,pt={attributes:[],getTemplateScope(t,e){return function(t,e,n){if(!t||!t.length)return n;const r=t.map((t=>({...t,value:t.evaluate(e)})));return Object.assign(Object.create(n||null),F(r))}(this.attributes,t,e)},mount(t,e){const n=!!t.slots&&t.slots.find((({id:t})=>t===this.name)),{parentNode:r}=this.node,o=ht(t,e);return this.template=n&&xt(n.html,n.bindings).createDOM(r),this.template&&(L(this.node),this.template.mount(this.node,this.getTemplateScope(t,o),o),this.template.children=Array.from(this.node.childNodes)),dt(this.node),I(this.node),this},update(t,e){if(this.template){const n=ht(t,e);this.template.update(this.getTemplateScope(t,n),n)}return this},unmount(t,e,n){return this.template&&this.template.unmount(this.getTemplateScope(t,e),null,n),this}};function dt(t){const e=t&&t.firstChild;e&&(D(e,t),dt(t))}function mt(t){return t.reduce(((t,{bindings:e})=>t.concat(e)),[])}const ft={mount(t){return this.update(t)},update(t,e){const n=this.evaluate(t);return n&&n===this.name?this.tag.update(t):(this.unmount(t,e,!0),this.name=n,this.tag=function(t,e=[],n=[]){return t?t({slots:e,attributes:n}):xt(function(t){return t.reduce(((t,e)=>t+e.html),"")}(e),[...mt(e),{expressions:n.map((t=>({type:0,...t})))}])}(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,t)),this},unmount(t,e,n){return this.tag&&this.tag.unmount(n),this}};const bt={1:function(t,{evaluate:e,template:n}){const r=document.createTextNode("");return D(r,t),I(t),{...Z,node:t,evaluate:e,placeholder:r,template:n.createDOM(t)}},2:function(t,{expressions:e}){return{...(n=e.map((e=>lt(t,e))),r=["mount","update","unmount"],r.reduce(((t,e)=>({...t,[e]:t=>n.map((n=>n[e](t)))&&o})),{}))};var n,r,o},0:function(t,{evaluate:e,condition:n,itemName:r,indexName:o,getKey:s,template:a}){const u=document.createTextNode(""),c=t.cloneNode();return D(u,t),I(t),{...Y,childrenMap:new Map,node:t,root:c,condition:n,evaluate:e,isTemplateTag:i(c),template:a.createDOM(t),getKey:s,indexName:o,itemName:r,placeholder:u}},3:function(t,{evaluate:e,getComponent:n,slots:r,attributes:o}){return{...ft,node:t,evaluate:e,slots:r,attributes:o,getComponent:n}},4:function(t,{name:e,attributes:n}){return{...pt,attributes:n,node:t,name:e}}};function vt(t,e){return t.map((t=>2===t.type?{...t,childNodeIndex:t.childNodeIndex+e}:t))}function gt(t,e){return s(t)?function(t,e){return e.ownerDocument.importNode((new window.DOMParser).parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${t}</svg>`,"application/xml").documentElement,!0)}(e,t):function(t,e){const n=i(e)?e:document.createElement("template");return n.innerHTML=t,n.content}(e,t)}const yt={createDOM(t){return this.dom=this.dom||function(t,e){return e&&("string"==typeof e?gt(t,e):e)}(t,this.html)||document.createDocumentFragment(),this},mount(t,e,n,r={}){t||$("Please provide DOM node to mount properly your template"),this.el&&this.unmount(e);const{fragment:o,children:a,avoidDOMInjection:u}=r,{parentNode:c}=a?a[0]:t,l=i(t),h=l?function(t,e,n){const r=Array.from(t.childNodes);return Math.max(r.indexOf(e),r.indexOf(n.head)+1,0)}(c,t,r):null;this.createDOM(t);const p=o||this.dom.cloneNode(!0);return this.el=l?c:t,this.children=l?a||Array.from(p.childNodes):null,!u&&p&&function(t,e){switch(!0){case s(t):n=e,t.replaceChildren(...n.childNodes);break;case i(t):t.parentNode.replaceChild(e,t);break;default:t.appendChild(e)}var n}(t,p),this.bindings=this.bindingsData.map((t=>function(t,e,n){const{selector:r,type:o,redundantAttribute:s,expressions:i}=e,a=r?t.querySelector(r):t;s&&a.removeAttribute(s);const u=i||[];return(bt[o]||bt[2])(a,{...e,expressions:n&&!r?vt(u,n):u})}(this.el,t,h))),this.bindings.forEach((t=>t.mount(e,n))),this.meta=r,this},update(t,e){return this.bindings.forEach((n=>n.update(t,e))),this},unmount(t,e,n=!1){const r=this.el;if(!r)return this;switch(this.bindings.forEach((r=>r.unmount(t,e,n))),!0){case r[C]||null===n:break;case Array.isArray(this.children):!function(t){for(let e=0;e<t.length;e++)I(t[e])}(this.children);break;case!n:L(r);break;case!!n:I(r)}return this.el=null,this},clone(){return{...this,meta:{},el:null}}};function xt(t,e=[]){return{...yt,html:t,bindingsData:e}}
/* Riot WIP, @license MIT */
function Ot(t,e){const n=
/* Riot WIP, @license MIT */
function(t){return void 0===t&&(t={}),Object.entries(B(t)).reduce(((t,e)=>{let[n,r]=e;var o;return t[(o=n,o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())]=Vt(r),t}),{})}(e.exports?e.exports.components:{});return t(xt,U,r,(t=>t===e.name?Ht(e):n[t]||l.get(t)))}
/* Riot WIP, @license MIT */
const wt=(t,e)=>t[h]=e;
/* Riot WIP, @license MIT */
function Tt(t){return[d,m,f].reduce(((e,n)=>(e[n]=t(n),e)),{})}function Nt(t){return Array.isArray(t)?t:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&"number"==typeof t.length?Array.from(t):[t]}function Et(t,e){return Nt("string"==typeof t?(e||document).querySelectorAll(t):t)}
/* Riot WIP, @license MIT */
const jt=Object.freeze({$(t){return Et(t,this.root)[0]},$$(t){return Et(t,this.root)}}),Ct=Object.freeze({[b]:P,[v]:P,[g]:P,[y]:P,[x]:P,[O]:P,[w]:P}),At=t=>1===t.length?t[0]:t;function Mt(t,e,n){const r="string"==typeof e?[e]:e;return At(Nt(t).map((t=>At(r.map((e=>t[n](e)))))))}function kt(t,e,n){const r="object"==typeof e?e:{[e]:n},o=Object.keys(r);return Nt(t).forEach((t=>{o.forEach((e=>t.setAttribute(e,r[e])))})),t}function St(t,e){return Mt(t,e,"getAttribute")}const _t=new Map,Lt=()=>It||(kt(It=Et("style[riot]")[0]||document.createElement("style"),"type","text/css"),It.parentNode||document.head.appendChild(It),It);var It;const Dt={CSS_BY_NAME:_t,add(t,e){return _t.has(t)||(_t.set(t,e),this.inject()),this},inject(){return Lt().innerHTML=[..._t.values()].join("\n"),this},remove(t){return _t.has(t)&&(_t.delete(t),this.inject()),this}};function Ut(t,...e){return(...n)=>(n=[...e,...n]).length<t.length?Ut(t,...n):t(...n)}
/* Riot WIP, @license MIT */
function Pt(t){return St(t,"is")||t.tagName.toLowerCase()}
/* Riot WIP, @license MIT */
function Bt(t,e){return Object.assign({},t,B(e))}
/* Riot WIP, @license MIT */
function $t(t,e){return void 0===e&&(e={}),Object.assign({},function(t){return Array.from(t.attributes).reduce(((t,e)=>(t[_(e.name)]=e.value,t)),{})}(t),B(e))}
/* Riot WIP, @license MIT */
function zt(t,e){let{slots:n,attributes:r,props:o}=e;return s=
/* Riot WIP, @license MIT */
function(t){return[...p].reduce(((t,e)=>e(t)||t),t)}(H(u(t)?Object.create(t):t,{mount(e,s,i){return void 0===s&&(s={}),V(e,C,!1),this[M]=i,this[k]=
/* Riot WIP, @license MIT */
function(t,e){void 0===e&&(e=[]);const n=e.map((e=>lt(t,e))),r={};return Object.assign(r,Object.assign({expressions:n},Tt((t=>e=>(n.forEach((n=>n[t](e))),r)))))}(e,r).mount(i),V(this,T,Object.freeze(Object.assign({},$t(e,o),F(this[k].expressions)))),this.state=Bt(this.state,s),this[S]=this.template.createDOM(e).clone(),wt(e,this),t.name&&
/* Riot WIP, @license MIT */
function(t,e){Pt(t)!==e&&kt(t,"is",e)}(e,t.name),V(this,j,e),V(this,E,n),this.onBeforeMount(this.props,this.state),this[S].mount(e,this,i),this.onMounted(this.props,this.state),this},update(t,e){void 0===t&&(t={}),e&&(this[M]=e,this[k].update(e));const n=F(this[k].expressions);if(!1!==this.shouldUpdate(n,this.props))return V(this,T,Object.freeze(Object.assign({},this.props,n))),this.state=Bt(this.state,t),this.onBeforeUpdate(this.props,this.state),this[A]||(this[A]=!0,this[S].update(this,this[M])),this.onUpdated(this.props,this.state),this[A]=!1,this},unmount(t){return this.onBeforeUnmount(this.props,this.state),this[k].unmount(),this[S].unmount(this,this[M],null===t?null:!t),this.onUnmounted(this.props,this.state),this}})),Object.keys(t).filter((e=>a(t[e]))).forEach((t=>{s[t]=s[t].bind(s)})),s;var s}
/* Riot WIP, @license MIT */
function Ft(t){let{css:e,template:n,componentAPI:r,name:o}=t;return e&&o&&Dt.add(o,e),Ut(zt)(H(K(r,Object.assign({},Ct,{[T]:{},[N]:{}})),Object.assign({[E]:null,[j]:null},jt,{name:o,css:e,template:n})))}
/* Riot WIP, @license MIT */
function Vt(t){const{css:e,template:n,exports:r,name:o}=t,s=n?Ot(n,t):q;return t=>{let{slots:i,attributes:a,props:u}=t;if(r&&r[C])
/* Riot WIP, @license MIT */return function(t,e){let{slots:n,attributes:r,props:o,css:s,template:i}=e;i&&$("Pure components can not have html"),s&&$("Pure components do not have css");const a=K(t({slots:n,attributes:r,props:o}),X);return Tt((t=>function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(t===d){const[t]=n;V(t,C,!0),wt(t,a)}return a[t](...n),a}))}(r,{slots:i,attributes:a,props:u,css:e,template:n});const c=B(r)||{},l=Ft({css:e,template:s,componentAPI:c,name:o})({slots:i,attributes:a,props:u});return{mount:(t,e,n)=>l.mount(t,n,e),update:(t,e)=>l.update(e,t),unmount:t=>l.unmount(t)}}}const Ht=z(Vt);
/* Riot WIP, @license MIT */
function Kt(t,e){let{css:n,template:r,exports:o}=e;return l.has(t)&&$(`The component "${t}" was already registered`),l.set(t,Vt({name:t,css:n,template:r,exports:o})),l}
/* Riot WIP, @license MIT */
function Xt(t,e,n){return Et(t).map((t=>
/* Riot WIP, @license MIT */
function(t,e,n,r){const o=n||Pt(t);return l.has(o)||$(`The component named "${o}" was never registered`),l.get(o)({props:e,slots:r}).mount(t)}(t,e,n)))}var qt=n(432);
/**
*  store for confirm
*
*  @author Björn Hase
*  @license http://opensource.org/licenses/MIT The MIT License
*  @link https://gitea.node001.net/tiny-components/confirm
 *
 */const Gt=n.n(qt)()({confirm:function(t){this.off("confirm"),this.on("confirm",(function(){t()}))},cancel:function(t){this.off("cancel"),this.on("cancel",(function(){t()}))}}),Rt={css:null,exports:{state:{hasConfirmed:!1,hasCanceled:!1},handleOpen(){Gt.trigger("open",{title:"Question",content:"Are you sure?"}),Gt.confirm((()=>{this.state.hasConfirmed=!0,this.update(),setTimeout((()=>{this.state.hasConfirmed=!1,this.update()}),5e3)})),Gt.cancel((()=>{this.state.hasCanceled=!0,this.update(),setTimeout((()=>{this.state.hasCanceled=!1,this.update()}),5e3)}))}},template:(t,e,n,r)=>t('<div><button expr5="expr5" class="button button--outline button--danger" type="button"><svg class="icon fill-danger m-right-3"><use xlink:href="symbol-defs.svg#icon-close"/></svg>\n            Click me!\n        </button><div expr6="expr6" class="color-success"></div><div expr7="expr7" class="color-danger"></div></div>',[{redundantAttribute:"expr5",selector:"[expr5]",expressions:[{type:e.EVENT,name:"onclick",evaluate:t=>()=>{t.handleOpen()}}]},{type:n.IF,evaluate:t=>t.state.hasConfirmed,redundantAttribute:"expr6",selector:"[expr6]",template:t("\n            Ok!\n        ",[])},{type:n.IF,evaluate:t=>t.state.hasCanceled,redundantAttribute:"expr7",selector:"[expr7]",template:t("\n            Ok! But why?!\n        ",[])}]),name:"tiny-confirm"};Kt("tiny-confirm",{css:null,exports:{state:{isOpen:!1,transitionClass:!1,content:null},onMounted(){Gt.on("open",(t=>{this.open(t)})),this.root.addEventListener("transitionend",(t=>{this.state.transitionClass=!1,this.update()}))},open(t){this.state.transitionClass="modal-wrap--transition-open",this.state.isOpen=!0,t.title&&(this.state.title=t.title),t.content&&(this.state.content=t.content),this.update()},close(){this.state.transitionClass="modal-wrap--transition-close",this.state.isOpen=!1,this.state.content=null,this.update()},handleCancel(){Gt.trigger("cancel"),this.close()},handleConfirm(){Gt.trigger("confirm"),this.close()},getModalClasses(){const t=["tiny-modal modal"];return this.state.isOpen&&t.push("modal--open"),this.state.transitionClass&&t.push(this.state.transitionClass),t.join(" ")}},template:(t,e,n,r)=>t('<div expr0="expr0"><div class="modal__inner"><div class="modal__title center"><svg class="icon fill-text-contrast"><use xlink:href="symbol-defs.svg#icon-circle-warning"/></svg><div expr1="expr1"></div></div><div expr2="expr2" class="modal__body center"></div><div class="modal__footer"><button expr3="expr3" class="button button--outline button--danger" type="button"><svg class="icon fill-danger"><use xlink:href="symbol-defs.svg#icon-close"/></svg></button><button expr4="expr4" class="button button--outline button--success" type="button"><svg class="icon fill-success"><use xlink:href="symbol-defs.svg#icon-check"/></svg></button></div></div></div>',[{redundantAttribute:"expr0",selector:"[expr0]",expressions:[{type:e.ATTRIBUTE,name:"class",evaluate:t=>t.getModalClasses()}]},{type:n.IF,evaluate:t=>t.state.title,redundantAttribute:"expr1",selector:"[expr1]",template:t(" ",[{expressions:[{type:e.TEXT,childNodeIndex:0,evaluate:t=>[t.state.title].join("")}]}])},{type:n.IF,evaluate:t=>t.state.content,redundantAttribute:"expr2",selector:"[expr2]",template:t(" ",[{expressions:[{type:e.TEXT,childNodeIndex:0,evaluate:t=>[t.state.content].join("")}]}])},{redundantAttribute:"expr3",selector:"[expr3]",expressions:[{type:e.EVENT,name:"onclick",evaluate:t=>()=>{t.handleCancel()}}]},{redundantAttribute:"expr4",selector:"[expr4]",expressions:[{type:e.EVENT,name:"onclick",evaluate:t=>()=>{t.handleConfirm()}}]}]),name:"tiny-confirm"}),Kt("example-confirm",Rt),Xt("tiny-confirm"),Xt("example-confirm")},37:()=>{},155:t=>{var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var a,u=[],c=!1,l=-1;function h(){c&&a&&(c=!1,a.length?u=a.concat(u):l=-1,u.length&&p())}function p(){if(!c){var t=i(h);c=!0;for(var e=u.length;e;){for(a=u,u=[];++l<e;)a&&a[l].run();l=-1,e=u.length}a=null,c=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function m(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new d(t,e)),1!==u.length||c||i(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var s=n[t]={exports:{}};return e[t](s,s.exports,r),s.exports}r.m=e,t=[],r.O=(e,n,o,s)=>{if(!n){var i=1/0;for(l=0;l<t.length;l++){for(var[n,o,s]=t[l],a=!0,u=0;u<n.length;u++)(!1&s||i>=s)&&Object.keys(r.O).every((t=>r.O[t](n[u])))?n.splice(u--,1):(a=!1,s<i&&(i=s));if(a){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[n,o,s]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={268:0,908:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,s,[i,a,u]=n,c=0;if(i.some((e=>0!==t[e]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var l=u(r)}for(e&&e(n);c<i.length;c++)s=i[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(l)},n=self.webpackChunk_tiny_components_confirm=self.webpackChunk_tiny_components_confirm||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.O(void 0,[908],(()=>r(107)));var o=r.O(void 0,[908],(()=>r(37)));o=r.O(o)})();