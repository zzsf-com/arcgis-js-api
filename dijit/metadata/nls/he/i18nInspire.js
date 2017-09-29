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

define({documentTypes:{data:{caption:"INSPIRE (נתונים)",description:""},service:{caption:"INSPIRE (שירות)",description:""}},dataThemeKeywords:{caption:"נושא נתונים של Inspire"},inspireServiceType:{discovery:"שירות גילוי",view:"שירות תצוגה",download:"שירות הורדה",transformation:"שירות המרה",invoke:"שירות הפעלה",other:"שירות אחר"},keywordSections:{dataTheme:"נושא נתונים של Inspire",serviceCategory:"קטגוריית שירות של ISO 19119",gemetConcept:"קונספט GEMET",otherKeywords:"מילות מפתח אחרות"},LanguageCode:{bul:"בולגרי",cze:"צ'כי",dan:"דנית",dut:"הולנדית",eng:"אנגלית",est:"אסטונית",fin:"פיני",fre:"צרפתית",ger:"גרמנית",gre:"יוונית",hun:"הוגגרית",gle:"גאלית (אירית)‎",ita:"איטלקית",lav:"לטבית",lit:"ליטאית",mlt:"מלטזית",pol:"פולנית",por:"פורטוגזית",rum:"רומנית",slo:"סלובני",slv:"סלובני",spa:"ספרדית",swe:"שוודית",chi:"סינית",kor:"קוריאנית",nor:"נורווגית",rus:"רוסית",tur:"תורכית"},otherConstraints:{noLimitations:"ללא מגבלות",confidentialityOfProceedings:"סודיות ההליכים של רשויות ציבוריות...",internationalRelations:"יחסים בינלאומיים, ביטחון הציבור או שירותי הגנה לאומיים",courseOfJustice:"מערכת המשפט, היכולת של כל אדם לקבל משפט צדק...",confidentialityOfCommercial:"הסודיות של מידע מסחרי או תעשייתי...",intellectualProperty:"זכויות יוצרים אינטלקטואליות",confidentialityOfPersonalData:"הסודיות של נתונים ו/או קבצים אישיים...",interestsOrProtection:"האינטרסים או ההגנה של אדם שסיפק את המידע...",protectionOfEnvironment:"הגנה על הסביבה שאליה מתייחס מידע כזה...",freeText:"טקסט חופשי"},serviceType:{humanInteractionService:"100 שירותים גיאוגרפיים של אינטראקציה אנושית",humanCatalogueViewer:"101 צופה הקטלוגים",humanGeographicViewer:"102 צופה גיאוגרפי",humanGeographicSpreadsheetViewer:"103 צופה גיליון אלקטרוני גיאוגרפי",humanServiceEditor:"104 עורך השירות",humanChainDefinitionEditor:"105 עורך הגדרות שרשרת",humanWorkflowEnactmentManager:"106 מנהל יישום זרימות עבודה",humanGeographicFeatureEditor:"107 עורך ישויות גיאוגרפיות",humanGeographicSymbolEditor:"108 עורך סמלים גיאוגרפיים ",humanFeatureGeneralizationEditor:"109 עורך הכללת הישויות",humanGeographicDataStructureViewer:"110 צופה מבנה הנתונים הגיאוגרפיים",infoManagementService:"200 שירות ניהול מודל גיאוגרפי/מידעי",infoFeatureAccessService:"201 שירות גישה לישויות",infoMapAccessService:"202 שירות גישה למפות",infoCoverageAccessService:"203 שירות גישה לכיסוי",infoSensorDescriptionService:"204 שירות תיאור חיישן",infoProductAccessService:"205 שירות גישה למוצר",infoFeatureTypeService:"206 שירות סוג ישות",infoCatalogueService:"207 שירות קטלוג",infoRegistryService:"208 שירות רישום",infoGazetteerService:"209 שירות אינדקס גיאוגרפי",infoOrderHandlingService:"210 שירות טיפול בהזמנות",infoStandingOrderService:"211 שירות הזמנות ממתינות",taskManagementService:"300 שירותי זרימת עבודה גיאוגרפית/ניהול משימות",chainDefinitionService:"301 שירות הגדרות שרשרת",workflowEnactmentService:"302 שירות יישום זרימות עבודה",subscriptionService:"303 שירות מנויים",spatialProcessingService:"400 שירותי עיבוד גיאוגרפי - מרחבי",spatialCoordinateConversionService:"401 שירות המרת קואורדינטות",spatialCoordinateTransformationService:"402 שירות טרנספורמציית קואורדינטות",spatialCoverageVectorConversionService:"403 שירות כיסוי/המרת וקטור",spatialImageCoordinateConversionService:"404 שירות המרת קואורדינטות של תמונות",spatialRectificationService:"405 שירות תיקונים",spatialOrthorectificationService:"406 שירות אורתוסיפיקציה",spatialSensorGeometryModelAdjustmentService:"407 שירות התאמת מודלים של גיאומטריית חיישן",spatialImageGeometryModelConversionService:"408 שירות המרת מודלים של גיאומטריית תמונה",spatialSubsettingService:"409 שירות הגדרות משנה",spatialSamplingService:"410 שירות דגימה",spatialTilingChangeService:"411 שירות שינוי אריחים",spatialDimensionMeasurementService:"412 שירות מדידת מידות",spatialFeatureManipulationService:"413 שירותי טיפול בישויות",spatialFeatureMatchingService:"414 שירות התאמת ישויות",spatialFeatureGeneralizationService:"415 שירות הכללת ישויות",spatialRouteDeterminationService:"416 שירות קביעת מסלולים",spatialPositioningService:"417 שירות מיקום",spatialProximityAnalysisService:"418 שירות ניתוח סמיכות",thematicProcessingService:"500 שירותי עיבוד גיאוגרפי - תמטי",thematicGoparameterCalculationService:"501 שירות חישוב פרמטרים גיאוגרפיים",thematicClassificationService:"502 שירות סיווג תמטי",thematicFeatureGeneralizationService:"503 שירות הכללת ישויות",thematicSubsettingService:"504 שירות הגדרות משנה",thematicSpatialCountingService:"505 שירות ספירה מרחבית",thematicChangeDetectionService:"506 שירות זיהוי שינויים",thematicGeographicInformationExtractionService:"507 שירותי ייצוא של מידע גיאוגרפי",thematicImageProcessingService:"508 שירות עיבוד תמונה",thematicReducedResolutionGenerationService:"509 שירות יצירת רזולוציה מופחתת",thematicImageManipulationService:"510 שירותי עיבוד תמונה",thematicImageUnderstandingService:"511 שירותי פענוח תמונה",thematicImageSynthesisService:"512 שירותי סינתזת תמונה",thematicMultibandImageManipulationService:"513 עיבוד תמונה רב-ערוצי",thematicObjectDetectionService:"514 שירות זיהוי אובייקטים",thematicGeoparsingService:"515 שירות ניתוח גיאוגרפי",thematicGeocodingService:"516 שירות עיגון כתובות",temporalProcessingService:"600 שירותי עיבוד גיאוגרפי - לפי זמן",temporalReferenceSystemTransformationService:"601 שירות המרה של מערכת ייחוס לפי זמן",temporalSubsettingService:"602 שירות הגדרות משנה",temporalSamplingService:"603 שירות דגימה",temporalProximityAnalysisService:"604 שירות ניתוח סמיכות לפי זמן",metadataProcessingService:"700 שירותי עיבוד גיאוגרפי - מטה-דאטה",metadataStatisticalCalculationService:"701 שירות חישוב סטטיסטי",metadataGeographicAnnotationService:"702 שירותי אנוטציה גיאוגרפית",comService:"800 שירותי תקשורת גיאוגרפית",comEncodingService:"801 שירות קידוד",comTransferService:"802 שירות העברה",comGeographicCompressionService:"803 שירות דחיסה גיאוגרפית",comGeographicFormatConversionService:"804 שירות המרת פורמט גיאוגרפי",comMessagingService:"805 שירות העברת הודעות",comRemoteFileAndExecutableManagement:"806 ניהול מרחוק של קבצים וקובצי הפעלה"},useLimitation:{noCondition:"אין תנאים ישימים",unknownCondition:"תנאים לא ידועים",freeText:"טקסט חופשי"}});