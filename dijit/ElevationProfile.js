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

define(["dojo/on","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/array","dojo/number","dojo/dom-geometry","dojo/dom-style","dojo/dom-class","dojo/query","dojo/_base/Color","dojo/colors","dojo/fx/easing","dijit/_WidgetBase","dijit/_OnDijitClickMixin","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/registry","dijit/Dialog","dijit/Toolbar","dijit/ToolbarSeparator","dijit/layout/ContentPane","dijit/form/Button","dijit/form/ToggleButton","../config","../sniff","../request","./Measurement","../toolbars/draw","../tasks/Geoprocessor","../geometry/Polyline","../geometry/normalizeUtils","../symbols/SimpleLineSymbol","../symbols/SimpleMarkerSymbol","../graphic","../tasks/FeatureSet","../tasks/LinearUnit","../geometry/geodesicUtils","../geometry/webMercatorUtils","../units","./util/busyIndicator","./ElevationProfile/ProfileChart","./ElevationProfile/UnitsConversion","dojo/i18n!./ElevationProfile/nls/strings","dojo/text!./ElevationProfile/templates/ElevationProfile.html","xstyle/css!./ElevationProfile/css/ElevationProfile.css"],function(e,t,i,r,o,s,n,a,l,c,h,u,f,d,p,_,g,m,v,b,y,E,D,U,P,w,T,I,O,j,C,S,M,k,L,R,G,B,F,x,A,N,z,W,Z,q){return i([p,_,g,m],{declaredClass:"esri.dijit.ElevationProfile",baseClass:"esriElevationProfile",templateString:q,_samplingPointCount:199,_profileResults:null,_currentGeometry:null,_map:null,_measureTool:null,_drawToolbar:null,_profileService:null,_profileServiceUrl:null,_profileTaskUrl:null,_scalebarUnits:null,_profileChart:null,_chartOptions:null,_busyIndicator:null,_profileDirection:"forward",constructor:function(e,t){e.hasOwnProperty("map")&&(this._map=e.map),e.hasOwnProperty("profileTaskUrl")&&(this._profileTaskUrl=e.profileTaskUrl),e.hasOwnProperty("scalebarUnits")&&(this._scalebarUnits=e.scalebarUnits),e.hasOwnProperty("chartOptions")?this._chartOptions=e.chartOptions:this._chartOptions={},e.hasOwnProperty("profileDirection")&&(this._profileDirection=e.profileDirection),this._profileServiceUrl=r.replace("{_profileTaskUrl}/Profile",this)},postCreate:function(){this.inherited(arguments),null!==v.getEnclosingWidget(this.domNode)&&this.own(t.after(v.getEnclosingWidget(this.domNode),"resize",r.hitch(this,this.resize),!0));var e={target:this._chartNode,imageUrl:this._chartOptions.hasOwnProperty("busyIndicatorImageUrl")?this._chartOptions.busyIndicatorImageUrl:void 0,backgroundColor:this._chartOptions.hasOwnProperty("busyIndicatorBackgroundColor")?this._chartOptions.busyIndicatorBackgroundColor:void 0,backgroundOpacity:this._chartOptions.hasOwnProperty("busyIndicatorBackgroundOpacity")?this._chartOptions.busyIndicatorBackgroundOpacity:void 0,fadeDuration:this._chartOptions.hasOwnProperty("busyIndicatorFadeDuration")?this._chartOptions.busyIndicatorFadeDuration:void 0};this._busyIndicator=N.create(e),this._chartOptions.hasOwnProperty("sourceTextColor")&&(this._sourceNode.style.color=this._chartOptions.sourceTextColor),this._setDisabledDirectionButton(!0),(void 0===this._profileDirection||null===this._profileDirection)&&(this._profileDirection="forward",this._setProfileDirection(this._profileDirection))},startup:function(){this.inherited(arguments),this._map&&this._profileTaskUrl&&this._scalebarUnits?this._map.loaded?this._initUI():this._map.on("load",r.hitch(this,this._initUI)):(this.emit("error",new Error(Z.errors.MissingConstructorParameters)),this.destroy())},_initListeners:function(){this.own(e(this._directionButton,"click",r.hitch(this,this._directionButtonClicked)))},_initUI:function(){this._initListeners(),this._initProfileService().then(r.hitch(this,function(){var e=this._getElevationDistanceUnits(this._scalebarUnits),t=new W,i=t.getAbbrLabel(e.elevationUnits);this._profileChart=new z({map:this._map,elevationUnits:e.elevationUnits,distanceUnits:e.distanceUnits,chartOptions:this._chartOptions},this._chartNode),this._profileChart.on("aggregate-elevation-values",r.hitch(this,function(e){this._elevationInfoText.innerHTML=r.replace("{0}<br />{1} {8}<br />{2}<br />{3} {8}<br />{4}<br />{5} {8}<br />{6}<br />{7} {8}",[Z.buttons.aggregateElevationGainForward,n.format(e.aggregateElevationGainForward,{places:2}),Z.buttons.aggregateElevationLossForward,n.format(e.aggregateElevationLossForward,{places:2}),Z.buttons.aggregateElevationGainReverse,n.format(e.aggregateElevationGainReverse,{places:2}),Z.buttons.aggregateElevationLossReverse,n.format(e.aggregateElevationLossReverse,{places:2}),i]),this.emit("elevation-values",e)})),this._profileChart.startup(),this.emit("load"),this._createTooltip()}),r.hitch(this,function(){this.emit("error",new Error(Z.errors.InvalidConfiguration)),this.destroy()}))},_initProfileService:function(){var e=new o;return this._profileServiceUrl?I({url:this._profileServiceUrl,content:{f:"json"},callbackParamName:"callback"}).then(r.hitch(this,function(t){this._profileService=new C(this._profileServiceUrl),this._profileService.setNormalization(!1),this._profileService.setOutSpatialReference(this._map.spatialReference),e.resolve()}),r.hitch(this,function(t){e.reject(t)})):e.reject(new Error(Z.errors.InvalidConfiguration)),e.promise},_directionButtonClicked:function(e){this._profileDirection="forward"===this._profileDirection?"reverse":"forward",this._setProfileDirection(this._profileDirection),this._createTooltip(),this._currentGeometry&&(this._currentGeometry.paths[0].reverse(),this._updateProfile(this._currentGeometry))},_setProfileDirection:function(e){var t="forward"===e;this._profileDirection=t?"forward":"reverse",c.toggle(this._directionButtonLabel,"esriElevationProfileDirectionReverse",!t),c.toggle(this._directionButtonLabel,"esriElevationProfileDirectionForward",t)},_setProfileGeometryAttr:function(e){e&&(this._set("_currentGeometry",e),"reverse"===this._profileDirection&&this._currentGeometry.paths[0].reverse(),this._updateProfile(e))},_getProfileDirectionAttr:function(){return this._profileDirection},_setProfileDirectionAttr:function(e){this._set("_profileDirection",e),this._setProfileDirection(e),this._currentGeometry&&(this._currentGeometry.paths[0].reverse(),this._updateProfile(this._currentGeometry),this.emit("profile-direction-changed"))},_updateProfile:function(e){e?(this._busyIndicator.show(),this._getProfile(e).then(r.hitch(this,function(e){this._busyIndicator.hide(),this._setDisabledDirectionButton(!1),this._profileChart.update(e),this.emit("update-profile",e)}),r.hitch(this,function(e){this._busyIndicator.hide(),this._setDisabledDirectionButton(!0),this.emit("error",e)}))):this.emit("error",new Error(Z.errors.NullGeometry))},_setTitleAttr:function(e){this._profileChart.set("Title",e),this.emit("title-changed")},clearProfile:function(){this._profileChart.clear(),this._setDisabledDirectionButton(!0),this._setProfileDirection("forward"),this.emit("clear-profile")},_setMeasureUnitsAttr:function(e){var t=this._getElevationDistanceUnits(e);this._profileChart.set("DisplayUnits",{elevationUnits:t.elevationUnits,distanceUnits:t.distanceUnits}),this._profileChart.refresh()},_getElevationDistanceUnits:function(e){var t,i;switch(e){case A.NAUTICAL_MILES:t=A.FEET,i=A.NAUTICAL_MILES;break;case A.MILES:t=A.FEET,i=A.MILES;break;case A.YARDS:t=A.FEET,i=A.YARDS;break;case A.FEET:t=A.FEET,i=A.FEET;break;case A.KILOMETERS:t=A.METERS,i=A.KILOMETERS;break;case A.METERS:t=A.METERS,i=A.METERS;break;default:t=this._profileChart.elevationUnits,i=this._profileChart.distanceUnits}return{elevationUnits:t,distanceUnits:i}},_hasZsAndMs:function(e){if(e&&"polyline"===e.type){var t=e.paths[0][0];return 4===t.length}return!1},_normalizeGeometry:function(e){var t=new o;return M.normalizeCentralMeridian([e]).then(function(e){t.resolve(e[0])},function(){t.reject(new Error(Z.errors.UnableToNormalizeGeometry))}),t.promise},_densifyGeometry:function(e){var t=e.spatialReference.isWebMercator?x.webMercatorToGeographic(e):e;return F.geodesicDensify(t,1e6)},_getProfile:function(e){var t=new o;if(this._hasZsAndMs(e))t.resolve({geometry:e,elevations:[],distances:[],samplingDistance:a});else{var i=e.spatialReference.isWebMercator()?x.webMercatorToGeographic(e):e,n=F.geodesicLengths([i],A.METERS)[0],a=n/this._samplingPointCount,l=new R(e,null,{OID:1}),c=new G;c.features=[l],c.fields=[{name:"OID",type:"esriFieldTypeObjectID",alias:"OID"}],this._profileService.execute({InputLineFeatures:c,ProfileIDField:"OID",DEMResolution:"FINEST",MaximumSampleDistance:a,MaximumSampleDistanceUnits:"Meters",returnZ:!0,returnM:!0}).then(r.hitch(this,function(e){if(e.length>0){var i=e[0].value;if(i.features.length>0){var o=i.features[0];this._sourceNode.innerHTML=r.replace("{0}: {1}",[Z.chart.demResolution,o.attributes.DEMResolution]);var n=o.geometry,l=[],c=[];n.paths.length>0?(s.forEach(n.paths,function(e,t){s.forEach(e,function(e,i){var r={x:e.length>3?e[3]:i*a,y:e.length>2?e[2]:0,pathIdx:t,pointIdx:i};l.push(r),c.push(r.x)},this)},this),t.resolve({geometry:n,elevations:l,distances:c,samplingDistance:a})):t.reject(new Error(this.strings.errors.UnableToProcessResults))}else t.reject(new Error(this.strings.errors.UnableToProcessResults))}else t.reject(new Error(this.strings.errors.UnableToProcessResults))}),t.reject)}return t.promise},_createTooltip:function(){var e,t=Z.display,i=Z.buttons,o="{directionLabel}: {direction} \n{profileTitle}",e=r.replace(o,{directionLabel:t.directionLabel,direction:"forward"===this._profileDirection?i.profileForward:i.profileReverse,profileTitle:i.flipProfileTitle});this._directionButton.setAttribute("title",e)},_setDisabledDirectionButton:function(e){var t=e?"none":"auto";this._directionButton.style.pointerEvents=t;var i=e?"hidden":"visible";this._elevationInfo.style.visibility=i},resize:function(){this.inherited(arguments),this._profileChart&&this._profileChart.resize()},destroy:function(){this.inherited(arguments),this._profileChart&&this._profileChart.destroy()}})});