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

define(["dojo/_base/declare","dojo/Deferred","esri/dijit/geoenrichment/_Invoke"],function(t,n,o){var e=500,i=100,d=6e4;return t(o,{_contentLoadingCount:0,_pendingTimeoutHandle:null,_totalTimeoutHandle:null,_loadDfd:null,_isDestroyed:!1,constructor:function(){},init:function(){var t=this;this._destroy(),this._contentLoadingCount=0,this._loadDfd=new n,this._pendingTimeoutHandle=setTimeout(function(){t._contentLoadingCount||t._doReturn()},e),this._totalTimeoutHandle=setTimeout(function(){t._loadDfd&&t._doReturn()},d)},destroy:function(){this._isDestroyed=!0,this._destroy()},_destroy:function(){this._invokeTimeoutIDs&&clearTimeout(this._invokeTimeoutIDs._doReturn),this._pendingTimeoutHandle&&clearTimeout(this._pendingTimeoutHandle),this._pendingTimeoutHandle=null,this._totalTimeoutHandle&&clearTimeout(this._totalTimeoutHandle),this._totalTimeoutHandle=null,this._loadDfd=null},returnOnLoadEnd:function(){return this._loadDfd.promise},_doReturn:function(){this._loadDfd.resolve(),this.destroy()},onContentLoadingStart:function(){this._contentLoadingCount++},onContentLoadingEnd:function(){this._contentLoadingCount=Math.max(0,--this._contentLoadingCount),this._isDestroyed||this._contentLoadingCount||this.invoke("_doReturn",i)}})});