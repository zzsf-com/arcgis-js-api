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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/on","dojo/when","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/charting/Chart","dojox/charting/action2d/Magnify","dojox/charting/action2d/Highlight","./chartUtils/action2d/RingHighlight","./_ChartLegendSupport","./_ChartEventSupport","./chartUtils/ChartBuilder","./chartUtils/ChartTypes","./chartUtils/ChartSorting","./chartUtils/ChartCalculator","./chartUtils/ChartStyleUtil","../themes/ReportThemes","./tooltips/ChartTooltip","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/InvokeUtil","./iconRendering/IconRenderer","./textRendering/TextRenderer","./tableViewRendering/TableViewRenderer","dojo/text!../templates/ChartContainer.html","dojo/i18n!../../../../../nls/jsapi"],function(e,t,i,r,s,h,n,a,o,l,c,d,u,_,p,m,g,C,f,v,w,x,y,S,T,R,I,V,b,M,P){P=P.geoenrichment.dijit.ReportPlayer.ReportPlayer;var D=e(d,{_renderPlotBackground:function(e,t,i,r){this.theme.plotarea.backgroundImageData?this.surface.createImage({src:this.theme.plotarea.backgroundImageData,x:t.l-1,y:t.t-1,width:i+2,height:r+2}):this.inherited(arguments)}});return e([l,c,m,g],{templateString:M,nls:P,viewModel:null,themeContext:null,theme:null,previewFeatureIndex:null,immediateRender:!1,chartTheme:null,chart:null,showEditButton:!1,onPlotChangeColor:null,onPlotChangeIcon:null,_currentSeries:null,_placements:["Left","Right","Top","Bottom"],_iconRenderer:null,_textRenderer:null,_tableViewRenderer:null,postCreate:function(){var e=this;this.inherited(arguments),this.viewModel.reportStyle==y.GRAPHIC&&r.add(this.domNode,"graphicReportChart"),this.showEditButton?a(this.editChartButton,"mousedown",function(t){t.stopPropagation(),e.onEdit()}):s.destroy(this.editChartButton),this._iconRenderer=(new this._getIconRendererClass)(),this.own(this._iconRenderer),this._textRenderer=(new this._getTextRendererClass)(),this.own(this._textRenderer),this._tableViewRenderer=new b,this.own(this._tableViewRenderer)},_currentSeriesItems:null,_currentVisualProperties:null,_currentChartType:null,_isMultiFeatureChart:null,updateChart:function(e){if(e){if(this._currentSeriesItems=e.seriesItems,this._currentVisualProperties=e.visualProperties,this._currentChartType=e.type,this._isMultiFeatureChart=e.isMultiFeatureChart,this._isMultiFeatureChart&&this._currentSeriesItems.length){var t=this._currentSeriesItems[0],i=this.viewModel.dynamicReportInfo.fieldData.featureData;this._currentSeriesItems=t.points.map(function(e){return{label:e.label,thickness:t.thickness,points:i.map(function(t){return{label:t["HEADERS.AREA_DESC"]||"",fieldName:e.fieldName,calculator:e.calculator}})}})}this._updateLabels(),this._createChart(),this._addPlotEventListeners(),this._createLegend(),this._updateSeries()}},getLegendNode:function(){return this.legendContainerDiv},_updateLabels:function(){this.chartLabel.innerHTML=this._currentVisualProperties.title.text,T[this.chartLabel.innerHTML?"show":"hide"](this.chartLabel),n.set(this.chartLabel,"textAlign",this._currentVisualProperties.title.align);var e=t.mixin({},this.viewModel.getChartDefaultStyles(this.theme||this.themeContext).titleStyle,this._currentVisualProperties.title.style);n.set(this.chartLabel,x.getStyleObjWithUnits(e))},_createChart:function(){this._destroyChart();var e=s.create("div",{"class":"chartContainerDiv_innerChartNode"},this.chartContainerDiv),t=new D(e);if(this.chart=t,t.setTheme(this.chartTheme),C.getChartBuilder(this._currentChartType).configureChart({chart:t,seriesItems:this._currentSeriesItems,visualProperties:this._currentVisualProperties,chartType:this._currentChartType,themeSettings:this.viewModel.getChartDefaultStyles(this.theme||this.themeContext),viewModel:this.viewModel,previewFeatureIndex:this.previewFeatureIndex}),this.viewModel.dynamicReportInfo&&((this._currentChartType==f.PIE||this._currentChartType==f.DONUT)&&new u(t,"default",{scale:1.03}),this._currentChartType==f.RING?new p(t,"default"):new _(t,"default")),this.viewModel.dynamicReportInfo||this._currentVisualProperties.conditionalStyling&&C.supportConditionalStyling(this._currentChartType)){var i=new S(t,"default",{duration:50});i.showStatistics=!!this.viewModel.dynamicReportInfo,i.setChartType(this._currentChartType)}},_destroyChart:function(){this._hideLevelLine(),s.empty(this.chartContainerDiv),this.chart&&this.chart.destroy(),this.chart=null,this._destroyLegend()},_updateSeries:function(){var e=this;return this._removeSeries(),this._currentSeriesItems&&this._currentSeriesItems.length?(this._currentSeries=C.getChartBuilder(this._currentChartType).calcSeries({chart:this.chart,seriesItems:this._currentSeriesItems,visualProperties:this._currentVisualProperties,chartType:this._currentChartType,themeSettings:this.viewModel.getChartDefaultStyles(this.theme||this.themeContext),viewModel:this.viewModel,previewFeatureIndex:this.previewFeatureIndex,isMultiFeatureChart:this._isMultiFeatureChart,excludedSeriesHash:this._excludedSeriesHash,sorting:this._sorting||this._currentVisualProperties.sorting}),this._currentSeries.forEach(function(t){e._excludedSeriesHash[t.name]||e.chart.addSeries(t.name,t.data,t.params)}),this.resize()):void this.resize()},_removeSeries:function(){var e=this;this._currentSeries=this._currentSeries||[],this._currentSeries.forEach(function(t){e.chart.removeSeries(t.name)}),this._currentSeries.length=0},_chartWidth:0,_chartHeight:0,_resizedFlag:!1,_provideSpecialTextStyling:function(){if(-1!=[f.COLUMN,f.LINE,f.BAR].indexOf(this._currentChartType)){var e=this._currentVisualProperties,i=this.viewModel.getChartDefaultStyles(this.theme||this.themeContext);for(var r in this.chart.axes){var s=e[r+"Axis"],h=t.mixin({},i[r+"Axis"].style,s.style),a=t.mixin({},i[r+"Axis"].titleStyle,s.titleStyle),o="underline"==h.textDecoration,l="underline"==a.textDecoration;if(o||l){var c,d=this.chart.axes[r],u=[],_=this._currentChartType==f.BAR?"y":"x",p=!!s.title;if(r==_){c=p&&d.htmlElements[0];for(var m=p?1:0;m<d.htmlElements.length;m++)u.push(d.htmlElements[m])}else if(r!=_&&d.group&&d.group.children){for(var g=[],C=0;C<d.group.children.length;C++){var v=d.group.children[C];v.rawNode&&"text"==v.rawNode.nodeName&&g.push(v.rawNode)}if(c=p&&g[0])g.shift(),u=g;else for(var w=0;w<d.htmlElements.length;w++)u.push(d.htmlElements[w])}l&&c&&n.set(c,"textDecoration","underline"),o&&u.forEach(function(e){n.set(e,"textDecoration","underline")})}}var x=t.mixin({},i.dataLabelsStyle,e.dataLabelsStyle);if("underline"==x.textDecoration&&this.chart.stack[0])for(r in this.chart.stack[0].htmlElements)n.set(this.chart.stack[0].htmlElements[r],"textDecoration","underline")}},_resizeDfd:null,resize:function(e,t,r){return this._currentVisualProperties?(void 0!==e&&w.resizeVisualProperties(this._currentVisualProperties,e,t),this._resizedFlag||n.set(this.domNode,"opacity","0"),this._resizeDfd=this._resizeDfd||new i,r||this.immediateRender?this._doResizeChart():R.invoke(this,"_doResizeChart",50)):void 0},_doResizeChart:function(){function e(){setTimeout(function(){t._updateLegend(),t._updateIcons(),t._updateTexts()}),t.onRendered(),t._resizeDfd&&t._resizeDfd.resolve(),t._resizeDfd=null}var t=this;if(this.chart){this._resizedFlag||n.set(this.domNode,"opacity","1"),this._resizedFlag=!0,this._updateLegend();var i=w.calcChartDimentions(this,{visualProps:this._currentVisualProperties,chartType:this._currentChartType,maxIconSize:this._iconRenderer.AXIS_ICON_MAX_SIZE}),r=i.w,s=i.h;if(this._chartWidth==r&&this._chartHeight==s&&this.chart&&this.chart.dim.width&&this.chart.dim.height)return this.chart.render(),void e();this._chartWidth=r,this._chartHeight=s,n.set(this.domNode,{width:this._currentVisualProperties.width+"px",height:this._currentVisualProperties.height+"px"}),(this._currentChartType==f.COLUMN||this._currentChartType==f.BAR)&&C.getChartBuilder(this._currentChartType).updateBarSize({chart:this.chart,chartSize:this._currentChartType==f.COLUMN?this._chartWidth:this._chartHeight,seriesItems:this._currentSeriesItems,visualProperties:this._currentVisualProperties,chartType:this._currentChartType,viewModel:this.viewModel,previewFeatureIndex:this.previewFeatureIndex});try{this.chart&&this.chart.resize(this._chartWidth,this._chartHeight),this._provideSpecialTextStyling()}catch(h){console.log(h)}e()}},notifyShown:function(){this.resize()},onRendered:function(){},_getIconRendererClass:function(){return I},_updateIcons:function(){this._iconRenderer.renderIcons({viewModel:this.viewModel,themeContext:this.themeContext,theme:this.theme,chartType:this._currentChartType,iconNode:this.chartContainerWithAxis,chartW:this._chartWidth,chartH:this._chartHeight,visualProperties:this._currentVisualProperties,chart:this.chart})},_getTextRendererClass:function(){return V},_updateTexts:function(){this._textRenderer.renderTexts({viewModel:this.viewModel,themeContext:this.themeContext,theme:this.theme,textNode:this.chartContainerWithAxis,chartW:this._chartWidth,chartH:this._chartHeight,visualProperties:this._currentVisualProperties,chart:this.chart})},setViewMode:function(e){this._iconRenderer.setViewMode(e),this._textRenderer.setViewMode(e),this._tableViewRenderer.setViewMode(e)},_sorting:null,getSorting:function(){return this._sorting},sortChart:function(e){this._sorting=e&&e!=v.NONE?e:null,this._updateSeries()},_isTableView:!1,chartToTable:function(){if(!this._isTableView){this._isTableView=!0,T.hide([this.chartContainerDiv,this.legendContainerDiv]);for(var e=0;e<this.chartContainerWithAxis.children.length;e++){var t=this.chartContainerWithAxis.children[e];t!==this.tableContainerDiv&&T.hide(t)}this._tableViewRenderer.renderTableForChart({viewModel:this.viewModel,themeContext:this.themeContext,theme:this.theme,tableNode:this.tableContainerDiv,width:n.get(this.domNode,"width")-2,height:n.get(this.domNode,"height")-n.get(this.chartLabel,"height"),seriesItems:this._currentSeriesItems,visualProperties:this._currentVisualProperties,chart:this.chart})}},tableToChart:function(){this._isTableView=!1,T.show([this.chartContainerDiv,this.legendContainerDiv]);for(var e=0;e<this.chartContainerWithAxis.children.length;e++)T.show(this.chartContainerWithAxis.children[e]);this._tableViewRenderer.destroyTable()},getVisualState:function(){return{sorting:this.getSorting(),isTableView:this._isTableView}},setVisualState:function(e){e&&o(this._resizeDfd&&this._resizeDfd.promise,function(){e.sorting&&this.sortChart(e.sorting),e.isTableView&&this.chartToTable()}.bind(this))},getWidth:function(){return this._currentVisualProperties.width},getHeight:function(){return this._currentVisualProperties.height},onEdit:function(){},destroy:function(){this._destroyChart(),this.inherited(arguments)}})});