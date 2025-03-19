;/*FB_PKG_DELIM*/

__d("TrustedTypesLinkTagHTMLPolicy",["TrustedTypes","err"],(function(a,b,c,d,e,f,g){"use strict";a={createHTML:function(a){if(a==="<link />")return a;throw c("err")("Violating Trusted Type policies. Only works for '<link />' strings.")}};b=c("TrustedTypes").createPolicy("link-tag-html",a);d=b;g["default"]=d}),98);
__d("getMarkupWrap",["invariant","ExecutionEnvironment","TrustedTypesLinkTagHTMLPolicy"],(function(a,b,c,d,e,f,g,h){var i,j=(i||c("ExecutionEnvironment")).canUseDOM?document.createElement("div"):null,k={};b=[1,'<select multiple="true">',"</select>"];d=[1,"<table>","</table>"];e=[3,"<table><tbody><tr>","</tr></tbody></table>"];var l=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],m={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:b,option:b,caption:d,colgroup:d,tbody:d,tfoot:d,thead:d,td:e,th:e};f=["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"];f.forEach(function(a){m[a]=l,k[a]=!0});function a(a){a=a;!j&&h(0,144);Object.prototype.hasOwnProperty.call(m,a)||(a="*");Object.prototype.hasOwnProperty.call(k,a)||(a==="*"?j.innerHTML=c("TrustedTypesLinkTagHTMLPolicy").createHTML("<link />"):j.innerHTML="<"+a+"></"+a+">",k[a]=!j.firstChild);return k[a]?m[a]:null}g["default"]=a}),98);
__d("createNodesFromMarkup",["invariant","ExecutionEnvironment","TrustedTypesNoOpPolicy_DO_NOT_USE","getMarkupWrap"],(function(a,b,c,d,e,f,g,h){var i,j=(i||c("ExecutionEnvironment")).canUseDOM?document.createElement("div"):null,k=/^\s*<(\w+)/;function l(a){a=a.match(k);return a&&a[1].toLowerCase()}function a(a,b){var d=j;!j&&h(0,5001);var e=l(a);e=e&&c("getMarkupWrap")(e);if(e){d.innerHTML=e[1]+a+e[2];e=e[0];while(e--)d=d.lastChild}else d.innerHTML=c("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(a);e=d.getElementsByTagName("script");e.length&&(b||h(0,5002),Array.from(e).forEach(b));a=Array.from(d.childNodes);while(d.lastChild)d.removeChild(d.lastChild);return a}g["default"]=a}),98);
__d("evalGlobal",[],(function(a,b,c,d,e,f){function a(a){if(typeof a!=="string")throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");if(!a)return;var b=document.createElement("script");try{b.appendChild(document.createTextNode(a))}catch(c){b.text=a}a=document.getElementsByTagName("head")[0]||document.documentElement;a.appendChild(b);a.removeChild(b)}f["default"]=a}),66);
__d("HTML",["invariant","Bootloader","FBLogger","createNodesFromMarkup","emptyFunction","evalGlobal"],(function(a,b,c,d,e,f,g){var h=/(<(\w+)[^>]*?)\/>/g,i={abbr:!0,area:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0};a=function(){"use strict";function a(c){c&&typeof c.__html==="string"&&(c=c.__html);if(!(this instanceof a))return c instanceof a?c:new a(c);if(c){var d=typeof c;d==="string"||g(0,277,d)}this._markup=c||"";this._defer=!1;this._nodes=null;this._inlineJS=b("emptyFunction");this._rootNode=null;this._hasInlineJs=!1}var c=a.prototype;c.toString=function(){return this._markup};c.getContent=function(){return this._markup};c.getNodes=function(){this._fillCache();return this._nodes};c.getRootNode=function(){this._rootNode&&g(0,278);var a=this.getNodes();if(a.length===1)this._rootNode=a[0];else{var b=document.createDocumentFragment();for(var c=0;c<a.length;c++)b.appendChild(a[c]);this._rootNode=b}return this._rootNode};c.getAction=function(){var a=this;this._fillCache();var b=function(){a._inlineJS()};return this._defer?function(){setTimeout(b,0)}:b};c._fillCache=function(){if(this._nodes!==null)return;if(!this._markup){this._nodes=[];return}var a=this._markup.replace(h,function(a,b,c){return i[c.toLowerCase()]?a:b+"></"+c+">"}),c=null;a=b("createNodesFromMarkup")(a,function(a){b("FBLogger")("staticresources").warn("HTML: encountered script node while parsing, hasSrc=%s, type=%s",Boolean(a.src),a.type==null||a.type===""?"<unknown>":a.type),a.type!=="application/ld+json"&&a.type!=="application/json"&&(c=c||[],c.push(a.src?b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"),a.src):b("evalGlobal").bind(null,a.innerHTML)),a.parentNode.removeChild(a))});c&&(this._hasInlineJs=!0,this._inlineJS=function(){for(var a=0;a<c.length;a++)c[a]()});this._nodes=a};c.setDeferred=function(a){this._defer=!!a;return this};c.hasInlineJs=function(){return this._hasInlineJs};a.isHTML=function(b){return!!b&&(b instanceof a||b.__html!==void 0)};a.replaceJSONWrapper=function(b){return b&&b.__html!==void 0?new a(b.__html):b};return a}();e.exports=a}),null);/*FB_PKG_DELIM*/
__d("CometFeedStoryDynamicResolutionPhotoAttachmentRenderer_experimentWidth.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){var a;return(a=c("qex")._("1576"))!=null?a:500}};g["default"]=a}),98);
__d("CometImmersivePhotoCanUserDisable3DMotion.relayprovider",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("gkx")("1872")}};g["default"]=a}),98);
__d("DataStore",["DataStoreConfig","gkx","isEmpty"],(function(a,b,c,d,e,f){"use strict";var g,h=b("DataStoreConfig").expandoKey,i=b("DataStoreConfig").useExpando,j=b("gkx")("25572")&&window.WeakMap?new window.WeakMap():null,k={},l=1;function m(a){if(typeof a==="string")return"str_"+a;else{var b;return"elem_"+((b=a.__FB_TOKEN)!=null?b:a.__FB_TOKEN=[l++])[0]}}function n(a){if(j!=null&&typeof a==="object"){j.get(a)===void 0&&j.set(a,{});return j.get(a)}else if(i&&typeof a==="object")return a[h]||(a[h]={});a=m(a);return k[a]||(k[a]={})}var o={set:function(a,b,c){if(!a)throw new TypeError("DataStore.set: namespace is required, got "+typeof a);var d=n(a);d[b]=c;return a},get:function(a,b,c){if(!a)throw new TypeError("DataStore.get: namespace is required, got "+typeof a);var d=n(a),e=d[b];if(e===void 0&&a.getAttribute!=null)if(a.hasAttribute!=null&&!a.hasAttribute("data-"+b))e=void 0;else{a=a.getAttribute("data-"+b);e=a===null?void 0:a}c!==void 0&&e===void 0&&(e=d[b]=c);return e},remove:function(a,c){if(!a)throw new TypeError("DataStore.remove: namespace is required, got "+typeof a);var d=n(a),e=d[c];delete d[c];(g||(g=b("isEmpty")))(d)&&o.purge(a);return e},purge:function(a){if(j!=null&&typeof a==="object")return j["delete"](a);else i&&typeof a==="object"?delete a[h]:delete k[m(a)]},_storage:k};e.exports=o}),null);
__d("IsMergQAPolls.relayprovider",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("gkx")("24565")}};g["default"]=a}),98);
__d("StoriesArmadilloReplyEnabled.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){var a;return(a=c("qex")._("68"))!=null?a:!1}};g["default"]=a}),98);/*FB_PKG_DELIM*/
/**
 * License: https://www.facebook.com/legal/license/V9vdYColc4k/
 */
__d("react-0.0.0",["React"],(function(a,b,c,d,e,f){"use strict";function a(a){return a&&typeof a==="object"&&"default"in a?a["default"]:a}var g=a(b("React"));d={};var h={exports:d};function i(){h.exports=g}var j=!1;function k(){j||(j=!0,i());return h.exports}function c(a){switch(a){case void 0:return k()}}e.exports=c}),null);
__d("react",["react-0.0.0"],(function(a,b,c,d,e,f){e.exports=b("react-0.0.0")()}),null);