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

define(["require","exports","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f32","../../../core/libs/gl-matrix-2/vec2f32","../../../core/libs/gl-matrix-2/vec3f32","../../../core/libs/gl-matrix-2/vec4f32","../GeometryUtils","./rendererUtils","../../webgl/VertexArrayObject"],function(e,t,i,r,o,a,n,s,f,c){return function(){function e(e){this._viewProjMat=r.mat4f32.create(),this._offsetVector=a.vec3f32.create(),this._spritesTextureSize=o.vec2f32.create(),this._color=n.vec4f32.create(),this._initialized=!1,this._programOptions={id:!1,dd:!1,sdf:!1},this._programCache=e}return e.prototype.dispose=function(){},e.prototype.render=function(e,t,r,o,a,n,c,l,m,u,d,_){var v=this;this._initialized||this._initialize(e);var h=l.hasDataDrivenIconSize?1:l.getLayoutValue("icon-size",r),p=l.hasDataDrivenIconColor?[1,1,1,1]:l.getPaintValue("icon-color",r),g=l.hasDataDrivenIconOpacity?1:l.getPaintValue("icon-opacity",r),y=p[3]*g*_;this._color[0]=y*p[0],this._color[1]=y*p[1],this._color[2]=y*p[2],this._color[3]=y;var x=l.getLayoutValue("icon-rotation-alignment",r);2===x&&(x=1===l.getLayoutValue("symbol-placement",r)?0:1);var V=0===x,z=t.isSDF,b=l.hasDataDrivenIcon,D=3===o,U=s.degToByte(a),A=c.tileTransform.transform,O=l.getPaintValue("icon-translate",r);if(0!==O[0]||0!==O[1]){i.mat4.copy(this._viewProjMat,c.tileTransform.transform);var P=O[0],j=O[1],M=0,w=0,I=c.coordRange/512,C=(1<<c.key.level)/Math.pow(2,r)*I;if(1===l.getPaintValue("icon-translate-anchor",r)){var S=-s.C_DEG_TO_RAD*a,T=Math.sin(S),L=Math.cos(S);M=C*(P*L-j*T),w=C*(P*T+j*L)}else M=C*P,w=C*j;this._offsetVector[0]=M,this._offsetVector[1]=w,this._offsetVector[2]=0,i.mat4.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),A=this._viewProjMat}var B=V?u:d,E=this._getIconVAO(e,c,b);if(E){e.bindVAO(E);var k=(D?1:0)<<2|(b?1:0)<<1|(z?1:0),R=this._programOptions;R.id=D,R.dd=b,R.sdf=z;var G=this._programCache.getProgram(4,k,R);if(e.bindProgram(G),z){var q=l.getPaintValue("icon-halo-color",r),F=l.getPaintValue("icon-halo-width",r);G.setUniform4f("u_outlineColor",q[0],q[1],q[2],q[3]),G.setUniform1f("u_outlineSize",F)}if(G.setUniformMatrix4fv("u_transformMatrix",A),G.setUniformMatrix4fv("u_extrudeMatrix",B),G.setUniform2fv("u_normalized_origin",c.tileTransform.displayCoord),G.setUniform1f("u_depth",l.z),G.setUniform1f("u_mapRotation",U),G.setUniform1f("u_keepUpright",0),G.setUniform1f("u_level",10*r),G.setUniform1f("u_fadeSpeed",10*n.fadeSpeed),G.setUniform1f("u_minfadeLevel",10*n.minfadeLevel),G.setUniform1f("u_maxfadeLevel",10*n.maxfadeLevel),G.setUniform1f("u_fadeChange",10*(r+n.fadeChange)),G.setUniform1i("u_texture",5),G.setUniform1f("u_size",h),G.setUniform4fv("u_color",this._color),D){var H=f.int32To4Bytes(t.layerID);G.setUniform4f("u_id",H[0],H[1],H[2],H[3])}t.markerPerPageElementsMap.forEach(function(t,i){v._spritesTextureSize[0]=m.getWidth(i)/4,v._spritesTextureSize[1]=m.getHeight(i)/4,G.setUniform2fv("u_mosaicSize",v._spritesTextureSize),m.bind(e,9729,i,5),e.drawElements(4,t[1],5125,12*t[0])}),e.bindVAO()}},e.prototype._initialize=function(e){return!!this._initialized||(this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]},this._vertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:24,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:24,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:24,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:16,stride:24,normalized:!0,divisor:0},{name:"a_size",count:1,type:5126,offset:20,stride:24,normalized:!1,divisor:0}]},this._initialized=!0,!0)},e.prototype._getIconVAO=function(e,t,i){if(i){if(t.iconDDVertexArrayObject)return t.iconDDVertexArrayObject;var r=t.iconDDVertexBuffer,o=t.iconIndexBuffer;return r&&o?(t.iconDDVertexArrayObject=new c(e,this._programCache.getProgramAttributes(4),this._vertexAttributesDD,{geometry:r},o),t.iconDDVertexArrayObject):null}if(t.iconVertexArrayObject)return t.iconVertexArrayObject;var r=t.iconVertexBuffer,o=t.iconIndexBuffer;return r&&o?(t.iconVertexArrayObject=new c(e,this._programCache.getProgramAttributes(4),this._vertexAttributes,{geometry:r},o),t.iconVertexArrayObject):null},e}()});