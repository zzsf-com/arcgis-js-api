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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/event","dojo/_base/array","dojo/has","dojo/dom-construct","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dgrid/OnDemandGrid","dgrid/Selection","dgrid/selector","dgrid/extensions/DijitRegistry","dgrid/extensions/ColumnResizer","dojo/store/Memory","dojo/store/Observable","dgrid/editor","../../kernel","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RemapGrid.html"],function(e,t,i,s,n,a,r,l,o,d,u,h,c,m,p,f,g,_,x,b,j,V,S){var G=e([c,m,p,g,f]),R=e([l,o,d,u,h,r],{declaredClass:"esri.dijit.analysis.RemapGrid",templateString:S,widgetsInTemplate:!0,_selectedIds:[],constructor:function(e){e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments),this.i18n={},t.mixin(this.i18n,V.common),t.mixin(this.i18n,V.analysisTools),t.mixin(this.i18n,V.remapValuesTool)},postCreate:function(){this.inherited(arguments),this.idx=2,this.getColumns(),this.remapStore=new _({data:{identifier:"id",items:[]}}),this.remapGrid=new G({store:this.remapStore,columns:this.columns,selectionMode:"none",showHeader:!0,allowSelectAll:!0,allowSelect:function(e){return!0}},this._gridDiv),this.remapGrid.on("dgrid-select",t.hitch(this,this._handleRemapGridSelect)),this.remapGrid.on("dgrid-deselect",t.hitch(this,this._handleRemapGridSelect)),this.remapGrid.on("dgrid-editor-hide",t.hitch(this,function(e){var t=e.editor.value,i=e.editor.name,s=e.cell.row.data;this.handleLabelChange(s,i,t)})),this.remapGrid.keepScrollPosition=!0,this._rBtn.set("disabled",!0)},_handleRemapGridSelect:function(e){this._selectedObj=e.grid.selection,this._selectedIds=[];for(var t in this._selectedObj)this._selectedObj.hasOwnProperty(t)&&(t=parseInt(t,10),this._selectedObj[t]===!0&&0!==t&&this._selectedIds.push(t));this._rBtn.set("disabled",this._selectedIds.length<1)},_handleAButtonClick:function(e){this.remapStore.put({minValue:0,maxValue:0,output:0,id:this.idx++}),this.remapGrid.resize(),this.remapGrid.refresh(),this.remapGrid.set("store",this.remapStore),e&&i.stop(e)},_handleRButtonClick:function(e){return i.stop(e),this._selectedIds&&0===this._selectedIds.length?!1:(s.forEach(this._selectedIds,function(e){this.remapStore.remove(e)},this),this._clear(),void this._rBtn.set("disabled",!0))},handleLabelChange:function(e,t,i){e[t]=i;var s={output:e.output,minValue:e.minValue,maxValue:e.maxValue,id:e.id};this.remapStore.put(s)},_clear:function(){this._selectedIds=[],this.remapGrid.clearSelection(),this.remapGrid.refresh({keepScrollPosition:!0})},_getRangesAttr:function(){var e,t=[],i=[],s=[],n=this;return n.remapStore.query().forEach(function(n){"NoData"===n.output?(s.push(n.minValue),s.push(n.maxValue)):(t.push(n.minValue),t.push(n.maxValue),i.push(n.output)),e={InputRanges:t,OutputValues:i,NoDataRanges:s}}),e},_setRangesAttr:function(e){if(e){var t,i=e.InputRanges,s=e.OutputValues,n=e.NoDataRanges,a=!1;if(i&&s){var r=s.length;if(2*r===i.length)for(a=!0,t=0;r>t;t++)this.remapStore.put({minValue:i[2*t],maxValue:i[2*t+1],output:s[t],id:this.idx++})}if(n)for(a=!0,t=0;t<n.length;t++)this.remapStore.put({minValue:n[t],maxValue:n[t+1],output:"NoData",id:this.idx++}),t++;a&&this.remapGrid.refresh()}},getColumns:function(){this.columns={},this.columns.check=p({selector:"checkbox",label:""}),this.columns.minValue=b({className:"labelCell",field:"minValue",label:"Minimum",sortable:!0,canEdit:function(e){return!0}},"text","click"),this.columns.maxValue=b({className:"labelCell",field:"maxValue",label:"Maximum",sortable:!0,canEdit:function(e){return!0}},"text","click"),this.columns.output=b({className:"labelCell",field:"output",label:"Output",sortable:!0,canEdit:function(e){return!0}},"text","click")}});return n("extend-esri")&&t.setObject("dijit.analysis.RemapGrid",R,j),R});