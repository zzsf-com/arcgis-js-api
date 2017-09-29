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

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/dom-construct","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","../grid/ValueField","./containerUtils/QueryUtil","./containerUtils/SerializationManager","../supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","dojo/text!../templates/ReportContainer.html"],function(e,t,i,n,o,s,r,l,a,h,c,d,m,u,g,p){var f=20;return e([l,a],{templateString:p,viewModel:null,themeContext:null,theme:null,documentOptions:null,_sampleWatermarkDiv:null,queryUtil:c,serializationManager:null,postCreate:function(){this.inherited(arguments),this.serializationManager=(new this._getSerializationManagerClass)(this),this.updateLayout(),this.setViewMode(null)},_getSerializationManagerClass:function(){return d},_sectionWidth:0,setDocumentOptions:function(e){this.documentOptions&&t.mixin(this.documentOptions,e),this.updateLayout()},updateLayout:function(){if(this.documentOptions){this._sectionWidth=m.getPageBox(this.documentOptions).contentW-2,this._updateContainerSize(),r.set(this.stackContainer,{paddingLeft:(this.documentOptions.left||0)+"px",paddingRight:(this.documentOptions.right||0)+"px",paddingTop:(this.documentOptions.top||0)+"px",paddingBottom:(this.documentOptions.bottom||0)+"px"});var e=this;this.getReportElements("setWidth").forEach(function(t){e.getElementSection(t).setWidth(e._getSectionWidth(),{resizeContentToFit:!0,preserveRightOffset:!0})})}},_updateContainerSize:function(){r.set(this.stackContainer,"width",this._sectionWidth+("edit"==this._viewMode?145:0)+"px"),r.set(this.mainContainer,"height",r.get(this.domNode,"height")+("edit"==this._viewMode?-17:0)+"px")},_getSectionWidth:function(){return this._sectionWidth},resize:function(e,t){void 0!==e&&r.set(this.domNode,{width:e+"px",height:t+"px"}),this._updateContainerSize()},getCanvasOffsets:function(){var e=r.get(this.domNode,"width"),t=r.get(this.stackContainer,"width")+s.getPadBorderExtents(this.stackContainer).w;return{l:Math.max(15,this.stackContainer.offsetLeft),r:Math.max(10,e-(this.stackContainer.offsetLeft+t))}},getFullWidth:function(){return Math.max(this.stackContainer.scrollWidth,r.get(this.stackContainer,"width"))},getFullHeight:function(){return Math.max(this.stackContainer.scrollHeight,r.get(this.stackContainer,"height"))},addSection:function(e,t,i,n,o){var s=this._createSectionCell(e);this._createSection(e,t,s);var r=this._createReportElement(e,s,i,n,t&&t.json,o);return this.updateReportElement(r),r},_createSection:function(e,t,i){var n;if(t=t||{},t["class"]="reportContainer_Section",t.initialWidth=this._getSectionWidth(),t.viewModel=this.viewModel,t.themeContext=this.themeContext,t.theme=this.theme,"empty"==e)n=this.viewModel.layoutBuilder.createElement("emptySection",t,i.getContentContainerNode());else{n=this.viewModel.layoutBuilder.createElement("section",t,i.getContentContainerNode());var o=this.documentOptions.backgroundColor||this.viewModel.getDocumentDefaultStyles(this.theme||this.themeContext).backgroundColor;o&&r.set(n.domNode,"backgroundColor",o)}return i.setContent(n),n},_getSectionCellClass:function(){return h},_getSectionCellParams:function(){return null},_createSectionCell:function(e){var i=(new this._getSectionCellClass)(t.mixin({sectionId:e,"class":"reportContainerCell"},this._getSectionCellParams()));return i},_createReportElement:function(e,t,i,o,s,r){var l=n.create("div",{"class":"reportElement"}),a=this._getCellSection(t),h=l._fcPar={isReportElement:!0,sectionId:e,isEmpty:"empty"==e,sectionJson:this.isSourceContainer&&s,controls:[],cell:t,section:a,dragHandleElement:null,coverElement:null,sectionToolbar:null,sectionLabel:null};return n.place(l,i?i:this.stackContainer,i?o:void 0),h.sectionLabel=n.create("div",{"class":"reportElementLabel",innerHTML:a.getSectionName()},l),t.rulerDiv=n.create("div",{"class":"reportElementRuler"},l),n.place(t.domNode,l),this._updateCellRuler(t),this.isEmptyElement(i)&&r!==!1&&(this._removeSection(i),this._tryProvidingSmallEmpty(l)),this.viewModel.dynamicReportInfo||(h.coverElement=n.create("div",{"class":"reportElement_coverElement"},l),u.hide(h.coverElement)),l},updateReportElement:function(e){var t=this.getElementParams(e);this._sectionToSectionCell(t.cell),this._sectionCellToSection(t.cell),this._updateChildrenViewMode(e),t.sectionToolbar&&t.sectionToolbar.update(),t.sectionLabel&&t.section&&(t.sectionLabel.innerHTML=t.section.getSectionName())},_sectionCellToSection:function(e){this._getCellSection(e).setResizedHeight(e.getHeight()),this._updateCellRuler(e)},_sectionToSectionCell:function(e){var t=this._getCellSection(e);e.setMinHeight(t.hasTablesThatFitHeight&&t.hasTablesThatFitHeight()?f:t.getHeight()),e.setHeight(t.getResizedHeight()),this._updateCellRuler(e)},_updateCellRuler:function(e){r.set(e.rulerDiv,"height",r.get(e.domNode,"height")+"px")},_setChildCovered:function(e,t){var i=this.getElementParams(e,"coverElement");i&&(u[t?"show":"hide"](i),t?(e[this.draggableElementProperty]=i,r.set(i,{position:"absolute",left:"0px",top:"0px",width:r.get(e,"width")+"px",height:r.get(e,"height")+"px"})):e[this.draggableElementProperty]=this.getElementParams(e,"dragHandleElement"))},_tryProvidingSmallEmpty:function(e){var t=this,i=this.getReportElements().filter(function(e){return t.isEmptyElement(e)}).length;i||this.addSection(g.EMPTY,{isSmallSize:!0},e,"after")},getElementHeight:function(e){return this.getElementCell(e).getHeight()},setElementHeight:function(e,t){var i=this.getElementCell(e);i.setHeight(t),this._sectionCellToSection(i),this.updateReportElement(e)},getElementParams:function(e,t){var i=e&&e._fcPar;return t?i&&i[t]:i},getElementSection:function(e){return this.getElementParams(e,"section")},getElementCell:function(e){return this.getElementParams(e,"cell")},isEmptyElement:function(e){return!!this.getElementParams(e,"isEmpty")},isReportElement:function(e){return this.getElementParams(e)},_getCellSection:function(e){return e.content},scrollToElement:function(e){e&&this._animateScrolling(e.offsetTop-this.domNode.clientHeight/5)},_animateScrolling:function(e){this.getScrollableContainer().scrollTop=e},getScrollableContainer:function(){return this.mainContainer},getReportElements:function(e){return c.getReportElements(this,e)},clear:function(e){var t=this;this.getReportElements().forEach(function(i){t._removeSection(i,e===!0)})},_removeSection:function(e,t){var i=this.getElementSection(e),o=this.getElementCell(e);e&&o&&(e===c.getElementWithSelectedTableCells(this)&&this.removeFieldInfoSelection(),i&&i.destroy(),o.destroy(),n.destroy(e),0==this.getReportElements().length&&t!==!1&&this.addSection(g.EMPTY))},removeSection:function(e){this._removeSection(e)},removeSectionAtIndex:function(e){this._removeSection(this.getReportElements()[e])},moveSection:function(e,t,i){var o=this.getReportElements()[e];if(o&&o.parentNode){o.parentNode.removeChild(o);var s=this.getReportElements();s.length==t?n.place(o,s[s.length-1],"after"):n.place(o,this.getReportElements()[t],i)}},setHeight:function(e){r.set(this.mainContainer,"height",e+"px")},_viewMode:null,getViewMode:function(){return this._viewMode},setViewMode:function(e){this._viewMode=e,"edit"==e?(o.add(this.domNode,"reportContainerEditMode"),o.remove(this.domNode,"reportContainerPreviewMode")):(o.remove(this.domNode,"reportContainerEditMode"),o.add(this.domNode,"reportContainerPreviewMode")),"previewValues"!=e||this.viewModel.dynamicReportInfo?u.hide(this._sampleWatermarkDiv):(this._sampleWatermarkDiv||(this._sampleWatermarkDiv=n.create("div",{"class":"sampleValuesWatermark"},this.stackContainer,"first")),u.show(this._sampleWatermarkDiv)),this._updateContainerSize(),this._updateChildrenViewMode()},_updateChildrenViewMode:function(e){var t=this,i=e?[e]:this.getReportElements();i.forEach(function(e){t._setChildCovered(e,"edit"!=t._viewMode);var i=t.getElementSection(e);i&&i.setViewMode&&i.setViewMode(t._viewMode)})},collectFieldInfos:function(e){return c.collectFieldInfos(this,e)},notifyShown:function(){this.serializationManager.notifyShown()},fromJson:function(e){return this.serializationManager.fromJson(e)},toJson:function(e){return this.serializationManager.toJson(e)},onPendingDataApplied:function(){},removeFieldInfoSelection:function(){},onFieldInfoSelected:function(e){},emitOnPreChangeEvent:function(e,t){},destroy:function(){this.clear(),this.inherited(arguments)}})});