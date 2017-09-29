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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../inspire/base/InspireDocumentType","./PortalItemTransformer","dojo/i18n!../../../nls/i18nGemini","../../../../../kernel"],function(t,a,e,d,i,n,m){var o=t(d,{caption:null,key:null,isService:!1,metadataStandardName:null,metadataStandardVersion:null,beforeInitializeAttribute:function(t,a){var e=a.gxePath;"/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:operatesOn/@xlink:href"===e?a.minOccurs=1:this.inherited(arguments)},beforeInitializeElement:function(t,a){this.inherited(arguments);var e=a.gxePath;"/gmd:MD_Metadata/gmd:hierarchyLevel"===e?a.maxOccurs=1:"/gmd:MD_Metadata/gmd:hierarchyLevelName"===e?(a.maxOccurs=1,this.isService||(a.minOccurs=1)):"/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString"===e?(a.value=this.metadataStandardName,a.fixed=!0):"/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString"===e?(a.value=this.metadataStandardVersion,a.fixed=!0):"/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress"===e?(a.minOccurs=1,a.maxOccurs=1):"/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact"===e||"/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:pointOfContact"===e?a.minOccurs=1:"/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:organisationName"===e||"/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:organisationName"===e?a.minOccurs=1:"/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo"===e||"/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo"===e?a.minOccurs=1:"/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:voice"===e||"/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:voice"===e?a.maxOccurs=1:"/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:facsimile"===e||"/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:facsimile"===e?a.maxOccurs=1:"/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address"===e||"/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address"===e?a.minOccurs=1:"/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress"===e||"/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress"===e?(a.minOccurs=1,a.maxOccurs=1):"/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:temporalElement"===e?a.minOccurs=0:"/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:operatesOn"===e?a.minOccurs=1:this.isService&&"/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:scope/gmd:DQ_Scope/gmd:levelDescription"===e?a.minOccurs=1:"/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:report/gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:pass/gco:Boolean"===e?a.minOccurs=1:this.inherited(arguments)},initializeNamespaces:function(){this.addNamespace("gmd","http://www.isotc211.org/2005/gmd"),this.addNamespace("gco","http://www.isotc211.org/2005/gco"),this.addNamespace("srv","http://www.isotc211.org/2005/srv"),this.addNamespace("gml","http://www.opengis.net/gml/3.2"),this.addNamespace("xlink","http://www.w3.org/1999/xlink")},newPortalItemTransformer:function(t){return new i}});return e("extend-esri")&&a.setObject("dijit.metadata.types.gemini.base.GeminiDocumentType",o,m),o});