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

define({documentTypes:{data:{caption:"INSPIRE (Data)",description:""},service:{caption:"INSPIRE (Layanan)",description:""}},dataThemeKeywords:{caption:"Tema Data Inspirasi"},inspireServiceType:{discovery:"Layanan Penemuan",view:"Lihat Layanan",download:"Unduh Layanan",transformation:"Layanan Transformasi",invoke:"Aktifkan Layanan",other:"Layanan Lainnya"},keywordSections:{dataTheme:"Tema Data Inspirasi",serviceCategory:"Kategori Layanan ISO 19119",gemetConcept:"Konsep GEMET",otherKeywords:"Kata Kunci Lainnya"},LanguageCode:{bul:"Bulgaria",cze:"Ceko",dan:"Denmark",dut:"Belanda",eng:"Inggris",est:"Estonia",fin:"Finlandia",fre:"Perancis",ger:"Jerman",gre:"Yunani",hun:"Hongaria",gle:"Gaelik (Irlandia)",ita:"Italia",lav:"Latvia",lit:"Lituania",mlt:"Malta",pol:"Polandia",por:"Portugis",rum:"Rumania",slo:"Slovakia",slv:"Slovenia",spa:"Spanyol",swe:"Swedia",chi:"China",kor:"Korea",nor:"Norwegia",rus:"Rusia",tur:"Turki"},otherConstraints:{noLimitations:"Tak ada batas",confidentialityOfProceedings:"Kerahasiaan persidangan pejabat publik...",internationalRelations:"Hubungan internasional, keamanan publik, atau pertahanan nasional",courseOfJustice:"Jalannya keadilan, kemampuan setiap orang untuk mendapatkan persidangan yang adil...",confidentialityOfCommercial:"Kerahasiaan informasi komersial atau industrial...",intellectualProperty:"Hak Kekayaan Intelektual",confidentialityOfPersonalData:"Kerahasiaan data dan/atau file personal...",interestsOrProtection:"Kepentingan atau perlindungan setiap orang yang memberikan informasi...",protectionOfEnvironment:"Perlindungan lingkungan yang terkait dengan informasi tersebut...",freeText:"Teks bebas"},serviceType:{humanInteractionService:"100 Layanan interaksi manusia geografis",humanCatalogueViewer:"101 Penampil katalog",humanGeographicViewer:"102 Penampil geografis",humanGeographicSpreadsheetViewer:"103 Penampil lembar kerja geografis",humanServiceEditor:"104 Editor layanan",humanChainDefinitionEditor:"105 Editor definisi rangkaian",humanWorkflowEnactmentManager:"106 Manajer pelaksanaan alur kerja",humanGeographicFeatureEditor:"107 Editor fitur geografis",humanGeographicSymbolEditor:"108 Editor simbol geografis ",humanFeatureGeneralizationEditor:"109 Editor generalisasi fitur",humanGeographicDataStructureViewer:"110 Penampil data-struktur geografis",infoManagementService:"200 Layanan manajemen model/informasi geografis",infoFeatureAccessService:"201 Layanan akses fitur",infoMapAccessService:"202 Layanan akses peta",infoCoverageAccessService:"203 Layanan akses cakupan",infoSensorDescriptionService:"204 Layanan deskripsi sensor",infoProductAccessService:"205 Layanan akses produk",infoFeatureTypeService:"206 Layanan tipe fitur",infoCatalogueService:"207 Layanan katalog",infoRegistryService:"208 Layanan Pendaftaran",infoGazetteerService:"209 Layanan gazetir",infoOrderHandlingService:"210 Layanan penanganan pemesanan",infoStandingOrderService:"211 Layanan pesanan tetap",taskManagementService:"300 Layanan manajemen alur kerja/tugas geografis",chainDefinitionService:"301 Layanan definisi rangkaian",workflowEnactmentService:"302 Layanan pelaksanaan alur kerja",subscriptionService:"303 Layanan subskripsi",spatialProcessingService:"400 Layanan pemrosesan georafis - spasial",spatialCoordinateConversionService:"401 Layanan konversi koordinat",spatialCoordinateTransformationService:"402 Layanan transformasi koordinat",spatialCoverageVectorConversionService:"403 Layanan konversi cakupan/vektor",spatialImageCoordinateConversionService:"404 Layanan konversi koordinat gambar",spatialRectificationService:"405 Layanan rektifikasi",spatialOrthorectificationService:"406 Layanan ortorektifikasi",spatialSensorGeometryModelAdjustmentService:"407 Layanan penyesuaian model geometri sensor",spatialImageGeometryModelConversionService:"408 Layanan konversi model geometri gambar",spatialSubsettingService:"409 Layanan sub-rangkaian",spatialSamplingService:"410 Layanan pengambilan sampel",spatialTilingChangeService:"411 Layanan pengubahan tile",spatialDimensionMeasurementService:"412 Layanan pengukuran dimensi",spatialFeatureManipulationService:"413 Layanan manipulasi fitur",spatialFeatureMatchingService:"414 Layanan pencocokan fitur",spatialFeatureGeneralizationService:"415 Layanan generalisasi fitur",spatialRouteDeterminationService:"416 Layanan pemilihan rute",spatialPositioningService:"417 Layanan pemosisian",spatialProximityAnalysisService:"418 Layanan analisis jarak",thematicProcessingService:"500 Layanan pemrosesan georafis - tematik",thematicGoparameterCalculationService:"501 Layanan kalkulasi geoparameter",thematicClassificationService:"502 Layanan klasifikasi tematik",thematicFeatureGeneralizationService:"503 Layanan generalisasi fitur",thematicSubsettingService:"504 Layanan subsetting",thematicSpatialCountingService:"505 Layanan perhitungan spasial",thematicChangeDetectionService:"506 Layanan deteksi perubahan",thematicGeographicInformationExtractionService:"507 Layanan ekstraksi informasi geografis",thematicImageProcessingService:"508 Layanan pemrosesan gambar",thematicReducedResolutionGenerationService:"509 Layanan pembuatan resolusi yang dikurangi",thematicImageManipulationService:"510 Layanan Manipulasi Gambar",thematicImageUnderstandingService:"511 Layanan pemahaman gambar",thematicImageSynthesisService:"512 Layanan sintesis gambar",thematicMultibandImageManipulationService:"513 Manipulasi gambar multiband",thematicObjectDetectionService:"514 Layanan deteksi objek",thematicGeoparsingService:"515 Layanan geoparsing",thematicGeocodingService:"516 Layanan geocoding",temporalProcessingService:"600 Layanan pemrosesan geografis - temporal",temporalReferenceSystemTransformationService:"601 Layanan transformasi sistem referensi temporal",temporalSubsettingService:"602 Layanan subsetting",temporalSamplingService:"603 Layanan pengambilan sampel",temporalProximityAnalysisService:"604 Layanan analisis jarak temporal",metadataProcessingService:"700 Layanan pemrosesan geografis - metadata",metadataStatisticalCalculationService:"701 Layanan kalkulasi statistik",metadataGeographicAnnotationService:"702 Layanan anotasi geografis",comService:"800 Layanan komunikasi geografis",comEncodingService:"801 Layanan pengodean",comTransferService:"802 Layanan transfer",comGeographicCompressionService:"803 Layanan kompresi geografis",comGeographicFormatConversionService:"804 Layanan konversi format geografis",comMessagingService:"805 Layanan pesan",comRemoteFileAndExecutableManagement:"806 File jauh dan manajemen tereksekusi"},useLimitation:{noCondition:"Tidak ada syarat",unknownCondition:"Kondisi tidak dikenal",freeText:"Teks bebas"}});