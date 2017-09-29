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

define(["../../declare","dojo/_base/lang","dojo/dom-construct","dojo/dom-class","dojo/Stateful","dojo/number","dojo/string","dojo/aspect","./_WizardPage","dojo/i18n!../../nls/jsapi","dojo/text!./templates/EnrichOptionsPage.html","../../tasks/geoenrichment/RingBuffer","../../tasks/geoenrichment/DriveBuffer","./BufferOptions","dojox/html/entities","./_Invoke","dgrid/OnDemandGrid","dgrid/extensions/DijitRegistry","dojo/store/Memory","dojo/data/ObjectStore","dgrid/tree","dijit/form/Select","dijit/form/CheckBox","dojox/mvc/sync","./config","../../request","../../urlUtils","./lang","dijit/registry","dijit/layout/ContentPane","dijit/form/NumberSpinner","dijit/form/RadioButton"],function(e,t,i,n,r,s,o,l,a,h,d,u,c,f,p,g,_,b,m,v,C,y,k,T,j,w,O,x,P){h=h.geoenrichment.dijit.EnrichOptionsPage;var E="_",S=e([v],{getChildren:function(e){return e.getChildren()},mayHaveChildren:function(e){return!!e.getChildren}}),V=e([r],{checked:!0,getLabel:function(){},getClass:function(){return""}}),B=e([V],{_children:null,_updateChildren:!0,_label:null,constructor:function(e,i,n){this.set("id2",e),this._label=e,this._children=[];for(var r=t.hitch(this,this._onChildChecked),s=0;s<i.length;s++){var o=new A(i[s],n);o.watch("checked",r),this._children.push(o)}},_checkedSetter:function(e){if(this.checked!=e&&(this.checked=e,this._updateChildren&&this._children))for(var t=0;t<this._children.length;t++)this._children[t].set("checked",this.checked)},_onChildChecked:function(e,t,i){if(t!=i){for(var n=!1,r=0;r<this._children.length;r++)if(this._children[r].get("checked")){n=!0;break}this._updateChildren=!1,this.set("checked",n),this._updateChildren=!0}},getLabel:function(){return this._label},getChildren:function(){return this._children}}),A=e([V],{mapTo:null,_page:null,constructor:function(e,t){this._page=t,this.id2=e.id2,this.mapTo=e.mapTo},_checkedSetter:function(e){this.checked!=e&&(this.checked=e,this._page.invoke("_updateTotalVars"))},_mapToSetter:function(e){this.mapTo!=e&&(this.mapTo=e,this._page.invoke("_updateTotalVars"))},getLabel:function(){return this.alias},getClass:function(){return"EnrichOptionsPage_VariableCheckbox"},getOptions:function(){var e=[],t=this._page.allowFieldTypeMismatch!==!0;if(e.push({value:E,label:p.encode(this._page.allowNewColumns?h.newColumn:h.noColumn)}),this._page.fields)for(var i=0;i<this._page.fields.length;i++){var n=this._page.fields[i];if(t&&n.type&&n.type!=this.type){var r=!1;if("esriFieldTypeInteger"==n.type&&"esriFieldTypeDouble"==this.type&&0===this.precision?r=!0:"esriFieldTypeInteger"==this.type&&"esriFieldTypeDouble"==n.type&&(r=!0),!r)continue}e.push({value:n.id,label:p.encode(n.label||n.id)})}return e}}),L=e([_,b],{removeRow:function(e,t){var i=P.findWidgets(e);if(i)for(var n=0;n<i.length;n++)i[n].destroy();this.inherited(arguments)}}),M=e("esri.dijit.geoenrichment.EnrichOptionsPage",[a,g],{templateString:d,nls:h,geomType:null,buffer:null,fields:null,allowNewColumns:!0,dataCollections:null,studyAreaCount:null,title:null,_bufferOptions:null,_fieldSelects:null,_grid:null,_model:null,_eventMap:{back:!0,finish:!0},constructor:function(){this.buffer=new u},_setGeomTypeAttr:function(e){switch(this._set("geomType",e),this.geomType){case"esriGeometryPolygon":this.bufferEdit.style.display="none",this.bufferString.innerHTML=h.bufferPolygon;break;case"esriGeometryPoint":this.bufferEdit.style.display="",this.bufferString.innerHTML=h.bufferRing;break;case"esriGeometryPolyline":this.bufferEdit.style.display="",this.bufferString.innerHTML=h.bufferRing}},_setFieldsMapAttr:function(e){for(var i=[],n={},r=0;r<this.dataCollections.length;r++)for(var s=this.dataCollections[r],o=0;o<s.variables.length;o++){var a=s.variables[o];a.id2=s.id+"."+a.id;var d=e[a.id2];if(t.isString(d)){a.mapTo=d;var u=a.fieldCategory,c=n[u];c||(c=n[u]=[]),c.push(a),i.push(a.description)}}this._model=[];for(var f in n)n.hasOwnProperty(f)&&this._model.push(new B(f,n[f],this));this.dataCollectionNames.innerHTML=i.join(", "),this.dataCollectionNames.title=i.join("\n");var p=new m({data:this._model,idProperty:"id2"}),g=new S(p);if(this._grid)this._grid.set("store",g);else{var _=[C({label:" ",field:"expander",shouldExpand:t.hitch(this,this._shouldExpand)}),{label:h.varName,field:"varName",sortable:!1,renderCell:t.hitch(this,this._renderCheckBox)}];this.fields&&_.push({label:h.column,field:"column",sortable:!1,renderCell:t.hitch(this,this._renderSelect)}),this._grid=new L({store:g,columns:_},this.fieldsDiv),l.after(this._grid,"expand",t.hitch(this,this.invoke,"resize")),this._grid.startup()}this.invoke("_updateTotalVars")},_shouldExpand:function(e,t,i){return void 0!==i?i:1==this._model.length},_renderCheckBox:function(e,t,r,s){var o=new k,l=e.getLabel();T(e,"checked",o,"checked");var a=i.create("label",{"class":"EnrichOptionsPage_TrimWithEllipsis EnrichOptionsPage_CheckboxLabel",title:l});return n.add(a,e.getClass()),o.placeAt(a),i.create("span",{innerHTML:l},a),a},_renderSelect:function(e,t,i,n){if(e.getOptions){var r=new y({options:e.getOptions(),maxHeight:151});return T(e,"mapTo",r,"value",{converter:{format:function(e){return e||E},parse:function(e){return e!=E?e:null}}}),r.domNode}},_updateTotalVars:function(){function e(e,n){x.isNumber(e)&&(e=o.substitute(h.credits,{credits:s.format(e)}));var r={varCount:i,rowCount:d,credits:e};t.totalVars.innerHTML=o.substitute(l,r),void 0===n&&(n=o.substitute(a,r)),t.totalVars.title=n}var t=this,i=0,n=!1;this._enumCheckedVars(function(e,t){i++,t.mapTo&&(n=!0)}),this.overwriteExisting.style.visibility=n?"visible":"hidden",this.finishButton.disabled=0===i;var r={enrichVariableCount:i,f:"json"};this.get("buffer")instanceof c&&(r.serviceAreaCount=1);var l,a,d;this.studyAreaCount?(l=h.totalVars,a=h.totalVarsTooltip,d=this.studyAreaCount):(l=h.varsPerRow,a=h.varsPerRowTooltip,d=1),j.token&&(r.token=j.token);var u=j.portalUrl;u.indexOf("://")<0&&(u=O.getProtocolForWebResource()+"//"+u),e(h.creditsCalc,""),w({url:u+"/sharing/rest/portals/self/cost",content:r}).then(function(t){e(t.transactionCreditCost*d)},function(t){e("error",t.toString())})},_getBufferAttr:function(){return this._bufferOptions?this._bufferOptions.get("buffer"):this.buffer},_setBufferAttr:function(e){this._set("buffer",e),this._bufferOptions&&this._bufferOptions.set("buffer",e)},_editBuffer:function(){i.destroy(this.bufferDiv),this.bufferEditDiv.style.display="",this._bufferOptions=new f({buffer:this.buffer,onChange:t.hitch(this,this.invoke,"_updateTotalVars")}),this.buffer=void 0,this._bufferOptions.placeAt(this.bufferEditDiv),this.resize()},_getFieldsMapAttr:function(){var e={};return this._enumCheckedVars(function(t,i){e[i.id2]=i.mapTo||""}),e},_enumCheckedVars:function(e){for(var t=0;t<this._model.length;t++)for(var i=this._model[t].getChildren(),n=0;n<i.length;n++)i[n].checked&&(this.allowNewColumns||i[n].mapTo)&&e(this._model[t],i[n])},_back:function(){this.onBack()},onBack:function(){},_finish:function(){this.onFinish()},onFinish:function(){}});return M});