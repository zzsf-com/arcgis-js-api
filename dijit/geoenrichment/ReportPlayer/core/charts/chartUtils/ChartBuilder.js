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

/*!viewModel.dynamicReportInfo &&*/

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojox/gfx","dojox/charting/axis2d/Default","dojox/charting/plot2d/Lines","./ThemeCalculator","./ChartTypes","./ChartSorting","../../supportClasses/templateJsonUtils/FieldInfoRenderer","../../supportClasses/templateJsonUtils/FieldInfoNameUtil","../../supportClasses/conditionalStyling/ConditionalStyleUtil","./plots/ClusteredColumns","./plots/StackedColumns","./plots/ClusteredBars","./plots/StackedBars","./plots/Donut","./plots/Pie","./plots/Ring","./plots/PictureClusteredColumns","./plots/PictureClusteredBars","../../themes/ReportThemes","./CustomGridPlot","./AxisUtil","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(t,e,i,a,n,o,l,r,s,c,d,u,m,p,f,h,x,b,g,S,v,y,L,C,A,T){function P(t,e){return void 0===t?e:t}function I(t,e,i,a,n,o,l){var r;return l=l||R,n.dynamicReportInfo?(t.fieldName||(t.fieldName=t.calculator?d.createFieldNameFromVariable({fullName:t.calculator.substr(t.calculator.indexOf("/")+1)},t.calculator.charAt(0)):d.createFieldNameFromScript(t.script)),r=c.getFieldDataValue({name:t.fieldName},n.dynamicReportInfo.fieldData,o)||0,r||console.log(t.fieldName)):(r=l[e%l.length],E[i]||(E[i]=.5+(.3-.6*Math.random())),r*=E[i],r=k(t,r,a)),r}function k(t,e,i){var a=t.calculator&&t.calculator.charAt(0);return"p"==a&&(e/=20,e=Number(e.toFixed(1))),"i"==a&&(e/=15,e=Number(e.toFixed(1))),e}function M(t,e){var i=R.slice();i.length=Math.min(i.length,e);var a=-(1/0);i.forEach(function(t){a=Math.max(a,t)});var n=1.1*t.max/a;return i=i.map(function(t){return t*n})}function _(t,e,i,a,n){function o(){return T.formatNumber(t,a.dataLabelsDecimals,!0)}function l(){return T.formatNumber(t/i*100,a.dataLabelsDecimals,!0)+"%"}var s=-1!=a.dataLabels.indexOf("Label"),c=-1!=a.dataLabels.indexOf("Value"),d=-1!=a.dataLabels.indexOf("Percent"),u="";if(n==r.RING)s&&(u+=e),c&&(u+=(s?g.LABEL_SEPARATOR:"")+o()),d&&(u+=(s?g.LABEL_SEPARATOR:"")+l());else if(s||c||d){var m=0;u="",s&&(u+="<div>"+e+"</div>",m++),c&&(u+="<div>"+o()+"</div>",m++),d&&(u+="<div>"+l()+"</div>",m++),u+="</div>",u="<div two-row-label='"+(m>1)+"'>"+u}return u}function N(t,e,i,a,n,o,l,r,s,c){function d(t,e){return T.formatNumber(t||0,e||l.dataLabelsDecimals,!0)}return{color:s,label:e,seriesLabel:i,valueLabel:d(t),sumValueLabel:d(n),maxValueLabel:d(a),avgValueLabel:d(o),percentLabel:d(t/n*100)+"%",showPercent:-1!=l.dataLabels.indexOf("Percent"),value:t,conditionalStyling:c,getGroup:null}}function O(t,e,i,a,n){var o=288*a/680/(t+1);return"Small"==i?o*=.5:"Large"==i&&(o*=1.5),o/(n?1:e)}var w={},R=[1e3,1200,500,150,70,900,110,300,80,200,1700],E=[1,.7,1.2,.5,1.1,1.3,.3,2,.4],F=600,j={configureChart:function(t){var i=t.chart,a=t.visualProperties,n=t.chartType,o=t.themeSettings,l=t.viewModel;i._pointIndexToLabelMap={};var s=e.mixin({},o.xAxis.axisStyle,a.xAxis.style),c=A.toColor(s.color||"#000000");c.a=P(a.yAxis.gridLinesOpacity,1),c=A.toCSSColor(c),i.addPlot("grid",{type:L,vMajorLines:a.yAxis.gridLines,majorVLine:{color:c,width:.5},vMinorLines:!1,hMajorLines:a.xAxis.gridLines,majorHLine:{color:c,width:.5},hMinorLines:!1});var d=i.getPlot("grid");d.xHasHalfTickOffset=a.yAxis.gridLinesCentered,d.yHasHalfTickOffset=a.xAxis.gridLinesCentered;var u={gap:50},x=-1!=a.dataLabels.indexOf("Label"),b=-1!=a.dataLabels.indexOf("Value"),g=-1!=a.dataLabels.indexOf("Percent"),C=a.dataLabelsInside?"inside":"outside",T=5,I=x||b||g?{precision:0,labels:!0,labelStyle:C,htmlLabels:!0,labelOffset:T,labelFunc:function(t){return _(t.y,t.name,t._valuesSumsInSeries,a)}}:null,k=l.dynamicReportInfo&&l.chartAnimationAllowed?{animate:{duration:F}}:null;switch(n){case r.COLUMN:i.addPlot("default",e.mixin({type:a.isStacked?p:m},u,I,k));break;case r.BAR:i.addPlot("default",e.mixin({type:a.isStacked?h:f},u,I,k));break;case r.LINE:i.addPlot("default",e.mixin({type:"Lines",markers:l.reportStyle==y.GRAPHIC},k));break;case r.PICTURE_COLUMN:i.addPlot("default",e.mixin({type:S},u,I,k));break;case r.PICTURE_BAR:i.addPlot("default",e.mixin({type:v},u,I,k))}i.movePlotToBack("grid"),i.addAxis("x",this._createXAxis(null,a,n,o,i)),i.addAxis("y",this._createYAxis(null,a,n,o)),this.updateBarSize(t)},updateBarSize:function(t){var e=t.chart,i=t.visualProperties,a=t.seriesItems;if(e&&t.chartType!=r.LINE){var n=t.chartSize||i[t.chartType==r.COLUMN?"width":"height"],o=0;a.forEach(function(t){o=Math.max(o,t.points.length)});var l=O(o,a.length,i.columnThickness,n,i.isStacked);e.getPlot("default").opt.maxBarSize=l,e.getPlot("default").opt.minBarSize=l}},_createXAxis:function(t,i,a,n,o){var s=i.xAxis,c="OtherSide"!=s.placement,d=e.mixin({},n.xAxis.axisStyle,s.style),u=e.mixin({},n.xAxis.titleStyle,s.titleStyle),m=a===r.BAR||a===r.PICTURE_BAR,p={stroke:d.color,title:s.title,titleOrientation:!m&&c?"away":"axis",titleFont:l.combineFontString(u),titleFontColor:u.color,vertical:m,leftBottom:c,majorTicks:!0,majorTick:{length:s.show&&s.showTicks?5:0,color:d.color},majorTickStep:1,minorTicks:!1,microTicks:!1,minorTickStep:.5,microTickStep:.01,font:l.combineFontString(d),fontColor:d.color,dropLabels:!1,majorLabels:s.show,minorLabels:!1,labelFunc:function(t,e,i){var a=o._pointIndexToLabelMap&&o._pointIndexToLabelMap[e];return void 0!==a?a:t},rotation:-s.labelsAngle||0};return e.mixin(p,t)},_createYAxis:function(t,i,a,n){var o=i.yAxis,s="OtherSide"!=o.placement,c=e.mixin({},n.yAxis.axisStyle,o.style),d=e.mixin({},n.yAxis.titleStyle,o.titleStyle),u=a===r.BAR||a===r.PICTURE_BAR,m={fixUpper:"major",includeZero:!0,stroke:c.color,title:o.title,titleOrientation:u&&s?"away":"axis",titleFont:l.combineFontString(d),titleFontColor:d.color,vertical:!u,leftBottom:s,majorTicks:!0,majorTick:{length:o.show&&o.showTicks?5:0,color:c.color},majorTickStep:200,minorTicks:!1,microTicks:!1,minorTickStep:100,microTickStep:10,font:l.combineFontString(c),fontColor:c.color,dropLabels:!1,majorLabels:o.show,minorLabels:!1,rotation:-o.labelsAngle||0};return e.mixin(m,t)},calcSeries:function(t){return t.chartType==r.LINE?this._calcSeriesLine(t):this._calcSeriesColumnBar(t)},_updatePointIndexToLabelMap:function(t,e,i){var a=t._pointIndexToLabelMap[e];(void 0===a||""===a)&&(t._pointIndexToLabelMap[e]=i.label)},_calcSeriesColumnBar:function(t){var e,i=t.chart,a=t.visualProperties,n=t.seriesItems,o=t.chartType,r=t.themeSettings,c=t.viewModel,d=t.previewFeatureIndex,m=t.isMultiFeatureChart,p=t.excludedSeriesHash,f=1==n.length&&t.sorting,h=this,x=0,b=[];a.isStacked&&(e=[]),i._pointIndexToLabelMap={};var g,S={};if(a.conditionalStyling){var v=u.getStatistics(a.conditionalStyling);v&&n.length&&(g=M(v,n[0].points.length))}return n.forEach(function(t,v){if(t.points.length){var y={name:t.label,data:[]},L=[],C=0,A=0;t.points.forEach(function(i,a){var n=I(i,a,v,!1,c,m?a:d,g);L[a]=n,p&&p[t.label]||(e?(e[a]=e[a]||0,e[a]+=n):x=Math.max(n,x),C+=n,A=Math.max(A,n))});var T=C/t.points.length;t.points.forEach(function(e,i){var s,c=L[i]||0,d=i+1;if(a.conditionalStyling){var m=u.getConditionalStyle(c,a.conditionalStyling);s=m&&m.backgroundColor}s=s||l.calcColorForPoint(e,t,i,v,n.length,o,r);var p=N(c,e.label,t.label,A,C,T,a,o,s,a.conditionalStyling),f=S[d]=S[d]||[];f.push(p),p.getGroup=function(){return f},y.data.push({x:d,y:c,unsortedIndex:i,name:e.label||"",_valuesSumsInSeries:C,point:e,fill:s,tooltip:p,stroke:{width:0}})}),f&&f!=s.NONE&&(y.data.sort(function(t,e){return(t.y-e.y)*(f==s.DESC?-1:1)}),y.data.forEach(function(t,e){var i=e+1;t.x=i})),y.data.forEach(function(t){h._updatePointIndexToLabelMap(i,t.x,t.point)}),b.push(y)}}),e&&(e.sort(function(t,e){return e-t}),x=e[0]),this._prettifyYAxis(x,i,a,o,r),b},_calcSeriesLine:function(t){var e=t.chart,i=t.visualProperties,a=t.seriesItems,n=t.chartType,o=t.themeSettings,r=t.viewModel,s=t.previewFeatureIndex,c=t.isMultiFeatureChart,d=this,u=0,m=[],p={};return a.forEach(function(t,f){if(t.points.length){var h=l.calcColorForPoint(null,t,0,f,a.length,n,o),x={name:t.label,data:[],params:{stroke:{color:h,width:i.lineThickness||1}}},b=[],g=0,S=0;t.points.forEach(function(t,e){var i=I(t,e,f,!1,r,c?e:s);b[e]=i,u=Math.max(i,u),g+=i,S=Math.max(S,i)});var v=g/t.points.length;t.points.forEach(function(a,o){var l=b[o],r=o+1;d._updatePointIndexToLabelMap(e,r,a);var s=N(l,a.label,t.label,S,g,v,i,n,h),c=p[r]=p[r]||[];c.push(s),s.getGroup=function(){return c},x.data.push({x:r,y:l,name:a.label||"",_valuesSumsInSeries:g,point:a,fill:h,tooltip:s})}),m.push(x)}}),this._prettifyYAxis(u,e,i,n,o),m},_prettifyYAxis:function(t,e,i,a,n){i.yAxis.show&&(e.removeAxis("y"),e.addAxis("y",this._createYAxis(C.getPrettifyYAxisParameters(t),i,a,n)))}},B={configureChart:function(t){var e=t.chart,i=t.visualProperties,a=t.chartType,n=t.themeSettings,o=t.viewModel;e.addPlot("default",this._createPiePlot(i,n,o,a))},_createPiePlot:function(t,i,a,n){var o=-1!=t.dataLabels.indexOf("Label"),s=-1!=t.dataLabels.indexOf("Value"),c=-1!=t.dataLabels.indexOf("Percent"),d=e.mixin({},i.dataLabelsStyle,t.dataLabelsStyle),u=o||s||c?{labelStyle:t.dataLabelsStackedInColumns?"columns":t.dataLabelsInside?"inside":"outside",htmlLabels:!0,font:l.combineFontString(d),fontColor:d.color,omitLabels:!t.dataLabelsStackedInColumns}:{labels:!1},m=a.dynamicReportInfo&&a.chartAnimationAllowed?{animate:{duration:F}}:null;return e.mixin({type:n==r.RING?g:n==r.DONUT?x:b,fontColor:"black"},u,m)},calcSeries:function(t){var e,i=(t.chart,t.seriesItems),a=t.chartType,n=t.themeSettings,o=t.viewModel,c=t.visualProperties,d=t.previewFeatureIndex,m=t.sorting,p=[],f=i[0],h={name:"data",data:[]},x=[],b=0,g=0;if(a==r.RING&&c.conditionalStyling){var S=u.getStatistics(c.conditionalStyling);S&&f&&(e=M(S,f.points.length))}f.points.forEach(function(t,i){var a=I(t,i,0,!1,o,d,e);b+=a,x[i]=a,g=Math.max(g,a)});var v=b/f.points.length;return f.points.forEach(function(t,e){var o,r=x[e];if(w.supportConditionalStyling(a)&&c.conditionalStyling){var s=u.getConditionalStyle(r,c.conditionalStyling);o=s&&s.backgroundColor}o=o||l.calcColorForPoint(t,f,e,0,i.length,a,n),h.data.push({x:1,y:Math.max(1e-4,r),name:t.label,point:t,fill:o,text:_(r,t.label,b,c,a),tooltip:N(r,t.label,null,g,b,v,c,a,o,c.conditionalStyling),stroke:{width:0}})}),a==r.RING&&m&&m!=s.NONE&&h.data.sort(function(t,e){return(t.y-e.y)*(m==s.DESC?-1:1)}),p.push(h),p}};return w.supportConditionalStyling=function(t){return t===r.COLUMN||t===r.BAR||t===r.RING},w.getChartBuilder=function(t){return t==r.PIE||t==r.DONUT||t==r.RING?B:j},w});