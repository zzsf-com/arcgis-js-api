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

define({documentTypes:{data:{caption:"INSPIRE (Date)",description:""},service:{caption:"INSPIRE (Serviciu)",description:""}},dataThemeKeywords:{caption:"Temă date Inspire"},inspireServiceType:{discovery:"Serviciu descoperire",view:"Serviciu vizualizare",download:"Serviciu descărcare",transformation:"Serviciu transformare",invoke:"Serviciu invocare",other:"Alt serviciu"},keywordSections:{dataTheme:"Temă date Inspire",serviceCategory:"Categorie serviciu ISO 19119",gemetConcept:"Concept GEMET",otherKeywords:"Alte cuvinte cheie"},LanguageCode:{bul:"Bulgară",cze:"Cehă",dan:"Daneză",dut:"Olandeză",eng:"Engleză",est:"Estoniană",fin:"Finlandeză",fre:"Franceză",ger:"Germană",gre:"Greacă",hun:"Maghiară",gle:"Gaelică (irlandeză)",ita:"Italiană",lav:"Letonă",lit:"Lituaniană",mlt:"Malteză",pol:"Poloneză",por:"Portugheză",rum:"Română",slo:"Slovacă",slv:"Slovenă",spa:"Spaniolă",swe:"Suedeză",chi:"Chineză",kor:"Coreeană",nor:"Norvegiană",rus:"Rusă",tur:"Turcă"},otherConstraints:{noLimitations:"Fără limitări",confidentialityOfProceedings:"Confidenţialitatea acţiunilor autorităţilor publice...",internationalRelations:"Relaţii internaţionale, securitate publică sau apărare naţională",courseOfJustice:"Cursul justiţiei, capacitatea oricărei persoane de a beneficia de o judecată corectă...",confidentialityOfCommercial:"Confidenţialitate informaţiilor comerciale sau industriale...",intellectualProperty:"Drepturi de proprietate intelectuală",confidentialityOfPersonalData:"Confidenţialitate datelor şi/sau fişierelor personale...",interestsOrProtection:"Interesele sau protejare oricărei persoane care a furnizat informaţiile...",protectionOfEnvironment:"Protejarea mediului la care sunt asociate astfel de informaţii...",freeText:"Text liber"},serviceType:{humanInteractionService:"100 Servicii geografice cu interacţiune umană",humanCatalogueViewer:"101 Aplicaţie de vizualizare catalog",humanGeographicViewer:"102 Aplicaţie de vizualizare geografică",humanGeographicSpreadsheetViewer:"103 Aplicaţie de vizualizare foi de calcul geografice",humanServiceEditor:"104 Editor serviciu",humanChainDefinitionEditor:"105 Editor definiţie lanţ",humanWorkflowEnactmentManager:"106 Manager adoptare flux de lucru",humanGeographicFeatureEditor:"107 Editor obiecte spaţiale geografice",humanGeographicSymbolEditor:"108 Editor simboluri geografice ",humanFeatureGeneralizationEditor:"109 Editor generalizare obiecte spaţiale",humanGeographicDataStructureViewer:"110 Aplicaţie de vizualizare structură date geografice",infoManagementService:"200 Serviciu gestionare model/informaţii geografice",infoFeatureAccessService:"201 Serviciu acces obiecte spaţiale",infoMapAccessService:"202 Serviciu acces hărţi",infoCoverageAccessService:"203 Serviciu acces acoperire",infoSensorDescriptionService:"204 Serviciu descriere senzori",infoProductAccessService:"205 Serviciu acces produse",infoFeatureTypeService:"206 Serviciu tip obiecte spaţiale",infoCatalogueService:"207 Serviciu catalog",infoRegistryService:"208 Serviciu registru",infoGazetteerService:"209 Serviciu Gazetteer",infoOrderHandlingService:"210 Serviciu gestionare comenzi",infoStandingOrderService:"211 Serviciu comenzi în aşteptare",taskManagementService:"300 Servicii gestionare fluxuri de lucru/sarcini geografice",chainDefinitionService:"301 Serviciu definiţie lanţ",workflowEnactmentService:"302 Serviciu adoptare flux de lucru",subscriptionService:"303 Serviciu abonament",spatialProcessingService:"400 Servicii procesare geografică - spaţiale",spatialCoordinateConversionService:"401 Serviciu conversie coordonate",spatialCoordinateTransformationService:"402 Serviciu transformare coordonate",spatialCoverageVectorConversionService:"403 Serviciu conversie acoperire/vector",spatialImageCoordinateConversionService:"404 Serviciu conversie coordonate imagini",spatialRectificationService:"405 Serviciu rectificare",spatialOrthorectificationService:"406 Serviciu ortorectificare",spatialSensorGeometryModelAdjustmentService:"407 Serviciu ajustare model geometrie senzor",spatialImageGeometryModelConversionService:"408 Serviciu conversie model geometrie imagini",spatialSubsettingService:"409 Serviciu creare subseturi",spatialSamplingService:"410 Serviciu eşantioane",spatialTilingChangeService:"411 Serviciu modificare segmente tile",spatialDimensionMeasurementService:"412 Serviciu măsurare dimensiune",spatialFeatureManipulationService:"413 Servicii manipulare obiecte spaţiale",spatialFeatureMatchingService:"414 Serviciu potrivire obiecte spaţiale",spatialFeatureGeneralizationService:"415 Serviciu generalizare obiecte spaţiale",spatialRouteDeterminationService:"416 Serviciu determinare rute",spatialPositioningService:"417 Serviciu poziţionare",spatialProximityAnalysisService:"418 Serviciu analiză proximitate",thematicProcessingService:"500 Servicii procesare geografică - tematice",thematicGoparameterCalculationService:"501 Serviciu calcul geoparametru",thematicClassificationService:"502 Serviciu clasificare tematică",thematicFeatureGeneralizationService:"503 Serviciu generalizare obiecte spaţiale",thematicSubsettingService:"504 Serviciu creare subseturi",thematicSpatialCountingService:"505 Serviciu calcule spaţiale",thematicChangeDetectionService:"506 Serviciu detecţie modificări",thematicGeographicInformationExtractionService:"507 Servicii extragere informaţii geografice",thematicImageProcessingService:"508 Serviciu procesare imagini",thematicReducedResolutionGenerationService:"509 Serviciu generare rezoluţie redusă",thematicImageManipulationService:"510 Servicii manipulare imagini",thematicImageUnderstandingService:"511 Servicii înţelegere imagini",thematicImageSynthesisService:"512 Servicii sinteză imagini",thematicMultibandImageManipulationService:"513 Manipulare imagini benzi multiple",thematicObjectDetectionService:"514 Serviciu detecţie obiecte",thematicGeoparsingService:"515 Serviciu de geoanaliză",thematicGeocodingService:"516 Serviciu de geocodificare",temporalProcessingService:"600 Servicii procesare geografică - temporale",temporalReferenceSystemTransformationService:"601 Serviciu transformare sistem referinţe temporale",temporalSubsettingService:"602 Serviciu creare subseturi",temporalSamplingService:"603 Serviciu eşantioane",temporalProximityAnalysisService:"604 Serviciu analiză proximitate temporală",metadataProcessingService:"700 Servicii procesare geografică - metadate",metadataStatisticalCalculationService:"701 Serviciu calcul statistic",metadataGeographicAnnotationService:"702 Servicii de adnotare geografică",comService:"800 Servicii de comunicare geografică",comEncodingService:"801 Serviciu codificare",comTransferService:"802 Serviciu transfer",comGeographicCompressionService:"803 Serviciu compresie geografică",comGeographicFormatConversionService:"804 Serviciu conversie format geografic",comMessagingService:"805 Serviciu de mesagerie",comRemoteFileAndExecutableManagement:"806 Gestionarea executabilelor şi fişierelor la distanţă"},useLimitation:{noCondition:"Nu se aplică condiţii",unknownCondition:"Condiţii necunoscute",freeText:"Text liber"}});