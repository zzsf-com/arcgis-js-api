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

define({documentTypes:{data:{caption:"ISO 19115 (aineisto)",description:""},service:{caption:"ISO 19119 (palvelu)",description:""},gmi:{caption:"ISO 19115-2 (kuvat ja hilatiedot)",description:""}},general:{reference:"Viite"},sections:{metadata:"Metatiedot",identification:"Tunnus",distribution:"Jakelu",quality:"Laatu",acquisition:"Yrityskauppa"},metadataSection:{identifier:"Tunnus",contact:"Yhteyshenkilö",date:"Päivämäärä",standard:"Standard",reference:"Viite"},identificationSection:{citation:"Viitetiedot",description:"Kuvaus",contact:"Yhteyshenkilö",thumbnail:"Pikkukuva",keywords:"Avainsanat",constraints:"Rajoitukset",resource:"Resurssi",resourceTab:{representation:"Esitystapa",language:"Kieli",classification:"Luokitus",extent:"Laajuus"},serviceResourceTab:{serviceType:"Palvelutyyppi",extent:"Laajuus",couplingType:"Liitäntätyyppi",operation:"Operation",operatesOn:"Toimintakohde"}},distributionSection:{},qualitySection:{scope:"Soveltamisala",conformance:"Vaatimustenmukaisuus",lineage:"Alkuperä"},acquisitionSection:{requirement:"Vaatimus",objective:"Tavoite",instrument:"Laite",plan:"Suunnitelma",operation:"Operation",platform:"Alusta",environment:"Ympäristö"},AbstractMD_Identification:{sAbstract:"Tiivistelmä",purpose:"Tarkoitus",credit:"Krediitit",pointOfContact:"Yhteystaho",resourceMaintenance:"Ylläpito",graphicOverview:"Graafinen yleisnäkymä",descriptiveKeywords:"Avainsanojen kokoelma",resourceConstraints:"Rajoitukset"},CI_Address:{deliveryPoint:"Jakelupiste",city:"kaupunki",administrativeArea:"Hallinnollinen alue",postalCode:"Postinumero",country:"Maa",electronicMailAddress:"Sähköpostiosoite"},CI_Citation:{title:"Otsikko",alternateTitle:"Vaihtoehtoinen otsikko",identifier:"Yksilöllinen resurssitunnus",resource:{title:"Resurssin otsikko",date:"Resurssin päivämäärä"},specification:{title:"Määrityksen otsikko",date:"Määrityksen päivämäärä"}},CI_Contact:{phone:"Puhelin",address:"Osoite",onlineResource:"Online-resurssi",hoursOfService:"Palvelutunnit",contactInstructions:"Yhteydenotto-ohjeet"},CI_Date:{date:"Päivämäärä",dateType:"Päivämäärätyyppi"},CI_DateTypeCode:{caption:"Päivämäärätyyppi",creation:"Luontipäivämäärä",publication:"Julkaisupäivämäärä",revision:"Korjauspäivämäärä"},CI_OnLineFunctionCode:{caption:"Toiminto",download:"Lataa",information:"Tiedot",offlineAccess:"Offline-käyttö",order:"Järjestä",search:"Etsi"},CI_OnlineResource:{caption:"Online-resurssi",linkage:"URL-osoite",protocol:"Protokolla",applicationProfile:"Sovelluksen profiili",name:"Nimi",description:"Kuvaus",sFunction:"Toiminto"},CI_ResponsibleParty:{caption:"Yhteystaho",individualName:"Henkilön nimi",organisationName:"Organisaation nimi",positionName:"Aseman nimi",contactInfo:"Yhteystiedot",role:"Rooli"},CI_RoleCode:{caption:"Rooli",resourceProvider:"Resurssin toimittaja",custodian:"Haltija",owner:"Omistaja",user:"Käyttäjä",distributor:"Jakelija",originator:"Tuottaja",pointOfContact:"Yhteystaho",principalInvestigator:"Päätutkija",processor:"Käsittelijä",publisher:"Julkaisija",author:"Tekijä"},CI_Telephone:{voice:"Ääni",facsimile:"Faksi"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Web-palvelut"},DQ_ConformanceResult:{caption:"Vaatimustenmukaisuuden tulos",explanation:"Selitys",degree:{caption:"Aste",validationPerformed:"Validointi suoritettu",conformant:"Vaatimustenmukainen",nonConformant:"Ei-vaatimustenmukainen"}},DQ_DataQuality:{report:"Raportti"},DQ_Scope:{level:"Soveltamisala (jota laatutiedot koskevat)",levelDescription:"Tason kuvaus"},EX_Extent:{caption:"Laajuus",description:"Kuvaus",geographicElement:"Sijaintilaajuus",temporalElement:"Ajallinen laajuus",verticalElement:"Pystysuunnan laajuus"},EX_GeographicBoundingBox:{westBoundLongitude:"Länteen rajaava pituusaste",eastBoundLongitude:"Itään rajaava pituusaste",southBoundLatitude:"Etelään rajaava leveysaste",northBoundLatitude:"Pohjoiseen rajaava leveysaste"},EX_GeographicDescription:{caption:"Maantieteellinen kuvaus"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Aloituspäivämäärä",endPosition:"Lopetuspäivämäärä"}},EX_VerticalExtent:{minimumValue:"Vähimmäisarvo",maximumValue:"Enimmäisarvo",verticalCRS:"Pystysuuntainen CRS"},Length:{caption:"Pituus",uom:"Mittayksiköt",km:"Kilometriä",m:"Metriä",mi:"Mailia",ft:"Jalka"},LI_Lineage:{statement:"Alkuperälauseke"},MD_BrowseGraphic:{fileName:"Grafiikan URL-osoitteen selaus",fileDescription:"Grafiikan kuvatekstin selaus",fileType:"Grafiikan tyypin selaus"},MD_ClassificationCode:{unclassified:"Luokittelematon",restricted:"Rajoitettu",confidential:"Luottamuksellinen",secret:"Salainen",topSecret:"Huippusalainen"},MD_Constraints:{caption:"Käytön rajoitukset",useLimitation:"Käytön rajoitus"},MD_DataIdentification:{spatialRepresentationType:"Paikkatiedon esitystyyppi",spatialResolution:"Koordinaatistoresoluutio",language:"Resurssin kieli",supplementalInformation:"Lisä-"},MD_DigitalTransferOptions:{onLine:"Verkossa"},MD_Distribution:{distributionFormat:"Jakeluformaatti",transferOptions:"Siirron asetukset"},MD_Format:{name:"Muotonimi",version:"Muodon versio"},MD_Identifier:{caption:"URI",identifierCaption:"Tunnus",code:"Koodi"},MD_Keywords:{delimitedCaption:"Avainsanat",thesaurusName:"Liittyvä hakusanaluettelo"},MD_KeywordTypeCode:{caption:"Avainsanan tyyppi",discipline:"Toimiala",place:"Place",stratum:"Kerrostuma",temporal:"Aika",theme:"Teema"},MD_LegalConstraints:{caption:"Lakisääteiset rajoitukset",accessConstraints:"Käyttörajoitukset",useConstraints:"Käyttörajoitukset",otherConstraints:"Muut rajoitukset"},MD_MaintenanceFrequencyCode:{caption:"Toistoväli",continual:"Jatkuva",daily:"Päivittäin",weekly:"Viikoittain",fortnightly:"Joka toinen viikko",monthly:"Kuukausittain",quarterly:"Neljännesvuosittain",biannually:"Kahdesti vuodessa",annually:"Vuosittain",asNeeded:"Tarvittaessa",irregular:"Epäsäännöllisesti",notPlanned:"Ei suunniteltu",unknown:"Tuntematon"},MD_Metadata:{caption:"Metatiedot",fileIdentifier:"Tiedoston tunnus",language:"Metadatan kieli",hierarchyLevel:"Hierarkiataso",hierarchyLevelName:"Hierarkiatason nimi",contact:"Metadatan yhteystiedot",dateStamp:"Metadatan päivämäärä",metadataStandardName:"Metadatastandardin nimi",metadataStandardVersion:"Metadatastandardin versio",referenceSystemInfo:"Viitejärjestelmä",identificationInfo:"Tunnus",distributionInfo:"Jakelu",dataQualityInfo:"Laatu"},MD_ProgressCode:{caption:"Edistymiskoodi",completed:"Completed",historicalArchive:"Historiallinen arkisto",obsolete:"Vanhentunut",onGoing:"Jatkuvasti ylläpidettävä",planned:"Suunniteltu",required:"Pakollinen",underDevelopment:"Osittain valmis"},MD_RepresentativeFraction:{denominator:"Nimittäjä"},MD_Resolution:{equivalentScale:"Mittakaava",distance:"Etäisyys"},MD_RestrictionCode:{copyright:"Copyright",patent:"Patentti",patentPending:"Patenttia haettu",trademark:"Tavaramerkki",license:"Lisenssi",intellectualPropertyRights:"Tekijänoikeudet",restricted:"Rajoitettu",otherRestrictions:"Muut rajoitukset"},MD_ScopeCode:{attribute:"Ominaisuustieto",attributeType:"Ominaisuustiedon tyyppi",collectionHardware:"Kokoelmalaitteisto",collectionSession:"Kokoelmaistunto",dataset:"Aineistoryhmä",series:"Sarja",nonGeographicDataset:"Muu kuin paikkatietoaineisto",dimensionGroup:"Ulottuvuusryhmä",feature:"Kohde",featureType:"Kohdetyyppi",propertyType:"Ominaisuuden tyyppi",fieldSession:"Kenttäistunto",software:"Ohjelmisto",service:"Palvelu",model:"Malli",tile:"Tiili"},MD_ScopeDescription:{attributes:"Ominaisuustiedot",features:"Features",featureInstances:"Kohteen esiintymät",attributeInstances:"Ominaisuustiedon ilmentymät",dataset:"Aineistoryhmä",other:"Muu"},MD_SecurityConstraints:{caption:"Suojauksen rajoitukset",classification:"Luokitus",userNote:"Käyttäjän huomautus",classificationSystem:"Luokitusjärjestelmä",handlingDescription:"Käsittelyn kuvaus"},MD_SpatialRepresentationTypeCode:{caption:"Paikkatiedon esitystyyppi",vector:"Vektori",grid:"Ruudukko",textTable:"Tekstitaulu",tin:"TIN",stereoModel:"Stereomalli",video:"Video"},MD_TopicCategoryCode:{caption:"Aiheluokka",boundaries:"Hallinnolliset ja poliittiset rajat",farming:"Maanviljely ja karjanhoito",climatologyMeteorologyAtmosphere:"Ilmakehä ja ilmasto",biota:"Biologia ja ekologia",economy:"Liiketoiminta ja talous",planningCadastre:"Kiinteistörekisteri",society:"Kulttuuri, yhteiskunta ja demografia",elevation:"Korkeus ja siihen liittyvät tuotteet",environment:"Ympäristö ja luonnonsuojelu",structure:"Palvelut ja rakenteet",geoscientificInformation:"Geologia ja geofysiikka",health:"Ihmisten terveys ja sairaudet",imageryBaseMapsEarthCover:"Kuvat ja taustakartat",inlandWaters:"Sisävesistöjen resurssit",location:"Sijainnit ja geodeettiset verkot",intelligenceMilitary:"Sotilastoiminta",oceans:"Meret ja joensuut",transportation:"Kuljetusverkot",utilitiesCommunication:"Apuohjelmat ja tiedonsiirto"},MI_ContextCode:{caption:"Konteksti",acquisition:"Yrityskauppa",pass:"Läpäisy",wayPoint:"Reittipiste"},MI_EnvironmentalRecord:{caption:"Ympäristöolosuhteet",averageAirTemperature:"Keskimääräinen ilman lämpötila",maxRelativeHumidity:"Suhteellisen kosteuden enimmäisarvo",maxAltitude:"Enimmäiskorkeus",meterologicalConditions:"Meteorologiset olosuhteet"},MI_Event:{identifier:"Tapahtuman tunnus",time:"Kellonaika",expectedObjectiveReference:"Odotettu tavoite (tavoitteen tunnus)",relatedSensorReference:"Liittyvä anturi (laitteen tunnus)",relatedPassReference:"Liittyvä lupa (alustan luvan tunnus)"},MI_GeometryTypeCode:{point:"Piste",linear:"Lineaarinen",areal:"Pinta-ala",strip:"Nauha"},MI_Instrument:{citation:"Laitteen viitetiedot",identifier:"Laitteen tunnus",sType:"Laitteen tyyppi",description:"Laitteen kuvaus",mountedOn:"Asennettu",mountedOnPlatformReference:"Asennettu (alustan tunnus)"},MI_Metadata:{acquisitionInformation:"Yrityskauppa"},MI_Objective:{caption:"Tavoite",identifier:"Tavoitteen tunnus",priority:"Kohteen prioriteetti",sFunction:"Tavoitteen toiminto",extent:"Laajuus",pass:"Alustan lupa",sensingInstrumentReference:"Kartoituslaite (laitteen tunnus)",objectiveOccurrence:"Tapahtumat",sections:{identification:"Tunnus",extent:"Laajuus",pass:"Läpäisy",sensingInstrument:"Kartoituslaite",objectiveOccurrence:"Tapahtumat"}},MI_ObjectiveTypeCode:{caption:"Tyyppi (tavoitteen keruutekniikka)",instantaneousCollection:"Välitön keruu",persistentView:"Pysyvä näkymä",survey:"Maanmittaus"},MI_Operation:{caption:"Operation",description:"Toiminnon kuvaus",citation:"Toiminnon viitetiedot",identifier:"Toiminnon tunnus",status:"Toiminnon tila",objectiveReference:"Liittyvä tavoite (tavoitteen tunnus)",planReference:"Liittyvä suunnitelma (suunnitelman tunnus)",significantEventReference:"Liittyvä tapahtuma (tapahtuman tunnus)",platformReference:"Liittyvä alusta (alustan tunnus)",sections:{identification:"Tunnus",related:"Liittyvä"}},MI_OperationTypeCode:{caption:"Toiminnon tyyppi",real:"Todellinen",simulated:"Simuloitu",synthesized:"Yhdistetty"},MI_Plan:{sType:"Näytteenottogeometria aineiston keruuta varten",status:"Suunnitelman tila",citation:"Viranomaisen pyytämän kokoelman viitetiedot",satisfiedRequirementReference:"Noudatettu vaatimus (vaatimuksen tunnus)",operationReference:"Liittyvä toiminto (toiminnon tunnus)"},MI_Platform:{citation:"Alustan viitetiedot",identifier:"Alustan tunnus",description:"Laitetta tukevan alusta kuvaus",sponsor:"Alustaa sponsoroiva organisaatio",instrument:"Laitteet on asennettu alustaan",instrumentReference:"Laitteen tunnus",sections:{identification:"Tunnus",sponsor:"Sponsori",instruments:"Laitteet"}},MI_PlatformPass:{identifier:"Alustan luvan tunnus",extent:"Alustan luvan laajuus",relatedEventReference:"Liittyvä tapahtuma (tapahtuman tunnus)"},MI_PriorityCode:{critical:"Kriittinen",highImportance:"Korkea tärkeysaste",mediumImportance:"Keskitasoinen tärkeysaste",lowImportance:"Alhainen tärkeysaste"},MI_RequestedDate:{requestedDateOfCollection:"Pyydetty keruupäivämäärä",latestAcceptableDate:"Viimeisin hyväksyttävä päivämäärä"},MI_Requirement:{caption:"Vaatimus",citation:"Vaatimusten ohjemateriaalin viitetiedot",identifier:"Vaatimuksen tunnus",requestor:"Vaatimuksen pyytäjä",recipient:"Vaatimusten tulosten vastaanottaja",priority:"Vaatimuksen prioriteetti",requestedDate:"Pyydetty päivämäärä",expiryDate:"Vanhentumispäivämäärä",satisifiedPlanReference:"Noudatettu suunnitelma (suunnitelman tunnus)",sections:{identification:"Tunnus",requestor:"Pyytäjä",recipient:"Vastaanottaja",priorityAndDates:"Prioriteetti ja päivämäärät",satisifiedPlan:"Noudatettu suunnitelma"}},MI_SequenceCode:{caption:"Järjestys",start:"Start",end:"End",instantaneous:"Välitön"},MI_TriggerCode:{caption:"Käynnistä",automatic:"Automaattinen",manual:"Manuaalinen",preProgrammed:"Esiohjelmoitu"},ObjectReference:{uuidref:"UUID-viite",xlinkref:"URL-viite"},RS_Identifier:{caption:"Tunnus ja koodiavaruus",code:"Koodi",codeSpace:"Koodiavaruus"},SV_CouplingType:{loose:"Löyhä",mixed:"Sekoitus",tight:"Tiivis"},SV_OperationMetadata:{operationName:"Toiminnon nimi",DCP:"DCP",connectPoint:"Yhteyspiste"},SV_ServiceIdentification:{serviceType:"Palvelutyyppi",couplingType:"Liitäntätyyppi",containsOperations:"Toiminnon metadata",operatesOn:"Toimintakohde"},TM_Primitive:{indeterminatePosition:"Määrittämätön sijainti",indeterminates:{before:"Ennen",after:"Jälkeen",now:"Nyt",unknown:"Tuntematon"}},gemet:{concept:{gemetConceptKeyword:"GEMET-käsitteen avainsana",tool:"Hae...",dialogTitle:"GEMET – käsitteen avainsana",searchLabel:"Etsi:",searchTip:"Hae GEMET"},theme:{tool:"Hae...",dialogTitle:"GEMET – Inspire-aineistoteema"},ioerror:"On ilmennyt virhe yhteydessä GEMET-palveluun: {url}",searching:"Haetaan GEMETiä...",noMatch:"Vastaavia tuloksia ei löytynyt.",languages:{bg:"bulgaria",cs:"tšekki",da:"tanska",nl:"hollanti",en:"englanti",et:"viro",fi:"suomi",fr:"ranska",de:"saksa",el:"kreikka",hu:"unkari",ga:"gaeli (iiri)",it:"italia",lv:"latvia",lt:"liettua",mt:"malta",pl:"Puola",pt:"portugali",ro:"romania",sk:"slovakki",sl:"sloveeni",es:"espanja",sv:"ruotsi"}}});