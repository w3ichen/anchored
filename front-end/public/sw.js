if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/161-a7958bd4bff50796.js",revision:"a7958bd4bff50796"},{url:"/_next/static/chunks/694-d93c110ae59c07da.js",revision:"d93c110ae59c07da"},{url:"/_next/static/chunks/899-64c58a37a2c02863.js",revision:"64c58a37a2c02863"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-5035a05945ec0e6e.js",revision:"5035a05945ec0e6e"},{url:"/_next/static/chunks/pages/_app-d824534fdf577d2b.js",revision:"d824534fdf577d2b"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/deeper-269e83b75b0ada26.js",revision:"269e83b75b0ada26"},{url:"/_next/static/chunks/pages/find-c5b99124f09f2147.js",revision:"c5b99124f09f2147"},{url:"/_next/static/chunks/pages/index-1ee413fd4c6c8c8b.js",revision:"1ee413fd4c6c8c8b"},{url:"/_next/static/chunks/pages/user-6f211b8b0c0c5c3a.js",revision:"6f211b8b0c0c5c3a"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-c491b2a411a4f8fa.js",revision:"c491b2a411a4f8fa"},{url:"/_next/static/css/8b533c8af1241da3.css",revision:"8b533c8af1241da3"},{url:"/_next/static/gb-qLLVPgp8IGSRCKF24E/_buildManifest.js",revision:"188a20a022fb9ce4a2d17455f86687f5"},{url:"/_next/static/gb-qLLVPgp8IGSRCKF24E/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/gb-qLLVPgp8IGSRCKF24E/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/eleni.png",revision:"4516f667ac33a5d7db77853925294303"},{url:"/favicon.ico",revision:"8c8539e87b0b3b723a8ad353a3a4b0e7"},{url:"/full_logo.png",revision:"0e45f363cc17aeb2546b36d7fb39dd1f"},{url:"/icon-192x192.png",revision:"9252e6b1e980c62459f2eacee1ad2c9a"},{url:"/icon-256x256.png",revision:"733f0054eaa2c8faaca1d5332ff52176"},{url:"/icon-384x384.png",revision:"51fb1a5e007f4c85d426eb362bcc3d2d"},{url:"/icon-512x512.png",revision:"ebed5ad4ac90e73c7eb9b5f1428aece9"},{url:"/logan_profile.jpg",revision:"d64da3db923ccec99d0be222cfbf780a"},{url:"/logo.png",revision:"911591a859dcd5c877c6b0b171b34339"},{url:"/manifest.json",revision:"611488753d8b5c0e98535cca7a607b13"},{url:"/manush.jpg",revision:"7b097e9ec6ecda087f777f9ea2ac8f37"},{url:"/nav_anchor.png",revision:"55caee234800dc8a53c3cea55d5e1041"},{url:"/nav_profile.png",revision:"1b4c14303374cecd777b938f66c58a29"},{url:"/nav_steer.png",revision:"bbf1ec3ec6dadef4b49fcf227c83db83"},{url:"/ocean_bottom.jpg",revision:"f2c34d6395c417bfffb885cbcc75d7de"},{url:"/shah.png",revision:"78ed21742ec6bfe15c6e6553d22e1472"},{url:"/treasure_chest.png",revision:"14979f9ed259e2fa8bacb841a34a6a67"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/weichen.png",revision:"830776744c56b8c6a2da707bbd15fd81"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
