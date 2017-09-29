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

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/promise/all","dojo/has","dojo/json","../../request","../../kernel"],function(e,t,s,o,r,i,n,c,u){var h={MAX_RESOURCES:10,checkResourceLimit:!0,_getItemUrl:function(e){var t=e.folderId||e.ownerFolder;return this._portalUrl+"/sharing/rest/content/users/"+e.owner+"/"+(t?t+"/":"")+"/items/"+e.id},addToItemResource:function(e,t){var s,o;return this._portalUrl=t.portalUrl,delete t.portalUrl,s=this._getItemUrl(e),s+="/addResources",o={filename:t.jobInfo.jobId+".json",text:n.stringify(t),resourcesPrefix:"jobs",f:"json"},c({url:s,content:o},{usePost:!0})},getItemResource:function(e,t){var s,o;return t&&t.portalUrl&&(this._portalUrl=t.portalUrl),s=this._getItemUrl(e),s+="/resources/"+t.resource,o={f:"json"},c({url:s,content:o})},removeItemResource:function(e,t){var s,o;return t&&t.portalUrl&&(this._portalUrl=t.portalUrl),s=this._getItemUrl(e),s+="/removeResources",o={resource:t.resource,deleteAll:t.deleteAll,f:"json"},c({url:s,content:o},{usePost:!0})},addToStorage:function(e){if(window.sessionStorage){var t=window.sessionStorage.getItem("esri_analysis_jobhistory");t=t?n.parse(t):[],t.push(e),window.sessionStorage.setItem("esri_analysis_jobhistory",n.stringify(t))}},addAllToStorage:function(e){window.sessionStorage&&window.sessionStorage.setItem("esri_analysis_jobhistory",n.stringify(e))},removeFromStorage:function(t){if(window.sessionStorage){var s=window.sessionStorage.getItem("esri_analysis_jobhistory");s&&(s=n.parse(s)),s=e.filter(s,function(e){return e.jobInfo&&e.jobInfo.jobId!==t.jobInfo.jobId}),window.sessionStorage.setItem("esri_analysis_jobhistory",n.stringify(s))}},removeAllFromStorage:function(){window.sessionStorage&&window.sessionStorage.removeItem("esri_analysis_jobhistory")},getJobsInfoList:function(){var e;return window.sessionStorage&&(e=window.sessionStorage.getItem("esri_analysis_jobhistory"),e&&(e=n.parse(e))),e},addItemResources:function(t,i){var n=this.getJobsInfoList(),c=[];return e.forEach(n,function(e){e.portalUrl=i.portalUrl;var r=new o;c.push(r),this.addToItemResource(t,e).then(s.hitch(this,function(t){t&&t.success===!0&&(this.removeFromStorage(e),r.resolve(t))}))},this),r(c)},saveJobsQueue:function(e,t){var r=this.getJobsInfoList(),i=new o;return r&&r.length>0&&this.removeResourceQueue(e,t).then(s.hitch(this,function(){if(r.length>this.MAX_RESOURCES){for(this.sortJobsInfoList(r,{asc:!1});r.length>this.MAX_RESOURCES;)r.pop();this.addAllToStorage(r)}this.addItemResources(e,t).then(s.hitch(this,function(e){i.resolve(e)}),s.hitch(this,function(e){i.reject(e)}))}),s.hitch(this,function(t){console.log("Error saving resources on the item ",e.id),i.reject(t)})),i.promise},saveJobsInfoList:function(e,t){var s;return s=this.checkResourceLimit?this.saveJobsQueue(e,t):this.addItemResources(e,t)},getResources:function(e,t){var s,o;return t&&t.portalUrl&&(this._portalUrl=t.portalUrl),s=this._getItemUrl(e),s+="/resources",o={f:"json"},c({url:s,content:o})},getResourcesInfo:function(t,i){var n=[],c=new o;return this.sortResources(t,i).then(s.hitch(this,function(o){e.forEach(o.resources,function(e){i.resource=e.resource,n.push(this.getItemResource(t,i))},this),r(n).then(s.hitch(this,function(e){c.resolve(e)}),s.hitch(this,function(e){console.log("Error fetching resources information",e),c.reject(e)}))}),s.hitch(this,function(e){console.log("Error fetching resources on the item ",t.id),console.log(e),c.reject(e)})),c.promise},sortJobsInfoList:function(e,t){e.sort(s.hitch(this,function(e,s){return t.asc?e.timestamp-s.timestamp:s.timestamp-e.timestamp}))},sortResources:function(e,t){var r=new o;return this.getResources(e,t).then(s.hitch(this,function(e){e.resources&&e.resources.length>0&&e.resources.sort(s.hitch(this,function(e,s){return t.asc?e.created-s.created:s.created-e.created})),r.resolve(e)}),s.hitch(this,function(t){console.log("Error Fetching resources on the item ",e.id),r.reject(t)})),r.promise},removeResourceQueue:function(e,t){var i,n,c=new o,u=[],h=this.getJobsInfoList();return i=h.length,n=this.MAX_RESOURCES-i,n=n>0?n:0,t.asc=!0,this.sortResources(e,t).then(s.hitch(this,function(o){var i;if(o&&o.resources&&o.resources.length>0)if(0===n)i=o.resources.shift(),t.resource=i.resource,t.deleteAll=!0,u.push(this.removeItemResource(e,t)),o.resources=[];else for(;o.resources.length>n;)i=o.resources.shift(),t.resource=i.resource,u.push(this.removeItemResource(e,t));r(u).always(s.hitch(this,function(){c.resolve(o)}))}),s.hitch(this,function(t){console.log("Error Fetching resources on the item ",e.id),c.reject(t)})),c.promise}};return i("extend-esri")&&s.setObject("dijit.analysis.storageUtils",h,u),h});