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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"इनमें से कोई नहीं",notComplete:"पूर्ण नहीं",other:"अन्य",present:"उपस्थित",unknown:"अज्ञात",unpublishedMaterial:"अप्रकाशित सामग्री"},hints:{integerGreaterThanOne:"(1 से बड़ा कोई पूर्णांक डालें)",integer0To100:"(0..100 कोई पूर्णांक डालें)"},citeinfo:{caption:"उद्धरण जानकारी",origin:"प्रवर्तक",pubdate:"प्रकाशन तिथि",pubtime:"प्रकाशन समय",title:"शीर्षक",edition:"संस्करण",geoform:{caption:"जियोस्पेसियल डेटा प्रस्तुतिकरण फॉर्म",atlas:"मानचित्रावली",audio:"ऑडियो",diagram:"आकृति",sDocument:"डॉक्यूमेंट",globe:"ग्लोब",map:"मानचित्र",model:"मॉडल",multiMediaPresentation:"मल्टीमीडिया प्रस्तुतिकरण",profile:"प्रोफ़ाइल",rasterDigitalData:"रास्टर डिजिटल डेटा",remoteSensingImage:"सुदूर संवेदन इमेज",section:"खंड",spreadsheet:"स्प्रेडशीट",tabularDigitalData:"सारणीबद्ध डिजिटल डेटा",vectorDigitalData:"वेक्टर डिजिटल डेटा",video:"वीडियो",view:"दृश्य"},serinfo:{caption:"क्रम जानकारी",sername:"क्रम नाम",issue:"इशू पहचान"},pubinfo:{caption:"प्रकाशन जानकारी",pubplace:"प्रकाशन स्थान",publish:"प्रकाशक"},othercit:"अन्य उद्धरण विवरण",onlink:"ऑनलाइन लिंकेज (URL)"},cntinfo:{caption:"संपर्क सूचना",section:{primary:"प्राथमिक",phoneAndEmail:"फ़ोन और ईमेल",hoursAndInstructions:"घंटे और निर्देश"},cntorgp:{caption:"संगठन के अनुसार",cntorg:"संगठन",cntper:"व्यक्ति"},cntperp:{caption:"व्यक्ति के अनुसार",cntper:"व्यक्ति",cntorg:"संगठन"},cntpos:"पद",cntaddr:{caption:"पता",addrtype:{caption:"पता प्रकार",mailing:"मेलिंग",physical:"भौतिक",mailingAndPhysical:"मेलिंग और भौतिक"},address:"पता",city:"शहर",state:"राज्य",postal:"डाक कोड",country:"देश"},cntvoice:"वॉयस",cnttdd:"TDD/TTY टेलीफोन (हियरिंग इम्पेयर्ड)",cntfax:"फैक्स",cntemail:"ईमेल पता",hours:"घंटे",cntinst:"निर्देश"},dataqual:{caption:"डेटा गुणवत्ता जानकारी",section:{attributeAccuracy:"विशेषता सटीकता",logicalConsistency:"तर्कसंगत संगति",completeness:"पूर्णता",positionalAccuracy:"स्थान-संबंधी सटीकता",lineage:"वंशावली",cloudCover:"मेघ व्याप्ति"},attracc:{caption:"विशेषता सटीकता",attraccr:"विशेषता सटीकता रिपोर्ट",qattracc:{caption:"मात्रात्मक विशेषता सटीकता मूल्यांकन",attraccv:"विशेषता सटीकता मान",attracce:"विशेषता सटीकता स्पष्टीकरण"}},logic:"तर्कसंगत संगति रिपोर्ट",complete:"पूर्णता रिपोर्ट",posacc:"स्थान-संबंधी सटीकता",horizpa:{caption:"क्षैतिज स्थान-संबंधी सटीकता",horizpar:"क्षैतिज स्थान-संबंधी सटीकता रिपोर्ट",qhorizpa:{caption:"मात्रात्मक क्षैतिज स्थान-संबंधी सटीकता मूल्यांकन",horizpav:"क्षैतिज स्थान-संबंधी सटीकता मान",horizpae:"क्षैतिज स्थान-संबंधी सटीकता स्पष्टीकरण"}},vertacc:{caption:"लंबवत स्थान-संबंधी सटीकता",vertaccr:"लंबवत स्थान-संबंधी सटीकता रिपोर्ट",qvertpa:{caption:"मात्रात्मक लंबवत स्थान-संबंधी सटीकता मूल्यांकन",vertaccv:"लंबवत स्थान-संबंधी सटीकता मान",vertacce:"लंबवत स्थान-संबंधी सटीकता स्पष्टीकरण"}},lineage:{caption:"वंशावली"},srcinfo:{caption:"स्रोत जानकारी",srccite:"स्रोत उद्धरण",srcscale:"स्रोत स्केल हर",typesrc:{caption:"स्रोत मीडिया का प्रकार",paper:"कागज़",stableBaseMaterial:"स्थिर-आधार सामग्री",microfiche:"माइक्रोफिश",microfilm:"माइक्रोफिल्म",audiocassette:"ऑडियो कैसेट",chart:"लेखा चित्र",filmstrip:"फिल्म स्ट्रिप",transparency:"पारदर्शिता",videocassette:"वीडियो कैसेट",videodisc:"वीडियो डिस्क",videotape:"वीडियो टेप",physicalModel:"भौतिक मॉडल",computerProgram:"कंप्यूटर प्रोग्राम",disc:"डिस्क",cartridgeTape:"कार्ट्रिज टेप",magneticTape:"मैग्नेटिक टेप",online:"ऑनलाइन",cdrom:"CD-ROM",electronicBulletinBoard:"इलेक्ट्रॉनिक बुलेटिन बोर्ड",electronicMailSystem:"इलेक्ट्रॉनिक मेल सिस्टम"},srctime:"सामग्री की स्रोत समय अवधि",srccurr:"स्रोत नवीनता संदर्भ",srccitea:"स्रोत उद्धरण संक्षिप्तीकरण",srccontr:"स्रोत योगदान"},procstep:{caption:"प्रक्रिया चरण",procdesc:"प्रक्रिया विवरण",srcused:"स्रोत प्रयुक्त उद्धरण संक्षिप्तीकरण",procdate:"प्रक्रिया तिथि",proctime:"प्रक्रिया समय",srcprod:"स्रोत उत्पादित उद्धरण संक्षिप्तीकरण",proccont:"प्रक्रिया संपर्क"},cloud:"मेघ व्याप्ति"},distinfo:{caption:"वितरण जानकारी",section:{distributor:"वितरक",description:"विवरण",orderProcess:"आदेश प्रक्रिया",prerequisites:"पूर्वापेक्षित",availability:"उपलब्धता"},distrib:"वितरक",resdesc:{caption:"संसाधन विवरण",liveData:"जीवंत डेटा और मानचित्र",downloadableData:"डाउनलोड होने योग्य डेटा",offlineData:"ऑफलाइन डेटा",staticMapImages:"स्थिर मानचित्र इमेज",sDocument:"अन्य डॉक्यूमेंट्स",application:"एप्लिकेशन",geographicService:"भूगोलिक सर्विस",clearingHouse:"क्लियरिंगहाउस",mapFiles:"मानचित्र फाइल्स",geographicActivies:"भूगोलिक गतिविधियाँ"},distliab:"वितरण दायित्व कथन",custom:"कस्टम आदेश प्रक्रिया",techpreq:"तकनीकी पूर्वापेक्षित",availabl:"उपलब्धता"},eainfo:{caption:"वस्तु और विशेषता जानकारी",overview:"सिंहावलोकन विवरण",eaover:"वस्तु और विशेषता सिंहावलोकन",eadetcit:"वस्तु और विशेषता विवरण उद्धरण"},idinfo:{caption:"पहचान जानकारी",section:{timeAndStatus:"समय और स्थिति",constraints:"बाध्यताएँ",contact:"संपर्क",additional:"अतिरिक्त"},citeinfo:"उद्धरण",descript:{caption:"विवरण",sAbstract:"सार",purpose:"उद्देश्य",supplinf:"पूरक जानकारी"},timeperd:{caption:"सामग्री की समय अवधि",current:{caption:"नवीनता संदर्भ",groundCondition:"भूमि स्थिति",publicationDate:"प्रकाशन तिथि"}},status:{caption:"स्थिति",progress:{caption:"प्रगति",complete:"पूर्ण हुआ",inWork:"काम में",planned:"नियोजित"},update:{caption:"देखरेख और अपडेट की आवृत्ति",continual:"लगातार",daily:"दैनिक",weekly:"साप्ताहिक",monthly:"मासिक",annually:"वार्षिक",unknown:"अज्ञात",asNeeded:"आवश्यकतानुसार",irregular:"अनियमित",nonePlanned:"कुछ भी नियोजित नहीं"}},spdom:{caption:"एक्सटेंट",bounding:{caption:"सीमक निर्देशांक",westbc:"पश्चिम सीमक देशांतर",eastbc:"पूर्व सीमक देशांतर",northbc:"उत्तर सीमक अक्षांश",southbc:"दक्षिण सीमक अक्षांश"}},keywords:{caption:"कीवर्ड्स",theme:"शैली",place:"स्थान",stratum:"परत",temporal:"अस्थायी",thesaursus:"संबंधित ज्ञानकोष",delimited:"कीवर्ड्स",themektIsoTopicCategory:"ISO विषय...",themektIsoTopicDialog:"ISO विषय",placektGnis:"भूगोलिक नाम जानकारी प्रणाली"},accconst:"पहुँच बाध्यताएँ",useconst:"उपयोग बाध्यताएँ",ptcontac:"संसाधन के लिए संपर्क बिंदु",browse:{caption:"ग्राफ़िक ब्राउज़ करें",browsen:"ग्राफ़िक URL ब्राउज़ करें",browsed:"ग्राफ़िक फाइल विवरण ब्राउज़ करें",browset:"ग्राफ़िक फाइल प्रकार ब्राउज़ करें"},datacred:"डेटा सेट क्रेडिट",secinfo:{caption:"सुरक्षा जानकारी",secsys:"सुरक्षा वर्गीकरण प्रणाली",secclass:{caption:"सुरक्षा वर्गीकरण",topSecret:"परम गुप्त",secret:"गुप्त",confidential:"गोपनीय",restricted:"प्रतिबंधित",unclassified:"अवर्गीकृत",sensitive:"संवेदनशील"},sechandl:"सुरक्षा व्यवहार विवरण"},sNative:"नेटिव डेटा सेट परिवेश",crossref:"क्रॉस-सन्दर्भ"},metadata:{idinfo:"पहचान",dataqual:"गुणवत्ता के लिए",spdoinfo:"स्पशियल डेटा व्यवस्था",spref:"स्थानिक संदर्भ",eainfo:"वस्तु और विशेषता",distinfo:"वितरण",metainfo:"मेटाडेटा"},metainfo:{caption:"मेटाडेटा जानकारी",section:{dates:"मेटाडेटा तिथियाँ",contact:"मेटाडेटा संपर्क",standard:"मेटाडेटा मानक",additional:"अतिरिक्त"},metd:"मेटाडेटा तिथि",metrd:"मेटाडेटा समीक्षा तिथि",metfrd:"मेटाडेटा भावी समीक्षा तिथि",metstdn:"मेटाडेटा मानक नाम",metstdv:"मेटाडेटा मानक संस्करण",metac:"मेटाडेटा एक्सेस बाध्यताएँ",metuc:"मेटाडेटा उपयोग बाध्यताएँ",metsi:{caption:"मेटाडेटा सुरक्षा जानकारी",metscs:"मेटाडेटा सुरक्षा वर्गीकरण प्रणाली",metsc:"मेटाडेटा सुरक्षा वर्गीकरण",metshd:"मेटाडेटा सुरक्षा व्यवहार विवरण"}},spref:{caption:"स्थानिक संदर्भ जानकारी",horizsys:{caption:"क्षैतिज निर्देशांक प्रणाली",geograph:{caption:"भूगोलिक",latres:"अक्षांश प्रस्ताव",longres:"देशांतर प्रस्ताव",geogunit:{caption:"भूगोलिक निर्देशांक इकाइयाँ",decimalDegrees:"दशमलव डिग्रीज़",decimalMinutes:"दशमलव मिनट्स",decimalSeconds:"दशमलव सेकंड्स",degreesAndDecimalMinutes:"डिग्रीज़ और दशमलव मिनट्स",degreesMinutesAndDecimalSeconds:"डिग्रीज़, मिनट्स, और दशमलव सेकंड्स",radians:"रेडियन",grads:"ग्रैड्स"}},planar:{caption:"समतली"},local:{caption:"स्थानीय",localdes:"स्थानीय विवरण",localgeo:"स्थानीय जियोरेफरेंस जानकारी"},geodetic:{caption:"जियोडेटिक मॉडल",horizdn:{caption:"क्षैतिज तिथि नाम",nad83:"1983 की उत्तर अमेरिका तिथि",nad27:"1927 की उत्तर अमेरिका तिथि"},ellips:{caption:"दीर्घ वृत्तज नाम",grs80:"जियोडेटिक संदर्भ प्रणाली 80",clarke1866:"क्लार्क 1866"},semiaxis:"अर्ध-प्रमुख अक्ष",denflat:"सपाट अनुपात का हर"}},vertdef:{caption:"लंबवत निर्देशांक प्रणाली",altsys:{caption:"ऊँचाई प्रणाली",altdatum:{caption:"ऊँचाई तिथि नाम",navd88:"1988 की उत्तर अमेरिकी लंबवत तिथि",ngvd29:"1929 की राष्ट्रीय जियोडेटिक लंबवत तिथि"},altres:"ऊँचाई प्रस्ताव",altunits:{caption:"ऊँचाई दूरी इकाइयाँ",meters:"मीटर",feet:"फीट"},altenc:{caption:"ऊँचाई एनकोड करने की विधि",explicit:"क्षैतिज निर्देशांकों के साथ शामिल स्पष्ट उन्नयन निर्देशांक",implicit:"अन्तर्निहित",attribute:"विशेषता मान"}},depthsys:{caption:"गहराई प्रणाली",depthdn:{caption:"गहराई निर्दिष्ट सिद्धांत नाम",option1:"स्थानीय सतह",option2:"चार्ट निर्दिष्ट सिद्धांत; ध्वन्यात्मक घटाव के लिए तिथि",option3:"निम्नतम खगोलीय ज्वार भाटा",option4:"उच्चतम खगोलीय ज्वार भाटा",option5:"माध्य निम्न जल",option6:"माध्य उच्च जल",option7:"माध्य समुद्र स्तर",option8:"भूमि सर्वेक्षण निर्दिष्ट सिद्धांत",option9:"माध्य निम्न जल स्र्पिंग्स",option10:"माध्य उच्च जल स्प्रिंग्स",option11:"माध्य निम्न जल मंद ज्वार",option12:"माध्य उच्च जल मंद ज्वार",option13:"माध्य निम्नतर निम्न जल",option14:"माध्य निम्नतर निम्न जल स्र्पिंग्स",option15:"माध्य उच्चतर उच्च जल",option16:"माध्य उच्चतर निम्न जल",option17:"माध्य निम्नतर उच्च जल",option18:"स्प्रिंग ज्वार",option19:"उष्ण कटिबंध निम्नतर निम्न जल",option20:"मंद ज्वार",option21:"उच्च जल",option22:"उच्चतर उच्च जल",option23:"निम्न जल",option24:"निम्न-जल तिथि",option25:"निम्नतम निम्न जल",option26:"निम्नतर निम्न जल",option27:"निम्नतम सामान्य निम्न जल",option28:"माध्य ज्वार स्तर",option29:"इंडियन स्प्रिंग निम्न जल",option30:"उच्च-जल पूर्ण और चार्ज",option31:"निम्न-जल पूर्ण और चार्ज",option32:"कोलंबिया नदी तिथि",option33:"गल्फ़ कोस्ट निम्न जल तिथि",option34:"विषुवत स्प्रिंग्स निम्न जल",option35:"लगभग निम्नतम खगोलीय ज्वार",option36:"कोई संशोधन नहीं"},depthres:"गहराई रेसोलुशन",depthdu:{caption:"गहराई दूरी इकाइयाँ",meters:"मीटर",feet:"फीट"},depthem:{caption:"गहराई एनकोड करने की विधि",explicit:"क्षैतिज निर्देशांकों के साथ शामिल स्पष्ट गहराई निर्देशांक",implicit:"अन्तर्निहित निर्देशांक",attribute:"विशेषता मान"}}}},timeinfo:{caption:"समय अवधि जानकारी",sngdate:"एकल तिथि",mdattim:"एकाधिक तिथियाँ",rngdates:"तिथि सीमा",caldate:"तिथि",time:"समय",begdate:"आरंभ तिथि",begtime:"आरंभ समय",enddate:"समाप्ति तिथि",endtime:"समाप्ति समय"}});