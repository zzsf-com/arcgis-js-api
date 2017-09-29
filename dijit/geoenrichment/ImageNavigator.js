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

define(["dojo/_base/declare","dojo/on","dojo/when","dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","./Pagination","./FlowList","./utils/DomUtil","./utils/WaitingUtil","./ReportPlayer/core/annotations/annotationUtils/CircularMaskUtil","dojo/text!./templates/ImageNavigator.html","dojo/i18n!../../nls/jsapi"],function(t,e,i,a,s,n,o,h,l,g,r,m,u,d,c,I){function _(t,e,a){return a=a||{},u.showProgress(e),i(t.getThumbnail(),function(t){if(u.removeProgress(e),t){var i=n.create("div",{"class":"imageNode esriGEAbsoluteStretched"},e);i.style.backgroundImage="url("+t+")",a.useCircularMask?setTimeout(function(){d.setCircularMask(a.useCircularMask,i,t)},0):a.scaleToCover&&(i.style.backgroundSize="cover")}else if(a.pagination)var i=n.create("div",{"class":"thumbnailIsUnavailable",innerHTML:I.previewNotAvailable},e);else{var i=n.create("div",{"class":"imageNode esriGEAbsoluteStretched noImage"},e);i.style.backgroundImage=""}})}I=I.geoenrichment.dijit.ReportPlayer.ImageNavigator;var v="singleImage",p="allImages",w=t(null,{createPresentation:function(t,e,i,a){var s=n.create("div",{"class":"imageThumbnailListItemRoot"},i);return _(t,s),this.selectPresentation(s,e),s},selectPresentation:function(t,e){s[e?"add":"remove"](t,"imageThumbnailListItemRootSelected")}});return t([h,l],{templateString:c,nls:I,showNotes:!0,showThumbnails:!1,showNavigationLabel:!1,enableAllImagesButton:!0,pagination:null,thumbnailList:null,allImagesList:null,postCreate:function(){this.inherited(arguments),this._initPagination(),this._initThumbnailsList(),this._updateUI(),m.hide(this.noImagePlaceHolder),this._addImageListeners(),this._setViewMode(v)},_initThumbnailsList:function(){this.showThumbnails&&(this.thumbnailList=this._createAllImagesList(this.thumbnailListDiv))},_initAllImagesList:function(){this.allImagesList||(this.allImagesList=this._createAllImagesList(this.allImagesListDiv,"esriGEAbsoluteStretched")),this.allImagesList.setItems(this._images,!0),this.allImagesList.setSelectedIndex(this._imageIndex)},_createAllImagesList:function(t,e){var i=this,a=new r({"class":"imageThumbnailList "+(e||""),items:[],itemRenderer:new w,onChange:function(){i._imageIndex=a.items.indexOf(a.selectedItem),i._setViewMode(v),i._showImage()}}).placeAt(t);return this.own(a),a},_initPagination:function(){var t=this;this.pagination=new g({createItemContainer:function(){var i=n.create("div",{"class":"imageNavigator_imagePaginationRoot"});return t._containerHeight>0&&o.set(i,"height",t._containerHeight+"px"),e(i,"click",function(){t._onImageClicked(i)}),i},updateItemContainer:function(e,i){n.empty(e),_(i,e,{useCircularMask:t._useCircularMask,scaleToCover:t._scaleToCover,pagination:!0})},scrollAnimation:"slide",autoCenter:"$stretch:1,1"}).placeAt(this.imagePaginationDiv),this.own(this.pagination),this.pagination.set("items",[]),this.pagination.startup()},_onImageClicked:function(t){var e=this._getCurrentImage();i(e&&e.getAttachmentUrl&&e.getAttachmentUrl(),function(t){t&&window.open(t,"_blank")})},_updateUI:function(){m[this.showNotes?"show":"hide"](this.imageNoteContainerDiv),m[this.showThumbnails?"show":"hide"](this.thumbnailListDiv),m[this.showNavigationLabel?"show":"hide"](this.navigatorLabel)},_imageIndex:0,_addImageListeners:function(){var t=this;e(this.prevImageButton,"click",function(){0!=t._imageIndex&&(t._imageIndex--,t._showImage())}),e(this.nextImageButton,"click",function(){t._imageIndex!=t._images.length-1&&(t._imageIndex++,t._showImage())}),this.enableAllImagesButton&&e(this.showAllImagesButton,"click",function(){t._setViewMode(p)})},_updateImageButtons:function(){s[this._imageIndex>0?"remove":"add"](this.prevImageButton,"esriGEImageNavigatorPaginationLeftButtonDisabled"),s[this._imageIndex<this._images.length-1?"remove":"add"](this.nextImageButton,"esriGEImageNavigatorPaginationRightButtonDisabled")},_getCurrentImage:function(){return this._images[this._imageIndex]},_showImage:function(){var t=this._getCurrentImage();t?(m.show(this.imageContainerOuter),m.hide(this.noImagePlaceHolder),this.pagination.resize(),this.pagination.set("currentPage",this._imageIndex),this.thumbnailList&&this.thumbnailList.setSelectedIndex(this._imageIndex)):(m.hide(this.imageContainerOuter),m.show(this.noImagePlaceHolder)),s[t?"remove":"add"](this.domNode,"hasNoImages"),this._updateImageButtons(),this.navigatorLabel.innerHTML=a.substitute(I.paginationLabel,{n:this._imageIndex+1,m:this._images.length}),this._showNote()},_showNote:function(){var t=this._getCurrentImage();this.imageNoteLabel.innerHTML=t&&t.description||"",o.set(this.imageNoteContainerDiv,"visibility",this.imageNoteLabel.innerHTML?"visible":"hidden")},_attachmentStore:null,_useCircularMask:null,_scaleToCover:null,update:function(t,e){this._attachmentStore=t||this._attachmentStore,this._updateWithAdditionalParameters(e),this._updateUI(),this._imageIndex=0;var a=this;return i(this._attachmentStore&&this._attachmentStore.getAttachments(),function(t){a._images=t||[],a.pagination.set("items",a._images),a._showImage(),a.thumbnailList&&(a.thumbnailList.setItems(a._images),a.thumbnailList.setSelectedIndex(a._imageIndex)),a._height&&a.setHeight(a._height)})},_updateWithAdditionalParameters:function(t){t=t||{},this._useCircularMask=t.useCircularMask,s[t.alwaysShowCaptions?"add":"remove"](this.domNode,"fixedCaptions"),this._scaleToCover=t.scaleToCover},_mode:null,_setViewMode:function(t){m.hide([this.singleImageView,this.allImagesView]),t==v?m.show(this.singleImageView):(m.show(this.allImagesView),this._initAllImagesList()),this._mode=t},getImageIndex:function(){return this._imageIndex},setImageIndex:function(t){this._imageIndex=t,this._showImage()},_height:0,_containerHeight:0,setHeight:function(t){this._height=t,this._containerHeight=t-(this.showThumbnails?50:0),o.set(this.imageContainer,"height",this._containerHeight+"px"),o.set(this.noImagePlaceHolder,"paddingTop",(t-o.get(this.noImagePlaceHolder,"height"))/2+"px");var e=(this._containerHeight-o.get(this.prevImageButton,"height"))/2;o.set(this.prevImageButton,"top",e+"px"),o.set(this.nextImageButton,"top",e+"px"),this.pagination.resize()}})});