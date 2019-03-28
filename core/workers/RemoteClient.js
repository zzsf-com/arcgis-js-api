// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/AbortController","../Error","../promiseUtils","./utils"],function(e,t,o,s,n,r){function i(e,t){e.delete(t)}function a(e){var t=new s("AbortError",e);return t.dojoType="cancel",t}var h=r.MessageType.CLOSE,p=r.MessageType.ABORT,u=r.MessageType.INVOKE,c=r.MessageType.RESPONSE,l=r.MessageType.OPEN_PORT,_=function(){function e(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e){e.type===r.MessageType.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))},e.prototype.clear=function(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null},e.prototype._process=function(){this._timer=null;for(var e=0,t=this._invokeMessages;e<t.length;e++){var o=t[e];this._cancelledJobIds.has(o.jobId)||this._invoke(o)}this._cancelledJobIds.clear(),this._invokeMessages.length=0},e}();return function(){function e(e,t,o){var s=this;this._port=e,this._client=t,this._outJobs=new Map,this._inJobs=new Map,this._queue=new _(function(e){return s._onInvoke(e)}),this._responseQueue=[],this._onMessage=this._onMessage.bind(this),this._port.addEventListener("message",this._onMessage),this._port.start(),this._channel=o.channel,o.scheduler&&(this._frameTask=o.scheduler.registerTask(1,function(e){return s._update(e)},function(){return s._responseQueue.length>0}))}return e.connect=function(t){var o,s=new MessageChannel;return o="function"==typeof t?new t:"default"in t&&"function"==typeof t.default?new t.default:t,o.remoteClient=new e(s.port1,o,{channel:s}),s.port2},e.prototype.close=function(){this._post({type:h}),this._close()},e.prototype.isBusy=function(){return this._outJobs.size>0},e.prototype.invoke=function(e,t,o){var h=this,c=o&&o.signal,l=o&&o.transferList;if(!this._port)return n.reject(new s("remote-client:port-closed","Can't invoke(), port is closed"));if(c&&c.aborted)return n.reject(a("Job already aborted"));var _=r.newJobId(),d=function(){c&&c.removeEventListener("abort",d);var e=h._outJobs.get(_);e&&(i(h._outJobs,_),h._post({type:p,jobId:_}),e.reject(a("Job aborted")))};return c&&c.addEventListener("abort",d),n.create(function(o,s){var n={resolve:o,reject:s};h._outJobs.set(_,n),h._post({type:u,jobId:_,methodName:e,abortable:!0},t,l)},d)},e.prototype.openPort=function(){var e=this,t=r.newJobId(),o=function(){i(e._outJobs,t),e._post({type:p,jobId:t})};return n.create(function(s,n){var r={resolve:s,reject:n,signal:o};e._outJobs.set(t,r),e._post({type:l,jobId:t})},o)},e.prototype._close=function(){this._channel&&(this._channel=null),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach(function(e){return e.reject(a("Abort job: worker closing"))}),this._inJobs.clear(),this._outJobs.clear(),this._queue.clear(),this._port=this._client=null,this._frameTask&&this._frameTask.remove(),this._frameTask=null,this._responseQueue=null},e.prototype._onMessage=function(e){var t=r.receiveMessage(e);if(t)switch(t.type){case c:this._onResponse(t);break;case u:this._queue.push(t);break;case p:this._onAbort(t);break;case h:this._onClose();break;case l:this._onOpenPort(t)}},e.prototype._onAbort=function(e){var t=this._inJobs,o=e.jobId,s=t.get(o);this._queue.push(e),s&&(s.controller&&s.controller.abort(),i(t,o))},e.prototype._onClose=function(){var e=this._client;this._close(),e&&e.remoteClient===this&&"destroy"in e&&e.destroy(),e.remoteClient=null},e.prototype._onInvoke=function(e){var t,s=this,a=e.methodName,h=e.jobId,p=e.data,u=e.abortable,l=u?new o.default:null,_=this._inJobs,d=this._client,f=d[a];try{if(!f&&a&&-1!==a.indexOf("."))for(var b=a.split("."),v=0;v<b.length-1;v++)d=d[b[v]],f=d[b[v+1]];if("function"!=typeof f)throw new TypeError(a+" is not a function");t=f.call(d,p,{client:this,signal:l?l.signal:null})}catch(e){return void this._post({type:c,jobId:h,error:r.toInvokeError(e)})}if(n.isThenable(t)){_.set(h,{controller:l,promise:t});var y=function(){_.has(h)&&(l.signal.removeEventListener("abort",y),t.cancel(),i(_,h))};l.signal.addEventListener("abort",y),t.then(function(e){_.has(h)&&(i(_,h),s._post({type:c,jobId:h},e))}).catch(function(e){_.has(h)&&(l.signal.removeEventListener("abort",y),i(_,h),e&&"AbortError"===e.name||s._post({type:c,jobId:h,error:r.toInvokeError(e||{message:"Error encountered at method "+a})}))})}else this._post({type:c,jobId:h},t)},e.prototype._onOpenPort=function(t){var o=new MessageChannel;new e(o.port1,this._client,{}),this._post({type:c,jobId:t.jobId},o.port2,[o.port2])},e.prototype._onResponse=function(e){this._frameTask?this._responseQueue.push(e):this._handleResponse(e)},e.prototype._update=function(e){for(;!e.done&&this._responseQueue.length>0;)this._handleResponse(this._responseQueue.shift()),e.madeProgress()},e.prototype._handleResponse=function(e){var t=e.jobId,o=e.error,n=e.data,r=this._outJobs;if(r.has(t)){var a=r.get(t);i(r,t),o?a.reject(s.fromJSON(JSON.parse(o))):a.resolve(n)}},e.prototype._post=function(e,t,o){return r.postMessage(this._port,e,t,o)},e}()});