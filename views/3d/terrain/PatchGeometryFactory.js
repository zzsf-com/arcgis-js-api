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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../core/libs/gl-matrix-2/vec4","../../../geometry/support/aaBoundingBox","../support/earthUtils","../support/mathUtils","../support/buffer/BufferPool","../support/buffer/InterleavedLayout","./ElevationData","./TerrainConst","../webgl-engine/lib/Util","../webgl-engine/materials/internal/MaterialUtil"],function(e,r,t,n,a,o,i,u,s,f,c,v,m,l){function g(){S.clear(),V.clear()}function p(e){S.release(e.vertexAttributes),e.vertexAttributes=null,e.indices=null}function I(e,r,t,n,s,f,m,l){var g=f[0],p=f[1],I=f[2],E=f[3],y=.1*i.earthRadius*(E-p),P=e.numVertsPerRow-1,T=e.numVertsPerRow-1,h=e.numVertsPerRow*e.numVertsPerRow,M=2*P+2*T,V=S.acquire(h+M),_=V.position.typedBuffer,D=V.uv0.typedBuffer,C=n.geometryInfo.boundingBox;o.empty(C);for(var L=r[2]-r[0],X=r[3]-r[1],k=I-g,G=t[0],U=t[1],N=t[2],H=0;H<=P;H++){var Y=H/P,q=g+Y*k;b[H]=Math.sin(q),x[H]=Math.cos(q),O[H]=Y,B[H]=r[0]+Y*L}for(var j=m&&!!(1&l),W=m&&!!(2&l),z=0,F=0;F<=T;F++){var J=F/T,K=u.lerp(p,E,J),Q=Math.cos(K),Z=Math.sin(K),$=void 0;m?($=i.halfEarthRadius*Math.log((1+Z)/(1-Z)),J=($-r[1])/X):$=180*K/Math.PI;for(var H=0;H<=P;H++){var Y=O[H],ee=b[H],re=x[H],te=i.earthRadius;e.samplerData&&(te+=c.sample(B[H],$,e.samplerData)||0);var ne=re*Q*te,ae=ee*Q*te,oe=Z*te,ie=ne-G,ue=ae-U,se=oe-N;d(ie,ue,se,C);var fe=v.GEOMETRY_VERTEX_STRIDE*z;_[fe+0]=ie,_[fe+1]=ue,_[fe+2]=se,D[fe+0]=Y,D[fe+1]=J;var ce=w(H,F,P,T);if(ce>-1){var ve=v.GEOMETRY_VERTEX_STRIDE*(h+ce),me=j&&0===F?-1:W&&F===T?1:0,le=0===me?ie:-G,ge=0===me?ue:-U,pe=0===me?se:i.earthRadius*me-N;_[ve+0]=le,_[ve+1]=ge,_[ve+2]=pe,D[ve+0]=0===me?A(Y,J):Y,D[ve+1]=0===me?y:J,0!==me&&d(le,ge,pe,C)}++z}}n.geometryInfo.numVertsPerRow=e.numVertsPerRow,n.geometryInfo.vertexAttributes=V,n.geometryInfo.skirtLength=y,a.vec4.set(n.geometryInfo.uvOffsetAndScale,0,0,1,1),R(n.geometryInfo,e.numVertsPerRow,m?l:0,s)}function E(e,r,t,n,i){var u=r[0],s=r[1],f=r[2]-u,m=r[3]-s,l=e.clippingArea,g=l?Math.max(0,(l[0]-r[0])/f):0,p=l?Math.max(0,(l[1]-r[1])/m):0,I=l?Math.min(1,(l[2]-r[0])/f):1,E=l?Math.min(1,(l[3]-r[1])/m):1,y=I>g?1/(I-g):1,P=E>p?1/(E-p):1,T=-g*y,h=-p*P,M=.1*f,V=e.numVertsPerRow-1,_=e.numVertsPerRow-1,b=e.numVertsPerRow*e.numVertsPerRow,x=2*V+2*_,O=S.acquire(b+x),B=O.position.typedBuffer,D=O.uv0.typedBuffer,C=n.geometryInfo.boundingBox;o.empty(C);for(var L=0,X=0;X<=_;X++){var k=X/_,G=h+k*P,U=s+k*m;l&&(U<l[1]?(U=l[1],G=0):U>l[3]&&(U=l[3],G=1));for(var N=0;N<=V;N++){var H=N/V,Y=T+H*y,q=u+H*f;l&&(q<l[0]?(q=l[0],Y=0):q>l[2]&&(q=l[2],Y=1));var j=e.samplerData?c.sample(q,U,e.samplerData)||0:0,W=q-t[0],z=U-t[1],F=j-t[2];d(W,z,F,C);var J=v.GEOMETRY_VERTEX_STRIDE*L;B[J+0]=W,B[J+1]=z,B[J+2]=F,D[J+0]=Y,D[J+1]=G;var K=w(N,X,V,V);if(K>-1){var Q=v.GEOMETRY_VERTEX_STRIDE*(b+K);B[Q+0]=W,B[Q+1]=z,B[Q+2]=F,D[Q+0]=A(Y,G),D[Q+1]=M}++L}}n.geometryInfo.numVertsPerRow=e.numVertsPerRow,n.geometryInfo.vertexAttributes=O,n.geometryInfo.skirtLength=M,a.vec4.set(n.geometryInfo.uvOffsetAndScale,g,p,I-g,E-p),R(n.geometryInfo,e.numVertsPerRow,0,i)}function R(e,r,t,n){var a=(2&t)>0,o=r+(n?1024:0)+(a?2048:0),i=V.get(o);i||(i=y(r,a,n),V.set(o,i)),e.indices=i.values,e.numSurfaceIndices=i.numSurfaceIndices,e.numSkirtIndices=i.numSkirtIndices,e.numWithoutSkirtIndices=e.numSurfaceIndices+(t?6*(r-1)*(n?2:1):0)}function y(e,r,t){var n=e-1,a=e-1,o=e*e,i=2*n+2*a,u=n*a*2*3,s=6*i,f=6*(2*n+a-1);t&&(u*=2,s*=2,f*=2);for(var c,v,m,l,g=o+i>M?new Uint32Array(u+s):new Uint16Array(u+s),p=0,I=0,E=u,R=0,y=0;y<=a;y++){r&&(R=0===y?f:y===a?-f:0),E+=R;for(var d=0;d<=n;d++){var A=w(d,y,n,a);if(A>-1){var T=P(d,y,n,a);0!==T&&(c=p,v=o+A,m=o+(0===d&&1===y?0:A+1),l=p+T,t?(g[E+0]=c,g[E+1]=v,g[E+2]=v,g[E+3]=m,g[E+4]=m,g[E+5]=c,g[E+6]=m,g[E+7]=l,g[E+8]=l,g[E+9]=c,g[E+10]=c,g[E+11]=m,E+=12):(g[E+0]=c,g[E+1]=v,g[E+2]=m,g[E+3]=m,g[E+4]=l,g[E+5]=c,E+=6))}++p,d<n&&y<a&&(c=y*(n+1)+d,v=c+1,m=v+(n+1),l=m-1,t?(g[I+0]=c,g[I+1]=v,g[I+2]=v,g[I+3]=m,g[I+4]=m,g[I+5]=c,g[I+6]=m,g[I+7]=l,g[I+8]=l,g[I+9]=c,g[I+10]=c,g[I+11]=m,I+=12):(g[I+0]=c,g[I+1]=v,g[I+2]=m,g[I+3]=m,g[I+4]=l,g[I+5]=c,I+=6))}E-=R}return{values:g,numSurfaceIndices:u,numSkirtIndices:s}}function d(e,r,t,n){e<n[0]&&(n[0]=e),e>n[3]&&(n[3]=e),r<n[1]&&(n[1]=r),r>n[4]&&(n[4]=r),t<n[2]&&(n[2]=t),t>n[5]&&(n[5]=t)}function A(e,r){var t=r>e?1:0;return 2+4*t+(1-2*t)*(e+r)}function w(e,r,t,n){return 0===r?e:e===t?t+r:r===n?t+n+(t-e):0===e&&r>0?2*t+n+(n-r):-1}function P(e,r,t,n){return 0===r&&e!==t?1:e===t&&r!==n?t+1:r===n&&0!==e?-1:0===e&&0!==r?-(t+1):0}function T(e,r,n,a,o,i,u,s){for(var f=i.position,c=i.uv0,v=e[0],m=e[1],g=e[2],p=r[0],I=r[1],E=r[2],R=p-v,y=I-m,d=E-g,A=n;A<a;A++){var w=3*A,P=3*A+1,T=3*A+2,h=f.get(o[w],0),S=f.get(o[w],1),M=f.get(o[w],2),V=f.get(o[P],0),b=f.get(o[P],1),x=f.get(o[P],2),O=f.get(o[T],0),B=f.get(o[T],1),L=f.get(o[T],2),X=c.get(o[w],0),k=c.get(o[P],0),G=c.get(o[T],0);X>=2&&(t.vec3.set(D,h,S,M),u(D),h+=D[0],S+=D[1],M+=D[2]),k>=2&&(t.vec3.set(D,V,b,x),u(D),V+=D[0],b+=D[1],x+=D[2]),G>=2&&(t.vec3.set(D,O,B,L),u(D),O+=D[0],B+=D[1],L+=D[2]);var U=V-h,N=b-S,H=x-M,Y=O-h,q=B-S,j=L-M,W=y*j-q*d,z=d*Y-j*R,F=R*q-Y*y,J=U*W+N*z+H*F,K=v-h,Q=m-S,Z=g-M,$=Q*H-N*Z,ee=Z*U-H*K,re=K*N-U*Q;if(J>_){var te=K*W+Q*z+Z*F;if(te<0||te>J)continue;var ne=R*$+y*ee+d*re;if(ne<0||te+ne>J)continue}else{if(!(J<-_))continue;var te=K*W+Q*z+Z*F;if(te>0||te<J)continue;var ne=R*$+y*ee+d*re;if(ne>0||te+ne<J)continue}var ae=(Y*$+q*ee+j*re)/J;if(ae>=0){s(ae,l.computeNormal(U,N,H,Y,q,j,C),A)}}}Object.defineProperty(r,"__esModule",{value:!0});var h=f.newLayout().vec3f(m.VertexAttrConstants.POSITION).vec2f(m.VertexAttrConstants.UV0),S=new s.BufferPool(function(e){return h.createBuffer(e)},function(e){return e.count});r.clearCaches=g,r.releaseGeometry=p;var M=65536;r.createSphericalGlobePatch=I,r.createPlanarGlobePatch=E;var V=new Map,_=Math.pow(2,-52);r.intersectSkirts=T;var b=new Array(v.MAX_PATCH_TESSELATION+1),x=new Array(v.MAX_PATCH_TESSELATION+1),O=new Array(v.MAX_PATCH_TESSELATION+1),B=new Array(v.MAX_PATCH_TESSELATION+1),D=n.vec3f64.create(),C=n.vec3f64.create()});