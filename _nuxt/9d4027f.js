(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));r(38),r(26),r(37),r(56),r(32),r(57);var n=r(21),o=r(3),c=r(44),f=r(45),h=(r(55),r(10),r(66),r(18),r(33)),d=r.n(h);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=function(){function e(t,r){var n=this;Object(c.a)(this,e);var o={baseURL:t};this.instance=d.a.create(o),this.instance.interceptors.request.use((function(e){return n.BeforeRequestSend(e)}),void 0)}var t,r,n,h,m,v,y;return Object(f.a)(e,[{key:"BeforeRequestSend",value:(y=Object(o.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})},{key:"GET",value:(v=Object(o.a)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.SEND(t,"get",{params:r||{},headers:n||{}}));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return v.apply(this,arguments)})},{key:"POST",value:(m=Object(o.a)(regeneratorRuntime.mark((function e(t,data,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.SEND(t,"post",{data:data||{},headers:r||{}}));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return m.apply(this,arguments)})},{key:"PUT",value:(h=Object(o.a)(regeneratorRuntime.mark((function e(t,data,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.SEND(t,"put",{data:data||{},headers:r||{}}));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return h.apply(this,arguments)})},{key:"PATCH",value:(n=Object(o.a)(regeneratorRuntime.mark((function e(t,data,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.SEND(t,"patch",{data:data||{},headers:r||{}}));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return n.apply(this,arguments)})},{key:"DELETE",value:(r=Object(o.a)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.SEND(t,"delete",{params:r||{},headers:n||{}}));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return r.apply(this,arguments)})},{key:"SEND",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t,r,n,c){var f=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.instance.request(l({url:t,method:r},n)).then((function(e){return e.data})).catch(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.response){e.next=11;break}if(console.error("".concat(o.response.status,": ").concat(o.response.statusText,"\nDetails: ").concat(JSON.stringify(o.response.data),"\nRequest: ").concat(JSON.stringify(l({},n)))),!(429==o.response.status&&(c||1)<3)){e.next=8;break}return e.next=5,new Promise((function(e,o){setTimeout((function(){e(f.SEND(t,r,n,c?c+1:1))}),2e3)}));case 5:return e.abrupt("return",e.sent);case 8:throw o;case 9:e.next=14;break;case 11:if(!o.request){e.next=14;break}throw console.error(o.message),o;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)}))),function(e,r,n,o){return t.apply(this,arguments)})}]),e}()},141:function(e,t,r){"use strict";var n=r(2),o=r(196),c=r.n(o);r(267);n.default.use(c.a)},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r(182);var n=r(3),o=r(44),c=r(45),f=r(106),h=r(107),d=r(68);r(18),r(10),r(28),r(29),r(110);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(h.a)(this,r)}}var l=function(e){Object(f.a)(d,e);var t,r,h=m(d);function d(e,t){return Object(o.a)(this,d),h.call(this,e,"DeepL-Auth-Key ".concat(t))}return Object(c.a)(d,[{key:"supportedLanguages",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.GET("languages",new URLSearchParams({token:"".concat("***REMOVED***")})));case 1:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"translate",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.append("token","".concat("***REMOVED***")),e.abrupt("return",this.GET("translate",t));case 2:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),d}(r(104).a)},199:function(e,t,r){r(200),e.exports=r(201)},244:function(e,t,r){"use strict";r.r(t),r.d(t,"plugins",(function(){return o}));r(54);var n=new Array;var o=n},245:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"getters",(function(){return c})),r.d(t,"mutations",(function(){return f})),r.d(t,"actions",(function(){return h}));var n=r(3),o=(r(18),r(10),r(28),r(29),r(110),r(55),r(66),function(){return{apiToken:void 0}}),c={apiToken:function(e){return e.apiToken}},f={setAuthorization:function(e,data){e=Object.assign(e,data)},setSpaceId:function(e,t){e.spaceId=t},setApiToken:function(e,t){e.apiToken=t}},h={token:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var o,c,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.dispatch,c=e.commit,f=e.state,t=new URLSearchParams(t),c("setApiToken",t.get("token")),f.refresh_token?(t.append("grant_type","refresh_token"),t.append("refresh_token",f.refresh_token)):(t.append("grant_type","authorization_code"),c("setSpaceId",t.get("space_id"))),r.next=6,fetch("".concat("https://stage.systemair.com/api/storyblok-oauth/translate-page/token","?").concat(new URLSearchParams(t))).then((function(e){return e.json()})).then((function(data){return c("setAuthorization",data),setTimeout(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("token",{});case 2:case"end":return e.stop()}}),e)}))),1e3*(data.expires_in-30)),o("storyblok/resetClient",{accessToken:data.access_token,spaceId:f.spaceId},{root:!0})}));case 6:case"end":return r.stop()}}),r)})))()}}},246:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"state",(function(){return c})),r.d(t,"getters",(function(){return f})),r.d(t,"mutations",(function(){return h})),r.d(t,"actions",(function(){return d}));var n=r(3),o=(r(18),r(194)),c=function(){return{deepl:new o.a("***REMOVED***",e.env.DEEPL_API_KEY),supportedLanguages:void 0}},f={supportedLanguages:function(e){return e.supportedLanguages}},h={setSupportedLanguages:function(e,t){e.supportedLanguages=t}},d={retrieveSupportedLanguages:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.state,n=e.commit,void 0===r.supportedLanguages){t.next=3;break}return t.abrupt("return",r.supportedLanguages);case 3:return t.next=5,r.deepl.supportedLanguages();case 5:return o=t.sent,n("setSupportedLanguages",o),t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)})))()}}}.call(this,r(136))},266:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return c})),r.d(t,"getters",(function(){return f})),r.d(t,"mutations",(function(){return h})),r.d(t,"actions",(function(){return d}));var n=r(3),o=(r(18),r(195)),c=function(){return{client:void 0}},f={},h={setClient:function(e,t){e.client=t}},d={resetClient:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=e.commit,c=t.accessToken,f=t.spaceId,n("setClient",new o.a({oauthToken:"Bearer ".concat(c)},"https://mapi.storyblok.com/v1/spaces/".concat(f)));case 3:case"end":return r.stop()}}),r)})))()},readStory:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,n=e.state,r.abrupt("return",n.client.get("stories/".concat(t)).then((function(e){return e.data.story})));case 2:case"end":return r.stop()}}),r)})))()}}},269:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return v})),r.d(t,"getters",(function(){return y})),r.d(t,"mutations",(function(){return k})),r.d(t,"actions",(function(){return w}));var n=r(3),o=(r(18),r(10),r(182),r(44)),c=r(45),f=r(106),h=r(107),d=r(68);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(h.a)(this,r)}}var l=function(e){Object(f.a)(d,e);var t,r,h=m(d);function d(e,t){var r;return Object(o.a)(this,d),(r=h.call(this,e,"")).apiToken=t,r}return Object(c.a)(d,[{key:"translateStory",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.SEND("translate-story","POST",{params:{storyId:t,sourceLang:r,token:this.apiToken},data:void 0}));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t){return r.apply(this,arguments)})},{key:"importTranslationFile",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("files",r),e.abrupt("return",this.SEND("import-translation-file","POST",{params:{storyId:t,token:this.apiToken},headers:{"content-type":"multipart/form-data"},data:n}));case 3:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})}]),d}(r(104).a),v=function(){return{}},y={},k={},w={translate:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,f,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.state,e.rootState,n=t.storyId,o=t.sourceLanguage,t.targetLanguage,!(c=t.translationFile)){r.next=7;break}return f=new l("https://stage.systemair.com/api",sessionStorage.getItem("SYSTEMAIR_API_TRANSLATE_FILE")),r.abrupt("return",f.importTranslationFile(n,c));case 7:return h=new l("https://stage.systemair.com/api",sessionStorage.getItem("SYSTEMAIR_API_TRANSLATE_STORY")),r.abrupt("return",h.translateStory(n,o));case 9:case"end":return r.stop()}}),r)})))()}}}},[[199,5,1,6]]]);