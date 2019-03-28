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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/Error","../core/lang","../core/Logger","../core/promiseUtils","../core/accessorSupport/decorators","../core/libs/gl-matrix-2/vec3f64","../core/libs/gl-matrix-2/vec4f64","./Extent","./Geometry","./Point","./Polygon","./support/MeshComponent","./support/MeshVertexAttributes","./support/triangulationUtils","./support/meshUtils/centerAt","./support/meshUtils/merge","./support/meshUtils/offset","./support/meshUtils/primitives","./support/meshUtils/rotate","./support/meshUtils/scale"],function(e,t,r,n,o,i,a,s,c,p,l,u,m,f,h,x,y,v,d,g,b,A,w,M,U,F,P){function S(e,t){for(var r=e.components[0],n=r.faces,o=U.boxFaceOrder[t],i=6*o,a=new Uint32Array(6),s=new Uint32Array(n.length-6),c=0,p=0,l=0;l<n.length;l++)l>=i&&l<i+6?a[c++]=n[l]:s[p++]=n[l];for(var u=new Float32Array(e.vertexAttributes.uv),m=4*o*2,f=[0,1,1,1,1,0,0,0],l=0;l<f.length;l++)u[m+l]=f[l];return e.vertexAttributes.uv=u,e.components=[new d({faces:a,material:r.material}),new d({faces:s})],e}function z(e){return e/180*Math.PI}var C=p.getLogger("esri.geometry.Mesh"),O=function(t){function p(e){var r=t.call(this)||this;return r.components=null,r.hasZ=!0,r.hasM=!1,r.vertexAttributes=new g.MeshVertexAttributes,r.type="mesh",r}r(p,t),m=p,Object.defineProperty(p.prototype,"extent",{get:function(){var e=this.spatialReference,t=this.vertexAttributes&&this.vertexAttributes.position;if(!t||0===t.length||this.components&&0===this.components.length)return new h({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e});var r={xmin:1/0,xmax:-1/0,ymin:1/0,ymax:-1/0,zmin:1/0,zmax:-1/0,spatialReference:e};if(!this.components)return new h(this.extendExtent(r,t,null));for(var n=0,o=this.components;n<o.length;n++){var i=o[n];if(!i.faces){this.extendExtent(r,t,null);break}this.extendExtent(r,t,i.faces)}return new h(r)},enumerable:!0,configurable:!0}),p.prototype.addComponent=function(e){this.components||(this.components=[]),this.components.push(e),this.clearCache()},p.prototype.removeComponent=function(e){if(this.components){var t=this.components.indexOf(e);if(-1!==t)return void(this.components=this.components.splice(t,1))}C.error("removeComponent()","Provided component is not part of the list of components")},p.prototype.rotate=function(e,t,r,n){return F.axisAngleFrom(E.x,z(e),V),F.axisAngleFrom(E.y,z(t),j),F.axisAngleFrom(E.z,z(r),R),F.axisAngleMultiply(V,j,V),F.axisAngleMultiply(V,R,V),F.rotate(this,V,n),this},p.prototype.offset=function(e,t,r,n){return G[0]=e,G[1]=t,G[2]=r,M.offset(this,G,n),this},p.prototype.scale=function(e,t){return P.scale(this,e,t),this},p.prototype.centerAt=function(e,t){return A.centerAt(this,e,t),this},p.prototype.clone=function(){return new m({components:c.clone(this.components),spatialReference:this.spatialReference,vertexAttributes:c.clone(this.vertexAttributes)})},p.prototype.vertexAttributesChanged=function(){this.clearCache()},p.prototype.toJSON=function(e){return this.write(null,e)},p.prototype.forEachVertex=function(e,t,r){if(t)for(var n=0;n<t.length;n++){var o=3*t[n];r(e[o+0],e[o+1],e[o+2])}else for(var n=0;n<e.length;n+=3)r(e[n+0],e[n+1],e[n+2])},p.prototype.extendExtent=function(e,t,r){return this.forEachVertex(t,r,function(t,r,n){e.xmin=Math.min(e.xmin,t),e.xmax=Math.max(e.xmax,t),e.ymin=Math.min(e.ymin,r),e.ymax=Math.max(e.ymax,r),e.zmin=Math.min(e.zmin,n),e.zmax=Math.max(e.zmax,n)}),e},p.createBox=function(e,t){if(!(e instanceof y))return C.error(".createBox()","expected location to be a Point instance"),null;var r=new m(U.convertUnitGeometry(U.createUnitSizeBox(),e,t));return t&&t.imageFace&&"all"!==t.imageFace?S(r,t.imageFace):r},p.createSphere=function(e,t){return e instanceof y?new m(U.convertUnitGeometry(U.createUnitSizeSphere(t&&t.densificationFactor||0),e,t)):(C.error(".createSphere()","expected location to be a Point instance"),null)},p.createCylinder=function(e,t){return e instanceof y?new m(U.convertUnitGeometry(U.createUnitSizeCylinder(t&&t.densificationFactor||0),e,t)):(C.error(".createCylinder()","expected location to be a Point instance"),null)},p.createPlane=function(e,t){return e instanceof y?new m(U.convertUnitGeometry(U.createUnitSizePlane(t&&t.facing||"up"),e,t)):(C.error(".createPlane()","expected location to be a Point instance"),null)},p.createFromPolygon=function(e,t){if(!(e instanceof v))return C.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;var r=b.triangulate(e);return new m({vertexAttributes:{position:r.position},components:[{faces:r.faces,shading:"flat",material:t&&t.material||null}],spatialReference:e.spatialReference})},p.createFromGLTF=function(t,r,n){return a(this,void 0,void 0,function(){var o=this;return i(this,function(c){return t instanceof y?[2,l.create(function(s,c){e(["./support/loadGLTFMesh"],function(e){return a(o,void 0,void 0,function(){var o,a;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,e.loadGLTFMesh(t,r,n)];case 1:return o=i.sent(),s(new m(w.merge(o.map(function(e){return new m(e)})))),[3,3];case 2:return a=i.sent(),c(a),[3,3];case 3:return[2]}})})})})]:(C.error(".createfromGLTF()","expected location to be a Point instance"),[2,l.reject(new s("invalid-input","Expected location to be a Point instance"))])})})};var m;return n([u.property({dependsOn:["vertexAttributes","vertexAttributes.position","components"],json:{read:!1}})],p.prototype,"cache",void 0),n([u.property({type:[d]})],p.prototype,"components",void 0),n([u.property({dependsOn:["cache"],readOnly:!0,json:{read:!1}})],p.prototype,"extent",null),n([u.property({readOnly:!0,json:{read:!1,write:!1}})],p.prototype,"hasZ",void 0),n([u.property({readOnly:!0,json:{read:!1,write:!1}})],p.prototype,"hasM",void 0),n([u.property({type:g.MeshVertexAttributes,nonNullable:!0,json:{write:!0}})],p.prototype,"vertexAttributes",void 0),n([o(0,u.cast(d))],p.prototype,"addComponent",null),p=m=n([u.subclass("esri.geometry.Mesh")],p)}(u.declared(x));O.prototype.toJSON.isDefaultToJSON=!0;var E={x:m.vec3f64.fromValues(1,0,0),y:m.vec3f64.fromValues(0,1,0),z:m.vec3f64.fromValues(0,0,1)},G=m.vec3f64.create(),V=f.vec4f64.create(),j=f.vec4f64.create(),R=f.vec4f64.create();return O});