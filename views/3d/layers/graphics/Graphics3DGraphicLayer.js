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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","./featureExpressionInfoUtils","./Graphics3DGraphicElevationContext","../../lib/glMatrix","../../support/aaBoundingBox","../../webgl-engine/Stage"],function(e,t,i,s,n,a,r,o,u,h){function l(e,t,i){return i||(i=u.create()),u.setMin(i,e.getBBMin(t)),u.setMax(i,e.getBBMax(t)),i}var c=o.vec3d,g=o.mat4d,d=[0,0,0],p=function(){function e(t,i,s,n,a,o,u,h){this._addedToStage=!1,this.alignedTerrainElevation=0,this.needsElevationUpdates=!1,this.graphics3DSymbolLayer=t,this.uniqueMaterials=n,this.uniqueGeometries=s,this.uniqueTextures=a,this.stageObject=i,this.elevationAligner=o,this.elevationContext=new r(u),this.stage=null,this.stageLayer=null,this._visible=!1,this.visibilityMode=null!=h?h:e.VisibilityModes.HIDE_FACERANGE}return e.prototype.initialize=function(e,t){if(this.stageLayer=e,this.stage=t,this.uniqueMaterials)for(var i=0;i<this.uniqueMaterials.length;i++)t.add(h.ModelContentType.MATERIAL,this.uniqueMaterials[i]);if(this.uniqueGeometries)for(var i=0;i<this.uniqueGeometries.length;i++)t.add(h.ModelContentType.GEOMETRY,this.uniqueGeometries[i]);if(this.uniqueTextures)for(var i=0;i<this.uniqueTextures.length;i++)t.add(h.ModelContentType.TEXTURE,this.uniqueTextures[i]);t.add(h.ModelContentType.OBJECT,this.stageObject)},e.prototype.isDraped=function(){return!1},e.prototype.setVisibility=function(t){if(null!=this.stage){if(this._visible!==t){this._visible=t,this._visible?this._addedToStage?this.stageObject.unhideAllComponents():(this.stageLayer.addObject(this.stageObject),this._addedToStage=!0):this.visibilityMode===e.VisibilityModes.HIDE_FACERANGE?this.stageObject.hideAllComponents():(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1);var i=this.stage.view.getEdgeView();return i&&i.hasObject(this.stageObject)&&i.updateObjectVisibility(this.stageObject,this._visible),!0}return!1}},e.prototype.destroy=function(){var e=this.stage;if(this.stageLayer){if(this.uniqueMaterials)for(var t=0;t<this.uniqueMaterials.length;t++)e.remove(h.ModelContentType.MATERIAL,this.uniqueMaterials[t].id);if(this.uniqueGeometries)for(var t=0;t<this.uniqueGeometries.length;t++)e.remove(h.ModelContentType.GEOMETRY,this.uniqueGeometries[t].id);if(this.uniqueTextures)for(var t=0;t<this.uniqueTextures.length;t++)e.remove(h.ModelContentType.TEXTURE,this.uniqueTextures[t].id)}e.remove(h.ModelContentType.OBJECT,this.stageObject.id),this._addedToStage&&(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1);var i=this.stage.view.getEdgeView();i&&i.hasObject(this.stageObject)&&i.removeObject(this.stageObject),this._visible=!1,this.stageLayer=null,this.stage=null},e.prototype.alignWithElevation=function(e,t,i){if(this.elevationAligner){a.setContextFeature(this.elevationContext.featureExpressionInfoContext,i);var s=this.elevationAligner(this.stageObject,this.elevationContext,e,t);null!=s&&(this.alignedTerrainElevation=s)}},e.prototype.setDrawOrder=function(e,t,i){},e.prototype.getBSRadius=function(){return this.stageObject.getBSRadius()},e.prototype.getCenterObjectSpace=function(){return this.stageObject.getCenter(!0)},e.prototype.getBoundingBoxObjectSpace=function(e){return l(this.stageObject,!0,e)},e.prototype.getProjectedBoundingBox=function(e,t,i,a){return n(this,void 0,void 0,function(){var n,r,o,h,l,c,h,p,y,O;return s(this,function(s){switch(s.label){case 0:for(n=this.getBoundingBoxObjectSpace(i),r=f,o=u.isPoint(n)?1:r.length,h=0;h<o;h++)l=r[h],v[0]=n[l[0]],v[1]=n[l[1]],v[2]=n[l[2]],g.multiplyVec3(this.stageObject.objectTransformation,v),b[3*h+0]=v[0],b[3*h+1]=v[1],b[3*h+2]=v[2];if(!e(b,0,o))return[3,6];for(u.set(n,u.NEGATIVE_INFINITY),c=null,this.calculateRelativeScreenBounds&&(c=this.calculateRelativeScreenBounds()),h=0;h<3*o;h+=3){for(p=0;p<3;p++)n[p]=Math.min(n[p],b[h+p]),n[p+3]=Math.max(n[p+3],b[h+p]);c&&a.push({location:b.slice(h,h+3),screenSpaceBoundingRect:c})}if(!t)return[3,5];if(u.center(n,d),"absolute-height"===this.elevationContext.mode)return[3,5];y=void 0,s.label=1;case 1:return s.trys.push([1,3,,4]),[4,t.queryElevation(d[0],d[1])];case 2:return y=s.sent(),[3,4];case 3:return O=s.sent(),y=null,[3,4];case 4:null!=y&&u.offset(n,0,0,-this.alignedTerrainElevation+y),s.label=5;case 5:return[2,n];case 6:return[2,null]}})})},e.prototype.addHighlight=function(e,t){var i=this.stageObject.highlightAllComponents(t);e.addObject(this.stageObject,i)},e.prototype.removeHighlight=function(e){e.removeObject(this.stageObject)},e.VisibilityModes={REMOVE_OBJECT:0,HIDE_FACERANGE:1},e}(),b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],v=c.create(),f=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];return p});