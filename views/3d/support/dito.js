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

define(["require","exports"],function(r,t){function i(r,t){var i=r.data,o=r.strideIdx,e=i.length/o;if(!(e<=0)){var s=new ir(r);x(M,s.minProj,s.maxProj),I(M,M,.5),d(F,s.maxProj,s.minProj);var f=j(F),h=new nr;h.quality=f,e<14&&(r={data:new Float64Array(s.buffer,112,42),size:3,offsetIdx:0,strideIdx:3});var u=[0,0,0],b=[0,0,0],l=[0,0,0],N=[0,0,0],y=[0,0,0],V=[0,0,0],q=[0,0,0];switch(n(s,r,q,u,b,l,N,y,V,h,t)){case 1:return void m(M,F,t);case 2:return void v(r,N,t)}a(r,q,u,b,l,N,y,V,h,t),c(r,h.b0,h.b1,h.b2,U,W);var w=[0,0,0];d(w,W,U),h.quality=j(w),h.quality<f?P(h.b0,h.b1,h.b2,U,W,w,t):m(M,F,t)}}function n(r,t,i,n,a,s,h,u,m,v,c){return o(r,n,a),V(n,a)<A?1:(d(h,n,a),N(h,h),e(t,n,h,s)<A?2:(d(u,a,s),N(u,u),d(m,s,n),N(m,m),l(i,u,h),N(i,i),f(t,i,h,u,m,v),0))}function a(r,t,i,n,a,o,e,h,u,m){s(r,t,i,n,a,T,E),void 0!==T[0]&&(d(_,T,i),N(_,_),d(g,T,n),N(g,g),d(Y,T,a),N(Y,Y),l(O,g,o),N(O,O),l(S,Y,e),N(S,S),l(p,_,h),N(p,p),f(r,O,o,g,_,u),f(r,S,e,Y,g,u),f(r,p,h,_,Y,u)),void 0!==E[0]&&(d(_,E,i),N(_,_),d(g,E,n),N(g,g),d(Y,E,a),N(Y,Y),l(O,g,o),N(O,O),l(S,Y,e),N(S,S),l(p,_,h),N(p,p),f(r,O,o,g,_,u),f(r,S,e,Y,g,u),f(r,p,h,_,Y,u))}function o(r,t,i){for(var n=V(r.maxVert[0],r.minVert[0]),a=0,o=1;o<7;++o){var e=V(r.maxVert[o],r.minVert[o]);e>n&&(n=e,a=o)}b(t,r.minVert[a]),b(i,r.maxVert[a])}function e(r,t,i,n){for(var a=r.data,o=r.offsetIdx,e=r.strideIdx,s=Number.NEGATIVE_INFINITY,f=0,h=o;h<a.length;h+=e){z[0]=a[h]-t[0],z[1]=a[h+1]-t[1],z[2]=a[h+2]-t[2];var u=i[0]*z[0]+i[1]*z[1]+i[2]*z[2],m=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],v=z[0]*z[0]+z[1]*z[1]+z[2]*z[2],c=v-u*u/m;c>s&&(s=c,f=h)}return b(n,a,f),s}function s(r,t,i,n,a,o,e){u(r,t,B,e,o);var s=q(i,t);B[1]-A<=s&&(o[0]=void 0),B[0]+A>=s&&(e[0]=void 0)}function f(r,t,i,n,a,o){if(!(y(t)<A)){l(G,i,t),l(k,n,t),l(C,a,t),h(r,t,B),H[1]=B[0],D[1]=B[1],J[1]=D[1]-H[1];for(var e=[i,n,a],s=[G,k,C],f=0;f<3;++f){h(r,e[f],B),H[0]=B[0],D[0]=B[1],h(r,s[f],B),H[2]=B[0],D[2]=B[1],J[0]=D[0]-H[0],J[2]=D[2]-H[2];var u=j(J);u<o.quality&&(b(o.b0,e[f]),b(o.b1,t),b(o.b2,s[f]),o.quality=u)}}}function h(r,t,i){var n=r.data,a=r.offsetIdx,o=r.strideIdx;i[0]=Number.POSITIVE_INFINITY,i[1]=Number.NEGATIVE_INFINITY;for(var e=a;e<n.length;e+=o){var s=n[e]*t[0]+n[e+1]*t[1]+n[e+2]*t[2];i[0]=Math.min(i[0],s),i[1]=Math.max(i[1],s)}}function u(r,t,i,n,a){var o=r.data,e=r.offsetIdx,s=r.strideIdx;b(n,o,e),b(a,n),i[0]=q(K,t),i[1]=i[0];for(var f=e+s;f<o.length;f+=s){var h=o[f]*t[0]+o[f+1]*t[1]+o[f+2]*t[2];h<i[0]&&(i[0]=h,b(n,o,f)),h>i[1]&&(i[1]=h,b(a,o,f))}}function m(r,t,i){b(i.center,r),I(i.halfSize,t,.5),i.quaternion[0]=0,i.quaternion[1]=0,i.quaternion[2]=0,i.quaternion[3]=1}function v(r,t,i){b(L,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?L[0]=0:Math.abs(t[1])>Math.abs(t[2])?L[1]=0:L[2]=0,y(L)<A&&(L[0]=L[1]=L[2]=1),l(Q,t,L),N(Q,Q),l(R,t,Q),N(R,R),c(r,t,Q,R,U,W),d(X,W,U),P(t,Q,R,U,W,X,i)}function c(r,t,i,n,a,o){h(r,t,B),a[0]=B[0],o[0]=B[1],h(r,i,B),a[1]=B[0],o[1]=B[1],h(r,n,B),a[2]=B[0],o[2]=B[1]}function P(r,t,i,n,a,o,e){$[0]=r[0],$[1]=r[1],$[2]=r[2],$[3]=t[0],$[4]=t[1],$[5]=t[2],$[6]=i[0],$[7]=i[1],$[8]=i[2],w(e.quaternion,$),x(rr,n,a),I(rr,rr,.5),I(e.center,r,rr[0]),I(Z,t,rr[1]),x(e.center,e.center,Z),I(Z,i,rr[2]),x(e.center,e.center,Z),I(e.halfSize,o,.5)}function j(r){return r[0]*r[1]+r[0]*r[2]+r[1]*r[2]}function x(r,t,i){r[0]=t[0]+i[0],r[1]=t[1]+i[1],r[2]=t[2]+i[2]}function d(r,t,i){r[0]=t[0]-i[0],r[1]=t[1]-i[1],r[2]=t[2]-i[2]}function I(r,t,i){r[0]=t[0]*i,r[1]=t[1]*i,r[2]=t[2]*i}function b(r,t,i){void 0===i&&(i=0),r[0]=t[i+0],r[1]=t[i+1],r[2]=t[i+2]}function l(r,t,i){var n=t[0],a=t[1],o=t[2],e=i[0],s=i[1],f=i[2];r[0]=a*f-o*s,r[1]=o*e-n*f,r[2]=n*s-a*e}function N(r,t){var i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(i>0){var n=1/Math.sqrt(i);r[0]=t[0]*n,r[1]=t[1]*n,r[2]=t[2]*n}}function y(r){return r[0]*r[0]+r[1]*r[1]+r[2]*r[2]}function V(r,t){var i=t[0]-r[0],n=t[1]-r[1],a=t[2]-r[2];return i*i+n*n+a*a}function q(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function w(r,t){var i=t[0]+t[4]+t[8];if(i>0){var n=Math.sqrt(i+1);r[3]=.5*n,n=.5/n,r[0]=(t[5]-t[7])*n,r[1]=(t[6]-t[2])*n,r[2]=(t[1]-t[3])*n}else{var a=0;t[4]>t[0]&&(a=1),t[8]>t[3*a+a]&&(a=2);var o=(a+1)%3,e=(a+2)%3,n=Math.sqrt(t[3*a+a]-t[3*o+o]-t[3*e+e]+1);r[a]=.5*n,n=.5/n,r[3]=(t[3*o+e]-t[3*e+o])*n,r[o]=(t[3*o+a]+t[3*a+o])*n,r[e]=(t[3*e+a]+t[3*a+e])*n}}Object.defineProperty(t,"__esModule",{value:!0});var A=1e-6,M=[0,0,0],F=[0,0,0];t.computeOBB=i;var T=[0,0,0],E=[0,0,0],_=[0,0,0],g=[0,0,0],Y=[0,0,0],O=[0,0,0],S=[0,0,0],p=[0,0,0],z=[0,0,0],B=[0,0],G=[0,0,0],k=[0,0,0],C=[0,0,0],D=[0,0,0],H=[0,0,0],J=[0,0,0],K=[0,0,0],L=[0,0,0],Q=[0,0,0],R=[0,0,0],U=[0,0,0],W=[0,0,0],X=[0,0,0],Z=[0,0,0],$=[1,0,0,0,1,0,0,0,1],rr=[0,0,0],tr=7,ir=function(){function r(r){this.minVert=new Array(tr),this.maxVert=new Array(tr);var t=64*tr;this.buffer=new ArrayBuffer(t);var i=0;this.minProj=new Float64Array(this.buffer,i,tr),i+=8*tr,this.maxProj=new Float64Array(this.buffer,i,tr),i+=8*tr;for(var n=0;n<tr;++n)this.minVert[n]=new Float64Array(this.buffer,i,3),i+=24;for(var n=0;n<tr;++n)this.maxVert[n]=new Float64Array(this.buffer,i,3),i+=24;for(var n=0;n<tr;++n)this.minProj[n]=Number.POSITIVE_INFINITY,this.maxProj[n]=Number.NEGATIVE_INFINITY;for(var a=new Array(tr),o=new Array(tr),e=r.data,s=r.offsetIdx,f=r.strideIdx,n=s;n<e.length;n+=f){var h=e[n];h<this.minProj[0]&&(this.minProj[0]=h,a[0]=n),h>this.maxProj[0]&&(this.maxProj[0]=h,o[0]=n),h=e[n+1],h<this.minProj[1]&&(this.minProj[1]=h,a[1]=n),h>this.maxProj[1]&&(this.maxProj[1]=h,o[1]=n),h=e[n+2],h<this.minProj[2]&&(this.minProj[2]=h,a[2]=n),h>this.maxProj[2]&&(this.maxProj[2]=h,o[2]=n),h=e[n]+e[n+1]+e[n+2],h<this.minProj[3]&&(this.minProj[3]=h,a[3]=n),h>this.maxProj[3]&&(this.maxProj[3]=h,o[3]=n),h=e[n]+e[n+1]-e[n+2],h<this.minProj[4]&&(this.minProj[4]=h,a[4]=n),h>this.maxProj[4]&&(this.maxProj[4]=h,o[4]=n),h=e[n]-e[n+1]+e[n+2],h<this.minProj[5]&&(this.minProj[5]=h,a[5]=n),h>this.maxProj[5]&&(this.maxProj[5]=h,o[5]=n),h=e[n]-e[n+1]-e[n+2],h<this.minProj[6]&&(this.minProj[6]=h,a[6]=n),h>this.maxProj[6]&&(this.maxProj[6]=h,o[6]=n)}for(var n=0;n<tr;++n){var u=a[n];b(this.minVert[n],e,u),u=o[n],b(this.maxVert[n],e,u)}}return r}(),nr=function(){function r(){this.b0=[1,0,0],this.b1=[0,1,0],this.b2=[0,0,1],this.quality=0}return r}()});