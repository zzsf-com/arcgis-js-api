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

define(["dojo/_base/declare","dojo/on","dojo/dom-construct","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/FlowList","esri/dijit/geoenrichment/DataBrowser/VariableToggle","esri/dijit/geoenrichment/DataBrowser/VariableUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/PopupUtil","esri/dijit/geoenrichment/ReportPlayer/core/charts/chartUtils/ChartTypes","esri/dijit/geoenrichment/ReportPlayer/core/charts/chartUtils/ChartSorting","dojo/text!../../templates/SectionDynamicSettings.html","dojo/i18n!../../../../../../nls/jsapi"],function(t,e,i,s,n,o,a,r,l,g,c,h,u,d,S,p){p=p.geoenrichment.dijit.ReportPlayer.ReportPlayer;var _={};_[u.COLUMN]=1,_[u.BAR]=1,_[u.RING]=1;var C=t(a.itemRenderers.DefaultItemRenderer,{createLabelNode:!0,createImageAfterLabel:!0,_createImageNode:function(t,e){return i.create("div",{"class":"esriGESpaceBeforeBig dijitInline"},e)}}),m=t([n,o],{templateString:S,calcStateToggle:null,sortingList:null,_isChartShownFlag:!0,setViewOptions:function(t){var i=this;g[t?"show":"hide"](this.viewOptionsDiv),e(this.toggleViewButton,"click",function(){i._isChartShownFlag=!i._isChartShownFlag,i._updateControlsForView(),i[i._isChartShownFlag?"onShowChart":"onShowTable"]()}),this._updateControlsForView()},_updateControlsForView:function(){this.toggleViewButton.innerHTML=this._isChartShownFlag?p.viewTable:p.viewChart,g.enableContentAbsolute(this.sortingListDiv,this._isChartShownFlag)},onShowTable:function(){},onShowChart:function(){},setToggleCalcStateOptions:function(t){var i=this;g[t?"show":"hide"](this.toggleStateOptionsDiv),t&&(this.calcStateToggle=new r(t,this.toggleStateOptionsToggleDiv),this.own(this.calcStateToggle),this.calcStateToggle.stopMouseEventPropagation=!1,this.calcStateToggle.set("value",t.value),e(this.calcStateToggle,"change",function(){i.onCalcStateChanged(i.calcStateToggle.getStateName())}))},onCalcStateChanged:function(t){},setSortingOptions:function(t,e){var i=this;this.sortingList||(this.sortingList=new a({"class":"sectionDynamicSettings_sortingList",itemRenderer:new C,onChange:function(){i.onSort(i.sortingList.get("value"))}}).placeAt(this.sortingListDiv),this.own(this.sortingList)),this.sortingList.setItems(t),this.sortingList.set("value",e)},onSort:function(t){},setVisualState:function(t){if(t){var e=t.stackElements[0]&&t.stackElements[0].cells&&t.stackElements[0].cells[0];e&&(this._isChartShownFlag=!e.isTableView,e.sorting&&this.sortingList.set("value",e.sorting),this._updateControlsForView())}}});return t(null,{settingsButtonClass:null,_section:null,_settingsWidget:null,constructor:function(t){this._section=t,this._createSettings()},_provideSettings:function(){var t=[],e=this._section.getChartJson(),i=e&&!!e.seriesItems.length,s=this._section.calculationStatesGroup;return this._provideOptionsForSorting(e,t),t.length||(t=null),i||t||s?{canViewTable:i,group:s,sortingOptions:t,sorting:e.visualProperties.sorting}:null},_provideOptionsForSorting:function(t,e){t&&1==t.seriesItems.length&&_[t.type]&&(e.push({label:p.noSorting,imageClass:"",value:d.NONE}),e.push({label:p.sortAscending,imageClass:"upButton",value:d.ASC}),e.push({label:p.sortDescending,imageClass:"downButton",value:d.DESC}))},_provideOptionsForComparisonLevels:function(t,e){},_createSettings:function(){function t(){if(!r){r=!0;var t=function(){function t(){h.close(o._settingsWidget)}return o._settingsWidget||(o._settingsWidget=new m({onSort:function(e){t(),o._section.sortChart(e)},onShowTable:function(){t(),o._section.chartToTable()},onShowChart:function(){t(),o._section.tableToChart()},onCalcStateChanged:function(e){t(),o._section.setChartCalculationState(e)}}),o._section.own(o._settingsWidget),o._settingsWidget.setSortingOptions(a.sortingOptions,a.sorting),o._settingsWidget.setViewOptions(a.canViewTable),o._settingsWidget.setToggleCalcStateOptions(a.group),o._settingsWidget.setVisualState(o._section.getVisualState())),o._settingsWidget};h.makePopup(t(),o._section,l,{orient:["before","below"]})}}function n(e){s.set(l,"visibility",e?"visible":"hidden"),e&&t()}var o=this,a=this._provideSettings();if(a){var r=!1,l=i.create("div",{"class":"sectionDynamicSettings_settingsButton"},this._section.domNode);this.settingsButtonClass&&domClass.add(l,this.settingsButtonClass),n(!1),this._section.own(e(document.body,"mousemove",function(){n(c.isMouseOver(o._section.domNode))}))}},setVisualState:function(t){this._settingsWidget&&this._settingsWidget.setVisualState(t)}})});