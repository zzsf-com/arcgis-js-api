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

define(["../../declare","dojo/_base/fx","dojo/_base/lang","dojo/aspect","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/dom-class","dojo/fx","dojo/sniff","dojo/when","dojox/gesture/swipe","dojox/mvc/Templated","dojo/text!./templates/InfographicsCarousel.html","dojo/on","./theme","../_EventedWidget","./Infographic","dijit/layout/BorderContainer","dijit/layout/ContentPane","dijit/form/Select"],function(t,e,i,s,n,o,r,a,h,d,l,c,_,u,p,f,g){function m(t,i,r){function a(t,i,s,n,o){var a={};return a[i]={start:s,end:n},o&&(a[i].units=o),e.animateProperty({node:t,properties:a,duration:r})}if(i&&r){var d=t.cloneNode(!0);t.parentNode.insertBefore(d,t);var l;if(!o.isBodyLtr())switch(i){case b:i=v;break;case v:i=b}switch(i){case y:l=h.combine([a(d,"opacity",1,0),a(t,"opacity",0,1)]);break;case b:l=h.combine([a(d,"left",0,-100,"%"),a(t,"left",100,0,"%")]);break;case v:l=h.combine([a(d,"left",0,100,"%"),a(t,"left",-100,0,"%")])}s.after(l,"onEnd",function(){n.destroy(d)}),l.play()}}var y="f",b="sf",v="sb",D=t(c.Swipe,{_process:function(t,e,i){i._locking=i._locking||{},i._locking[this.defaultEvent]||this.isLocked(i.currentTarget)||(i._locking[this.defaultEvent]=!0,this[e](t.data,i))}}),w=t(null,{_swipe:null,_node:null,_rtl:null,_ltr:null,_distance:50,constructor:function(t,e,s,n){this._node=t,this._rtl=e,this._ltr=s,n&&(this._distance=n),this._swipe=new D,p(this._node,this._swipe,function(){}),p(this._node,this._swipe.end,i.hitch(this,"_end"))},_end:function(t){var e=t.dx;Math.abs(e)<this._distance||(0>e&&this._rtl?this._rtl():this._ltr&&this._ltr())}});return t("esri.dijit.geoenrichment.InfographicsCarouselBase",[_,g],{templateString:u,studyArea:null,outSR:null,selectedIndex:0,options:null,expanded:!0,returnGeometry:!1,animDuration:200,infographicsFactory:null,_items:null,_loading:null,_infographic:null,_pendingAnimation:null,_pendingReload:!0,_browseDisabled:!1,_eventMap:{resize:["size"],"data-ready":["provider"],"data-error":["error"]},postCreate:function(){this.inherited(arguments),setTimeout(i.hitch(this,this._onResize),0),d("touch")&&new w(this._container,i.hitch(this,"_slideForward"),i.hitch(this,"_slideBack")),d("esri-touch")&&p(this.domNode,"touchmove",function(t){t.stopPropagation()})},startup:function(){if(!this._started){this.inherited(arguments),this._infographic.autoTitle=!1,this._infographic.setGeoenrichment(this.infographicsFactory.createGeoenrichment()),this.set("studyArea",this.studyArea);var t=this.options||this.infographicsFactory.getOptions();this.set("options",t)}},_setOptionsAttr:function(t){this._set("options",t),this._getReports(),f.set(this.domNode,this.options.theme)},_setStudyAreaAttr:function(t){this._set("studyArea",t),this._started&&(this._infographic.set("studyArea",t),this._getReports())},_setSubtitleAttr:function(t){this._infographic.set("subtitle",t)},_setReturnGeometryAttr:function(t){this._set("returnGeometry",t),this._infographic.set("returnGeometry",t)},_setOutSR:function(t){this._set("outSR",t),this._infographic.set("outSR",t)},_setCountryIDAttr:function(t){this._infographic.set("countryID",t)},_getCountryIDAttr:function(){return this._infographic.get("countryID")},_getReports:function(){if(this.options&&this._started){var t=this._infographic.get("countryID");t&&(this._pendingReload=!0,this._showProgress(),this.options.getItems(t).then(i.hitch(this,this._fillReports),i.hitch(this,this._onDataError)))}},_fillReports:function(t){this._items=[],this._select.removeOption(this._select.getOptions());for(var e=0;e<t.length;e++)if(t[e].isVisible){var i=t[e];this._select.addOption({value:this._items.length.toString(),label:i.title}),this._items.push(i)}this._browseDisabled=this._items.length<=1,a[this._browseDisabled?"add":"remove"](this._browseBackDiv,"Browser_Disabled"),a[this._browseDisabled?"add":"remove"](this._browseForwardDiv,"Browser_Disabled"),this._infographic.set("cacheLimit",this._items.length),this._titlePane.style.visibility="",this._updateSelection(),this._infographic.set("studyAreaOptions",this.options.studyAreaOptions)},_setExpandedAttr:function(t){this._set("expanded",t),t?a.remove(this.domNode,"Collapsed"):a.add(this.domNode,"Collapsed"),this._infographic.set("expanded",t),this._pendingReload=!0},_setSelectedIndexAttr:function(t){this.selectedIndex!=t&&(this._set("selectedIndex",t),this._updateSelection())},_updateSelection:function(){if(this._items){this._pendingAnimation||(this._pendingAnimation=y),this._pendingReload=!0;var t=this._items[this.selectedIndex];this._select.set("value",this.selectedIndex),this._infographic.set("type",t.type),this._infographic.set("variables",t.variables)}},_onDataReady:function(t){var e=!1,i=t.getData(),s=i.features.length;if(s>0)for(var n=i.features[0],o=0;o<i.fields.length;o++)if(i.fields[o].fullName&&n.attributes[i.fields[o].name]){e=!0;break}return e&&(m(this._infographic.domNode,this._pendingAnimation,this.animDuration),this._pendingAnimation=null,this.onDataReady(t)),e},onDataReady:function(t){},_onDataLoad:function(){this._hideProgress(),this.onDataLoad()},onDataLoad:function(){},_onDataError:function(t){this._hideProgress(),this.onDataError(t)},onDataError:function(t){},_showProgress:function(){this._pendingReload?(r.set(this._reloadProgress,"display",""),this._pendingReload=!1):r.set(this._updateProgress,"display","")},_hideProgress:function(){r.set(this._reloadProgress,"display","none"),r.set(this._updateProgress,"display","none")},_slideBack:function(){if(!this._browseDisabled){this._pendingAnimation=v,this._infographic.set("effect","slideBack");var t=this.get("selectedIndex")-1;0>t&&(t=this._items.length-1),this.set("selectedIndex",t)}},_slideForward:function(){if(!this._browseDisabled){this._pendingAnimation=b;var t=this.get("selectedIndex")+1;t>=this._items.length&&(t=0),this.set("selectedIndex",t)}},_onSelectChange:function(){this.set("selectedIndex",+this._select.get("value"))},_onResize:function(){this.onResize([this.domNode.scrollWidth,this.domNode.scrollHeight])},onResize:function(t){}})});