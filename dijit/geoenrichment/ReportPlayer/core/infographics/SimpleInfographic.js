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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","./_SimpleInfographicDataDrillingSupport","esri/dijit/geoenrichment/_Invoke","./infographicUtils/InfographicLayoutResizer","./infographicUtils/InfographicJsonConversionUtil","./infographicUtils/InfographicThemeUtil","../supportClasses/TableUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/animation/Animator","../sections/supportClasses/InfographicValueController","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","dojo/text!../templates/SimpleInfographic.html"],function(i,e,t,o,n,s,r,a,h,l,d,c,p,u,g,f,m,_){function w(i){return i&&i.shape&&i.shape.shapeJson.showAsBar}var v=250;return i([s,r,h,a],{templateString:_,viewModel:null,themeContext:null,theme:null,isEditMode:!1,_sections:null,_currentInfographicJson:null,postCreate:function(){this.inherited(arguments),this._setViewMode(a.VIEW_MAIN)},_destroySections:function(){this._destroyDrillingSections(),this._destroyDrillingSectionsButtons(),this._sections=this._sections||[],this._sections.forEach(function(i){i.destroy()}),this._sections.length=0,this.domNode&&o.empty(this.mainViewDiv)},updateInfographic:function(i){this.domNode&&(this._currentInfographicJson=this._applyThemeToJson(i),this._doUpdateInfographic())},_doUpdateInfographic:function(){var i=this;if(this.domNode){this._destroySections();var e=this._currentInfographicJson;if(this.width&&this.height&&(e.style.width!=this.width||e.style.height!=this.height)){var t={w:this.width,h:this.height};l.resizeLayout(e,t)}var o=this.viewModel.getStaticInfographicDefaultStyles(this.theme||this.themeContext);n.set(this.domNode,"backgroundColor",e.style.backgroundColor||o&&o.backgroundColor),n.set(this.domNode,{width:e.style.width+"px",height:e.style.height+"px"}),this._preRender(),this._renderHeader(),this._renderVariableTables(),this._sections.forEach(function(e){e.setViewMode(i.isEditMode?"edit":"previewValues")})}},_infographicViewController:null,_preRender:function(){this._infographicViewController=new f;var i=this._currentInfographicJson.variableTables.filter(w);this._infographicViewController.setVariableTables(i)},_renderHeader:function(){var i=this._currentInfographicJson.header;this._createSection(p.getTableWidth(i),p.getTableHeight(i),[i],i.style,null,-1)},_renderVariableTables:function(){var i=this;this._currentInfographicJson.variableTables.forEach(function(e,t){var o=d.variableTableToNormalTables(e);i._createSection(e.style.width,e.style.height,o.tableJsons,e.style,e,t,o)})},_prepareSectionCreationParams:function(i,e){return null},_createSection:function(i,t,o,s,r,a,h){var l={};l["class"]="infographicContainer_Section",l.initialWidth=i,l.json={type:m.DETAILS,stack:o},l.viewModel=this.viewModel,l.themeContext=this.themeContext,l.theme=this.theme,l.tableClass="infographicContainerTable",l.hasFixedLayout=!1,l.isInfographicSection=!0,l.infographicViewController=w(r)&&this._infographicViewController,e.mixin(l,this._prepareSectionCreationParams(r,-1===a));var d=this.viewModel.layoutBuilder.createElement("section",l,this.mainViewDiv);return d.setResizedHeight(t),n.set(d.domNode,{position:"absolute",left:(s.left||0)+"px",top:(s.spaceBefore||s.top||0)+"px"}),this._sections.push(d),this.viewModel.dynamicReportInfo&&"US"===this.viewModel.dynamicReportInfo.infographicOptions.countryID&&!this.viewModel.dynamicReportInfo.isFixedDataMode&&h&&this._addDataDrillingHandlers(d,d.getTables()[h.variableIndex]),d},_mode:null,_setViewMode:function(i,e){function o(){i==a.VIEW_MAIN?(u.show(s.mainViewDiv),u.hide(s.dataDrillingViewDiv)):(u.show(s.dataDrillingViewDiv),u.hide(s.mainViewDiv)),s._mode=i,t[i==a.VIEW_DATA_DRILLING?"add":"remove"](s.domNode,"isDrillingData"),t.remove(s.domNode,"isShowingAnimation")}var s=this;if(this._mode!=i){if(t.add(this.domNode,"isShowingAnimation"),!e)return void o();u.show([this.mainViewDiv,this.dataDrillingViewDiv]);var r=i==a.VIEW_DATA_DRILLING,h=n.get(this.domNode,"width");return g.animateProperty({obj:this.mainViewDiv.style,duration:v,properties:{left:{start:r?0:-h,end:r?-h:0,addPx:!0},right:{start:r?0:h,end:r?h:0,addPx:!0}},endFunction:function(){o()}}),g.animateProperty({obj:this.dataDrillingViewDiv.style,duration:v,properties:{left:{start:r?h:0,end:r?0:h,addPx:!0},right:{start:r?-h:0,end:r?0:-h,addPx:!0}}}).promise}},getVisualState:function(){return{dataDrilling:this._mode==a.VIEW_DATA_DRILLING?this._getDataDrillingState():null}},setVisualState:function(i){i&&i.dataDrilling&&this._setDataDrillingState(i.dataDrilling)},_applyThemeToJson:function(i){var e=this.viewModel.getStaticInfographicDefaultStyles(this.theme||this.themeContext);return c.applyThemeSettingsToJson(i,e)},_undoThemeFromJson:function(i){return i},width:null,height:null,resize:function(i,e){this.width&&this.height&&this._currentInfographicJson&&this._currentInfographicJson.style.width==i&&this._currentInfographicJson.style.height==e||(this.width=i,this.height=e,this.invoke("_doResize",50))},_doResize:function(){this._doUpdateInfographic()},toJson:function(){var i=e.clone(this._currentInfographicJson);return this._undoThemeFromJson(i)},destroy:function(){this._destroySections(),this.inherited(arguments)}})});