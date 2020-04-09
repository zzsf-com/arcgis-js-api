// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/declareExtendsHelper","../../core/arrayUtils","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../views/support/layerViewUtils","./Edits","./UpdateWorkflowData","./Workflow","./workflowUtils"],(function(t,e,i,n,r,a,o,u,d,s,c,f,l,h,g){return function(t){function e(e){var i=t.call(this,e)||this;return i.type="update",i}var h;return a(e,t),h=e,e.create=function(t,e,i){var n=new l({edits:new f,viewModel:t}),r=new h({data:n,afterCommit:i});return r._set("steps",this._createWorkflowSteps(r,e)),r},e.prototype.highlight=function(t){var e=this.data.viewModel.view,i=t&&o.find(e.allLayerViews.items,(function(e){return e.layer===t.layer}));c.highlightsSupported(i)&&this.handles.add(i.highlight(t),"candidate-highlight")},e.prototype.unhighlight=function(){this.handles.remove("candidate-highlight")},e._createWorkflowSteps=function(t,e){void 0===e&&(e="awaiting-feature-to-update");var n=t.data,a=t.handles,o={"awaiting-feature-to-update":function(){return{id:"awaiting-feature-to-update",setUp:function(){return r(this,void 0,void 0,(function(){var t,e,r,o,d;return i(this,(function(i){return t=n.viewModel,e=t.spinnerViewModel,r=t.view,o=null,a.add({remove:function(){o&&(o.abort(),o=null)}},this.id),n.edits.feature=null,d=r.on("immediate-click",(function(t){t.stopPropagation(),e.location=t.mapPoint,e.visible=!0,o&&o.abort();var i=n.viewModel.editableItems;o=u.createAbortController(),u.create((function(e,n){u.onAbort(o.signal,(function(){return n(u.createAbortError())})),e(g.fetchCandidates(i,r,t))})).then((function(t){if(n.viewModel.spinnerViewModel.visible=!1,u.throwIfAborted(o),n.candidates=t.reduce((function(t,e){return e.error?t:t.concat(e.value)}),[]),0!==n.candidates.length)if(1===n.candidates.length){var e=n.candidates[0];n.edits.feature=e,n.viewModel.activeWorkflow.go("editing-existing-feature")}else n.viewModel.activeWorkflow.next()}))})),a.add(d,this.id),[2]}))}))},tearDown:function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return a.remove(this.id),[2]}))}))}}},"awaiting-update-feature-candidate":function(){return{id:"awaiting-update-feature-candidate",setUp:function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(i){return(e=n.edits).feature=null,a.add(d.watch(e,"feature",(function(e){t.unhighlight(),t.highlight(e)})),this.id),[2]}))}))},tearDown:function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){return t.unhighlight(),a.remove(this.id),[2]}))}))}}},"editing-existing-feature":function(){return{id:"editing-existing-feature",setUp:function(){return r(this,void 0,void 0,(function(){var e,o,d,s=this;return i(this,(function(c){return e=n.edits.feature,o=n.viewModel,n.editableItem=o.editableItems.find((function(t){return t.layer===e.layer})),d=u.createAbortController(),a.add({remove:function(){return d.abort()}},this.id),[2,g.fetchFullFeature(e,o.view,d).then((function(e){return r(s,void 0,void 0,(function(){var r,s,c,f,l,h,v,p;return i(this,(function(i){switch(i.label){case 0:return u.isAborted(d)?[2]:(n.edits.updateGeometry(e.geometry),n.edits.updateAttributes(e.attributes),n.edits.trackChanges(),r=e.layer,s=g.findLayerInfo(o.layerInfos,r),c=s&&s.fieldConfig,o.attachmentsViewModel.set({graphic:e,mode:"view"}),o.featureFormViewModel.set({feature:e,fieldConfig:c}),f=[o.featureFormViewModel.on("value-change",(function(){n.edits.updateAttributes(o.featureFormViewModel.getValues()),e.attributes=n.edits.feature.attributes})),o.attachmentsViewModel.watch("mode",(function(t){"add"===t&&n.viewModel.activeWorkflow.go("adding-attachment"),"edit"===t&&n.viewModel.activeWorkflow.go("editing-attachment")}))],r.capabilities.editing.supportsGeometryUpdate?(l=g.getVisualVariableAttributes(e),[4,g.setUpGeometryUpdate(e,l,o.sketchViewModel,o.view,(function(t){var e=t.geometry,i=t.attributes;if(l.rotation){var r=l.rotation.field;o.featureFormViewModel.setValue(r,i[r])}if(l.size){r=l.size.field;o.featureFormViewModel.setValue(r,i[r])}n.edits.updateAttributes(i),n.edits.updateGeometry(e)}))]):[3,2]);case 1:return h=i.sent(),v=h.interactive,p=h.visual,f.push(v,p),a.add(v,t._handleKeys.beforeCommit),a.add(p,t._handleKeys.afterCommit),[3,3];case 2:t.highlight(e),i.label=3;case 3:return a.add(f,this.id),[2]}}))}))}))]}))}))},tearDown:function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){return n.editableItem=null,n.viewModel.featureFormViewModel.set({feature:null,fieldConfig:null}),a.remove(this.id),t.unhighlight(),[2]}))}))}}},"adding-attachment":function(){return{id:"adding-attachment",parent:"editing-existing-feature",setUp:function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return[2]}))}))},tearDown:function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return[2]}))}))}}},"editing-attachment":function(){return{id:"editing-attachment",parent:"editing-existing-feature",setUp:function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return[2]}))}))},tearDown:function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return[2]}))}))}}}},s=!1;return["awaiting-feature-to-update","awaiting-update-feature-candidate","editing-existing-feature","adding-attachment","editing-attachment"].filter((function(t){return!!s||(s=t===e)})).map((function(t){return o[t]()}))},e=h=n([s.subclass("esri.widgets.Editor.UpdateWorkflow")],e)}(s.declared(h))}));