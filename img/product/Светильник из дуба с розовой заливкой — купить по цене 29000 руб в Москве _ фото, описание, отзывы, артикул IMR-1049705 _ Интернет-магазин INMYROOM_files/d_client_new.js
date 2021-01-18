var ct_ijc_v_1 = function(selector) {
  function inject(element, value, expected_id) {
    if (element) {
      if (expected_id && (element && element.parentNode)) {
        if (element.id === expected_id) {
          element.innerHTML = value;
        }
      } else {
        element.innerHTML = value;
      }
    }
  }
  
  function html(value) {
    if (document.body && document.readyState === "complete") {
      initInject();
    } else {
      window.addEventListener('load', initInject);
    }
  
    function initInject() {
      if(selector && (selector.indexOf("#") == 0 || selector.indexOf(".") == 0)) {
        if(selector.indexOf("#") == 0) {
          inject(document.getElementById(selector.substring(1)), value, selector.substring(1));
        }
        if(selector.indexOf(".")== 0 && document.getElementsByClassName) {
          var elements = document.getElementsByClassName(selector.substring(1));
          for(var i = 0 ;  i < elements.length; i++){ inject(elements[i], value);}
        }
      }
      window.removeEventListener('load', initInject);
    }
  }
  
  return { html:html}
};
                                                                                    ct_ijc_v_1('#call_495').html('');
var ct_c=function(t){var c;return 0<(c="object"==typeof t?t:document.querySelectorAll(t)).length?c:0},ct_contains=function(t,o){try{var n=[];return ct_c(t)&&Array.prototype.forEach.call(ct_c(t),function(t,c){var e=t.firstChild;if(e)for(;3===e.nodeType&&-1!=e.nodeValue.indexOf(o)&&n.push(t),e=e.nextSibling;);}),0<n.length?n:0}catch(t){console.log(t)}},ct_not=function(t,e){try{var o=[];return ct_c(t)&&ct_c(e)&&Array.prototype.forEach.call(ct_c(t),function(t,c){-1==Array.from(ct_c(e)).indexOf(t)&&o.push(t)}),0<o.length?o:0}catch(t){console.log(t)}},ct_repl=function(t,r,a){try{ct_c(t)&&Array.prototype.forEach.call(ct_c(t),function(t,c){var e,o,n=t.firstChild;if(n)for(;3===n.nodeType&&(o=(e=n.nodeValue).replace(r,a))!==e&&(n.nodeValue=o),n=n.nextSibling;);})}catch(t){console.log(t)}},ct_repl_a=function(t,e,o){try{ct_c(t)&&Array.prototype.forEach.call(ct_c(t),function(t,c){t&&t.setAttribute(e,o)})}catch(t){console.log(t)}},ct_event_listen=function(t,c,e){try{document.addEventListener(t,{handleEvent:function(t){ct_c(c)&&-1!=Array.from(ct_c(c)).indexOf(t.target)&&e()}})}catch(t){console.log(t)}},ct_remove=function(t){try{ct_c(t)&&Array.prototype.forEach.call(ct_c(t),function(t,c){t&&t.parentNode.removeChild(t)})}catch(t){console.log(t)}},ct_ready=function(t){try{(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t),window.addEventListener("load",t)}catch(t){console.log(t)}};
function ct_replace_(){
ct_html('.call_phone_495_1','<span data-call-track-id="1" data-call-track-number="+74951724908"></span><a class="s-Header-Context_b-Phone" href="tel:+74951724908">8 495 172 49 08</a>');
ct_html('.call_phone_495_2','<span data-call-track-id="1" data-call-track-number="+74951724908"></span><a class="s-Footer_b-Phone" href="tel:+74951724908">8 495 172 49 08</a>');
ct_html('.call_phone_495_3','+7 (495) 172 49 08');
ct_html('.call_phone_800_1','');
ct_html('.call_phone_800_2','');
ct_repl('body *',/.495. 286.70.10/gi,'(495) 172-49-08');
ct_repl('body *',/495 286.7010/gi,'495 172-4908');
ct_repl_a('a[href*="74952867010"]','href','tel:+74951724908');
}

ct_ready(ct_replace_);

