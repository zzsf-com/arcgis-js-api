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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Deferred","dojo/_base/json","dojo/has","../kernel","../request","../deferredUtils","../geometry/Extent","../geometry/normalizeUtils","./Task","./FeatureSet"],function(e,t,r,n,o,s,i,a,c,u,l,d,h){var f=e(d,{declaredClass:"esri.tasks.QueryTask",_eventMap:{complete:["featureSet"],"execute-for-count-complete":["count"],"execute-for-ids-complete":["objectIds"],"execute-relationship-query-complete":["featureSets"]},constructor:function(e,r){this._handler=t.hitch(this,this._handler),this._relationshipQueryHandler=t.hitch(this,this._relationshipQueryHandler),this._executeForIdsHandler=t.hitch(this,this._executeForIdsHandler),this._countHandler=t.hitch(this,this._countHandler),this._extentHandler=t.hitch(this,this._extentHandler),this.source=r&&r.source,this.gdbVersion=r&&r.gdbVersion,this.registerConnectEvents()},__msigns:[{n:"execute",c:4,a:[{i:0,p:["geometry"]}],e:2},{n:"executeForIds",c:3,a:[{i:0,p:["geometry"]}],e:2},{n:"executeForCount",c:3,a:[{i:0,p:["geometry"]}],e:2},{n:"executeForExtent",c:3,a:[{i:0,p:["geometry"]}],e:2}],onComplete:function(){},onExecuteRelationshipQueryComplete:function(){},onExecuteForIdsComplete:function(){},onExecuteForCountComplete:function(){},onExecuteForExtentComplete:function(){},execute:function(e,r,n,s,i){var c=i.assembly,u=this._encode(t.mixin({},this._url.query,{f:"json"},e.toJson(c&&c[0]))),l=this._handler,d=this._errorHandler;if(this.source){var h={source:this.source.toJson()};u.layer=o.toJson(h)}return this.gdbVersion&&(u.gdbVersion=this.gdbVersion),a({url:this._url.path+"/query",content:u,callbackParamName:"callback",load:function(e,t){l(e,t,r,n,i.dfd)},error:function(e){d(e,n,i.dfd)}},this.requestOptions)},executeRelationshipQuery:function(e,r,o){var s=this._encode(t.mixin({},this._url.query,{f:"json"},e.toJson())),i=this._relationshipQueryHandler,u=this._errorHandler;this.gdbVersion&&(s.gdbVersion=this.gdbVersion);var l=new n(c._dfdCanceller);return l._pendingDfd=a({url:this._url.path+"/queryRelatedRecords",content:s,callbackParamName:"callback",load:function(e,t){i(e,t,r,o,l)},error:function(e){u(e,o,l)}},this.requestOptions),l},executeForIds:function(e,r,n,s){var i=s.assembly,c=this._encode(t.mixin({},this._url.query,{f:"json",returnIdsOnly:!0},e.toJson(i&&i[0]))),u=this._executeForIdsHandler,l=this._errorHandler;if(this.source){var d={source:this.source.toJson()};c.layer=o.toJson(d)}return this.gdbVersion&&(c.gdbVersion=this.gdbVersion),a({url:this._url.path+"/query",content:c,callbackParamName:"callback",load:function(e,t){u(e,t,r,n,s.dfd)},error:function(e){l(e,n,s.dfd)}},this.requestOptions)},executeForCount:function(e,r,n,s){var i=s.assembly,c=this._encode(t.mixin({},this._url.query,{f:"json",returnIdsOnly:!0,returnCountOnly:!0},e.toJson(i&&i[0]))),u=this._countHandler,l=this._errorHandler;if(this.source){var d={source:this.source.toJson()};c.layer=o.toJson(d)}return this.gdbVersion&&(c.gdbVersion=this.gdbVersion),a({url:this._url.path+"/query",content:c,callbackParamName:"callback",load:function(e,t){u(e,t,r,n,s.dfd)},error:function(e){l(e,n,s.dfd)}},this.requestOptions)},executeForExtent:function(e,r,n,s){var i=s.assembly,c=this._encode(t.mixin({},this._url.query,{f:"json",returnExtentOnly:!0,returnCountOnly:!0},e.toJson(i&&i[0]))),u=this._extentHandler,l=this._errorHandler;if(this.source){var d={source:this.source.toJson()};c.layer=o.toJson(d)}return this.gdbVersion&&(c.gdbVersion=this.gdbVersion),a({url:this._url.path+"/query",content:c,callbackParamName:"callback",load:function(e,t){u(e,t,r,n,s.dfd)},error:function(e){l(e,n,s.dfd)}},this.requestOptions)},_handler:function(e,t,r,n,o){try{var s=new h(e);this._successHandler([s],"onComplete",r,o)}catch(i){this._errorHandler(i,n,o)}},_relationshipQueryHandler:function(e,t,n,o,s){try{var i=e.geometryType,a=e.spatialReference,c={};r.forEach(e.relatedRecordGroups,function(e){var t={};t.geometryType=i,t.spatialReference=a,t.features=e.relatedRecords;var r=new h(t);if(null!=e.objectId)c[e.objectId]=r;else for(var n in e)e.hasOwnProperty(n)&&"relatedRecords"!==n&&(c[e[n]]=r)}),this._successHandler([c],"onExecuteRelationshipQueryComplete",n,s)}catch(u){this._errorHandler(u,o,s)}},_executeForIdsHandler:function(e,t,r,n,o){try{this._successHandler([e.objectIds],"onExecuteForIdsComplete",r,o)}catch(s){this._errorHandler(s,n,o)}},_countHandler:function(e,t,r,n,o){try{var s,i=e.features,a=e.objectIds;if(a)s=a.length;else{if(i)throw new Error("Unable to perform query. Please check your parameters.");s=e.count}this._successHandler([s],"onExecuteForCountComplete",r,o)}catch(c){this._errorHandler(c,n,o)}},_extentHandler:function(e,t,r,n,o){try{e.extent&&(e.extent=new u(e.extent)),this._successHandler([e],"onExecuteForExtentComplete",r,o)}catch(s){this._errorHandler(s,n,o)}}});return l._createWrappers(f),s("extend-esri")&&t.setObject("tasks.QueryTask",f,i),f});