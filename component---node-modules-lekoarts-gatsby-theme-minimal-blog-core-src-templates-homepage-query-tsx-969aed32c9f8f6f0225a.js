"use strict";(self.webpackChunkoperate_first=self.webpackChunkoperate_first||[]).push([[366],{1170:function(e,r,n){n.d(r,{Z:function(){return z}});var t=n(7294),a=n(5849),o=n(808),i=n(7569),c=(0,i.k)((function(e,r){var n=r.padding,t=r.first,a=r.last;return{cardSection:{display:"block",marginLeft:-1*e.fn.size({size:n,sizes:e.spacing}),marginRight:-1*e.fn.size({size:n,sizes:e.spacing}),marginTop:t?-1*e.fn.size({size:n,sizes:e.spacing}):void 0,marginBottom:a?-1*e.fn.size({size:n,sizes:e.spacing}):void 0}}})),l=n(7697);function s(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return u(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var f=Object.defineProperty,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=function(e,r,n){return r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n},b=(0,t.forwardRef)((function(e,r){var n=e,a=n.className,o=n.padding,i=void 0===o?0:o,u=n.component,f=n.first,b=n.last,v=function(e,r){var n={};for(var t in e)m.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&p){var a,o=s(p(e));try{for(o.s();!(a=o.n()).done;)t=a.value,r.indexOf(t)<0&&d.call(e,t)&&(n[t]=e[t])}catch(i){o.e(i)}finally{o.f()}}return n}(n,["className","padding","component","first","last"]),g=c({padding:i,first:f,last:b},{name:"Card"}),h=g.classes,w=g.cx;return t.createElement(l.x,function(e,r){for(var n in r||(r={}))m.call(r,n)&&y(e,n,r[n]);if(p){var t,a=s(p(r));try{for(a.s();!(t=a.n()).done;)n=t.value,d.call(r,n)&&y(e,n,r[n])}catch(o){a.e(o)}finally{a.f()}}return e}({component:u||"div",className:w(h.cardSection,a),ref:r},v))}));b.displayName="@mantine/core/CardSection";var v=(0,i.k)((function(e){return{root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white}}}));function g(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return h(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var w=Object.defineProperty,O=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,S=function(e,r,n){return r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n},k={p:"md"},z=(0,t.forwardRef)((function(e,r){var n=(0,a.Z3)("Card",k,e),i=n.component,c=n.className,l=n.p,s=n.radius,u=n.children,f=n.classNames,p=n.styles,m=function(e,r){var n={};for(var t in e)x.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&O){var a,o=g(O(e));try{for(o.s();!(a=o.n()).done;)t=a.value,r.indexOf(t)<0&&j.call(e,t)&&(n[t]=e[t])}catch(i){o.e(i)}finally{o.f()}}return n}(n,["component","className","p","radius","children","classNames","styles"]),d=v(null,{name:"Card",classNames:f,styles:p}),y=d.classes,h=d.cx,w=t.Children.toArray(u),z=w.map((function(e,r){return"object"==typeof e&&e&&"type"in e&&e.type===b?(0,t.cloneElement)(e,{padding:l,first:0===r,last:r===w.length-1}):e}));return t.createElement(o.X,function(e,r){for(var n in r||(r={}))x.call(r,n)&&S(e,n,r[n]);if(O){var t,a=g(O(r));try{for(a.s();!(t=a.n()).done;)n=t.value,j.call(r,n)&&S(e,n,r[n])}catch(o){a.e(o)}finally{a.f()}}return e}({className:h(y.root,c),radius:s,p:l,component:i||"div",ref:r},m),z)}));z.Section=b,z.displayName="@mantine/core/Card"},2888:function(e,r,n){n.d(r,{M:function(){return k}});var t=n(7294),a=n(5849),o=n(7569),i=n(2982);function c(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return l(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var s=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=function(e,r,n){return r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n},d=function(e,r){for(var n in r||(r={}))f.call(r,n)&&m(e,n,r[n]);if(u){var t,a=c(u(r));try{for(a.s();!(t=a.n()).done;){n=t.value;p.call(r,n)&&m(e,n,r[n])}}catch(o){a.e(o)}finally{a.f()}}return e},y=(0,o.k)((function(e,r){var n=r.spacing,t=r.breakpoints,a=r.cols,o=function(e,r){if(0===r.length)return r;var n="maxWidth"in r[0]?"maxWidth":"minWidth",t=(0,i.Z)(r).sort((function(r,t){return e.fn.size({size:t[n],sizes:e.breakpoints})-e.fn.size({size:r[n],sizes:e.breakpoints})}));return"minWidth"===n?t.reverse():t}(e,t).reduce((function(r,t){var a="maxWidth"in t?"max-width":"min-width",o=e.fn.size({size:"max-width"===a?t.maxWidth:t.minWidth,sizes:e.breakpoints});return r["@media (".concat(a,": ").concat(o+("max-width"===a?0:1),"px)")]={gridTemplateColumns:"repeat(".concat(t.cols,", minmax(0, 1fr))"),gap:e.fn.size({size:t.spacing||n,sizes:e.spacing})},r}),{});return{root:d({boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat(".concat(a,", minmax(0, 1fr))"),gap:e.fn.size({size:n,sizes:e.spacing})},o)}})),b=n(7697);function v(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return g(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var h=Object.defineProperty,w=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,j=function(e,r,n){return r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n},S={breakpoints:[],cols:1,spacing:"md"},k=(0,t.forwardRef)((function(e,r){var n=(0,a.Z3)("SimpleGrid",S,e),o=n.className,i=n.breakpoints,c=n.cols,l=n.spacing,s=n.children,u=n.classNames,f=n.styles,p=function(e,r){var n={};for(var t in e)O.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&w){var a,o=v(w(e));try{for(o.s();!(a=o.n()).done;)t=a.value,r.indexOf(t)<0&&x.call(e,t)&&(n[t]=e[t])}catch(i){o.e(i)}finally{o.f()}}return n}(n,["className","breakpoints","cols","spacing","children","classNames","styles"]),m=y({breakpoints:i,cols:c,spacing:l},{classNames:u,styles:f,name:"SimpleGrid"}),d=m.classes,g=m.cx;return t.createElement(b.x,function(e,r){for(var n in r||(r={}))O.call(r,n)&&j(e,n,r[n]);if(w){var t,a=v(w(r));try{for(a.s();!(t=a.n()).done;)n=t.value,x.call(r,n)&&j(e,n,r[n])}catch(o){a.e(o)}finally{a.f()}}return e}({className:g(d.root,o),ref:r},p),s)}));k.displayName="@mantine/core/SimpleGrid"},6207:function(e,r,n){n.r(r),n.d(r,{default:function(){return y}});var t=n(7294),a=n(3366),o=n(7569),i=n(5849),c=n(1170),l=n(4468),s=n(2888),u=n(8179),f=["className","link","title","description"],p=(0,o.k)((function(e){return{wrapper:{padding:2*e.spacing.xl+"px "+e.spacing.xl+"px"},card:{position:"relative",backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white},rating:{position:"absolute",top:e.spacing.xs,right:e.spacing.xs+2,pointerEvents:"none"},title:{display:"block",marginTop:e.spacing.md,marginBottom:e.spacing.xs/2},action:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.colors.gray[0]},footer:{marginTop:e.spacing.md}}}));function m(e){var r=e.className,n=e.link,o=e.title,s=e.description,u=(0,a.Z)(e,f),m=p(),d=m.classes,y=m.cx,b=((0,i.rZ)(),{href:n,rel:"noopener noreferrer"});return t.createElement(c.Z,Object.assign({withBorder:!0,radius:"md",className:y(d.card,r)},u),t.createElement(l.x,Object.assign({className:d.title,weight:500,component:"a"},b),o),t.createElement(l.x,Object.assign({size:"sm",color:"dimmed",lineClamp:4,component:"a"},b),s))}var d=function(e){var r=e.posts,n=p(),a=n.classes;n.cx;return t.createElement(u.A,null,t.createElement("div",{className:a.wrapper},t.createElement(s.M,{cols:3,mt:"md"},r.map((function(e){return t.createElement(m,{link:e.slug,title:e.title,description:e.excerpt})})))))};var y=function(e){var r=Object.assign({},e),n=r.data.allPost;return t.createElement(d,Object.assign({posts:n.nodes},r))}},3366:function(e,r,n){function t(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(r,{Z:function(){return t}})}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-969aed32c9f8f6f0225a.js.map