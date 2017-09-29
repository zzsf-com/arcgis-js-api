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

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/dom-construct","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dijit/Destroyable","./_ValueFieldTrimSupport","./_ValueFieldTooltipSupport","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/UrlUtil"],function(t,e,i,n,o,l,s,a,h,r,d,u){function c(t){t.domNode=n.toDom(g),t.contentBlock=t.domNode.children[0],t.valueContainer=t.contentBlock.children[0],t.valueLabel=t.valueContainer.children[0]}var f=t(a,{_buildLayoutFunc:null,_parentNode:null,constructor:function(t,i){e.mixin(this,t),this._parentNode=i,this.postCreate()},postCreate:function(){this._buildLayoutFunc(this),this["class"]&&o.add(this.domNode,this["class"]),this._parentNode&&this.placeAt(this._parentNode),this.value&&this.set("value",this.value)},get:function(t){return"value"==t?this._getValueAttr?this._getValueAttr():this.value:this[t]},set:function(t,e){"value"==t?this._setValueAttr?this._setValueAttr(e):this.value=e:this[t]=e},placeAt:function(t){return n.place(this.domNode,t),this},on:function(t,e){this.own(i(this.domNode,t,e))},isLeftToRight:function(){return l.isBodyLtr(document)},destroy:function(){n.destroy(this.domNode),this.domNode=null}}),g="<div class='esriGEAdjustableGridValueField esriGENonSelectable'><div class='valueField_contentBlock' data-dojo-attach-point='contentBlock'><div data-dojo-attach-point='valueContainer' class='valueField_valueBlock'><div data-dojo-attach-point='valueLabel' class='valueField_valueLabel'></div></div></div></div>";return t([f,h,r],{valueLabel:null,fieldCellClass:null,_defaultStyles:{verticalAlign:"top",horizontalAlign:"left",horizontalPadding:0},fieldStyle:null,trimTextIfOverflows:!1,content:null,postCreate:function(){this._buildLayoutFunc=this._buildLayoutFunc||c,this.inherited(arguments),this.setStyle(this.fieldStyle),this.setContent(this.content),this.fieldCellClass&&(o.add(this.domNode,this.fieldCellClass),o.add(this.contentBlock,"contentBlock_"+this.fieldCellClass))},_destroyExistingContent:function(){this.content&&(this.content.destroy&&this.content.destroy(),this.content=null,this.contentContainer&&n.empty(this.contentContainer))},getContentContainerNode:function(t){return t||this._destroyExistingContent(),this.contentContainer||(this.contentContainer=n.create("div",{"class":"valueField_valueBlock"},this.contentBlock,"first")),d.show(this.contentContainer),this.contentContainer},setContent:function(t){if(this._destroyExistingContent(),this.content=t,this.content){this.getContentContainerNode(!0);var e=this.content.domNode||this.content;e&&e.parentNode!==this.contentContainer&&n.place(e,this.contentContainer)}d[this.content?"show":"hide"](this.contentContainer),d[this.content?"hide":"show"](this.valueContainer),this.content||this.set("value",this._value)},_value:null,_getValueAttr:function(){return this._value},_setValueAttr:function(t){t=t||"",this._setValueLabelText(t),this._value=t},_setValueLabelText:function(t){return this.valueLabel&&(this._checkValueLabelOverflow(t),this._setValueLabelTooltip(t)),t},_currentNumberValue:null,setNumberValue:function(t){this._currentNumberValue=t},setStyle:function(t){this.fieldStyle=this.fieldStyle||{},e.mixin(this.fieldStyle,t),this.fieldStyle.width&&this.setWidth(this.fieldStyle.width),this.fieldStyle.height&&this.setHeight(this.fieldStyle.height),this.fieldStyle.horizontalAlign&&s.set(this.domNode,"textAlign",this.fieldStyle.horizontalAlign),this.fieldStyle.horizontalPadding&&s.set(this.valueLabel,"paddingLeft",this.fieldStyle.horizontalPadding+"px"),s.set(this.valueContainer,"verticalAlign",this.fieldStyle.verticalAlign||""),this.contentContainer&&s.set(this.contentContainer,"verticalAlign",this.fieldStyle.verticalAlign||""),this._applyTextStyleToDom(this.domNode)},_supportedTextStyles:["color","fontSize","fontFamily","fontWeight","fontStyle","textDecoration","backgroundColor"],_supportedAdditionalStyles:["horizontalAlign","verticalAlign","horizontalPadding"],_applyTextStyleToDom:function(t,e){var i=this;this._supportedTextStyles.forEach(function(n){var o="fontSize"==n;if(i.fieldStyle[n]){var l=i.fieldStyle[n]+(o?"px":"");e&&(t.style[n]=l),s.set(t,n,l)}})},getFullStyle:function(){var t=this,e=this.getTextStyle();this._supportedAdditionalStyles.forEach(function(i){e[i]=t.fieldStyle[i]});for(var i in this._defaultStyles)void 0!==e[i]&&e.hasOwnProperty(i)||(e[i]=this._defaultStyles[i]);return e},getTextStyle:function(){var t=this,e={};return this.domNode&&this._supportedTextStyles.forEach(function(i){e[i]=t.fieldStyle[i]||("fontSize"==i?s.toPixelValue(t.domNode,s.get(t.domNode,i)):s.get(t.domNode,i))}),e},getWidth:function(){return s.get(this.contentBlock,"width")+this._getHorizontalPaddings(!0)},setWidth:function(t){if(this.contentBlock&&this.domNode){var e=t-this._getHorizontalPaddings(!0);s.set(this.contentBlock,"width",e+"px"),s.set(this.valueContainer,"width",e+"px"),s.set(this.valueLabel,"width",e-(this.fieldStyle.horizontalPadding||0)+"px"),this.contentContainer&&s.set(this.contentContainer,"width",e+"px"),s.set(this.domNode,"width",t-this._getHorizontalPaddings(!1)+"px"),this.fieldStyle.width=t,this._checkValueLabelOverflow()}},getHeight:function(){return s.get(this.contentBlock,"height")+this._getVerticalPaddings(!0)},setHeight:function(t){var e=Math.max(0,t-this._getVerticalPaddings(!0));s.set(this.contentBlock,"height",e+"px"),s.set(this.valueContainer,"height",e+"px"),this.contentContainer&&s.set(this.contentContainer,"height",e+"px"),s.set(this.domNode,"height",Math.max(0,t-this._getVerticalPaddings(!1))+"px"),this.fieldStyle.height=t,this._checkValueLabelOverflow()},setMinHeight:function(t){var e=t+this._getVerticalPaddings(!0);s.set(this.contentBlock,"minHeight",e+"px"),s.set(this.valueContainer,"minHeight",e+"px"),this.contentContainer&&s.set(this.contentContainer,"minHeight",e+"px"),s.set(this.domNode,"minHeight",t+this._getVerticalPaddings(!1)+"px"),this._checkValueLabelOverflow()},_getHorizontalPaddings:function(t){var e=this._getBorders();return e.outer.l+e.outer.r+(t?e.inner.l+e.inner.r:0)},_getVerticalPaddings:function(t){var e=this._getBorders();return e.outer.t+e.outer.b+(t?e.inner.t+e.inner.b:0)},_borders:null,_getBorders:function(){return this._borders=this._borders||this.getBorders(),this._borders},getBorders:function(){return{outer:{t:0,b:0,l:0,r:0},inner:{t:0,b:0,l:0,r:0}}},_urlClickHandle:null,setUrl:function(t){this._urlClickHandle&&this._urlClickHandle.remove(),this.valueLabel&&(o[t?"add":"remove"](this.valueLabel,"esriGEAdjustableGridValueFieldHyperLink"),t&&(this._urlClickHandle=i(this.valueLabel,"click",function(){u.openUrl(u.toHttpUrl(t))})))},destroy:function(){this._destroyExistingContent(),this.inherited(arguments)}})});