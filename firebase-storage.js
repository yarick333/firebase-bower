/*! @license Firebase v4.1.4
Build: rev-eb1a6fc
Terms: https://firebase.google.com/terms/ */

try{webpackJsonpFirebase([1],{22:function(t,e,n){"use strict";function r(t){return"storage/"+t}function o(){return new $t(te.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function i(t){return new $t(te.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function a(t){return new $t(te.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function u(){return new $t(te.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again.")}function s(t){return new $t(te.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function c(){return new $t(te.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function l(){return new $t(te.CANCELED,"User canceled the upload/download.")}function p(t){return new $t(te.INVALID_URL,"Invalid URL '"+t+"'.")}function h(t){return new $t(te.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function f(){return new $t(te.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function d(){return new $t(te.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function _(){return new $t(te.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function v(t,e,n){return new $t(te.INVALID_ARGUMENT,"Invalid argument in `"+e+"` at index "+t+": "+n)}function b(t,e,n,r){var o,i;return t===e?(o=t,i=1===t?"argument":"arguments"):(o="between "+t+" and "+e,i="arguments"),new $t(te.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+n+"`: Expected "+o+" "+i+", received "+r+".")}function m(){return new $t(te.APP_DELETED,"The Firebase app was deleted.")}function y(t){return new $t(te.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function g(t,e){return new $t(te.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function R(t){throw new $t(te.INTERNAL_ERROR,"Internal error: "+t)}function E(t){switch(t){case ee.RAW:case ee.BASE64:case ee.BASE64URL:case ee.DATA_URL:return;default:throw"Expected one of the event types: ["+ee.RAW+", "+ee.BASE64+", "+ee.BASE64URL+", "+ee.DATA_URL+"]."}}function w(t,e){switch(t){case ee.RAW:return new ne(U(e));case ee.BASE64:case ee.BASE64URL:return new ne(A(t,e));case ee.DATA_URL:return new ne(N(e),O(e))}throw o()}function U(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296==(64512&r)){var o=n<t.length-1&&56320==(64512&t.charCodeAt(n+1));if(o){var i=r,a=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&a,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320==(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function T(t){var e;try{e=decodeURIComponent(t)}catch(t){throw g(ee.DATA_URL,"Malformed data URL.")}return U(e)}function A(t,e){switch(t){case ee.BASE64:var n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){var o=n?"-":"_";throw g(t,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case ee.BASE64URL:var i=-1!==e.indexOf("+"),a=-1!==e.indexOf("/");if(i||a){var o=i?"+":"/";throw g(t,"Invalid character '"+o+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/")}var u;try{u=atob(e)}catch(e){throw g(t,"Invalid character found")}for(var s=new Uint8Array(u.length),c=0;c<u.length;c++)s[c]=u.charCodeAt(c);return s}function N(t){var e=new re(t);return e.base64?A(ee.BASE64,e.rest):T(e.rest)}function O(t){return new re(t).contentType}function C(t,e){return!!(t.length>=e.length)&&t.substring(t.length-e.length)===e}function S(t){switch(t){case ie.RUNNING:case ie.PAUSING:case ie.CANCELING:return ae.RUNNING;case ie.PAUSED:return ae.PAUSED;case ie.SUCCESS:return ae.SUCCESS;case ie.CANCELED:return ae.CANCELED;case ie.ERROR:default:return ae.ERROR}}function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function I(t,e){for(var n in t)k(t,n)&&e(n,t[n])}function L(t){if(null==t)return{};var e={};return I(t,function(t,n){e[t]=n}),e}function x(t){return new ue.b(t)}function P(t){return ue.b.resolve(t)}function D(t){return ue.b.reject(t)}function M(t){return null!=t}function W(t){return void 0!==t}function B(t){return"function"==typeof t}function G(t){return"object"===(void 0===t?"undefined":se(t))}function j(t){return G(t)&&null!==t}function q(t){return G(t)&&!Array.isArray(t)}function F(t){return"string"==typeof t||t instanceof String}function H(t){return"number"==typeof t||t instanceof Number}function z(t){return X()&&t instanceof Blob}function X(){return"undefined"!=typeof Blob}function V(t){var e;try{e=JSON.parse(t)}catch(t){return null}return q(e)?e:null}function K(t){if(0==t.length)return null;var e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}function Z(t,e){var n=e.split("/").filter(function(t){return t.length>0}).join("/");return 0===t.length?n:t+"/"+n}function J(t){var e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}function Q(t){return Xt+Kt+t}function Y(t){return Vt+Kt+t}function $(t){return Xt+Zt+t}function tt(t){var e=encodeURIComponent,n="?";return I(t,function(t,r){var o=e(t)+"="+e(r);n=n+o+"&"}),n=n.slice(0,-1)}function et(t,e){return e}function nt(t){return!F(t)||t.length<2?t:(t=t,J(t))}function rt(){function t(t,e){return nt(e)}function e(t,e){return M(e)?+e:e}function n(t,e){if(!(F(e)&&e.length>0))return[];var n=encodeURIComponent;return e.split(",").map(function(e){var r=t.bucket,o=t.fullPath;return Y("/b/"+n(r)+"/o/"+n(o))+tt({alt:"media",token:e})})}if(fe)return fe;var r=[];r.push(new he("bucket")),r.push(new he("generation")),r.push(new he("metageneration")),r.push(new he("name","fullPath",!0));var o=new he("name");o.xform=t,r.push(o);var i=new he("size");return i.xform=e,r.push(i),r.push(new he("timeCreated")),r.push(new he("updated")),r.push(new he("md5Hash",null,!0)),r.push(new he("cacheControl",null,!0)),r.push(new he("contentDisposition",null,!0)),r.push(new he("contentEncoding",null,!0)),r.push(new he("contentLanguage",null,!0)),r.push(new he("contentType",null,!0)),r.push(new he("metadata","customMetadata",!0)),r.push(new he("downloadTokens","downloadURLs",!1,n)),fe=r}function ot(t,e){function n(){var n=t.bucket,r=t.fullPath,o=new pe(n,r);return e.makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function it(t,e,n){var r={};r.type="file";for(var o=n.length,i=0;i<o;i++){var a=n[i];r[a.local]=a.xform(r,e[a.server])}return ot(r,t),r}function at(t,e,n){var r=V(e);return null===r?null:it(t,r,n)}function ut(t,e){for(var n={},r=e.length,o=0;o<r;o++){var i=e[o];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}function st(t){if(!t||!G(t))throw"Expected Metadata object.";for(var e in t){var n=t[e];if("customMetadata"===e){if(!G(n))throw"Expected object for 'customMetadata' mapping."}else if(j(n))throw"Mapping for '"+e+"' cannot be an object."}}function ct(t,e,n){for(var r=e.length,o=e.length,i=0;i<e.length;i++)if(e[i].optional){r=i;break}if(!(r<=n.length&&n.length<=o))throw b(r,o,t,n.length);for(var i=0;i<n.length;i++)try{e[i].validator(n[i])}catch(e){throw e instanceof Error?v(i,t,e.message):v(i,t,e)}}function lt(t,e){return function(n){t(n),e(n)}}function pt(t,e){function n(t){if(!F(t))throw"Expected string."}var r;return r=t?lt(n,t):n,new de(r,e)}function ht(){function t(t){if(!(t instanceof Uint8Array||t instanceof ArrayBuffer||X()&&t instanceof Blob))throw"Expected Blob or File."}return new de(t)}function ft(t){return new de(st,t)}function dt(){function t(t){if(!(H(t)&&t>=0))throw"Expected a number 0 or greater."}return new de(t)}function _t(t,e){function n(e){if(!(null===e||M(e)&&e instanceof Object))throw"Expected an Object.";void 0!==t&&null!==t&&t(e)}return new de(n,e)}function vt(t){function e(t){if(null!==t&&!B(t))throw"Expected a Function."}return new de(e,t)}function bt(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function mt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=bt();if(void 0!==n){for(var r=new n,o=0;o<t.length;o++)r.append(t[o]);return r.getBlob()}if(X())return new Blob(t);throw Error("This browser doesn't seem to support creating Blobs")}function yt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}function gt(t,e){return-1!==t.indexOf(e)}function Rt(t){return Array.prototype.slice.call(t)}function Et(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function wt(t){if(!t)throw o()}function Ut(t,e){function n(n,r){var o=at(t,r,e);return wt(null!==o),o}return n}function Tt(t){function e(e,n){var r;return r=401===e.getStatus()?u():402===e.getStatus()?a(t.bucket):403===e.getStatus()?s(t.path):n,r.setServerResponseProp(n.serverResponseProp()),r}return e}function At(t){function e(e,r){var o=n(e,r);return 404===e.getStatus()&&(o=i(t.path)),o.setServerResponseProp(r.serverResponseProp()),o}var n=Tt(t);return e}function Nt(t,e,n){var r=e.fullServerUrl(),o=Q(r),i=t.maxOperationRetryTime(),a=new ve(o,"GET",Ut(t,n),i);return a.errorHandler=At(e),a}function Ot(t,e,n,r){var o=e.fullServerUrl(),i=Q(o),a=ut(n,r),u={"Content-Type":"application/json; charset=utf-8"},s=t.maxOperationRetryTime(),c=new ve(i,"PATCH",Ut(t,r),s);return c.headers=u,c.body=a,c.errorHandler=At(e),c}function Ct(t,e){function n(t,e){}var r=e.fullServerUrl(),o=Q(r),i=t.maxOperationRetryTime(),a=new ve(o,"DELETE",n,i);return a.successCodes=[200,204],a.errorHandler=At(e),a}function St(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function kt(t,e,n){var r=L(n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=St(null,e)),r}function It(t,e,n,r,o){var i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},u=function(){for(var t="",e=0;e<2;e++)t+=(""+Math.random()).slice(2);return t}();a["Content-Type"]="multipart/related; boundary="+u;var s=kt(e,r,o),c=ut(s,n),l="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+u+"\r\nContent-Type: "+s.contentType+"\r\n\r\n",p="\r\n--"+u+"--",h=_e.getBlob(l,r,p);if(null===h)throw f();var d={name:s.fullPath},_=$(i),v=t.maxUploadRetryTime(),b=new ve(_,"POST",Ut(t,n),v);return b.urlParams=d,b.headers=a,b.body=h.uploadData(),b.errorHandler=Tt(e),b}function Lt(t,e){var n;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(t){wt(!1)}return wt(gt(e||["active"],n)),n}function xt(t,e,n,r,o){function i(t,e){Lt(t);var n;try{n=t.getResponseHeader("X-Goog-Upload-URL")}catch(t){wt(!1)}return wt(F(n)),n}var a=e.bucketOnlyServerUrl(),u=kt(e,r,o),s={name:u.fullPath},c=$(a),l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":r.size(),"X-Goog-Upload-Header-Content-Type":u.contentType,"Content-Type":"application/json; charset=utf-8"},p=ut(u,n),h=t.maxUploadRetryTime(),f=new ve(c,"POST",i,h);return f.urlParams=s,f.headers=l,f.body=p,f.errorHandler=Tt(e),f}function Pt(t,e,n,r){function o(t,e){var n,o=Lt(t,["active","final"]);try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(t){wt(!1)}var i=parseInt(n,10);return wt(!isNaN(i)),new be(i,r.size(),"final"===o)}var i={"X-Goog-Upload-Command":"query"},a=t.maxUploadRetryTime(),u=new ve(n,"POST",o,a);return u.headers=i,u.errorHandler=Tt(e),u}function Dt(t,e,n,r,o,i,a,u){function s(t,n){var o,a=Lt(t,["active","final"]),u=c.current+p,s=r.size();return o="final"===a?Ut(e,i)(t,n):null,new be(u,s,"final"===a,o)}var c=new be(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw d();var l=c.total-c.current,p=l;o>0&&(p=Math.min(p,o));var h=c.current,_=h+p,v=p===l?"upload, finalize":"upload",b={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":c.current},m=r.slice(h,_);if(null===m)throw f();var y=e.maxUploadRetryTime(),g=new ve(n,"POST",s,y);return g.headers=b,g.body=m.uploadData(),g.progressCallback=u||null,g.errorHandler=Tt(t),g}function Mt(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];P(!0).then(function(){t.apply(null,e)})}}function Wt(t,e,n){function r(){return 2===p}function o(){h||(h=!0,e.apply(null,arguments))}function i(e){c=setTimeout(function(){c=null,t(a,r())},e)}function a(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!h){if(t)return void o.apply(null,arguments);if(r()||l)return void o.apply(null,arguments);s<64&&(s*=2);var a;1===p?(p=2,a=0):a=1e3*(s+Math.random()),i(a)}}function u(t){f||(f=!0,h||(null!==c?(t||(p=2),clearTimeout(c),i(0)):t||(p=1)))}var s=1,c=null,l=!1,p=0,h=!1,f=!1;return i(0),setTimeout(function(){l=!0,u(!0)},n),u}function Bt(t){t(!1)}function Gt(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}function jt(t){var e="undefined"!=typeof firebase?firebase.SDK_VERSION:"AppManager";t["X-Firebase-Storage-Version"]="webjs/"+e}function qt(t,e,n){var r=tt(t.urlParams),o=t.url+r,i=L(t.headers);return Gt(i,e),jt(i),new Te(o,t.method,i,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,n)}function Ft(t,e,n){return new Ne(t,new le,n)}function Ht(t){var e={TaskState:ae,TaskEvent:oe,StringFormat:ee,Storage:Ne,Reference:Re};t.INTERNAL.registerService(Ce,Ft,e,void 0,!0)}Object.defineProperty(e,"__esModule",{value:!0});var zt,Xt="https://firebasestorage.googleapis.com",Vt="https://firebasestorage.googleapis.com",Kt="/v0",Zt="/v0",Jt=12e4,Qt=6e4,Yt=-9007199254740991,$t=function(){function t(t,e){this.t=r(t),this.e="Firebase Storage: "+e,this.n=null,this.r="FirebaseError"}return t.prototype.codeProp=function(){return this.code},t.prototype.codeEquals=function(t){return r(t)===this.codeProp()},t.prototype.serverResponseProp=function(){return this.n},t.prototype.setServerResponseProp=function(t){this.n=t},Object.defineProperty(t.prototype,"name",{get:function(){return this.r},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"code",{get:function(){return this.t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this.e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.n},enumerable:!0,configurable:!0}),t}(),te={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"},ee={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},ne=function(){function t(t,e){this.data=t,this.contentType=e||null}return t}(),re=function(){function t(t){this.base64=!1,this.contentType=null;var e=t.match(/^data:([^,]+)?,/);if(null===e)throw g(ee.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var n=e[1]||null;null!=n&&(this.base64=C(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}return t}(),oe={STATE_CHANGED:"state_changed"},ie={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},ae={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},ue=n(4),se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(zt||(zt={}));var ce=function(){function t(){var t=this;this.o=!1,this.i=new XMLHttpRequest,this.a=zt.NO_ERROR,this.u=x(function(e,n){t.i.addEventListener("abort",function(n){t.a=zt.ABORT,e(t)}),t.i.addEventListener("error",function(n){t.a=zt.NETWORK_ERROR,e(t)}),t.i.addEventListener("load",function(n){e(t)})})}return t.prototype.send=function(t,e,n,r){var o=this;if(this.o)throw R("cannot .send() more than once");return this.o=!0,this.i.open(e,t,!0),M(r)&&I(r,function(t,e){o.i.setRequestHeader(t,""+e)}),M(n)?this.i.send(n):this.i.send(),this.u},t.prototype.getErrorCode=function(){if(!this.o)throw R("cannot .getErrorCode() before sending");return this.a},t.prototype.getStatus=function(){if(!this.o)throw R("cannot .getStatus() before sending");try{return this.i.status}catch(t){return-1}},t.prototype.getResponseText=function(){if(!this.o)throw R("cannot .getResponseText() before sending");return this.i.responseText},t.prototype.abort=function(){this.i.abort()},t.prototype.getResponseHeader=function(t){return this.i.getResponseHeader(t)},t.prototype.addUploadProgressListener=function(t){M(this.i.upload)&&this.i.upload.addEventListener("progress",t)},t.prototype.removeUploadProgressListener=function(t){M(this.i.upload)&&this.i.upload.removeEventListener("progress",t)},t}(),le=function(){function t(){}return t.prototype.createXhrIo=function(){return new ce},t}(),pe=function(){function t(t,e){this.bucket=t,this.s=e}return Object.defineProperty(t.prototype,"path",{get:function(){return this.s},enumerable:!0,configurable:!0}),t.prototype.fullServerUrl=function(){var t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)},t.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},t.makeFromBucketSpec=function(e){var n;try{n=t.makeFromUrl(e)}catch(n){return new t(e,"")}if(""===n.path)return n;throw h(e)},t.makeFromUrl=function(e){function n(t){"/"===t.path.charAt(t.path.length-1)&&(t.s=t.s.slice(0,-1))}function r(t){t.s=decodeURIComponent(t.path)}for(var o=null,i=RegExp("^gs://([A-Za-z0-9.\\-]+)(/(.*))?$","i"),a={bucket:1,path:3},u=RegExp("^https?://firebasestorage\\.googleapis\\.com/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-]+)/o(/([^?#]*).*)?$","i"),s={bucket:1,path:3},c=[{regex:i,indices:a,postModify:n},{regex:u,indices:s,postModify:r}],l=0;l<c.length;l++){var h=c[l],f=h.regex.exec(e);if(f){var d=f[h.indices.bucket],_=f[h.indices.path];_||(_=""),o=new t(d,_),h.postModify(o);break}}if(null==o)throw p(e);return o},t}(),he=function(){function t(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||et}return t}(),fe=null,de=function(){function t(t,e){var n=this;this.validator=function(e){n.optional&&!W(e)||t(e)},this.optional=!!e}return t}(),_e=function(){function t(t,e){var n=0,r="";z(t)?(this.c=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.c=new Uint8Array(t):(this.c=new Uint8Array(t.byteLength),this.c.set(new Uint8Array(t))),n=this.c.length):t instanceof Uint8Array&&(e?this.c=t:(this.c=new Uint8Array(t.length),this.c.set(t)),n=t.length),this.l=n,this.p=r}return t.prototype.size=function(){return this.l},t.prototype.type=function(){return this.p},t.prototype.slice=function(e,n){if(z(this.c)){var r=this.c,o=yt(r,e,n);return null===o?null:new t(o)}return new t(new Uint8Array(this.c.buffer,e,n-e),!0)},t.getBlob=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(X()){var r=e.map(function(e){return e instanceof t?e.c:e});return new t(mt.apply(null,r))}var o=e.map(function(t){return F(t)?w(ee.RAW,t).data:t.c}),i=0;o.forEach(function(t){i+=t.byteLength});var a=new Uint8Array(i),u=0;return o.forEach(function(t){for(var e=0;e<t.length;e++)a[u++]=t[e]}),new t(a,!0)},t.prototype.uploadData=function(){return this.c},t}(),ve=function(){function t(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return t}(),be=function(){function t(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}return t}(),me=function(){function t(t,e,n){if(B(t)||M(e)||M(n))this.next=t,this.error=e||null,this.complete=n||null;else{var r=t;this.next=r.next||null,this.error=r.error||null,this.complete=r.complete||null}}return t}(),ye=function(){function t(t,e,n,r,o,i){this.bytesTransferred=t,this.totalBytes=e,this.state=n,this.metadata=r,this.task=o,this.ref=i}return Object.defineProperty(t.prototype,"downloadURL",{get:function(){if(null!==this.metadata){var t=this.metadata.downloadURLs;return null!=t&&null!=t[0]?t[0]:null}return null},enumerable:!0,configurable:!0}),t}(),ge=function(){function t(t,e,n,r,o,i){void 0===i&&(i=null);var a=this;this.h=0,this.f=!1,this.d=!1,this._=[],this.v=null,this.m=null,this.y=null,this.g=1,this.R=null,this.w=null,this.U=t,this.T=e,this.A=n,this.N=o,this.O=i,this.C=r,this.S=this.k(this.N),this.I=ie.RUNNING,this.L=function(t){a.y=null,a.g=1,t.codeEquals(te.CANCELED)?(a.f=!0,a.x()):(a.v=t,a.P(ie.ERROR))},this.D=function(t){a.y=null,t.codeEquals(te.CANCELED)?a.x():(a.v=t,a.P(ie.ERROR))},this.M=x(function(t,e){a.R=t,a.w=e,a.W()}),this.M.then(null,function(){})}return t.prototype.B=function(){var t=this,e=this.h;return function(n,r){t.G(e+n)}},t.prototype.k=function(t){return t.size()>262144},t.prototype.W=function(){this.I===ie.RUNNING&&null===this.y&&(this.S?null===this.m?this.j():this.f?this.q():this.d?this.F():this.H():this.z())},t.prototype.X=function(t){var e=this;this.T.getAuthToken().then(function(n){switch(e.I){case ie.RUNNING:t(n);break;case ie.CANCELING:e.P(ie.CANCELED);break;case ie.PAUSING:e.P(ie.PAUSED)}})},t.prototype.j=function(){var t=this;this.X(function(e){var n=xt(t.T,t.A,t.C,t.N,t.O),r=t.T.makeRequest(n,e);t.y=r,r.getPromise().then(function(e){t.y=null,t.m=e,t.f=!1,t.x()},t.L)})},t.prototype.q=function(){var t=this,e=this.m;this.X(function(n){var r=Pt(t.T,t.A,e,t.N),o=t.T.makeRequest(r,n);t.y=o,o.getPromise().then(function(e){e=e,t.y=null,t.G(e.current),t.f=!1,e.finalized&&(t.d=!0),t.x()},t.L)})},t.prototype.H=function(){var t=this,e=262144*this.g,n=new be(this.h,this.N.size()),r=this.m;this.X(function(o){var i;try{i=Dt(t.A,t.T,r,t.N,e,t.C,n,t.B())}catch(e){return t.v=e,void t.P(ie.ERROR)}var a=t.T.makeRequest(i,o);t.y=a,a.getPromise().then(function(e){t.V(),t.y=null,t.G(e.current),e.finalized?(t.O=e.metadata,t.P(ie.SUCCESS)):t.x()},t.L)})},t.prototype.V=function(){262144*this.g<33554432&&(this.g*=2)},t.prototype.F=function(){var t=this;this.X(function(e){var n=Nt(t.T,t.A,t.C),r=t.T.makeRequest(n,e);t.y=r,r.getPromise().then(function(e){t.y=null,t.O=e,t.P(ie.SUCCESS)},t.D)})},t.prototype.z=function(){var t=this;this.X(function(e){var n=It(t.T,t.A,t.C,t.N,t.O),r=t.T.makeRequest(n,e);t.y=r,r.getPromise().then(function(e){t.y=null,t.O=e,t.G(t.N.size()),t.P(ie.SUCCESS)},t.L)})},t.prototype.G=function(t){var e=this.h;this.h=t,this.h!==e&&this.K()},t.prototype.P=function(t){if(this.I!==t)switch(t){case ie.CANCELING:case ie.PAUSING:this.I=t,null!==this.y&&this.y.cancel();break;case ie.RUNNING:var e=this.I===ie.PAUSED;this.I=t,e&&(this.K(),this.W());break;case ie.PAUSED:this.I=t,this.K();break;case ie.CANCELED:this.v=l(),this.I=t,this.K();break;case ie.ERROR:case ie.SUCCESS:this.I=t,this.K()}},t.prototype.x=function(){switch(this.I){case ie.PAUSING:this.P(ie.PAUSED);break;case ie.CANCELING:this.P(ie.CANCELED);break;case ie.RUNNING:this.W()}},Object.defineProperty(t.prototype,"snapshot",{get:function(){var t=S(this.I);return new ye(this.h,this.N.size(),t,this.O,this,this.U)},enumerable:!0,configurable:!0}),t.prototype.on=function(t,e,n,r){function o(e){if(t!==oe.STATE_CHANGED)throw"Expected one of the event types: ["+oe.STATE_CHANGED+"]."}function i(t){try{return void c(t)}catch(t){}try{if(l(t),!(W(t.next)||W(t.error)||W(t.complete)))throw"";return}catch(t){throw s}}function a(t){function e(e,n,o){null!==t&&ct("on",t,arguments);var i=new me(e,n,r);return p.Z(i),function(){p.J(i)}}return e}function u(t){if(null===t)throw s;i(t)}void 0===e&&(e=void 0),void 0===n&&(n=void 0),void 0===r&&(r=void 0);var s="Expected a function or an Object with one of `next`, `error`, `complete` properties.",c=vt(!0).validator,l=_t(null,!0).validator;ct("on",[pt(o),_t(i,!0),vt(!0),vt(!0)],arguments);var p=this,h=[_t(u),vt(!0),vt(!0)];return W(e)||W(n)||W(r)?a(null)(e,n,r):a(h)},t.prototype.then=function(t,e){return this.M.then(t,e)},t.prototype.catch=function(t){return this.then(null,t)},t.prototype.Z=function(t){this._.push(t),this.Q(t)},t.prototype.J=function(t){Et(this._,t)},t.prototype.K=function(){var t=this;this.Y(),Rt(this._).forEach(function(e){t.Q(e)})},t.prototype.Y=function(){if(null!==this.R){var t=!0;switch(S(this.I)){case ae.SUCCESS:Mt(this.R.bind(null,this.snapshot))();break;case ae.CANCELED:case ae.ERROR:Mt(this.w.bind(null,this.v))();break;default:t=!1}t&&(this.R=null,this.w=null)}},t.prototype.Q=function(t){switch(S(this.I)){case ae.RUNNING:case ae.PAUSED:null!==t.next&&Mt(t.next.bind(t,this.snapshot))();break;case ae.SUCCESS:null!==t.complete&&Mt(t.complete.bind(t))();break;case ae.CANCELED:case ae.ERROR:null!==t.error&&Mt(t.error.bind(t,this.v))();break;default:null!==t.error&&Mt(t.error.bind(t,this.v))()}},t.prototype.resume=function(){ct("resume",[],arguments);var t=this.I===ie.PAUSED||this.I===ie.PAUSING;return t&&this.P(ie.RUNNING),t},t.prototype.pause=function(){ct("pause",[],arguments);var t=this.I===ie.RUNNING;return t&&this.P(ie.PAUSING),t},t.prototype.cancel=function(){ct("cancel",[],arguments);var t=this.I===ie.RUNNING||this.I===ie.PAUSING;return t&&this.P(ie.CANCELING),t},t}(),Re=function(){function t(t,e){this.authWrapper=t,this.location=e instanceof pe?e:pe.makeFromUrl(e)}return t.prototype.toString=function(){return ct("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},t.prototype.newRef=function(e,n){return new t(e,n)},t.prototype.mappings=function(){return rt()},t.prototype.child=function(t){ct("child",[pt()],arguments);var e=Z(this.location.path,t),n=new pe(this.location.bucket,e);return this.newRef(this.authWrapper,n)},Object.defineProperty(t.prototype,"parent",{get:function(){var t=K(this.location.path);if(null===t)return null;var e=new pe(this.location.bucket,t);return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){var t=new pe(this.location.bucket,"");return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return J(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),t.prototype.put=function(t,e){return void 0===e&&(e=null),ct("put",[ht(),ft(!0)],arguments),this.$("put"),new ge(this,this.authWrapper,this.location,this.mappings(),new _e(t),e)},t.prototype.putString=function(t,e,n){void 0===e&&(e=ee.RAW),ct("putString",[pt(),pt(E,!0),ft(!0)],arguments),this.$("putString");var r=w(e,t),o=L(n);return!M(o.contentType)&&M(r.contentType)&&(o.contentType=r.contentType),new ge(this,this.authWrapper,this.location,this.mappings(),new _e(r.data,!0),o)},t.prototype.delete=function(){ct("delete",[],arguments),this.$("delete");var t=this;return this.authWrapper.getAuthToken().then(function(e){var n=Ct(t.authWrapper,t.location);return t.authWrapper.makeRequest(n,e).getPromise()})},t.prototype.getMetadata=function(){ct("getMetadata",[],arguments),this.$("getMetadata");var t=this;return this.authWrapper.getAuthToken().then(function(e){var n=Nt(t.authWrapper,t.location,t.mappings());return t.authWrapper.makeRequest(n,e).getPromise()})},t.prototype.updateMetadata=function(t){ct("updateMetadata",[ft()],arguments),this.$("updateMetadata");var e=this;return this.authWrapper.getAuthToken().then(function(n){var r=Ot(e.authWrapper,e.location,t,e.mappings());return e.authWrapper.makeRequest(r,n).getPromise()})},t.prototype.getDownloadURL=function(){return ct("getDownloadURL",[],arguments),this.$("getDownloadURL"),this.getMetadata().then(function(t){var e=t.downloadURLs[0];if(M(e))return e;throw _()})},t.prototype.$=function(t){if(""===this.location.path)throw y(t)},t}(),Ee=function(){function t(t){this.M=D(t)}return t.prototype.getPromise=function(){return this.M},t.prototype.cancel=function(t){void 0===t&&(t=!1)},t}(),we=function(){function t(){this.tt={},this.et=Yt}return t.prototype.addRequest=function(t){function e(){delete r.tt[n]}var n=this.et;this.et++,this.tt[n]=t;var r=this;t.getPromise().then(e,e)},t.prototype.clear=function(){I(this.tt,function(t,e){e&&e.cancel(!0)}),this.tt={}},t}(),Ue=function(){function t(e,n,r,o,i){if(this.nt=null,this.rt=!1,this.ot=e,null!==this.ot){var a=this.ot.options;M(a)&&(this.nt=t.it(a))}this.ut=n,this.st=r,this.ct=i,this.lt=o,this.pt=Jt,this.ht=Qt,this.ft=new we}return t.it=function(t){var e=t.storageBucket||null;return null==e?null:pe.makeFromBucketSpec(e).bucket},t.prototype.getAuthToken=function(){return null!==this.ot&&M(this.ot.INTERNAL)&&M(this.ot.INTERNAL.getToken)?this.ot.INTERNAL.getToken().then(function(t){return null!==t?t.accessToken:null},function(t){return null}):P(null)},t.prototype.bucket=function(){if(this.rt)throw m();return this.nt},t.prototype.service=function(){return this.lt},t.prototype.makeStorageReference=function(t){return this.ut(this,t)},t.prototype.makeRequest=function(t,e){if(this.rt)return new Ee(m());var n=this.st(t,e,this.ct);return this.ft.addRequest(n),n},t.prototype.deleteApp=function(){this.rt=!0,this.ot=null,this.ft.clear()},t.prototype.maxUploadRetryTime=function(){return this.ht},t.prototype.setMaxUploadRetryTime=function(t){this.ht=t},t.prototype.maxOperationRetryTime=function(){return this.pt},t.prototype.setMaxOperationRetryTime=function(t){this.pt=t},t}(),Te=function(){function t(t,e,n,r,o,i,a,u,s,c,l){this.dt=null,this._t=null,this.R=null,this.w=null,this.vt=!1,this.bt=!1,this.mt=t,this.yt=e,this.gt=n,this.Rt=r,this.Et=o.slice(),this.wt=i.slice(),this.Ut=a,this.Tt=u,this.At=c,this.Nt=s,this.ct=l;var p=this;this.M=x(function(t,e){p.R=t,p.w=e,p.W()})}return t.prototype.W=function(){function t(t,e){function r(t){var e=t.loaded,r=t.lengthComputable?t.total:-1;null!==n.At&&n.At(e,r)}if(e)return void t(!1,new Ae(!1,null,!0));var o=n.ct.createXhrIo();n.dt=o,null!==n.At&&o.addUploadProgressListener(r),o.send(n.mt,n.yt,n.Rt,n.gt).then(function(e){null!==n.At&&e.removeUploadProgressListener(r),n.dt=null,e=e;var o=e.getErrorCode()===zt.NO_ERROR,i=e.getStatus();if(!o||n.Ot(i)){var a=e.getErrorCode()===zt.ABORT;return void t(!1,new Ae(!1,null,a))}var u=gt(n.Et,i);t(!0,new Ae(u,e))})}function e(t,e){var r=n.R,i=n.w,a=e.xhr;if(e.wasSuccessCode)try{var u=n.Ut(a,a.getResponseText());W(u)?r(u):r()}catch(t){i(t)}else if(null!==a){var s=o();s.setServerResponseProp(a.getResponseText()),i(n.Tt?n.Tt(a,s):s)}else if(e.canceled){var s=n.bt?m():l();i(s)}else{var s=c();i(s)}}var n=this;this.vt?e(!1,new Ae(!1,null,!0)):this._t=Wt(t,e,this.Nt)},t.prototype.getPromise=function(){return this.M},t.prototype.cancel=function(t){this.vt=!0,this.bt=t||!1,null!==this._t&&Bt(this._t),null!==this.dt&&this.dt.abort()},t.prototype.Ot=function(t){var e=t>=500&&t<600,n=[408,429],r=gt(n,t),o=gt(this.wt,t);return e||r||o},t}(),Ae=function(){function t(t,e,n){this.wasSuccessCode=t,this.xhr=e,this.canceled=!!n}return t}(),Ne=function(){function t(t,e,n){function r(t,e){return new Re(t,e)}if(this.nt=null,this.T=new Ue(t,r,qt,this,e),this.ot=t,null!=n)this.nt=pe.makeFromBucketSpec(n);else{var o=this.T.bucket();null!=o&&(this.nt=new pe(o,""))}this.Ct=new Oe(this)}return t.prototype.ref=function(t){function e(t){if(/^[A-Za-z]+:\/\//.test(t))throw"Expected child path but got a URL, use refFromURL instead."}if(ct("ref",[pt(e,!0)],arguments),null==this.nt)throw Error("No Storage Bucket defined in Firebase Options.");var n=new Re(this.T,this.nt);return null!=t?n.child(t):n},t.prototype.refFromURL=function(t){function e(t){if(!/^[A-Za-z]+:\/\//.test(t))throw"Expected full URL but got a child path, use ref instead.";try{pe.makeFromUrl(t)}catch(t){throw"Expected valid full URL but got an invalid one."}}return ct("refFromURL",[pt(e,!1)],arguments),new Re(this.T,t)},Object.defineProperty(t.prototype,"maxUploadRetryTime",{get:function(){return this.T.maxUploadRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxUploadRetryTime=function(t){ct("setMaxUploadRetryTime",[dt()],arguments),this.T.setMaxUploadRetryTime(t)},Object.defineProperty(t.prototype,"maxOperationRetryTime",{get:function(){return this.T.maxOperationRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxOperationRetryTime=function(t){ct("setMaxOperationRetryTime",[dt()],arguments),this.T.setMaxOperationRetryTime(t)},Object.defineProperty(t.prototype,"app",{get:function(){return this.ot},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"INTERNAL",{get:function(){return this.Ct},enumerable:!0,configurable:!0}),t}(),Oe=function(){function t(t){this.lt=t}return t.prototype.delete=function(){return this.lt.T.deleteApp(),P(void 0)},t}();e.registerStorage=Ht;var Ce="storage";Ht(n(5).default)}},[22])}catch(t){throw Error("Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.")}
//# sourceMappingURL=firebase-storage.js.map