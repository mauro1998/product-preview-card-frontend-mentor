const he=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};he();function w(){}function fe(e){return e()}function se(){return Object.create(null)}function C(e){e.forEach(fe)}function _e(e){return typeof e=="function"}function de(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let B;function xe(e,t){return B||(B=document.createElement("a")),B.href=t,e===B.href}function be(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function L(e,t,n){e.insertBefore(t,n||null)}function z(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function h(){return m(" ")}function we(){return m("")}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ke(e){return Array.from(e.childNodes)}function A(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let O;function N(e){O=e}function $e(){if(!O)throw new Error("Function called outside component initialization");return O}function Pe(e){$e().$$.on_mount.push(e)}const M=[],ce=[],V=[],ae=[],ze=Promise.resolve();let X=!1;function Ie(){X||(X=!0,ze.then(pe))}function Y(e){V.push(e)}const W=new Set;let K=0;function pe(){const e=O;do{for(;K<M.length;){const t=M[K];K++,N(t),Ee(t.$$)}for(N(null),M.length=0,K=0;ce.length;)ce.pop()();for(let t=0;t<V.length;t+=1){const n=V[t];W.has(n)||(W.add(n),n())}V.length=0}while(M.length);for(;ae.length;)ae.pop()();X=!1,W.clear(),N(e)}function Ee(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}const D=new Set;let b;function je(){b={r:0,c:[],p:b}}function Ae(){b.r||C(b.c),b=b.p}function H(e,t){e&&e.i&&(D.delete(e),e.i(t))}function Z(e,t,n,i){if(e&&e.o){if(D.has(e))return;D.add(e),b.c.push(()=>{D.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function Me(e){e&&e.c()}function ve(e,t,n,i){const{fragment:r,on_mount:l,on_destroy:o,after_update:d}=e.$$;r&&r.m(t,n),i||Y(()=>{const a=l.map(fe).filter(_e);o?o.push(...a):C(a),e.$$.on_mount=[]}),d.forEach(Y)}function me(e,t){const n=e.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ne(e,t){e.$$.dirty[0]===-1&&(M.push(e),Ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ye(e,t,n,i,r,l,o,d=[-1]){const a=O;N(e);const c=e.$$={fragment:null,ctx:null,props:l,update:w,not_equal:r,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:se(),dirty:d,skip_bound:!1,root:t.target||a.$$.root};o&&o(c.root);let y=!1;if(c.ctx=n?n(e,t.props||{},(p,_,...k)=>{const I=k.length?k[0]:_;return c.ctx&&r(c.ctx[p],c.ctx[p]=I)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](I),y&&Ne(e,p)),_}):[],c.update(),y=!0,C(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const p=ke(t.target);c.fragment&&c.fragment.l(p),p.forEach(z)}else c.fragment&&c.fragment.c();t.intro&&H(e.$$.fragment),ve(e,t.target,t.anchor,t.customElement),pe()}N(a)}class ge{$destroy(){me(this,1),this.$destroy=w}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!be(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class Oe{constructor(t,n,i,r,l,o,d){this.type=t,this.title=n,this.description=i,this.price=r,this.discountPrice=l,this.desktopImage=o,this.mobileImage=d}}var Ce="/product-preview-card-frontend-mentor/assets/icon-cart.95795e94.svg";function ue(e){let t,n,i,r,l,o,d,a=e[0].type+"",c,y,p,_=e[0].title+"",k,I,F,S=e[0].description+"",J,ee,$,E,te,q=e[0].discountPrice+"",Q,ne,j,re,T=e[0].price+"",R,ie,x,P,oe,le,U;return{c(){t=f("div"),n=f("div"),i=h(),r=f("div"),l=h(),o=f("div"),d=f("div"),c=m(a),y=h(),p=f("h1"),k=m(_),I=h(),F=f("p"),J=m(S),ee=h(),$=f("div"),E=f("span"),te=m("$"),Q=m(q),ne=h(),j=f("span"),re=m("$"),R=m(T),ie=h(),x=f("button"),P=f("img"),le=h(),U=f("span"),U.textContent="Add to Cart",u(n,"class","preview-card-image desktop svelte-16t4x0y"),G(n,"background-image","url("+e[0].desktopImage+")"),u(r,"class","preview-card-image mobile svelte-16t4x0y"),G(r,"background-image","url("+e[0].mobileImage+")"),u(d,"class","preview-card-type svelte-16t4x0y"),u(p,"class","preview-card-title svelte-16t4x0y"),u(F,"class","preview-card-description svelte-16t4x0y"),u(E,"class","discounted-price svelte-16t4x0y"),u(j,"class","original-price svelte-16t4x0y"),u($,"class","preview-card-price svelte-16t4x0y"),xe(P.src,oe=Ce)||u(P,"src",oe),u(P,"alt","cart icon"),u(P,"class","svelte-16t4x0y"),u(x,"type","button"),u(x,"class","preview-card-button svelte-16t4x0y"),u(o,"class","preview-card-content svelte-16t4x0y"),u(t,"class","preview-card svelte-16t4x0y")},m(v,g){L(v,t,g),s(t,n),s(t,i),s(t,r),s(t,l),s(t,o),s(o,d),s(d,c),s(o,y),s(o,p),s(p,k),s(o,I),s(o,F),s(F,J),s(o,ee),s(o,$),s($,E),s(E,te),s(E,Q),s($,ne),s($,j),s(j,re),s(j,R),s(o,ie),s(o,x),s(x,P),s(x,le),s(x,U)},p(v,g){g&1&&G(n,"background-image","url("+v[0].desktopImage+")"),g&1&&G(r,"background-image","url("+v[0].mobileImage+")"),g&1&&a!==(a=v[0].type+"")&&A(c,a),g&1&&_!==(_=v[0].title+"")&&A(k,_),g&1&&S!==(S=v[0].description+"")&&A(J,S),g&1&&q!==(q=v[0].discountPrice+"")&&A(Q,q),g&1&&T!==(T=v[0].price+"")&&A(R,T)},d(v){v&&z(t)}}}function Le(e){let t,n=e[0]&&ue(e);return{c(){n&&n.c(),t=we()},m(i,r){n&&n.m(i,r),L(i,t,r)},p(i,[r]){i[0]?n?n.p(i,r):(n=ue(i),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:w,o:w,d(i){n&&n.d(i),i&&z(t)}}}function Fe(e,t,n){let{product:i}=t;return e.$$set=r=>{"product"in r&&n(0,i=r.product)},[i]}class Se extends ge{constructor(t){super(),ye(this,t,Fe,Le,de,{product:0})}}function qe(e){let t,n,i;return n=new Se({props:{product:e[1]}}),{c(){t=f("div"),Me(n.$$.fragment),u(t,"class","preview-container")},m(r,l){L(r,t,l),ve(n,t,null),i=!0},p(r,l){const o={};l&2&&(o.product=r[1]),n.$set(o)},i(r){i||(H(n.$$.fragment,r),i=!0)},o(r){Z(n.$$.fragment,r),i=!1},d(r){r&&z(t),me(n)}}}function Te(e){let t;return{c(){t=m("Loading...")},m(n,i){L(n,t,i)},p:w,i:w,o:w,d(n){n&&z(t)}}}function Be(e){let t,n,i,r;const l=[Te,qe],o=[];function d(a,c){return a[0]?0:1}return n=d(e),i=o[n]=l[n](e),{c(){t=f("main"),i.c(),u(t,"class","svelte-66g2z4")},m(a,c){L(a,t,c),o[n].m(t,null),r=!0},p(a,[c]){let y=n;n=d(a),n===y?o[n].p(a,c):(je(),Z(o[y],1,1,()=>{o[y]=null}),Ae(),i=o[n],i?i.p(a,c):(i=o[n]=l[n](a),i.c()),H(i,1),i.m(t,null))},i(a){r||(H(i),r=!0)},o(a){Z(i),r=!1},d(a){a&&z(t),o[n].d()}}}function Ge(e,t,n){let i,r;return Pe(async()=>{n(0,i=!0);const l=await(await fetch("data/product.json")).json();n(1,r=new Oe(l.type,l.title,l.description,l.price,l.discountPrice,l.desktopImage,l.mobileImage)),n(0,i=!1)}),[i,r]}class Ke extends ge{constructor(t){super(),ye(this,t,Ge,Be,de,{})}}new Ke({target:document.getElementById("app")});