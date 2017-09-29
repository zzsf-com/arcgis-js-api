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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/RadioButton","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./CreditEstimator","./utils","dojo/i18n!../../nls/jsapi","dojo/text!./templates/MergeLayers.html"],function(e,t,s,i,r,a,n,o,l,h,d,u,c,y,g,m,p,_,L,v,f,b,w,S,M,A,x,F,I,N,R,j,C,T,O,P,k,B,E){var q=t([p,_,L,v,f,O,T],{declaredClass:"esri.dijit.analysis.MergeLayers",templateString:E,widgetsInTemplate:!0,inputLayer:null,mergeLayers:null,mergingAttributes:null,outputLayerName:null,i18n:null,toolName:"MergeLayers",helpFileName:"MergeLayers",resultParameter:"MergedLayer",constructor:function(e){this._pbConnects=[],this._mergeFieldsRows=[],this._includedMergeFields=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),i.forEach(this._pbConnects,r.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,B.mergeLayers)},postCreate:function(){this.inherited(arguments),g.add(this._form.domNode,"esriSimpleForm"),this.set("showReadyToUseLayers",!1),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_handleShowCreditsClick:function(e){if(e.preventDefault(),this._form.validate()){var t,i={};t=this.mergeLayers[this._mergeLayersSelect.get("value")],i.inputLayer=a.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),i.mergeLayer=a.toJson(this.constructAnalysisInputLyrObj(t)),i.mergingAttributes=a.toJson(this.get("mergingAttributes")),this.returnFeatureCollection||(i.OutputName=a.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(i.context=a.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,i).then(s.hitch(this,function(e){this._usageForm.set("content",e),this._usageDialog.show()}))}},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var e,t,s={},i={};e=this.mergeLayers[this._mergeLayersSelect.get("value")],s.inputLayer=a.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),s.mergeLayer=a.toJson(this.constructAnalysisInputLyrObj(e)),s.mergingAttributes=a.toJson(this.get("mergingAttributes")),this.returnFeatureCollection||(s.OutputName=a.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(s.context=a.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(t={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),s.context=a.toJson(t)),i.jobParams=s,i.itemParams={description:this.i18n.itemDescription,tags:h.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(i.itemParams.folder=this.get("folderId")),this.execute(i)}},_handleLayerChange:function(e){if("browse"===e){var t=this._browsedlg.browseItems.get("query");this.inputLayer&&("Point"===this.inputLayer.geometryType?t.custom=['tags:"point"']:"Polyline"===this.inputLayer.geometryType?t.custom=['tags:"line"']:"Polygon"===this.inputLayer.geometryType&&(t.custom=['tags:"polygon"'])),this._browsedlg.browseItems.set("query",t),this._isAnalysisSelect=!1,this._browsedlg.show()}else"browselayers"===e?(this.showGeoAnalyticsParams&&(t=this._browseLyrsdlg.browseItems.get("query"),t.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",t)),this.inputLayer&&("Point"===this.inputLayer.geometryType?this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint"]:"Polyline"===this.inputLayer.geometryType?this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPolyline"]:"Polygon"===this.inputLayer.geometryType&&(this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPolygon"])),this._isAnalysisSelect=!1,this._browseLyrsdlg.show()):(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[e].name}),this._outputLayerInput.set("value",this.outputLayerName),this._removeMergeFieldsRows(),this._createMergeFieldsRow())},_handleAttrSelectChange:function(e,t){var i,r,a;if(e&&"0"!==t&&(i=e.get("statisticSelect"),"0"!==i.get("value")&&!i.get("isnewRowAdded")&&null!==this._includedMergeFields&&"0"!==e.get("value"))){this._includedMergeFields.push(e.get("value"));var n=this.mergeLayers[this._mergeLayersSelect.get("value")].fields.length;this._includedMergeFields.length!==n-1&&(r=i.get("removeTd"),d.set(r,"display","block"),a=i.get("referenceWidget"),s.hitch(a,a._createMergeFieldsRow()),i.set("isnewRowAdded",!0))}},_handleAttrMatchSelectChange:function(e,t){if("0"!==t&&"0"!==e.get("value")){var s=this.mergeLayers[this._mergeLayersSelect.get("value")].fields,r=this.inputLayer.fields,a="";i.forEach(s,function(t){t.name===e.get("value")&&(a=t.type)});var n="";i.forEach(r,function(e){e.name===t&&(n=e.type)}),a!==n?-1!==i.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a)&&-1!==i.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],n)?(this._handleCloseMsg(),this.set("disableRunAnalysis",!1)):(this._showMessages(this.i18n.fieldTypeMatchValidationMsg),this.set("disableRunAnalysis",!0)):(this._handleCloseMsg(),this.set("disableRunAnalysis",!1))}},_handleStatsValueUpdate:function(e,t,i,r){var a,n,o,l,h;if(e&&(o=e.get("statisticSelect"),l=e.get("attributeMatchSelect"),h=e.get("attributeRenameBox"),"Rename"===r?(d.set(h.domNode.parentNode,{display:"","padding-left":0,"padding-right":0}),h.domNode.style.display="block",h.set("required",!0),l.domNode.style.display="none",d.set(o.domNode.parentNode,"width","34%"),d.set(e.domNode.parentNode,"width","35%")):"Remove"===r||"0"===r?(h.domNode.style.display="none",h.set("required",!1),l.domNode.style.display="none",d.set(o.domNode.parentNode,"width","44%"),d.set(e.domNode.parentNode,"width","55%"),d.set(h.domNode.parentNode,"display","none")):(d.set(l.domNode.parentNode,{display:"","padding-left":0,"padding-right":0}),h.domNode.style.display="none",h.set("required",!1),l.domNode.style.display="table",d.set(o.domNode.parentNode,"width","34%"),d.set(e.domNode.parentNode,"width","35%")),"0"!==e.get("value")&&"0"!==r&&!o.get("isnewRowAdded")&&null!==this._includedMergeFields&&"0"!==e.get("value"))){this._includedMergeFields.push(e.get("value"));var u=this.mergeLayers[this._mergeLayersSelect.get("value")].fields.length;this._includedMergeFields.length!==u-1&&(a=o.get("removeTd"),d.set(a,"display","block"),n=o.get("referenceWidget"),s.hitch(n,n._createMergeFieldsRow()),o.set("isnewRowAdded",!0))}},_save:function(){},_buildUI:function(){var e=!0;this._loadConnections(),k.initHelpLinks(this.domNode,this.showHelp),d.set(this._showCreditsLink,"display",this.showCredits===!0?"block":"none"),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!k.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),k.populateAnalysisLayers(this,"inputLayer","inputLayers")),this.mergeLayers&&this.mergeLayer&&!k.isLayerInLayers(this.mergeLayer,this.mergeLayers)&&this.mergeLayers.push(this.mergeLayer),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this.inputLayer&&this._updateAnalysisLayerUI(e),k.addReadyToUseLayerOption(this,[this._analysisSelect,this._mergeLayersSelect]),d.set(this._chooseFolderRow,"display",this.showSelectFolder===!0?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,function(e){this.folderStore=e,k.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),d.set(this._chooseExtentDiv,"display",this.showChooseExtent===!0?"inline-block":"none")},_updateAnalysisLayerUI:function(e){var t=[],s=[],r=this._mergeLayersSelect.getOptions();return this.inputLayer&&u.set(this._mergeLayersDescription,"innerHTML",h.substitute(this.i18n.mergeLayersDefine,{layername:this.inputLayer.name})),this.mergeLayers&&(this._mergeLayersSelect.removeOption(r),this.rerun&&!this.mergeLayer&&k.addBlankOption(this._mergeLayersSelect,s),i.forEach(this.mergeLayers,function(e,t){e!==this.inputLayer&&e.geometryType===this.inputLayer.geometryType&&s.push({value:t,label:e.name,selected:this.mergeLayer&&(e.name===this.mergeLayer.name||e.url&&this.mergeLayer.url&&this.mergeLayer.url===e.url)})},this),this._mergeLayersSelect.addOption(s)),0===s.length?(this._showMessages(this.i18n.mergeValidationMsg),void this.set("disableRunAnalysis",!0)):(this.set("disableRunAnalysis",!1),e&&(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[this._mergeLayersSelect.get("value")].name})),this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName),this._removeMergeFieldsRows(),this._createMergeFieldsRow(),i.forEach(this.mergingAttributes,function(e){var s=e.split(" ");-1===t.indexOf(s[0])&&(this._currentAttrSelect.set("value",s[0]),"Rename"===s[1]?this._currentAttrRenameBox.set("value",s[2]):"Match"===s[1]&&this._currentAttrRenameBox.set("value",s[2]),this._currentStatsSelect.set("value",s[1]),t.push(s[0]))},this),void(t.length>0&&(this._includedMergeFields=t)))},_handleAnalysisLayerChange:function(e){if("browse"===e){var t=this._browsedlg.browseItems.get("query");t.custom=[],this._browsedlg.browseItems.set("query",t),this._isAnalysisSelect=!0,this._browsedlg.show()}else"browselayers"===e?(this.showGeoAnalyticsParams&&(t=this._browseLyrsdlg.browseItems.get("query"),t.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",t)),this._browseLyrsdlg.show()):(this.inputLayer=this.inputLayers[e],this.mergingAttributes=[],this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(e){e&&e.selection&&k.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inputLayers:this.mergeLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._mergeLayersSelect,browseDialog:e.dialog||this._browsedlg,widget:this}).always(s.hitch(this,this._updateAnalysisLayerUI,!0))},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1))},_createMergeFieldsRow:function(){var t,i,a,n,o,l,h,d,u,y,g,m,p;return t=c.create("tr",null,this._afterMergeFieldsRow,"before"),i=c.create("table",{"class":"esriFormTable"},t),n=c.create("tbody",null,i),a=c.create("tr",null,n),l=c.create("td",{style:{width:"35%"}},a),o=c.create("td",{style:{width:"34%"}},a),h=c.create("td",{style:{width:"30%"}},a),d=new x({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{overflowX:"hidden",tableLayout:"fixed",width:"100%"}},c.create("select",null,l)),this.set("attributes",{selectWidget:d,layer:this.mergeLayers[this._mergeLayersSelect.get("value")]}),u=new x({"class":"mediumInput statsSelect",style:{overflowX:"hidden",tableLayout:"fixed",width:"100%"}},c.create("select",null,o)),this.set("statistics",{selectWidget:u}),y=new I({maxHeight:200,"class":"longTextInput",style:{overflowX:"hidden",display:"none",tableLayout:"fixed",width:"100%"}},c.create("validationtextbox",null,h)),g=new x({maxHeight:200,"class":"mediumInput attrSelect",style:{overflowX:"hidden",display:"none",tableLayout:"fixed",width:"100%"}},c.create("select",null,h)),this.set("attributes",{selectWidget:g,layer:this.inputLayer}),r.connect(g,"onChange",s.hitch(this,this._handleAttrMatchSelectChange,d)),d.set("statisticSelect",u),d.set("attributeRenameBox",y),d.set("attributeMatchSelect",g),r.connect(d,"onChange",s.hitch(this,this._handleAttrSelectChange,d)),p=c.create("td",{"class":"esriFloatTrailing removeTd",style:{display:"none",width:"1%",maxWidth:"12px"}},a),m=c.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"<img src='"+e.toUrl("./images/close.gif")+"' border='0''/>"},p),r.connect(m,"onclick",s.hitch(this,this._removeMergeFieldsRow,t)),this._mergeFieldsRows.push(t),u.set("attributeSelect",d),u.set("removeTd",p),u.set("isnewRowAdded",!1),u.set("referenceWidget",this),u.watch("value",s.hitch(this,this._handleStatsValueUpdate,d)),this._currentStatsSelect=u,this._currentAttrSelect=d,this._currentAttrMatchSelect=g,this._currentAttrRenameBox=y,!0},_removeMergeFieldsRows:function(){i.forEach(this._mergeFieldsRows,this._removeMergeFieldsRow,this),this._mergeFieldsRows=[],this._includedMergeFields=[]},_removeMergeFieldsRow:function(e){i.forEach(b.findWidgets(e),function(e,t){if(0===t){var s=e,i=this._includedMergeFields.indexOf(s.get("value"));-1!==i&&this._includedMergeFields.splice(i,1)}e.destroyRecursive()},this),c.destroy(e)},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){this.inputLayer=e},_setInputLayersAttr:function(e){this.inputLayers=e||[]},_setMergeLayersAttr:function(e){this.mergeLayers=e||[]},_setAttributesAttr:function(e){if(e.layer){var t,s,r;t=e.layer,s=e.selectWidget,r=t.fields,s.addOption({value:"0",label:this.i18n.attribute}),i.forEach(r,function(e){e.name!==t.objectIdField&&-1===this._includedMergeFields.indexOf(e.name)&&s.addOption({value:e.name,label:e.name})},this)}},_setStatisticsAttr:function(e){var t=e.selectWidget;t.addOption({value:"0",label:this.i18n.operation}),t.addOption({value:"Rename",label:this.i18n.rename}),t.addOption({value:"Remove",label:this.i18n.remove}),t.addOption({value:"Match",label:this.i18n.match})},_setMergingAttributesAttr:function(e){this.mergingAttributes=e},_getMergingAttributesAttr:function(){var e,t,s,i,r="",a=[];return y(".statsSelect",this.domNode).forEach(function(n){e=b.byNode(n),t=e.get("attributeSelect"),s=t.get("attributeMatchSelect"),i=t.get("attributeRenameBox"),"0"!==t.get("value")&&"0"!==e.get("value")&&("Remove"===e.get("value")?(r+=t.get("value")+" "+e.get("value")+";",a.push(t.get("value")+" "+e.get("value"))):"Rename"===e.get("value")?(r+=t.get("value")+" "+e.get("value")+" "+i.get("value")+";",a.push(t.get("value")+" "+e.get("value")+" "+i.get("value"))):(r+=t.get("value")+" "+e.get("value")+" "+s.get("value")+";",a.push(t.get("value")+" "+e.get("value")+" "+s.get("value"))))}),a},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},validateServiceName:function(e){return k.validateServiceName(e,{textInput:this._outputLayerInput})},_connect:function(e,t,s){this._pbConnects.push(r.connect(e,t,s))},_showMessages:function(e){u.set(this._bodyNode,"innerHTML",e),n.fadeIn({node:this._errorMessagePane,easing:m.quadIn,onEnd:s.hitch(this,function(){d.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(e){e&&e.preventDefault(),n.fadeOut({node:this._errorMessagePane,easing:m.quadOut,onEnd:s.hitch(this,function(){d.set(this._errorMessagePane,{display:"none"})})}).play()}});return o("extend-esri")&&s.setObject("dijit.analysis.MergeLayers",q,j),q});