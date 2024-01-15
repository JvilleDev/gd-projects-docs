class v extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",n=>this.closeOnEscape(n))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",v);const y="modulepreload",S=function(u){return"/"+u},f={},b=function(e,n,r){let d=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");d=Promise.all(n.map(s=>{if(s=S(s),s in f)return;f[s]=!0;const a=s.endsWith(".css"),h=a?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const l=i[c];if(l.href===s&&(!a||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${h}`))return;const t=document.createElement("link");if(t.rel=a?"stylesheet":y,a||(t.as="script",t.crossOrigin=""),t.href=s,document.head.appendChild(t),a)return new Promise((c,l)=>{t.addEventListener("load",c),t.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})}))}return d.then(()=>e()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};class w extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),n=this.querySelector("button[data-close-modal]"),r=this.querySelector("dialog"),d=this.querySelector(".dialog-frame"),i=o=>{("href"in(o.target||{})||document.body.contains(o.target)&&!d.contains(o.target))&&a()},s=o=>{r.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),o?.stopPropagation(),window.addEventListener("click",i)},a=()=>r.close();e.addEventListener("click",s),e.disabled=!1,n.addEventListener("click",a),r.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",i)}),window.addEventListener("keydown",o=>{const t=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);o.metaKey===!0&&o.key==="k"?(r.open?a():s(),o.preventDefault()):o.key==="/"&&!r.open&&!t&&(s(),o.preventDefault())});let h={};try{h=JSON.parse(this.dataset.translations||"{}")}catch{}window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(t=>setTimeout(t,1)))(async()=>{const{PagefindUI:t}=await b(()=>import("./ui-core.JvLvHP02.js"),__vite__mapDeps([]));new t({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:h,showSubResults:!0})})})}}customElements.define("site-search",w);class L extends HTMLElement{#e="starlight-theme";constructor(){super(),this.#n(this.#o());const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&this.#n(this.#t(n.currentTarget.value))})}#t(e){return e==="auto"||e==="dark"||e==="light"?e:"auto"}#s(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}#n(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?this.#s():e,this.#r(e)}#r(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(this.#e,e):localStorage.removeItem(this.#e))}#o(){const e=typeof localStorage<"u"&&localStorage.getItem(this.#e);return this.#t(e)}}customElements.define("starlight-theme-select",L);class T extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=n.currentTarget.value)})}}customElements.define("starlight-lang-select",T);const k="_top";class E extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const e=[...this.querySelectorAll("a")],n=t=>{if(t instanceof HTMLHeadingElement){if(t.id===k)return!0;const c=t.tagName[1];if(c){const l=parseInt(c,10);if(l>=this.minH&&l<=this.maxH)return!0}}return!1},r=t=>{if(!t)return null;const c=t;for(;t;){if(n(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const l=r(t);if(l)return l}return r(c.parentElement)},d=t=>{for(const{isIntersecting:c,target:l}of t){if(!c)continue;const m=r(l);if(!m)continue;const g=e.find(p=>p.hash==="#"+encodeURIComponent(m.id));if(g){this.current=g;break}}},i=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let s;const a=()=>{s&&s.disconnect(),s=new IntersectionObserver(d,{rootMargin:this.getRootMargin()}),i.forEach(t=>s.observe(t))};a();const h=window.requestIdleCallback||(t=>setTimeout(t,1));let o;window.addEventListener("resize",()=>{s&&s.disconnect(),clearTimeout(o),o=setTimeout(()=>h(a),200)})}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,n=this.querySelector("summary")?.getBoundingClientRect().height||0,r=e+n+32,d=r+24,i=document.documentElement.clientHeight;return`-${r}px 0% ${d-i}px`}}customElements.define("starlight-toc",E);class x extends E{set current(e){super.current=e;const n=this.querySelector(".display-current");n&&(n.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const n=()=>{e.open=!1};e.querySelectorAll("a").forEach(r=>{r.addEventListener("click",n)}),window.addEventListener("click",r=>{e.contains(r.target)||n()}),window.addEventListener("keydown",r=>{if(r.key==="Escape"&&e.open){const d=e.contains(document.activeElement);if(n(),d){const i=e.querySelector("summary");i&&i.focus()}}})}}customElements.define("mobile-starlight-toc",x);export{b as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}