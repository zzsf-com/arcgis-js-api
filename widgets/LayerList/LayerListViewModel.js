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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Collection","../../core/Evented","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators","./ListItem","./support/layerListUtils"],function(e,t,i,r,o,n,s,a,l,c,p,d){var h={view:"view",viewLayers:"view-layers",mapLayers:"map-layers",layerViews:"layer-views",layerListMode:"layer-list-mode"},y=n.ofType(p);return function(e){function t(t){var i=e.call(this)||this;return i._handles=new a,i.listItemCreatedFunction=null,i.operationalItems=new y,i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this._handles.add(l.init(this,"view",function(){return e._viewHandles()}),h.view)},t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null,this.operationalItems.removeAll()},Object.defineProperty(t.prototype,"state",{get:function(){var e=this.get("view");return this.get("view.ready")?"ready":e?"loading":"disabled"},enumerable:!0,configurable:!0}),t.prototype.triggerAction=function(e,t){e&&this.emit("trigger-action",{action:e,item:t})},t.prototype._createLayerViewHandles=function(e){var t=this,i=this._handles;i.remove(h.layerViews),this._compileList(),e&&i.add(e.on("change",function(){return t._compileList()}),h.layerViews)},t.prototype._createMapLayerHandles=function(e){var t=this,i=this._handles;i.remove(h.mapLayers),this._compileList(),e&&i.add(e.on("change",function(){return t._compileList()}),h.mapLayers)},t.prototype._watchItemProperties=function(e){var t=this;this._handles.add([e.children.on("change",function(){t._modifyListItemChildren(e.children)})],"children-change-"+e.uid)},t.prototype._modifyListItemChildren=function(e){var t=this;e.forEach(function(e){return t._modifyListItem(e)})},t.prototype._modifyListItem=function(e){if("function"==typeof this.listItemCreatedFunction){var t={item:e};this.listItemCreatedFunction.call(null,t)}this._modifyListItemChildren(e.children)},t.prototype._createListItem=function(e){var t=this.view,i=new p({layer:e,view:t});return this._watchItemProperties(i),i},t.prototype._removeAllItems=function(){var e=this,t=e._handles,i=e.operationalItems;i.forEach(function(e){t.remove("children-change-"+e.uid)}),i.removeAll()},t.prototype._getViewableLayers=function(e){if(e)return e.filter(function(e){return"hide"!==d.findLayerListMode(e)})},t.prototype._watchLayersListMode=function(e){var t=this,i=this._handles;i.remove(h.layerListMode),e&&e.forEach(function(e){i.add(l.watch(e,"listMode",function(){return t._compileList()}),h.layerListMode)})},t.prototype._compileList=function(){var e=this.get("view.map.layers");this._watchLayersListMode(e);var t=this._getViewableLayers(e);if(!t||!t.length)return void this._removeAllItems();this._createNewItems(t),this._modifyOrRemoveItems(t),this._sortItems(t)},t.prototype._createNewItems=function(e){var t=this,i=this.operationalItems;e.forEach(function(e){i.find(function(t){return t.layer===e})||i.add(t._createListItem(e))})},t.prototype._modifyOrRemoveItems=function(e){var t=this,i=this,r=i._handles,o=i.operationalItems;o.forEach(function(i){if(i){e.find(function(e){return i.layer===e})?t._modifyListItem(i):(r.remove("children-change-"+i.uid),o.remove(i))}})},t.prototype._sortItems=function(e){this.operationalItems.sort(function(t,i){var r=e.indexOf(t.layer),o=e.indexOf(i.layer);return r>o?-1:r<o?1:0})},t.prototype._viewHandles=function(){var e=this,t=this,i=t._handles,r=t.view;i.remove([h.mapLayers,h.layerViews,h.viewLayers]),this._compileList(),r&&i.add([l.init(this,"view.map.layers",function(t){return e._createMapLayerHandles(t)}),l.init(this,"view.layerViews",function(t){return e._createLayerViewHandles(t)}),l.init(this,"listItemCreatedFunction",function(){return e._compileList()})],h.viewLayers)},r([c.property()],t.prototype,"listItemCreatedFunction",void 0),r([c.property({type:y})],t.prototype,"operationalItems",void 0),r([c.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),r([c.property()],t.prototype,"view",void 0),r([c.property()],t.prototype,"triggerAction",null),t=r([c.subclass("esri.widgets.LayerList.LayerListViewModel")],t)}(c.declared(o,s))});