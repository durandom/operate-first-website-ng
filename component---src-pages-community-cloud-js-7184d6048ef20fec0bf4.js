"use strict";(self.webpackChunkoperate_first=self.webpackChunkoperate_first||[]).push([[270],{91955:function(e,t,r){r.d(t,{a:function(){return W}});var n=r(67294),o=r(45849),a=r(4942),i=(0,n.createContext)(null);var l=r(47569),c=(0,l.k)((function(e,t,r){var n=t.spacing,o=t.center,i={ref:r("itemWrapper"),display:"inline"};return{itemWrapper:i,item:{lineHeight:o?1:e.lineHeight,"&:not(:first-of-type)":{marginTop:e.fn.size({size:n,sizes:e.spacing})}},withIcon:(0,a.Z)({listStyle:"none"},"& .".concat(i.ref),{display:"inline-flex",alignItems:o?"center":"flex-start"}),itemIcon:{display:"inline-block",verticalAlign:"middle",marginRight:e.spacing.sm}}})),s=r(37697);function u(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=Object.defineProperty,p=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,b=function(e,t,r){return t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r};function h(e){var t=e,r=t.className,o=t.children,l=t.icon,f=function(e,t){var r={};for(var n in e)y.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p){var o,a=u(p(e));try{for(a.s();!(o=a.n()).done;)n=o.value,t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n])}catch(i){a.e(i)}finally{a.f()}}return r}(t,["className","children","icon"]),m=(0,n.useContext)(i)||{},h=m.classNames,v=m.styles,g=m.icon,w=m.spacing,O=m.center,S=l||g,E=c({spacing:w,center:O},{classNames:h,styles:v,name:"List"}),j=E.classes,x=E.cx;return n.createElement(s.x,function(e,t){for(var r in t||(t={}))y.call(t,r)&&b(e,r,t[r]);if(p){var n,o=u(p(t));try{for(o.s();!(n=o.n()).done;)r=n.value,d.call(t,r)&&b(e,r,t[r])}catch(a){o.e(a)}finally{o.f()}}return e}({component:"li",className:x(j.item,(0,a.Z)({},j.withIcon,S),r)},f),n.createElement("div",{className:j.itemWrapper},S&&n.createElement("span",{className:j.itemIcon},S),n.createElement("span",null,o)))}function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}h.displayName="@mantine/core/ListItem";var w=Object.defineProperty,O=Object.defineProperties,S=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,A=function(e,t,r){return t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},k=function(e,t){for(var r in t||(t={}))j.call(t,r)&&A(e,r,t[r]);if(E){var n,o=v(E(t));try{for(o.s();!(n=o.n()).done;){r=n.value;x.call(t,r)&&A(e,r,t[r])}}catch(a){o.e(a)}finally{o.f()}}return e},z=(0,l.k)((function(e,t){var r,n,o=t.withPadding,a=t.size,i=t.listStyleType;return{root:(r=k({},e.fn.fontStyles()),n={listStyleType:i,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,fontSize:e.fn.size({size:a,sizes:e.fontSizes}),lineHeight:e.lineHeight,margin:0,paddingLeft:o?e.spacing.xl:0,listStylePosition:"inside"},O(r,S(n)))}}));function I(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=Object.defineProperty,P=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,D=function(e,t,r){return t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},M={type:"unordered",size:"md",spacing:0},W=(0,n.forwardRef)((function(e,t){var r=(0,o.Z3)("List",M,e),a=r.children,l=r.type,c=r.size,u=r.listStyleType,f=r.withPadding,m=r.center,p=r.spacing,y=r.icon,d=r.className,b=r.styles,h=r.classNames,v=function(e,t){var r={};for(var n in e)T.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&P){var o,a=I(P(e));try{for(a.s();!(o=a.n()).done;)n=o.value,t.indexOf(n)<0&&Z.call(e,n)&&(r[n]=e[n])}catch(i){a.e(i)}finally{a.f()}}return r}(r,["children","type","size","listStyleType","withPadding","center","spacing","icon","className","styles","classNames"]),g=z({withPadding:f,size:c,listStyleType:u},{classNames:h,styles:b,name:"List"}),w=g.classes,O=g.cx;return n.createElement(i.Provider,{value:{classNames:h,styles:b,spacing:p,center:m,icon:y}},n.createElement(s.x,function(e,t){for(var r in t||(t={}))T.call(t,r)&&D(e,r,t[r]);if(P){var n,o=I(P(t));try{for(o.s();!(n=o.n()).done;)r=n.value,Z.call(t,r)&&D(e,r,t[r])}catch(a){o.e(a)}finally{o.f()}}return e}({component:"unordered"===l?"ul":"ol",className:O(w.root,d),ref:t},v),a))}));W.Item=h,W.displayName="@mantine/core/List"},22888:function(e,t,r){r.d(t,{M:function(){return x}});var n=r(67294),o=r(45849),a=r(47569),i=r(42982);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=function(e,t,r){return t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},y=function(e,t){for(var r in t||(t={}))f.call(t,r)&&p(e,r,t[r]);if(u){var n,o=l(u(t));try{for(o.s();!(n=o.n()).done;){r=n.value;m.call(t,r)&&p(e,r,t[r])}}catch(a){o.e(a)}finally{o.f()}}return e},d=(0,a.k)((function(e,t){var r=t.spacing,n=t.breakpoints,o=t.cols,a=function(e,t){if(0===t.length)return t;var r="maxWidth"in t[0]?"maxWidth":"minWidth",n=(0,i.Z)(t).sort((function(t,n){return e.fn.size({size:n[r],sizes:e.breakpoints})-e.fn.size({size:t[r],sizes:e.breakpoints})}));return"minWidth"===r?n.reverse():n}(e,n).reduce((function(t,n){var o="maxWidth"in n?"max-width":"min-width",a=e.fn.size({size:"max-width"===o?n.maxWidth:n.minWidth,sizes:e.breakpoints});return t["@media (".concat(o,": ").concat(a+("max-width"===o?0:1),"px)")]={gridTemplateColumns:"repeat(".concat(n.cols,", minmax(0, 1fr))"),gap:e.fn.size({size:n.spacing||r,sizes:e.spacing})},t}),{});return{root:y({boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat(".concat(o,", minmax(0, 1fr))"),gap:e.fn.size({size:r,sizes:e.spacing})},a)}})),b=r(37697);function h(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=Object.defineProperty,w=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,E=function(e,t,r){return t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},j={breakpoints:[],cols:1,spacing:"md"},x=(0,n.forwardRef)((function(e,t){var r=(0,o.Z3)("SimpleGrid",j,e),a=r.className,i=r.breakpoints,l=r.cols,c=r.spacing,s=r.children,u=r.classNames,f=r.styles,m=function(e,t){var r={};for(var n in e)O.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&w){var o,a=h(w(e));try{for(a.s();!(o=a.n()).done;)n=o.value,t.indexOf(n)<0&&S.call(e,n)&&(r[n]=e[n])}catch(i){a.e(i)}finally{a.f()}}return r}(r,["className","breakpoints","cols","spacing","children","classNames","styles"]),p=d({breakpoints:i,cols:l,spacing:c},{classNames:u,styles:f,name:"SimpleGrid"}),y=p.classes,v=p.cx;return n.createElement(b.x,function(e,t){for(var r in t||(t={}))O.call(t,r)&&E(e,r,t[r]);if(w){var n,o=h(w(t));try{for(o.s();!(n=o.n()).done;)r=n.value,S.call(t,r)&&E(e,r,t[r])}catch(a){o.e(a)}finally{o.f()}}return e}({className:v(y.root,a),ref:t},m),s)}));x.displayName="@mantine/core/SimpleGrid"},82389:function(e,t,r){r.r(t),r.d(t,{default:function(){return H}});var n=r(67294),o=(r(1597),r(54934)),a=r(598),i=r(34468),l=r(92230),c=r(24458),s=r(91955),u=r(50547),f=r(1375),m=r(45849),p=r(808),y=r(47569),d=(0,y.k)((function(e,t){var r=t.padding,n=t.first,o=t.last;return{cardSection:{display:"block",marginLeft:-1*e.fn.size({size:r,sizes:e.spacing}),marginRight:-1*e.fn.size({size:r,sizes:e.spacing}),marginTop:n?-1*e.fn.size({size:r,sizes:e.spacing}):void 0,marginBottom:o?-1*e.fn.size({size:r,sizes:e.spacing}):void 0}}})),b=r(37697);function h(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=Object.defineProperty,w=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,E=function(e,t,r){return t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},j=(0,n.forwardRef)((function(e,t){var r=e,o=r.className,a=r.padding,i=void 0===a?0:a,l=r.component,c=r.first,s=r.last,u=function(e,t){var r={};for(var n in e)O.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&w){var o,a=h(w(e));try{for(a.s();!(o=a.n()).done;)n=o.value,t.indexOf(n)<0&&S.call(e,n)&&(r[n]=e[n])}catch(i){a.e(i)}finally{a.f()}}return r}(r,["className","padding","component","first","last"]),f=d({padding:i,first:c,last:s},{name:"Card"}),m=f.classes,p=f.cx;return n.createElement(b.x,function(e,t){for(var r in t||(t={}))O.call(t,r)&&E(e,r,t[r]);if(w){var n,o=h(w(t));try{for(o.s();!(n=o.n()).done;)r=n.value,S.call(t,r)&&E(e,r,t[r])}catch(a){o.e(a)}finally{o.f()}}return e}({component:l||"div",className:p(m.cardSection,o),ref:t},u))}));j.displayName="@mantine/core/CardSection";var x=(0,y.k)((function(e){return{root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white}}}));function A(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var z=Object.defineProperty,I=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,P=function(e,t,r){return t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},T={p:"md"},Z=(0,n.forwardRef)((function(e,t){var r=(0,m.Z3)("Card",T,e),o=r.component,a=r.className,i=r.p,l=r.radius,c=r.children,s=r.classNames,u=r.styles,f=function(e,t){var r={};for(var n in e)N.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&I){var o,a=A(I(e));try{for(a.s();!(o=a.n()).done;)n=o.value,t.indexOf(n)<0&&C.call(e,n)&&(r[n]=e[n])}catch(i){a.e(i)}finally{a.f()}}return r}(r,["component","className","p","radius","children","classNames","styles"]),y=x(null,{name:"Card",classNames:s,styles:u}),d=y.classes,b=y.cx,h=n.Children.toArray(c),v=h.map((function(e,t){return"object"==typeof e&&e&&"type"in e&&e.type===j?(0,n.cloneElement)(e,{padding:i,first:0===t,last:t===h.length-1}):e}));return n.createElement(p.X,function(e,t){for(var r in t||(t={}))N.call(t,r)&&P(e,r,t[r]);if(I){var n,o=A(I(t));try{for(o.s();!(n=o.n()).done;)r=n.value,C.call(t,r)&&P(e,r,t[r])}catch(a){o.e(a)}finally{o.f()}}return e}({className:b(d.root,a),radius:l,p:i,component:o||"div",ref:t},f),v)}));Z.Section=j,Z.displayName="@mantine/core/Card";var D=r(80537),M=r(83128),W=r(22888),R=r(57856),$=[{title:"Infra",icon:R.ZJk,color:"red",url:"http://console-openshift-console.apps.moc-infra.massopen.cloud/"},{title:"Smaug",icon:R.ZJk,color:"red",url:"http://console-openshift-console.apps.smaug.na.operate-first.cloud/"},{title:"Morty",icon:R.ZJk,color:"blue",url:"https://console-openshift-console.apps.morty.emea.operate-first.cloud/"},{title:"Rick",icon:R.ZJk,color:"blue",url:"https://console-openshift-console.apps.rick.emea.operate-first.cloud/"},{title:"Balrog",icon:R.ZJk,color:"orange",url:"https://console-openshift-console.apps.balrog.aws.operate-first.cloud/"}],G=(0,y.k)((function(e){return{card:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},title:{fontFamily:"Greycliff CF, "+e.fontFamily,fontWeight:700},item:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",borderRadius:e.radius.md,height:90,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,transition:"box-shadow 150ms ease, transform 100ms ease","&:hover":{boxShadow:e.shadows.md+" !important",transform:"scale(1.05)"}}}})),H=function(){var e=G(),t=e.classes,r=e.theme,m=$.map((function(e){return n.createElement("a",{href:e.url,key:e.title,className:t.item},n.createElement(D.k,{key:e.title,className:t.item},n.createElement(e.icon,{color:r.colors[e.color][6],size:32}),n.createElement(i.x,{size:"sm",mt:7,weight:600},e.title)))}));return n.createElement("main",null,n.createElement(o.J,null),n.createElement(l.W,{pb:69},n.createElement(c.D,{order:2,my:"md"},"Op1st Community Cloud"),n.createElement(i.x,null,"The Operate First community makes use of the GitHub open source DevOps platform and integrated community management tools. The links here direct you to resources within that community space at GitHub:"),n.createElement(s.a,{my:"md"},n.createElement("a",{href:"https://www.operate-first.cloud/data-science/"},n.createElement(s.a.Item,null,"Data Science Apps")),n.createElement("a",{href:"https://www.operate-first.cloud/open-source-developers"},n.createElement(s.a.Item,null,"Open Source Developer content")),n.createElement("a",{href:"https://www.operate-first.cloud/community-handbook/sre"},n.createElement(s.a.Item,null,"SRE Operations")),n.createElement("a",{href:"https://www.operate-first.cloud/blueprints/blueprint/"},n.createElement(s.a.Item,null,"Blueprints")),n.createElement("a",{href:"https://www.operate-first.cloud/community-handbook/support/README.md"},n.createElement(s.a.Item,null,"Support"))),n.createElement(c.D,{order:2,my:"lg"},"Community Cloud Documentation"),n.createElement(u.Z,{mb:40},n.createElement("a",{href:"https://www.operate-first.cloud/apps/content/README.html"},n.createElement(f.z,{leftIcon:n.createElement(R.fy8,null),color:"dark"},"GitOps Docs"))),n.createElement(c.D,{order:2,my:"md"},"Community Cloud Clusters"),n.createElement(Z,{withBorder:!0,radius:"md",className:t.card},n.createElement(u.Z,{position:"apart"},n.createElement(i.x,{className:t.title},"Services"),n.createElement(M.e,{size:"xs",color:"dimmed",sx:{lineHeight:1}},"...")),n.createElement(W.M,{cols:3,mt:"md"},m))),n.createElement(a.$,null))}}}]);
//# sourceMappingURL=component---src-pages-community-cloud-js-7184d6048ef20fec0bf4.js.map