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

define({documentTypes:{data:{caption:"ISO 19115 (duomenys)",description:""},service:{caption:"ISO 19119 (paslauga)",description:""},gmi:{caption:"ISO 19115-2 (atvaizdų ir tinklelio duomenys)",description:""}},general:{reference:"Nuoroda"},sections:{metadata:"Metaduomenys",identification:"Identifikavimas",distribution:"Platinimas",quality:"Kokybė",acquisition:"Įsigijimas"},metadataSection:{identifier:"Identifikatorius",contact:"Kontaktas",date:"Data",standard:"Standartinis",reference:"Nuoroda"},identificationSection:{citation:"Citavimas",description:"Aprašas",contact:"Kontaktas",thumbnail:"Miniatiūra",keywords:"Keywords",constraints:"Apribojimai",resource:"Išteklius",resourceTab:{representation:"Reprezentacija",language:"Kalba",classification:"Klasifikacija",extent:"Aprėptis"},serviceResourceTab:{serviceType:"Paslaugos tipas",extent:"Aprėptis",couplingType:"Sujungimo tipas",operation:"Veiksmas",operatesOn:"Veikia"}},distributionSection:{},qualitySection:{scope:"Sritis",conformance:"Atitikimas",lineage:"Kilmė"},acquisitionSection:{requirement:"Reikalavimas",objective:"Tikslas",instrument:"Instrumentas",plan:"Planas",operation:"Veiksmas",platform:"Platforma",environment:"Aplinka"},AbstractMD_Identification:{sAbstract:"Abstraktus",purpose:"Paskirtis",credit:"Autoriai",pointOfContact:"Kontakto taškas",resourceMaintenance:"Priežiūra",graphicOverview:"Grafinė apžvalga",descriptiveKeywords:"Raktažodžių rinkinys",resourceConstraints:"Apribojimai"},CI_Address:{deliveryPoint:"Pristatymo taškas",city:"Miestas",administrativeArea:"Administracinė sritis",postalCode:"Pašto kodas",country:"Šalis",electronicMailAddress:"El. pašto adresas"},CI_Citation:{title:"Pavadinimas",alternateTitle:"Alternatyvus pavadinimas",identifier:"Unikalus išteklių identifikatorius",resource:{title:"Ištekliaus pavadinimas",date:"Ištekliaus data"},specification:{title:"Specifikacijos pavadinimas",date:"Specifikacijos data"}},CI_Contact:{phone:"Telefonas",address:"Adresas",onlineResource:"Internetinis išteklius",hoursOfService:"Aptarnavimo valandos",contactInstructions:"Kontaktinės informacijos instrukcijos"},CI_Date:{date:"Data",dateType:"Datos tipas"},CI_DateTypeCode:{caption:"Datos tipas",creation:"Kūrimo data",publication:"Publikavimo data",revision:"Peržiūros data"},CI_OnLineFunctionCode:{caption:"Funkcija",download:"Atsiųsti",information:"Informacija",offlineAccess:"Prieiga neprisijungus",order:"Tvarka",search:"Ieškoti"},CI_OnlineResource:{caption:"Internetinis išteklius",linkage:"URL",protocol:"Protokolas",applicationProfile:"Aplikacijos profilis",name:"Pavadinimas",description:"Aprašas",sFunction:"Funkcija"},CI_ResponsibleParty:{caption:"Kontakto taškas",individualName:"Asmens vardas",organisationName:"Organizacijos pavadinimas",positionName:"Pareigos",contactInfo:"Kontaktinė informacija",role:"Rolė"},CI_RoleCode:{caption:"Rolė",resourceProvider:"Išteklių teikėjas",custodian:"Saugotojas",owner:"Savininkas",user:"Vartotojas",distributor:"Platintojas",originator:"Kūrėjas",pointOfContact:"Kontakto taškas",principalInvestigator:"Vyriausiasis tyrėjas",processor:"Apdorotojas",publisher:"Publikuotojas",author:"Autorius"},CI_Telephone:{voice:"Balso paštas",facsimile:"Faksas"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"WebServices"},DQ_ConformanceResult:{caption:"Atitikimo rezultatas",explanation:"Paaiškinimas",degree:{caption:"Laipsnis",validationPerformed:"Patikrinta",conformant:"Atitinka",nonConformant:"Neatitinka"}},DQ_DataQuality:{report:"Ataskaita"},DQ_Scope:{level:"Apimtis (kokybės informacija taikoma)",levelDescription:"Lygio aprašas"},EX_Extent:{caption:"Aprėptis",description:"Aprašas",geographicElement:"Erdvinė aprėptis",temporalElement:"Laiko aprėptis",verticalElement:"Vertikali aprėptis"},EX_GeographicBoundingBox:{westBoundLongitude:"Ilgumos vakarinė riba",eastBoundLongitude:"Ilgumos rytinė riba",southBoundLatitude:"Platumos pietinė riba",northBoundLatitude:"Platumos šiaurinė riba"},EX_GeographicDescription:{caption:"Geografinis aprašas"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Pradžios data",endPosition:"Pabaigos data"}},EX_VerticalExtent:{minimumValue:"Minimali reikšmė",maximumValue:"Maksimali reikšmė",verticalCRS:"Vertikalus CRS"},Length:{caption:"Ilgis",uom:"Matavimo vienetai",km:"Kilometrai",m:"Metrai",mi:"Mylios",ft:"Pėdos"},LI_Lineage:{statement:"Kilmės tvirtinimas"},MD_BrowseGraphic:{fileName:"Naršymo grafikos URL",fileDescription:"Naršymo grafikos antraštė",fileType:"Naršymo grafikos tipas"},MD_ClassificationCode:{unclassified:"Neklasifikuota",restricted:"Apribota",confidential:"Konfidencialu",secret:"Slapta",topSecret:"Ypač slapta"},MD_Constraints:{caption:"Naudojimo apribojimai",useLimitation:"Naudoti apribojimą"},MD_DataIdentification:{spatialRepresentationType:"Erdvinės reprezentacijos tipas",spatialResolution:"Erdvinė raiška",language:"Išteklių kalba",supplementalInformation:"Papildomai"},MD_DigitalTransferOptions:{onLine:"Prisijungta"},MD_Distribution:{distributionFormat:"Platinimo formatas",transferOptions:"Perkėlimo parinktys"},MD_Format:{name:"Formato pavadinimas",version:"Formato versija"},MD_Identifier:{caption:"URI",identifierCaption:"Identifikatorius",code:"Kodas"},MD_Keywords:{delimitedCaption:"Keywords",thesaurusName:"Susijęs žodynas"},MD_KeywordTypeCode:{caption:"Raktažodžio tipas",discipline:"Dalykas",place:"Padėtis",stratum:"Sluoksnis",temporal:"Laiko",theme:"Apipavidalinimas"},MD_LegalConstraints:{caption:"Teisiniai apribojimai",accessConstraints:"Prieigos apribojimai",useConstraints:"Naudojimo apribojimai",otherConstraints:"Kiti apribojimai"},MD_MaintenanceFrequencyCode:{caption:"Dažnis",continual:"Nuolatinis",daily:"Kasdien",weekly:"Kas savaitę",fortnightly:"Kas dvi savaites",monthly:"Kas mėnesį",quarterly:"Kas ketvirtį",biannually:"Kas dvejus metus",annually:"Kasmet",asNeeded:"Prireikus",irregular:"Nereguliarus",notPlanned:"Nesuplanuotas",unknown:"Nežinomas"},MD_Metadata:{caption:"Metaduomenys",fileIdentifier:"Failo identifikatorius",language:"Metaduomenų kalba",hierarchyLevel:"Hierarchijos lygis",hierarchyLevelName:"Hierarchijos lygio pavadinimas",contact:"Metaduomenų kontaktas",dateStamp:"Metaduomenų data",metadataStandardName:"Metaduomenų standarto pavadinimas",metadataStandardVersion:"Metaduomenų standarto versija",referenceSystemInfo:"Nuorodinė sistema",identificationInfo:"Identifikavimas",distributionInfo:"Platinimas",dataQualityInfo:"Kokybė"},MD_ProgressCode:{caption:"Eigos kodas",completed:"Baigta",historicalArchive:"Istorinis archyvas",obsolete:"Nebenaudojama",onGoing:"Naudojama",planned:"Suplanuota",required:"Privalomas",underDevelopment:"Programuojama"},MD_RepresentativeFraction:{denominator:"Daliklis"},MD_Resolution:{equivalentScale:"Ekvivalento mastelis",distance:"Atstumas"},MD_RestrictionCode:{copyright:"Autoriaus teisės",patent:"Patentas",patentPending:"Laukiama patento",trademark:"Prekės ženklas",license:"Licencija",intellectualPropertyRights:"Intelektinės nuosavybės teisės",restricted:"Apribota",otherRestrictions:"Kiti apribojimai"},MD_ScopeCode:{attribute:"Atributas",attributeType:"Atributo tipas",collectionHardware:"Rinkinio aparatūra",collectionSession:"Rinkinio seansas",dataset:"Duomenų rinkinys",series:"Serija",nonGeographicDataset:"Negeografinių duomenų rinkinys",dimensionGroup:"Matmenų grupė",feature:"Elementas",featureType:"Elemento tipas",propertyType:"Savybės tipas",fieldSession:"Lauko seansas",software:"Programinė įranga",service:"Paslauga",model:"Modelis",tile:"Išklotinė"},MD_ScopeDescription:{attributes:"Atributai",features:"Elementai",featureInstances:"Funkcijų pavyzdžiai",attributeInstances:"Atributų pavyzdžiai",dataset:"Duomenų rinkinys",other:"Kita"},MD_SecurityConstraints:{caption:"Saugos apribojimai",classification:"Klasifikacija",userNote:"Vartotojo pastaba",classificationSystem:"Klasifikavimo sistema",handlingDescription:"Valdymo aprašas"},MD_SpatialRepresentationTypeCode:{caption:"Erdvinės reprezentacijos tipas",vector:"Vektorius",grid:"Tinklelis",textTable:"Teksto lentelė",tin:"TIN",stereoModel:"Stereometrinis modelis",video:"Video"},MD_TopicCategoryCode:{caption:"Temų kategorija",boundaries:"Administracinės ir politinės sienos",farming:"Žemės ūkis ir ūkininkavimas",climatologyMeteorologyAtmosphere:"Atmosfera ir klimatas",biota:"Biologija ir ekologija",economy:"Verslas ir ekonomika",planningCadastre:"Kadastrai",society:"Kultūra, visuomenė ir demografiniai duomenys",elevation:"Aukščių ir išvestiniai produktai",environment:"Aplinka ir saugomos teritorijos",structure:"Infrastruktūra ir konstrukcijos",geoscientificInformation:"Geologinės ir geofizinės",health:"Žmonių sveikata ir ligos",imageryBaseMapsEarthCover:"Vaizdai ir pagrindo žemėlapiai",inlandWaters:"Vidiniai vandens ištekliai",location:"Vietos ir geodeziniai tinklai",intelligenceMilitary:"Kariuomenė",oceans:"Vandenynai ir upės žiotys",transportation:"Transporto tinklai",utilitiesCommunication:"Komunalinės paslaugos ir ryšiai"},MI_ContextCode:{caption:"Kontekstas",acquisition:"Įsigijimas",pass:"Perdavimas",wayPoint:"Maršruto taškas"},MI_EnvironmentalRecord:{caption:"Aplinkos sąlygos",averageAirTemperature:"Vidutinė oro temperatūra",maxRelativeHumidity:"Maksimalus reliatyvus drėgnumas",maxAltitude:"Maksimalus aukštis",meterologicalConditions:"Meteorologinės sąlygos"},MI_Event:{identifier:"Įvykio identifikatorius",time:"Laikas",expectedObjectiveReference:"Numatytas tikslas (tikslo identifikatorius)",relatedSensorReference:"Susijęs jutiklis (instrumento identifikatorius)",relatedPassReference:"Susijęs perdavimas (platformos perdavimo identifikatorius)"},MI_GeometryTypeCode:{point:"Kyšulys",linear:"Linijinis",areal:"Arealinis",strip:"Juosta"},MI_Instrument:{citation:"Instrumento citavimas",identifier:"Instrumento identifikatorius",sType:"Instrumento tipas",description:"Instrumento aprašas",mountedOn:"Įrengta",mountedOnPlatformReference:"Įrengta (platformos identifikatorius)"},MI_Metadata:{acquisitionInformation:"Įsigijimas"},MI_Objective:{caption:"Tikslas",identifier:"Tikslo identifikatorius",priority:"Paskirties vietos prioritetas",sFunction:"Tikslo funkcija",extent:"Aprėptis",pass:"Platformos perdavimas",sensingInstrumentReference:"Fiksavimo instrumentas (instrumento identifikatorius)",objectiveOccurrence:"Įvykiai",sections:{identification:"Identifikavimas",extent:"Aprėptis",pass:"Perdavimas",sensingInstrument:"Fiksavimo instrumentas",objectiveOccurrence:"Įvykiai"}},MI_ObjectiveTypeCode:{caption:"Tipas (tikslo rinkimo technika)",instantaneousCollection:"Momentinis rinkinys",persistentView:"Nuolatinė peržiūra",survey:"Matavimai"},MI_Operation:{caption:"Veiksmas",description:"Veiksmo aprašymas",citation:"Veiksmo citavimas",identifier:"Veiksmo identifikatorius",status:"Veiksmo būsena",objectiveReference:"Susijęs tikslas (tikslo identifikatorius)",planReference:"Susijęs planas (plano identifikatorius)",significantEventReference:"Susijęs įvykis (įvykio identifikatorius)",platformReference:"Susijusi platforma (platformos identifikatorius)",sections:{identification:"Identifikavimas",related:"Susijęs"}},MI_OperationTypeCode:{caption:"Veiksmo tipas",real:"Realusis",simulated:"Imituojamas",synthesized:"Susintetintas"},MI_Plan:{sType:"Duomenų rinkimo atrankos geometrija",status:"Plano būsena",citation:"Institucijos užklausų rinkinio citavimas",satisfiedRequirementReference:"Patenkintas reikalavimas (reikalavimo identifikatorius)",operationReference:"Susijęs veiksmas (veiksmo identifikatorius)"},MI_Platform:{citation:"Platformos citavimas",identifier:"Platformos identifikatorius",description:"Instrumentą palaikančios platformos aprašas",sponsor:"Platformą remianti organizacija",instrument:"Instrumentas (-ai), įrengtas (-i) platformoje",instrumentReference:"Instrumento identifikatorius",sections:{identification:"Identifikavimas",sponsor:"Rėmėjas",instruments:"Instrumentai"}},MI_PlatformPass:{identifier:"Platformos perdavimo identifikatorius",extent:"Platformos perdavimo aprėptis",relatedEventReference:"Susijęs įvykis (įvykio identifikatorius)"},MI_PriorityCode:{critical:"kritinė",highImportance:"Labai svarbu",mediumImportance:"Vidutiniškai svarbu",lowImportance:"Mažai svarbu"},MI_RequestedDate:{requestedDateOfCollection:"Rinkinio užklausimo data",latestAcceptableDate:"Vėliausia priimtina data"},MI_Requirement:{caption:"Reikalavimas",citation:"Reikalavimo rekomendacijų medžiagos citavimas",identifier:"Reikalavimo identifikatorius",requestor:"Reikalavimo užklausėjas",recipient:"Reikalavimo rezultatų gavėjas",priority:"Reikalavimo prioritetas",requestedDate:"Užklausta data",expiryDate:"Galiojimo pabaigos data",satisifiedPlanReference:"Įvykdytas planas (plano identifikatorius)",sections:{identification:"Identifikavimas",requestor:"Užklausėjas",recipient:"Gavėjas",priorityAndDates:"Prioritetas ir datos",satisifiedPlan:"Įvykdytas planas"}},MI_SequenceCode:{caption:"Seka",start:"Pradėti",end:"Pabaiga",instantaneous:"Momentinis"},MI_TriggerCode:{caption:"Paleidiklis",automatic:"Automatinis",manual:"Rankiniu būdu",preProgrammed:"Iš anksto suprogramuota"},ObjectReference:{uuidref:"UUID žinynas",xlinkref:"URL žinynas"},RS_Identifier:{caption:"ID Plus kodo vieta",code:"Kodas",codeSpace:"Kodo vieta"},SV_CouplingType:{loose:"Laisvas",mixed:"Mišrus",tight:"Glaudus"},SV_OperationMetadata:{operationName:"Veiksmo pavadinimas",DCP:"DCP",connectPoint:"Ryšio taškas"},SV_ServiceIdentification:{serviceType:"Paslaugos tipas",couplingType:"Sujungimo tipas",containsOperations:"Veiksmo metaduomenys",operatesOn:"Veikia"},TM_Primitive:{indeterminatePosition:"Neapibrėžta padėtis",indeterminates:{before:"Prieš",after:"Po",now:"Dabar",unknown:"Nežinomas"}},gemet:{concept:{gemetConceptKeyword:"GEMET sąvokos raktažodis",tool:"Ieškoti...",dialogTitle:"GEMET – sąvokos raktažodis",searchLabel:"Ieškoti:",searchTip:"Ieškoti GEMET"},theme:{tool:"Ieškoti...",dialogTitle:"GEMET – Inspire duomenų tema"},ioerror:"Susisiekiant su GEMET paslauga įvyko klaida: {url}",searching:"Ieškoma GEMET...",noMatch:"Atitinkančių rezultatų nerasta.",languages:{bg:"Bulgarų",cs:"Čekų",da:"Danų",nl:"Olandų",en:"Anglų",et:"Estų",fi:"Suomių",fr:"Prancūzų",de:"Vokiečių",el:"Graikų",hu:"Vengrų",ga:"Gėlų (airių)",it:"Italų",lv:"Latvių",lt:"Lietuvių",mt:"Maltiečių",pl:"Lenkų",pt:"Portugalų",ro:"Rumunų",sk:"Slovakų",sl:"Slovėnų",es:"Ispanų",sv:"Švedų"}}});