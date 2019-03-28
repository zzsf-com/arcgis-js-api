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

define(["require","exports","../../../../core/ObjectPool","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./FeatureTileDescriptor3D","../../state/Frustum","../../support/FrustumExtentIntersection","../../support/geometryUtils","../../support/mathUtils"],function(e,t,r,i,s,n,u,a,o,l){Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e){this.surfaceElevation=0,this.cache=new Map;var t=e.renderCoordsHelper;this.frustum=new u.Frustum({renderCoordsHelper:t}),this.extendedFrustum=new u.Frustum({renderCoordsHelper:t}),this.intersector=new a.FrustumExtentIntersection({renderCoordsHelper:t}),this.renderCoordsHelper=t}return e.prototype.begin=function(e,t){this.surfaceElevation=t,this.aboveGround=this.renderCoordsHelper.getAltitude(e.eye)>t,this.frustum.update(e),this.shortenFrustumFarPlane(this.frustum),this.updateExtendedFrustum(e,t)},e.prototype.end=function(){this.cache.clear()},e.prototype.calculate=function(e){if(this.allTilesInvisible)return 0;var t="global"===this.renderCoordsHelper.type&&e.lij[0]>=c&&e.lij[0]<h,r=this.getOrCalculateSingleTileVisibility(e,!t);return 0!==r&&t?this.calculateAggregatedChildrenVisibility(e):r},e.prototype.shortenFrustumFarPlane=function(e){for(var t=u.Frustum.nearFarLineIndices,r=e.mutablePoints,s=0,n=t;s<n.length;s++){var a=n[s],o=a[0],l=a[1],d=r[o],c=r[l];i.vec3.subtract(f,c,d),i.vec3.scale(f,f,m),i.vec3.add(r[l],d,f)}e.updatePoints(r)},e.prototype.calculateAggregatedChildrenVisibility=function(e){var t=0,r=this.cache.get(e.id);if(null!=r)return r;var i=v.acquire();e.getChildren(i);for(var s=0,n=i;s<n.length;s++){var u=n[s],a=this.calculate(u);if(0!==a&&(t=a,2===a))break}return v.release(i),this.cache.set(e.id,t),t},e.prototype.getOrCalculateSingleTileVisibility=function(e,t){var r=this.cache.get(e.id);if(null!=r)return r;var i=this.calculateSingleTileVisibility(e);return t&&this.cache.set(e.id,i),i},e.prototype.calculateSingleTileVisibility=function(e){return!this.aboveGround&&"global"===this.renderCoordsHelper.type&&e.lij[0]<p?0===this.calculateSingleTileVisibilitySided(e,!1)?this.calculateSingleTileVisibilitySided(e,!0):void 0:this.calculateSingleTileVisibilitySided(e,this.aboveGround)},e.prototype.calculateSingleTileVisibilitySided=function(e,t){return this.intersector.update(e.extent,e.tilingScheme.spatialReference,this.surfaceElevation,t),this.intersector.isVisibleInFrustum(this.extendedFrustum)?this.intersector.isVisibleInFrustum(this.frustum,!0)?2:1:0},e.prototype.updateExtendedFrustum=function(e,t){var r,s,n=this.renderCoordsHelper;this.extendedFrustum.update(e),this.shortenFrustumFarPlane(this.extendedFrustum);var u=this.renderCoordsHelper.worldUpAtPosition(e.eye,f);this.aboveGround||i.vec3.negate(u,u);var a=l.acos(-i.vec3.dot(u,e.viewForward));if(this.allTilesInvisible=a>(Math.PI+e.fovY)/2,!this.allTilesInvisible&&(this.hasExtendedFrustum=a>e.fovY/2,this.hasExtendedFrustum)){for(var d=this.extendedFrustumParameters(t),c=this.extendedFrustum.mutablePoints,h=0;h<4;h++){var p=d.pointIndices[h],m=c[p],v=n.getAltitude(m);if(d.needsAltitudeAdjustment(v)){switch(this.renderCoordsHelper.worldUpAtPosition(m,f),p){case 4:case 7:case 0:case 3:o.plane.projectVector(this.extendedFrustum.planes[0],f,f);break;case 5:case 6:case 1:case 2:o.plane.projectVector(this.extendedFrustum.planes[1],f,f)}i.vec3.scale(f,f,d.direction),this.renderCoordsHelper.intersectInfiniteManifold(o.ray.wrap(m,f),d.zWithMargin,m)}}if(this.extendedFrustum.updatePoints(c),i.vec3.dot(this.extendedFrustum.planes[4],this.frustum.planes[4])<0){var F=this.extendedFrustum.mutablePoints;this.aboveGround?(r=[F[1],F[0]],F[0]=r[0],F[1]=r[1]):(s=[F[2],F[3]],F[3]=s[0],F[2]=s[1]),this.extendedFrustum.updatePoints(F)}}},e.prototype.extendedFrustumParameters=function(e){return this.aboveGround?this.extendedFrustumParametersAboveSurface(e,1):this.extendedFrustumParametersBelowSurface(e,1)},e.prototype.extendedFrustumParametersAboveSurface=function(e,t){var r=e-t;return{zWithMargin:r,pointIndices:u.Frustum.planePointIndices.bottom,direction:-1,needsAltitudeAdjustment:function(e){return e>r}}},e.prototype.extendedFrustumParametersBelowSurface=function(e,t){var r=e+t;return{zWithMargin:r,pointIndices:u.Frustum.planePointIndices.top,direction:1,needsAltitudeAdjustment:function(e){return e<r}}},e}();t.FeatureTileVisibility3D=d;var c=2,h=6,p=12,m=.95,f=s.vec3f64.create(),v=new r(Array,function(e){4!==e.length&&(e[0]=new n.FeatureTileDescriptor3D,e[1]=new n.FeatureTileDescriptor3D,e[2]=new n.FeatureTileDescriptor3D,e[3]=new n.FeatureTileDescriptor3D)},function(e){e[0].release(),e[1].release(),e[2].release(),e[3].release()});t.default=d});