void('');
                                                    window.calltouch_phone = "74951724908";        // получить ctObject из параметров урла
        // заменить на
        // if (window[ctObject] && typeof window[ctObject] === 'function')
        // { window[ctObject]('create_session', params) }
        if (window.ct_create_session && typeof window.ct_create_session === 'function') {
          window.ct_create_session({ sessionId: 311854782, siteId: 27790, modId: 'zjhbd57u', setCookie: true, endSessionTime: 1610988465, phones: {"145143":"448774"}, domain: 'inmyroom.ru', setCtCookie: '1400000000092308963', setLkCookie: null, denialTime: 15, phoneNumbers: ['74951724908'] });
        } else {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "GET", 'https://mod.calltouch.ru/set_attrs_by_get.php?siteId=27790&sessionId=311854782&attrs={"clientError_NO_CT_CREATE_SESSION": 1}', true );
          xmlHttp.send( null );
        }
        
window.ctw = {};
window.ctw.clientFormConfig = {}
window.ctw.clientFormConfig.getClientFormsSettingsUrl = "//mod.calltouch.ru/callback_widget_user_form_find.php";
window.ctw.clientFormConfig.sendClientFormsRequestUrl = "//mod.calltouch.ru/callback_request_user_form_create.php";
(function (targetWindow, nameSpace, params){
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="//mod.calltouch.ru/",n(n.s=121)}({12:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},121:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r);function a(e,t,n){try{var r=new(XMLHttpRequest||ActiveXObject)("MSXML2.XMLHTTP.3.0");r.open(t?"POST":"GET",e,1),r.timeout=6e4,r.setRequestHeader("Content-type","application/json"),r.onreadystatechange=function(){if(4===r.readyState&&n)if(200===r.status){var e=function(e){var t;try{t=JSON.parse(e)}catch(e){}return t}(r.response);e?e.data?n(!0,o()({},e.data)):e.error?n(!1,o()({},e.error)):n(!1,{type:"unknown_error",message:"Unknown JSON format",details:{}}):n(!1,{type:"unknown_error",message:"JSON parse error",details:{}})}else 0===r.status?n(!1,{type:"unknown_error",message:"Request timeout exceeded or connection reset",details:{}}):n(!1,{type:"unknown_error",message:"Unexpected HTTP code: ".concat(r.statusText),details:{}})},r.send(t)}catch(e){n&&n(!1,{type:"unknown_error",message:"Unexpected js exception",details:{}})}}!function(e,t,n){var r=e||window,o=t||"ctw";r[o]||(r[o]={});var c=r[o].clientFormConfig||{},i=c.getClientFormsSettingsUrl,u=c.sendClientFormsRequestUrl;r[o].getRouteKeyData=function(e,t){var r=1e6*Math.random(),o="".concat(i,"?siteId=").concat(n.siteId,"&routeKey=").concat(e,"&pageUrl=").concat(n.pageUrl,"&sessionId=").concat(n.sessionId);a("".concat(o,"&rand=").concat(Math.floor(r)),null,t)},r[o].createRequest=function(e,t,r,o){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=1e6*Math.random(),d={siteId:n.siteId,sessionId:n.sessionId,workMode:1,pageUrl:n.pageUrl,tags:i,phone:t,routeKey:e,fields:r,scheduleTime:c,unitId:s};a("".concat(u,"?rand=").concat(Math.floor(l)),JSON.stringify(d),o)}}(targetWindow,nameSpace,params)},5:function(e,t,n){var r=n(12);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}}});
})(window, "ctw", {"siteId":27790,"sessionId":311854782,"pageUrl":"https:\/\/www.inmyroom.ru\/products\/1049705-svetilnik-iz-duba-s-rozovoj-zalivkoj?utm_campaign=cpc&utm_content=bra-i-nastennye-svetilniki&utm_medium=merchant&utm_source=google&gclid=CjwKCAiAgJWABhArEiwAmNVTB3VP-FipCfp4WyS_M8-UvH8Xil2JmFlJ52YAnbcmUsPW7OH3wILBiBoCqcwQAvD_BwE"})
if (typeof window['ct']) {window['ct']('modules','widgets','goalObserver','achievedGoal','wss://ws.calltouch.ru/sub/a14e59a34c849880f67a69e4b32c5079');}

var call_value = '311854782';
var call_value_zjhbd57u = call_value;
if(window.onSessionCallValue) {
    onSessionCallValue('311854782', '');
}
