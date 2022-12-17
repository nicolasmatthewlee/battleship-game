!function(){"use strict";var t={917:function(t,e,n){var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([t.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]),e.Z=a},28:function(t,e,n){var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Secular+One&display=swap);"]),a.push([t.id,":root {\n    --pink: #f72585;\n    --blue: #3a86ff;\n    --dark-blue: #0353a4;\n    --light-gray: #e9ecef;\n    --gray: #696d7d\n}\n\ndiv {\n    font-family: 'Secular One','sans-serif';\n    font-size: 30px;\n    text-align: center;\n}\n\nbutton {\n    font-family: 'Secular One','sans-serif';\n    font-size: 25px;\n\n    width: 200px;\n    height: 50px;\n\n    background-color: white;\n    border: 3px solid black;\n    border-radius: 5px;\n}\n\n.title-label {\n    font-family: 'Secular One','sans-serif';\n    font-size: 50px;\n    text-align: center;\n\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n\nbutton:hover {\n    background-color: var(--light-gray);\n}\n\n/* displayStart */\n\n.play-button-container {\n    display: flex;\n    justify-content: center;\n}\n\n/* displayPlaceShip */\n\n.main-container {\n    display: flex;\n    padding: 0px 30px 0px 30px;\n    gap: 30px;\n    justify-content: center;\n}\n\n.placement-grid {\n    position: relative;\n    min-height: 300px;\n    min-width: 300px;\n\n    display: grid;\n    gap: 2px;\n    background-color: var(--dark-blue);\n    padding: 2px;\n}\n\n.placement-grid>div.active {\n    background-color: red;\n}\n\n.placement-grid>div.occupied {\n    background-color: var(--gray);\n    outline: 2px solid black;\n}\n\n.placement-grid>div {\n    background-color: var(--blue);\n}\n\n.rotate-button {\n    position: absolute;\n    bottom: -80px;\n    left: 50px;\n}\n\n/* displayAttack */\n\n.board-container {\n    display: flex;\n    gap: 30px;\n    justify-content: center;\n}\n\n.player-board , .enemy-board {\n    position: relative;\n    height: 300px;\n    width: 300px;\n\n    display: grid;\n    gap: 2px;\n    padding: 2px;\n}\n\n.player-board,.enemy-board {\n    background-color: var(--dark-blue);\n}\n\n.player-board>div , .enemy-board>div {\n    background-color: var(--blue);\n}\n\n.player-board>div.occupied {\n    background-color: var(--gray);\n    outline: 2px solid black;\n}\n\n.enemy-board>div:hover {\n    background-color: red;\n}\n\n.enemy-board>div.hit , .player-board>div.hit {\n    background-color: red;\n    outline: 2px solid black;\n}\n\n.enemy-board>div.miss , .player-board>div.miss {\n    background-color: var(--dark-blue);\n}\n\ndiv.board-label {\n    position: absolute;\n    bottom: -60px;\n    left: 50px;\n    width: 200px;\n    background-color: white;\n}\n\ndiv.board-label:hover {\n    background-color: white;\n}",""]),e.Z=a},645:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var u=0;u<t.length;u++){var s=[].concat(t[u]);r&&a[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),e.push(s))}},e}},81:function(t){t.exports=function(t){return t[1]}},379:function(t){var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},a=[],l=0;l<t.length;l++){var c=t[l],u=r.base?c[0]+r.base:c[0],s=o[u]||0,d="".concat(u," ").concat(s);o[u]=s+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var y=i(f,r);r.byIndex=l,e.splice(l,0,{identifier:d,updater:y,references:1})}a.push(d)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var l=n(o[a]);e[l].references--}for(var c=r(t,i),u=0;u<o.length;u++){var s=n(o[u]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}o=c}}},569:function(t){var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(t){t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.nc=void 0,function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,o=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===t(o)?o:String(o)),i)}var o}var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.length=e,this.hits=0,this.sunk=!1,this.placed=!1}var n,r;return n=t,(r=[{key:"hit",value:function(){this.hits++,this.isSunk()&&(this.sunk=!0)}},{key:"isSunk",value:function(){return this.hits==this.length}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.grid=Array(e).fill().map((function(){return Array(e).fill(0)})),this.ships=[new r(5),new r(4),new r(3),new r(2)]}var e,n;return e=t,n=[{key:"coordinatesEmpty",value:function(t){var e,n=o(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(0!=this.grid[r[0]][r[1]])return!1}}catch(t){n.e(t)}finally{n.f()}return!0}},{key:"placeShip",value:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(this.coordinatesEmpty(t)){var r,i=o(this.ships);try{for(i.s();!(r=i.n()).done;){var a=r.value;a.length==e&&(a.placed=!0)}}catch(t){i.e(t)}finally{i.f()}var l,c=o(t);try{for(c.s();!(l=c.n()).done;){var u=l.value;this.grid[u[0]][u[1]]=e}}catch(t){c.e(t)}finally{c.f()}}n&&this.onPlaceShip()}},{key:"attackIsValid",value:function(t,e){return"hit"!=this.grid[t][e]&&"miss"!=this.grid[t][e]}},{key:"receiveAttack",value:function(t,e){0!=this.grid[t][e]?(this.getShip(this.grid[t][e]).hit(),this.grid[t][e]="hit"):this.grid[t][e]="miss"}},{key:"getShip",value:function(t){var e,n=o(this.ships);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.length==t)return r}}catch(t){n.e(t)}finally{n.f()}}},{key:"allShipsSunk",value:function(){var t,e=o(this.ships);try{for(e.s();!(t=e.n()).done;)if(0==t.value.sunk)return!1}catch(t){e.e(t)}finally{e.f()}return!0}},{key:"bindOnPlaceShip",value:function(t){this.onPlaceShip=t}}],n&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(i)?i:String(i)),r)}var i}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.playerBoard=new c(10),this.enemyBoard=new c(10)}var e,n;return e=t,(n=[{key:"getRandomInt",value:function(t){return Math.floor(Math.random()*t)}},{key:"placeFleet",value:function(t){var e,n=this,r=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}(t.ships);try{for(r.s();!(e=r.n()).done;)for(var i=e.value,o=function(){var e=void 0,r=void 0,o=void 0;n.getRandomInt(2)?(e=n.getRandomInt(t.grid.length-i.length),r=n.getRandomInt(t.grid.length),o=Array.from(Array(i.length).keys()).map((function(t){return[e+t,r]}))):(e=n.getRandomInt(t.grid.length),r=n.getRandomInt(t.grid.length-i.length),o=Array.from(Array(i.length).keys()).map((function(t){return[e,r+t]}))),t.placeShip(o,i.length,!1)};0==i.placed;)o()}catch(t){r.e(t)}finally{r.f()}}},{key:"evaluateTarget",value:function(t,e,n){if(!n.attackIsValid(t,e))return!1;n.receiveAttack(t,e),this.enemyAttack();var r=this.isGameComplete();r?this.onGameComplete(r):this.onAttackCycleComplete()}},{key:"enemyAttack",value:function(){for(var t=!1;!t;){var e=this.getRandomInt(this.playerBoard.grid.length),n=this.getRandomInt(this.playerBoard.grid.length);this.playerBoard.attackIsValid(e,n)&&(this.playerBoard.receiveAttack(e,n),t=!0)}}},{key:"isGameComplete",value:function(){return console.log(this.playerBoard.allShipsSunk(),this.enemyBoard.allShipsSunk()),this.playerBoard.allShipsSunk()?"Mission Failed":!!this.enemyBoard.allShipsSunk()&&"Mission Success"}},{key:"bindOnAttackCycleComplete",value:function(t){this.onAttackCycleComplete=t}},{key:"bindOnGameComplete",value:function(t){this.onGameComplete=t}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),f=n(379),y=n.n(f),h=n(795),v=n.n(h),m=n(569),b=n.n(m),g=n(565),S=n.n(g),k=n(216),w=n.n(k),A=n(589),x=n.n(A),P=n(917),E={};E.styleTagTransform=x(),E.setAttributes=S(),E.insert=b().bind(null,"head"),E.domAPI=v(),E.insertStyleElement=w(),y()(P.Z,E),P.Z&&P.Z.locals&&P.Z.locals;var C=n(28),B={};function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(i)?i:String(i)),r)}var i}B.styleTagTransform=x(),B.setAttributes=S(),B.insert=b().bind(null,"head"),B.domAPI=v(),B.insertStyleElement=w(),y()(C.Z,B),C.Z&&C.Z.locals&&C.Z.locals;var L=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.playButton=this.createElement("button","play-button","Play"),this.playAgainButton=this.createElement("button","play-again-button","Play Again"),this.displayStart()}var e,n;return e=t,n=[{key:"createElement",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=document.createElement(t);return r.setAttribute("class",e),r.textContent=n,r}},{key:"clearDisplay",value:function(){for(var t=document.querySelector("body");t.firstChild;)t.removeChild(t.firstChild)}},{key:"displayStart",value:function(){this.clearDisplay();var t=document.querySelector("body"),e=this.createElement("div","title-label","Battleship"),n=this.createElement("div","play-button-container");n.append(this.playButton),t.append(e,n)}},{key:"displayPlaceShips",value:function(t,e){var n,r=this;this.clearDisplay();var i,o=j(t);try{for(o.s();!(i=o.n()).done;){var a=i.value;0==a.placed&&(n=a)}}catch(t){o.e(t)}finally{o.f()}if(n){this.placementLength=n.length,this.placementVertical=!0;var l=document.querySelector("body"),c=this.createElement("div","title-label","Place Your Ships"),u=this.createElement("div","main-container");this.placementGrid=this.createElement("div","placement-grid"),this.placementGrid.style.gridTemplate="repeat(".concat(e.length,",1fr) / repeat(").concat(e.length,",1fr)");for(var s=function(t){var i=r.createElement("div","grid-block"),o=Math.trunc(t/e.length),a=t%e.length;0!=e[o][a]&&i.classList.add("occupied"),i.setAttribute("data-x",String(o)),i.setAttribute("data-y",String(a)),i.addEventListener("mouseover",(function(){r.highlightCoordinates(Math.trunc(t/e.length),t%e.length,e.length)})),i.addEventListener("click",(function(){var t,e=[],i=j(document.querySelectorAll(".placement-grid>div.active"));try{for(i.s();!(t=i.n()).done;){var o=t.value;e.push([Number(o.dataset.x),Number(o.dataset.y)])}}catch(t){i.e(t)}finally{i.f()}r.placeShip(e,n.length)})),r.placementGrid.append(i)},d=0;d<e.length*e.length;d++)s(d);var p=this.createElement("button","rotate-button","rotate");p.addEventListener("click",(function(){r.placementVertical=!r.placementVertical})),this.placementGrid.append(p),u.append(this.placementGrid),l.append(c,u)}else this.onAllShipsPlaced()}},{key:"highlightCoordinates",value:function(t,e,n){var r,i=j(document.querySelectorAll(".placement-grid>div"));try{for(i.s();!(r=i.n()).done;)r.value.classList.remove("active")}catch(t){i.e(t)}finally{i.f()}for(var o=[],a=0;a<this.placementLength;a++)this.placementVertical?t+a>=n?o.push([t-(this.placementLength-a),e]):o.push([t+a,e]):e+a>=n?o.push([t,e-(this.placementLength-a)]):o.push([t,e+a]);for(var l=0,c=o;l<c.length;l++){var u=c[l];document.querySelector('[data-x="'.concat(u[0],'"][data-y="').concat(u[1],'"]')).classList.add("active")}}},{key:"displayAttack",value:function(t,e){var n=this;this.clearDisplay();var r=document.querySelector("body"),i=this.createElement("div","title-label","Set Attack Coordinates"),o=this.createElement("div","board-container"),a=this.createElement("div","player-board"),l=this.createElement("div","board-label","Your Fleet");a.append(l),a.style.gridTemplate="repeat(".concat(t.length,",1fr) / repeat(").concat(t.length,",1fr)");for(var c=0;c<t.length*t.length;c++){var u=this.createElement("div","grid-block"),s=Math.trunc(c/t.length),d=c%t.length;"miss"==t[s][d]||"hit"==t[s][d]?u.classList.add(t[s][d]):0!=t[s][d]&&u.classList.add("occupied"),a.append(u)}var p=this.createElement("div","enemy-board"),f=this.createElement("div","board-label","Enemy Fleet");p.append(f),p.style.gridTemplate="repeat(".concat(t.length,",1fr) / repeat(").concat(t.length,",1fr)");for(var y=function(r){var i=n.createElement("div","grid-block"),o=Math.trunc(r/t.length),a=r%t.length;"miss"!=e[o][a]&&"hit"!=e[o][a]||i.classList.add(e[o][a]),i.setAttribute("data-x",String(o)),i.setAttribute("data-y",String(a)),i.addEventListener("click",(function(){n.setAttack(o,a)})),p.append(i)},h=0;h<e.length*e.length;h++)y(h);o.append(a,p),r.append(i,o)}},{key:"setAttack",value:function(t,e){var n,r=j(document.querySelectorAll(".enemy-board>div"));try{for(r.s();!(n=r.n()).done;)n.value.classList.remove("active")}catch(t){r.e(t)}finally{r.f()}document.querySelector('[data-x="'.concat(t,'"][data-y="').concat(e,'"]')).classList.add("active"),this.onSetAttack(t,e)}},{key:"displayResult",value:function(t){this.clearDisplay();var e=document.querySelector("body"),n=this.createElement("div","title-label",t),r=this.createElement("div","play-again-button-container");r.append(this.playAgainButton),e.append(n,r)}},{key:"bindPlayButton",value:function(t){this.playButton.addEventListener("click",t)}},{key:"bindPlayAgainButton",value:function(t){this.playAgainButton.addEventListener("click",t)}},{key:"bindOnPlaceShip",value:function(t){this.placeShip=t}},{key:"bindOnAllShipsPlaced",value:function(t){this.onAllShipsPlaced=t}},{key:"bindOnSetAttack",value:function(t){this.onSetAttack=t}}],n&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(i)?i:String(i)),r)}var i}new(function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.model=e,this.view=n,this.view.bindPlayButton(this.handlePlayButtonClicked.bind(this)),this.view.bindPlayAgainButton(this.handlePlayAgainButtonClicked.bind(this)),this.view.bindOnPlaceShip(this.onPlaceShip.bind(this)),this.view.bindOnAllShipsPlaced(this.onAllShipsPlaced.bind(this)),this.view.bindOnSetAttack(this.handleOnAttack.bind(this)),this.model.playerBoard.bindOnPlaceShip(this.handlePlayButtonClicked.bind(this)),this.model.bindOnAttackCycleComplete(this.handleContinueButtonClicked.bind(this)),this.model.bindOnGameComplete(this.onGameComplete.bind(this))}var e,n;return e=t,(n=[{key:"handlePlayButtonClicked",value:function(){this.view.displayPlaceShips(this.model.playerBoard.ships,this.model.playerBoard.grid)}},{key:"handleContinueButtonClicked",value:function(){this.view.displayAttack(this.model.playerBoard.grid,this.model.enemyBoard.grid)}},{key:"handleOnAttack",value:function(t,e){this.model.evaluateTarget(t,e,this.model.enemyBoard)}},{key:"handlePlayAgainButtonClicked",value:function(){this.model.playerBoard=new c(10),this.model.playerBoard.bindOnPlaceShip(this.handlePlayButtonClicked.bind(this)),this.model.enemyBoard=new c(10),this.view.displayStart()}},{key:"onPlaceShip",value:function(t,e){this.model.playerBoard.placeShip(t,e)}},{key:"onAllShipsPlaced",value:function(){this.model.placeFleet(this.model.enemyBoard),this.view.displayAttack(this.model.playerBoard.grid,this.model.enemyBoard.grid)}},{key:"onGameComplete",value:function(t){this.view.displayResult(t)}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())(new p,new L)}()}();