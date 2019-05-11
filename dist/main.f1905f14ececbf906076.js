!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,l=0,p=[],u=n(3);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(y(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function d(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function _(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),p.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(e.insertAt.before,n);n.insertBefore(t,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),_(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var s=l++;n=c||(c=m(t)),r=k.bind(null,n,s,!1),i=k.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),_(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return f(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}e&&f(d(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function k(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup_type=t.popup_type||"default_popup",this.popup_css_class=t.popup_css_class,this.popup_template='\n\t\t\t<div class="popup-container-inner" name="popup_container_inner">\n\t\t\t\t<div class="popup-css '.concat(this.popup_css_class,'" name="popup">\n\t\t\t\t\t<div name="popup_content"></div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="popup-close-btn-wrap">\n\t\t\t\t\t\t<span class="btn-link btn-link-blue popup-close-btn">\n\t\t\t\t\t\t\t<a href="#" class="btn-link-i" name="popup_close_btn">\n\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'),this.popup=null,this.can_close_popup=!1,this.can_close_popup_timer=null,this.createPopup()}var t,n,i;return t=e,(n=[{key:"createPopup",value:function(){var e=this;this.popup=document.createElement("div"),this.popup.className="popup-container",this.popup.innerHTML=this.popup_template,this.popup.addEventListener("click",function(t){var n=t.target;if("popup_close_btn"===n.getAttribute("name"))return t.preventDefault(),void e.close();for(;n!==e.popup;){if("popup"===n.getAttribute("name"))return;n=n.parentNode}e.can_close_popup&&e.close()})}},{key:"getPopup",value:function(){return this.popup}},{key:"setContent",value:function(e){this.popup.querySelector("[name=popup_content]").innerHTML=e}},{key:"open",value:function(){var e=this;document.body.appendChild(this.popup),this.can_close_popup_timer=setTimeout(function(){e.can_close_popup=!0},1e3)}},{key:"close",value:function(){var e=new CustomEvent("closepopup",{bubbles:!0,cancelable:!0,detail:{popup_type:this.popup_type}});this.popup.dispatchEvent(e),document.body.removeChild(this.popup),clearTimeout(this.can_close_popup_timer),this.can_close_popup=!1}}])&&r(t.prototype,n),i&&r(t,i),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.game_container_id=t.game_container_id,this.field_cell_number=t.field_cell_number,this.points_to_victory=t.points_to_victory,this.fireworks_container_css_class=t.fireworks_container_css_class,this.fireworks_block_before_css_class=t.fireworks_block_before_css_class,this.fireworks_block_after_css_class=t.fireworks_block_after_css_class,this.game_container=null,this.player_score=null,this.computer_score=null,this.game_field=null,this.game_start_btn=null,this.player_time_input=null,this.field_cells=[],this.score_popup=null,this.message_popup=null,this.initElements(),this.initPreventEvents(),this.fillField()}var t,n,r;return t=e,(n=[{key:"initElements",value:function(){this.game_container=document.getElementById(this.game_container_id),this.player_score=this.game_container.querySelector("[name=player_score]"),this.computer_score=this.game_container.querySelector("[name=computer_score]"),this.game_field=this.game_container.querySelector("[name=game_field]"),this.game_start_btn=this.game_container.querySelector("[name=game_start_btn]"),this.player_time_input=this.game_container.querySelector("[name=player_time_input]")}},{key:"initPreventEvents",value:function(){this.game_field.addEventListener("click",function(e){"game_field_link"===e.target.getAttribute("name")&&e.preventDefault()}),this.game_field.addEventListener("mousedown",function(e){e.preventDefault()}),this.game_field.addEventListener("selectstart",function(e){e.preventDefault()}),this.game_start_btn.addEventListener("click",function(e){e.preventDefault()})}},{key:"fillField",value:function(){var e=this,t=0,n=null;n=setInterval(function(){e.createCell(),(t+=1)>=e.field_cell_number&&(clearInterval(n),e.activateInput(),e.player_time_input.focus(),e.initEvents())},40)}},{key:"createCell",value:function(){var e=document.createElement("li"),t=document.createElement("a");e.className="game-field-l-i",t.setAttribute("href","#"),t.className="game-field-l-i-link",t.name="game_field_link",t.innerHTML="&nbsp;",e.appendChild(t),this.game_field.appendChild(e),this.field_cells.push(t)}},{key:"initEvents",value:function(){var e=this;this.player_time_input.addEventListener("keypress",function(t){var n=e.getChar(t);n&&e.isNumeric(n)||t.preventDefault()}),this.player_time_input.addEventListener("keyup",function(t){var n=t.target;n.value=n.value.replace(/\D+/g,""),n.value.length?(e.player_time_input.classList.remove("input-invalid"),e.activateButton()):e.disableButton()}),this.game_start_btn.addEventListener("click",function(t){t.target.parentNode.classList.contains("disabled")?!1===e.player_time_input.disabled&&(e.player_time_input.classList.add("input-invalid"),e.player_time_input.focus()):(e.disableInput(),e.disableButton(),e.makeStep())}),this.player_time_input.addEventListener("keydown",function(t){if(13===t.keyCode){if(t.preventDefault(),!t.target.value.length)return void e.player_time_input.classList.add("input-invalid");e.disableInput(),e.disableButton(),e.makeStep()}})}},{key:"getChar",value:function(e){return null==e.which?e.keyCode<32?null:String.fromCharCode(e.keyCode):0!=e.which&&0!=e.charCode?e.which<32?null:String.fromCharCode(e.which):null}},{key:"isNumeric",value:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}},{key:"activateButton",value:function(){this.game_start_btn.parentNode.classList.remove("disabled")}},{key:"disableButton",value:function(){this.game_start_btn.parentNode.classList.add("disabled")}},{key:"activateInput",value:function(){this.player_time_input.disabled=!1}},{key:"disableInput",value:function(){this.player_time_input.disabled=!0}},{key:"makeStep",value:function(){var e=this,t=this.field_cells.filter(function(e){return!e.hasAttribute("data-active")}),n=null,r=!1;if(!t.length)return this.message_popup||this.createMessagePopup(),void this.showMessagePopup();(n=this.getUniqueRandomElement(t)).setAttribute("data-active","yellow"),n.onclick=function(){r||(r=!0,n.setAttribute("data-active","green"),e.increaseScore(e.player_score))},setTimeout(function(){n.onclick=null,r||(n.setAttribute("data-active","red"),e.increaseScore(e.computer_score)),+e.player_score.innerHTML<e.points_to_victory&&+e.computer_score.innerHTML<e.points_to_victory?e.makeStep():(e.score_popup||e.createScorePopup(),e.scorePopupShow())},+this.player_time_input.value)}},{key:"createMessagePopup",value:function(){var e=this;this.message_popup=new i({popup_type:"message_popup",popup_css_class:"message-popup"}),this.message_popup.setContent('\n\t\t\t\t<h3 class="message-popup-header">\n\t\t\t\t\tИгра окончена вничью, так как ни один из игроков не набрал нужного количества очков\n\t\t\t\t</h3>\n\t\t\t'),document.addEventListener("closepopup",function(t){"message_popup"===t.detail.popup_type&&e.resetGame()})}},{key:"showMessagePopup",value:function(){this.message_popup.open()}},{key:"getUniqueRandomElement",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"increaseScore",value:function(e){e.innerHTML=+e.innerHTML+1}},{key:"createScorePopup",value:function(){var e=this,t=null,n=document.createElement("div"),r=document.createElement("div");this.score_popup=new i({popup_type:"score_popup",popup_css_class:"game-score-popup"}),n.className=this.fireworks_block_before_css_class,n.innerHTML="&nbsp;",r.className=this.fireworks_block_after_css_class,r.innerHTML="&nbsp;",(t=this.score_popup.getPopup().querySelector("[name=popup_container_inner]")).insertBefore(r,t.firstElementChild),t.insertBefore(n,t.firstElementChild),document.addEventListener("closepopup",function(t){"score_popup"===t.detail.popup_type&&e.resetGame()})}},{key:"resetGame",value:function(){this.scoreReset(),this.gameFieldClear(),this.activateInput(),this.activateButton()}},{key:"getScoreData",value:function(){var e=+this.player_score.innerHTML,t=+this.computer_score.innerHTML;return{score:Math.max(e,t)+":"+Math.min(e,t),winner:e>t?"игрок":"компьютер"}}},{key:"scorePopupShow",value:function(){var e=this.score_popup.getPopup().querySelector("[name=popup_container_inner]"),t=this.getScoreData(),n='\n\t\t\t\t<h2 class="game-score-popup-header">\n\t\t\t\t\tСо счетом '.concat(t.score," побеждает ").concat(t.winner,"!\n\t\t\t\t</h2>\n\t\t\t");"игрок"===t.winner?e.classList.add(this.fireworks_container_css_class):e.classList.remove(this.fireworks_container_css_class),this.score_popup.setContent(n),this.score_popup.open()}},{key:"scoreReset",value:function(){this.player_score.innerHTML=0,this.computer_score.innerHTML=0}},{key:"gameFieldClear",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,i=this.field_cells[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.removeAttribute("data-active")}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}}])&&o(t.prototype,n),r&&o(t,r),e}();window.onload=function(){new s({game_container_id:"game_container",field_cell_number:100,points_to_victory:10,fireworks_container_css_class:"fireworks-container",fireworks_block_before_css_class:"fireworks-block-before",fireworks_block_after_css_class:"fireworks-block-after"})}}]);