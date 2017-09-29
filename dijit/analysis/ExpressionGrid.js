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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/store/Memory","dojo/store/Observable","dojo/Evented","dojo/_base/event","dojo/window","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/ToggleButton","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/Dialog","dijit/InlineEditBox","dgrid/OnDemandGrid","dgrid/Keyboard","dgrid/Selection","dgrid/selector","dgrid/extensions/DijitRegistry","dgrid/util/mouse","./tree","put-selector/put","../../kernel","../../lang","./ExpressionForm","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ExpressionGrid.html"],function(e,t,s,i,r,n,o,d,a,l,h,p,c,x,u,_,g,y,f,m,L,w,I,v,E,b,S,j,O,A,B,T,C,F,R,M,D,k,W,H,P,G,q,N,U,V,K,z){var J,Q;return J=t([G,M,k,D,H]),Q=t([m,L,w,I,v,g],{declaredClass:"esri.dijit.analysis.ExpressionGrid",templateString:z,widgetsInTemplate:!0,indentWidth:10,refreshOptions:{keepScrollPosition:!0},allowAllInputOperands:!1,_selectedIds:[],constructor:function(e){e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments),this.i18n={},s.mixin(this.i18n,K.common),s.mixin(this.i18n,K.analysisTools),s.mixin(this.i18n,K.analysisMsgCodes),s.mixin(this.i18n,K.expressionGrid)},postCreate:function(){this.inherited(arguments);var e,t=this.data||[{id:0,operator:"",expressionText:""}];this.expressionStore=_(new u({idProperty:"id",allExpressionText:"",data:t,getChildren:function(e){return this.query({parent:e.id})},getAllChildren:function(e){var t,s;return t=this.getChildren(e),t.total>0&&i.forEach(t,function(e){s=this.getAllChildren(e),s.total>0&&i.forEach(s,function(e){t[t.total]=e,t.total=t.total+1},this)},this),t},getExpressions:function(e,t){var s,r,n,o,d;return s=this.getChildren(e),s.total>0?(n=[],o={},o.operator=e.operator,o.layer=e.layer,e.where?o.where=e.where:(o.selectingLayer=e.selectingLayer,o.spatialRel=e.spatialRel,e.distance&&(o.distance=e.distance,o.units=e.units)),-1===this.allExpressionText.indexOf(e.text)&&(this.allExpressionText+=e.operator+" ( "+e.text+" "),n.push(o),i.forEach(s,function(e,t){r=this.getExpressions(e,t===s.total-1?!0:!1),d=this.getChildren(e),d.total>0&&(e._isAdd||(this.allExpressionText+=")"),e._isAdd=!0),n.push(r)},this)):(n={},n.operator=e.operator,n.layer=e.layer,e.where?n.where=e.where:(n.selectingLayer=e.selectingLayer,n.spatialRel=e.spatialRel,e.distance&&(n.distance=e.distance,n.units=e.units)),-1===this.allExpressionText.indexOf(e.text)&&(this.allExpressionText+=e.operator+" "+e.text+" ",t&&t===!0&&(this.allExpressionText+=")"))),n},getLabel:function(e){return e.text},mayHaveChildren:function(e){return 1!==e.id}})),e={operator:G({label:"",renderCell:s.hitch(this,this._renderExpOperatorCell),shouldExpand:function(){return!0},sortable:!1,indentWidth:10,renderExpando:function(e,t,s,i){var r,n,o;return r=this.grid.isRTL?"right":"left",n=".dgrid-expando-icon",o=q(1===e?"div"+n+"[style=width:0;height:0;]":"div"+n+"[style=width:0;height:0;]"),o.innerHTML=" ",o}})},this.expressiongrid=new J({store:this.expressionStore,query:{expressionText:""},selectionMode:"extended",columns:e,showHeader:!1,allowSelectAll:!0,allowSelect:function(e){return e&&e.data&&0===e.data.id?!1:!0}},this._gridDiv),this.expressiongrid.on("dgrid-select",s.hitch(this,this._handleExpressiongridSelect)),this.expressiongrid.startup(),this.expressiongrid.keepScrollPosition=!0,this.allowAllInputOperands?this._expressionForm.set("firstOperands",this.inputLayers):this._expressionForm.set("firstOperands",[this.analysisLayer]),this._expressionForm.set("selectedFirstOperand",this.analysisLayer),this._expressionForm.set("inputOperands",this.inputLayers),this._expressionForm.set("showReadyToUseLayers",this.get("showReadyToUseLayers")),this._expressionForm.set("showReadyLayersForFirst",this.allowAllInputOperands),this._expressionForm.set("owningWidget",this.get("owningWidget")),this._expressionForm.init(),this._expressionForm.on("add-expression",s.hitch(this,this._handleExpressionFormAdd)),this._expressionForm.on("cancel-expression",s.hitch(this,this._handleExpressionFormCancel))},_handleExpressiongridSelect:function(e){var t,s,r,n,o,d;if(this._selectedObj=e.grid.selection,this._selectedObj&&this._selectedIds&&this._selectedIds.length>0){d=!0,o=this._selectedIds.toString();for(s in this._selectedObj)this._selectedObj.hasOwnProperty(s)&&(s=parseInt(s,10),d=-1!==o.indexOf(s));if(d)return}this._selectedIds=[],this._selectedRows=[];for(s in this._selectedObj)this._selectedObj.hasOwnProperty(s)&&(s=parseInt(s,10),this._selectedObj[s]===!0&&0!==s&&(this._selectedIds.push(s),this._selectedRows.push(this.expressiongrid.cell(s).row),t=this.expressiongrid.cell(s).row.data,r=this.expressionStore.getAllChildren(t),r.total>0&&i.forEach(r,function(e){this._selectedIds.push(e.id),this._selectedRows.push(this.expressiongrid.cell(e.id).row),this.expressiongrid.select(e.id)},this)),this._selectedObj[s]===!0&&0===s&&(this._groupBtn.set("disabled",!0),this._ungroupBtn.set("disabled",!0),this._removeBtn.set("disabled",!0),this._editBtn.set("disabled",!0),this._addBtn.set("disabled",!1),this._viewBtn.set("disabled",!0)));this._selectedIds.length>0&&(n=1===this._selectedIds.length,this._groupBtn.set("disabled",n||this.expressionStore.data.length<=3),this._ungroupBtn.set("disabled",n||this.expressionStore.data.length<=3),this._removeBtn.set("disabled",!1),this._editBtn.set("disabled",!n),this._addBtn.set("disabled",!n),this._viewBtn.set("disabled",!1))},_renderExpOperatorCell:function(e,t,i,r){if(e.expressionText){if(e.expressionText){var n,o,d,a,c,x,u,_,g,f,m,L,w;g=32,m=0,a=this._gridPane.isRTL?"marginRight":"marginLeft",n=p.create("table",{"class":"esriExpressionTable"},i),r.level>1?(u=r.level*r.level*this.indentWidth+8+"px",l.set(n,a,u)):l.set(n,a,"5px"),x=p.create("tr",{},n),_=this.expressionStore.getAllChildren(e),r.level>0&&_.total>0&&(m=1===r.level?2*this.indentWidth*r.level+24:this.indentWidth*r.level*2+this.indentWidth),w=p.create("td",{"class":"expressionTd"},x),l.set(w,"width",g+"px"),f=p.create("td",{"class":"expressionTd"},x),l.set(f,"width",m+"px"),L=p.create("div",{},f),l.set(L,"width",m+"px"),d=t?p.create("div",{innerHTML:this.i18n[t],name:e.operator,id:e.id,"class":"esriAnalysisOperatorButton",onclick:s.hitch(this,function(e){y.stop(e);var t,s,i=e.target;t=this.expressionStore.get(i.id),this.expressiongrid.clearSelection(),this._selectedRows=[],this._selectedIds=[],s=h.get(i,"name"),i.innerHTML="and"===s?this.i18n.or:this.i18n.and,h.set(i,"name","and"===s?"or":"and"),t.operator="and"===s?"or":"and",this.expressionStore.put(t),this.expressiongrid.refresh(this.refreshOptions)})},w,"first"):p.create("div",{style:"width:32px;"},w),o=p.create("td",{"class":"esriAnalysisExpression expressionTd"},x),c=p.create("label",{"class":"",title:this.expressionStore.getLabel(e),innerHTML:e.expressionText},o)}}else 1===this.expressionStore.data.length?p.create("label",{innerHTML:this.i18n.addExprDescription,style:{fontStyle:"italic",textAlign:"center",display:"inline-block",width:"105%",fontWeight:"lighter"}},i):l.set(i,"display","none");return i},_clear:function(){this._selectedIds=[],this.expressiongrid.clearSelection(),this.expressiongrid.refresh(this.refreshOptions),this._groupBtn.set("disabled",!0),this._ungroupBtn.set("disabled",!0),this._removeBtn.set("disabled",!0),this._editBtn.set("disabled",!0),this._addBtn.set("disabled",!1),this._viewBtn.set("disabled",1===this.expressionStore.data.length?!0:!1),1===this.expressionStore.data.length&&(this.allowAllInputOperands?this._expressionForm.set("firstOperands",this.inputLayers):this._expressionForm.set("firstOperands",[this.analysisLayer]),this._expressionForm.set("selectedFirstOperand",this.analysisLayer),this._expressionForm.set("inputOperands",this.inputLayers))},_handleAddButtonClick:function(e){this._expDialog.set("title",this.i18n.addExpr),this._expressionForm.set("action","add"),this._expressionForm.clear(),this._expDialog.show()},_handleEditButtonClick:function(e){if(y.stop(e),this._expDialog.set("title",this.i18n.editExpr),this._selectedIds&&0===this._selectedIds.length)return!1;var t,s;t=this._selectedIds[0],s=this.expressionStore.get(this._selectedIds[0]),this._expressionForm.set("action","edit"),this._expressionForm.clear(),this._expressionForm.set("expression",s),this._expDialog.show()},_handleRemoveButtonClick:function(e){return y.stop(e),this._selectedIds&&0===this._selectedIds.length?!1:(i.forEach(this._selectedIds,function(e){this.expressionStore.remove(e)},this),this._clear(),void this.emit("update-expressions",this.expressionStore.query()))},_handleGroupButtonClick:function(e){var t,s,r;return this._selectedIds&&0===this._selectedIds.length?!1:(t=i.map(this._selectedIds,function(e){return parseInt(e,10)}),s=this._arrayMin(t),i.forEach(this._selectedRows,function(e,t){r=this.expressiongrid.cell(this._selectedRows[t].id),this._selectedRows[t].id>1&&this._selectedRows[t].id!==s&&(0===r.row.data.parent&&this.expressionStore.mayHaveChildren(this.expressionStore.get(s))&&(r.row.data.parent=s),this.expressionStore.put(r.row.data)),this.expressiongrid.refresh(this.refreshOptions)},this),void this._clear())},_handleUngroupButtonClick:function(e){var t,s,r;return this._selectedIds&&0===this._selectedIds.length?!1:(t=i.map(this._selectedIds,function(e){return parseInt(e,10)}),s=this._arrayMin(t),i.forEach(this._selectedRows,function(e,t){r=this.expressiongrid.cell(this._selectedRows[t].id),this._selectedRows[t].id>1&&this._selectedRows[t].id!==s&&(r.row.data.parent===s&&(r.row.data.parent=0),this.expressionStore.put(r.row.data)),this.expressiongrid.refresh(this.refreshOptions)},this),void this._clear())},_handleExpressionFormAdd:function(e){var t,i={};"add"===e.action?(i={id:this.expressionStore.data.length,operator:1===this.expressionStore.data.length?"":"and"},0===this._selectedIds.length?i.parent=0:1===this._selectedIds.length&&(t=parseInt(this._selectedIds[0],10),i.parent=this.expressionStore.mayHaveChildren(this.expressionStore.get(t))?t:0)):(i=this.expressionStore.get(parseInt(this._selectedIds[0],10)),i.where&&e.expression.spatialRel&&delete i.where,i.spatialRel&&e.expression.where&&(delete i.spatialRel,delete i.selectingLayer,i.distance&&(delete i.distance,delete i.units))),s.mixin(i,e.expression),i.expressionText=e.displayText,i.text=e.text,this.expressionStore.put(i),this.expressiongrid.refresh(this.refreshOptions),this._expDialog.hide(),this.allowAllInputOperands||this._updateFirstOperands(e.expression),this._clear(),this.validate(),this.emit("update-expressions",this.expressionStore.query())},_handleExpressionFormCancel:function(){this._expDialog.hide(),this._clear()},_handleViewButtonClick:function(e){var t;this._viewBtn.set("label",e?this.i18n.viewGrid:this.i18n.viewText),this._viewBtn.set("iconClass",e?"esriAnalysisGridIcon":"esriAnalysisTextIcon"),e&&(this._groupBtn.set("disabled",e),this._ungroupBtn.set("disabled",e),this._removeBtn.set("disabled",e),this._editBtn.set("disabled",e),this._addBtn.set("disabled",e)),t=this.get("expressions"),l.set(this._textDiv,"display",e?"":"none"),l.set(this._gridDiv,"display",e?"none":""),h.set(this._textDiv,"innerHTML",e?this.expressionStore.allExpressionText:""),e||this._clear()},_updateFirstOperands:function(e){var t;t=this.get("selectedLayers"),this._expressionForm.set("firstOperands",t)},_getInputLayerById:function(e){i.forEach(this.inputLayers,function(t){return t.id===e?t:void 0},this)},_arrayMin:function(e){return Math.min.apply(Math,e)},_setInputLayersAttr:function(e){this.inputLayers=e},_getInputLayersAttr:function(){return this.inputLayers},_setAnalysisLayerAttr:function(e){this.analysisLayer=e},_getAnalysisLayerAttr:function(){return this.analysisLayer},_setSelectedLayersAttr:function(e){this.selectedLayers=e},_getSelectedLayersAttr:function(){var e=[],t=[];return i.forEach(this.expressionStore.data,function(s,r){U.isDefined(s.layer)&&-1===i.indexOf(e,s.layer)&&(e.push(s.layer),t.push(this.inputLayers[s.layer])),U.isDefined(s.selectingLayer)&&-1===i.indexOf(e,s.selectingLayer)&&(e.push(s.selectingLayer),t.push(this.inputLayers[s.selectingLayer]))},this),this.selectedLayers=t,this.set("selectedLayerIds",e),this.selectedLayers},_setSelectedLayerIdsAttr:function(e){this.selectedLayerIds=e},_getSelectedLayerIdsAttr:function(){return this.selectedLayerIds},_getSelectedLayersMapAttr:function(){var e={};return e.inputLayers=this.get("inputLayers"),e.selectedLayers=this.get("selectedLayers"),e.selectedLayerIds=this.get("selectedLayerIds"),e},_setDataAttr:function(e){this.data=e},_getExpressionsAttr:function(){var e,t,s=[];return this.expressionStore.allExpressionText="",i.forEach(this.expressionStore.data,function(e,t){e._isAdd=!1}),i.forEach(this.expressionStore.data,function(i,r){0!==r&&(t={},t.operator=i.operator,t.layer=i.layer,i.where?t.where=i.where:(t.selectingLayer=i.selectingLayer,t.spatialRel=i.spatialRel,i.distance&&(t.distance=i.distance,t.units=i.units)),this._findElementInMultiArray(s,t)||(e=this.expressionStore.getExpressions(i),s.push(e)))},this),s},_getExpressionMapAttr:function(){var e,t;return e=this.get("selectedLayersMap"),t=this.get("expressions"),t=this._updateExpressions(t,e),{data:this.expressionStore.data,expressions:t,inputLayers:e.selectedLayers,expressionString:this.expressionStore.allExpressionText}},_setExpressionMapAttr:function(e){this.expressionsMap=e},_setShowReadyToUseLayersAttr:function(e){this._set("showReadyToUseLayers",e)},_setOwningWidgetAttr:function(e){this._set("owningWidget",e)},_updateExpressions:function(e,t){return i.forEach(e,function(e,s){e instanceof Array||e.length?e=this._updateExpressions(e,t):(U.isDefined(e.layer)&&-1!==i.indexOf(t.selectedLayerIds,e.layer)&&(e.layer=i.indexOf(t.selectedLayerIds,e.layer)),U.isDefined(e.selectingLayer)&&-1!==i.indexOf(t.selectedLayerIds,e.selectingLayer)&&(e.selectingLayer=i.indexOf(t.selectedLayerIds,e.selectingLayer)))},this),e},_findElementInMultiArray:function(e,t){var s=!1;return i.forEach(e,function(e,i){return d.stringify(t)===d.stringify(e)?s=!0:void((e instanceof Array||e.length)&&(s=this._findElementInMultiArray(e,t)))},this),s},_setPrimaryActionButttonClassAttr:function(e){this.primaryActionButttonClass=e},_getCssClassesAttr:function(){return this.primaryActionButttonClass},validate:function(){var e;return e=1!==this.expressionStore.data.length,e?l.set(this.expressiongrid.domNode,"borderColor","#bba"):(f.scrollIntoView(this.expressiongrid.domNode),this.expressiongrid.focus(),l.set(this.expressiongrid.domNode,"borderColor","#f94")),e}}),o("extend-esri")&&s.setObject("dijit.analysis.ExpressionGrid",Q,N),Q});