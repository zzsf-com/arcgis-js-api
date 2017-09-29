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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Color","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/NodeList","dojo/NodeList-dom","dojo/_base/fx","dojo/fx/easing","dojo/Evented","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ToggleButton","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dijit/ConfirmDialog","dojox/mvc/at","dgrid1/OnDemandGrid","dgrid1/Tree","dgrid1/Editor","dgrid1/Keyboard","dgrid1/Selection","dgrid1/Selector","dgrid1/extensions/ColumnResizer","dgrid1/extensions/DijitRegistry","../../kernel","../../lang","../../geometry/Extent","../../SpatialReference","../../layers/ArcGISImageServiceLayer","./_Widget","./utils","./SettingsViewModel","./JobsList","dojo/i18n!../../nls/jsapi","dojo/text!./templates/Settings.html"],function(e,t,s,i,l,o,a,h,n,d,c,r,u,w,S,_,p,v,R,M,g,y,C,m,f,b,x,E,k,I,L,O,D,P,j,z,A,N,F,V,U,T,H,B,J,Y,X,G,q,W,K,Q,Z,$,ee,te){var se=t([N,U,T,H,V,F,B,J]),ie=K.createSubclass([g,y,C,m],{declaredClass:"esri.dijit.analysis.Settings",templateString:te,widgetsInTemplate:!0,i18n:null,toolName:"Settings",helpFileName:"AnalysisEnvironments",viewModelType:Z,cssClass:{primaryButton:"btn calcite blue",button:"btn calcite"},constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode),this.cssClass=s.mixin({},this.cssClass)},destroy:function(){this.inherited(arguments),i.forEach(this._pbConnects,l.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),this.i18n={},s.mixin(this.i18n,ee.common),s.mixin(this.i18n,ee.analysisSettings),this._initModelWatchers()},postCreate:function(){this.inherited(arguments),this.viewModel.showOkCancel&&(this._state={}),this.initUI()},startup:function(){this._spatialRefGrid.startup()},initUI:function(){this._rasterUX=[this._snapLblRow,this._snapSelRow,this._rasterLblRow,this._cellLblRow,this._cellSelectRow,this._cellSelectNumRow,this._maskLblRow,this._maskSelRow],this._extentUX=[this._processExtLblRow,this._extentLblRow,this._extentRow],this._coordSysUX=[this._processSRRow,this._processSRLblRow,this._outSRLblRow,this._outSRRow,this._coordinateLblRow],this._geoanalyticsUX=[this._geoanalyticsLblRow,this._datastoreLabelRow,this._selectDataStore],Q.initHelpLinks(this.domNode,this.viewModel.showHelp),Q.updateDisplay(this._rasterUX,this.viewModel.showRasterSettings,"table-row"),Q.updateDisplay([this._overwriteRow],this.viewModel.showOverwriteResultOption,"table-row"),Q.updateDisplay([this._closeAnalysisRow],this.viewModel.showCloseAnalysisOption,"table-row"),Q.updateDisplay([this._storeAnalysisRow],this.viewModel.showStoreAnalysisOption,"table-row"),Q.updateDisplay(this._coordSysUX,this.viewModel.showCoordinateSystems,"table-row"),Q.updateDisplay([this._processSRRow,this._processSRLblRow],this.viewModel.showProcessSR,"table-row"),Q.updateDisplay([this._outSRLblRow,this._outSRRow],this.viewModel.showOutSR,"table-row"),Q.updateDisplay([this._coordinateLblRow],this.viewModel.showProcessSR||this.viewModel.showProcessSR,"table-row"),Q.updateDisplay(this._extentUX,this.viewModel.showExtent,"table-row"),Q.updateDisplay([this._closeDiv],this.viewModel.showCloseIcon,"block"),Q.updateDisplay([this._settingsHeader],this.viewModel.showHeader,"block"),Q.updateDisplay([this._actionbuttonCtr],this.viewModel.showOkCancel,"block"),Q.updateDisplay(this._geoanalyticsUX,this.viewModel.showGeoAnalyticsSettings,"table-row"),this._spatialRefGrid||(this._spatialRefGrid=new se({collection:this.viewModel.spatialRefStore,id:this.id+"_settingsgrid",showHeader:!1,columns:[{renderExpando:!0,label:"Name",field:"name",sortable:!1,resizable:!0}],"class":"esriAnalysisSpatialRefTree"},this._spatialRefGridNode),w(".dijitButton",this._coordDialog.domNode).forEach(function(e,t){0===t?S.add(e,this.cssClass.primaryButton):S.add(e,this.cssClass.button)},this)),this.viewModel.outSR&&this._outSRInput.set("value",this.viewModel.outSR.wkid),this.viewModel.processSR&&this._processSRInput.set("value",this.viewModel.processSR.wkid),this.viewModel.layers&&this._updateLayerOptions(this.viewModel.layers),this._updateProcessSRSelectValue(),this._handleProcessSRSelectChange(this._processSRSelect.get("value")),this._updateOutSRSelectValue(),this._handleSRSelectChange(this._outSRSelect.get("value")),this._updateExtentSelectValue(),this._handleExtentOptionChange(this._extentSelect.get("value")),this._updateCellSizeSelectValue(),this._handleCellSizeSelectChange(this._cellSizeSelect.get("value")),this._updateSnapRasterSelectValue(),this._handleSnapRasterSelectChange(this._snapRasterSelect.get("value")),this._updateMaskSelectValue(),this._handleMaskSelectChange(this._maskSelect.get("value")),this.viewModel.get("datastore")&&this._datastoreSelect.set("value",this.viewModel.datastore),this._closeAnalysisCheck.set("checked",this.viewModel.closeAnalysisWidget),this._storeAnalysisCheck.set("checked",!this.viewModel.returnFeatureCollection),this.viewModel.showJobsHistory&&this.buildJobsUI()},_initModelWatchers:function(){this.own(this.viewModel.watch("showCloseIcon",s.hitch(this,function(e,t,s){Q.updateDisplay([this._closeDiv],s,"block")})),this.viewModel.watch("showHelp",s.hitch(this,function(e,t,s){Q.initHelpLinks(this.domNode,s)})),this.viewModel.watch("showOverwriteResultOption",s.hitch(this,function(e,t,s){Q.updateDisplay([this._overwriteRow],s,"table-row")})),this.viewModel.watch("showCloseAnalysisOption",s.hitch(this,function(e,t,s){Q.updateDisplay([this._closeAnalysisRow],s,"table-row")})),this.viewModel.watch("showStoreAnalysisOption",s.hitch(this,function(e,t,s){Q.updateDisplay([this._storeAnalysisRow],s,"table-row")})),this.viewModel.watch("showCoordinateSystems",s.hitch(this,function(e,t,s){Q.updateDisplay(this._coordSysUX,s,"table-row")})),this.viewModel.watch("showProcessSR",s.hitch(this,function(e,t,s){Q.updateDisplay([this._processSRRow,this._processSRLblRow],s,"table-row"),Q.updateDisplay([this._coordinateLblRow],s||this.viewModel.showOutSR,"table-row"),this._updateProcessSRSelectValue(),this._handleProcessSRSelectChange(this._processSRSelect.get("value"))})),this.viewModel.watch("showOutSR",s.hitch(this,function(e,t,s){Q.updateDisplay([this._outSRLblRow,this._outSRRow],s,"table-row"),Q.updateDisplay([this._coordinateLblRow],s||this.viewModel.showProcessSR,"table-row"),this._updateOutSRSelectValue(),this._handleSRSelectChange(this._outSRSelect.get("value"))})),this.viewModel.watch("showExtent",s.hitch(this,function(e,t,s){Q.updateDisplay(this._extentUX,s,"table-row"),this._updateExtentSelectValue(),s&&this._handleExtentOptionChange(this._extentSelect.get("value"))})),this.viewModel.watch("showRasterSettings",s.hitch(this,function(e,t,s){Q.updateDisplay(this._rasterUX,s,"table-row"),this._updateCellSizeSelectValue(),this._handleCellSizeSelectChange(this._cellSizeSelect.get("value")),this._updateSnapRasterSelectValue(),this._handleSnapRasterSelectChange(this._snapRasterSelect.get("value")),this._updateMaskSelectValue(),this._handleMaskSelectChange(this._maskSelect.get("value"))})),this.viewModel.watch("layers",s.hitch(this,function(e,t,s){this._updateLayerOptions(this.viewModel.layers)})),this.viewModel.watch("showHeader",s.hitch(this,function(e,t,s){Q.updateDisplay([this._settingsHeader],s,"block")})),this.viewModel.watch("showOkCancel",s.hitch(this,function(e,t,s){Q.updateDisplay([this._actionbuttonCtr],s,"block")})),this.viewModel.watch("showGeoAnalyticsSettings",s.hitch(this,function(e,t,s){Q.updateDisplay(this._geoanalyticsUX,s,"table-row")})),this.viewModel.watch("isCustomProcessSR",s.hitch(this,function(){this._updateProcessSRSelectValue(),this._handleProcessSRSelectChange(this._processSRSelect.get("value"))})),this.viewModel.watch("isCustomExtent",s.hitch(this,function(){this._updateExtentSelectValue(),this._handleExtentOptionChange(this._extentSelect.get("value"))})),this.viewModel.watch("isCustomOutSR",s.hitch(this,function(){this._updateOutSRSelectValue(),this._handleSRSelectChange(this._outSRSelect.get("value"))})),this.viewModel.watch("closeAnalysisWidget",s.hitch(this,function(e,t,s){this._handleCloseAnalysisCheck(s)})),this.viewModel.watch("returnFeatureCollection",s.hitch(this,function(e,t,s){this._handleReturnFeatureCollectionCheck(s)})),this.viewModel.watch("showJobsHistory",s.hitch(this,this.buildJobsUI)),this.viewModel.watch("jobsViewModel",s.hitch(this,this.buildJobsUI)))},buildJobsUI:function(){Q.updateDisplay([this._settingsNavCtrl],this.viewModel.showJobsHistory,"block"),S.toggle(this._form.domNode,"tab-contents tab-section is-active",this.viewModel.showJobsHistory),S.toggle(this._jobHistoryCtr,"tab-contents tab-section",this.viewModel.showJobsHistory),S.toggle(this.domNode,"esri-analysis-category",this.viewModel.showJobsHistory),this.viewModel.showJobsHistory&&(this._addTabHandlers||(w(".tab-nav a",this.domNode).on("click",s.hitch(this,function(e){e.stopPropagation(),w(".tab-title",this.domNode).removeClass("is-active"),S.add(e.target,"is-active");var t=S.contains(e.target,"general-tab");Q.updateDisplay([this._form.domNode],t,"block"),Q.updateDisplay([this._jobHistoryCtr],!t,"block")})),this._addTabHandlers=!0),this.buildJobsList())},buildJobsList:function(){this.viewModel.jobsViewModel&&(this._jobsListWidget||(this._jobsListWidget=new $({viewModel:this.viewModel.jobsViewModel},this._jobsListDiv)))},_updateExtentSelectValue:function(){var e;this.viewModel.get("isCustomExtent")?this._extentSelect.set("value","SPECIFIED"):this.viewModel.viewProps&&this.viewModel.viewProps.extentLayer&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.extentLayer.name),this._extentSelect.set("value","LAYER_"+e)):this._extentSelect.set("value","DEFAULT"),this.viewModel.get("isCustomExtent")&&this.viewModel.extent&&(this._xMinInput.set("value",this.viewModel.extent.xmin),this._xMaxInput.set("value",this.viewModel.extent.xmax),this._yMinInput.set("value",this.viewModel.extent.ymin),this._yMaxInput.set("value",this.viewModel.extent.ymax))},_updateProcessSRSelectValue:function(){var e;this.viewModel.processSR&&this.viewModel.get("isCustomProcessSR")&&this._processSRInput.set("value",this.viewModel.processSR.wkid),this.viewModel.get("isCustomProcessSR")?this._processSRSelect.set("value","SPECIFIED"):this.viewModel.viewProps&&this.viewModel.viewProps.pSRLayer&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.pSRLayer.name),this._processSRSelect.set("value","LAYER_"+e)):this._processSRSelect.set("value","DEFAULT")},_updateOutSRSelectValue:function(){var e;this.viewModel.outSR&&this.viewModel.get("isCustomOutSR")&&this._outSRInput.set("value",this.viewModel.outSR.wkid),this.viewModel.get("isCustomOutSR")?this._outSRSelect.set("value","SPECIFIED"):this.viewModel.viewProps&&this.viewModel.viewProps.outSRLayer&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.outSRLayer.name),this._outSRSelect.set("value","LAYER_"+e)):this._outSRSelect.set("value","DEFAULT")},_updateCellSizeSelectValue:function(){var e;this.viewModel.get("isCustomCellSize")?this._cellSizeSelect.set("value","SPECIFIED"):this.viewModel.viewProps&&this.viewModel.viewProps.cellSizeLayer&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.cellSizeLayer.name),this._cellSizeSelect.set("value","LAYER_"+e)):this.viewModel.cellSize?this._cellSizeSelect.set("value",this.viewModel.cellSize):this._cellSizeSelect.set("value",this._cellSizeSelect.get("value")),this.viewModel.get("isCustomCellSize")&&this.viewModel.cellSize&&this._cellSizeInput.set("value",this.viewModel.cellSize)},_updateSnapRasterSelectValue:function(){var e;this.viewModel.viewProps&&this.viewModel.viewProps.snapRasterLayer&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.snapRasterLayer.name),this._snapRasterSelect.set("value","LAYER_"+this._layerNames[e])):this._snapRasterSelect.set("value",this._snapRasterSelect.get("value"))},_updateMaskSelectValue:function(){var e;this.viewModel.viewProps&&this.viewModel.viewProps.maskLayer&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.maskLayer.name),this._maskSelect.set("value","LAYER_"+e)):this._maskSelect.set("value",this._maskSelect.get("value"))},_handleSRSelectChange:function(e){var t,s;this._coordDialog.hide(),this._outSRBtn.set("disabled","SPECIFIED"!==e),Q.updateDisplay(this._outSRCustomRow,"SPECIFIED"===e&&this.viewModel.showOutSR,"table-row"),Q.updateDisplay(this._outSRCustomInputRow,"SPECIFIED"===e&&this.viewModel.showOutSR,"table-row"),this._outSRInput.set("required","SPECIFIED"===e),-1!==e.indexOf("LAYER_")&&(t=e.split("_")[1],s=this.viewModel.layers[t],this.viewModel.showOkCancel?(this._outSR={wkid:parseInt(s.fullExtent.spatialReference.wkid,10)},this._state.outSRLayer={name:s.name,url:s.url,fullExtent:s.fullExtent}):this.viewModel.set("outSR",{wkid:parseInt(s.fullExtent.spatialReference.wkid,10)}))},_handleProcessSRSelectChange:function(e){var t,s;this._coordDialog.hide(),this._processSRBtn.set("disabled","SPECIFIED"!==e),Q.updateDisplay(this._processSRCustomRow,"SPECIFIED"===e&&this.viewModel.showProcessSR,"table-row"),Q.updateDisplay(this._processSRCustomInputRow,"SPECIFIED"===e&&this.viewModel.showProcessSR,"table-row"),this._processSRInput.set("required","SPECIFIED"===e),-1!==e.indexOf("LAYER_")&&(t=e.split("_")[1],s=this.viewModel.layers[t],this.viewModel.showOkCancel?(this._processSR={wkid:parseInt(s.fullExtent.spatialReference.wkid,10)},this._state.pSRLayer={name:s.name,url:s.url,fullExtent:s.fullExtent}):this.viewModel.set("processSR",{wkid:parseInt(s.fullExtent.spatialReference.wkid,10)}))},_handleOutSRBtnClick:function(){this._outSRClick=!0,this._coordDialog.show()},_handleProcessSRBtnClick:function(){this._outSRClick=!1,this._coordDialog.show()},_handleExtentOptionChange:function(e){var t,s,i,l="SPECIFIED"===e;Q.updateDisplay([this._extentLbl,this._customExtentRow],this.viewModel.showExtent&&l,"table-row"),this._xMinInput.set("required",l),this._xMaxInput.set("required",l),this._yMinInput.set("required",l),this._yMaxInput.set("required",l),-1!==e.indexOf("LAYER_")?(t=e.split("_")[1],s=this.viewModel.layers[t],i=new G(s.fullExtent),this.viewModel.showOkCancel?(this._extent=i.shiftCentralMeridian(),this._state.extentLayer={name:s.name,url:s.url,fullExtent:s.fullExtent}):this.viewModel.set("extent",i.shiftCentralMeridian())):"SPECIFIED"===e?(i=new G(this._xMinInput.get("value"),this._yMinInput.get("value"),this._xMaxInput.get("value"),this._yMaxInput.get("value"),new q({wkid:102100})),this.viewModel.showOkCancel?(this._extent=i,this._state.extentLayer=null):this.viewModel.set("extent",i)):"DEFAULT"===e&&(this._extent=null,this._state.extentLayer=null)},_handleSRDlgOk:function(){var e,t,s;for(var i in this._spatialRefGrid.get("selection"))this._spatialRefGrid.get("selection").hasOwnProperty(i)&&(e=i);t=this._spatialRefGrid.collection.getSync(e),s=t.sRef.wkid,this.viewModel.showOkCancel?this._outSRClick?this._outSR={wkid:parseInt(s,10)}:this._processSR={wkid:parseInt(s,10)}:this.viewModel.set(this._outSRClick?"outSR":"processSR",{wkid:parseInt(s,10)}),this._outSRClick?this._outSRInput.textbox.value=s:this._processSRInput.textbox.value=s,this._outSRClick?r.set(this._outSRLabel,"innerHTML",t.name):r.set(this._processSRLabel,"innerHTML",t.name)},_handleSRDlgCancel:function(){},_handleOutSRInputChange:function(e){e&&(r.set(this._outSRLabel,"innerHTML",""),Q.updateDisplay([this._outSRLabel],!1,"inline"),this.viewModel.showOkCancel?(this._outSR={wkid:parseInt(e,10)},this._state.outSRLayer=null):this.viewModel.set("outSR",{wkid:parseInt(e,10)}))},_handleProcessSRInputChange:function(e){e&&(r.set(this._processSRLabel,"innerHTML",""),Q.updateDisplay([this._processSRLabel],!1,"inline"),this.viewModel.showOkCancel?(this._processSR={wkid:parseInt(e,10)},this._state.pSRLayer=null):this.viewModel.set("processSR",{wkid:parseInt(e,10)}))},_handleCellSizeSelectChange:function(e){var t;Q.updateDisplay([this._cellSelectNumRow],"SPECIFIED"===e&&this.viewModel.showRasterSettings,"table-row"),-1!==e.indexOf("LAYER_")?(t=this._cellSizeSelect.getOptions(e),this.viewModel.showOkCancel?(this._cellSize={url:t.url},this._state.cellSizeLayer={name:t.label.substring("Layer ".length),url:t.url,fullExtent:t.fullExtent}):this.viewModel.set("cellSize",{url:t.url})):"SPECIFIED"===e?this.viewModel.showOkCancel?(this._cellSize=this._cellSizeInput.get("value"),this._state.cellSizeLayer=null):this.viewModel.set("cellSize",this._cellSizeInput.get("value")):this.viewModel.showOkCancel?(this._cellSize=e,this._state.cellSizeLayer=null):this.viewModel.set("cellSize",e)},_handleSnapRasterSelectChange:function(e){var t;-1!==e.indexOf("LAYER_")?(t=this._snapRasterSelect.getOptions(e),this.viewModel.showOkCancel?(this._snapRaster={url:t.url},this._state.snapRasterLayer={name:t.label.substring("Layer ".length),url:t.url,fullExtent:t.fullExtent}):this.viewModel.set("snapRaster",{url:t.url})):this.viewModel.showOkCancel?(this._snapRaster="NONE"===e?void 0:e,this._state.snapRasterLayer=null):this.viewModel.set("snapRaster","NONE"===e?void 0:e)},_handleMaskSelectChange:function(e){var t;-1!==e.indexOf("LAYER_")?(t=this._maskSelect.getOptions(e),this.viewModel.showOkCancel?(this._mask={url:t.url},this._state.maskLayer={name:t.label.substring("Layer ".length),url:t.url,fullExtent:t.fullExtent}):this.viewModel.set("mask",{url:t.url})):this.viewModel.showOkCancel?(this._mask="NONE"===e?void 0:e,this._state.maskLayer=null):this.viewModel.set("mask","NONE"===e?void 0:e)},_handleCellSizeInputChange:function(e){e&&"SPECIFIED"===this._cellSizeSelect.get("value")&&(this.viewModel.showOkCancel?this._cellSize=e:this.viewModel.set("cellSize",e))},_handleDSSelectChange:function(e){this.viewModel.showOkCancel||this.viewModel.set("datastore",e)},_updateLayerOptions:function(e){var t,s,l,o,a=i.map(e,function(e,t){return{value:"LAYER_"+t,label:"Layer "+e.name,url:e.url,fullExtent:e.fullExtent}}),h=[{value:"minof",label:this.i18n.minInputs},{value:"maxof",label:this.i18n.maxInputs,selected:!0},{value:"SPECIFIED",label:this.i18n.extentSpecfiedBelow}],n=[{value:"DEFAULT",label:this.i18n.defaultLabel},{value:"SPECIFIED",label:this.i18n.extentSpecfiedBelow}],d=[{value:"DEFAULT",label:this.i18n.defaultExtentLabel},{value:"SPECIFIED",label:this.i18n.extentSpecfiedBelow}];l=[].concat(d).concat(a),o=[].concat(n).concat(a),t=i.filter(e,function(e){return e instanceof W}),s=[].concat(i.map(t,function(e,t){return{value:"LAYER_"+e.name,label:"Layer "+e.name,url:e.url,fullExtent:e.fullExtent}},this)),this._layerNames=i.map(e,function(e,t){return e.name}),this._outSRSelect.removeOption(this._outSRSelect.getOptions()),this._processSRSelect.removeOption(this._processSRSelect.getOptions()),this._extentSelect.removeOption(this._extentSelect.getOptions()),this._maskSelect.removeOption(this._maskSelect.getOptions()),this._cellSizeSelect.removeOption(this._cellSizeSelect.getOptions()),this._snapRasterSelect.removeOption(this._snapRasterSelect.getOptions()),this._outSRSelect.addOption(l),this._processSRSelect.addOption(l),this._extentSelect.addOption(o),this._maskSelect.addOption([{value:"NONE",label:""}].concat(a)),this._cellSizeSelect.addOption([].concat(h).concat(a)),this._snapRasterSelect.addOption([{value:"NONE",label:""}].concat(s)),this._updateExtentSelectValue(),this._updateOutSRSelectValue(),this._updateProcessSRSelectValue(),this._updateCellSizeSelectValue(),this._updateSnapRasterSelectValue(),this._updateMaskSelectValue()},_handleCloseAnalysisCheck:function(e){this.viewModel.showOkCancel||this.viewModel.set("closeAnalysisWidget",e)},_handleReturnFeatureCollectionCheck:function(e){this.viewModel.showOkCancel||this.viewModel.set("returnFeatureCollection",!e)},_handleOkButtonClick:function(e){e&&e.preventDefault(),this._form.validate()&&(this.viewModel.set("viewProps",this._state),"DEFAULT"!==this._outSRSelect.get("value")?this.viewModel.set("outSR",this._outSR):"DEFAULT"===this._outSRSelect.get("value")&&this.viewModel.set("outSR",null),"DEFAULT"!==this._processSRSelect.get("value")?this.viewModel.set("processSR",this._processSR):"DEFAULT"===this._processSRSelect.get("value")&&this.viewModel.set("processSR",null),"SPECIFIED"===this._extentSelect.get("value")&&(this._extent=new G(this._xMinInput.get("value"),this._yMinInput.get("value"),this._xMaxInput.get("value"),this._yMaxInput.get("value"),new q({wkid:102100}))),this.viewModel.set("extent",this._extent),this.viewModel.set("mask",this._mask),this.viewModel.set("snapRaster",this._snapRaster),this.viewModel.set("cellSize",this._cellSize),this.viewModel.set("datastore",this._datastoreSelect.get("value")),this.viewModel.set("closeAnalysisWidget",this._closeAnalysisCheck.get("checked")),this.viewModel.set("returnFeatureCollection",!this._storeAnalysisCheck.get("checked")),this.viewModel.set("isCustomExtent","SPECIFIED"===this._extentSelect.get("value")),this.viewModel.set("isCustomOutSR","SPECIFIED"===this._outSRSelect.get("value")),this.viewModel.set("isCustomProcessSR","SPECIFIED"===this._processSRSelect.get("value")),this.viewModel.set("isCustomCellSize","SPECIFIED"===this._cellSizeSelect.get("value")),this.viewModel.save(),this.emit("ok-settings",{viewMode:this.viewModel}))},_handleCancelButtonClick:function(){this.viewModel.reset(),this.reset(),this.emit("cancel-settings",{viewMode:this.viewModel})},reset:function(){this.initUI()},_showMessages:function(e){r.set(this._bodyNode,"innerHTML",e),v.fadeIn({node:this._errorMessagePane,easing:R.quadIn,onEnd:s.hitch(this,function(){c.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(e){e&&e.preventDefault(),v.fadeOut({node:this._errorMessagePane,easing:R.quadOut,onEnd:s.hitch(this,function(){c.set(this._errorMessagePane,{display:"none"})})}).play()}});return h("extend-esri")&&s.setObject("dijit.analysis.Settings",ie,Y),ie});