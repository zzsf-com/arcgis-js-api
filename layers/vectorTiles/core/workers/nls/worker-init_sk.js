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

define("esri/layers/vectorTiles/core/workers/nls/worker-init_sk",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"∞",superscriptingExponent:"×",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 bil'.'","currencySpacing-afterCurrency-insertBetween":" ",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",perMille:"‰",group:" ",percentFormat:"#,##0 %","decimalFormat-long":"000 biliónov",decimalFormat:"#,##0.###",decimal:",","currencySpacing-beforeCurrency-insertBetween":" ",exponential:"E",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E h:mm a","days-standAlone-short":["Ne","Po","Ut","St","Št","Pi","So"],"months-format-narrow":["j","f","m","a","m","j","j","a","s","o","n","d"],"field-second-relative+0":"teraz","quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"deň v týždni","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yMEd":"E d. M. y","field-wed-relative+0":"túto stredu","field-wed-relative+1":"budúcu stredu","dateFormatItem-GyMMMEd":"E, d. MMMM y G","dateFormatItem-MMMEd":"E, d. M.",eraNarrow:["pred Kr.","po Kr."],"field-tue-relative+-1":"minulý utorok","days-format-short":["Ne","Po","Ut","St","Št","Pi","So"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d. MMMM y","field-fri-relative+-1":"minulý piatok","field-wed-relative+-1":"minulú stredu","months-format-wide":["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"],"dateTimeFormat-medium":"{1}, {0}","dayPeriods-format-wide-pm":"odpoludnia","dateFormat-full":"EEEE, d. MMMM y","field-thu-relative+-1":"minulý štvrtok","dateFormatItem-Md":"d. M.","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"noon","dateFormatItem-yMd":"d. M. y","field-era":"letopočet","dateFormatItem-yM":"M/y","months-standAlone-wide":["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"],"timeFormat-short":"H:mm","quarters-format-wide":["1. štvrťrok","2. štvrťrok","3. štvrťrok","4. štvrťrok"],"dateFormatItem-yQQQQ":"QQQQ y","timeFormat-long":"H:mm:ss z","field-year":"rok","dateFormatItem-yMMM":"LLLL y","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"hodina","months-format-abbr":["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],"field-sat-relative+0":"túto sobotu","field-sat-relative+1":"budúcu sobotu","timeFormat-full":"H:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"dnes","field-thu-relative+0":"tento štvrtok","field-day-relative+1":"zajtra","field-thu-relative+1":"budúci štvrtok","dateFormatItem-GyMMMd":"d. M. y G","dateFormatItem-H":"H","months-standAlone-abbr":["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],"quarters-format-abbr":["Q1","Q2","Q3","Q4"],"quarters-standAlone-wide":["1. štvrťrok","2. štvrťrok","3. štvrťrok","4. štvrťrok"],"dateFormatItem-Gy":"y G","dateFormatItem-M":"L.","days-standAlone-wide":["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"H:mm:ss","field-sun-relative+0":"túto nedeľu","dateFormatItem-Hm":"H:mm","field-sun-relative+1":"budúcu nedeľu","quarters-standAlone-abbr":["Q1","Q2","Q3","Q4"],eraAbbr:["pred Kr.","po Kr."],"field-minute":"minúta","field-dayperiod":"časť dňa","days-standAlone-abbr":["ne","po","ut","st","št","pi","so"],"dateFormatItem-d":"d.","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"včera","dateTimeFormat-long":"{1}, {0}","dayPeriods-format-narrow-am":"a","dateFormatItem-h":"h a","dateFormatItem-MMMd":"d. M","dateFormatItem-MEd":"E, d. M.","dateTimeFormat-full":"{1}, {0}","field-fri-relative+0":"tento piatok","field-fri-relative+1":"budúci piatok","field-day":"deň","days-format-wide":["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],"field-zone":"časové pásmo","months-standAlone-narrow":["j","f","m","a","m","j","j","a","s","o","n","d"],"dateFormatItem-y":"y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"minulý rok","field-month-relative+-1":"minulý mesiac","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["ne","po","ut","st","št","pi","so"],eraNames:["pred Kristom","po Kristovi"],"dateFormatItem-yMMMd":"d. M. y","days-format-narrow":["N","P","U","S","Š","P","S"],"field-month":"mesiac","days-standAlone-narrow":["N","P","U","S","Š","P","S"],"dateFormatItem-MMM":"LLL","field-tue-relative+0":"tento utorok","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"budúci utorok","dayPeriods-format-wide-am":"dopoludnia","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E HH:mm","field-mon-relative+0":"tento pondelok","field-mon-relative+1":"budúci pondelok","dateFormat-short":"dd.MM.yy","dateFormatItem-EHms":"E HH:mm:ss","dateFormatItem-Ehms":"E h:mm:ss a","dayPeriods-format-narrow-noon":"n","field-second":"sekunda","field-sat-relative+-1":"minulú sobotu","dateFormatItem-yMMMEd":"E d. M. y","field-sun-relative+-1":"minulú nedeľu","field-month-relative+0":"tento mesiac","field-month-relative+1":"budúci mesiac","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"E d.","field-week":"týždeň","dateFormat-medium":"d. M. y","field-week-relative+-1":"minulý týždeň","field-year-relative+0":"tento rok","field-year-relative+1":"budúci rok","dayPeriods-format-narrow-pm":"p","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"H:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-GyMMM":"LLLL y G","field-mon-relative+-1":"minulý pondelok","field-week-relative+0":"tento týždeň","field-week-relative+1":"budúci týždeň","dateFormatItem-yMMMMd":"d. MMMM y","field-day-relative+2":"pozajtra","dateFormatItem-MMMMd":"d. MMMM","dateFormatItem-GyMMMMd":"d. MMMM y G","field-day-relative+-2":"predvčerom","dateFormatItem-yMMMM":"LLLL y","dateFormatItem-MMMMEd":"E, d. MMMM","dateFormatItem-mmss":"mm:ss",_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}}});