(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{300:function(e,t,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(120).default)("1b7833da",content,!0,{sourceMap:!1})},301:function(e,t,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(120).default)("001cb5fa",content,!0,{sourceMap:!1})},302:function(e,t,r){"use strict";var n=r(3),o=r(87).find,l=r(146),c="find",d=!0;c in[]&&Array(1).find((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(c)},303:function(e,t,r){"use strict";r(300)},304:function(e,t,r){var n=r(119)(!1);n.push([e.i,".sb-radio__description label:after,.sb-radio__description label:before{content:none!important}.flex{display:flex}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.text-center{text-align:center}.text-start{text-align:left}",""]),e.exports=n},305:function(e,t,r){"use strict";r(301)},306:function(e,t,r){var n=r(119)(!1);n.push([e.i,".content[data-v-f0238b68]{display:flex;flex-direction:column}",""]),e.exports=n},309:function(e,t,r){"use strict";r.r(t);r(38),r(27),r(59),r(28),r(60);var n=r(24),o=r(22),l=r(2),c=(r(58),r(37),r(13),r(57),r(36),r(46),r(29),r(149),r(148),r(147),r(207),r(302),r(56),r(25),r(1)),d=r(54);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=new Intl.DisplayNames([navigator.language],{type:"region"}),v=new Intl.DisplayNames([navigator.language],{type:"language"}),y=c.default.extend({data:function(){return{updateTimeout:void 0,showModal:!1,isRefreshRequired:!1,story:void 0,sourceLanguage:void 0,copyFrom:void 0,alternates:[],chosenTranslateAction:"translate",requestedTranslation:!1,requestedImport:!1,errorMessage:void 0,successMessage:void 0,dryRun:!1,forcePublish:!1,supportedLanguages:[],chosenAction:"translate",isWorking:!1,canTranslate:!1,translationFiles:void 0}},mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.top==window.self&&window.location.assign("https://app.storyblok.com/oauth/tool_redirect"),r=e.$refs.pluginWrapper,n=new ResizeObserver((function(){return e.updateHeight()})),e.updateHeight(),n.observe(r),window.addEventListener("message",(function(t){e.processMessage(t),e.updateHeight()}),!1),window.parent.postMessage({action:"tool-changed",tool:"translate-page",event:"getContext"},"https://app.storyblok.com");case 7:case"end":return t.stop()}}),t)})))()},computed:h(h(h({},Object(d.d)("storyblok",["components"])),Object(d.d)("auth",["spaceId"])),{},{form:function(){return this.$refs.form}}),watch:{sourceLanguage:function(e){this.canTranslate=!!(this.sourceLanguage||this.sourceLanguage&&this.translationFiles)},translationFiles:function(e){this.canTranslate=!!(this.sourceLanguage||this.sourceLanguage&&this.translationFiles)}},methods:h(h(h({},Object(d.c)("deepl",["retrieveSupportedLanguages"])),Object(d.c)("systemair",["translateStory","fetchStoryById","importTranslationFiles"])),{},{updateHeight:function(){clearTimeout(this.updateTimeout),this.updateTimeout=setTimeout((function(){var e=Math.max(document.body.scrollHeight,document.body.offsetHeight),t=document.querySelector(".sb-modal"),r=(null==t?void 0:t.offsetHeight)||0,n=t&&2*parseFloat(t.parentElement?window.getComputedStyle(t.parentElement).padding:"")||0;window.parent.postMessage({action:"tool-changed",tool:"translate-page",event:"heightChange",height:Math.max(e,r+n)+5},"https://app.storyblok.com")}),100)},processMessage:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.data||"get-context"!=e.data.action||!t.spaceId){r.next=8;break}return t.story=e.data.story,t.alternates=(e.data.story.alternates||[]).map((function(e){e.name;var t=e.full_slug,r=t.indexOf("/"),o=t.slice(0,r+1),l=t.slice(t.indexOf("-")+1).split("/")[0].split("-"),c=Object(n.a)(l,2),d=c[0],f=c[1];return{value:o,label:[f&&m.of(f.toUpperCase()),d&&v.of(d.toUpperCase())].filter(Boolean).join(" - ")}})).filter((function(e){return!e.value.startsWith("systemair-en/")})),r.next=5,t.retrieveSupportedLanguages(t.spaceId);case 5:o=r.sent,t.supportedLanguages=o.map((function(e){var t=e.name,code=e.code;return{name:t,language:code,formattedLanguage:v.of(code.toUpperCase())||t}})),t.trySelectDefaultSourceLanguage();case 8:case"end":return r.stop()}}),r)})))()},trySelectDefaultSourceLanguage:function(){if(this.story){var e=this.story.full_slug.split("/",1)[0];if(e){var t=e.split("-").splice(1);if(t.length>0){var r=t[0].toUpperCase(),n=this.supportedLanguages.find((function(e){return e.language===r}));n&&(this.sourceLanguage=n.language)}}}},hideModal:function(){this.showModal=this.requestedTranslation=this.requestedImport=!1,this.errorMessage=this.successMessage=void 0,this.updateHeight()},submitForm:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var form,n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.preventDefault(),form=t.form,n=t.chosenAction,o=t.requestedTranslation,l=t.requestedImport,form.checkValidity()){r.next=5;break}return form.reportValidity(),r.abrupt("return");case 5:if("translate"!==n){r.next=14;break}if(!o){r.next=11;break}return t.requestedTranslation=!1,r.abrupt("return",t.handleTranslateStory());case 11:t.requestedTranslation=!0,t.showModal=!0;case 13:return r.abrupt("return");case 14:if(!l){r.next=19;break}return t.requestedImport=!1,r.abrupt("return",t.handleImportTranslationFiles());case 19:t.requestedImport=!0,t.showModal=!0;case 21:case"end":return r.stop()}}),r)})))()},handleTranslateStory:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,c,d,f,h,m,v,y,_,x,w,S,C,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,h=e.story,m=e.spaceId,v=e.copyFrom,y=e.chosenTranslateAction,_=e.sourceLanguage,x=e.dryRun,h){t.next=4;break}return t.abrupt("return");case 4:return e.isWorking=!0,t.next=7,e.fetchStoryById({spaceId:m,storyId:h.id});case 7:if(w=t.sent,S="overwrite"===y,C="extend"===y,w&&_&&(!S&&!C||v)){t.next=13;break}return e.errorMessage="Missing required data (current story, source language or from story)",t.abrupt("return");case 13:return t.next=15,e.translateStory({spaceId:m,storyId:w.id,sourceLanguage:_,overwriteContent:S,extendContent:C,copyFrom:v,dryRun:x});case 15:k=t.sent,e.successMessage="\n          ".concat(x?"Translation dry run was successful:<br><br>":"","\n          <strong>Deleted:</strong> ").concat(null!==(r=k.deletedCount)&&void 0!==r?r:"N/A","<br>\n          <strong>Inserted:</strong> ").concat(null!==(n=k.insertedCount)&&void 0!==n?n:"N/A","<br>\n          <strong>Merged:</strong> ").concat(null!==(o=k.mergedCount)&&void 0!==o?o:"N/A","<br>\n          <strong>Translations:</strong> ").concat(null!==(c=null!==(l=k.translationsCount)&&void 0!==l?l:k.translations)&&void 0!==c?c:"N/A","\n        "),x||(e.isRefreshRequired=!0),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(0),console.error(t.t0),e.errorMessage=(null===(f=null===(d=t.t0.response)||void 0===d?void 0:d.data)||void 0===f?void 0:f.error)||t.t0.message;case 24:return t.prev=24,e.isWorking=!1,t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[0,20,24,27]])})))()},handleImportTranslationFiles:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,c,d,f,h,m,v,y,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o=e.story,l=e.spaceId,c=e.sourceLanguage,d=e.forcePublish,o){t.next=4;break}return t.abrupt("return");case 4:return e.isWorking=!0,t.next=7,e.fetchStoryById({spaceId:l,storyId:o.id});case 7:if(f=t.sent,h=null===(r=document.querySelector("#translationfiles"))||void 0===r?void 0:r.files,f&&c&&h){t.next=12;break}return e.errorMessage="Missing required data (current story, source language or files)",t.abrupt("return");case 12:return t.next=14,e.importTranslationFiles({spaceId:l,storyId:f.id,sourceLanguage:c,translationFiles:h,forcePublish:d});case 14:m=t.sent,e.isRefreshRequired=!0,e.successMessage="\n          <strong>Count</strong>: ".concat((null==m?void 0:m.filesCount)||0,"<br>\n          <strong>Success</strong>: ").concat(((null==m?void 0:m.successFiles)||[]).join("<br>")||"N/A","<br>\n          <strong>Errors</strong>: ").concat(((null==m?void 0:m.errorFiles)||[]).join("<br>")||"N/A","\n        "),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(0),v=(null===(n=t.t0.response)||void 0===n?void 0:n.data)||{errorFiles:[]},y=v.errorFiles,_=v.error,e.errorMessage=(null==y?void 0:y.join(", "))||_||t.t0.message;case 23:return t.prev=23,e.isWorking=!1,t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[0,19,23,26]])})))()},fileSelected:function(){var e;this.translationFiles=null===(e=document.querySelector("#translationfiles"))||void 0===e?void 0:e.files}})}),_=(r(303),r(305),r(71)),component=Object(_.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"pluginWrapper",staticClass:"content",on:{click:function(t){return e.updateHeight()}}},[e.story?r("div",[e.isRefreshRequired?r("SbCard",[r("SbCardContent",{staticClass:"font-size-lg text-center"},[r("p",[r("SbIcon",{attrs:{name:"success-pictogram",size:"large"}}),e._v(" Translation or upload was successful\n          "),r("br"),r("br"),e._v(" "),r("strong",[e._v("The page must be reloaded to display the updated story.")])],1),e._v(" "),e.successMessage?[r("hr",{staticClass:"text-primary",staticStyle:{"border-width":"1px 0px 0px","border-style":"solid"}}),e._v(" "),e.successMessage?r("p",{staticClass:"text-start sb-form-group__description",domProps:{innerHTML:e._s(e.successMessage)}}):e._e()]:e._e()],2)],1):[e.showModal?[r("SbModal",{attrs:{large:"","is-open":!0,"show-close":!1,"esc-closes":!1,"close-on-header":!1},on:{hide:e.hideModal}},[r("SbModalHeader",[r("SbIcon",{attrs:{name:"caution-pictogram",size:"x-large"}}),e._v(" "),r("span",[e._v("Attention")])],1),e._v(" "),r("SbModalContent",[e.errorMessage?[r("div",{staticClass:"font-size-md"},[r("strong",[r("SbIcon",{attrs:{name:"x-clear",color:"negative"}}),e._v(" An error occurred\n                ")],1),e._v(" "),r("p",[e._v(e._s(e.errorMessage))])])]:e.successMessage?[r("div",{staticClass:"font-size-md"},[r("strong",[r("SbIcon",{attrs:{name:"success-pictogram"}}),e._v(" Was successful\n                ")],1),e._v(" "),e.successMessage?r("p",{domProps:{innerHTML:e._s(e.successMessage)}}):e._e()])]:[e.isWorking?r("SbFormItem",[r("div",{staticClass:"flex flex-col items-center justify-center"},[r("SbLoading",{attrs:{type:"spinner"}})],1)]):[e.requestedImport?[r("p",[e._v("You are about to import the selected translation files and overwrite the content of the stories")])]:e._e(),e._v(" "),e.requestedTranslation?[r("p",[e._v("You are about to translate the content of the current story")])]:e._e(),e._v(" "),r("p",[r("strong",[r("SbIcon",{staticClass:"text-primary",attrs:{name:"circular-info"}}),e._v(" Attention\n                  ")],1),e._v(" "),r("br"),e._v("\n                  Please note that all changes will be made to the "),r("strong",[e._v("published")]),e._v(" version of this story.\n                  The same applies when loading stories from other locales.\n                ")]),e._v(" "),r("p",[e._v("Do you want to proceed?")])]]],2),e._v(" "),r("SbModalFooter",{staticClass:"justify-center"},[r("SbButton",{attrs:{size:"small",label:e.successMessage?"Close":"Cancel",type:"button",variant:"secondary",disabled:e.isWorking},on:{click:e.hideModal}}),e._v(" "),e.errorMessage||e.successMessage?e._e():r("SbButton",{attrs:{size:"small",label:"Proceed",variant:"primary",type:"button",disabled:e.isWorking},on:{click:e.submitForm}})],1)],1)]:e._e(),e._v(" "),r("form",{ref:"form",on:{submit:e.submitForm}},[r("SbFormItem",{staticClass:"sb-form-group__description"},[e._v("\n          You can choose between translating the current story's content or uploading translation files to do so.\n        ")]),e._v(" "),r("SbFormItem",{attrs:{label:"Select action"}},[r("SbRadio",{attrs:{value:"translate",nativeValue:"translate",id:"chosen-section-translate",name:"chosen-action",label:"Translate current story"},model:{value:e.chosenAction,callback:function(t){e.chosenAction=t},expression:"chosenAction"}})],1),e._v(" "),r("SbFormItem",[r("SbRadio",{attrs:{value:"import",nativeValue:"import",name:"chosen-action",id:"chosen-section-import",label:"Upload translation file(s)"},model:{value:e.chosenAction,callback:function(t){e.chosenAction=t},expression:"chosenAction"}})],1),e._v(" "),"translate"===e.chosenAction?[r("SbFormItem",{attrs:{label:"Select translation type"}},[r("SbFormItem",[r("SbRadio",{attrs:{value:"translate",nativeValue:"translate",id:"chosen-translation-action-translate",name:"chosen-translate-action",label:"Translate story"},model:{value:e.chosenTranslateAction,callback:function(t){e.chosenTranslateAction=t},expression:"chosenTranslateAction"}}),e._v(" "),r("div",{staticClass:"sb-radio__description"},[r("div",{staticClass:"sb-radio__input"}),e._v(" "),r("label",{staticClass:"sb-radio__label font-size-sm sb-form-group__description text-light-gray"},[e._v("\n                  The story is translated into the locale of the current page.\n                ")])])],1),e._v(" "),r("SbFormItem",[r("SbRadio",{attrs:{value:"extend",nativeValue:"extend",id:"chosen-translation-action-extend",name:"chosen-translate-action",label:"Extend story"},model:{value:e.chosenTranslateAction,callback:function(t){e.chosenTranslateAction=t},expression:"chosenTranslateAction"}}),e._v(" "),r("div",{staticClass:"sb-radio__description"},[r("div",{staticClass:"sb-radio__input"}),e._v(" "),r("label",{staticClass:"sb-radio__label font-size-sm sb-form-group__description text-light-gray"},[e._v("\n                  The content of a story from another locale is translated and then added to the current story.\n                ")])])],1),e._v(" "),r("SbFormItem",[r("SbRadio",{attrs:{value:"overwrite",id:"chosen-translation-action-overwrite",nativeValue:"overwrite",name:"chosen-translate-action",label:"Overwrite story"},model:{value:e.chosenTranslateAction,callback:function(t){e.chosenTranslateAction=t},expression:"chosenTranslateAction"}}),e._v(" "),r("div",{staticClass:"sb-radio__description"},[r("div",{staticClass:"sb-radio__input"}),e._v(" "),r("label",{staticClass:"sb-radio__label font-size-sm sb-form-group__description text-light-gray"},[e._v("\n                  The content of the current story is replaced by the content of another story from another locale and then translated.\n                ")])])],1)],1),e._v(" "),r("SbFormItem",{attrs:{label:"Current language of this story"}},[r("SbSelect",{attrs:{label:"Current language of this story",name:"source-language",options:e.supportedLanguages,"item-label":"formattedLanguage","item-value":"language",filterable:"",required:""},model:{value:e.sourceLanguage,callback:function(t){e.sourceLanguage=t},expression:"sourceLanguage"}})],1),e._v(" "),"translate"!==e.chosenTranslateAction?r("SbFormItem",{attrs:{label:("overwrite"===e.chosenTranslateAction?"Overwrite":"Extend")+" story from"}},[r("SbSelect",{attrs:{label:"Overwrite/extend story from",name:"copy-from",options:e.alternates,"item-label":"label","item-value":"value",filterable:"",required:""},model:{value:e.copyFrom,callback:function(t){e.copyFrom=t},expression:"copyFrom"}})],1):e._e(),e._v(" "),r("SbFormItem",[r("SbCheckbox",{attrs:{value:!1,id:"submit-button",name:"dry-run",label:"Dry run (without updating the story)",inline:""},model:{value:e.dryRun,callback:function(t){e.dryRun=t},expression:"dryRun"}}),e._v(" "),r("div",{staticClass:"sb-radio__description"},[r("div",{staticClass:"sb-radio__input"}),e._v(" "),r("label",{staticClass:"sb-radio__label font-size-sm sb-form-group__description text-light-gray"},[e._v("\n                When selected, the story won't be updated but you will receive an overview of the changes that would be made.\n              ")])])],1)]:e._e(),e._v(" "),"import"===e.chosenAction?[r("SbFormItem",{staticStyle:{display:"flex","flex-direction":"column"},attrs:{label:"Translate from file(s)"}},[r("input",{staticClass:"sb-textfield__input sb-textfield__input--default",staticStyle:{"background-color":"white","max-width":"-webkit-fill-available"},attrs:{type:"file",required:"",id:"translationfiles",name:"translationfiles",accept:"application/json",multiple:""},on:{change:e.fileSelected}})]),e._v(" "),r("SbFormItem",[r("SbCheckbox",{attrs:{value:!1,id:"submit-button",name:"force-publish",label:"Publish the translated story/stories",inline:""},model:{value:e.forcePublish,callback:function(t){e.forcePublish=t},expression:"forcePublish"}}),e._v(" "),r("div",{staticClass:"sb-radio__description"},[r("div",{staticClass:"sb-radio__input"}),e._v(" "),r("label",{staticClass:"sb-radio__label font-size-sm sb-form-group__description text-light-gray"},[e._v("\n                When selected, the updated story/stories will be published after they're translated. Use with care!\n              ")])])],1)]:e._e(),e._v(" "),r("SbButton",{attrs:{"is-full-width":"",isDisabled:!e.canTranslate,icon:"content",label:"Translate",size:"small",type:"submit"}})],2)]],2):e._e()])}),[],!1,null,"f0238b68",null);t.default=component.exports}}]);