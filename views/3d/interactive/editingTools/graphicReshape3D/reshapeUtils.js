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

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/extendsHelper","../../../../../core/maybe","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec2f64","../../../../../geometry/support/coordsUtils","../../../../../geometry/support/spatialReferenceUtils"],function(e,t,n,r,o,i,s,a,p){function c(){return new m}function u(e,t,n){return void 0===n&&(n=s.vec2f64.create()),i.vec2.set(n,e,t)}function v(e){return o.isSome(e)&&("polygon"===e.type||"polyline"===e.type)}function l(e,t){return e?"polygon"===e.type?new g(e,t):new f(e,t):null}Object.defineProperty(t,"__esModule",{value:!0});var m=function(){function e(){this.vertices=[],this.edges=[]}return e.prototype.makeVertex=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=null);var r={pos:e,unnormalizedPos:e,left:t,right:n,type:"vertex",component:this};return this.vertices.push(r),r},e.prototype.makeEdge=function(e,t){var n={v0:e,v1:t,type:"edge",component:this};return e.right=n,t.left=n,this.edges.push(n),n},e.prototype.removeVertex=function(e){this.vertices.splice(this.vertices.indexOf(e),1),e.left&&this.removeEdge(e.left),e.right&&this.removeEdge(e.right)},e.prototype.removeEdge=function(e){this.edges.splice(this.edges.indexOf(e),1),e.v0.right=null,e.v1.left=null},e}();t.Component=m,t.makeMapPoint=u;var h=function(){function e(e,t){this.geometry=e,this.doUnnormalization=t,this.components=[];var n=p.getInfo(this.geometry.spatialReference);n?(this._spanMin=n.valid[0],this._spanMax=n.valid[1],this._span=this._spanMax-this._spanMin):this.doUnnormalization=!1}return e.prototype.getVertexPositionAsPoint=function(e,t){return t.x=e.pos[0],t.y=e.pos[1],t.z=null,t.spatialReference=this.geometry.spatialReference,t},e.prototype.getEdgePosition=function(e,t,n){return void 0===n&&(n=s.vec2f64.create()),u((e.v1.unnormalizedPos[0]-e.v0.unnormalizedPos[0])*t+e.v0.unnormalizedPos[0],(e.v1.unnormalizedPos[1]-e.v0.unnormalizedPos[1])*t+e.v0.unnormalizedPos[1],n)},e.prototype.getEdgePositionAsPoint=function(e,t,n){var r=this.getEdgePosition(e,t,d);return n.x=r[0],n.y=r[1],n.z=null,n.spatialReference=this.geometry.spatialReference,n},e.prototype.canRemoveVertex=function(e){return!0},e.prototype.removeVertex=function(e){var t=e.component,n=e.left,r=e.right;return t.removeVertex(e),n&&r?t.makeEdge(n.v0,r.v1):null},e.prototype.splitEdge=function(e,t){var n=e.component,r=n.makeVertex(this.getEdgePosition(e,t)),o=e.v0,i=e.v1;return n.removeEdge(e),n.makeEdge(o,r),n.makeEdge(r,i),r},e}();t.ReshapeHelper=h;var g=function(e){function t(t,n){var r=e.call(this,t,n)||this;r.geometry=t;for(var o=r.geometry.rings,i=0;i<o.length;++i){for(var s=o[i],p=c(),v=s.length-1,l=0;l<v;++l){var m=u(s[l][0],s[l][1]);p.makeVertex(m)}for(var h=p.vertices.length-1,g=0;g<h;++g){var f=p.vertices[g],d=p.vertices[g+1];p.makeEdge(f,d)}p.makeEdge(p.vertices[p.vertices.length-1],p.vertices[0]),r.doUnnormalization&&a.computeUnnormalizedVertexPositionsOnDateLineCrossing(p.vertices,r._spanMin,r._spanMax,r._span),r.components.push(p)}return r}return r(t,e),t.prototype.canRemoveVertex=function(e){return e.component.vertices.length>3},t.prototype.commit=function(){var e=this,t=[];return this.components.forEach(function(n){var r=[];e.doUnnormalization&&a.computeUnnormalizedVertexPositionsOnDateLineCrossing(n.vertices,e._spanMin,e._spanMax,e._span);var o=n.vertices[0],i=o;do{r.push(o.unnormalizedPos),o=o.right.v1}while(o&&o!==i);r.push(n.vertices[0].unnormalizedPos),t.push(r)}),this.geometry.rings=t,this.geometry},t}(h),f=function(e){function t(t,n){var r=e.call(this,t,n)||this;r.geometry=t;for(var o=r.geometry.paths,i=0;i<o.length;++i){for(var s=o[i],p=c(),v=s.length,l=0;l<v;++l){var m=u(s[l][0],s[l][1]);p.makeVertex(m)}for(var h=p.vertices.length-1,g=0;g<h;++g){var f=p.vertices[g],d=p.vertices[g+1];p.makeEdge(f,d)}r.doUnnormalization&&a.computeUnnormalizedVertexPositionsOnDateLineCrossing(p.vertices,r._spanMin,r._spanMax,r._span),r.components.push(p)}return r}return r(t,e),t.prototype.canRemoveVertex=function(e){return e.component.vertices.length>2},t.prototype.commit=function(){var e=this,t=[];return this.components.forEach(function(n){var r=[];e.doUnnormalization&&a.computeUnnormalizedVertexPositionsOnDateLineCrossing(n.vertices,e._spanMin,e._spanMax,e._span);var o=n.vertices[0],i=o;do{r.push(o.unnormalizedPos),o=o.right?o.right.v1:null}while(o&&o!==i);t.push(r)}),this.geometry.paths=t,this.geometry},t}(h);t.isReshapeGeometry=v,t.createReshapeHelper=l;var d=s.vec2f64.create()});