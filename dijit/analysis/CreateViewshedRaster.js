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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","dojo/dom-class","dojo/dom-style","dojo/string","dojo/_base/connect","dojo/json","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","./RasterAnalysisMixin","./utils","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CreateViewshedRaster.html"],function(e,t,i,s,n,a,l,h,r,o,c,d,u,g,m,_,v,p,b,y,D){var F=e([c,d,u,g,m,p],{declaredClass:"esri.dijit.analysis.CreateViewshedRaster",templateString:D,widgetsInTemplate:!0,inputLayer:null,valueLayer:null,valueLayers:null,maxDistanceUnits:null,maximumDistance:null,minDistanceUnits:null,minimumDistance:null,observerHeightUnits:null,observerHeight:null,targetHeightUnits:null,targetHeight:null,observerElevationUnits:null,observerElevation:null,maxDistFld:null,minDistFld:null,obEleFld:null,obHghtFld:null,targetHghtFld:null,is3D:!1,agLayerName:null,toolName:"CreateViewshedRaster",helpFileName:"CreateViewshedRaster",toolNlsName:y.createViewshedRasterTool,rasterGPToolName:"CreateViewshed",resultParameter:"outputRaster",constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode),e.rerun?(e.inputLayer=e.inputObserverFeatures,e.valueLayer=e.inputElevationSurface,e.maximumViewingDistance&&(e.maximumDistance=e.maximumViewingDistance.distance,e.maxDistanceUnits=e.maximumViewingDistance.units),e.maxDistFld=e.maximumViewingDistanceField,this._maxType=e.maxDistFld?"field":"distance",e.minimumViewingDistance&&(e.minimumDistance=e.minimumViewingDistance.distance,e.minDistanceUnits=e.minimumViewingDistance.units),e.minDistFld=e.minimumViewingDistanceField,this._minType=e.minDistFld?"field":"distance",e.observersElevation&&(e.observerElevation=e.observersElevation.distance,e.observerElevationUnits=e.observersElevation.units),e.obEleFld=e.minimumViewingDistanceField,this._obEleType=e.obEleFld?"field":"elevation",e.observersHeight&&(e.observerHeight=e.observersHeight.distance,e.observerHeightUnits=e.observersHeight.units),e.obHghtFld=e.observersHeightField,this._obHghtType=e.obHghtFld?"field":"height",e.targetHeight&&"object"==typeof e.targetHeight&&(e.targetHeight=e.targetHeight.distance,e.targetHeightUnits=e.targetHeight.units),e.targetHghtFld=e.targetHeightField,this._targetType=e.targetHghtFld?"field":"height",e.is3D=e.viewingDistanceIs3D,e.agLayerName=e.aboveGroundLevelOutputName&&e.aboveGroundLevelOutputName.serviceProperties.name):(this._minType=this._maxType="distance",this._obEleType="elevation",this._obHghtType=this._targetType="height")},_getJobParameters:function(){var e=s.toJson(b.constructAnalysisInputLyrObj(this.get("inputLayer"))),t=s.toJson(b.constructAnalysisInputLyrObj(this.get("valueLayer"))),i=this.get("optimizeFor"),n=this.get("maximumDistance"),a="field"===this._maxType?this._maxDistanceFldSelect.get("value"):null,l=this.get("minimumDistance"),h="field"===this._minType?this._minDistanceFldSelect.get("value"):null,r=this.get("observerEle"),c="field"===this._obEleType?this._observerEleFldSelect.get("value"):null,d=this.get("observerHeight"),u="field"===this._obHghtType?this._observerHghtFldSelect.get("value"):null,g=this.get("targetHeight"),m="field"===this._targetType?this._targetHghtFldSelect.get("value"):null,_=this.get("is3D"),v=this.get("AgLayerName")?{serviceProperties:{name:this.get("AgLayerName")},itemProperties:{folderId:this.get("folderId")}}:null;return v&&(this.resultParameter=["outputRaster","outputAboveGroundLevelRaster"]),{inputElevationSurface:t,inputObserverFeatures:e,optimizeFor:i,maximumViewingDistance:n?o.stringify(n):null,maximumViewingDistanceField:a,minimumViewingDistance:l?o.stringify(l):null,minimumViewingDistanceField:h,observersElevation:r?o.stringify(r):null,observersElevationField:c,observersHeight:d?o.stringify(d):null,observersHeightField:u,targetHeight:g?o.stringify(g):null,targetHeightField:m,viewingDistanceIs3D:_,aboveGroundLevelOutputName:v?o.stringify(v):null}},_setDefaultInputs:function(){var e=0;this.valueLayers&&i.forEach(this.valueLayers,function(t,i){this._layersSelect.addOption({value:i,label:t.name}),0!==i||this.rerun?this.valueLayer&&t.name===this.valueLayer.name&&t.url===this.valueLayer.url&&(e=i):this.set("valueLayer",t)},this),this._addOptions(this._maxDistanceUnitsSelect),this._addOptions(this._minDistanceUnitsSelect),this._addOptions(this._observerEleUnitsSelect),this._addOptions(this._observerHghtUnitsSelect),this._addOptions(this._targetHghtUnitsSelect),this.valueLayer&&e>0&&this._layersSelect.set("value",e),this.optimizeFor&&this._handleOptimizeForChange(this.optimizeFor),this.maxDistanceUnits&&this._maxDistanceUnitsSelect.set("value",this.maxDistanceUnits),this.maximumDistance&&this._maxDistanceInput.set("value",this.maximumDistance),this.maxDistFld&&this._maxDistanceFldSelect.set("value",this.maxDistFld),this.minDistanceUnits&&this._minDistanceUnitsSelect.set("value",this.minDistanceUnits),(this.minimumDistance||0===this.minimumDistance)&&this._minDistanceInput.set("value",this.minimumDistance),this.minDistFld&&this._minDistanceFldSelect.set("value",this.minDistFld),this.observerHeightUnits&&this._observerHghtUnitsSelect.set("value",this.observerHeightUnits),this.observerHeight&&this._observerHghtInput.set("value",this.observerHeight),this.obHghtFld&&this._observerHghtFldSelect.set("value",this.obHghtFld),this.observerElevationUnits&&this._observerEleUnitsSelect.set("value",this.observerElevationUnits),this.observerElevation&&this._observerEleInput.set("value",this.observerElevation),this.obEleFld&&this._observerEleFldSelect.set("value",this.obEleFld),this.targetHeightUnits&&this._targetHghtUnitsSelect.set("value",this.targetHeightUnits),(this.targetHeight||0===this.targetHeight)&&this._targetHghtInput.set("value",this.targetHeight),this.targetHghtFld&&this._targetHghtFldSelect.set("value",this.targetHghtFld),this.is3D&&this._is3DCheck.set("checked",this.is3D),r.connect(this._MaxDistance,"onclick",t.hitch(this,"_handleMaxTypeChange","distance")),r.connect(this._MaxField,"onclick",t.hitch(this,"_handleMaxTypeChange","field")),r.connect(this._MinDistance,"onclick",t.hitch(this,"_handleMinTypeChange","distance")),r.connect(this._MinField,"onclick",t.hitch(this,"_handleMinTypeChange","field")),r.connect(this._ObElevation,"onclick",t.hitch(this,"_handleObEleTypeChange","elevation")),r.connect(this._ObField,"onclick",t.hitch(this,"_handleObEleTypeChange","field")),r.connect(this._ObHeight,"onclick",t.hitch(this,"_handleObHghtTypeChange","height")),r.connect(this._ObHghtField,"onclick",t.hitch(this,"_handleObHghtTypeChange","field")),r.connect(this._TargetHeight,"onclick",t.hitch(this,"_handleTargetHghtTypeChange","height")),r.connect(this._TargetField,"onclick",t.hitch(this,"_handleTargetHghtTypeChange","field")),r.connect(this._Speed,"onclick",t.hitch(this,"_handleOptimizeForChange","speed")),r.connect(this._Accuracy,"onclick",t.hitch(this,"_handleOptimizeForChange","accuracy"))},_resetUI:function(){this.set("fields"),this.agLayerName=h.substitute(this.i18n.outputAgLayerName,{layername:this.inputLayer.name})},_addOptions:function(e){e&&e.addOption([{value:"Miles",label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}])},_handleLayerChange:function(e){this.set("valueLayer",this.valueLayers[this._layersSelect.get("value")])},_handleMaxTypeChange:function(e){this._maxType=e,a.remove(this._MaxDistance,"selected"),a.remove(this._MaxField,"selected"),a.add("distance"===e?this._MaxDistance:this._MaxField,"selected"),l.set(this._maxDistanceInput.domNode,"display","distance"===e?"block":"none"),l.set(this._maxDistanceFldSelect.domNode,"display","distance"===e?"none":"block")},_handleMinTypeChange:function(e){this._minType=e,a.remove(this._MinDistance,"selected"),a.remove(this._MinField,"selected"),a.add("distance"===e?this._MinDistance:this._MinField,"selected"),l.set(this._minDistanceInput.domNode,"display","distance"===e?"block":"none"),l.set(this._minDistanceFldSelect.domNode,"display","distance"===e?"none":"block")},_handleObEleTypeChange:function(e){this._obEleType=e,a.remove(this._ObElevation,"selected"),a.remove(this._ObField,"selected"),a.add("elevation"===e?this._ObElevation:this._ObField,"selected"),l.set(this._observerEleInput.domNode,"display","elevation"===e?"block":"none"),l.set(this._observerEleFldSelect.domNode,"display","elevation"===e?"none":"block")},_handleObHghtTypeChange:function(e){this._obHghtType=e,a.remove(this._ObHeight,"selected"),a.remove(this._ObHghtField,"selected"),a.add("height"===e?this._ObHeight:this._ObHghtField,"selected"),l.set(this._observerHghtInput.domNode,"display","height"===e?"block":"none"),l.set(this._observerHghtFldSelect.domNode,"display","height"===e?"none":"block")},_handleTargetHghtTypeChange:function(e){this._targetType=e,a.remove(this._TargetHeight,"selected"),a.remove(this._TargetField,"selected"),a.add("height"===e?this._TargetHeight:this._TargetField,"selected"),l.set(this._targetHghtInput.domNode,"display","height"===e?"block":"none"),l.set(this._targetHghtFldSelect.domNode,"display","height"===e?"none":"block")},_handleOptimizeForChange:function(e){this._optimizeFor=e,a.remove(this._Speed,"selected"),a.remove(this._Accuracy,"selected"),a.add("speed"===e?this._Speed:this._Accuracy,"selected")},_handleOptionsBtnClick:function(){a.contains(this._optionsDiv,"disabled")||(a.contains(this._optionsDiv,"optionsClose")?(a.remove(this._optionsDiv,"optionsClose"),a.add(this._optionsDiv,"optionsOpen")):a.contains(this._optionsDiv,"optionsOpen")&&(a.remove(this._optionsDiv,"optionsOpen"),a.add(this._optionsDiv,"optionsClose")))},_getValueLayerAttr:function(){return this.valueLayer=this.valueLayers[this._layersSelect.get("value")],this.valueLayer},_setValueLayerAttr:function(e){this.valueLayer=e},_setValueLayersAttr:function(e){this.valueLayers=e,this.valueLayer=this.valueLayers[0]},_getValueLayersAttr:function(){return this.valueLayers},_setFieldsAttr:function(e){if(this._maxDistanceFldSelect.removeOption(this._maxDistanceFldSelect.getOptions()),this._minDistanceFldSelect.removeOption(this._maxDistanceFldSelect.getOptions()),this._observerEleFldSelect.removeOption(this._maxDistanceFldSelect.getOptions()),this._observerHghtFldSelect.removeOption(this._maxDistanceFldSelect.getOptions()),this._targetHghtFldSelect.removeOption(this._maxDistanceFldSelect.getOptions()),this.inputLayer){var t;t=this.inputLayer.fields,t&&i.forEach(t,function(e){-1!==i.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],e.type)&&e.name!==this.inputLayer.objectIdField&&(this._maxDistanceFldSelect.addOption({value:e.name,label:v.isDefined(e.alias)&&""!==e.alias?e.alias:e.name}),this._minDistanceFldSelect.addOption({value:e.name,label:v.isDefined(e.alias)&&""!==e.alias?e.alias:e.name}),this._observerEleFldSelect.addOption({value:e.name,label:v.isDefined(e.alias)&&""!==e.alias?e.alias:e.name}),this._observerHghtFldSelect.addOption({value:e.name,label:v.isDefined(e.alias)&&""!==e.alias?e.alias:e.name}),this._targetHghtFldSelect.addOption({value:e.name,label:v.isDefined(e.alias)&&""!==e.alias?e.alias:e.name}))},this)}},_setMaximumDistanceAttr:function(e){this.maximumDistance=e},_getMaximumDistanceAttr:function(){if("field"===this._maxType)return null;var e,t=this._maxDistanceUnitsSelect.get("value"),i=this._maxDistanceInput.get("value");return i&&t&&(e={distance:i,units:t}),e},_setMinimumDistanceAttr:function(e){this.minimumDistance=e},_getMinimumDistanceAttr:function(){if("field"===this._minType)return null;var e,t=this._minDistanceUnitsSelect.get("value"),i=this._minDistanceInput.get("value");return i&&t&&(e={distance:i,units:t}),e},_setObserverElevationAttr:function(e){this.observerElevation=e},_getObserverElevationAttr:function(){if("field"===this._obEleType)return null;var e,t=this._observerEleUnitsSelect.get("value"),i=this._observerEleInput.get("value");return i&&t&&(e={distance:i,units:t}),e},_setObserverHeightAttr:function(e){this.observerHeight=e},_getObserverHeightAttr:function(){if("field"===this._obHghtType)return null;var e,t=this._observerHghtUnitsSelect.get("value"),i=this._observerHghtInput.get("value");return i&&t&&(e={distance:i,units:t}),e},_setTargetHeightAttr:function(e){this.targetHeight=e},_getTargetHeightAttr:function(){if("field"===this._targetType)return null;var e,t=this._targetHghtUnitsSelect.get("value"),i=this._targetHghtInput.get("value");return i&&t&&(e={distance:i,units:t}),e},_setIs3DAttr:function(e){this.is3D=e},_getIs3DAttr:function(){return this._is3DCheck&&(this.is3D=this._is3DCheck.get("checked")),this.is3D},_setOptimizeForAttr:function(e){this.OptimizeFor=e},_getOptimizeForAttr:function(){return this.OptimizerFor=this._optimizeFor,this.OptimizeFor},_setAgLayerNameAttr:function(e){this.agLayerName=e,this._outputAGLayerInput.set("value",e)},_getAgLayerNameAttr:function(){return this.agLayerName=this._outputAGLayerInput.get("value",name),this.agLayerName}});return n("extend-esri")&&t.setObject("dijit.analysis.CreateViewshedRaster",F,_),F});