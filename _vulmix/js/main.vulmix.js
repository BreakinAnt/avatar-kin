(self.webpackChunkvulmix_app=self.webpackChunkvulmix_app||[]).push([[1],{434:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var r=n(314),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".avatar-container{background-image:url(/avatar/bgc.jpg);height:70%;position:relative;width:70%}.avatar{left:0;position:absolute;top:0}",""]);const i=o},520:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.defineVulmixConfig=function(t){return t}},537:(t,e,n)=>{"use strict";var r=n(520);e.A=(0,r.defineVulmixConfig)({imports:{enabled:!0}})},526:(t,e,n)=>{"use strict";n.d(e,{A:()=>D});var r=n(574);const o=JSON.parse('{"G":[{"name":"head","contents":[{"name":"Default","filename":"default.png","hue":0,"saturation":0,"brightness":360},{"name":"Pretty","filename":"pretty.png","hue":0,"saturation":0,"brightness":360}]},{"name":"hair","contents":[{"name":"Short","filename":"short.png","hue":0,"saturation":0,"brightness":0},{"name":"Long","filename":"long.png","hue":0,"saturation":0,"brightness":0}]},{"name":"face","contents":[{"name":"Default","filename":"default.png","hue":0,"saturation":100,"brightness":0},{"name":"Pretty","filename":"pretty.png","hue":0,"saturation":100,"brightness":0}]}],"R":[{"name":"Red","brightness":57,"hue":300,"saturation":700},{"name":"Blue berry","brightness":35,"hue":191,"saturation":970},{"name":"Golden Glow","brightness":90,"hue":325,"saturation":354},{"name":"Midnight Blue","brightness":20,"hue":150,"saturation":790},{"name":"Black","brightness":0,"hue":0,"saturation":0},{"name":"White","brightness":100,"hue":0,"saturation":0},{"name":"Deep Bronze","brightness":35,"hue":360,"saturation":973}]}');function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function l(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==i(e)?e:e+""}var c=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.index=n,this.members=[],this.active=null}return e=t,r=[{key:"from",value:function(e){var n,r=new t,o=a(e);try{for(o.s();!(n=o.n()).done;){var i=n.value;r.add(i)}}catch(t){o.e(t)}finally{o.f()}return r}}],(n=[{key:"getName",value:function(){return this.name[0].toUpperCase()+this.name.slice(1)}},{key:"getActiveFilepath",value:function(){return this.active?"/avatar/".concat(this.name,"/").concat(this.active.filename):null}},{key:"activate",value:function(t){this.active=t}},{key:"add",value:function(t){this.has(t)||this.members.push(t)}},{key:"delete",value:function(t){this.members=this.members.filter((function(e){return e!==t}))}},{key:"has",value:function(t){return this.members.includes(t)}}])&&s(e.prototype,n),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n,r}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function v(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t){var e=function(t,e){if("object"!=f(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==f(e)?e:e+""}var p=v((function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.hue=r,this.brightness=o,this.saturation=i,this.filename=n}));function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function d(t){var e=function(t,e){if("object"!=y(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==y(e)?e:e+""}var g=function(){return t=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.groups=e},(e=[{key:"add",value:function(t){this.groups.push(t)}}])&&b(t.prototype,e),n&&b(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,n}(),w={class:"avatar-container"},k=["src"],S={class:"avatar-config"},C=["onClick"],E=["onClick"],O=["onUpdate:modelValue"],j=["onUpdate:modelValue"],_=["onUpdate:modelValue"];const U={__name:"AvatarEditor",setup:function(t){var e=new g,n=(0,r.KR)(e.groups),i=(0,r.KR)(o.R);return o.G.forEach((function(t,n){var r=new c(t.name,n);t.contents.forEach((function(t,e){var n=new p(t.name,t.filename,t.hue,t.brightness,t.saturation);r.add(n),0==e&&r.activate(n)})),e.add(r)})),function(t,e){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",w,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)((0,r.R1)(n),(function(t,e){return(0,r.uX)(),(0,r.CE)("img",{key:"group-".concat(e),class:"avatar",src:t.getActiveFilepath(),style:(0,r.Tr)("\n                z-index: ".concat(t.index,";\n                filter: sepia(100%) hue-rotate(").concat(t.active.hue,"deg) brightness(").concat(t.active.brightness,"%) saturate(").concat(t.active.saturation,"%);\n            "))},null,12,k)})),128))]),(0,r.Lk)("div",S,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)((0,r.R1)(n),(function(t,n){return(0,r.uX)(),(0,r.CE)("div",{style:{"border-style":"double"},key:"group-".concat(n)},[(0,r.Lk)("p",null,(0,r.v_)(t.getName())+":",1),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.members,(function(e,n){return(0,r.uX)(),(0,r.CE)("button",{key:"feature-".concat(n),onClick:function(n){return t.activate(e)}},(0,r.v_)(e.name),9,C)})),128)),e[0]||(e[0]=(0,r.Lk)("p",null,"Color:",-1)),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)((0,r.R1)(i),(function(e,n){return(0,r.uX)(),(0,r.CE)("button",{key:"color-".concat(n),onClick:function(n){t.active.hue=e.hue,t.active.brightness=e.brightness,t.active.saturation=e.saturation}},(0,r.v_)(e.name),9,E)})),128)),e[1]||(e[1]=(0,r.eW)(" Hue:")),(0,r.bo)((0,r.Lk)("input",{type:"range","onUpdate:modelValue":function(e){return t.active.hue=e},min:"0",max:"400"},null,8,O),[[r.Jo,t.active.hue]]),e[2]||(e[2]=(0,r.eW)(" Brightness:")),(0,r.bo)((0,r.Lk)("input",{type:"range","onUpdate:modelValue":function(e){return t.active.brightness=e},min:"0",max:"200"},null,8,j),[[r.Jo,t.active.brightness]]),e[3]||(e[3]=(0,r.eW)(" Saturation:")),(0,r.bo)((0,r.Lk)("input",{type:"range","onUpdate:modelValue":function(e){return t.active.saturation=e},min:"0",max:"1000"},null,8,_),[[r.Jo,t.active.saturation]])])})),128))])],64)}}};var x=n(72),A=n.n(x),P=n(434),N={insert:"head",singleton:!1};A()(P.A,N);P.A.locals;const L=U;const T={},D=(0,n(262).A)(T,[["render",function(t,e){var n=L;return(0,r.uX)(),(0,r.Wv)(n)}]])},126:(t,e,n)=>{var r={"./404.vue":674,"./app.vue":22};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=126},780:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=780,t.exports=e},865:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=865,t.exports=e},450:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=450,t.exports=e}},t=>{t.O(0,[535],(()=>{return e=154,t(t.s=e);var e}));t.O()}]);