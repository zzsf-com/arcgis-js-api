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

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","dojo/promise/all","./supportClasses/AnalysisAreaJsonUtil","./supportClasses/AreasPreprocessor","./supportClasses/ReportDataProcessor","../core/supportClasses/templateJsonUtils/TemplateJsonSerializer","../core/conversion/PortalToEditorConverter","../core/themes/ThemeLibrary","../core/themes/ReportThemes"],function(t,e,r,a,n,o,s,i,p,u,c){var l={getAttachmentsStoreJson:function(t){return t?a([t.getAttachments(),t.getAttributes(),t.getNotes()]).then(function(t){var e=t[0]||[],r=t[1]||[],n=t[2]||[];return a(e.map(function(t){return a([t.getThumbnail(),t.getAttachmentUrl()]).then(function(e){t.__thumbnail=e[0],t.__url=e[1]})})).then(function(){return{attachments:e.map(function(t){var e=t.__thumbnail,r=t.__url;return delete t.__thumbnail,delete t.__url,{description:t.description,thumbnail:e,url:r}}),attributes:r.map(function(t){return{value:t.value,alias:t.alias}}),notes:n.map(function(t){return{text:t.text}})}})}):null},getAttachmentsStoreFromJson:function(t){return t?{getAttachments:function(){return t.attachments?t.attachments.map(function(t){return{description:t.description,getThumbnail:function(){return t.thumbnail},getAttachmentUrl:function(){return t.url}}}):[]},getAttributes:function(){return t.attributes||[]},getNotes:function(){return t.notes||[]}}:null}};return t(null,{reportDataToJson:function(t,a){function o(){var e={};for(var r in t.reportObject)t.reportObject[r]&&"object"!=typeof t.reportObject[r]&&(e[r]=t.reportObject[r]);return e}return a=a||{},r(l.getAttachmentsStoreJson(t.attachmentsStore),function(r){var s=e.mixin({},t.config);return a.forceFixedDataMode!==!1&&(s.geoenrichmentUrl=""),{isClassic:t.isClassic,theme:t.theme,reportType:t.reportType,reportTitle:t.reportTitle,templateJson:i.serialize(t.templateJson),reportObject:o(),fieldData:t.fieldData,analysisAreas:n.areasToJson(t.analysisAreas),infographicOptions:t.infographicOptions&&t.infographicOptions.toJson(),attachmentsStore:r,config:s,mapImageInfos:a.mapImageInfos}})},reportDataFromJson:function(t){var e={isClassic:t.isClassic,theme:t.theme,reportType:t.reportType,reportTitle:t.reportTitle,templateJson:i.deserialize(t.templateJson),reportObject:t.reportObject,fieldData:t.fieldData,analysisAreas:n.areasFromJson(t.analysisAreas),infographicOptions:t.infographicOptions&&this._infographicOptionsProvider.getInfographicOptionsFromJson(t.infographicOptions),attachmentsStore:t.attachmentsStore&&l.getAttachmentsStoreFromJson(t.attachmentsStore),config:t.config,mapImageInfos:t.mapImageInfos};return e},_reportDataFromServerData:function(t){function e(){var e={isGraphicReport:!0,portalJson:{files:t.files}};return r(p.provideEditorJson(e),function(){return e.templateJson=i.deserialize(e.templateJson),delete e.portalJson,e})}function l(){var e=n.areasFromJson(t.studyAreas.map(function(t){return{feature:{geometry:t.geometry}}})),a={analysisAreas:e};return r(o.preprocessAreas(a,{generalize:!1,provideFeaturesForGeographies:!1,symbolizeAreas:!0}),function(){return a.analysisAreas})}function m(e,r){var a={metadata:{},featureData:[],additionalCalcHash:{},errors:[]};return s._applyFeatureSetToFieldData(t.featureSets[0],a.featureData),s._reportDataFromAreas(r,a.featureData),s._reportDataFromReport(e,a),a}function f(t,e){var r=h._infographicOptionsProvider.getInfographicOptions({geoenrichmentUrl:"geUrl",countryID:"countryID",reportID:"reportID",analysisAreas:t});return r}var h=this;return a([e(),l()]).then(function(e){var r=e[0],a=r.templateJson,n=e[1],o=m(r,n),s=f(n);return{isClassic:!1,theme:a.theme||u.getReportThemeById(c.GRAPHIC),templateJson:a,reportObject:r,fieldData:o,analysisAreas:n,infographicOptions:s,config:{portalUrl:t.portalUrl}}})},_reportDataToServerData:function(t){var e=t.analysisAreas.map(function(t){return{geometry:t.feature.geometry.toJson()}}),r=[{features:t.fieldData.featureData.map(function(t){return{attributes:t}})}];return t.reportObject.templateData.getFiles().then(function(a){return{portalUrl:t.config.portalUrl,studyAreas:e,featureSets:r,files:a}})}})});