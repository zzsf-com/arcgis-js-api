// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dgrid/OnDemandGrid","./ColorRampSelector","dijit/TitlePane","dijit/form/CheckBox","dijit/form/FilteringSelect","dijit/form/NumberSpinner","dijit/form/NumberTextBox","dojo/dom-construct","dojo/i18n!./RasterSymbologyEditor/nls/RasterSymbologyEditor","dojo/store/Memory","../core/lang","../core/accessorSupport/decorators","./Widget","./RasterSymbologyEditor/RasterSymbologyEditorViewModel","./support/widget"],function(e,t,s,a,i,n,o,l,r,c,u,d,p,h,m,_,y,b,S){var g={base:"esri-raster-symbology-editor",filteringSelect:"esri-raster-symbology-editor__filtering-select",stretchColorSchemeRow:"esri-raster-symbology-editor__stretch-color-ramp-row",percentClipOptionsRow:"esri-raster-symbology-editor__percent-clip-row",stdDeviationOptionsRow:"esri-raster-symbology-editor__std-deviation-row",stretchOptionsBlock:"esri-raster-symbology-editor__stretch-options",stretchGammaBlock:"esri-raster-symbology-editor__stretch-gamma-row",stretchDraBlock:"esri-raster-symbology-editor__stretch-dra-row",displayHidden:"esri-raster-symbology-editor--hidden",displayBlock:"esri-raster-symbology-editor--block",table:"esri-raster-symbology-editor__table",thumbnailImage:"esri-raster-symbology-editor__thumbnail-image",bandCombinationPresetNaturalColorIcon:"esri-raster-symbology-editor__band-combination-icon--natural-color",bandCombinationPresetLanduseIcon:"esri-raster-symbology-editor__band-combination-icon--landuse",bandCombinationPresetLandWaterIcon:"esri-raster-symbology-editor__band-combination-icon--land-water",bandCombinationPresetVegetationIcon:"esri-raster-symbology-editor__band-combination-icon--vegetation",bandCombinationPresetShallowBathymetricIcon:"esri-raster-symbology-editor__band-combination-icon--bathymetric",bandCombinationPresetColorInfraredIcon:"esri-raster-symbology-editor__band-combination-icon--color-infrared",minMaxStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--min-max",noneStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--none",standardDeviationStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--standard-deviation",percentClipStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--percent-clip",rgbSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--rgb",stretchSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--stretch",uniqueValueSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--unique-value",discreteSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--discrete",menuItemTd:"esri-raster-symbology-editor__menu-item-td",dgridSymbolCell:"esri-raster-symbology-editor__dgrid-symbol-cell",menuItemText:"esri-raster-symbology-editor__menu-item-text",checkbox:"esri-raster-symbology-editor__checkbox"};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.layer=null,t.defaultParams=null,t.viewModel=new b,t.stretchType=0,t.symbologyType="",t._components=[],t._symbologySelect=null,t._supportsBandPresets=!1,t}return s(t,e),t.prototype.postInitialize=function(e){this.defaultParams=this.viewModel.getDefaultRenderParameters(),this._createUIComponents()},t.prototype.destroy=function(){this._components.forEach(function(e){e&&(e.destroy(),e=null)})},t.prototype.render=function(){var e,t,s,a,i,n,o,l,r,c,u,d,h=this,m=h.symbologyType,_=h.stretchType,y=b.SymbologyTypes,f=y.stretch,C=y.rgb,x=y.uniqueValue,v=y.discrete,I=this.viewModel.isStretchColorRampApplicable(_),T=this.viewModel.getStretchFilterType(b.StretchTypeNames.percentClip),B=this.viewModel.getStretchFilterType(b.StretchTypeNames.none),P=this.viewModel.getStretchFilterType(b.StretchTypeNames.standardDeviation),D=S.tsx("div",null,S.tsx("div",{afterCreate:this._placeSymbologySelect,bind:this})),N=S.tsx("div",{class:this.classes((e={},e[g.displayBlock]=m===f,e[g.displayHidden]=m!==f,e))},S.tsx("div",{afterCreate:this._createColorSchemeTitlePane,bind:this},S.tsx("table",{class:g.table},S.tsx("tr",null,S.tsx("td",null,S.tsx("label",null,p.bandSelectionLabel)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeBandSelect,bind:this}))),S.tsx("tr",{class:this.classes((t={},t[g.stretchColorSchemeRow]=I,t[g.displayHidden]=!I,t))},S.tsx("td",null,S.tsx("label",null,p.colorSchemeLabel)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeColorRampSelect,bind:this})))))),V=S.tsx("div",{class:this.classes((s={},s[g.displayBlock]=m===f||m===C,s[g.displayHidden]=m!==f,s))},S.tsx("div",{afterCreate:this._createNoDataTitlePane,bind:this},S.tsx("table",{class:g.table},S.tsx("tr",null,S.tsx("td",null,S.tsx("label",null,p.noDataLabel)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeNoDataInput,bind:this})))))),q=S.tsx("div",{afterCreate:this._placeStretchTypeSelect,bind:this}),w=S.tsx("tr",{class:this.classes((a={},a[g.percentClipOptionsRow]=_===T,a[g.displayHidden]=_!==T,a))},S.tsx("td",null,S.tsx("label",null,p.minLabel)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeMinPercentInput,bind:this})),S.tsx("td",null,S.tsx("label",null,p.maxLabel)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeMaxPercentInput,bind:this}))),R=S.tsx("tr",{class:this.classes((i={},i[g.stdDeviationOptionsRow]=_===P,i[g.displayHidden]=_!==P,i))},S.tsx("td",{colSpan:2},S.tsx("label",null,p.nStdDeviationsLabel)),S.tsx("td",{colSpan:2},S.tsx("div",{afterCreate:this._placeStandardDeviationsInput,bind:this}))),k=S.tsx("div",{class:this.classes((n={},n[g.displayBlock]=m===f||m===C,n[g.displayHidden]=m!==f,n))},S.tsx("div",{afterCreate:this._createStretchTitlePane,bind:this},S.tsx("table",{class:g.table},S.tsx("tr",{class:g.stretchOptionsBlock},S.tsx("td",{colSpan:2},S.tsx("label",null,p.stretchTypeLabel)),S.tsx("td",{colSpan:2},q)),w,R,S.tsx("tr",{class:this.classes((o={},o[g.stretchGammaBlock]=_!==B,o[g.displayHidden]=_===B,o))},S.tsx("td",{colSpan:2},S.tsx("label",null,p.gammaLabel)),S.tsx("td",{colSpan:2},S.tsx("div",{afterCreate:this._placeGammaInput,bind:this}))),S.tsx("tr",{class:this.classes((l={},l[g.stretchDraBlock]=_!==B,l[g.displayHidden]=_===B,l))},S.tsx("td",{colSpan:4},S.tsx("div",{class:g.checkbox,afterCreate:this._placeStretchStatisticsCheckbox,bind:this}),S.tsx("label",null,p.draStatisticsTitle)))))),U=S.tsx("div",{class:this.classes((r={},r[g.displayBlock]=m===C,r[g.displayHidden]=m!==C,r))},S.tsx("div",{afterCreate:this._createBandCombinationTitlePane,bind:this},S.tsx("table",{class:g.table},S.tsx("tr",{class:this.classes((c={},c[g.stdDeviationOptionsRow]=this._supportsBandPresets,c[g.displayHidden]=!this._supportsBandPresets,c))},S.tsx("td",null,S.tsx("label",null,p.bandCombinationPresetLabel)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeBandCombinationPresetSelect,bind:this}))),S.tsx("tr",null,S.tsx("td",null,S.tsx("label",null,p.redBandTitle)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeRedBandSelect,bind:this}))),S.tsx("tr",null,S.tsx("td",null,S.tsx("label",null,p.greenBandTitle)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeGreenBandSelect,bind:this}))),S.tsx("tr",null,S.tsx("td",null,S.tsx("label",null,p.blueBandTitle)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeBlueBandSelect,bind:this})))))),G=S.tsx("div",{class:this.classes((u={},u[g.displayBlock]=m===x,u[g.displayHidden]=m!==x,u))},S.tsx("table",{class:g.table},S.tsx("tr",null,S.tsx("td",null,S.tsx("label",null,p.valueFieldTitle)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeUniqueValueFieldSelect,bind:this}))),S.tsx("tr",null,S.tsx("td",null,S.tsx("label",null,p.colorSchemeLabel)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeUniqueValueColorSchemeSelect,bind:this}))),S.tsx("tr",null,S.tsx("td",null,S.tsx("label",null,p.noDataLabel)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeUniqueValueNoDataInput,bind:this})))),S.tsx("div",{afterCreate:this._placeUniqueValuesGrid,bind:this})),M=S.tsx("div",{class:this.classes((d={},d[g.displayBlock]=m===v,d[g.displayHidden]=m!==v,d))},S.tsx("table",{class:g.table},S.tsx("tr",null,S.tsx("td",null,S.tsx("label",null,p.colorSchemeLabel)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeDiscreteColorSchemeSelect,bind:this}))),S.tsx("tr",null,S.tsx("td",null,S.tsx("label",null,p.numberOfColors)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeDiscreteNColorsInput,bind:this}))),S.tsx("tr",null,S.tsx("td",null,S.tsx("label",null,p.noDataLabel)),S.tsx("td",null,S.tsx("div",{afterCreate:this._placeDiscreteNoDataInput,bind:this})))));return S.tsx("div",null,D,N,U,V,k,G,M)},t.prototype._createUIComponents=function(){this._createSymbologySelect(),this._createStretchStatisticsCheckbox(),this._createBandSelect(),this._createStretchTypeSelect(),this._createColorRampSelect(),this._createBandCombinationPresetSelect(),this._createRedBandSelect(),this._createGreenBandSelect(),this._createBlueBandSelect(),this._createNoDataInput(),this._createMinPercentInput(),this._createMaxPercentInput(),this._createStandardDeviationsInput(),this._createGammaInput(),this._createUniqueValueFieldSelect(),this._createUniqueValueColorSchemeSelect(),this._createUniqueValueNoDataInput(),this._createUniqueValuesGrid(),this._createDiscreteColorSchemeSelect(),this._createDiscreteNoDataInput(),this._createDiscreteNColorsInput()},t.prototype._createSymbologySelect=function(){var e=this;this._symbologySelect=new r({store:this._getSymbologyStore(),class:g.filteringSelect,labelAttr:"label",labelType:"html",onChange:function(t){return e._updateSymbologyType(t)},value:this.defaultParams.symbologyType}),this._symbologySelect.startup(),this._components.push(this._symbologySelect)},t.prototype._createStretchStatisticsCheckbox=function(){var e=this;this._stretchStatisticsCheckBox=new l({onChange:function(){return e._updateSymbology()}}),this._stretchStatisticsCheckBox.startup(),this._components.push(this._stretchStatisticsCheckBox)},t.prototype._createColorSchemeTitlePane=function(e){this._colorSchemeTitlePane=new o({title:p.colorRampTitle},e),this._colorSchemeTitlePane.startup(),this._components.push(this._colorSchemeTitlePane)},t.prototype._createNoDataTitlePane=function(e){this._noDataTitlePane=new o({title:p.backgroundTitle},e),this._noDataTitlePane.startup(),this._components.push(this._noDataTitlePane)},t.prototype._createStretchTitlePane=function(e){this._stretchTitlePane=new o({title:p.stretchTitle},e),this._stretchTitlePane.startup(),this._components.push(this._stretchTitlePane)},t.prototype._createBandCombinationTitlePane=function(e){this._bandCombinationTitlePane=new o({title:p.bandCombinationTitle},e),this._bandCombinationTitlePane.startup(),this._components.push(this._bandCombinationTitlePane)},t.prototype._createBandSelect=function(){var e=this;this._bandSelect=new r({class:g.filteringSelect,onChange:function(){return e._updateSymbology()}}),this._bandSelect.startup(),this._populateBandSelect(),this._components.push(this._bandSelect)},t.prototype._createStretchTypeSelect=function(){var e=this;this._stretchTypeSelect=new r({class:g.filteringSelect,onChange:function(t){return e._onStretchTypeChange(t)},labelAttr:"label",labelType:"html"}),this._stretchTypeSelect.startup(),this._populateStretchTypeSelect(),this._components.push(this._stretchTypeSelect)},t.prototype._createColorRampSelect=function(){var e=this;this._stretchColorRampSelect=new n({class:g.filteringSelect,maxHeight:300}),this._stretchColorRampSelect.on("change",function(){return e._updateSymbology()}),this._stretchColorRampSelect.startup(),this._stretchColorRampSelect.set("value",this.defaultParams.colorRamp),this._components.push(this._stretchColorRampSelect)},t.prototype._createBandCombinationPresetSelect=function(){var e=this;this._bandCombinationPresetSelect=new r({class:g.filteringSelect,onChange:function(t){return e._updateBandCombination(t)},labelType:"html",labelAttr:"label",maxHeight:350}),this._bandCombinationPresetSelect.startup(),this._components.push(this._bandCombinationPresetSelect)},t.prototype._createRedBandSelect=function(){var e=this;this._redBandSelect=new r({class:g.filteringSelect,onChange:function(){return e._bandCombinationChanged()}}),this._redBandSelect.startup(),this._populateBandLists(),this._components.push(this._redBandSelect)},t.prototype._createGreenBandSelect=function(){var e=this;this._greenBandSelect=new r({class:g.filteringSelect,onChange:function(){return e._bandCombinationChanged()}}),this._greenBandSelect.startup(),this._populateBandLists(),this._components.push(this._greenBandSelect)},t.prototype._createBlueBandSelect=function(){var e=this;this._blueBandSelect=new r({class:g.filteringSelect,onChange:function(){return e._bandCombinationChanged()}}),this._blueBandSelect.startup(),this._populateBandLists(),this._components.push(this._blueBandSelect)},t.prototype._createNoDataInput=function(){var e=this;this._noDataInput=new u({class:g.filteringSelect,onChange:function(){return e._updateSymbology()}}),this._noDataInput.startup(),this._components.push(this._noDataInput)},t.prototype._createMinPercentInput=function(){var e=this;this._minPercentInput=new u({class:g.filteringSelect,onChange:function(){return e._updateSymbology()},value:this.defaultParams.minPercent}),this._minPercentInput.startup(),this._components.push(this._minPercentInput)},t.prototype._createMaxPercentInput=function(){var e=this;this._maxPercentInput=new u({class:g.filteringSelect,onChange:function(){return e._updateSymbology()},value:this.defaultParams.maxPercent}),this._maxPercentInput.startup(),this._components.push(this._maxPercentInput)},t.prototype._createStandardDeviationsInput=function(){var e=this;this._standardDeviationsInput=new u({class:g.filteringSelect,onChange:function(){return e._updateSymbology()},value:this.defaultParams.numberOfStandardDeviations}),this._standardDeviationsInput.startup(),this._components.push(this._standardDeviationsInput)},t.prototype._createGammaInput=function(){var e=this;this._gammaInput=new c({class:g.filteringSelect,onChange:function(){return e._updateSymbology()},value:this.defaultParams.gamma,smallDelta:.1}),this._gammaInput.startup(),this._components.push(this._gammaInput)},t.prototype._createUniqueValueFieldSelect=function(){var e=this;this._uniqueValueFieldSelect=new r({class:g.filteringSelect,onChange:function(){return e._updateUniqueValueGrid()}}),this._populateUniqueValueFieldSelect(),this._components.push(this._uniqueValueFieldSelect)},t.prototype._createUniqueValueColorSchemeSelect=function(){var e=this;this._uniqueValueColorSchemeSelect=new n({class:g.filteringSelect,maxHeight:300}),this._uniqueValueColorSchemeSelect.on("change",function(){return e._updateUniqueValueGrid()}),this._uniqueValueColorSchemeSelect.startup(),this.defaultParams.uniqueValuesColorRamp&&(this.defaultParams.uniqueValuesColorRamp.name=p.uniqueValuesColorRampTitle,this._uniqueValueColorSchemeSelect.addColorRamp(this.defaultParams.uniqueValuesColorRamp,!0)),this._components.push(this._uniqueValueColorSchemeSelect)},t.prototype._createUniqueValueNoDataInput=function(){var e=this;this._uniqueValueNoDataInput=new u({class:g.filteringSelect,onChange:function(){return e._updateSymbology()}}),this._components.push(this._uniqueValueNoDataInput),this._uniqueValueNoDataInput.startup()},t.prototype._createDiscreteColorSchemeSelect=function(){var e=this;this._discreteColorSchemeSelect=new n({class:g.filteringSelect,maxHeight:300}),this._discreteColorSchemeSelect.on("change",function(){e._updateSymbology()}),this._discreteColorSchemeSelect.startup(),this._discreteColorSchemeSelect.set("value",this.defaultParams.colorRamp),this._components.push(this._discreteColorSchemeSelect)},t.prototype._createDiscreteNoDataInput=function(){var e=this;this._discreteNoDataInput=new u({class:g.filteringSelect,onChange:function(){return e._updateSymbology()}}),this._discreteNoDataInput.startup(),this._components.push(this._discreteNoDataInput)},t.prototype._createDiscreteNColorsInput=function(){var e=this;this._discreteNColorsInput=new u({class:g.filteringSelect,onChange:function(){return e._updateSymbology()},value:this.defaultParams.discreteNColors}),this._discreteNColorsInput.startup(),this._components.push(this._discreteNColorsInput)},t.prototype._createUniqueValuesGrid=function(){this._uniqueValuesGrid=new i({columns:[{field:"esriRasterSymbologyEditorUniqueValueSymbol",renderCell:function(e,t,s){s.innerHTML="<div class = "+g.dgridSymbolCell+'\n          style = "background: rgb( '+e.esriRasterSymbologyEditorUniqueValueSymbol.r+",\n          "+e.esriRasterSymbologyEditorUniqueValueSymbol.g+",\n          "+e.esriRasterSymbologyEditorUniqueValueSymbol.b+'");></div>'},label:p.symbolLabel},{field:"esriRasterSymbologyEditorUniqueValueValue",label:p.valueLabel}]}),this._uniqueValuesGrid.startup(),this._components.push(this._uniqueValuesGrid)},t.prototype._placeSymbologySelect=function(e){this._symbologySelect&&d.place(this._symbologySelect.domNode,e)},t.prototype._placeStretchStatisticsCheckbox=function(e){this._stretchStatisticsCheckBox&&d.place(this._stretchStatisticsCheckBox.domNode,e)},t.prototype._placeBandSelect=function(e){this._bandSelect&&d.place(this._bandSelect.domNode,e)},t.prototype._placeStretchTypeSelect=function(e){this._stretchTypeSelect&&d.place(this._stretchTypeSelect.domNode,e)},t.prototype._placeColorRampSelect=function(e){this._stretchColorRampSelect&&d.place(this._stretchColorRampSelect.domNode,e)},t.prototype._placeBandCombinationPresetSelect=function(e){this._bandCombinationPresetSelect&&d.place(this._bandCombinationPresetSelect.domNode,e)},t.prototype._placeRedBandSelect=function(e){this._redBandSelect&&d.place(this._redBandSelect.domNode,e)},t.prototype._placeGreenBandSelect=function(e){this._colorSchemeTitlePane&&d.place(this._greenBandSelect.domNode,e)},t.prototype._placeBlueBandSelect=function(e){this._blueBandSelect&&d.place(this._blueBandSelect.domNode,e)},t.prototype._placeNoDataInput=function(e){this._noDataInput&&d.place(this._noDataInput.domNode,e)},t.prototype._placeMinPercentInput=function(e){this._minPercentInput&&d.place(this._minPercentInput.domNode,e)},t.prototype._placeMaxPercentInput=function(e){this._maxPercentInput&&d.place(this._maxPercentInput.domNode,e)},t.prototype._placeStandardDeviationsInput=function(e){this._standardDeviationsInput&&d.place(this._standardDeviationsInput.domNode,e)},t.prototype._placeGammaInput=function(e){this._gammaInput&&d.place(this._gammaInput.domNode,e)},t.prototype._placeUniqueValueFieldSelect=function(e){this._uniqueValueFieldSelect&&d.place(this._uniqueValueFieldSelect.domNode,e)},t.prototype._placeUniqueValueColorSchemeSelect=function(e){this._uniqueValueColorSchemeSelect&&d.place(this._uniqueValueColorSchemeSelect.domNode,e)},t.prototype._placeUniqueValueNoDataInput=function(e){this._uniqueValueNoDataInput&&d.place(this._uniqueValueNoDataInput.domNode,e)},t.prototype._placeUniqueValuesGrid=function(e){this._uniqueValuesGrid&&d.place(this._uniqueValuesGrid.domNode,e)},t.prototype._placeDiscreteColorSchemeSelect=function(e){this._discreteColorSchemeSelect&&d.place(this._discreteColorSchemeSelect.domNode,e)},t.prototype._placeDiscreteNoDataInput=function(e){this._discreteNoDataInput&&d.place(this._discreteNoDataInput.domNode,e)},t.prototype._placeDiscreteNColorsInput=function(e){this._discreteNColorsInput&&d.place(this._discreteNColorsInput.domNode,e)},t.prototype._bandCombinationChanged=function(){this._redBandSelect&&this._redBandSelect.validate()&&this._greenBandSelect&&this._greenBandSelect.validate()&&this._blueBandSelect&&this._blueBandSelect.validate()&&this._updateSymbology()},t.prototype._updateBandCombination=function(e){if("custom"===e)return this._redBandSelect.set("disabled",!1),this._greenBandSelect.set("disabled",!1),void this._blueBandSelect.set("disabled",!1);var t,s=this._bandCombinationPresetSelect.store.data;s.some(function(s){e===s.id&&(t=s.combination)}),t&&(this._redBandSelect.set({value:t[0]-1,disabled:!0}),this._greenBandSelect.set({value:t[1]-1,disabled:!0}),this._blueBandSelect.set({value:t[2]-1,disabled:!0}),this._updateSymbology())},t.prototype._updateSymbologyType=function(e){this.symbologyType=e,this._updateSymbology()},t.prototype._updateUniqueValueGrid=function(){var e=this.viewModel.getUniqueValueGridData(this._uniqueValueColorSchemeSelect.colorRamp,this._uniqueValueFieldSelect.value);e&&(this._uniqueValuesGrid.refresh(),this._uniqueValuesGrid.renderArray(e),this._uniqueValuesSymbolData=e,this._updateSymbology())},t.prototype._populateUniqueValueFieldSelect=function(){var e=this.viewModel.getUniqueValueFields(),t=new h({data:e,idProperty:"name"});this._uniqueValueFieldSelect.set({store:t,labelAttr:"alias",value:this.defaultParams.uniqueValuesField})},t.prototype._populateStretchTypeSelect=function(){var e,t,s,a=m.clone(this.viewModel.stretchTypes);a.forEach(function(a){e=p[a.name+"StretchTypeDescription"]||p[a.name+"TypeDescription"],s=g[a.name+"StretchTypeIcon"],t=p[a.name+"StretchTitle"],a.id=a.filterType.toString(),a.label="<html><body><section>\n        <h4>"+t+"</h4>\n        <table><tr>\n          <td class="+g.menuItemTd+'>\n            <img class="'+s+" "+g.thumbnailImage+'" />\n          </td>\n          <td class='+g.menuItemTd+">\n            <p class="+g.menuItemText+"><i>"+e+"</i></p>\n          </td>\n          </tr></table>\n        </section></body></html>",a.name=t}),this._stretchTypeSelect.set({store:new h({data:a}),value:this.defaultParams.stretchType.toString(),labelAttr:"label",labelType:"html"})},t.prototype._populateBandSelect=function(){var e,t=this;this.viewModel.getBandData().then(function(s){e=new h({data:s.lists[0],idProperty:"index"}),t._bandSelect.set("store",e),1===s.lists[0].length&&t._bandSelect.set({value:s.lists[0][0].index,disabled:!0})})},t.prototype._populateBandLists=function(){var e=this;if(this._redBandSelect&&this._greenBandSelect&&this._blueBandSelect&&this._bandCombinationPresetSelect){var t,s,a,i,n,o,l,r=[this._redBandSelect,this._greenBandSelect,this._blueBandSelect],c=[];this.viewModel.getBandData().then(function(u){u.lists.forEach(function(e,t){e.some(function(e){if(e.selected)return s=e.index,!0}),a=new h({data:e,idProperty:"index"}),r[t].set({store:a,value:s})}),u.presets&&u.presets.length?(e._supportsBandPresets=!0,u.presets.forEach(function(e,s){t=Object.keys(e)[0],n=p["bandComboName"+t],o=p["bandComboDesc"+t],l=g["bandCombinationPreset"+t+"Icon"],c.push({name:p["bandComboName"+t],label:"<html><body><section>\n              <h4>"+n+"</h4>\n              <table><tr>\n                <td class="+g.menuItemTd+'>\n                  <img class= "'+l+" "+g.thumbnailImage+'" />\n                </td>\n                <td class='+g.menuItemTd+">\n                  <p class="+g.menuItemText+"><i>"+o+"</i></p>\n                </td>\n              </tr></table>\n            </section></body></html>",combination:e[t],id:t})}),c.push({name:p.bandComboNameCustom,combination:null,id:"custom",label:"<html><body><section>\n            <h4> "+p.bandComboNameCustom+":</h4>\n            <table cellspacing='5'>\n              <tr>\n                <td class="+g.menuItemTd+">\n                  <p class="+g.menuItemText+"><i>"+p.bandComboNameCustom+"</i></p>\n                </td>\n              </tr>\n            </table>\n          </section></body></html>"}),i=new h({data:c}),e._bandCombinationPresetSelect.set({store:i,value:"custom"})):e._supportsBandPresets=!1,e.scheduleRender()})}},t.prototype._onStretchTypeChange=function(e){var t;this._stretchTypeSelect.store.data.forEach(function(s){s.id===e&&(t=s.filterType)}),this.stretchType=t,this.scheduleRender(),this._updateSymbology()},t.prototype._updateSymbology=function(){if(this._symbologySelect&&this._stretchTypeSelect&&this._stretchColorRampSelect&&this._noDataInput&&this._minPercentInput&&this._maxPercentInput&&this._stretchTypeSelect&&this._gammaInput&&this._standardDeviationsInput){var e=this._getProperties();this.viewModel.updateRendering(e)}},t.prototype._getProperties=function(){var e={};return e.symbologyType=this._symbologySelect.value,e.stretchType=this.stretchType,e.minPercent=this._minPercentInput.value,e.maxPercent=this._maxPercentInput.value,e.numberOfStandardDeviations=this._standardDeviationsInput.value,this.symbologyType===b.SymbologyTypes.uniqueValue?e.noData=this._uniqueValueNoDataInput.value:this.symbologyType===b.SymbologyTypes.discrete?e.noData=this._discreteNoDataInput.value:e.noData=this._noDataInput.value,e.gamma=this._gammaInput.value,e.colorRampName=this._stretchColorRampSelect.colorRampName,e.dra=this._stretchStatisticsCheckBox.checked,e.selectedBand=this._bandSelect.value,e.bandIds=[this._redBandSelect.value,this._greenBandSelect.value,this._blueBandSelect.value],e.uniqueValuesColorRamp=this._uniqueValueColorSchemeSelect.colorRamp,e.uniqueValuesSymbolData=this._uniqueValuesSymbolData,e.discreteColorRamp=this._discreteColorSchemeSelect.colorRamp,e.discreteNColors=this._discreteNColorsInput.value,e},t.prototype._getSymbologyStore=function(){var e,t,s,a=this.viewModel.getSymbologyTypes(),i=[];return a.forEach(function(a){e=p[a+"Title"],t=p[a+"Description"]||p[a+"Title"],s=g[a+"SymbologyTypeIcon"],i.push({id:a,name:e,label:"<html><body><section>\n          <h4>"+e+"</h4>\n          <table><tr>\n            <td class="+g.menuItemTd+"><img class= "+s+" /></td>\n            <td class="+g.menuItemTd+">\n              <p class="+g.menuItemText+"><i>"+t+"</i></p>\n            </td>\n          </tr></table>\n        </section></body></html>"})},this),new h({data:i})},a([_.property(),S.renderable()],t.prototype,"layer",void 0),a([_.property()],t.prototype,"defaultParams",void 0),a([_.property({type:b})],t.prototype,"viewModel",void 0),a([_.property(),S.renderable()],t.prototype,"stretchType",void 0),a([_.property(),S.renderable()],t.prototype,"symbologyType",void 0),t=a([_.subclass("esri.widgets.RasterSymbologyEditor")],t)}(_.declared(y))});