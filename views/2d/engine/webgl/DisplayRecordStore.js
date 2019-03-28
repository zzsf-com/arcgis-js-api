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

define(["require","exports","../../../../core/has","./FreeList","./Utils"],function(e,t,v,D,T){Object.defineProperty(t,"__esModule",{value:!0});var M=["FILL","LINE","MARKER","TEXT","LABEL"];var r=function(){function B(e,t,r,i){for(var o in this._strides=e,this._displayList=t,this._freeListsAndStorage={},this._dirtyMap=null,this._dirtyMap=r,e)for(var n in this._freeListsAndStorage[o]={vtxFreeList:i?new D.FreeList(i):null,idxFreeList:i?new D.FreeList(i):null,vertexBuffers:{},indexBuffer:i?new Uint32Array(i):null},e[o])this._freeListsAndStorage[o].vertexBuffers[n]={data:i?T.allocateTypedArrayBuffer(i,e[o][n]):null,stride:e[o][n]}}return B.fromTileData=function(e,t){var r=function(e){var t=e.getStrides(),r={};for(var i in t)r[M[i]]=t[i];return r}(e),i=[0,0,0,0,0],o=[0,0,0,0,0],n=[];e.tileDisplayData.displayObjectRegistry.forEach(function(e){n.push(e)});for(var s=0,a=n;s<a.length;s++)for(var d=0,u=a[s].displayRecords;d<u.length;d++){var f=u[d];i[f.geometryType]=Math.max(i[f.geometryType],f.vertexFrom+f.vertexCount),o[f.geometryType]=Math.max(o[f.geometryType],f.indexFrom+f.indexCount)}for(var v=new B(r,e.tileDisplayData.displayList,t,null),x=0;x<e.tileBufferData.geometries.length;++x){var l=i[x],F=o[x],c=e.tileBufferData.geometries[x],m=M[x],h=v._storageFor(m),y=e.tileBufferData.geometries[x].indexBuffer;h.indexBuffer=y,h.idxFreeList=new D.FreeList(y.length),h.idxFreeList.allocate(F);var p=void 0;for(var _ in c.vertexBuffer){var g=e.tileBufferData.geometries[x].vertexBuffer[_];h.vertexBuffers[_].data=g.data,h.vertexBuffers[_].stride=g.stride;var C=T.strideToPackingFactor(g.stride),L=g.data.length*C/g.stride;p||(p=L)}h.vtxFreeList=new D.FreeList(p),h.vtxFreeList.allocate(l)}return v},B.prototype.delete=function(e){var t=M[e.geometryType];this._freeVertices(t,e.vertexFrom,e.vertexCount),this._freeIndices(t,e.indexFrom,e.indexCount),this._displayList.removeFromList(e),e.vertexFrom=void 0,e.indexFrom=void 0},B.prototype.setMeshData=function(e,t,r,i,o){var n=M[e.geometryType];e.meshData=null;var s=void 0,a=void 0;void 0===e.vertexFrom?(a=t.vertexCount,s=this._allocateVertices(n,a)):t.vertexCount>e.vertexCount?(this._freeVertices(n,e.vertexFrom,e.vertexCount),a=t.vertexCount,s=this._allocateVertices(n,a)):a=t.vertexCount===e.vertexCount?(s=e.vertexFrom,e.vertexCount):(this._freeVertices(n,e.vertexFrom+t.vertexCount,e.vertexCount-t.vertexCount),s=e.vertexFrom,t.vertexCount);var d=!0,u=void 0,f=void 0,v=void 0;if(void 0===e.indexFrom?(u=o,v=t.indexCount,f=this._allocateIndices(n,v)):t.indexCount>e.indexCount?(u=this._displayList.removeFromList(e),this._freeIndices(n,e.indexFrom,e.indexCount),v=t.indexCount,f=this._allocateIndices(n,v)):v=t.indexCount===e.indexCount?(d=!1,f=e.indexFrom,e.indexCount):(u=this._displayList.removeFromList(e),this._freeIndices(n,e.indexFrom+t.indexCount,e.indexCount-t.indexCount),f=e.indexFrom,t.indexCount),-1===s||-1===f)return-1!==s&&this._freeVertices(n,s,a),-1!==f&&this._freeIndices(n,f,v),e.setMeshDataFromBuffers(t,r,i),e.vertexFrom=void 0,e.vertexCount=0,e.indexFrom=void 0,e.indexCount=0,!1;var x=this._storageFor(n);if(T.copyMeshData(s,f,x.vertexBuffers,x.indexBuffer,t,r,i),e.vertexFrom=s,e.indexFrom=f,e.vertexCount=t.vertexCount,e.indexCount=t.indexCount,this._dirtyMap)for(var l in this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount),r)this._dirtyMap.markDirtyVertices(e.geometryType,l,e.vertexFrom,e.vertexCount);return d&&this._displayList.addToList(e,u),!0},B.prototype._allocateVertices=function(e,t){var r=this._storageFor(e),i=r.vtxFreeList.allocate(t);return-1===i?-1:.5<r.vtxFreeList.fragmentation?-1:i},B.prototype._freeVertices=function(e,t,r){var i=this._storageFor(e);if(i.vtxFreeList.free(t,r),v("esri-feature-tiles-debug"))for(var o in i.vertexBuffers)for(var n=i.vertexBuffers[o].data,s=this._stridesFor(e,o),a=T.strideToPackingFactor(s),d=t*s/a,u=r*s/a,f=d;f<d+u;++f)n[f]=0},B.prototype._freeIndices=function(e,t,r){var i=this._storageFor(e);if(i.idxFreeList.free(t,r),v("esri-feature-tiles-debug"))for(var o=i.indexBuffer,n=t;n<t+r;++n)o[n]=0},B.prototype._allocateIndices=function(e,t){var r=this._storageFor(e),i=r.idxFreeList.allocate(t);return-1===i?-1:.5<r.idxFreeList.fragmentation?-1:i},B.prototype._storageFor=function(e){return this._freeListsAndStorage[e]},B.prototype._stridesFor=function(e,t){return this._strides[e][t]},B}();t.default=r});