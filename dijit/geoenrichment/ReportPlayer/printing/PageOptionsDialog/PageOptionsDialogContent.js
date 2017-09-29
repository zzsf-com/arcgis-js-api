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

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/TriStateItem","esri/dijit/geoenrichment/utils/DomUtil","dijit/form/Select","dijit/form/RadioButton","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/printing/PageSizeUtil","esri/dijit/geoenrichment/ReportPlayer/dataProviders/commands/supportClasses/PlayerCommands","dojo/text!./templates/PageOptionsDialogContent.html","dojo/i18n!../../../../../nls/jsapi"],function(e,t,i,o,a,n,s,c,r,d,h,l,u,p,g,S,m,x){x=x.geoenrichment.dijit.ReportPlayer.PageOptionsDialog;var k={};return k[S.HTML]=x.createHTMLLabel,k[S.IMAGE]=x.createImageLabel,k[S.PDF]=x.createPDFLabel,k[S.PRINT]=x.printLabel,k[S.DYNAMIC_HTML]=x.createDynamicHTMLLabel,e([c,r],{templateString:m,nls:x,exportSelect:null,sizeList:null,autoScaleCheckbox:null,addHeaderCheckbox:null,addDataSourceCheckbox:null,addFooterCheckbox:null,postCreate:function(){var e=this;this.inherited(arguments),i(this.exportButton,"click",function(){e.onPrint()}),i(this.cancelButton,"click",function(){e.onCancel()})},_currentSettings:null,update:function(e){this._currentSettings=e,this._configureExportOptions(e),this._configureAutoScale(e),this._configurePageSize(e),this._configureHeaderAndFooter(e),this._syncExportButtonName(e)},_configureExportOptions:function(e){var t=this;if(h.hide(this.exportOptionsBlock),e.exportCommands&&(h.show(this.exportOptionsBlock),!this.exportSelect)){var i=e.exportCommands.map(function(e){return{label:e.label,value:e.id}});this.exportSelect=new l({"class":"exportSelect",options:i,value:e.commandId||i[0],onChange:function(){t._syncExportButtonName()},focus:function(){}}).placeAt(this.exportSelectDiv),this.own(this.exportSelect)}},_syncExportButtonName:function(e){this.exportButton.innerHTML=k[this.exportSelect?this.exportSelect.get("value"):e.commandId]},_configureAutoScale:function(e){h.hide(this.autoScaleBlock),e.needAutoScale&&(h.show(this.autoScaleBlock),this.autoScaleCheckbox||(this.autoScaleCheckbox=new d(this.autoScaleLabel),this.autoScaleCheckbox.set("checked",!0)))},_configureHeaderAndFooter:function(e){h.hide(this.headerFooterBlock),e.canAddHeaderAndFooter&&(h.show(this.headerFooterBlock),this.addHeaderCheckbox||(this.addHeaderCheckbox=new d(this.headerLabel),this.addDataSourceCheckbox=new d(this.dataSourceLabel),this.addFooterCheckbox=new d(this.footerLabel)))},_configurePageSize:function(e){if(h.hide(this.layoutBlock),e.showLayoutOptions&&(h.show(this.layoutBlock),!this.sizeList)){var t,i=!p.hasStandardSize(e.currentPageSettings.pagesize);if(i){var a=p.getPageDim(e.currentPageSettings.pagesize,e.currentPageSettings.orientation,{places:2});t=o.substitute(x.customWithDimensions,{w:a.w,h:a.h})}this.sizeList=new l({"class":"sizeList",options:g.getSupportedPageSizes(i,t),value:i?"custom":e.currentPageSettings.pagesize,focus:function(){}}).placeAt(this.sizeListDiv),this.own(this.sizeList),this.portraitButton=new u({checked:"portrait"==e.currentPageSettings.orientation,name:this.id}).placeAt(this.portraitRadioButtonDiv),this.portraitButton.startup(),this.landscapeButton=new u({checked:"landscape"==e.currentPageSettings.orientation,name:this.id}).placeAt(this.landscapeRadioButtonDiv),this.landscapeButton.startup()}},getSettings:function(){var e=t.mixin({},this._currentSettings.currentPageSettings);return this.sizeList&&"custom"!=this.sizeList.get("value")&&(e.orientation=this.portraitButton.get("checked")?"portrait":"landscape",e.pagesize=this.sizeList.get("value")),{needAutoScale:this.autoScaleCheckbox&&this.autoScaleCheckbox.get("checked"),addHeader:this.addHeaderCheckbox&&this.addHeaderCheckbox.get("checked"),addDataSource:this.addDataSourceCheckbox&&this.addDataSourceCheckbox.get("checked"),addFooter:this.addFooterCheckbox&&this.addFooterCheckbox.get("checked"),pageSettings:e,commandId:this.exportSelect&&this.exportSelect.get("value")}},onPrint:function(){},onCancel:function(){}})});