(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{270:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("4eea2900",content,!0,{sourceMap:!1})},271:function(t,e,n){"use strict";var r=n(7),o=n(80).find,l=n(142),c="find",d=!0;c in[]&&Array(1).find((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},272:function(t,e,n){"use strict";n(270)},273:function(t,e,n){var r=n(111)(!1);r.push([t.i,".content[data-v-152e7ef6]{display:flex;flex-direction:column}",""]),t.exports=r},276:function(t,e,n){"use strict";n.r(e);n(38),n(26),n(37),n(56),n(32),n(57);var r=n(21),o=n(3),l=(n(27),n(143),n(198),n(271),n(10),n(36),n(18),n(54));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{showModal:!1,requireRefresh:!1,story:void 0,sourceLanguage:void 0,targetLanguage:void 0,supportedLanguages:[],translating:!1,canTranslate:!1,translationFile:void 0}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.top==window.self&&window.location.assign("https://app.storyblok.com/oauth/tool_redirect"),window.addEventListener("message",t.processMessage,!1),window.parent.postMessage({action:"tool-changed",tool:"translate-page",event:"getContext"},"https://app.storyblok.com"),window.parent.postMessage({action:"tool-changed",tool:"translate-page",event:"heightChange",height:400},"https://app.storyblok.com");case 4:case"end":return e.stop()}}),e)})))()},computed:d({},Object(l.d)("storyblok",["components"])),watch:{sourceLanguage:function(t){this.canTranslate=this.sourceLanguage&&this.targetLanguage&&this.sourceLanguage!==this.targetLanguage||this.sourceLanguage&&this.translationFile},targetLanguage:function(t){this.canTranslate=this.sourceLanguage&&this.targetLanguage&&this.sourceLanguage!==this.targetLanguage||this.sourceLanguage&&this.translationFile},translationFile:function(t){this.canTranslate=this.sourceLanguage&&this.translationFile}},methods:d(d(d(d({},Object(l.c)("storyblok",["loadStoryBlokBridge","readStory"])),Object(l.c)("deepl",["retrieveSupportedLanguages"])),Object(l.c)("systemair",["translate"])),{},{processMessage:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.data||"get-context"!=t.data.action){n.next=6;break}return e.story=t.data.story,n.next=4,e.retrieveSupportedLanguages();case 4:e.supportedLanguages=n.sent,e.trySelectDefaultSourceLanguage();case 6:case"end":return n.stop()}}),n)})))()},trySelectDefaultSourceLanguage:function(){var t=this.story.full_slug.split("/",1)[0];if(t){var e=t.split("-").splice(1);if(e.length>0){var n=e[0].toUpperCase(),r=this.supportedLanguages.find((function(t){return t.language===n}));r&&(this.sourceLanguage=r.name)}}},translateStory:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.readStory(t.story.id).then((function(e){var n,r;t.translating=!0;var o={storyId:t.story.id,sourceLanguage:(null===(n=t.supportedLanguages.find((function(e){return e.name===t.sourceLanguage})))||void 0===n?void 0:n.language)||void 0,targetLanguage:(null===(r=t.supportedLanguages.find((function(e){return e.name===t.targetLanguage})))||void 0===r?void 0:r.language)||void 0,translationFile:document.querySelector("#translationfile").files[0]};return t.translate(o)})).then((function(t){console.log(t)})).catch((function(t){console.error(t)})).finally((function(){return t.translating=!1}));case 2:case"end":return e.stop()}}),e)})))()},fileSelected:function(){this.translationFile=document.querySelector("#translationfile").files[0]}})},h=(n(272),n(67)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.story?n("div",{staticClass:"content"},[t.requireRefresh?n("div",[n("p",{staticStyle:{"text-align":"center"}},[n("SbIcon",{attrs:{name:"caution-pictogram",size:"large"}})],1),t._v(" "),t._m(0)]):n("div",[n("SbModal",{staticStyle:{"padding-left":"10px !important","padding-right":"10px"},attrs:{"is-open":t.showModal},on:{hide:function(e){t.showModal=!1}}},[n("SbModalContent",[n("p",{staticStyle:{"text-align":"center"}},[n("SbIcon",{attrs:{name:"caution-pictogram",size:"x-large"}})],1),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Attention")])]),t._v(" "),n("p",{staticStyle:{"text-align":"justify"}},[t._v("You are about to translate the current story's content from "+t._s(t.sourceLanguage)+" to "+t._s(t.targetLanguage)+". Do you want to proceed?")])]),t._v(" "),n("SbModalFooter",{staticStyle:{"min-height":"40px"}},[n("SbButton",{attrs:{size:"small",label:"Cancel",variant:"ghost"},on:{click:function(e){t.showModal=!1}}}),t._v(" "),n("SbButton",{attrs:{size:"small",label:"Proceed",variant:"primary"},on:{click:function(e){t.showModal=!1,t.translateStory()}}})],1)],1),t._v(" "),t.translating?n("div",[n("SbFormItem",{attrs:{label:"Translating stroy content ..."}},[n("SbLoading",{attrs:{type:"spinner"}})],1)],1):n("div",[n("SbFormItem",{attrs:{label:"Source Language"}},[n("SbSelect",{attrs:{options:t.supportedLanguages,label:"","item-label":"name","item-value":"language",filterable:""},model:{value:t.sourceLanguage,callback:function(e){t.sourceLanguage=e},expression:"sourceLanguage"}})],1),t._v(" "),n("SbFormItem",{attrs:{label:"Target Language"}},[n("SbSelect",{attrs:{options:t.supportedLanguages,label:"","item-label":"name","item-value":"language",filterable:""},model:{value:t.targetLanguage,callback:function(e){t.targetLanguage=e},expression:"targetLanguage"}})],1),t._v(" "),n("SbFormItem",{attrs:{label:"Translate form file"}},[n("input",{attrs:{type:"file",id:"translationfile",name:"translationfile",accept:"application/json"},on:{change:t.fileSelected}})]),t._v(" "),n("SbButton",{attrs:{"is-full-width":"",isDisabled:!t.canTranslate,icon:"content",label:"Translate",size:"small"},on:{click:function(e){t.showModal=!0}}})],1)],1)]):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Page realod required to display the updated story content type.")])])}],!1,null,"152e7ef6",null);e.default=component.exports}}]);