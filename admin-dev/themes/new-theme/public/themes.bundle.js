!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=307)}({244:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),u=window.$,i=function(){function n(){var e=this;return r(this,n),u(document).on("click",".js-reset-theme-layouts-btn",function(n){return e._handleResetting(n)}),{}}return o(n,[{key:"_handleResetting",value:function(n){var e=u(n.currentTarget),t=u("<form>",{action:e.data("submit-url"),method:"POST"}).append(u("<input>",{name:"token",value:e.data("csrf-token"),type:"hidden"}));t.appendTo("body"),t.submit()}}]),n}();e.a=i},307:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(244);(0,window.$)(function(){new r.a})}});