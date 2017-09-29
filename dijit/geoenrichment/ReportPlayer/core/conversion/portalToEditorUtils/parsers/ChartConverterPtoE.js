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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/JsonXmlConverter","../../../charts/chartUtils/ChartJsonUtil","../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/charts/chartUtils/ChartTypes"],function(t,e,r,s,i,a){function n(t,e,i){var a=r.queryJson(t,"series").filter(function(t){return t.tags&&t.tags[0]&&"point"==t.tags[0].name});return a.map(function(t){if(!t.tags)return null;t.attributes=t.attributes||{};var r={label:t.attributes.Text||"",color:u(t.attributes.color),thickness:t.attributes.thickness,points:t.tags.map(function(t){t.attributes=t.attributes||{};var r=t.tags&&t.tags[0],a=r&&r.attributes&&r.attributes.f;a=a&&a.substr(a.indexOf(".")+1);var n=a&&a.toUpperCase(),l=e(n);return s.createChartPoint(u(t.attributes.color),t.attributes.Text||"",a,l,i)}).filter(function(t){return t&&(t.calculator||t.script)})};return r}).filter(function(t){return t&&t.points&&!!t.points.length})}function l(t){var s=r.queryJson(t,"BackImage")[0];return s&&s.tags&&"#text"==s.tags[0].name?e.base64DataToDataURL(s.tags[0].text):null}function o(t){return"string"!=typeof t?0:(t=t.replace("%",""),"0"===t?0:t.replace("0.","").length)}function u(t){return"string"==typeof t&&6==t.length&&-1==t.indexOf("#")?"#"+t:t}var g={};return g.portalToEditor=function(e,g,c,b,p){function d(t,e){return void 0===t?e:t}var h=n(e,c,b);if(!h.length)return null;var y=e.attributes,f=r.queryJson(e,"chartTitle")[0],m=r.queryJson(e,"legend")[0],x=r.queryJson(e,"xAxis")[0],S=r.queryJson(e,"yAxis")[0],P=r.queryJson(e,"chartIcon"),v=r.queryJson(e,"floatingIcon"),C=r.queryJson(e,"floatingText"),T=r.queryJson(e,"trigger");f.attributes=f.attributes||{},m.attributes=m.attributes||{},x.attributes=x.attributes||{},S.attributes=S.attributes||{},h.forEach(function(t){t.thickness=Number(t.thickness)});var k;(y.type==a.COLUMN||y.type==a.BAR)&&(k=h[0].thickness>1?"Large":h[0].thickness<1?"Small":"Medium");var O=x.tags&&x.tags[0].attributes&&x.tags[0].attributes,L=S.tags&&S.tags[0].attributes&&S.tags[0].attributes,I=l(e),w={isChart:!0,type:y._type||y.type,seriesItems:h,visualProperties:{width:i.ptToPx(y.width),height:i.ptToPx(y.height),backgroundColor:u(y.backColor),barBorders:y.barBorders,dataLabels:y.dataLabels,view3D:!!y.view3D,origin:y.origin||0,lineThickness:y.type==a.LINE&&h[0].thickness||void 0,columnThickness:k,backgroundImageData:I,dataLabelsDecimals:o(y.CustomPercentFormat||y.CustomValueFormat),title:{text:f.attributes.text,align:f.attributes.align&&f.attributes.align.toLowerCase(),style:i.ptToPxObj(i.parseStyleString(f.attributes.style))},xAxis:{show:"None"!=x.attributes.placement,showTicks:x.attributes.ticks,style:i.ptToPxObj(i.parseStyleString(x.attributes.style)),title:O&&O.text,gridLines:x.attributes.gridlines,gridLinesCentered:x.attributes.gridlinesCentered,gridLinesOpacity:d(x.attributes.gridlinesOpacity,1),titleStyle:O&&i.ptToPxObj(i.parseStyleString(O.style)),placement:"OtherSide"==x.attributes.placement?"OtherSide":void 0,labelsAngle:x.attributes.labelsAngle||0},yAxis:{show:"None"!=S.attributes.placement,showTicks:S.attributes.ticks,style:i.ptToPxObj(i.parseStyleString(S.attributes.style)),title:L&&L.text,gridLines:S.attributes.gridlines,gridLinesCentered:S.attributes.gridlinesCentered,gridLinesOpacity:d(S.attributes.gridlinesOpacity,1),titleStyle:L&&i.ptToPxObj(i.parseStyleString(L.style)),placement:"OtherSide"==S.attributes.placement?"OtherSide":void 0,labelsAngle:S.attributes.labelsAngle||0},legend:{hasBorder:m.attributes.hasBorder,labelParts:m.attributes.labelParts,placement:m.attributes.placement,placementOffset:m.attributes.placementOffset,style:i.ptToPxObj(i.parseStyleString(m.attributes.style))},dataLabelsStyle:i.ptToPxObj(i.parseStyleString(y.dataLabelsStyle))}};w.isMultiFeatureChart=!!y.isMultiFeatureChart,t.mixin(w.visualProperties,{donutHolePercent:y.donutHolePercent,donutGap:y.donutGap,ringBackgroundColor:y.ringBackgroundColor,isStacked:y.isStacked,showAxisIcons:y.showAxisIcons,showChartIcons:y.showChartIcons,dataLabelsInside:y.dataLabelsInside,dataLabelsStackedInColumns:y.dataLabelsStackedInColumns,sorting:y.sorting}),P&&P.length&&(w.visualProperties.chartIcons=P.map(function(t){return p.parsers.getParser("field").parseField(t.tags[0],t,null,p)})),v&&v.length&&(w.visualProperties.floatingIcons=v.map(function(t){return p.parsers.getParser("section").parseTable(t.tags[0],p)})),C&&C.length&&(w.visualProperties.floatingTexts=C.map(function(t){return p.parsers.getParser("section").parseTable(t.tags[0],p)})),T&&T.length&&(w.visualProperties.conditionalStyling=p.parsers.getParser("field").parseFieldTrigger(T[0]));var j={};return g.attributes&&g.attributes.style&&t.mixin(j,i.parseStyleString(g.attributes.style)),i.ptToPxObj(j),s.provideDefaultValueForMissing(w,{font:j}),w},g});