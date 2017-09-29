// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec4","../../../core/libs/gl-matrix/vec3","../../../core/libs/gl-matrix/vec2","../../webgl/Program","../../webgl/VertexArrayObject","../GeometryUtils","./vtShaderSnippets"],function(t,r,e,i,a,n,s,o,l,_){var f=function(){function t(){this._triangleAttributeLocations={a_pos:0,a_offsetAndNormal:1,a_accumulatedDistance:2},this._initialized=!1,this._viewProjMat=e.create(),this._offsetVector=a.create(),this._screenSize=n.create(),this._color=i.create(),this._dashArray=n.create()}return t.prototype.dispose=function(){this._triangleslProgram&&(this._triangleslProgram.dispose(),this._triangleslProgram=null),this._patternLineProgram&&(this._patternLineProgram.dispose(),this._patternLineProgram=null)},t.prototype.render=function(t,r,i,a,n,s,o,_,f,g){if(0!==r.triangleElementCount){this._initialized||this._initialize(t);var m=n.tileTransform.transform,h=512,u=n.coordRange/h,c=s.getPaintValue("line-translate",i);if(0!==c[0]||0!==c[1]){e.copy(this._viewProjMat,n.tileTransform.transform);var d=c[0],p=c[1],P=0,v=0,b=(1<<n.key.level)/Math.pow(2,i)*u,y=a.rotation,V=s.getPaintValue("line-translate-anchor",i);if(1===V){var x=Math.sin(l.C_DEG_TO_RAD*-y),A=Math.cos(l.C_DEG_TO_RAD*-y);P=b*(d*A-p*x),v=b*(d*x+p*A)}else P=b*d,v=b*p;this._offsetVector[0]=P,this._offsetVector[1]=v,this._offsetVector[2]=0,e.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),m=this._viewProjMat}var L=s.getPaintValue("line-pattern",i),U=void 0!==L,z=1/f,M=s.getPaintValue("line-blur",i)+z,w=s.getPaintValue("line-width",i),S=.5*(w+z),T=g*s.getPaintValue("line-opacity",i),O=s.getPaintValue("line-color",i),j=O[3]*T;this._color[0]=j*O[0],this._color[1]=j*O[1],this._color[2]=j*O[2],this._color[3]=j;var C=this._getTrianglesVAO(t,n);if(C){if(t.bindVAO(C),U){var D=o.getMosaicItemPosition(L,!0);D&&(o.bind(t,9729,D.page,1),t.bindProgram(this._patternLineProgram),this._patternLineProgram.setUniformMatrix4fv("u_transformMatrix",m),this._patternLineProgram.setUniformMatrix4fv("u_extrudeMatrix",_),this._patternLineProgram.setUniform2fv("u_normalized_origin",n.tileTransform.displayCoord),this._patternLineProgram.setUniform1f("u_depth",s.z),this._patternLineProgram.setUniform1f("u_lineHalfWidth",S),this._patternLineProgram.setUniform1f("u_blur",M),this._patternLineProgram.setUniform1f("u_opacity",T),this._patternLineProgram.setUniform2f("u_pattern_tl",D.tl[0],D.tl[1]),this._patternLineProgram.setUniform2f("u_pattern_br",D.br[0],D.br[1]),this._patternLineProgram.setUniform2f("u_spriteSize",u*D.size[0],D.size[1]),this._patternLineProgram.setUniform1i("u_texture",1))}else{var E=s.getPaintValue("line-dasharray",i);E.length<2&&(E=[1,-1]);var G=w*u;this._dashArray[0]=G*E[0],this._dashArray[1]=G*E[1],t.bindProgram(this._triangleslProgram),this._triangleslProgram.setUniformMatrix4fv("u_transformMatrix",m),this._triangleslProgram.setUniformMatrix4fv("u_extrudeMatrix",_),this._triangleslProgram.setUniform2fv("u_normalized_origin",n.tileTransform.displayCoord),this._triangleslProgram.setUniform1f("u_depth",s.z),this._triangleslProgram.setUniform4fv("u_color",this._color),this._triangleslProgram.setUniform1f("u_lineHalfWidth",S),this._triangleslProgram.setUniform2fv("u_dasharray",this._dashArray),this._triangleslProgram.setUniform1f("u_blur",M)}t.drawElements(4,r.triangleElementCount,5125,12*r.triangleElementStart),t.bindVAO()}}},t.prototype._initialize=function(t){if(this._initialized)return!0;var r=new s(t,_.lineShaderVS,_.lineShaderFS,this._triangleAttributeLocations),e={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:12,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:12,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:2,type:5123,offset:8,stride:12,normalized:!1,divisor:0}]},i=new s(t,_.patternLineShaderVS,_.patternLineShaderFS,this._triangleAttributeLocations);return this._triangleslProgram=r,this._patternLineProgram=i,this._trianglesVertexAttributes=e,this._initialized=!0,!0},t.prototype._getTrianglesVAO=function(t,r){if(r.lineTrianglesVertexArrayObject)return r.lineTrianglesVertexArrayObject;var e=r.lineVertexBuffer,i=r.lineTrianglesIndexBuffer;return e&&i?(r.lineTrianglesVertexArrayObject=new o(t,this._triangleAttributeLocations,this._trianglesVertexAttributes,{geometry:e},i),r.lineTrianglesVertexArrayObject):null},t}();return f});