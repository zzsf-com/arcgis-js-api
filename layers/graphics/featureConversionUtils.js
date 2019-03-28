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

define(["require","exports","../../core/Error","../../core/Logger","../../geometry/support/jsonUtils","./OptimizedFeature","./OptimizedFeatureSet","./OptimizedGeometry","./utils"],function(e,r,t,n,o,s,a,i,u){function l(e,r){var t=e.scale,n=e.translate;return Math.round((r-n[0])/t[0])}function h(e,r){var t=e.scale,n=e.translate;return Math.round((n[1]-r)/t[1])}function c(e,r){var t=e.scale,n=e.translate;return r*t[0]+n[0]}function g(e,r){var t=e.scale;return e.translate[1]-r*t[1]}function d(e,r,t){return e?r?t?M(e):v(e):t?p(e):f(e):null}function f(e){var r=e.coords;return{x:r[0],y:r[1]}}function m(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e}function v(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2]}}function y(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.z,e}function p(e){var r=e.coords;return{x:r[0],y:r[1],m:r[2]}}function I(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.m,e}function M(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2],m:r[3]}}function b(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.z,e.coords[3]=r.m,e}function F(e,r,t,n){var o=f;t&&n?o=M:t?o=v:n&&(o=p);for(var s=0,a=r;s<a.length;s++){var i=a[s],u=i.geometry,l=i.attributes,h=u?o(u):null;e.push({attributes:l,geometry:h})}return e}function N(e,r){return e&&r?b:e?y:r?I:m}function T(e,r,t,n,o){for(var a=N(t,n),u=0,l=r;u<l.length;u++){var h=l[u],c=h.geometry,g=h.attributes,d=void 0;c&&(d=a(new i.default,c)),e.push(new s.default(d,g,null,g[o]))}return e}function G(e,r,t){return void 0===t&&(t=N(null!=r.z,null!=r.m)),t(e,r)}function w(e,r,t,n){for(var o=0,s=r;o<s.length;o++){var a=s[o],i=a.geometry,u=a.attributes,l=void 0;i&&(l=z(i,t,n)),e.push({attributes:u,geometry:l})}return e}function z(e,r,t){if(!e)return null;for(var n=u.getStride(r,t),o=[],s=0;s<e.coords.length;s+=n){for(var a=[],i=0;i<n;i++)a.push(e.coords[s+i]);o.push(a)}return r?t?{points:o,hasZ:r,hasM:t}:{points:o,hasZ:r}:t?{points:o,hasM:t}:{points:o}}function P(e,r,t,n,o){for(var a=u.getStride(t,n),l=0,h=r;l<h.length;l++){var c=h[l],g=c.geometry,d=c.attributes,f=void 0;g&&(f=S(new i.default,g,a)),e.push(new s.default(f,d,null,d[o]))}return e}function S(e,r,t){void 0===t&&(t=u.getStride(r.hasZ,r.hasM)),e.lengths[0]=r.points.length;for(var n=e.coords,o=0,s=0,a=r.points;s<a.length;s++)for(var i=a[s],l=0;l<t;l++)n[o++]=i[l];return e}function x(e,r,t,n){for(var o=0,s=r;o<s.length;o++){var a=s[o],i=a.geometry,u=a.attributes,l=void 0;i&&(l=O(i,t,n)),e.push({attributes:u,geometry:l})}return e}function O(e,r,t){if(!e)return null;for(var n=u.getStride(r,t),o=e.coords,s=e.lengths,a=[],i=0,l=0,h=s;l<h.length;l++){for(var c=h[l],g=[],d=0;d<c;d++){for(var f=[],m=0;m<n;m++)f.push(o[i++]);g.push(f)}a.push(g)}return r?t?{paths:a,hasZ:r,hasM:t}:{paths:a,hasZ:r}:t?{paths:a,hasM:t}:{paths:a}}function Z(e,r,t,n,o){for(var a=u.getStride(t,n),l=0,h=r;l<h.length;l++){var c=h[l],g=c.geometry,d=c.attributes,f=void 0;g&&(f=E(new i.default,g,a)),e.push(new s.default(f,d,null,d[o]))}return e}function E(e,r,t){void 0===t&&(t=u.getStride(r.hasZ,r.hasM));for(var n=e.lengths,o=e.coords,s=0,a=0,i=r.paths;a<i.length;a++){for(var l=i[a],h=0,c=l;h<c.length;h++)for(var g=c[h],d=0;d<t;d++)o[s++]=g[d];n.push(l.length)}return e}function j(e,r,t,n){for(var o=0,s=r;o<s.length;o++){var a=s[o],i=a.geometry,u=a.attributes,l=a.centroid,h=void 0;if(i&&(h=Y(i,t,n)),l){var c=f(l);e.push({attributes:u,centroid:c,geometry:h})}else e.push({attributes:u,geometry:h})}return e}function Y(e,r,t){if(!e)return null;for(var n=u.getStride(r,t),o=e.coords,s=e.lengths,a=[],i=0,l=0,h=s;l<h.length;l++){for(var c=h[l],g=[],d=0;d<c;d++){for(var f=[],m=0;m<n;m++)f.push(o[i++]);g.push(f)}a.push(g)}return r?t?{rings:a,hasZ:r,hasM:t}:{rings:a,hasZ:r}:t?{rings:a,hasM:t}:{rings:a}}function _(e,r,t,n,o){for(var a=0,u=r;a<u.length;a++){var l=u[a],h=l.geometry,c=l.centroid,g=l.attributes,d=void 0;h&&(d=k(new i.default,h,t,n)),c?e.push(new s.default(d,g,m(new i.default,c),g[o])):e.push(new s.default(d,g,null,g[o]))}return e}function k(e,r,t,n){void 0===t&&(t=r.hasZ),void 0===n&&(n=r.hasM);var o=u.getStride(t,n),s=e.lengths,a=e.coords,i=0;s.length=a.length=0;for(var l=0,h=r.rings;l<h.length;l++){for(var c=h[l],g=0,d=c;g<d.length;g++)for(var f=d[g],m=0;m<o;m++)a[i++]=f[m];s.push(c.length)}return e}function V(e,r,t,n,o){ie[0]=e;var s=q(ue,ie,r,t,n,o)[0];return ie.length=ue.length=0,s}function q(e,r,n,o,s,a){if(e.length=0,!n)return void(e.length=0);switch(n){case"esriGeometryPoint":return T(e,r,o,s,a);case"esriGeometryMultipoint":return P(e,r,o,s,a);case"esriGeometryPolyline":return Z(e,r,o,s,a);case"esriGeometryPolygon":return _(e,r,o,s,a);default:te.error("convertToFeatureSet:unknown-geometry",new t("Unable to parse unknown geometry type '"+n+"'")),e.length=0}return e}function L(e,r,t,n){ue[0]=e,A(ie,ue,r,t,n);var o=ie[0];return ie.length=ue.length=0,o}function R(e){if(!e)return null;var r=new i.default;if(o.isPoint(e)){return N(null!=e.z,null!=e.m)(r,e)}return o.isPolygon(e)?k(r,e):o.isPolyline(e)?E(r,e):o.isMultipoint(e)?S(r,e):void te.error("convertFromGeometry:unknown-geometry",new t("Unable to parse unknown geometry type '"+e+"'"))}function U(e,r,n,o){var s=e&&("coords"in e?e:e.geometry);if(!s)return null;switch(r){case"esriGeometryPoint":var a=f;return n&&o?a=M:n?a=v:o&&(a=p),a(s);case"esriGeometryMultipoint":return z(s,n,o);case"esriGeometryPolyline":return O(s,n,o);case"esriGeometryPolygon":return Y(s,n,o);default:te.error("convertToGeometry:unknown-geometry",new t("Unable to parse unknown geometry type '"+r+"'"))}}function A(e,r,n,o,s){switch(e.length=0,n){case"esriGeometryPoint":return F(e,r,o,s);case"esriGeometryMultipoint":return w(e,r,o,s);case"esriGeometryPolyline":return x(e,r,o,s);case"esriGeometryPolygon":return j(e,r,o,s);default:te.error("convertToFeatureSet:unknown-geometry",new t("Unable to parse unknown geometry type '"+n+"'"))}return e}function B(e){var r=e.objectIdFieldName,t=e.spatialReference,n=e.transform,o=e.fields,s=e.hasM,a=e.hasZ,i=e.features,u=e.geometryType,l=e.exceededTransferLimit,h=A([],i,u,a,s),c={features:h,fields:o,geometryType:u,objectIdFieldName:r,spatialReference:t};return n&&(c.transform=n),l&&(c.exceededTransferLimit=l),s&&(c.hasM=s),a&&(c.hasZ=a),c}function X(e,r){var n=new a.default,o=e.hasM,s=e.hasZ,i=e.features,u=e.objectIdFieldName,l=e.spatialReference,h=e.geometryType,c=e.exceededTransferLimit,g=e.transform;return n.fields=e.fields,n.geometryType=h,n.objectIdFieldName=u||r,n.spatialReference=l,n.objectIdFieldName?(i&&q(n.features,i,h,s,o,n.objectIdFieldName),c&&(n.exceededTransferLimit=c),o&&(n.hasM=o),s&&(n.hasZ=s),g&&(n.transform=g),n):(te.error(new t("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function C(e){var r=e.transform,t=e.features,n=e.hasM,o=e.hasZ;if(!r)return e;for(var s=0,a=t;s<a.length;s++){var i=a[s];i.geometry&&re(i.geometry,i.geometry,n,o,r),i.centroid&&re(i.centroid,i.centroid,n,o,r)}return e.transform=null,e}function Q(e,r){var t=r.geometryType,n=r.features,o=r.hasM,a=r.hasZ;if(!e)return r;for(var u=0;u<n.length;u++){var l=n[u],h=new s.default(new i.default,l.attributes);D(h.geometry,l.geometry,o,a,t,e),l.centroid&&(h.centroid=new i.default,D(h.centroid,l.centroid,o,a,"esriGeometryPoint",e)),n[u]=h}return r.transform=e,r}function D(e,r,t,n,o,s){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!r||!r.coords.length)return null;var a=ne[o],i=r.coords,c=r.lengths,g=u.getStride(t,n),d=t?n?ae:se:n?se:oe;if(!c.length)return d(e.coords,i,0,0,l(s,i[0]),h(s,i[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;for(var f,m,v,y,p=0,I=0,M=I,b=0,F=c;b<F.length;b++){var N=F[b];if(!(N<a)){var T=0;I=M,v=f=l(s,i[p]),y=m=h(s,i[p+1]),d(e.coords,i,I,p,v,y),T++,p+=g,I+=g;for(var G=1;G<N;G++,p+=g)v=l(s,i[p]),y=h(s,i[p+1]),v===f&&y===m||(d(e.coords,i,I,p,v-f,y-m),I+=g,T++,f=v,m=y);T>=a&&(e.lengths.push(T),M=I)}}return e.coords.length=M,e.coords.length?e:null}function H(e,r,t,n,o,s){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!r||!r.coords.length)return null;var a=ne[o],i=r.coords,c=r.lengths,g=u.getStride(t,n),d=t?n?ae:se:n?se:oe;if(!c.length)return d(e.coords,i,0,0,l(s,i[0]),h(s,i[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;for(var f,m,v,y,p=0,I=0,M=I,b=0,F=c;b<F.length;b++){var N=F[b];if(!(N<a)){var T=0;I=M,v=f=l(s,i[p]),y=m=h(s,i[p+1]),d(e.coords,i,I,p,v,y),T++,p+=g;for(var G=!1,w=0,z=0,P=1;P<N;P++,p+=g)if(v=l(s,i[p]),y=h(s,i[p+1]),v!==f||y!==m){var S=v-f,x=y-m;G&&(0===w&&0===S||0===z&&0===x)?(w+=S,z+=x,d(e.coords,i,I,p,w,z)):(G=!0,w=S,z=x,I+=g,T++,d(e.coords,i,I,p,w,z)),f=v,m=y}G&&(I+=g,d(e.coords,i,I,p,w,z)),T>=a&&(e.lengths.push(T),M=I)}}return e.coords.length!==M&&(e.coords.length=M),e.coords.length?e:null}function J(e,r,t,n,o,s){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!r||!r.coords.length)return null;var a=ne[o],i=r.coords,l=r.lengths,h=u.getStride(t,n),c=t?n?ae:se:n?se:oe;if(!l.length)return c(e.coords,i,0,0,i[0],i[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=h,e;for(var g=0,d=0,f=l;d<f.length;d++){var m=f[d];if(m<a)g+=m*h;else{var v=e.coords.length/h;W(e.coords,i,h,s,c,g,g+m*h);var y=e.coords.length/h-v;y>=a?e.lengths.push(y):e.coords.length=v*h,g+=m*h}}return e.coords.length?e:null}function K(e,r,t,n){var o=e[r],s=e[r+1],a=e[t],i=e[t+1],u=e[n],l=e[n+1];if(a===u)return Math.abs(o-a);var h=(l-i)/(u-a),c=i-h*a;return Math.abs(h*o-s+c)/Math.sqrt(h*h+1)}function W(e,r,t,n,o,s,a){for(var i,u=s,l=a-t,h=0,c=0,g=s+t;g<a-t;g+=t)(i=K(r,g,u,l))>h&&(c=g,h=i);h>n?(W(e,r,t,n,o,s,c+t),W(e,r,t,n,o,c,a)):(o(e,r,e.length,u,r[u],r[u+1]),o(e,r,e.length,l,r[l],r[l+1]))}function $(e,r,t,n){var o=u.getStride(t,n),s=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&r.coords)for(var h=r.coords,c=0;c<h.length;c+=o){var g=h[c],d=h[c+1];s=Math.min(s,g),i=Math.max(i,g),a=Math.min(a,d),l=Math.max(l,d)}return e[0]=s,e[1]=a,e[2]=i,e[3]=l,e}function ee(e,r,t,n){for(var o=u.getStride(t,n),s=r.lengths,a=r.coords,i=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY,g=0,d=0,f=s;d<f.length;d++){var m=f[d],v=a[g],y=a[g+1];i=Math.min(v,i),l=Math.min(y,l),h=Math.max(v,h),c=Math.max(y,c),g+=o;for(var p=1;p<m;p++,g+=o){var I=a[g],M=a[g+1];v+=I,y+=M,I<0&&(i=Math.min(i,v)),I>0&&(h=Math.max(h,v)),M<0?l=Math.min(l,y):M>0&&(c=Math.max(c,y))}}return e[0]=i,e[1]=l,e[2]=h,e[3]=c,e}function re(e,r,t,n,o){var s=r.coords,a=r.lengths,i=t?n?ae:se:n?se:oe,l=u.getStride(t,n);if(!s.length)return e!==r&&(e.lengths.length=0,e.coords.length=0),e;if(!a.length)return i(e.coords,s,0,0,c(o,s[0]),g(o,s[1])),e!==r&&(e.lengths.length=0,e.coords.length=l),e;for(var h=o.scale,d=h[0],f=h[1],m=0,v=0;v<a.length;v++){var y=a[v];e.lengths[v]=y;var p=c(o,s[m]),I=g(o,s[m+1]);i(e.coords,s,m,m,p,I),m+=l;for(var M=1;M<y;M++,m+=l)p+=s[m]*d,I-=s[m+1]*f,i(e.coords,s,m,m,p,I)}return e!==r&&(e.lengths.length=a.length,e.coords.length=s.length),e}Object.defineProperty(r,"__esModule",{value:!0});var te=n.getLogger("esri.tasks.support.optimizedFeatureSet"),ne={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},oe=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s},se=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s,e[t+2]=r[n+2]},ae=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s,e[t+2]=r[n+2],e[t+3]=r[n+3]};r.quantizeX=l,r.quantizeY=h,r.hydrateX=c,r.hydrateY=g,r.convertToPoint=d,r.convertFromPoint=G,r.convertToMultipoint=z,r.convertFromMultipoint=S,r.convertToPolyline=O,r.convertToPolygon=Y,r.convertFromPolygon=k;var ie=[],ue=[];r.convertFromFeature=V,r.convertFromFeatures=q,r.convertToFeature=L,r.convertFromGeometry=R,r.convertToGeometry=U,r.convertToFeatures=A,r.convertToFeatureSet=B,r.convertFromFeatureSet=X,r.hydrateOptimizedFeatureSet=C,r.quantizeOptimizedFeatureSet=Q,r.quantizeOptimizedGeometry=D,r.quantizeOptimizedGeometryRemoveCollinear=H,r.generalizeOptimizedGeometry=J,r.getBoundsOptimizedGeometry=$,r.getQuantizedBoundsOptimizedGeometry=ee,r.hydrateOptimizedGeometry=re});