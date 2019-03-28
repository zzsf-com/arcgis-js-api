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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/paramHelper","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../geometry","../../../Graphic","../../../core/arrayUtils","../../../core/Collection","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType","../../../renderers/support/clickToleranceUtils","../../../tasks/support/FeatureSet","../../../tasks/support/Query","../engine/Container","../engine/webgl/definitions","./LayerView2D","./features/controllers","./features/tileRenderers","./support/FeatureLayerProxy","./support/popupUtils2D","../tiling/TileStrategy","../../layers/FeatureLayerView","../../../views/layers/support/FeatureFilter","../../layers/support/FeatureEffect"],function(e,t,r,i,n,o,s,a,l,u,p,h,c,d,f,y,g,_,v,R,b,m,F,S,w,C,q,x,O,U,I,P){var H=_.ensureType(b);return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._pipelineIsUpdating=!1,t._filterRequestsOutstanding=new Array(F.MAX_FILTERS),t._updatingFilter=!1,t._updatingRenderer=!1,t.container=new m.Container,t.filter=null,t.effect=null,t.highlightIDs=new Set,t}return r(t,e),t.prototype.destroy=function(){this._proxy.destroy()},t.prototype.initialize=function(){var e=this;if(this._proxy=this._createProxy(),this.layer.isTable)return void this.addResolvingPromise(f.reject(new c("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer})));this.addResolvingPromise(f.all([w.getControllerConfiguration(this.layer,this.filter),this._proxy.when()]).then(function(e){var t=e[0];return e[1].configure({controller:t})}));var t=this.watch("filter",function(){return e._handleFilterChange(0,e.filter)}),r=this.watch("effect",function(t,r){r&&t&&t.filter.enable(),e._handleFilterChange(1,t&&t.filter)});this.handles.add(t),this.handles.add(r)},Object.defineProperty(t.prototype,"labelsVisible",{get:function(){return!this.suspended&&this.layer.labelingInfo&&this.layer.labelsVisible},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"effects",{get:function(){return this.effect&&[this.effect]||[]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"numFeatures",{get:function(){var e=0;return this.attached&&this._tileStrategy.tiles.forEach(function(t){e+=t.iconDisplayRecords?t.iconDisplayRecords.length:0}),e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderingConfigHash",{get:function(){if(!this.layer)return null;var e=this.availableFields,t=this.layer,r=t.definitionExpression,i=t.renderer,n=t.labelingInfo,o="historicMoment"in this.layer?this.layer.historicMoment:null;return JSON.stringify({effectHash:d.isSome(this.effect)&&this.effect.renderingHash,definitionExpression:r,historicMoment:o,availableFields:e,renderer:i,labelingInfo:n})},enumerable:!0,configurable:!0}),t.prototype.highlight=function(e,t){var r=this;void 0===t&&(t={});var i;return e instanceof u?i=[e.getAttribute(this.layer.objectIdField||"__OBJECTID")]:"number"==typeof e?i=[e]:h.isCollection(e)?i=e.map(function(e){return e&&e.getAttribute(r.layer.objectIdField)}).toArray():Array.isArray(e)&&e.length>0&&(i="number"==typeof e[0]?e:e.map(function(e){return e&&e.getAttribute(r.layer.objectIdField)})),i=i.filter(function(e){return null!=e}),i&&i.length&&this._addHighlight(i),{remove:function(){r._removeHighlight(i)},pause:function(){r._removeHighlight(i)},resume:function(){r._addHighlight(i)}}},t.prototype._addHighlight=function(e){for(var t=0,r=e;t<r.length;t++){var i=r[t];this.highlightIDs.add(i)}this._updateHighlight()},t.prototype._removeHighlight=function(e){for(var t=0,r=e;t<r.length;t++){var i=r[t];this.highlightIDs.delete(i)}this._updateHighlight()},t.prototype.hitTest=function(e,t){var r=this;return this.suspended||!this.tileRenderer?f.resolve(null):this.tileRenderer.hitTest(e,t).then(function(e){return 0===e.length?null:r._proxy.queryFeatures(new b({objectIds:e,outSpatialReference:r.view.spatialReference,returnGeometry:!0})).then(function(e){if(!e.features[0])return null;var t=u.fromJSON(e.features[0]);return t.layer=r.layer,t.sourceLayer=r.layer,t.geometry&&(t.geometry.spatialReference=r.view.spatialReference),t})})},t.prototype.queryFeatures=function(e){var t=this;return this.queryFeaturesJSON(e).then(function(e){var r=R.fromJSON(e);return r.features.forEach(function(e){e.layer=t.layer,e.sourceLayer=t.layer}),r})},t.prototype.queryFeaturesJSON=function(e){return this._proxy.queryFeatures(this._cleanUpQuery(e))},t.prototype.queryObjectIds=function(e){return this._proxy.queryObjectIds(this._cleanUpQuery(e))},t.prototype.queryFeatureCount=function(e){return this._proxy.queryFeatureCount(this._cleanUpQuery(e))},t.prototype.queryExtent=function(e){return this._proxy.queryExtent(this._cleanUpQuery(e)).then(function(e){return{count:e.count,extent:l.Extent.fromJSON(e.extent)}})},t.prototype.setVisibility=function(e,t){var r=t?[e]:[],i=t?[]:[e];this.tileRenderer.setFilterFlag(0,r,i,!0)},t.prototype.update=function(e){if(this.attached&&this._tileStrategy&&this.tileRenderer){this._tileStrategy.update(e)||this.requestUpdate(),this._proxy.setViewState(e.state),this.notifyChange("numFeatures"),this.notifyChange("updating")}},t.prototype.attach=function(){var e=this;this._tileStrategy=new O({cachePolicy:"purge",acquireTile:function(t){return e._acquireTile(t)},releaseTile:function(t){return e._releaseTile(t)},tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add([y.watch(this,"layer.processing?.version",function(t){e._proxy.redraw()}),this.layer.on("edits",function(t){e._proxy.onEdits(t)}),y.init(this,"renderingConfigHash",function(){return e._renderingConfigHashChanged()})],"attach")},t.prototype.detach=function(){this.container.removeAllChildren(),this.handles.remove("attach"),this._tileRendererPromise=null,this._pipelineIsUpdating=!1,this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null)},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.fetchPopupFeatures=function(e,t){return a(this,void 0,void 0,function(){var r,i,n;return s(this,function(o){return(r=this.validateFetchPopupFeatures(t))?[2,f.reject(r)]:(i=this.fetchClientPopupFeatures(t),e?(n=this._fetchServicePopupFeatures(e,t),[2,f.eachAlwaysValues([i,n]).then(p.flatten)]):[2,i])})})},t.prototype._fetchServicePopupFeatures=function(e,t){return a(this,void 0,void 0,function(){var r,i,n,o,a,l,u,p,h,c;return s(this,function(s){switch(s.label){case 0:return[4,this.createPopupQuery(t)];case 1:if(r=s.sent(),i=this.layer,n=i.renderer,o=v.calculateTolerance(n),r.geometry=this.createFetchPopupFeaturesQueryGeometry(e,o),a=new Set,l=i.objectIdField,u=d.isSome(t)?t.clientGraphics:null)for(p=0,h=u;p<h.length;p++)c=h[p],a.add(c.attributes[l]);return[2,i.queryFeatures(r).then(function(e){return e.features.filter(function(e){return!a.has(e.attributes[l])})})]}})})},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return x.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){this._proxy.refresh()},t.prototype.isUpdating=function(){return null!=this.layer.renderer&&(null==this.tileRenderer||this._pipelineIsUpdating||this.tileRenderer.updating||this._updatingFilter||this._updatingRenderer)},t.prototype._createClientOptions=function(){var e=this;return{executeProcessing:function(t){if(!("processing"in e.layer&&e.layer.processing))return t.featureSet;var r=e.layer.processing,i=r.process(t.featureSet,r.options);return i||f.reject(new c("FeatureLayer","invalid processing.process() method, returns nothing"))},setUpdating:function(t){e._pipelineIsUpdating=t,e.notifyChange("updating")}}},t.prototype._cleanUpQuery=function(e){var t=e?H(e):new b;return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t},t.prototype._handleFilterChange=function(e,t){return a(this,void 0,void 0,function(){var r,i,n,o,a,l,u;return s(this,function(s){switch(s.label){case 0:return d.isSome(this._filterRequestsOutstanding[e])?(this._filterRequestsOutstanding[e]={filter:t},[2]):(this._updatingFilter=!0,r=d.isSome(t)&&t.toJSON(),[4,this._proxy.setFilter(e,r)]);case 1:for(i=s.sent(),n=i.show,o=i.hide,this.tileRenderer&&this.tileRenderer.setFilterFlag(e,n,o,!1),d.isSome(t)&&t.enable(),this.tileRenderer&&(this.tileRenderer.featuresView.requestRender(),(a=!(!this.layer.labelingInfo||!this.layer.labelingInfo.length))&&(this.tileRenderer.forEachTile(function(e){return e.isDirty=!0}),this.view.labelManager.requestUpdate())),l=0;l<this._filterRequestsOutstanding.length;l++)if(u=this._filterRequestsOutstanding[l],d.isSome(u)){this._filterRequestsOutstanding[l]=null,this._handleFilterChange(l,u.filter);break}return this._updatingFilter=!1,[2]}})})},t.prototype._createProxy=function(){return new q.default({layer:this.layer,featuresTiling:this.view.featuresTilingScheme,client:this._createClientOptions()})},t.prototype._acquireTile=function(e){var t=this,r=this.tileRenderer.acquireTile(e);return r.once("attach",function(){t.requestUpdate()}),r},t.prototype._releaseTile=function(e){this.tileRenderer.releaseTile(e)},t.prototype._renderingConfigHashChanged=function(){var e=this;this._updatingRenderer=!0;var t=this._tileRendererPromise=C.createOrReuseTileRenderer(this.tileRenderer,this.layer.renderer,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer}).then(function(r){if(e._tileRendererPromise===t){if(e._tileRendererPromise=null,e.tileRenderer!==r&&(e._tileStrategy.clear(),e.tileRenderer&&(e.tileRenderer.uninstall(e.container),e.tileRenderer.destroy()),e.tileRenderer=e._proxy.client.tileRenderer=r,r&&r.install(e.container),e._updateHighlight(),e.requestUpdate()),!r)return void(e._updatingRenderer=!1);var i=r.getProcessorConfiguration();e.tileRenderer.wouldClear(i)?(e.tileRenderer.clear(),e.tileRenderer.applyConfiguration(i),e._proxy.configure({processor:i}).then(function(){e._updatingRenderer=!1,e.notifyChange("updating")}),e.requestUpdate()):e.tileRenderer.needsProcessorReconfiguration(i)?(e._proxy.configure({processor:i}).then(function(){e._updatingRenderer=!1,e.notifyChange("updating")}),e.requestUpdate()):(e.tileRenderer.applyConfiguration(i),e.requestUpdate(),e._updatingRenderer=!1,e.notifyChange("updating"))}},function(){e._tileRendererPromise=null,e._updatingRenderer=!1,e.notifyChange("updating")})},t.prototype._updateHighlight=function(){this.tileRenderer&&"updateHighlight"in this.tileRenderer&&this.tileRenderer.updateHighlight()},i([g.property()],t.prototype,"_pipelineIsUpdating",void 0),i([g.property()],t.prototype,"_updatingFilter",void 0),i([g.property()],t.prototype,"_updatingRenderer",void 0),i([g.property({dependsOn:["suspended","layer.labelingInfo","layer.labelsVisible"]})],t.prototype,"labelsVisible",null),i([g.property({type:I})],t.prototype,"filter",void 0),i([g.property({type:P})],t.prototype,"effect",void 0),i([g.property({readOnly:!0,dependsOn:["effect"]})],t.prototype,"effects",null),i([g.property()],t.prototype,"numFeatures",null),i([g.property({dependsOn:["effect","layer.renderer","availableFields","layer.definitionExpression","layer.historicMoment?","layer.labelingInfo"]})],t.prototype,"renderingConfigHash",null),i([g.property()],t.prototype,"tileRenderer",void 0),i([g.property({dependsOn:["layer.renderer","tileRenderer.updating","_updatingFilter","_updatingRenderer"]})],t.prototype,"updating",void 0),t=i([g.subclass("esri.views.2d.layers.FeatureLayerView2D")],t)}(g.declared(S,U))});