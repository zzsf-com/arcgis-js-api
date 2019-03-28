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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Accessor","../../core/arrayUtils","../../core/Error","../../core/Evented","../../core/promiseUtils","../../core/accessorSupport/decorators"],function(t,e,r,n,s,o,i,p,c,u,a,h,d){return function(t){function e(e){var r=t.call(this,e)||this;return r._indexHistory=[],r._lastStepIndex=-1,r._stepIndex=-1,r.data=null,r.started=!1,r.steps=null,r.type=null,r}return r(e,t),Object.defineProperty(e.prototype,"hasNextStep",{get:function(){return!!(this.steps&&this._stepIndex<this.steps.length-1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasPreviousStep",{get:function(){return this._stepIndex>0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stepId",{get:function(){var t=this.steps,e=t&&t[this._stepIndex];return e&&e.id},enumerable:!0,configurable:!0}),e.prototype.cancel=function(t){return void 0===t&&(t={force:!0}),i(this,void 0,void 0,function(){var e=this;return o(this,function(r){return!1!==t.force?[2,this._cancel()]:[2,h.create(function(t,r){e.emit("cancel-request",{controller:{allow:function(){return e._cancel().then(t)},deny:function(){return r(new u("workflow:cancel-denied","Request to cancel workflow was denied."))}}})})]})})},e.prototype.commit=function(){return i(this,void 0,void 0,function(){return o(this,function(t){return[2]})})},e.prototype.go=function(t){return i(this,void 0,void 0,function(){var e,r;return o(this,function(n){switch(n.label){case 0:return e=this.steps,r=c.findIndex(e,function(e){return e.id===t}),this._indexHistory.push(this._stepIndex),[4,this._go(r)];case 1:return n.sent(),[2]}})})},e.prototype.next=function(){return i(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return this._indexHistory.push(this._stepIndex),[4,this._go(this._stepIndex+1)];case 1:return t.sent(),[2]}})})},e.prototype.previous=function(){return i(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,this._go(this._indexHistory.pop())];case 1:return t.sent(),[2]}})})},e.prototype.reset=function(){return i(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,this._cancel()];case 1:return t.sent(),[4,this.start()];case 2:return t.sent(),[2]}})})},e.prototype.start=function(){return i(this,void 0,void 0,function(){var t;return o(this,function(e){switch(e.label){case 0:return this._set("started",!0),t=-1===this._stepIndex?0:this._stepIndex,[4,this._go(t)];case 1:return e.sent(),[2]}})})},e.prototype._cancel=function(){return i(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return this.started?[4,this.steps[this._stepIndex].tearDown()]:[3,2];case 1:t.sent(),t.label=2;case 2:return this._set("started",!1),this._resetIndexing(),[2]}})})},e.prototype._go=function(t){return void 0===t&&(t=-1),i(this,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return t<=-1||t>=this.steps.length?[2]:(this._stepIndex=t,this._notifyStepProps(),this.started?this._lastStepIndex>-1?[4,this.steps[this._lastStepIndex].tearDown()]:[3,2]:[2]);case 1:e.sent(),e.label=2;case 2:return this._lastStepIndex=this._stepIndex,[4,this.steps[this._stepIndex].setUp()];case 3:return e.sent(),[2]}})})},e.prototype._resetIndexing=function(){this._stepIndex=-1,this._lastStepIndex=-1,this._indexHistory.length=0,this._notifyStepProps()},e.prototype._notifyStepProps=function(){this.notifyChange("stepId"),this.notifyChange("hasPreviousStep"),this.notifyChange("hasNextStep")},n([d.property()],e.prototype,"data",void 0),n([d.property()],e.prototype,"hasNextStep",null),n([d.property()],e.prototype,"hasPreviousStep",null),n([d.property()],e.prototype,"started",void 0),n([d.property({readOnly:!0,dependsOn:["steps"]})],e.prototype,"stepId",null),n([d.property()],e.prototype,"steps",void 0),n([d.property()],e.prototype,"type",void 0),n([d.property()],e.prototype,"commit",null),e=n([d.subclass("esri.widgets.Editor.Workflow")],e)}(d.declared(p,a))});