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

define(["require","dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/_base/kernel","dojo/sniff","dojo/query","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojox/html/entities","dijit/_Widget","dijit/_Templated","../kernel","../lang","../urlUtils","./_EventedWidget","dojo/i18n!../nls/jsapi","dojo/NodeList-dom"],function(e,i,t,a,s,n,d,r,o,h,l,c,m,p,_,u,v,f,g,L,y){var b=0,S=y.widgets.popup,I=i([L,_,u],{declaredClass:"esri.dijit._PopupRenderer",constructor:function(){this._nls=a.mixin({},S)},templateString:"<div class='esriViewPopup'><div class='mainSection'><div class='header' dojoAttachPoint='_title'></div><div class='hzLine'></div><div dojoAttachPoint='_description'></div><div class='break'></div></div><div class='attachmentsSection hidden'><div>${_nls.NLS_attach}:</div><ul dojoAttachPoint='_attachmentsList'></ul><div class='break'></div></div><div class='mediaSection hidden'><div class='header' dojoAttachPoint='_mediaTitle'></div><div class='hzLine'></div><div class='caption' dojoAttachPoint='_mediaCaption'></div><div class='gallery' dojoAttachPoint='_gallery'><div class='mediaHandle prev' dojoAttachPoint='_prevMedia' dojoAttachEvent='onclick: _goToPrevMedia'></div><div class='mediaHandle next' dojoAttachPoint='_nextMedia' dojoAttachEvent='onclick: _goToNextMedia'></div><ul class='summary'><li class='image mediaCount hidden' dojoAttachPoint='_imageCount'>0</li><li class='image mediaIcon hidden'></li><li class='chart mediaCount hidden' dojoAttachPoint='_chartCount'>0</li><li class='chart mediaIcon hidden'></li></ul><div class='frame' dojoAttachPoint='_mediaFrame'></div></div></div><div class='editSummarySection hidden' dojoAttachPoint='_editSummarySection'><div class='break'></div><div class='break hidden' dojoAttachPoint='_mediaBreak'></div><div class='editSummary' dojoAttachPoint='_editSummary'></div></div></div>",showTitle:!0,startup:function(){this.inherited(arguments),this.template.getComponents(this.graphic).then(a.hitch(this,this._handleComponentsSuccess),a.hitch(this,this._handleComponentsError))},destroy:function(){this._dfd&&this._dfd.cancel(),this._destroyFrame(),this.template=this.graphic=this._nls=this._mediaInfos=this._mediaPtr=this._dfd=null,this.inherited(arguments)},_goToPrevMedia:function(){var e=this._mediaPtr-1;0>e||(this._mediaPtr--,this._updateUI(),this._displayMedia())},_goToNextMedia:function(){var e=this._mediaPtr+1;e!==this._mediaInfos.length&&(this._mediaPtr++,this._updateUI(),this._displayMedia())},_updateUI:function(){var e=this._mediaInfos,i=e.length,t=this.domNode,a=this._prevMedia,d=this._nextMedia;if(i>1){var r=0,o=0;s.forEach(e,function(e){"image"===e.type?r++:-1!==e.type.indexOf("chart")&&o++}),r&&(h.set(this._imageCount,"innerHTML",r),n.query(".summary .image",t).removeClass("hidden")),o&&(h.set(this._chartCount,"innerHTML",o),n.query(".summary .chart",t).removeClass("hidden"))}else n.query(".summary",t).addClass("hidden"),l.add(a,"hidden"),l.add(d,"hidden");var c=this._mediaPtr;0===c?l.add(a,"hidden"):l.remove(a,"hidden"),c===i-1?l.add(d,"hidden"):l.remove(d,"hidden"),this._destroyFrame()},_displayMedia:function(){var i=this._mediaInfos[this._mediaPtr],t=i.title,s=i.caption,d=n.query(".mediaSection .hzLine",this.domNode)[0];if(h.set(this._mediaTitle,"innerHTML",t),l[t?"remove":"add"](this._mediaTitle,"hidden"),h.set(this._mediaCaption,"innerHTML",s),l[s?"remove":"add"](this._mediaCaption,"hidden"),l[t&&s?"remove":"add"](d,"hidden"),this._rid=null,"image"===i.type)this._showImage(i);else{var r=this,o=["dojox/charting/Chart2D","dojox/charting/action2d/Tooltip"],c=i.value.theme||this.chartTheme;a.isString(c)&&(c=c.replace(/\./gi,"/"),-1===c.indexOf("/")&&(c="dojox/charting/themes/"+c)),c||(c="./Rainbow"),o.push(c);try{var m=this._rid=b++;e(o,function(e,t,a){m===r._rid&&(r._rid=null,r._showChart(i.type,i.value,e,t,a))})}catch(p){console.log("PopupRenderer: error loading modules")}}},_preventNewTab:function(e){return e=e&&a.trim(e).toLowerCase(),e&&(0===e.indexOf("mailto:")||0===e.indexOf("tel:"))},_showImage:function(e){l.add(this._mediaFrame,"image");var i,a=m.get(this._gallery,"height"),s=e.value;s.linkURL&&(i=c.create("a",{href:s.linkURL,target:this._preventNewTab(s.linkURL)?"":"_blank"},this._mediaFrame));var d=e.refreshInterval?this._addURLParameter(s.sourceURL,"timestamp",Date.now()):s.sourceURL;c.create("img",{className:"esriPopupMediaImage",src:d},i||this._mediaFrame);var r=n.query(".esriPopupMediaImage",this._mediaFrame)[0];this._imageLoadHandle=t.connect(r,"onload",this,function(){this._clearImageHandles(),this._imageLoaded(r,a),this._initImageRefresh(e)})},_addURLParameter:function(e,i,t){var a=-1===e.indexOf("?")?"?":"&";return e+a+i+"="+t},_initImageRefresh:function(e){if(e.refreshInterval){var i=60*e.refreshInterval*1e3;this._imageRefreshHandle=setTimeout(a.hitch(this,function(){this._destroyFrame(),this._showImage(e)}),i)}},_clearImageHandles:function(){t.disconnect(this._imageLoadHandle),this._imageLoadHandle=null,clearTimeout(this._imageRefreshHandle),this._imageRefreshHandle=null},_showChart:function(e,i,t,a,n){l.remove(this._mediaFrame,"image");var d=this._chart=new t(c.create("div",{"class":"chart"},this._mediaFrame),{margins:{l:4,t:4,r:4,b:4}});switch(n&&d.setTheme(n),e){case"piechart":d.addPlot("default",{type:"Pie",labels:!1}),d.addSeries("Series A",i.fields);break;case"linechart":d.addPlot("default",{type:"Markers"}),d.addAxis("x",{min:0,majorTicks:!1,minorTicks:!1,majorLabels:!1,minorLabels:!1}),d.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"}),s.forEach(i.fields,function(e,i){e.x=i+1}),d.addSeries("Series A",i.fields);break;case"columnchart":d.addPlot("default",{type:"Columns",gap:3}),d.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"}),d.addSeries("Series A",i.fields);break;case"barchart":d.addPlot("default",{type:"Bars",gap:3}),d.addAxis("x",{includeZero:!0,fixUpper:"minor",minorLabels:!1}),d.addAxis("y",{vertical:!0,majorTicks:!1,minorTicks:!1,majorLabels:!1,minorLabels:!1}),d.addSeries("Series A",i.fields)}this._action=new a(d),d.render()},_destroyFrame:function(){this._rid=null,this._clearImageHandles(),this._chart&&(this._chart.destroy(),this._chart=null),this._action&&(this._action.destroy(),this._action=null),h.set(this._mediaFrame,"innerHTML","")},_imageLoaded:function(e,i){var t=e.height;if(i>t){var a=Math.round((i-t)/2);m.set(e,"marginTop",a+"px")}},_attListHandler:function(e,i){if(e===this._dfd){this._dfd=null;var t="";i instanceof Error||!i||!i.length||s.forEach(i,function(e){t+="<li>",t+="<a href='"+g.addProxy(e.url)+"' target='_blank'>"+(e.name||"[No name]")+"</a>",t+="</li>"}),h.set(this._attachmentsList,"innerHTML",t||"<li>"+this._nls.NLS_noAttach+"</li>")}},_supportedURIInfos:[{pattern:/^\s*(https?:\/\/([^\s]+))\s*$/i,label:S.NLS_moreInfo},{pattern:/^\s*(tel:([^\s]+))\s*$/i,label:"${hierPart}"},{pattern:/^\s*(mailto:([^\s]+))\s*$/i,label:"${hierPart}"},{pattern:/^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i,appName:"App Studio Player",label:S.NLS_openLinkInApp},{pattern:/^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i,appName:"Collector",label:S.NLS_openLinkInApp},{pattern:/^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i,appName:"Explorer",label:S.NLS_openLinkInApp},{pattern:/^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i,appName:"Navigator",label:S.NLS_openLinkInApp},{pattern:/^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i,appName:"Survey123",label:S.NLS_openLinkInApp},{pattern:/^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i,appName:"Trek2There",label:S.NLS_openLinkInApp},{pattern:/^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i,appName:"Workforce",label:S.NLS_openLinkInApp},{pattern:/^\s*(iform:\/\/([^\s]+))\s*$/i,appName:"iForm",label:S.NLS_openLinkInApp},{pattern:/^\s*(flow:\/\/([^\s]+))\s*$/i,appName:"FlowFinity",label:S.NLS_openLinkInApp},{pattern:/^\s*(lfmobile:\/\/([^\s]+))\s*$/i,appName:"Laserfische",label:S.NLS_openLinkInApp},{pattern:/^\s*(mspbi:\/\/([^\s]+))\s*$/i,appName:"Microsoft Power BI",label:S.NLS_openLinkInApp}],_findURIInfo:function(e){var i;return s.some(this._supportedURIInfos,function(t){return t.pattern.test(e)&&(i=t),!!i}),i},_createLinkIfURI:function(e){var i=this._findURIInfo(e);if(i){var t=e.match(i.pattern),a=t&&t[2];return e.replace(i.pattern,"<a target='_blank' href='$1' title='$1'>"+f.substitute({appName:i.appName,hierPart:a},i.label)+"</a>")}return e},_handleComponentsSuccess:function(e){if(e){var i=this.showTitle?e.title:"",t=e.description,d=e.fields,r=e.mediaInfos,c=this.domNode,m=this._nls,_=this,u=this.template,v=this.graphic;this._prevMedia.title=m.NLS_prevMedia,this._nextMedia.title=m.NLS_nextMedia,h.set(this._title,"innerHTML",i),i||l.add(this._title,"hidden"),!e.hasDescription&&d&&(t="",s.forEach(d,function(e){t+="<tr valign='top'>",t+="<td class='attrName'>"+p.encode(e[0])+"</td>",t+="<td class='attrValue'>"+this._createLinkIfURI(e[1])+"</td>",t+="</tr>"},this),t&&(t="<table class='attrTable' cellpadding='0px' cellspacing='0px'>"+t+"</table>")),h.set(this._description,"innerHTML",t),t||l.add(this._description,"hidden"),n.query("a",this._description).forEach(function(e){_._preventNewTab(e.href)?"_blank"===e.target&&h.remove(e,"target"):h.set(e,"target","_blank")}),i&&t?n.query(".mainSection .hzLine",c).removeClass("hidden"):i||t?n.query(".mainSection .hzLine",c).addClass("hidden"):n.query(".mainSection",c).addClass("hidden");var f=this._dfd=u.getAttachments(v);f&&(f.addBoth(a.hitch(this,this._attListHandler,f)),h.set(this._attachmentsList,"innerHTML","<li>"+m.NLS_searching+"...</li>"),n.query(".attachmentsSection",c).removeClass("hidden")),r&&r.length&&(n.query(".mediaSection",c).removeClass("hidden"),o.setSelectable(this._mediaFrame,!1),this._mediaInfos=r,this._mediaPtr=0,this._updateUI(),this._displayMedia()),e.editSummary&&(h.set(this._editSummary,"innerHTML",e.editSummary),r&&r.length&&l.remove(this._mediaBreak,"hidden"),l.remove(this._editSummarySection,"hidden"))}},_handleComponentsError:function(e){console.log("PopupRenderer: error loading template",e)}});return d("extend-esri")&&a.setObject("dijit._PopupRenderer",I,v),I});