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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","@dojo/framework/shim/array","@dojo/framework/shim/Set","../../core/Error","../../core/Logger","../../core/maybe","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../layers/support/fieldUtils","../../support/arcadeUtils","./RefreshableLayerView","./support/FeatureEffect","./support/FeatureFilter","./support/popupUtils"],function(e,r,t,i,o,u,l,n,a,s,p,c,d,f,y,h,F,m,v,b,g){var w=p.getLogger("esri.views.layers.FeatureLayerView");return function(e){function r(r){var t=e.call(this,r)||this;return t.effect=null,t.filter=null,t.layer=null,t.requiredFields=null,t.view=null,t}return t(r,e),r.prototype.initialize=function(){var e=this;f.init(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","filter","effect"],function(){return e._updateRequiredFields()})},Object.defineProperty(r.prototype,"availableFields",{get:function(){var e=this,r=e.layer,t=e.layer.fields,i=e.requiredFields;return"outFields"in r&&r.outFields?h.fixFields(t,h.unpackFieldNames(t,r.outFields).concat(i)):h.fixFields(t,i)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maximumNumberOfFeatures",{get:function(){return 0},set:function(e){w.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maximumNumberOfFeaturesExceeded",{get:function(){return!1},enumerable:!0,configurable:!0}),r.prototype.highlight=function(e,r){return void 0===r&&(r={}),this.inherited(arguments)},r.prototype.queryFeatures=function(e){return this.inherited(arguments)},r.prototype.queryObjectIds=function(e){return this.inherited(arguments)},r.prototype.queryFeatureCount=function(e){return this.inherited(arguments)},r.prototype.queryExtent=function(e){return this.inherited(arguments)},r.prototype._updateRequiredFields=function(){return l(this,void 0,void 0,function(){var e,r,t,i,o,l,s,p,c,f,y,F,m;return u(this,function(u){switch(u.label){case 0:return this.layer&&this.view?(e="3d"===this.view.type,r=this,t=r.layer,i=r.layer,o=i.fields,l=i.objectIdField,s=i.renderer,p=new a.default,[4,d.eachAlways([s?s.collectRequiredFields(p,o):null,h.collectLabelingFields(p,t),e?h.collectElevationFields(p,t):null,this.filter?h.collectFilterFields(p,t,this.filter):null,this.effect?h.collectFilterFields(p,t,this.effect.filter):null])]):[2];case 1:for(c=u.sent(),f=0,y=c;f<y.length;f++)F=y[f],F.error&&w.error(F.error);return h.collectField(p,o,l),m=n.from(p).sort(),this._set("requiredFields",m),[2]}})})},r.prototype.validateFetchPopupFeatures=function(e){var r=this,t=r.layer;return r.layer.popupEnabled?g.getFetchPopupTemplate(this.layer,e)?void 0:new s("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:t}):new s("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:t})},r.prototype.fetchClientPopupFeatures=function(e){return l(this,void 0,void 0,function(){var r,t,i,o,l,n,a,s,p,f,y;return u(this,function(u){switch(u.label){case 0:return(r=c.isSome(e)?e.clientGraphics:null)&&0!==r.length?(t=[],i=[],o=this.layer,l=g.getFetchPopupTemplate(o,e),c.isSome(l)?(n=F.hasGeometryOperations(l),[4,this.createPopupQuery(e)]):[2,d.resolve([])]):[2,d.resolve([])];case 1:for(a=u.sent(),s=h.unpackFieldNames(o.fields,a.outFields),p=0,f=r;p<f.length;p++)y=f[p],n||!h.featureHasFields(s,y)?i.push(y):t.push(y);return 0===i.length?[2,d.resolve(t)]:(a.objectIds=i.map(function(e){return e.attributes[o.objectIdField]}),[2,o.queryFeatures(a).then(function(e){return t.concat(e.features)}).catch(function(){return i})])}})})},r.prototype.createPopupQuery=function(e){return l(this,void 0,void 0,function(){var r,t,i;return u(this,function(o){switch(o.label){case 0:return r=this.layer,t=r.createQuery(),t.returnGeometry=!0,t.returnZ=!0,t.returnM=!0,i=t,[4,g.getRequiredFields(this.layer,g.getFetchPopupTemplate(this.layer,e))];case 1:return i.outFields=o.sent(),t.outSpatialReference=this.view.spatialReference,[2,t]}})})},i([y.property({readOnly:!0,dependsOn:["layer.outFields?","requiredFields"]})],r.prototype,"availableFields",null),i([y.property({type:v})],r.prototype,"effect",void 0),i([y.property({type:b})],r.prototype,"filter",void 0),i([y.property()],r.prototype,"layer",void 0),i([y.property({type:Number})],r.prototype,"maximumNumberOfFeatures",null),i([y.property({readOnly:!0,type:Boolean})],r.prototype,"maximumNumberOfFeaturesExceeded",null),i([y.property({readOnly:!0})],r.prototype,"requiredFields",void 0),i([y.property()],r.prototype,"view",void 0),r=i([y.subclass("esri.views.layers.FeatureLayerView")],r)}(y.declared(m))});