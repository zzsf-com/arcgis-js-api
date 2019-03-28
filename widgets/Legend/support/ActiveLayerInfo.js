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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","dojo/io-query","../../../Color","../../../request","../../../symbols","../../../core/Accessor","../../../core/arrayUtils","../../../core/Collection","../../../core/Handles","../../../core/Logger","../../../core/promiseUtils","../../../core/urlUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../layers/support/ExportImageParameters","../../../renderers/support/jsonUtils","../../../symbols/support/gfxUtils","../../../symbols/support/symbolUtils","../../../symbols/support/utils","./colorRampUtils","./heatmapRampUtils","./relationshipRampUtils","./sizeRampUtils"],function(e,t,r,n,l,o,i,a,s,u,d,c,y,p,f,h,m,g,b,v,_,S,R,E,L,C,w){function F(e){return"esri.renderers.SimpleRenderer"===e.declaredClass}function I(e){return"esri.renderers.ClassBreaksRenderer"===e.declaredClass}function O(e){return"esri.renderers.UniqueValueRenderer"===e.declaredClass}function T(e){return"esri.renderers.HeatmapRenderer"===e.declaredClass}function D(e){return P(e)||V(e)||x(e)||z(e)}function z(e){return"esri.renderers.PointCloudRGBRenderer"===e.declaredClass}function P(e){return"esri.renderers.PointCloudClassBreaksRenderer"===e.declaredClass}function V(e){return"esri.renderers.PointCloudStretchRenderer"===e.declaredClass}function x(e){return"esri.renderers.PointCloudUniqueValueRenderer"===e.declaredClass}function M(e){return"esri.renderers.DotDensityRenderer"===e.declaredClass}function A(e){return F(e)||I(e)||O(e)||T(e)||P(e)||V(e)||x(e)||M(e)}function U(e){return"esri.layers.WMSLayer"===e.declaredClass}function k(e){return"esri.layers.WMTSLayer"===e.declaredClass}function W(e){return"esri.layers.MapImageLayer"===e.declaredClass}function q(e){return"esri.layers.FeatureLayer"===e.declaredClass}function B(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var j=p.getLogger("esri.widgets.Legend.support.ActiveLayerInfo"),N=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,H=new s.SimpleMarkerSymbol({size:6,outline:{color:[128,128,128,.5],width:.5}}),J=new s.SimpleMarkerSymbol({style:"path",path:"M10,5 L5,0 0,5 M5,0 L5,15",outline:{width:1,color:[85,85,85,1]}});return function(e){function t(t){var r=e.call(this,t)||this;return r._handles=new y,r._hasColorRamp=!1,r._hasOpacityRamp=!1,r._hasSizeRamp=!1,r._legendResponse={},r._webStyleSymbolCache=new Map,r._dotDensityUrlCache=new Map,r._dotDensityPoints=null,r.children=new c,r.layer=null,r.legendElements=[],r.parent=null,r.scale=null,r.title=null,r.view=null,r}return n(t,e),t.prototype.initialize=function(){var e=this,t=function(){return e.notifyChange("ready")};this._handles.add([m.on(this,"children","change",function(r){var n=r.added,l=r.removed,o=e._handles;n.map(function(e){var r="activeLayerInfo-ready-watcher-"+e.layer.uid;o.add(m.init(e,"ready",t),r)}),l.forEach(function(e){return o.remove(e.layer.uid)}),t()})])},t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this._legendResponse=null,this._webStyleSymbolCache=null,this._dotDensityUrlCache=null,this._dotDensityPoints=null},Object.defineProperty(t.prototype,"ready",{get:function(){return null===this.layer||(this.children.length>0?this._isGroupActive():this.legendElements.length>0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isScaleDriven",{get:function(){var e=this,t=this.layer;if(null===t)return!1;if(t.renderer){if("dot-density"===t.renderer.type)return!0;var r=t.get("renderer.valueExpression");if(N.test(r))return!0;var n=t.get("renderer.visualVariables");return n&&n.some(function(t){return e._isScaleDrivenSizeVariable(t)})}return!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this._get("version")+1},enumerable:!0,configurable:!0}),t.prototype.buildLegendElementsForFeatureCollections=function(e){var t=this;this.legendElements=[],e.forEach(function(e){if(q(e))t._buildRendererLegendElements(e.renderer,e.title,"append");else if(e.featureSet&&e.featureSet.features.length){var r=e.layerDefinition,n=r&&r.drawingInfo,l=n&&v.fromJSON(n.renderer);if(!l)return void j.warn("drawingInfo not available!");t._buildRendererLegendElements(l,e.name,"append")}})},t.prototype.buildLegendElementsForRenderer=function(){this._buildRendererLegendElements(this.layer.renderer,null,"replace")},t.prototype.buildLegendElementsForTools=function(){var e=this,t=this.layer;k(t)?this._constructLegendElementsForWMTSlayer():U(t)?this._constructLegendElementsForWMSSublayers():W(t)?this._constructLegendElementsForSublayers():(this._handles.remove("imageryLayers-watcher"),this._getLegendLayers().then(function(r){e.legendElements=[],r.forEach(function(r){if("esri.layers.ImageryLayer"===e.layer.declaredClass){var n=t.watch("renderingRule, bandIds",function(){e._legendResponse.default=null,e.buildLegendElementsForTools()});e._handles.add(n,"imageryLayers-watcher")}var l=e._generateSymbolTableElementForLegendLayer(r);l&&l.infos.length&&e.legendElements.push(l),e.notifyChange("ready")}),e.notifyChange("ready")}).catch(function(e){j.warn("Request to server for legend has failed!",e)}))},t.prototype._isGroupActive=function(){var e=this.children;return!!e.length&&e.some(function(e){return e.ready})},t.prototype._isScaleDrivenSizeVariable=function(e){if(e&&"size"!==e.type)return!1;var t=e,r=t.minSize,n=t.maxSize;return"object"==typeof r&&r?this._isScaleDrivenSizeVariable(r):"object"==typeof n&&n?this._isScaleDrivenSizeVariable(n):!!t.expression||N.test(t.valueExpression)},t.prototype._buildRendererLegendElements=function(e,t,r){var n=this;this._getRendererLegendElements(e,t).then(function(e){"append"===r?Array.prototype.push.apply(n.legendElements,e):n.legendElements=e,n.notifyChange("ready")}).catch(function(e){j.warn("error while building legend for layer!",e)})},t.prototype._constructLegendElementsForWMTSlayer=function(){this.legendElements=[],this._handles.remove("wmts-activeLayer-watcher");var e=this.layer,t=e.activeLayer;if(this._handles.add(m.watch(this.layer,"activeLayer",this._constructLegendElementsForWMTSlayer.bind(this)),"wmts-activeLayer-watcher"),t.styleId&&t.styles){var r=null;t.styles.some(function(e){if(t.styleId===e.id)return r=e.legendUrl,!0}),r&&(this.legendElements=[{type:"symbol-table",title:t.title,infos:[{src:r,opacity:e.opacity}]}])}this.notifyChange("ready")},t.prototype._constructLegendElementsForWMSSublayers=function(){this.legendElements=[],this._handles.remove("wms-sublayers-watcher");var e=this.layer,t=null;(e.customParameters||e.customLayerParameters)&&(t=r({},e.customParameters,e.customLayerParameters)),this._handles.add(m.watch(this.layer,"sublayers",this._constructLegendElementsForWMSSublayers.bind(this)),"wms-sublayers-watcher"),this.legendElements=this._generateLegendElementsForWMSSublayers(e.sublayers,t),this.notifyChange("ready")},t.prototype._generateLegendElementsForWMSSublayers=function(e,t){var r=this,n=[];return this._handles.add(e.on("change",this._constructLegendElementsForWMSSublayers.bind(this)),"wms-sublayers-watcher"),e.forEach(function(e){var l=e.watch("title, visible, legendEnabled",function(){return r._constructLegendElementsForWMSSublayers()});if(r._handles.add(l,"wms-sublayers-watcher"),e.visible&&e.legendEnabled){var o=r._generateSymbolTableElementForWMSSublayer(e,t);o&&o.infos.length&&n.unshift(o)}}),n},t.prototype._generateSymbolTableElementForWMSSublayer=function(e,t){if(!e.legendUrl&&e.sublayers){var r=this._generateLegendElementsForWMSSublayers(e.sublayers,t).filter(function(e){return e});return{type:"symbol-table",title:e.title,infos:r}}return this._generateSymbolTableElementForLegendUrl(e,t)},t.prototype._generateSymbolTableElementForLegendUrl=function(e,t){var r=e.legendUrl;if(r){var n={type:"symbol-table",title:e.title||e.name||e.id&&e.id+"",infos:[]};return t&&(r+="?"+o.objectToQuery(t)),n.infos.push({src:r,opacity:e.layer&&e.layer.opacity}),n}},t.prototype._getLegendLayers=function(e){var t=this,r=e&&e.hasDynamicLayers,n=r?e.dynamicLayers:null,l=n||"default",o=this._legendResponse&&this._legendResponse[l];return o?f.resolve(o):this._legendRequest(n).then(function(e){var r=e.layers;return t._legendResponse[l]=r,r})},t.prototype._legendRequest=function(e){var t=this.layer,r={f:"json",dynamicLayers:e};"esri.layers.ImageryLayer"===t.declaredClass&&(t.renderingRule&&(r.renderingRule=JSON.stringify(t.renderingRule.toJSON())),t.bandIds&&(r.bandIds=t.bandIds.join()));var n=t.url.replace(/(\/)+$/,"");if(t.version>=10.01){var l=n.indexOf("?");l>-1?n=n.substring(0,l)+"/legend"+n.substring(l):n+="/legend"}else{var o=n.toLowerCase().indexOf("/rest/"),i=n.substring(0,o)+n.substring(o+5,n.length);n="https://utility.arcgis.com/sharing/tools/legend?soapUrl="+encodeURI(i)+"&returnbytes=true"}return a(n,{query:r}).then(function(e){return e.data})},t.prototype._constructLegendElementsForSublayers=function(){var e=this;this.legendElements=[],this._handles.remove("sublayers-watcher");var t=this.layer,r=new b.ExportImageParameters({layer:t});this._getLegendLayers(r).then(function(r){var n={};r.forEach(function(e){n[e.layerId]=e}),e._handles.add(m.watch(t,"sublayers",e._constructLegendElementsForSublayers.bind(e)),"sublayers-watcher"),e.legendElements=e._generateLegendElementsForSublayers(t.sublayers,n,t.opacity),e.notifyChange("ready")}).catch(function(e){j.warn("Request to server for legend has failed!",e)}).then(function(){return r.destroy()}),this.notifyChange("ready")},t.prototype._generateLegendElementsForSublayers=function(e,t,r){var n=this,l=[];return this._handles.add(e.on("change",this._constructLegendElementsForSublayers.bind(this)),"sublayers-watcher"),e.forEach(function(e){var o=e.watch("renderer, opacity, title, visible",function(){return n._constructLegendElementsForSublayers()});if(n._handles.add(o,"sublayers-watcher"),e.visible&&e.legendEnabled){var i=e&&null!=e.opacity?e.opacity:null,a=null!=i?i*r:r,s=n._generateSymbolTableElementForSublayer(e,t,a);s&&s.infos.length&&l.unshift(s)}}),l},t.prototype._generateSymbolTableElementForSublayer=function(e,t,r){var n=t[e.id];if(!n&&e.sublayers){var l=this._generateLegendElementsForSublayers(e.sublayers,t,r).filter(function(e){return e});return{type:"symbol-table",title:e.title,infos:l}}return this._generateSymbolTableElementForLegendLayer(n,e,r)},t.prototype._generateSymbolTableElementForLegendLayer=function(e,t,r){var n=this;if(e){var l=t&&t.renderer,o=t&&t.title||e.layerName;if(l){var i=t&&t.title||this._getRendererTitle(l,t);i&&(o&&(i.title=o),o=i)}var a={type:"symbol-table",title:o,infos:[]};if(e.legendType&&(a.legendType=e.legendType),e.legend&&this._isLegendLayerInScale(e,t)){var s=t?this._sanitizeLegendForSublayer(e.legend.slice(),t):e.legend;a.infos=s.map(function(t){var l=t.url;if(t.imageData&&t.imageData.length>0)l="data:image/png;base64,"+t.imageData;else{if(0===l.indexOf("http"))return null;l=h.addTokenParameter(n.layer.url+"/"+e.layerId+"/images/"+l)}return{label:t.label,src:l,opacity:r,width:t.width,height:t.height}}).filter(function(e){return!!e})}return a.infos.length?a:null}},t.prototype._isLegendLayerInScale=function(e,t){var r=t||this.layer,n=null,l=null,o=!0;return!r.minScale&&0!==r.minScale||!r.maxScale&&0!==r.maxScale?(0===e.minScale&&r.tileInfo&&(n=r.tileInfo.lods[0].scale),0===e.maxScale&&r.tileInfo&&(l=r.tileInfo.lods[r.tileInfo.lods.length-1].scale)):(n=Math.min(r.minScale,e.minScale)||r.minScale||e.minScale,l=Math.max(r.maxScale,e.maxScale)),(n>0&&n<this.scale||l>this.scale)&&(o=!1),o},t.prototype._sanitizeLegendForSublayer=function(e,t){if(this.layer.version<10.1||0===e.length)return e;var r=t.renderer,n=e.some(function(e){return e.values}),l=null,o=null;return n&&e.some(function(e,t){return e.values||(l=t,o=e,o.label||(o.label="others")),null!=o}),r?"unique-value"===r.type?o&&(e.splice(l,1),e.push(o)):"class-breaks"===r.type&&(o&&e.splice(l,1),e.reverse(),o&&e.push(o)):o&&(e.splice(l,1),e.push(o)),e},t.prototype._getRendererLegendElements=function(e,t){return A(e)?D(e)?this._constructPointCloudRendererLegendElements(e,t):"dot-density"===e.type?this._constructDotDensityRendererLegendElements(e):this._constructRendererLegendElements(e,t):(j.warn("Renderer not supported!"),f.resolve([]))},t.prototype._getPointCloudRendererTitle=function(e){return e.legendOptions&&e.legendOptions.title||e.field},t.prototype._constructPointCloudRendererLegendElements=function(e,t){var r=this,n=this.layer.opacity,l=[],o=null,i=null;if(P(e))o={type:"symbol-table",title:t||this._getPointCloudRendererTitle(e),infos:[]},e.colorClassBreakInfos.forEach(function(e){o.infos.unshift({label:e.label||e.minValue+" - "+e.maxValue,value:[e.minValue,e.maxValue],symbol:r._getAppliedCloneSymbol(H,e.color,n)})});else if(V(e)){var a=e.stops,s=null;if(a.length&&(1===a.length&&(s=a[0].color),!s)){var u=a[0].value,d=a[a.length-1].value;if(null!=u&&null!=d){var c=u+(d-u)/2;s=E.getColorFromPointCloudStops(c,a)}}o={type:"symbol-table",title:null,infos:[{label:null,value:null,symbol:this._getAppliedCloneSymbol(H,s||H.color,n)}]},i={type:"color-ramp",title:t||this._getPointCloudRendererTitle(e),borderColor:_.getStroke(H).color,overlayColor:E.getRampOverlayColor(n),infos:E.getRampStopsForPointCloud(e.stops)}}else x(e)&&(o={type:"symbol-table",title:t||this._getPointCloudRendererTitle(e),infos:[]},e.colorUniqueValueInfos.forEach(function(e){o.infos.push({label:e.label||e.values.join(", "),value:e.values.join(", "),symbol:r._getAppliedCloneSymbol(H,e.color,n)})}));o&&o.infos.length&&l.push(o),i&&i.infos.length&&l.push(i);var y=l.reduce(function(e,t){return e.concat(t.infos)},[]).filter(function(e){return!!e.symbol}).map(function(e){return r._getSymbolPreview(e)});return f.eachAlways(y).then(function(){return l})},t.prototype._getElementInfoForDotDensity=function(e,t,r,n){var l={opacity:1,src:null,width:22,height:22},o=e+"-"+t+"-"+r+"-"+(n&&JSON.stringify(n.toJSON())),i=this._dotDensityUrlCache;if(i.has(o))return l.src=i.get(o),l;var a=Math.round(484/Math.pow(e,2)*.8),s=window.devicePixelRatio,u=document.createElement("canvas"),d=22*s;u.width=d,u.height=d,u.style.width=u.width/s+"px",u.style.height=u.height/s+"px";var c=u.getContext("2d");if(r&&(c.fillStyle=r.toCss(!0),c.fillRect(0,0,d,d),c.fill()),c.fillStyle=t.toCss(!0),this._dotDensityPoints&&this._dotDensityPoints.length/2===a)for(var y=0;y<2*a;y+=2){var p=this._dotDensityPoints[y],f=this._dotDensityPoints[y+1];c.fillRect(p,f,e*s,e*s),c.fill()}else{this._dotDensityPoints=[];for(var y=0;y<2*a;y+=2){var p=B(0,d),f=B(0,d);this._dotDensityPoints.push(p,f),c.fillRect(p,f,e*s,e*s),c.fill()}}return n&&(n.color&&(c.strokeStyle=n.color.toCss(!0)),c.lineWidth=n.width,c.strokeRect(0,0,d,d)),l.src=u.toDataURL(),i.set(o,l.src),l},t.prototype._constructDotDensityRendererLegendElements=function(e){var t=this,r=e.calculateDotValue(this.view.scale),n=e.legendOptions&&e.legendOptions.unit,l={type:"symbol-table",title:{value:r&&Math.round(r),unit:n||""},infos:[]};return e.attributes.forEach(function(r){var n=t._getElementInfoForDotDensity(e.dotSize,r.color,e.backgroundColor,e.outline);n.label=r.label||r.valueExpressionTitle||r.field,l.infos.push(n)}),f.resolve([l])},t.prototype._constructRendererLegendElements=function(e,t){var r=this;return this._loadRenderer(e).then(function(e){r._hasColorRamp=!1,r._hasOpacityRamp=!1,r._hasSizeRamp=!1;var n=r._getVisualVariableLegendElements(e)||[],l={type:"symbol-table",title:t||r._getRendererTitle(e),infos:[]},o=null,i=!1;if(T(e))n.push({type:"heatmap-ramp",title:t,infos:L.getHeatmapRampStops(e)});else if(O(e)){var a=e&&e.authoringInfo,s=a&&"relationship"===a.type;if(s){var u=a.focus,d=a.numClasses,c=a.field1,y=a.field2;if(d&&c&&y){for(var p=r.layer,h=[c,y],m=C.getRotationAngleForFocus(u)||0,g=0,b=h;g<b.length;g++){var v=b[g],_=v.field,S=v.normalizationField,R={field:r._getFieldAlias(_,p),normField:S&&r._getFieldAlias(S,p)},E=J.clone();E.angle=m,l.infos.push({label:R,symbol:E}),m+=90}var w=C.getRelationshipRampElement({focus:u,numClasses:d,infos:e.uniqueValueInfos});n.unshift(w)}}else{var D=e.field;e.uniqueValueInfos.forEach(function(e){e.symbol&&l.infos.push({label:e.label||r._getDomainName(D,e.value)||e.value,value:e.value,symbol:e.symbol})})}e.defaultSymbol&&(l.infos.push({label:e.defaultLabel||"others",symbol:e.defaultSymbol}),i=!0)}else if(I(e)){o=r._isUnclassedRenderer(e);var z=!o||!r._hasSizeRamp;z&&(e.classBreakInfos.forEach(function(e){e.symbol&&l.infos.unshift({label:e.label||(o?null:e.minValue+" - "+e.maxValue),value:[e.minValue,e.maxValue],symbol:e.symbol})}),o&&(l.title=null),r._updateInfosforClassedSizeRenderer(e,l.infos)),e.defaultSymbol&&!o&&(l.infos.push({label:e.defaultLabel||"others",symbol:e.defaultSymbol}),i=!0)}else F(e)&&e.symbol&&!r._hasSizeRamp&&l.infos.push({label:e.label,symbol:e.symbol});var P=e.defaultSymbol;!P||i||F(e)||o&&!r._hasColorRamp&&!r._hasSizeRamp&&!r._hasOpacityRamp||n.push({type:"symbol-table",infos:[{label:e.defaultLabel||"others",symbol:P}]}),l.infos.length&&n.unshift(l);var V=r._getSymbolConfig("visualVariables"in e&&e.visualVariables),x=n.reduce(function(e,t){return e.concat(t.infos)},[]).filter(function(e){return!(!e||!e.symbol)}).map(function(e){return r._getSymbolPreview(e,V)});return e=null,f.eachAlways(x).then(function(){return n})})},t.prototype._updateInfosforClassedSizeRenderer=function(e,t){var r=e.authoringInfo&&"class-breaks-size"===e.authoringInfo.type,n=e.classBreakInfos.some(function(e){return R.isVolumetricSymbol(e.symbol)});if(r&&n){var l=w.REAL_WORLD_MAX_SIZE,o=w.REAL_WORLD_MIN_SIZE,i=e.classBreakInfos.length,a=(l-o)/(i>1?i-1:i);t.forEach(function(e,t){e.size=l-a*t})}},t.prototype._getSymbolConfig=function(e){var t=!1,r=!1;if(e)for(var n=0;n<e.length&&(!t||!r);n++){var l=e[n];"size"===l.type&&("height"===l.axis&&(t=!0),"width-and-depth"===l.axis&&(r=!0))}return t&&r?"tall":null},t.prototype._getSymbolPreview=function(e,t){return S.renderPreviewHTML(e.symbol,{size:e.size,opacity:this.layer.opacity,symbolConfig:t,rotation:e.symbol.angle}).then(function(t){return e.preview=t,e}).catch(function(){return e.preview=null,e})},t.prototype._loadRenderer=function(e){var t=this,r=[];e=e.clone();var n=this._getMedianColor(e),l=this.layer.opacity;if(I(e)||O(e)){var o=e.classBreakInfos||e.uniqueValueInfos,i=o.map(function(e){return t._fetchSymbol(e.symbol,n,l).then(function(t){e.symbol=t}).catch(function(){e.symbol=null})});Array.prototype.push.apply(r,i)}return r.push(this._fetchSymbol(e.symbol||e.defaultSymbol,e.defaultSymbol?null:n,l).then(function(r){t._applySymbolToRenderer(e,r,F(e))}).catch(function(){t._applySymbolToRenderer(e,null,F(e))})),f.eachAlways(r).then(function(){return e})},t.prototype._applySymbolToRenderer=function(e,t,r){r?e.symbol=t:e.defaultSymbol=t},t.prototype._getMedianColor=function(e){if(!("visualVariables"in e&&e.visualVariables))return null;var t=d.find(e.visualVariables,function(e){return"color"===e.type});if(!t)return null;var r=null,n=null;if(t.stops){if(1===t.stops.length)return t.stops[0].color;r=t.stops[0].value,n=t.stops[t.stops.length-1].value}var l=r+(n-r)/2;return e.getColor(l,{colorInfo:t})},t.prototype._fetchSymbol=function(e,t,r){var n=this;if(!e)return f.reject();if("web-style"===e.type){var l=e.portal,o=l&&l.url,i=l&&l.user&&l.user.username,a=e.name+"-"+e.styleName+"-"+e.styleUrl+"-"+o+"-"+i,s=this._webStyleSymbolCache;return s.has(a)||s.set(a,e.fetchSymbol()),s.get(a).then(function(e){return n._getAppliedCloneSymbol(e,t,r)}).catch(function(){return j.warn("Fetching web-style failed!"),f.reject()})}return f.resolve(this._getAppliedCloneSymbol(e,t,r))},t.prototype._getAppliedCloneSymbol=function(e,t,r){if(!e)return e;var n=e.clone(),l=n.type,o=l.indexOf("3d")>-1,i=t&&t.toRgba();if(o)this._applyColorTo3dSymbol(n,i,r);else{n.color&&(n.color=this._getOpacityAppliedColor(i||n.color.toRgba(),r));var a=n.outline;a&&a.color&&(a.color=this._getOpacityAppliedColor(a.color.toRgba(),r))}return n},t.prototype._applyColorTo3dSymbol=function(e,t,r){var n=this;e.symbolLayers.forEach(function(e){e&&(t&&(e.material||(e.material={}),e.material.color=new i(t)),null!=r&&(e.material&&e.material.color&&(e.material.color=n._getOpacityAppliedColor(e.material.color.toRgba(),r)),e.outline&&e.outline.color&&(e.outline.color=n._getOpacityAppliedColor(e.outline.color.toRgba(),r))))})},t.prototype._getOpacityAppliedColor=function(e,t){return e[3]=e[3]*t,e},t.prototype._getVisualVariableLegendElements=function(e){var t=this;if(!("visualVariables"in e&&e.visualVariables))return null;var r=e.visualVariables,n=[],l=[],o=[],i=this.layer.opacity;r.forEach(function(e){"color"===e.type?n.push(e):"size"===e.type?l.push(e):"opacity"===e.type&&o.push(e)});var a,s,u=n.concat(l,o);if(0===n.length&&I(e)&&e.classBreakInfos&&1===e.classBreakInfos.length){var d=e.classBreakInfos[0];a=d&&d.symbol}if(0===n.length&&F(e)&&(a=e.symbol),a){if(a.type.indexOf("3d")>-1){var c=a.symbolLayers.getItemAt(0);c.get("material.color")&&(s=c.material.color)}else a.url||(s=a.color);s&&(s=s.toRgba())}return u.map(function(r){if(!r.legendOptions||!1!==r.legendOptions.showLegend){var n=t._getRampTitle(r,t.layer),l=E.getRampBorderColor(e),o=E.getRampOverlayColor(i),a=null;return"color"===r.type?(a={type:"color-ramp",title:n,borderColor:l,overlayColor:o,infos:E.getRampStops(e,r)},t._hasColorRamp||(t._hasColorRamp=!(null==a.infos||!a.infos.length))):"size"===r.type?(a={type:"size-ramp",title:n,infos:w.getRampStops(e,r,t._getMedianColor(e),t.scale,t.view)},t._hasSizeRamp||(t._hasSizeRamp=!(null==a.infos||!a.infos.length))):"opacity"===r.type&&(a={type:"opacity-ramp",title:n,borderColor:l,overlayColor:o,infos:E.getRampStops(e,r,s)},t._hasOpacityRamp||(t._hasOpacityRamp=!(null==a.infos||!a.infos.length))),a.infos&&a}}).filter(function(e){return!!e})},t.prototype._getDomainName=function(e,t){if(e&&"function"!=typeof e){var r=this.layer,n=r.getField&&r.getField(e),l=n&&r.getFieldDomain?r.getFieldDomain(n.name):null;return l&&l.codedValues?l.getName(t):null}return null},t.prototype._getRampTitle=function(e,t){var r=e.field,n=e.normalizationField,l=!1,o=!1,i=!1,a=null;if(r="function"==typeof r?null:r,n="function"==typeof n?null:n,null!=(e.legendOptions&&e.legendOptions.title))a=e.legendOptions.title;else if(e.valueExpressionTitle)a=e.valueExpressionTitle;else{if(t.renderer.authoringInfo&&t.renderer.authoringInfo.visualVariables)for(var s=t.renderer.authoringInfo.visualVariables,u=0;u<s.length;u++){var d=s[u];if("color"===d.type){if("ratio"===d.style){l=!0;break}if("percent"===d.style){o=!0;break}if("percentTotal"===d.style){i=!0;break}}}a={field:r&&this._getFieldAlias(r,t),normField:n&&this._getFieldAlias(n,t),ratio:l,ratioPercent:o,ratioPercentTotal:i}}return a},t.prototype._getRendererTitle=function(e,t){var r=e;if(r.legendOptions&&r.legendOptions.title)return r.legendOptions.title;if(r.valueExpressionTitle)return r.valueExpressionTitle;var n=this.layer,l=r.field,o=null,i=null;I(r)&&(o=r.normalizationField,i="percent-of-total"===r.normalizationType),l="function"==typeof l?null:l,o="function"==typeof o?null:o;var a=null;return(l||o)&&(a={field:t?l:l&&this._getFieldAlias(l,n),normField:t?o:o&&this._getFieldAlias(o,n),normByPct:i}),a},t.prototype._getFieldAlias=function(e,t){var r=t.popupTemplate,n=r&&r.fieldInfos,l="function"==typeof e?null:t.getField&&t.getField(e),o=null;n&&n.some(function(t){if(e===t.fieldName)return o=t,!0});var i=o||l,a=null;return i&&(a=o&&o.label||l&&l.alias||i.name||i.fieldName),a},t.prototype._isUnclassedRenderer=function(e){var t=e.visualVariables,r=I(e)&&e.classBreakInfos&&1===e.classBreakInfos.length,n=!1;return r&&t&&(n=e.field?t.some(function(t){return!(!t||e.field!==t.field||(e.normalizationField||t.normalizationField)&&e.normalizationField!==t.normalizationField)}):!!t.length),n},l([g.property()],t.prototype,"children",void 0),l([g.property()],t.prototype,"layer",void 0),l([g.property()],t.prototype,"legendElements",void 0),l([g.property()],t.prototype,"parent",void 0),l([g.property({readOnly:!0})],t.prototype,"ready",null),l([g.property()],t.prototype,"scale",void 0),l([g.property({dependsOn:["layer.renderer?.valueExpression?","layer.renderer?.visualVariables"],readOnly:!0})],t.prototype,"isScaleDriven",null),l([g.property()],t.prototype,"title",void 0),l([g.property({dependsOn:["ready"],readOnly:!0,value:0})],t.prototype,"version",null),l([g.property()],t.prototype,"view",void 0),t=l([g.subclass("esri.widgets.Legend.support.ActiveLayerInfo")],t)}(g.declared(u))});