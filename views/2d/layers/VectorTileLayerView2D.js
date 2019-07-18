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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../Graphic","../../../core/asyncUtils","../../../core/Handles","../../../core/Logger","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../engine/vectorTiles/TileHandler","../engine/vectorTiles/VectorTileContainer","../engine/vectorTiles/VectorTileDisplayObject","./LayerView2D","../tiling/TileInfoViewPOT","../tiling/TileKey","../tiling/TileQueue","../tiling/TileStrategy"],function(e,t,i,r,n,a,l,o,s,u,c,h,p,d,f,y,_,v,g,H){var w=u.getLogger("esri.views.2d.layers.VectorTileLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._fetchQueue=null,t._parseQueue=null,t._isTileHandlerPromiseFulfilled=!1,t._handles=new s,t._invalidateStyle=!1,t.container=new d,t}return i(t,e),t.prototype.initialize=function(){var e=this;this._tileInfoView=new _(this.layer.tileInfo,this.layer.fullExtent),this._tileHandler=new p(this.layer,window.devicePixelRatio||1,!0,this.container),this.handles.add(this.watch("layer.currentStyleInfo",function(t){e._start()}))},t.prototype.destroy=function(){this._stop(),this.container.dispose(),this._tileHandler.destroy(),this._tileHandler=null},t.prototype.hitTest=function(e,t){var i=this;return this.suspended||!this._tileHandlerPromise?c.resolve(null):o.safeCast(this._tileHandlerPromise).then(function(){return i.container.hitTest(e,t).then(function(e){var t=i._tileHandler.getStyleRepository().layers;if(null===e||e<0||e>=t.length)return null;var r=t[e],n=new l({attributes:{layerId:e,layerName:r.id}});return n.layer=i.layer,n.sourceLayer=i.layer,n})})},t.prototype.update=function(e){var t=this;this.notifyChange("updating");var i=this._tileHandlerPromise;i&&i.then(function(){if(e.pixelRatio!==t._tileHandler.devicePixelRatio)return t._start(),void(t._tileHandler.devicePixelRatio=e.pixelRatio);t._invalidateStyle?(t._issueStyleInvalidation(e),t._invalidateStyle=!1):(t._fetchQueue.pause(),t._parseQueue.pause(),t._fetchQueue.state=e.state,t._parseQueue.state=e.state,t._tileStrategy.update(e),t._parseQueue.resume(),t._fetchQueue.resume());for(var i=t.container.children,r=0,n=i;r<n.length;r++){var a=n[r];t._tileHandler.updateTile(a,e)}})},t.prototype.attach=function(){var e=this;this._start(),this._handles.add(this.layer.on("paint-change",function(t){return e.container.requestRender()})),this._handles.add(this.layer.on("layout-change",function(t){e._invalidateStyle=!0,e.requestUpdate()}))},t.prototype.detach=function(){this._stop(),this._handles.removeAll()},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.canResume=function(){var e=this.inherited(arguments),t=this.layer,i=t;if(e&&i.currentStyleInfo){var r=this.view.scale,n=i.currentStyleInfo;if(n&&n.layerDefinition){var a=n.layerDefinition;a.minScale&&a.minScale<r&&(e=!1),a.maxScale&&a.maxScale>r&&(e=!1)}}return e},t.prototype.isUpdating=function(){return!this._isTileHandlerPromiseFulfilled||this._fetchQueue.updating||this._parseQueue.updating},t.prototype.acquireTile=function(e){var t=this,i=v.pool.acquire();i.set(e.level,e.row,e.col,e.world);var r=this.updateParameters.state.rotation,n=this._tileHandler.getStyleRepository(),a=f.pool.acquire(i,this.layer.tileInfo,n,r);return o.safeCast(this._tileHandlerPromise).then(function(){t.notifyChange("updating"),t._fetchQueue.push(a.key).then(function(e){return t._parseQueue.push(e)}).then(function(e){a.setData(e.tileData,e.client,e.refKeys),a.once("attach",function(){return t.requestUpdate()}),t.container.addChild(a),t.notifyChange("updating")}).catch(function(e){t.notifyChange("updating"),c.isAbortError(e)||w.error(e)})}),a},t.prototype.releaseTile=function(e){var t=e.key.id;this._fetchQueue.abort(t),this._parseQueue.abort(t),this.container.removeChild(e),this.requestUpdate(),e.once("detach",function(){return f.pool.release(e)}),this.notifyChange("updating")},t.prototype._start=function(){var e=this;if(this._stop(),this.layer.currentStyleInfo&&this.attached){var t=new AbortController,i=this._tileHandler.start({signal:t.signal}).then(function(){e._tileStrategy=new H({cachePolicy:"keep",coveragePolicy:"smallest",acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:e._tileInfoView}),e._fetchQueue=new g({tileInfoView:e._tileInfoView,process:function(t,i){return e._getTileData(t,i)},concurrency:15}),e._parseQueue=new g({tileInfoView:e._tileInfoView,process:function(t,i){return e._parseTileData(t,i)},concurrency:8}),e.container.initialize(e._tileHandler.spriteMosaic,e._tileHandler.glyphMosaic,e.layer.tileInfo,e._tileInfoView),e.requestUpdate(),e._isTileHandlerPromiseFulfilled=!0});this._tileHandlerAbortController=t,this._tileHandlerPromise=i}},t.prototype._stop=function(){if(this._tileHandlerAbortController){var e=this._tileHandlerAbortController;e&&e.abort(),this._tileHandlerPromise=null,this._isTileHandlerPromiseFulfilled=!1,this._fetchQueue&&(this._fetchQueue.destroy(),this._fetchQueue=null),this._parseQueue&&(this._parseQueue.destroy(),this._parseQueue=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this.container.removeAllChildren(),f.pool.prune()}},t.prototype._getTileData=function(e,t){return a(this,void 0,void 0,function(){var i;return n(this,function(r){switch(r.label){case 0:return[4,this._tileHandler.fetchTileData(e,t)];case 1:return i=r.sent(),this.notifyChange("updating"),[2,{key:e,data:i}]}})})},t.prototype._parseTileData=function(e,t){return a(this,void 0,void 0,function(){return n(this,function(i){return[2,this._tileHandler.parseTileData(e,this.updateParameters.state.rotation,t)]})})},t.prototype._issueStyleInvalidation=function(e){var t=this;this.notifyChange("updating"),this._tileHandlerPromise=this._tileHandler.updateStyle().then(function(){t._fetchQueue.pause(),t._parseQueue.pause(),t._fetchQueue.clear(),t._parseQueue.clear(),t._parseQueue.resume(),t._fetchQueue.resume(),t.notifyChange("updating"),t.requestUpdate()})},r([h.property({dependsOn:["view.scale","layer.currentStyleInfo"]})],t.prototype,"suspended",void 0),t=r([h.subclass("esri.views.2d.layers.VectorTileLayerView2D")],t)}(h.declared(y))});