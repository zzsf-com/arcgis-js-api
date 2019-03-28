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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Evented","../../core/Handles","../../core/maybe","../../core/screenUtils","../../core/accessorSupport/decorators","./DrawAction","./input/DrawEvents","./input/Keys"],function(e,t,r,i,o,n,s,d,p,c,u,v,a){function h(e){return"mouse"!==e.pointerType||0===e.button}return function(e){function t(t){var r=e.call(this,t)||this;return r._cursorScreenPoint=null,r._panEnabled=!1,r._cursorVertexAdded=!1,r._popVertexOnPointerMove=!1,r._addVertexOnPointerUp=!1,r._activePointerId=null,r._viewHandles=new s,r.mode="hybrid",r.vertices=[],r.view=null,r}return r(t,e),t.prototype.initialize=function(){this._addViewHandles()},t.prototype.destroy=function(){this._removeViewHandles(),this._viewHandles.destroy(),this.emit("destroy")},Object.defineProperty(t.prototype,"_clickEnabled",{get:function(){return-1!==["hybrid","click"].indexOf(this.mode)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_dragEnabled",{get:function(){return-1!==["hybrid","freehand"].indexOf(this.mode)},enumerable:!0,configurable:!0}),t.prototype.addVertex=function(e,t){var r=this;this.vertices.splice(t,0,e);var i={vertex:e,vertexIndex:t,undo:function(){return r._undoVertexAdd(null,e,t)},redo:function(){return r._redoVertexAdd(null,e,t)}};this.history.push(i),this._set("redoHistory",[]);var o=new v.VertexAddEvent(this.view,null,t,this.vertices);this.emit("vertex-add",o),o.defaultPrevented&&(this._popVertexOnPointerMove=!0,this.history.pop())},t.prototype.removeVertex=function(e){var t=this,r=this.vertices.splice(e,1)[0],i={vertex:r,vertexIndex:e,undo:function(){return t._undoVertexRemove(null,r,e)},redo:function(){return t._redoVertexRemove(null,r,e)}};this.history.push(i),this._set("redoHistory",[]),this.emit("vertex-remove",new v.VertexRemoveEvent(this.view,null,e,this.vertices))},t.prototype.updateVertex=function(e,t){var r=this,i=this.vertices[t];this.vertices[t]=e;var o={vertex:e,vertexIndex:t,undo:function(){return r._undoVertexUpdate(null,i,t)},redo:function(){return r._redoVertexUpdate(null,e,t)}};this.history.push(o),this._set("redoHistory",[]),this.emit("vertex-update",new v.VertexUpdateEvent(this.view,null,t,this.vertices))},t.prototype.complete=function(){this._completeDrawing()},t.prototype._addViewHandles=function(){var e=this;this._removeViewHandles(),this._viewHandles.add([this.view.on("click",function(e){e.stopPropagation()}),this.view.on("pointer-down",function(t){e._shouldHandlePointerEvent(t)&&(e._panEnabled||(e._activePointerId=t.pointerId,e._addVertexOnPointerUp=!0,e._cursorScreenPoint=p.createScreenPointFromEvent(t),"touch"===t.pointerType&&e._updateCursor(t.native)))}),this.view.on("pointer-move",function(t){e._popVertexOnPointerMove&&(e.vertices.pop(),e._popVertexOnPointerMove=!1),e._cursorScreenPoint=p.createScreenPointFromEvent(t),d.isNone(e._activePointerId)&&"touch"!==t.pointerType&&e._updateCursor(t.native)}),this.view.on("pointer-drag",function(t){e._shouldHandlePointerEvent(t)&&(e._cursorScreenPoint=p.createScreenPointFromEvent(t),e._dragEnabled?e._vertexAddHandler(t):e._addVertexOnPointerUp=!1)}),this.view.on("pointer-up",function(t){if(e._shouldHandlePointerEvent(t)){if(e._activePointerId=null,!e._addVertexOnPointerUp){var r="touch"===t.pointerType;return void e._updateCursor(t.native,r)}if(!e._clickEnabled)return 1===e.vertices.length&&e.vertices.pop(),void e._drawCompleteHandler(t);e._vertexAddHandler(t)}}),this.view.on("drag",function(t){e._dragEnabled&&d.isSome(e._activePointerId)&&!e._panEnabled&&t.stopPropagation()}),this.view.on("drag",["Shift"],function(e){e.stopPropagation()}),this.view.on("double-click",function(t){t.stopPropagation(),e._drawCompleteHandler(t)}),this.view.on("double-click",["Control"],function(t){t.stopPropagation(),e._drawCompleteHandler(t)}),this.view.on("key-down",function(t){var r=t.key,i=t.repeat;r===a.KEYS.vertexAddKey&&!i&&e._cursorScreenPoint?e._vertexAddHandler(t):r===a.KEYS.drawCompleteKey&&!i&&e._cursorScreenPoint&&e.vertices.length>2?(e._vertexAddHandler(t),e._drawCompleteHandler(t)):r!==a.KEYS.undoKey||i?r!==a.KEYS.redoKey||i?r!==a.KEYS.panKey||i||(e._panEnabled=!0):e.redo():e.undo()}),this.view.on("key-up",function(t){t.key===a.KEYS.panKey&&(e._panEnabled=!1)})])},t.prototype._removeViewHandles=function(){this._viewHandles.removeAll()},t.prototype._addVertex=function(e,t){var r=this;if(this._popCursorVertex(),!this.isDuplicateVertex(this.vertices,e)){var i=this.vertices.length;this.vertices.push(e);var o={vertex:e,vertexIndex:i,undo:function(){return r._undoVertexAdd(t,e,i)},redo:function(){return r._redoVertexAdd(t,e,i)}};this.history.push(o),this._set("redoHistory",[]);var n=new v.VertexAddEvent(this.view,t,i,this.vertices);this.emit("vertex-add",n),n.defaultPrevented&&this.history.pop()}},t.prototype._updateCursor=function(e,t){void 0===t&&(t=!1),this._popCursorVertex();var r=this.view.toMap(this._cursorScreenPoint),i=null;r&&!t&&(i=this._pushCursorVertex([r.x,r.y]));var o=new v.CursorUpdateEvent(this.view,e,i,this.vertices,r);this.emit("cursor-update",o)},t.prototype._completeDrawing=function(e){if(this._activePointerId=null,this._popCursorVertex(),!(this.vertices.length<3)){var t=new v.DrawCompleteEvent(e,this.vertices);this.emit("draw-complete",t),t.defaultPrevented||this._removeViewHandles()}},t.prototype._undoVertexAdd=function(e,t,r){this.vertices.splice(r,1),this.emit("undo",new v.VertexRemoveEvent(this.view,e,r,this.vertices))},t.prototype._redoVertexAdd=function(e,t,r){this.vertices.splice(r,0,t),this.emit("redo",new v.VertexAddEvent(this.view,e,r,this.vertices))},t.prototype._undoVertexRemove=function(e,t,r){this.vertices.splice(r,0,t),this.emit("undo",new v.VertexAddEvent(this.view,e,r,this.vertices))},t.prototype._redoVertexRemove=function(e,t,r){this.vertices.splice(r,1),this.emit("redo",new v.VertexRemoveEvent(this.view,e,r,this.vertices))},t.prototype._undoVertexUpdate=function(e,t,r){this.vertices[r]=t,this.emit("undo",new v.VertexUpdateEvent(this.view,e,r,this.vertices))},t.prototype._redoVertexUpdate=function(e,t,r){this.vertices[r]=t,this.emit("redo",new v.VertexUpdateEvent(this.view,e,r,this.vertices))},t.prototype._pushCursorVertex=function(e){return this._popCursorVertex(),this.vertices.push(e),this._cursorVertexAdded=!0,this.vertices.length-1},t.prototype._popCursorVertex=function(){this._cursorVertexAdded&&(this.vertices.pop(),this._cursorVertexAdded=!1)},t.prototype._shouldHandlePointerEvent=function(e){return h(e)&&(d.isNone(this._activePointerId)||this._activePointerId===e.pointerId)},t.prototype._vertexAddHandler=function(e){if(this._cursorVertexAdded){var t=this.vertices[this.vertices.length-1];this._addVertex(t,e.native)}else{var r=this.getCoordsFromScreenPoint(this._cursorScreenPoint);d.isSome(r)&&this._addVertex(r,e.native)}},t.prototype._drawCompleteHandler=function(e){this._completeDrawing(e.native)},i([c.property({dependsOn:["mode"]})],t.prototype,"_clickEnabled",null),i([c.property({dependsOn:["mode"]})],t.prototype,"_dragEnabled",null),i([c.property({cast:function(e){return-1===["hybrid","freehand","click"].indexOf(e)?"hybrid":e}})],t.prototype,"mode",void 0),i([c.property({readOnly:!0})],t.prototype,"vertices",void 0),i([c.property()],t.prototype,"view",void 0),t=i([c.subclass("esri.views.draw.PolygonDrawAction")],t)}(c.declared(u,o,n))});