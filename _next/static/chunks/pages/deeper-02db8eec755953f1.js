(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531],{240:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deeper",function(){return r(7574)}])},3425:function(n,e,r){"use strict";r.d(e,{Z:function(){return h}});var t=r(5893),i=r(5616),o=r(9417),s=r(155),a=r(1233),c=r(1664),l=r.n(c);function u(){return(0,t.jsx)(i.Z,{textAlign:"center",sx:{bgcolor:"#f3fafd",p:1},children:(0,t.jsx)("img",{src:"full_logo.png",height:"50px"})})}function d(n){var e=n.href,r=n.img;return(0,t.jsx)(l(),{href:e,passHref:!0,children:(0,t.jsx)(o.Z,{sx:{display:"flex",flex:1},children:(0,t.jsx)("img",{src:r,width:"40px",height:"40px"})})})}function x(){return(0,t.jsxs)(s.Z,{sx:{width:"100%",display:"flex",bgcolor:"#f3fafd"},children:[(0,t.jsx)(d,{href:"/deeper",img:"nav_anchor.png"}),(0,t.jsx)(d,{href:"/user",img:"nav_profile.png"})]})}function h(n){var e=n.children;return(0,t.jsxs)(a.Z,{direction:"column",sx:{height:"100%"},children:[(0,t.jsx)(u,{}),(0,t.jsx)(i.Z,{height:"100%",sx:{overflowX:"hidden",overflowY:"auto"},children:e}),(0,t.jsx)(x,{})]})}},7574:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return G}});var t=r(5893),i=r(5067),o=r(6187),s=r(1680),a=r(6571),c=r(1797),l=r(2428),u=r(4666),d=r(7645),x=r(6514),h=r(5861),f=r(9417),p=r(8619),m=r(8987),j=r(9661),g=r(9953),v=r(7918),Z=r(7922),b=r(8462),y=r(7212),k=r(796),w=r(5616),S=r(5582),_=r(8032),C=r(720),A=r(9952),E=r(586),P=r(7294),T=r(3425);function z(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function N(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,o=[],s=!0,a=!1;try{for(r=r.call(n);!(s=(t=r.next()).done)&&(o.push(t.value),!e||o.length!==e);s=!0);}catch(c){a=!0,i=c}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return z(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F=[{name:"Manush",img:"manush.jpg",streak:254,activities:[{name:"Grab a coffee at Starbucks (Promoted)",points:40},{name:"Grab lunch",points:30,date:"Tomorrow 12pm"},{name:"Go for a walk",points:20}]},{name:"Eleni",img:"eleni.png",streak:198,activities:[{name:"Visit the zoo (Promoted)",points:50,date:"Tomorrow 4pm"},{name:"Take a walk",points:20}]},{name:"Weichen",img:"weichen.png",streak:20,activities:[{name:"Hop on a video call",points:20,date:"Today 8pm"},{name:"Send a text",points:5}]},{name:"Shah",img:"shah.png",streak:11,activities:[{name:"Go rock climbing",points:30},{name:"Make a quick call",points:10}]}].sort((function(n,e){return e.streak-n.streak}));function I(n){var e=n.open,r=n.onClose;return(0,t.jsxs)(u.Z,{open:e,onClose:r,children:[(0,t.jsx)(d.Z,{children:"Checking In"}),(0,t.jsxs)(x.Z,{sx:{textAlign:"center"},children:[(0,t.jsx)(h.Z,{variant:"h5"}),(0,t.jsx)(h.Z,{variant:"body1",children:"You've made it to your voyage's end. Now, tap our phones together to anchor our friendship."}),(0,t.jsx)(i.Z,{sx:{fontSize:"100pt",color:"grey"}}),(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:"treasure_chest.png",width:"200px"})]})]})}function O(n){var e=n.open,r=n.onClose;return(0,t.jsxs)(u.Z,{open:e,onClose:r,children:[(0,t.jsx)(d.Z,{children:"Suggest times to meet"}),(0,t.jsxs)(x.Z,{sx:{textAlign:"center"},children:[(0,t.jsx)(C._,{dateAdapter:E.y,children:(0,t.jsx)(A.M,{})}),(0,t.jsx)("br",{}),(0,t.jsx)(f.Z,{variant:"contained",color:"primary",fullWidth:!0,sx:{mt:2},onClick:r,children:"Send"})]})]})}function W(n){var e=n.user,r=N(P.useState(!1),2),i=r[0],l=r[1],u=N(P.useState(!1),2),d=u[0],x=u[1],w=N(P.useState(!1),2),S=w[0],_=w[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I,{open:d,onClose:function(){return x(!1)}}),(0,t.jsx)(O,{open:S,onClose:function(){return _(!1)}}),(0,t.jsxs)(p.Z,{onClick:function(){return l(!i)},children:[(0,t.jsx)(m.Z,{children:(0,t.jsx)(j.Z,{src:e.img})}),(0,t.jsx)(g.Z,{primary:e.name}),(0,t.jsx)(v.Z,{avatar:(0,t.jsx)(o.Z,{sx:{color:"white !important"}}),label:"".concat(e.streak," days"),color:e.streak>100?"warning":"default",sx:{mr:1},size:"small"}),i?(0,t.jsx)(s.Z,{}):(0,t.jsx)(a.Z,{})]}),(0,t.jsx)(Z.Z,{in:i,timeout:"auto",unmountOnExit:!0,sx:{pl:2.5,pt:1},children:(0,t.jsxs)(b.Z,{disablePadding:!0,subheader:(0,t.jsx)(h.Z,{variant:"overline",children:"Voyages"}),dense:!0,sx:{bgcolor:"rgba(255,255,255,0.8)",borderRadius:2,px:1,pb:2},children:[e.activities.map((function(n,e){return(0,t.jsxs)(y.ZP,{children:[(0,t.jsxs)(k.Z,{children:["+",n.points]}),(0,t.jsx)(g.Z,{primary:n.name,secondary:n.date}),n.date?(0,t.jsx)(f.Z,{variant:"contained",color:"success",sx:{minWidth:"fit-content"},onClick:function(){return x(!0)},children:"Check in"}):(0,t.jsx)(f.Z,{variant:"contained",color:"primary",sx:{minWidth:"fit-content"},onClick:function(){return _(!0)},children:"Setup"})]},"activity-".concat(e))})),(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(k.Z,{children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)(g.Z,{primary:"Suggest an activity"})]})]})})]})}function G(){var n=F.filter((function(n){return n.streak>100})),e=F.filter((function(n){return n.streak<=100}));return(0,t.jsxs)(T.Z,{children:[(0,t.jsx)(w.Z,{sx:{backgroundImage:"url('ocean_bottom.jpg'), linear-gradient(to bottom, #c9e1eb, #c9e1eb)",backgroundSize:"contain, cover",backgroundPosition:"bottom, center",backgroundRepeat:"no-repeat",height:"100%",width:"100%",overflowY:"auto",paddingBottom:"100px"},children:(0,t.jsxs)(S.Z,{children:[(0,t.jsx)(h.Z,{variant:"overline",fontWeight:"bold",fontSize:"13pt",children:"Dive Deeper"}),(0,t.jsx)("br",{}),(0,t.jsx)(h.Z,{variant:"overline",children:"Close Friends"}),n.map((function(n,e){return(0,t.jsx)(W,{user:n},"closeFriend-".concat(e))})),(0,t.jsx)(h.Z,{variant:"overline",children:"Friends"}),e.map((function(n,e){return(0,t.jsx)(W,{user:n},"otherFriend-".concat(e))}))]})}),(0,t.jsxs)(_.Z,{variant:"extended",sx:{position:"absolute",bottom:"70px",left:"calc(50% - 70px)",pr:2},size:"small",color:"secondary",children:[(0,t.jsx)(l.Z,{sx:{mr:1}}),"Add friend"]})]})}}},function(n){n.O(0,[899,161,694,774,888,179],(function(){return e=240,n(n.s=e);var e}));var e=n.O();_N_E=e}]);