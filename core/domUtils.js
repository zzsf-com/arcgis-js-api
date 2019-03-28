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

define(["require","exports","../widgets/support/widget"],function(e,i,o){function n(e){(e=t(e))&&(e.style.display="block")}function t(e){return o.isWidgetBase(e)?e.domNode:e}function d(e){(e=t(e))&&(e.style.display="none")}function s(e){(e=t(e))&&(e.style.display="none"===e.style.display?"block":"none")}function l(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function r(e,i){for(;e.hasChildNodes();)i.appendChild(e.firstChild)}Object.defineProperty(i,"__esModule",{value:!0}),i.show=n,i.getNode=t,i.hide=d,i.toggle=s,i.empty=l,i.reparent=r});