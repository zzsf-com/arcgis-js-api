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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../../../core/Accessor","../../../core/Collection","../../../core/compilerUtils","../../../core/Error","../../../core/Handles","../../../core/lang","../../../core/Logger","../../../core/Promise","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../support/arcgisLayerUrl","../../../portal/support/geometryServiceUtils","../../../tasks/support/StatisticDefinition","../../../views/3d/layers/graphics/Graphics3DVerticalScale","../../../views/3d/layers/support/FeatureTileFetcher3D","../../../views/3d/layers/support/FeatureTileFetcher3DDebugger","../../../views/3d/support/debugFlags"],function(e,t,r,i,a,n,o,s,u,c,l,p,h,d,f,m,y,v,x,F,g,b,E){var O=p.getLogger("esri.layers.graphics.controllers.FeatureTileController3D"),T=function(e){function t(t){var r=e.call(this)||this;return r.type="feature-tile-3d",r.serviceDataExtent=null,r.serviceDataCount=a.constants.NO_SERVICE_DATA_COUNT,r.vertexLimitExceeded=!1,r.displayFeatureLimit=null,r.suspended=!1,r.tileFetcher=null,r.handles=new c,r.fetchDataInfoPromise=null,r}r(t,e),a=t,Object.defineProperty(t.prototype,"extent",{set:function(e){if(e&&!e.spatialReference.equals(this.layerView.view.spatialReference))return void O.error("#extent=","extent needs to be in the same spatial reference as the view");var t=this._get("extent");if(t!==e&&!(t&&e&&t.equals(e))){var r=e?e.clone():null;this._set("extent",r)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.tileFetcher&&this.tileFetcher.updating||this.fetchDataInfoPromise)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updatingTotal",{get:function(){return this.updating&&this.tileFetcher?this.tileFetcher.updatingTotal:0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updatingRemaining",{get:function(){return this.updating&&this.tileFetcher?this.tileFetcher.updatingRemaining:0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"expectedFeatureDiff",{get:function(){return this.updating&&this.tileFetcher?this.tileFetcher.expectedFeatureDiff:0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"memoryForUnusedFeatures",{get:function(){return this.tileFetcher?this.tileFetcher.memoryForUnusedFeatures:0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maximumNumberOfFeaturesExceeded",{get:function(){return!(!this.tileFetcher||!this.tileFetcher.maximumNumberOfFeaturesExceeded)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filteredDataExtent",{get:function(){return this.extent},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maximumNumberOfFeatures",{get:function(){return this.displayFeatureLimit?this.displayFeatureLimit.maximumNumberOfFeatures:0},set:function(e){e!==this.maximumNumberOfFeatures&&(null==e?this._clearOverride("maximumNumberOfFeatures"):this._override("maximumNumberOfFeatures",e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasMaximumNumberOfFeaturesOverride",{get:function(){return this._isOverridden("maximumNumberOfFeatures")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mode",{get:function(){if(this.serviceDataCount===a.constants.NO_SERVICE_DATA_COUNT||this.vertexLimitExceeded)return"tiles";var e=this.layerView,t=e.layer,r=e.view,i=r&&r.featureTiles,n=i&&i.tilingScheme;if(t&&t.minScale&&this.serviceDataExtent&&n){var o=this.approximateExtentSizeAtScale(t.minScale,n);if((this.serviceDataExtent.width/o+this.serviceDataExtent.height/o)/2>a.constants.MAX_SNAPSHOT_MIN_SCALE_FACTOR)return"tiles"}return!this.maximumNumberOfFeatures||this.serviceDataCount<=this.maximumNumberOfFeatures?"snapshot":"tiles"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxTotalSnapshotVertices",{get:function(){var e=this._get("maxTotalSnapshotVertices")||0,t="snapshot"===this.mode&&this.tileFetcher&&this.tileFetcher.totalVertices||0;return Math.max(e,t)},enumerable:!0,configurable:!0}),t.prototype.approximateExtentSizeAtScale=function(e,t){var r=this.layerView.view,i=Math.ceil((r.width/t.pixelSize[0]+r.height/t.pixelSize[1])/2),a=t.levels[0];return i*((a.tileSize[0]/(a.scale/e)+a.tileSize[1]/(a.scale/e))/2)},Object.defineProperty(t.prototype,"tileDescriptors",{get:function(){return"snapshot"===this.mode?new o([{id:"dummy-tile-full-extent",lij:[0,0,0]}]):this.layerView.view.featureTiles?this.layerView.view.featureTiles.tiles:new o},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"test",{get:function(){return{fetchDataInfoPromise:this.fetchDataInfoPromise}},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this;this.handles.add(this.watch("vertexLimitInfo",function(){return e.updateVertexLimitExceeded()}));var t=d.resolve().then(function(){return e.verifyCapabilities()}).then(function(){return e.fetchServiceDataInfo()}).then(function(){return e.initializeTileFetcher()});this.addResolvingPromise(t)},t.prototype.verifyCapabilities=function(){var e=this.layerView.layer;if(!e.get("capabilities.operations.supportsQuery"))throw new u("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:e})},t.prototype.destroy=function(){this.cancelFetchServiceDataInfo(),this.tileFetcher&&(this.tileFetcher.destroy(),this.tileFetcher=null),this.handles&&(this.handles.destroy(),this.handles=null)},t.prototype.suspend=function(){this.suspended||(this.suspended=!0,this.tileFetcher&&this.tileFetcher.suspend())},t.prototype.resume=function(){this.suspended&&(this.suspended=!1,this.tileFetcher&&this.tileFetcher.resume())},t.prototype.refresh=function(){var e=this,t=function(){e.tileFetcher&&e.tileFetcher.filtersChanged()};this.fetchServiceDataInfo().then(t,t)},t.prototype.initializeTileFetcher=function(){var e=this,t=this.layerView.view;this.handles.add(f.whenOnce(t.featureTiles,"tilingScheme",function(){e.handles.add(t.featureTiles.addClient());var r=e,i=r.layerView,a=r.tileDescriptors,n=i.layer,o=new F({sourceSpatialReference:n.spatialReference,destSpatialReference:t.spatialReference});e.tileFetcher=new g.FeatureTileFetcher3D({layerView:i,filterExtent:e.filteredDataExtent,tilingScheme:t.featureTiles.tilingScheme,tileDescriptors:a,features:e.graphics,verticalScale:o,viewingMode:t.viewingMode}),e.suspended?e.tileFetcher.suspend():e.tileFetcher.resume();var s=function(t){e.tileFetcher.maximumNumberOfFeatures=t,e.tileFetcher.useTileCount=e.serviceDataCount>t},u=function(t){return e.tileFetcher.useTileCount=t>e.maximumNumberOfFeatures};e.handles.add([n.watch("definitionExpression",function(){return e.definitionExpressionChanged()}),i.watch("availableFields",function(t,r){return e.attributesChanged(r,t)}),n.on("apply-edits",function(t){return e.applyEdits(t)}),e.watch("filteredDataExtent",function(t){return e.tileFetcher.filterExtent=t},!0),e.watch("tileDescriptors",function(t){return e.tileFetcher.tileDescriptors=t},!0),f.init(e,"maximumNumberOfFeatures",s,!0),f.init(e,"serviceDataCount",u,!0),f.init(E,"FEATURE_TILE_FETCH_SHOW_TILES",function(r){r&&e.tileFetcher&&!e.tileFetcher.debugger?(e.tileFetcher.debugger=new b.FeatureTileFetcher3DDebugger(e.tileFetcher,t.featureTiles.tilingScheme.toTileInfo(),t),e.tileFetcher.debugger.update()):!r&&e.tileFetcher&&e.tileFetcher.debugger&&(e.tileFetcher.debugger.destroy(),e.tileFetcher.debugger=null)})]),e.supportsExceedsLimitQuery||e.watch("maxTotalSnapshotVertices",function(){return e.updateVertexLimitExceeded()})}))},t.prototype.definitionExpressionChanged=function(){this._set("maxTotalSnapshotVertices",0),this.notifyChange("maxTotalSnapshotVertices"),this.refresh()},t.prototype.applyEdits=function(e){var t=this;this.tileFetcher.applyEdits(e).then(function(e){e&&(e.deletedFeatures.length||e.updatedFeatures.length||e.addedFeatures.length)&&t.updateServiceDataExtent()})},t.prototype.attributesChanged=function(e,t){if(!e||-1===e.indexOf("*"))if(e&&t){for(var r=new Set,i=0,a=e;i<a.length;i++){var n=a[i];r.add(n)}for(var o=0,s=t;o<s.length;o++){var n=s[o];if(!r.has(n))return void this.refresh()}}else this.refresh()},t.prototype.createVertexLimitExceededQuery=function(e){var t=this.layerView.layer,r=t.createQuery();return r.outStatistics=[new x({statisticType:"exceedslimit",maxVertexCount:e,outStatisticFieldName:"exceedslimit",maxPointCount:1e8,maxRecordCount:1e8})],r},t.prototype.createDataInfoQuery=function(){var e=this.layerView.layer,t=e.createQuery();return t.outSpatialReference=this.layerView.view.spatialReference,e.capabilities.query.supportsResultType&&(t.resultType="tile"),t},t.prototype.fullExtentIsAccurate=function(){var e=this.layerView,t=e.layer;if(t.definitionExpression)return!1;switch(t.type){case"feature":case"stream":return y.isHostedAgolService(t.url);case"csv":case"geojson":return!0;default:s.neverReached(t)}},t.prototype.updateServiceDataExtent=function(){var e=this,t=this.layerView,r=t.layer,i=r.capabilities.query.supportsExtent,n=l.clone(t.fullExtentInLocalViewSpatialReference),o=r.fullExtent,s=this.fullExtentIsAccurate(),u=this.serviceDataCount,c=i&&u<=a.constants.MAX_FEATURE_COUNT_FOR_EXTENT&&(!n||!s),p=null;if(c){var h=this.createDataInfoQuery();p=r.queryExtent(h,{timeout:a.constants.QUERY_EXTENT_TIMEOUT}).then(function(t){e._set("serviceDataExtent",t.extent)})}else if(n)this._set("serviceDataExtent",n);else if(o){var d="portalItem"in r?r.portalItem:null;p=v.projectGeometry(o,t.view.spatialReference,d).then(function(t){e._set("serviceDataExtent",t)})}else this._set("serviceDataExtent",null);return p&&(p=p.catch(function(t){t&&"cancel"===t.dojoType||e._set("serviceDataExtent",n)})),p},t.prototype.updateServiceDataCount=function(){var e=this;return this.layerView.layer.queryFeatureCount(this.createDataInfoQuery(),{timeout:a.constants.QUERY_STATISTICS_TIMEOUT}).then(function(t){e._set("serviceDataCount",t)}).catch(function(t){if(t&&"cancel"===t.dojoType)throw t;var r=a.constants.NO_SERVICE_DATA_COUNT;e._set("serviceDataCount",r)})},Object.defineProperty(t.prototype,"vertexLimitInfo",{get:function(){if(!this.displayFeatureLimit||!this.displayFeatureLimit.maximumSymbolComplexity)return null;var e=this.displayFeatureLimit,t=e.maximumSymbolComplexity,r=e.maximumTotalNumberOfPrimitives,i=t.primitivesPerCoordinate,a=t.primitivesPerFeature,n=this._get("vertexLimitInfo");return n&&n.maximumTotalNumberOfPrimitives===r&&n.primitivesPerCoordinate===i&&n.primitivesPerFeature===a?n:{primitivesPerCoordinate:i,primitivesPerFeature:a,maximumTotalNumberOfPrimitives:r}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"supportsExceedsLimitQuery",{get:function(){var e=this.layerView.layer;return e.capabilities&&e.capabilities.operations&&e.capabilities.operations.supportsExceedsLimitStatistics},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"minimumNumberOfVerticesForGeometry",{get:function(){var e=this.layerView.layer.geometryType;switch(e){case"point":case"multipoint":return 1;case"polygon":return 4;case"polyline":return 2;case"multipatch":case"mesh":return 3;default:return s.neverReached(e),0}},enumerable:!0,configurable:!0}),t.prototype.updateVertexLimitExceeded=function(e){var t=this,r=this.vertexLimitInfo&&this.vertexLimitInfo.primitivesPerFeature<=0,i=this.layerView.layer,n=this.supportsExceedsLimitQuery;if(!r)return this._set("vertexLimitExceeded",!1),d.resolve();var o=this.vertexLimitInfo,s=o.primitivesPerFeature,u=o.primitivesPerCoordinate,c=o.maximumTotalNumberOfPrimitives,l=0!==s;return d.when(l?e:null).then(function(){var e,r=t.serviceDataCount,o=r!==a.constants.NO_SERVICE_DATA_COUNT;return e=o?Math.ceil((c-r*s)/(u||1)):Math.ceil(c/(u||1)),o&&t.minimumNumberOfVerticesForGeometry*r>e?void t._set("vertexLimitExceeded",!0):n?i.queryFeatures(t.createVertexLimitExceededQuery(e),{timeout:a.constants.QUERY_STATISTICS_TIMEOUT}).then(function(e){var r=e.features[0];r&&r.attributes?t._set("vertexLimitExceeded",!!r.attributes.exceedslimit):t._set("vertexLimitExceeded",!1)}).catch(function(e){if(e&&"cancel"===e.dojoType)throw e;t._set("vertexLimitExceeded",!1)}):void t._set("vertexLimitExceeded",t.maxTotalSnapshotVertices>e)})},t.prototype.fetchServiceDataInfo=function(){var e=this;this.cancelFetchServiceDataInfo();var t=d.eachAlways([this.updateServiceDataCount(),this.updateVertexLimitExceeded()]),r=t.then(function(){return e.updateServiceDataExtent()}).catch(function(e){e&&"AbortError"===e.name||O.error("#fetchServiceDataInfo()",e)}).then(function(){r===e.fetchDataInfoPromise&&(e.fetchDataInfoPromise=null)});return r.isFulfilled()||(this.fetchDataInfoPromise=r),t.catch(function(){})},t.prototype.cancelFetchServiceDataInfo=function(){var e=this.fetchDataInfoPromise;e&&(this.fetchDataInfoPromise=null,e.cancel())},Object.defineProperty(t.prototype,"debug",{get:function(){return{storedFeatures:this.tileFetcher?this.tileFetcher.storedFeatures:0,totalFeatures:this.tileFetcher?this.tileFetcher.totalFeatures:0,totalVertices:this.tileFetcher?this.tileFetcher.totalVertices:0}},enumerable:!0,configurable:!0});var a;return i([m.property({readOnly:!0})],t.prototype,"type",void 0),i([m.property({constructOnly:!0})],t.prototype,"graphics",void 0),i([m.property({constructOnly:!0})],t.prototype,"layerView",void 0),i([m.property()],t.prototype,"extent",null),i([m.property({dependsOn:["tileFetcher.updating","fetchDataInfoPromise"]})],t.prototype,"updating",null),i([m.property({dependsOn:["updating","tileFetcher.updatingTotal"]})],t.prototype,"updatingTotal",null),i([m.property({dependsOn:["updating","tileFetcher.updatingRemaining"]})],t.prototype,"updatingRemaining",null),i([m.property({dependsOn:["updating","tileFetcher.expectedFeatureDiff"]})],t.prototype,"expectedFeatureDiff",null),i([m.property({dependsOn:["tileFetcher.memoryForUnusedFeatures"]})],t.prototype,"memoryForUnusedFeatures",null),i([m.property({dependsOn:["tileFetcher.maximumNumberOfFeaturesExceeded"]})],t.prototype,"maximumNumberOfFeaturesExceeded",null),i([m.property({readOnly:!0})],t.prototype,"serviceDataExtent",void 0),i([m.property({readOnly:!0})],t.prototype,"serviceDataCount",void 0),i([m.property({readOnly:!0})],t.prototype,"vertexLimitExceeded",void 0),i([m.property({readOnly:!0,dependsOn:["extent"]})],t.prototype,"filteredDataExtent",null),i([m.property()],t.prototype,"displayFeatureLimit",void 0),i([m.property({type:Number,dependsOn:["displayFeatureLimit"]})],t.prototype,"maximumNumberOfFeatures",null),i([m.property({readOnly:!0,dependsOn:["serviceDataCount","displayFeatureLimit","maximumNumberOfFeatures","vertexLimitExceeded","serviceDataExtent","layerView.layer.minScale","layerView.view.featureTiles.tilingScheme"]})],t.prototype,"mode",null),i([m.property({readOnly:!0,dependsOn:["mode","tileFetcher.totalVertices"]})],t.prototype,"maxTotalSnapshotVertices",null),i([m.property({readOnly:!0,dependsOn:["mode"]})],t.prototype,"tileDescriptors",null),i([m.property()],t.prototype,"tileFetcher",void 0),i([m.property()],t.prototype,"fetchDataInfoPromise",void 0),i([m.property({readOnly:!0,dependsOn:["displayFeatureLimit"]})],t.prototype,"vertexLimitInfo",null),t=a=i([m.subclass("esri.layers.graphics.controllers.FeatureTileController3D")],t)}(m.declared(n,h));return function(e){!function(e){function t(){e.MAX_FEATURE_COUNT_FOR_EXTENT=1e4,e.QUERY_STATISTICS_TIMEOUT=12e3,e.QUERY_EXTENT_TIMEOUT=1e4}e.NO_SERVICE_DATA_COUNT=1/0,e.MAX_SNAPSHOT_MIN_SCALE_FACTOR=5,e.reset=t}(e.constants||(e.constants={}))}(T||(T={})),T.constants.reset(),T});