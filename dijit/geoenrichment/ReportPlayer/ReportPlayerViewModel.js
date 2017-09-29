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

define(["dojo/_base/declare","./core/themes/ThemeLibrary","./core/themes/ReportThemes"],function(e,t,n){return e(null,{reportStyle:null,layoutBuilder:null,dynamicReportInfo:null,chartAnimationAllowed:!0,_theme:null,getCurrentTheme:function(){return this._theme},setTheme:function(e){this._theme=e||t.getReportThemeById(n.GRAPHIC)},getTableDefaultStyles:function(e,t){var n=this._theme.table;return t?n[t]:n},getChartDefaultStyles:function(){return this._theme.chart},getDocumentDefaultStyles:function(){return this._theme.document},getInfographicDefaultStyles:function(){return this._theme.infographic},getStaticInfographicDefaultStyles:function(){var e=this.getInfographicDefaultStyles();return e&&e.staticInfographic},setDynamicReportInfo:function(e){this.dynamicReportInfo=e,this.reportStyle=e.isClassic?n.CLASSIC:n.GRAPHIC},getDynamicImageFunc:function(e,t){},enrichFieldData:function(e){}})});