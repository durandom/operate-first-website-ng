"use strict";(self.webpackChunkoperate_first=self.webpackChunkoperate_first||[]).push([[87],{22899:function(e,t,r){r.d(t,{A:function(){return i}});var n=r(67294),o=r(18003),a=r(65305),i=function(e){var t=e.children;return n.createElement("main",null,n.createElement(o.J,null),t,n.createElement(a.$,null))}},63955:function(e,t,r){r.r(t),r.d(t,{default:function(){return oe}});var n=r(67294),o=r(56875),a=r(1375),i=r(34468),l=r(92230),s=r(24458),c=r(47569),f=r(92025),u=r(45849),m=r(70885);var d,p,y=(d=null,[(p=(0,n.createContext)(d)).Provider,function(e){var t=(0,n.useContext)(p),r=e.split("."),o=(0,m.Z)(r,1)[0];if(!t)throw new Error("".concat(e," component was rendered outside of ").concat(o," component context"));return t}]),g=(0,m.Z)(y,2),h=g[0],b=g[1],v=r(30888);function w(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=Object.defineProperty,O=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,A=function(e,t,r){return t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},k=function(e,t){for(var r in t||(t={}))j.call(t,r)&&A(e,r,t[r]);if(O){var n,o=w(O(t));try{for(o.s();!(n=o.n()).done;){r=n.value;S.call(t,r)&&A(e,r,t[r])}}catch(a){o.e(a)}finally{o.f()}}return e},C=function(e,t){return"".concat(100/(t/e),"%")},I=function(e,t){return e?"".concat(100/(t/e),"%"):void 0};function N(e){var t=e.sizes,r=e.offsets,n=e.theme,o=e.columns,a=e.grow;return v.j1.reduce((function(e,i){return"number"==typeof t[i]&&(e["@media (min-width: ".concat(n.breakpoints[i]+1,"px)")]={flexBasis:C(t[i],o),flexShrink:0,maxWidth:a?"unset":C(t[i],o),marginLeft:I(r[i],o)}),e}),{})}var z=(0,c.k)((function(e,t){var r=t.gutter,n=t.grow,o=t.offset,a=t.offsetXs,i=t.offsetSm,l=t.offsetMd,s=t.offsetLg,c=t.offsetXl,f=t.columns,u=t.span,m=t.xs,d=t.sm,p=t.md,y=t.lg,g=t.xl;return{root:k({boxSizing:"border-box",flexGrow:n?1:0,padding:e.fn.size({size:r,sizes:e.spacing})/2,marginLeft:I(o,f),flexBasis:C(u,f),flexShrink:0,maxWidth:n?"unset":C(u,f)},N({sizes:{xs:m,sm:d,md:p,lg:y,xl:g},offsets:{xs:a,sm:i,md:l,lg:s,xl:c},theme:e,columns:f,grow:n}))}})),M=r(37697);function P(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return X(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var G=Object.defineProperty,L=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,F=function(e,t,r){return t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},Z={offset:0,offsetXs:0,offsetSm:0,offsetMd:0,offsetLg:0,offsetXl:0};var R=(0,n.forwardRef)((function(e,t){var r=(0,u.Z3)("Col",Z,e),o=r.children,a=r.span,i=r.offset,l=r.offsetXs,s=r.offsetSm,c=r.offsetMd,f=r.offsetLg,m=r.offsetXl,d=r.xs,p=r.sm,y=r.md,g=r.lg,h=r.xl,v=r.className,w=r.classNames,x=r.styles,E=(r.id,function(e,t){var r={};for(var n in e)W.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&L){var o,a=P(L(e));try{for(a.s();!(o=a.n()).done;)n=o.value,t.indexOf(n)<0&&T.call(e,n)&&(r[n]=e[n])}catch(i){a.e(i)}finally{a.f()}}return r}(r,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","className","classNames","styles","id"])),O=b("Grid.Col"),j=O.columns,S=O.gutter,A=O.grow,k=a||j,C=z({gutter:S,offset:i,offsetXs:l,offsetSm:s,offsetMd:c,offsetLg:f,offsetXl:m,xs:d,sm:p,md:y,lg:g,xl:h,grow:A,columns:j,span:k},{classNames:w,styles:x,name:"Col"}),I=C.classes,N=C.cx;return!function(e){return"number"==typeof e&&e>0&&e%1==0}(k)||k>j?null:n.createElement(M.x,function(e,t){for(var r in t||(t={}))W.call(t,r)&&F(e,r,t[r]);if(L){var n,o=P(L(t));try{for(o.s();!(n=o.n()).done;)r=n.value,T.call(t,r)&&F(e,r,t[r])}catch(a){o.e(a)}finally{o.f()}}return e}({className:N(I.root,v),ref:t},E),o)}));R.displayName="@mantine/core/Col";var B=(0,c.k)((function(e,t){var r=t.justify,n=t.align,o=t.gutter;return{root:{margin:-e.fn.size({size:o,sizes:e.spacing})/2,display:"flex",flexWrap:"wrap",justifyContent:r,alignItems:n}}}));function D(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var $=Object.defineProperty,J=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,Q=function(e,t,r){return t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},Y={gutter:"md",justify:"flex-start",align:"stretch",columns:12},q=(0,n.forwardRef)((function(e,t){var r=(0,u.Z3)("Grid",Y,e),o=r.gutter,a=r.children,i=r.grow,l=r.justify,s=r.align,c=r.columns,f=r.className,m=r.classNames,d=r.styles,p=(r.id,function(e,t){var r={};for(var n in e)_.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&J){var o,a=D(J(e));try{for(a.s();!(o=a.n()).done;)n=o.value,t.indexOf(n)<0&&H.call(e,n)&&(r[n]=e[n])}catch(i){a.e(i)}finally{a.f()}}return r}(r,["gutter","children","grow","justify","align","columns","className","classNames","styles","id"])),y=B({gutter:o,justify:l,align:s},{classNames:m,styles:d,name:"Grid"}),g=y.classes,b=y.cx;return n.createElement(h,{value:{gutter:o,grow:i,columns:c}},n.createElement(M.x,function(e,t){for(var r in t||(t={}))_.call(t,r)&&Q(e,r,t[r]);if(J){var n,o=D(J(t));try{for(o.s();!(n=o.n()).done;)r=n.value,H.call(t,r)&&Q(e,r,t[r])}catch(a){o.e(a)}finally{o.f()}}return e}({className:b(g.root,f),ref:t},p),a))}));q.Col=R,q.displayName="@mantine/core/Grid";var K=r(22888),V=r(57856),ee=(0,c.k)((function(e){return{wrapper:{padding:2*e.spacing.xl+"px "+e.spacing.xl+"px"},title:{fontFamily:"Greycliff CF, "+e.fontFamily,fontSize:36,fontWeight:900,lineHeight:1.1,marginBottom:e.spacing.md,color:"dark"===e.colorScheme?e.white:e.black}}})),te=[{icon:V.L0Z,title:n.createElement("a",{href:"https://lists.operate-first.cloud/admin/lists/community.lists.operate-first.cloud/"},"Community mailing list"),description:"for Operate First project user and contributor discussions"},{icon:V.jwx,title:n.createElement("a",{href:"https://lists.operate-first.cloud/admin/lists/announcements.lists.operate-first.cloud/"},"Announcements list"),description:"for the latest project news"},{icon:V.dCS,title:n.createElement("a",{href:"http://lists.opendev.org/cgi-bin/mailman/listinfo/openinfralabs"},"OpenInfra Labs mailing list"),description:"for those interested in open source cloud operations more broadly"},{icon:V.dvh,title:n.createElement("a",{href:"https://twitter.com/operatefirst"},"Twitter"),description:n.createElement("p",{style:{margin:0,padding:0}},"You can also find us on Twitter, or view community project demos and updates on ",n.createElement("a",{href:"https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg"},"YouTube"))}];function re(){var e=ee().classes,t=te.map((function(e){return n.createElement("div",{key:e.icon},n.createElement(f.k,{size:44,radius:"md",color:"dark"},n.createElement(e.icon,{size:26})),n.createElement(i.x,{size:"lg",mt:"sm",weight:600},e.title),n.createElement(i.x,{color:"dimmed",size:"sm"},e.description))}));return n.createElement("div",{className:e.wrapper},n.createElement(l.W,null,n.createElement(s.D,{className:e.title,order:2},"Who are we?"),n.createElement(i.x,{py:"sm"},"We are data scientists, software engineers, and DevOps professionals working within the Operate First framework on Open Source software with Open Operations and infrastructure."),n.createElement(i.x,{py:"sm"},"We are focused on solving large scale operational issues around developing intelligent applications and managing hybrid cloud systems through the application of advanced automation and machine learning."),n.createElement(i.x,{py:"sm"},"In short, ",n.createElement("b",null,"we are building an all-Open Source community cloud as the best and clear way to understand and solve common, interrelated problems, while documenting the methods and practices of running a cloud"),"."),n.createElement(s.D,{pt:"md",order:2},"Join us!"),n.createElement(i.x,{py:"md"},n.createElement("a",{href:"/getting-started"},n.createElement("b",null,"Jump to Getting Started page"))),n.createElement(i.x,{py:"sm"},"Find our code on ",n.createElement("a",{href:"https://github.com/operate-first/apps"},"GitHub"),", meet the community on Slack, and ",n.createElement("a",{href:"https://lists.operate-first.cloud/"},"join our mailing lists")," for announcements and discussions:"),n.createElement(i.x,{py:"sm"},"If you’re interested in data science, check out our data ",n.createElement("a",{href:"https://old.operate-first.cloud/data-science/projectsoverview.md"},"science projects"),". If you are more interested in site reliability engineering, we have SRE resources to help you get started!")),n.createElement(q,{gutter:80,justify:"center",style:{paddingTop:20,margin:0}},n.createElement(R,{span:12,md:7},n.createElement(K.M,{cols:2,spacing:30,breakpoints:[{maxWidth:"md",cols:1}]},t))))}var ne=r(22899),oe=function(){return n.createElement("main",null,n.createElement(ne.A,null,n.createElement(re,null),n.createElement(o.M,{pb:40},n.createElement("a",{href:"https://www.operate-first.cloud/community/README.html"},n.createElement(a.z,{color:"dark"},"Open community cloud")))))}}}]);
//# sourceMappingURL=component---src-pages-our-community-js-d9ec5560658bd6478152.js.map