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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/Error","../core/global","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/urlUtils","../core/urlUtils","../core/accessorSupport/decorators","../geometry/Extent","../geometry/SpatialReference","./Layer","./mixins/ArcGISCachedService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./support/SpriteSource","./support/TileInfo","./support/TilemapCache","./support/vectorTileLayerLoader","../portal/support/jsonContext","../views/vectorTiles/SchemaHelper","../views/vectorTiles/style/StyleRepository"],function(e,r,t,o,i,n,l,p,a,s,u,y,c,d,f,m,S,h,g,v,b,O,T,I,_,P,U){return function(r){function a(e,t){var o=r.call(this)||this;return o._spriteSourceMap=new Map,o.currentStyleInfo=null,o.style=null,o.operationalLayerType="VectorTileLayer",o.type="vector-tile",o.url=null,o}return o(a,r),a.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},a.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1}).then(function(){if(e.portalItem&&e.portalItem.id){var r=e.portalItem.itemUrl+"/resources/styles/root.json";return n(r,{query:{f:"json"}}).then(function(t){t.data&&e.read({url:r},_.createForItem(e.portalItem))})}}).then(function(){return e.loadStyle()},function(){return e.loadStyle()});return this.addResolvingPromise(r),this.when()},Object.defineProperty(a.prototype,"attributionDataUrl",{get:function(){var e=this.currentStyleInfo,r=e&&e.serviceUrl&&y.urlToObject(e.serviceUrl);return r?this._getDefaultAttribution(r.path):null},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"capabilities",{get:function(){var e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"fullExtent",{get:function(){var e=this._getPrimarySource();return e?e.fullExtent:null},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"parsedUrl",{get:function(){return this.serviceUrl?u.urlToObject(this.serviceUrl):null},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"serviceUrl",{get:function(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"spatialReference",{get:function(){return this.tileInfo&&this.tileInfo.spatialReference||null},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"styleUrl",{get:function(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null},enumerable:!0,configurable:!0}),a.prototype.writeStyleUrl=function(e,r){e&&y.isProtocolRelative(e)&&(e="https:"+e),r.styleUrl=e},Object.defineProperty(a.prototype,"tileIndexType",{get:function(){var e=this._getPrimarySource();return e?e.type:""},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"tileIndexUrl",{get:function(){var e=this._getPrimarySource();return e?e.tileMapURL:""},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"tileInfo",{get:function(){var e=this._getPrimarySource();return e?e.tileInfo:null},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"tilemapCache",{get:function(){var e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"tileServers",{get:function(){var e=this._getPrimarySource();return e?e.tileServers:[]},enumerable:!0,configurable:!0}),a.prototype.readVersion=function(e,r){return r.version?parseFloat(r.version):parseFloat(r.currentVersion)},a.prototype.readCompatibleTileInfo256=function(e,r){return O.fromJSON(P.create256x256CompatibleTileInfo(r.tileInfo))},a.prototype.readCompatibleTileInfo512=function(e,r){return O.fromJSON(P.create512x512CompatibleTileInfo(r.tileInfo))},a.prototype.loadSpriteSource=function(e){if(void 0===e&&(e=1),!this._spriteSourceMap.has(e)){var r=new b.default(this.styleRepository.sprite,e);this._spriteSourceMap.set(e,r.load())}var t=this._spriteSourceMap.get(e);return s.create(function(e,r){t.then(e,r)})},a.prototype.loadStyle=function(e){var r=this,t=e||this.style||this.url;if(this._loadingPromise&&"string"==typeof t&&this.url===t)return this._loadingPromise;var o=this._loadingPromise;return this._loadingPromise=this._getSourceAndStyle(t).then(function(){r.loadSpriteSource(p.devicePixelRatio||1)}),o&&!o.isFulfilled()&&o.cancel(),this._loadingPromise},a.prototype.getStyleLayerId=function(e){return this.styleRepository.getStyleLayerId(e)},a.prototype.getPaintProperties=function(e){return this.styleRepository.getPaintProperties(e)},a.prototype.setPaintProperties=function(e,r){var t=this.styleRepository.setPaintProperties(e,r);this.emit("paint-change",{layer:t,paint:r})},a.prototype.getLayoutProperties=function(e){return this.styleRepository.getLayoutProperties(e)},a.prototype.setLayoutProperties=function(e,r){var t=this.styleRepository.setLayoutProperties(e,r);this.emit("layout-change",{layer:t,layout:r})},a.prototype.getTileUrl=function(e,r,t){var o=this.tileServers[r%this.tileServers.length];return o=o.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,t.toString())},a.prototype.write=function(e,r){return r&&r.origin&&!this.styleUrl?(r.messages&&r.messages.push(new l("vectortilelayer:unsupported","VectorTileLayer ("+this.title+", "+this.id+") with style defined by JSON only are not supported",{layer:this})),null):this.inherited(arguments,[e,r])},a.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return s.create(function(r){return e(["../views/2d/layers/VectorTileLayerView2D"],r)});case"3d":return s.create(function(r){return e(["../views/3d/layers/VectorTileLayerView3D"],r)})}},a.prototype._getSourceAndStyle=function(e){var r=this;return e?I.loadMetadata(e).then(function(t){r._set("currentStyleInfo",{serviceUrl:t.serviceUrl,styleUrl:t.styleUrl,spriteUrl:t.spriteUrl,glyphsUrl:t.glyphsUrl,style:t.style,layerDefinition:t.layerDefinition}),"string"==typeof e?(r.url=e,r.style=null):(r.url=null,r.style=e),r._set("sourceNameToSource",t.sourceNameToSource),r._set("primarySourceName",t.primarySourceName),r._set("styleRepository",new U(t.style,t)),r.read(t.layerDefinition,{origin:"service"})}):s.reject(new Error("invalid style!"))},a.prototype._getDefaultAttribution=function(e){var r=e.match(/^https?:\/\/(basemaps|basemapsbeta|basemapsdev)\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),t=["OpenStreetMap_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84"];if(r){var o=r[3]&&r[3].toLowerCase();if(o)for(var i=r[2]||"",n=0,l=t;n<l.length;n++){var p=l[n];if(p.toLowerCase().indexOf(o)>-1)return y.normalize("//static.arcgis.com/attribution/Vector"+i+"/"+p)}}},a.prototype._getPrimarySource=function(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null},i([c.property({readOnly:!0,dependsOn:["currentStyleInfo"]})],a.prototype,"attributionDataUrl",null),i([c.property({type:["show","hide"]})],a.prototype,"listMode",void 0),i([c.property({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],a.prototype,"capabilities",null),i([c.property({readOnly:!0})],a.prototype,"currentStyleInfo",void 0),i([c.property({json:{read:!1},readOnly:!0,type:d,dependsOn:["sourceNameToSource","primarySourceName"]})],a.prototype,"fullExtent",null),i([c.property()],a.prototype,"style",void 0),i([c.property({type:["VectorTileLayer"]})],a.prototype,"operationalLayerType",void 0),i([c.property({readOnly:!0,dependsOn:["serviceUrl"]})],a.prototype,"parsedUrl",null),i([c.property({readOnly:!0,dependsOn:["currentStyleInfo"]})],a.prototype,"serviceUrl",null),i([c.property({type:f,dependsOn:["tileInfo"],readOnly:!0})],a.prototype,"spatialReference",null),i([c.property({readOnly:!0})],a.prototype,"styleRepository",void 0),i([c.property({readOnly:!0})],a.prototype,"sourceNameToSource",void 0),i([c.property({readOnly:!0})],a.prototype,"primarySourceName",void 0),i([c.property({type:String,readOnly:!0,dependsOn:["currentStyleInfo"],json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],a.prototype,"styleUrl",null),i([c.writer(["portal-item","web-document"],"styleUrl")],a.prototype,"writeStyleUrl",null),i([c.property({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],a.prototype,"tileIndexType",null),i([c.property({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],a.prototype,"tileIndexUrl",null),i([c.property({json:{read:!1},readOnly:!0,type:O,dependsOn:["sourceNameToSource","primarySourceName"]})],a.prototype,"tileInfo",null),i([c.property({json:{read:!1},readOnly:!0,type:T,dependsOn:["sourceNameToSource","primarySourceName"]})],a.prototype,"tilemapCache",null),i([c.property({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],a.prototype,"tileServers",null),i([c.property({json:{read:!1},readOnly:!0,value:"vector-tile"})],a.prototype,"type",void 0),i([c.property({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],a.prototype,"url",void 0),i([c.property({readOnly:!0})],a.prototype,"version",void 0),i([c.reader("version",["version","currentVersion"])],a.prototype,"readVersion",null),i([c.property({readOnly:!0})],a.prototype,"compatibleTileInfo256",void 0),i([c.reader("compatibleTileInfo256",["tileInfo"])],a.prototype,"readCompatibleTileInfo256",null),i([c.property({readOnly:!0})],a.prototype,"compatibleTileInfo512",void 0),i([c.reader("compatibleTileInfo512",["tileInfo"])],a.prototype,"readCompatibleTileInfo512",null),a=i([c.subclass("esri.layers.VectorTileLayer")],a)}(c.declared(m,h,g,v,a,S))});