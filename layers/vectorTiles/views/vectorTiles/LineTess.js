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

define(["require","exports"],function(t,o){function e(t){var o,e={items:new Array,count:0};for(o=0;t>o;++o)e.items.push({v1:{vector:[void 0,void 0],texCoords:[void 0,void 0]},v2:{vector:[void 0,void 0],texCoords:[void 0,void 0]},v3:{vector:[void 0,void 0],texCoords:[void 0,void 0]}});return e}function r(t){var o,e={items:new Array,count:0};for(o=0;t>o;++o)e.items.push(void 0);return e}function s(t){var o,e={items:new Array,count:0};for(o=0;t>o;++o)e.items.push({vector:[void 0,void 0],texCoords:[void 0,void 0]});return e}function v(t){var o,e={items:new Array,count:0};for(o=0;t>o;++o)e.items.push([void 0,void 0]);return e}function c(){var t=s(30),o={};o[_.ENTRY]=r(20),o[_.EXIT]=r(20),o[_.CAP]=r(20);var e={vectors:t,lists:o};return e}function i(t,o){var e;for(e=0;e<o.vectors.count;++e)t.vectors.items[e].vector[0]=o.vectors.items[e].vector[0],t.vectors.items[e].vector[1]=o.vectors.items[e].vector[1],t.vectors.items[e].texCoords[0]=o.vectors.items[e].texCoords[0],t.vectors.items[e].texCoords[1]=o.vectors.items[e].texCoords[1],t.vectors.items[e].base=o.vectors.items[e].base;t.vectors.count=o.vectors.count,t.capCenter=o.capCenter}function n(t,o){return t[0]*o[0]+t[1]*o[1]}function a(t){return Math.sqrt(n(t,t))}function d(t,o){var e=a(o);return t[0]=o[0]/e,t[1]=o[1]/e,t}function u(t,o){return t[0]=-o[1],t[1]=o[0],t}function m(t,o){var e=t[0]*o[1]-t[1]*o[0];return e}function C(t,o){return t[0]=-o[0],t[1]=-o[1],t}function x(t,o,e){return t[0]=o[0]*e,t[1]=o[1]*e,t}function l(t,o,e){return t[0]=o[0]+e[0],t[1]=o[1]+e[1],t}function f(t){return Math.round(t*L)}function T(t,o){var e=n(t,o);return e>.999?0:-.999>e?Math.PI:Math.acos(e)}function E(t,o,e,r,s){if(0===r)return void(t.count=0);var v,c=a(o),i=x(D[0],o,1/c),n=x(D[1],e,1/c),d=T(i,n),u=(s?-1:1)*d/r,m=Math.cos(u),C=Math.sin(u),l=o[0],f=o[1];for(v=0;r-1>v;++v){var E=l,M=f;l=m*E-C*M,f=C*E+m*M,t.items[v][0]=l,t.items[v][1]=f}t.count=r-1}function M(t){var o,e=t.count,r=Math.floor(e/2);for(o=0;r>o;++o){var s=t.items[o];t.items[o]=t.items[e-o-1],t.items[e-o-1]=s}}function A(t,o,e){var r,s,v,c,i=o.vectors,n=o.lists[_.EXIT],a=e.vectors,d=e.lists[_.ENTRY];if(n.count===d.count+1)r=n.items,s=i.items,v=d.items,c=a.items;else if(d.count===n.count+1)r=d.items,s=a.items,v=n.items,c=i.items;else{if(n.count!==d.count)return console.error("Cannot bridge "+n.count+" to "+d.count+"."),void(t.count=0);r=d.items,s=a.items,v=n.items,c=i.items}var u=n.count+d.count-2;t.count=u,j[0]=r,j[1]=v,z[0]=s,z[1]=c;var m;for(m=0;u>m;++m){var C=t.items[m],x=(m+0)%2,l=Math.floor((m+0)/2),f=z[x][j[x][l]];C.v1.vector[0]=f.vector[0],C.v1.vector[1]=f.vector[1],C.v1.texCoords[0]=f.texCoords[0],C.v1.texCoords[1]=f.texCoords[1],C.v1.base=f.base;var T=(m+1)%2,E=Math.floor((m+1)/2),M=z[T][j[T][E]];C.v2.vector[0]=M.vector[0],C.v2.vector[1]=M.vector[1],C.v2.texCoords[0]=M.texCoords[0],C.v2.texCoords[1]=M.texCoords[1],C.v2.base=M.base;var A=(m+2)%2,h=Math.floor((m+2)/2),p=z[A][j[A][h]];C.v3.vector[0]=p.vector[0],C.v3.vector[1]=p.vector[1],C.v3.texCoords[0]=p.texCoords[0],C.v3.texCoords[1]=p.texCoords[1],C.v3.base=p.base}}function h(t,o){if(0===o.lists[_.CAP].count)return void(t.count=0);if(1===o.lists[_.CAP].count)return console.error("A single vector is not enough to define a pie."),void(t.count=0);t.count=o.lists[_.CAP].count-1;var e;for(e=0;e<t.count;++e){var r=t.items[e],s=o.lists[_.CAP].items[e],v=o.vectors.items[s];r.v1.vector[0]=v.vector[0],r.v1.vector[1]=v.vector[1],r.v1.texCoords[0]=v.texCoords[0],r.v1.texCoords[1]=v.texCoords[1],r.v1.base=v.base;var c=o.lists[_.CAP].items[e+1],i=o.vectors.items[c];r.v2.vector[0]=i.vector[0],r.v2.vector[1]=i.vector[1],r.v2.texCoords[0]=i.texCoords[0],r.v2.texCoords[1]=i.texCoords[1],r.v2.base=i.base;var n=o.capCenter,a=o.vectors.items[n];r.v3.vector[0]=a.vector[0],r.v3.vector[1]=a.vector[1],r.v3.texCoords[0]=a.texCoords[0],r.v3.texCoords[1]=a.texCoords[1],r.v3.base=a.base}}function p(t,o,e){P(t,o,e)}function I(t,o,e,r,s,v){void 0===v&&(v=0),P(t,o,e);var c=r===g.START?0:1,i=r===g.START?1:0;t.capCenter=t.vectors.count;var n=t.vectors.items[t.capCenter];n.vector[0]=0,n.vector[1]=0,n.texCoords[0]=w,n.texCoords[1]=w,++t.vectors.count,E(O,t.vectors.items[c].vector,t.vectors.items[i].vector,s,!1);var a=t.vectors.count,d=t.lists[_.CAP];d.items[0]=c;var u,m=t.vectors.items[c].texCoords[1],C=t.vectors.items[i].texCoords[1];for(u=0;u<O.count;++u){var x=v*(1-Math.abs(O.count/2-u)/(O.count/2)),l=m+u/(O.count-1)*(C-m),f=O.items[u],T=t.vectors.items[a+u];T.vector[0]=f[0],T.vector[1]=f[1],T.texCoords[0]=x,T.texCoords[1]=l,d.items[u+1]=a+u}d.items[O.count+1]=i,d.count=O.count+2,t.vectors.count=a+O.count}function R(t,o,e,r){P(t,o,e);var s=r===g.START?0:1,v=r===g.START?1:0,c=D[0],i=D[1],n=D[2],a=D[3],d=D[4],u=t.vectors.items[s].vector;c[0]=F*u[0]-k*u[1],c[1]=k*u[0]+F*u[1],x(a,c,B),i[0]=F*c[0]-k*c[1],i[1]=k*c[0]+F*c[1],n[0]=F*i[0]-k*i[1],n[1]=k*i[0]+F*i[1],x(d,n,B);var m=t.vectors.items[s];m.vector[0]=a[0],m.vector[1]=a[1];var C=t.vectors.items[v];C.vector[0]=d[0],C.vector[1]=d[1]}function P(t,o,e){var r=u(D[0],e),s=r,v=C(D[1],r),c=t.vectors.items[0];c.vector[0]=s[0],c.vector[1]=s[1],c.texCoords[0]=w,c.texCoords[1]=y;var i=t.vectors.items[1];i.vector[0]=v[0],i.vector[1]=v[1],i.texCoords[0]=w,i.texCoords[1]=J,t.vectors.count=2;var n=t.lists[_.ENTRY];n.items[0]=0,n.items[1]=1,n.count=2;var a=t.lists[_.EXIT];a.items[0]=0,a.items[1]=1,a.count=2,t.lists[_.CAP].count=0,t.capCenter=void 0}function b(t,o,e){var r=u(D[0],o),s=u(D[1],e),v=D[2];v[0]=r[0]+s[0],v[1]=r[1]+s[1];var c=d(D[3],v),i=n(c,r);c=x(D[4],c,1/i);var a=C(D[5],c),m=t.vectors.items[0];m.vector[0]=c[0],m.vector[1]=c[1],m.texCoords[0]=w,m.texCoords[1]=y;var l=t.vectors.items[1];l.vector[0]=a[0],l.vector[1]=a[1],l.texCoords[0]=w,l.texCoords[1]=J,t.vectors.count=2;var f=t.lists[_.ENTRY];f.items[0]=0,f.items[1]=1,f.count=2;var T=t.lists[_.EXIT];T.items[0]=0,T.items[1]=1,T.count=2,t.lists[_.CAP].count=0,t.capCenter=void 0}function Y(t,o,e,r){var s=r*r,v=m(o,e),c=v>0?[y,J]:[J,y],i=c[0],a=c[1],f=v>0?C(D[0],u(D[1],o)):u(D[2],o),T=v>0?C(D[3],u(D[4],e)):u(D[5],e),E=D[6];E[0]=f[0]+T[0],E[1]=f[1]+T[1];var A=d(D[7],E),h=C(D[8],A),p=n(A,f),I=m(A,f),R=Math.abs(I/p),P=1+R*R,b=q>P?[R,!1]:[Math.sqrt(q-1),!0],Y=b[0],N=b[1],S=s>P?[R,!1]:[Math.sqrt(s-1),!0],X=S[0],g=S[1];if(g&&N){var G=t.vectors.items[0];l(G.vector,C(D[9],f),x(D[10],C(D[11],o),Y)),G.texCoords[0]=w,G.texCoords[1]=i;var L=t.vectors.items[1];l(L.vector,C(D[12],T),x(D[13],e,Y)),L.texCoords[0]=w,L.texCoords[1]=i;var V=t.vectors.items[2];V.vector[0]=0,V.vector[1]=0,V.texCoords[0]=w,V.texCoords[1]=w;var O=t.vectors.items[3];l(O.vector,f,x(D[14],o,X)),O.texCoords[0]=w,O.texCoords[1]=a;var j=t.vectors.items[4];l(j.vector,T,x(D[15],C(D[16],e),X)),j.texCoords[0]=w,j.texCoords[1]=a,t.vectors.count=5;var z=t.lists[_.ENTRY];z.items[0]=0,z.items[1]=2,z.items[2]=3,z.count=3;var F=t.lists[_.EXIT];F.items[0]=1,F.items[1]=2,F.items[2]=4,F.count=3;var k=t.lists[_.CAP];k.items[0]=3,k.items[1]=4,k.count=2,t.capCenter=2}else if(!g&&N){var G=t.vectors.items[0];l(G.vector,C(D[9],f),x(D[10],C(D[11],o),Y)),G.texCoords[0]=w,G.texCoords[1]=i;var L=t.vectors.items[1];l(L.vector,C(D[12],T),x(D[13],e,Y)),L.texCoords[0]=w,L.texCoords[1]=i;var V=t.vectors.items[2];V.vector[0]=0,V.vector[1]=0,V.texCoords[0]=w,V.texCoords[1]=w;var O=t.vectors.items[3];x(O.vector,A,1/p),O.texCoords[0]=w,O.texCoords[1]=a,t.vectors.count=4;var z=t.lists[_.ENTRY];z.items[0]=0,z.items[1]=2,z.items[2]=3,z.count=3;var F=t.lists[_.EXIT];F.items[0]=1,F.items[1]=2,F.items[2]=3,F.count=3,t.lists[_.CAP].count=0,t.capCenter=void 0}else if(g&&!N){var G=t.vectors.items[0];x(G.vector,h,1/p),G.texCoords[0]=w,G.texCoords[1]=i;var L=t.vectors.items[1];L.vector[0]=0,L.vector[1]=0,L.texCoords[0]=w,L.texCoords[1]=w;var V=t.vectors.items[2];l(V.vector,f,x(D[9],o,X)),V.texCoords[0]=w,V.texCoords[1]=a;var O=t.vectors.items[3];l(O.vector,T,x(D[10],C(D[11],e),X)),O.texCoords[0]=w,O.texCoords[1]=a,t.vectors.count=4;var z=t.lists[_.ENTRY];z.items[0]=0,z.items[1]=1,z.items[2]=2,z.count=3;var F=t.lists[_.EXIT];F.items[0]=0,F.items[1]=1,F.items[2]=3,F.count=3;var k=t.lists[_.CAP];k.items[0]=2,k.items[1]=3,k.count=2,t.capCenter=1}else if(!g&&!N){var G=t.vectors.items[0];x(G.vector,h,1/p),G.texCoords[0]=w,G.texCoords[1]=i;var L=t.vectors.items[1];x(L.vector,A,1/p),L.texCoords[0]=w,L.texCoords[1]=a,t.vectors.count=2;var z=t.lists[_.ENTRY];z.items[0]=0,z.items[1]=1,z.count=2;var F=t.lists[_.EXIT];F.items[0]=0,F.items[1]=1,F.count=2,t.lists[_.CAP].count=0,t.capCenter=void 0}0>v&&(M(t.lists[_.ENTRY]),M(t.lists[_.EXIT]))}function N(t,o,e,r){var s=m(o,e),v=s>0?[y,J]:[J,y],c=v[0],i=v[1],a=s>0?C(D[0],u(D[1],o)):u(D[2],o),f=s>0?C(D[3],u(D[4],e)):u(D[5],e),T=D[6];T[0]=a[0]+f[0],T[1]=a[1]+f[1];var A=d(D[7],T),h=C(D[8],A),p=n(A,a),I=m(A,a),R=Math.abs(I/p),P=1+R*R,b=q>P?[R,!1]:[Math.sqrt(q-1),!0],Y=b[0],N=b[1];if(N){var S=t.vectors.items[0];S.vector[0]=a[0],S.vector[1]=a[1],S.texCoords[0]=w,S.texCoords[1]=i;var X=t.vectors.items[1];X.vector[0]=f[0],X.vector[1]=f[1],X.texCoords[0]=w,X.texCoords[1]=i;var g=t.vectors.items[2];l(g.vector,C(D[9],a),x(D[10],C(D[11],o),Y)),g.texCoords[0]=w,g.texCoords[1]=c;var G=t.vectors.items[3];l(G.vector,C(D[12],f),x(D[13],e,Y)),G.texCoords[0]=w,G.texCoords[1]=c;var L=t.vectors.items[4];L.vector[0]=0,L.vector[1]=0,L.texCoords[0]=w,L.texCoords[1]=w,t.vectors.count=5;var V=t.lists[_.ENTRY];V.items[0]=2,V.items[1]=4,V.items[2]=0,V.count=3;var j=t.lists[_.EXIT];j.items[0]=3,j.items[1]=4,j.items[2]=1,j.count=3,t.capCenter=4}else{var S=t.vectors.items[0];S.vector[0]=a[0],S.vector[1]=a[1],S.texCoords[0]=w,S.texCoords[1]=i;var X=t.vectors.items[1];X.vector[0]=f[0],X.vector[1]=f[1],X.texCoords[0]=w,X.texCoords[1]=i;var g=t.vectors.items[2];x(g.vector,h,1/p),g.texCoords[0]=w,g.texCoords[1]=c;var G=t.vectors.items[3];G.vector[0]=0,G.vector[1]=0,G.texCoords[0]=w,G.texCoords[1]=w,t.vectors.count=4;var V=t.lists[_.ENTRY];V.items[0]=2,V.items[1]=3,V.items[2]=0,V.count=3;var j=t.lists[_.EXIT];j.items[0]=2,j.items[1]=3,j.items[2]=1,j.count=3,t.capCenter=3}E(O,a,f,r,0>s);var z=t.vectors.count,F=t.lists[_.CAP];F.items[0]=0;var k;for(k=0;k<O.count;++k){var B=O.items[k],H=t.vectors.items[z+k];H.vector[0]=B[0],H.vector[1]=B[1],H.texCoords[0]=w,H.texCoords[1]=i,F.items[k+1]=z+k}F.items[O.count+1]=1,F.count=O.count+2,t.vectors.count=z+O.count,0>s&&(M(t.lists[_.ENTRY]),M(t.lists[_.EXIT]))}function S(t,o,e,r){var s=m(o,e),v=s>0?[y,J]:[J,y],c=v[0],i=v[1],n=s>0?C(D[0],u(D[1],o)):u(D[2],o),a=s>0?C(D[3],u(D[4],e)):u(D[5],e),d=t.vectors.items[0];d.vector[0]=n[0],d.vector[1]=n[1],d.texCoords[0]=w,d.texCoords[1]=i;var x=t.vectors.items[1];x.vector[0]=a[0],x.vector[1]=a[1],x.texCoords[0]=w,x.texCoords[1]=i;var l=t.vectors.items[2];C(l.vector,n),l.texCoords[0]=w,l.texCoords[1]=c;var f=t.vectors.items[3];C(f.vector,a),f.texCoords[0]=w,f.texCoords[1]=c;var T=t.vectors.items[4];T.vector[0]=0,T.vector[1]=0,T.texCoords[0]=w,T.texCoords[1]=w,t.vectors.count=5;var A=t.lists[_.ENTRY];A.items[0]=2,A.items[1]=0,A.count=2;var h=t.lists[_.EXIT];h.items[0]=3,h.items[1]=1,h.count=2,t.capCenter=4,E(O,n,a,r,0>s);var p=t.vectors.count,I=t.lists[_.CAP];I.items[0]=0;var R;for(R=0;R<O.count;++R){var P=O.items[R],b=t.vectors.items[p+R];b.vector[0]=P[0],b.vector[1]=P[1],b.texCoords[0]=w,b.texCoords[1]=i,I.items[R+1]=p+R}I.items[O.count+1]=1,I.count=O.count+2,t.vectors.count=p+O.count,0>s&&(M(t.lists[_.ENTRY]),M(t.lists[_.EXIT]))}function X(t,o,e){var r=u(D[0],o),s=u(D[1],e),v=t.vectors.items[0];v.vector[0]=r[0],v.vector[1]=r[1],v.texCoords[0]=w,v.texCoords[1]=y;var c=t.vectors.items[1];c.vector[0]=s[0],c.vector[1]=s[1],c.texCoords[0]=w,c.texCoords[1]=y;var i=t.vectors.items[2];C(i.vector,r),i.texCoords[0]=w,i.texCoords[1]=J;var n=t.vectors.items[3];C(n.vector,s),n.texCoords[0]=w,n.texCoords[1]=J,t.vectors.count=4;var a=t.lists[_.ENTRY];a.items[0]=0,a.items[1]=2,a.count=2;var d=t.lists[_.EXIT];d.items[0]=1,d.items[1]=3,d.count=2,t.capCenter=void 0}Object.defineProperty(o,"__esModule",{value:!0});var _;!function(t){t[t.ENTRY=1]="ENTRY",t[t.EXIT=2]="EXIT",t[t.CAP=3]="CAP"}(_=o.VectorRole||(o.VectorRole={}));var g;!function(t){t[t.START=1]="START",t[t.END=2]="END"}(g=o.CapPosition||(o.CapPosition={})),o.SYSTEM_MAG_LIMIT=3.8,o.MITER_SAFE_RADS=2*Math.acos(1/o.SYSTEM_MAG_LIMIT);var q=o.SYSTEM_MAG_LIMIT*o.SYSTEM_MAG_LIMIT,y=-1,J=1,w=0,G=16,L=G/(2*Math.PI);o.allocTriangles=e,o.allocExtrudeVectors=c,o.copyExtrudeVectors=i;var V,D=[];for(V=0;32>V;++V)D.push([void 0,void 0]);var O=v(G);o.length=a,o.normalize=d,o.getNumberOfSlices=f,o.getRads=T;var j=[void 0,void 0],z=[void 0,void 0];o.bridge=A,o.pie=h,o.buttCap=p,o.roundCap=I;var F=Math.cos(Math.PI/4),k=Math.sin(Math.PI/4),B=Math.sqrt(2);o.squareCap=R,o.fastMiterJoin=P,o.miterJoin=b,o.bevelJoin=Y,o.roundJoin=N,o.unitRoundJoin=S,o.rectJoin=X});