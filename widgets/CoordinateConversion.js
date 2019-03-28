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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!../nls/common","dojo/i18n!./CoordinateConversion/nls/CoordinateConversion","dojo/keys","../core/global","../core/Logger","../core/accessorSupport/decorators","./Widget","./CoordinateConversion/CoordinateConversionViewModel","./CoordinateConversion/support/Conversion","./support/widget"],function(e,t,o,i,n,s,r,a,l,d,p,c,u,v){var _={base:"esri-coordinate-conversion esri-widget",captureMode:"esri-coordinate-conversion--capture-mode",noBasemap:"esri-coordinate-conversion--no-basemap",popup:"esri-coordinate-conversion__popup",conversionList:"esri-coordinate-conversion__conversion-list",conversionRow:"esri-coordinate-conversion__row",coordDisplay:"esri-coordinate-conversion__display",expanded:"esri-coordinate-conversion__conversions-view--expanded",expandDown:"esri-coordinate-conversion__conversions-view--expand-down",expandUp:"esri-coordinate-conversion__conversions-view--expand-up",conversionsView:"esri-coordinate-conversion__conversions-view",primarySelect:"esri-coordinate-conversion__select-primary",rowSelect:"esri-coordinate-conversion__select-row",toolDisplay:"esri-coordinate-conversion__tools",modeToggle:"esri-coordinate-conversion__mode-toggle",rowButton:"esri-coordinate-conversion__row-button",backButton:"esri-coordinate-conversion__back-button",convertButton:"esri-coordinate-conversion__button",coordinateInput:"esri-coordinate-conversion__input-coordinate",inputForm:"esri-coordinate-conversion__input-form",inputFormGroup:"esri-coordinate-conversion__input-group",rejectInput:"esri-coordinate-conversion__input-coordinate--rejected",sectionHeading:"esri-coordinate-conversion__heading",patternInput:"esri-coordinate-conversion__pattern-input",settings:"esri-coordinate__settings",settingsFormGroup:"esri-coordinate-conversion__settings-group",settingsFormGroupHorizontal:"esri-coordinate-conversion__settings-group-horizontal",previewCoordinate:"esri-coordinate-conversion__preview-coordinate",disabled:"esri-disabled",input:"esri-input",button:"esri-button",header:"esri-widget__heading",widgetButton:"esri-widget--button",leftArrow:"esri-icon-left-arrow",captureButton:"esri-icon-map-pin",collapseButton:"esri-icon-down",copyButton:"esri-icon-duplicate",editButton:"esri-icon-edit",esriSelect:"esri-select",expandButton:"esri-icon-up",goToButton:"esri-icon-locate",refresh:"esri-icon-refresh",removeConversion:"esri-icon-close",settingsButton:"esri-icon-settings2"},h=l.getLogger("esri.widgets.CoordinateConversion");return function(e){function t(t){var o=e.call(this)||this;return o._popupMessage=null,o._popupId=null,o._coordinateInput=null,o._badInput=!1,o._goToEnabled=!1,o._conversionFormat=null,o._settingsFormat=null,o._previewConversion=null,o._expanded=!1,o._popupVisible=!1,o._settingsVisible=!1,o._inputVisible=!1,o.conversions=null,o.currentLocation=null,o.formats=null,o.goToOverride=null,o.mode=null,o.orientation="auto",o.requestDelay=null,o.view=null,o.viewModel=new c,o}return o(t,e),Object.defineProperty(t.prototype,"multipleConversions",{get:function(){var e=this._get("multipleConversions");return"boolean"!=typeof e||e},set:function(e){!1===e&&(this._expanded=!1,this.conversions.splice(1,this.conversions.length-1)),this._set("multipleConversions",e)},enumerable:!0,configurable:!0}),t.prototype.reverseConvert=function(e,t){return null},t.prototype.render=function(){var e,t=this.get("viewModel.state"),o="disabled"===t?v.tsx("div",{key:"esri-coordinate__no-basemap"},s.noBasemap):null,i=!o&&this._inputVisible?this._renderInputForm():null,n=!o&&this._settingsVisible?this._renderSettings():null,r=o||i||n?null:this._renderConversionsView(),a=this._popupVisible?this._renderPopup():null,l=(e={},e[_.captureMode]="capture"===this.mode,e[_.disabled]="loading"===t,e[_.noBasemap]="disabled"===t,e);return v.tsx("div",{class:this.classes(_.base,l)},a,o,r,n,i)},t.prototype._addConversion=function(e){var t=e.target,o=t.options[t.options.selectedIndex]["data-format"],i=t["data-index"],n=new u({format:o});t.options.selectedIndex=0,i>=0&&this.conversions.removeAt(i),this.conversions.add(n,i)},t.prototype._findSettingsFormat=function(){return this._settingsFormat||this.conversions.reduceRight(function(e,t,o){var i=t.format;return i.get("hasDisplayProperties")?i:e},null)||this.formats.find(function(e){return e.hasDisplayProperties})},t.prototype._hidePopup=function(){this._popupId&&(clearTimeout(this._popupId),this._popupId=null),this._popupVisible=!1,this._popupMessage=null,this.scheduleRender()},t.prototype._onConvertComplete=function(){this._inputVisible=!1,this._coordinateInput.value=""},t.prototype._onCopy=function(e){var t=e.currentTarget,o=t["data-conversion"].displayCoordinate;"clipboardData"in a?a.clipboardData.setData("text",o):e.clipboardData.setData("text/plain",o),this._showPopup(s.copySuccessMessage),e.preventDefault()},t.prototype._processUserInput=function(e){var t=this,o=e.keyCode,i=this.viewModel;if(o!==r.ENTER&&o)this._badInput&&(this._badInput=!1);else{var n=this._coordinateInput["data-format"],a=this._coordinateInput.value;this._reverseConvert(a,n).then(function(e){"capture"===t.mode?i.resume():t.mode="capture",t.currentLocation=e,i.setLocation(e),t._onConvertComplete()}).catch(function(e){h.error(e),t._showPopup(s.invalidCoordinate),t._badInput=!0})}},t.prototype._reverseConvert=function(e,t){var o=this,i=this.viewModel;return t.reverseConvert(e).then(function(e){return o._goToEnabled&&i.goToLocation(e).catch(function(e){h.warn(e),o._showPopup(s.locationOffBasemap)}),e})},t.prototype._setInputFormat=function(e){var t=e.target,o=t[t.options.selectedIndex]["data-format"];this._conversionFormat=o},t.prototype._setPreviewConversion=function(){var e=this._findSettingsFormat(),t=this.viewModel;if(e){var o=this.conversions.find(function(t){return t.format===e});this._previewConversion=new u({format:e,position:{location:this.currentLocation,coordinate:o&&o.position.coordinate}}),this._previewConversion.position.coordinate||t.previewConversion(this._previewConversion)}},t.prototype._setSettingsFormat=function(e){var t=e.target,o=t[t.options.selectedIndex]["data-format"];this._settingsFormat=o,this._setPreviewConversion()},t.prototype._showPopup=function(e,t){var o=this;void 0===t&&(t=2500),this._popupMessage=e,this._popupVisible?clearTimeout(this._popupId):this._popupVisible=!0,this.scheduleRender(),this._popupId=setTimeout(function(){o._popupId=null,o._hidePopup()},t)},t.prototype._toggleGoTo=function(){this._goToEnabled=!this._goToEnabled},t.prototype._updateCurrentPattern=function(e){e.stopPropagation();var t=e.target,o=this._findSettingsFormat();o&&(o.currentPattern=t.value)},t.prototype._renderConversion=function(e,t){var o=this.id,i=o+"__list-item-"+t,n=e.format.name+" "+s.conversionOutputSuffix,r=0===t,a=r||this._expanded,l=r?this._renderFirstConversion(e,i):this._renderTools(t,e,i),d=r&&!e.displayCoordinate?s.noLocation:e.displayCoordinate,p=v.tsx("div",{"aria-label":d,class:_.coordDisplay,"data-conversion":e,role:"listitem",tabindex:"0",title:d},d),c=this._renderOptions(this.formats.filter(function(t){return t!==e.format}));return a?v.tsx("li",{"aria-label":n,class:_.conversionRow,id:i,key:e,role:"group",title:n,tabindex:"0"},v.tsx("select",{"aria-controls":i,"aria-label":s.selectFormat,class:this.classes(_.esriSelect,_.rowSelect),bind:this,"data-index":t,onchange:this._addConversion,title:s.selectFormat},v.tsx("option",{"aria-label":e.format.name,selected:!0,title:e.format.name},e.format.name.toUpperCase()),c),p,l):null},t.prototype._renderCopyButton=function(e){return v.tsx("li",{"aria-label":n.copy,bind:this,class:this.classes(_.widgetButton,_.rowButton),"data-conversion":e,onclick:this._copyCoordinateOutput,onkeydown:this._copyCoordinateOutput,oncopy:this._onCopy,role:"button",tabindex:"0",title:n.copy},v.tsx("span",{"aria-hidden":"true",class:_.copyButton}))},t.prototype._renderFirstConversion=function(e,t){var o,i=this.id,r=(o={},o[_.expandButton]=!this._expanded,o[_.collapseButton]=this._expanded,o),a="live"===this.mode?s.captureMode:s.liveMode,l=this._expanded?n.collapse:n.expand,d=e.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(e):null,p=this.multipleConversions?v.tsx("li",{"aria-controls":i+"__"+_.conversionList,"aria-label":l,bind:this,class:_.widgetButton,key:"esri-coordinate-conversion__expand-button",onclick:this._toggleExpand,onkeydown:this._toggleExpand,role:"button",tabindex:"0",title:l},v.tsx("span",{"aria-hidden":"true",class:this.classes(r)})):v.tsx("li",{"aria-label":a,bind:this,class:this.classes(_.widgetButton,_.modeToggle),key:"esri-coordinate-conversion__mode-toggle",onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:a},v.tsx("span",{"aria-hidden":"true",class:_.captureButton}));return v.tsx("ul",{class:_.toolDisplay},d,p)},t.prototype._renderInputForm=function(){var e,t=this._conversionFormat||this.conversions.getItemAt(0).format,o=this.formats.findIndex(function(e){return e.name===t.name}),i=this.id,r=i+"__"+_.coordinateInput,a=i+"__"+_.coordinateInput+"__header",l=this._renderOptions(this.formats,!0,o),d=(e={},e[_.rejectInput]=this._badInput,e);return v.tsx("div",{"aria-labelledby":a,class:_.inputForm,key:"esri-coordinate-conversion__input-form",role:"search"},v.tsx("div",{class:_.sectionHeading},v.tsx("div",{"aria-label":n.back,bind:this,class:this.classes(_.widgetButton,_.backButton),onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:n.back},v.tsx("span",{"aria-hidden":"true",class:_.leftArrow})),v.tsx("h4",{class:_.header,id:a},s.inputCoordTitle)),v.tsx("div",{class:_.inputFormGroup},v.tsx("select",{"aria-controls":r,"aria-label":s.selectFormat,bind:this,class:this.classes(_.esriSelect,_.rowSelect),onchange:this._setInputFormat,title:s.selectFormat},l),v.tsx("input",{afterCreate:v.storeNode,"aria-labelledby":a,"aria-required":"true",bind:this,class:this.classes(_.coordinateInput,_.input,d),"data-format":t,"data-node-ref":"_coordinateInput",id:r,onkeydown:this._processUserInput,placeholder:s.inputCoordTitle,role:"textbox",spellcheck:!1,title:s.inputCoordTitle,type:"text"})),v.tsx("div",{class:_.inputFormGroup},v.tsx("label",{"aria-label":s.goTo},v.tsx("input",{bind:this,checked:this._goToEnabled,onclick:this._toggleGoTo,title:s.goTo,type:"checkbox"}),s.goTo),v.tsx("button",{"aria-label":s.convert,bind:this,class:this.classes(_.convertButton,_.button),onclick:this._processUserInput,title:s.convert,type:"button"},s.convert)))},t.prototype._renderConversionsView=function(){var e,t=this,o=this.id,i=o+"__"+_.conversionList,n=this._renderPrimaryTools(),r=this._renderOptions(this.formats),a=this.conversions.map(function(e,o){return t._renderConversion(e,o)}).toArray(),l=this._expanded?v.tsx("div",{class:_.conversionRow},v.tsx("select",{"aria-controls":i,"aria-label":s.addConversion,bind:this,class:this.classes(_.esriSelect,_.primarySelect),onchange:this._addConversion,title:s.addConversion},v.tsx("option",{disabled:!0,selected:!0,value:""},s.addConversion),r),n):null,d=(e={},e[_.expanded]=this._expanded,e[_.expandUp]="expand-up"===this.orientation,e[_.expandDown]="expand-down"===this.orientation,e);return v.tsx("div",{class:this.classes(_.conversionsView,d),key:"esri-coordinate-conversion__main-view"},v.tsx("ul",{"aria-expanded":this._expanded?"true":"false",class:_.conversionList,id:i},a),l)},t.prototype._renderOptions=function(e,t,o){var i=this,n=this.conversions.getItemAt(0);return e.map(function(e,s){var r=!(t||!n)&&(n.format.name===e.name||i.conversions.map(function(e){return e.format.name}).includes(e.name));return v.tsx("option",{"aria-label":e.name,"data-format":e,disabled:r,key:e.name,selected:s===o,value:e.name},e.name.toUpperCase())}).toArray()},t.prototype._renderPopup=function(){return v.tsx("div",{class:_.popup,role:"alert"},this._popupMessage)},t.prototype._renderPrimaryTools=function(){var e="live"===this.mode?s.captureMode:s.liveMode;return v.tsx("ul",{class:_.toolDisplay},v.tsx("li",{bind:this,class:_.widgetButton,onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:s.inputCoordTitle},v.tsx("span",{"aria-hidden":"true",class:_.editButton})),v.tsx("li",{bind:this,class:this.classes(_.widgetButton,_.modeToggle),onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:e},v.tsx("span",{"aria-hidden":"true",class:_.captureButton})),v.tsx("li",{bind:this,class:_.widgetButton,onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:s.settingsTitle},v.tsx("span",{"aria-hidden":"true",class:_.settingsButton})))},t.prototype._renderSettings=function(){var e=this.id,t=e+"__"+_.patternInput,o=e+"__"+_.patternInput+"__header",i=e+"__"+_.previewCoordinate,r=this.formats.filter(function(e){return e.hasDisplayProperties}),a=this._findSettingsFormat(),l=r.indexOf(a),d=this._renderOptions(r,!0,l),p=a.get("currentPattern");return v.tsx("div",{"aria-labelledby":o,class:_.settings,key:"esri-coordinate-conversion__settings"},v.tsx("div",{class:_.sectionHeading},v.tsx("div",{bind:this,class:this.classes(_.widgetButton,_.backButton),onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:n.back},v.tsx("span",{"aria-hidden":"true",class:_.leftArrow})),v.tsx("h4",{class:_.header,id:o},s.settingsTitle)),v.tsx("div",{class:_.settingsFormGroup},v.tsx("label",{for:t},s.changeCoordinateDisplay),v.tsx("select",{"aria-label":s.selectFormat,class:_.esriSelect,bind:this,onchange:this._setSettingsFormat,title:s.selectFormat},d),v.tsx("div",{class:_.settingsFormGroupHorizontal},v.tsx("input",{"aria-controls":i,bind:this,class:this.classes(_.patternInput,_.input),id:t,oninput:this._updateCurrentPattern,spellcheck:!1,title:s.changeCoordinateDisplay,type:"text",value:p}),v.tsx("div",{"aria-controls":t,bind:this,class:_.widgetButton,onclick:this._setDefaultPattern,onkeydown:this._setDefaultPattern,role:"button",tabindex:"0",title:s.defaultPattern},v.tsx("span",{"aria-hidden":"true",class:_.refresh})))),v.tsx("div",{class:_.settingsFormGroup},v.tsx("label",null,n.preview,v.tsx("div",{class:_.previewCoordinate,id:i,tabindex:"0"},this._previewConversion.displayCoordinate))))},t.prototype._renderTools=function(e,t,o){var i=t.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(t):null;return v.tsx("ul",{class:_.toolDisplay,role:"listitem"},i,v.tsx("li",{"aria-controls":o,"aria-label":s.removeConversion,bind:this,class:this.classes(_.widgetButton,_.rowButton),"data-index":e,key:o+"__"+_.widgetButton,onclick:this._removeConversion,onkeydown:this._removeConversion,tabindex:"0",role:"button",title:s.removeConversion},v.tsx("span",{"aria-hidden":"true",class:_.removeConversion})))},t.prototype._copyCoordinateOutput=function(e){var t=e.target;if(!("createTextRange"in document.body)){var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i)}document.execCommand("copy")},t.prototype._removeConversion=function(e){var t=e.target,o=t["data-index"];this.conversions.removeAt(o)},t.prototype._setDefaultPattern=function(e){e.stopPropagation();var t=this._findSettingsFormat();t&&(t.currentPattern=t.get("defaultPattern"))},t.prototype._toggleExpand=function(){this._expanded=!this._expanded},t.prototype._toggleInputVisibility=function(e){this._inputVisible=!this._inputVisible,this._popupVisible&&this._hidePopup(),this._inputVisible?this.viewModel.pause():this.viewModel.resume()},t.prototype._toggleMode=function(){this.mode="live"===this.mode?"capture":"live"},t.prototype._toggleSettingsVisibility=function(){this._settingsVisible=!this._settingsVisible,this._popupVisible&&this._hidePopup(),this._settingsVisible?(this._setPreviewConversion(),this.viewModel.pause()):this.viewModel.resume()},i([d.aliasOf("viewModel.conversions")],t.prototype,"conversions",void 0),i([d.aliasOf("viewModel.currentLocation"),v.renderable()],t.prototype,"currentLocation",void 0),i([d.aliasOf("viewModel.formats"),v.renderable()],t.prototype,"formats",void 0),i([d.aliasOf("viewModel.goToOverride")],t.prototype,"goToOverride",void 0),i([d.aliasOf("viewModel.mode"),v.renderable()],t.prototype,"mode",void 0),i([d.property(),v.renderable()],t.prototype,"orientation",void 0),i([d.aliasOf("viewModel.requestDelay")],t.prototype,"requestDelay",void 0),i([d.property(),v.renderable()],t.prototype,"multipleConversions",null),i([d.aliasOf("viewModel.locationSymbol")],t.prototype,"locationSymbol",void 0),i([d.aliasOf("viewModel.view"),v.renderable()],t.prototype,"view",void 0),i([d.property({type:c}),v.renderable(["viewModel.state","viewModel.waitingForConversions"])],t.prototype,"viewModel",void 0),i([d.aliasOf("viewModel.reverseConvert")],t.prototype,"reverseConvert",null),i([v.accessibleHandler()],t.prototype,"_copyCoordinateOutput",null),i([v.accessibleHandler()],t.prototype,"_removeConversion",null),i([v.accessibleHandler()],t.prototype,"_setDefaultPattern",null),i([v.accessibleHandler()],t.prototype,"_toggleExpand",null),i([v.accessibleHandler()],t.prototype,"_toggleInputVisibility",null),i([v.accessibleHandler()],t.prototype,"_toggleMode",null),i([v.accessibleHandler()],t.prototype,"_toggleSettingsVisibility",null),t=i([d.subclass("esri.widgets.CoordinateConversion")],t)}(d.declared(p))});