!function(){function o(o){return o&&o.__esModule?o.default:o}var t={};!function(){"use strict";t={polyfill:function(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===o.__forceSmoothScrollPolyfill__){var l,e=o.HTMLElement||o.Element,r={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||c,scrollIntoView:e.prototype.scrollIntoView},i=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,s=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==n(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):r.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(n(arguments[0])?r.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==n(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==n(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==n(arguments[0])){var l=d(this),e=l.getBoundingClientRect(),i=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+i.left-e.left,l.scrollTop+i.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(o,t){this.scrollLeft=o,this.scrollTop=t}function n(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function f(o,t){return"Y"===t?o.clientHeight+s<o.scrollHeight:"X"===t?o.clientWidth+s<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function p(o){var t=f(o,"Y")&&a(o,"Y"),l=f(o,"X")&&a(o,"X");return t||l}function d(o){for(;o!==t.body&&!1===p(o);)o=o.parentNode||o.host;return o}function v(t){var l,e,r,s,c=(i()-t.startTime)/468;s=c=c>1?1:c,l=.5*(1-Math.cos(Math.PI*s)),e=t.startX+(t.x-t.startX)*l,r=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,r),e===t.x&&r===t.y||o.requestAnimationFrame(v.bind(o,t))}function h(l,e,s){var n,f,a,p,d=i();l===t.body?(n=o,f=o.scrollX||o.pageXOffset,a=o.scrollY||o.pageYOffset,p=r.scroll):(n=l,f=l.scrollLeft,a=l.scrollTop,p=c),v({scrollable:n,method:p,startTime:d,startX:f,startY:a,x:e,y:s})}}}}(),o(t).polyfill()}();
//# sourceMappingURL=index.b273e2e9.js.map
