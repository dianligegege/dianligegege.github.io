if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>s(e,o),c={module:{uri:o},exports:t,require:l};i[o]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-027438c6.js",revision:null},{url:"assets/index-c8ac32bb.css",revision:null},{url:"assets/light_close-a5a6f240.svg",revision:null},{url:"assets/light_open-92e953b7.svg",revision:null},{url:"favicon.ico",revision:"f18be44784c0ac14e490f644fd0c95d4"},{url:"icon.png",revision:"67158c73d915482438760637e1551995"},{url:"index.html",revision:"eb0ceb476272126c5ad0978461464d74"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icon.png",revision:"67158c73d915482438760637e1551995"},{url:"manifest.webmanifest",revision:"cb65a69ed08e240263f6136b24bbf5d7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
