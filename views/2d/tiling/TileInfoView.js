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

define(["require","exports","../../../geometry/support/spatialReferenceUtils","./LODInfo","./TileCoverage","./TileKey","./TileSpan"],function(e,t,o,r,i,n,l){var s=new n("0/0/0/0"),a=function(){function e(e,t,o,r,i,n,l,s){this.x=e,this.ymin=t,this.ymax=o,this.invM=r,this.leftAdjust=i,this.rightAdjust=n,this.leftBound=l,this.rightBound=s}return e.create=function(t,o){var r;t[1]>o[1]&&(r=[o,t],t=r[0],o=r[1]);var i=t[0],n=t[1],l=o[0],s=o[1],a=l-i,f=s-n,u=0!==f?a/f:0,h=(Math.ceil(n)-n)*u,c=(Math.floor(n)-n)*u;return new e(i,Math.floor(n),Math.ceil(s),u,a<0?h:c,a<0?c:h,a<0?l:i,a<0?i:l)},e.prototype.incrRow=function(){this.x+=this.invM},e.prototype.getLeftCol=function(){return Math.max(this.x+this.leftAdjust,this.leftBound)},e.prototype.getRightCol=function(){return Math.min(this.x+this.rightAdjust,this.rightBound)},e}(),f=[[0,0],[0,0],[0,0],[0,0]];return function(){function e(e,t){var o=this;this.tileInfo=e,this.fullExtent=t,this.scales=[],this._lodInfos=null,this._infoByScale={},this._infoByLevel={};var i=e.lods.slice();i.sort(function(e,t){return t.scale-e.scale});var n=this._lodInfos=i.map(function(o){return r.create(e,o,t)});i.forEach(function(e,t){o._infoByLevel[e.level]=n[t],o._infoByScale[e.scale]=n[t],o.scales[t]=e.scale},this),this._wrap=e.isWrappable}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this.tileInfo.spatialReference},enumerable:!0,configurable:!0}),e.prototype.getLODInfoAt=function(e){return this._infoByLevel["number"==typeof e?e:e.level]},e.prototype.getTileBounds=function(e,t,o){void 0===o&&(o=!1),s.set(t);var r=this._infoByLevel[s.level];return r?r.getTileBounds(e,s,o):e},e.prototype.getTileCoords=function(e,t,o){void 0===o&&(o=!1),s.set(t);var r=this._infoByLevel[s.level];return r?r.getTileCoords(e,s,o):e},e.prototype.getTileCoverage=function(e,t,o){void 0===t&&(t=192),void 0===o&&(o="closest");var r,n,s,u="closest"===o?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),h=i.pool.acquire(u),c=this._wrap,v=1/0,p=-1/0,y=h.spans;f[0][0]=f[0][1]=f[1][1]=f[3][0]=-t,f[1][0]=f[2][0]=e.size[0]+t,f[2][1]=f[3][1]=e.size[1]+t;for(var g=0,d=f;g<d.length;g++){var m=d[g];e.toMap(m,m),m[0]=u.getColumnForX(m[0]),m[1]=u.getRowForY(m[1])}for(var _=[],B=3,w=0;w<4;w++)if(f[w][1]!==f[B][1]){var M=a.create(f[w],f[B]);v=Math.min(M.ymin,v),p=Math.max(M.ymax,p),void 0===_[M.ymin]&&(_[M.ymin]=[]),_[M.ymin].push(M),B=w}else B=w;if(null==v||null==p||p-v>100)return null;var S=[];for(r=v;r<p;){null!=_[r]&&(S=S.concat(_[r])),n=1/0,s=-1/0;for(var w=S.length-1;w>=0;w--){var M=S[w];n=Math.min(n,M.getLeftCol()),s=Math.max(s,M.getRightCol())}if(n=Math.floor(n),s=Math.floor(s),r>=u.first[1]&&r<=u.last[1])if(c)if(u.size[0]<u.worldSize[0])for(var C=Math.floor(s/u.worldSize[0]),w=Math.floor(n/u.worldSize[0]);w<=C;w++)y.push(new l(r,Math.max(u.getFirstColumnForWorld(w),n),Math.min(u.getLastColumnForWorld(w),s)));else y.push(new l(r,n,s));else n>u.last[0]||s<u.first[0]||(n=Math.max(n,u.first[0]),s=Math.min(s,u.last[0]),y.push(new l(r,n,s)));r+=1;for(var w=S.length-1;w>=0;w--){var M=S[w];M.ymax>=r?M.incrRow():S.splice(w,1)}}return h},e.prototype.getTileParentId=function(e){s.set(e);var t=this._infoByLevel[s.level],o=this._lodInfos.indexOf(t)-1;return o<0?null:(this._getTileIdAtLOD(s,this._lodInfos[o],s),s.id)},e.prototype.getTileResolution=function(e){var t=this._infoByLevel["object"==typeof e?e.level:e];return t?t.resolution:-1},e.prototype.getTileScale=function(e){var t=this._infoByLevel[e.level];return t?t.scale:-1},e.prototype.intersects=function(e,t){s.set(t);var o=this._infoByLevel[s.level],r=e.lodInfo;if(r.resolution>o.resolution){this._getTileIdAtLOD(s,r,s);for(var i=r.denormalizeCol(s.col,s.world),n=0,l=e.spans;n<l.length;n++){var a=l[n];if(a.row===s.row&&a.colFrom<=i&&a.colTo>=i)return!0}}if(r.resolution<o.resolution){var f=e.spans.reduce(function(e,t){return e[0]=Math.min(e[0],t.row),e[1]=Math.max(e[1],t.row),e[2]=Math.min(e[2],t.colFrom),e[3]=Math.max(e[3],t.colTo),e},[1/0,-1/0,1/0,-1/0]),u=f[0],h=f[1],c=f[2],v=f[3],p=o.denormalizeCol(s.col,s.world),y=r.getColumnForX(o.getXForColumn(p)),g=r.getRowForY(o.getYForRow(s.row)),d=r.getColumnForX(o.getXForColumn(p+1))-1,m=r.getRowForY(o.getYForRow(s.row+1))-1;return!(y>v||d<c||g>h||m<u)}var _=r.denormalizeCol(s.col,s.world);return e.spans.some(function(e){return e.row===s.row&&e.colFrom<=_&&e.colTo>=_})},e.prototype.normalizeBounds=function(e,t,r){if(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],this._wrap){var i=o.getInfo(this.tileInfo.spatialReference),n=-r*(i.valid[1]-i.valid[0]);e[0]+=n,e[2]+=n}return e},e.prototype.getSmallestInfoForScale=function(e){var t=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>t[0])return this._infoByScale[t[0]];for(var o=1;o<t.length-1;o++)if(e>t[o])return this._infoByScale[t[o-1]];return this._infoByScale[t[t.length-1]]},e.prototype.getClosestInfoForScale=function(e){var t=this.scales;return this._infoByScale[e]?this._infoByScale[e]:(e=t.reduce(function(t,o,r,i){return Math.abs(o-e)<Math.abs(t-e)?o:t},t[0]),this._infoByScale[e])},e.prototype.scaleToLevel=function(e){var t=this.scales;if(this._infoByScale[e])return this._infoByScale[e].level;for(var o=t.length-1;o>=0;o--)if(e<t[o]){if(o===t.length-1)return this._infoByScale[t[t.length-1]].level;var r=this._infoByScale[t[o]].level;return r+(t[o]-e)/(t[o]-t[o+1])}return this._infoByScale[t[0]].level},e.prototype.scaleToZoom=function(e){return this.tileInfo.scaleToZoom(e)},e.prototype._getTileIdAtLOD=function(e,t,o){var r=this._infoByLevel[o.level];return e.set(o),t.resolution<r.resolution?null:t.resolution===r.resolution?e:(e.level=t.level,e.col=Math.floor(o.col*r.resolution/t.resolution+.01),e.row=Math.floor(o.row*r.resolution/t.resolution+.01),e)},e}()});