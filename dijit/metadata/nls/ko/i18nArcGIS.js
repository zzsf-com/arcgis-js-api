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

define({documentTypes:{arcgis:{caption:"ArcGIS 메타데이터",editorCaption:"메타데이터",description:""}},emptyOption:"비어 있음",conditionals:{ISO19139A1_ROW4:"메타데이터 계층 수준이 데이터셋인 경우 지리적 경계 상자 또는 지리적 설명이 필요합니다.",ISO19139A1_ROW6:"데이터셋 식별자 또는 데이터셋 이름이 필요합니다.",ISO19139A1_ROW7:"기타 제한 사항을 선택한 경우 다른 제약이 필요합니다.",ISO19139A1_ROW9:"범위가 데이터셋 또는 계열이 아닌 경우 수준 설명이 필요합니다.",ISO19139A1_ROW10_11_12:"범위가 데이터셋 또는 계열인 경우 설명, 프로세스 단계 또는 데이터 원본이 필요합니다.",ISO19139A1_ROW15:"체크 포인트 가용성을 선택한 경우 체크 포인트 설명이 필요합니다.",ISO19139A1_ROW18:"배포를 기록한 경우 형식 또는 디스트리뷰터/형식이 필요합니다.",INSPIRE_AccessLimitation:" 하나 이상의 법적 액세스 제약 코드 또는 보안 분류 코드가 필요합니다(INSPIRE).",INSPIRE_UseLimitation:" 하나 이상의 사용 제한이 필요합니다(INSPIRE).",INSPIRE_ConformanceResult:"도메인 일관성 보고서에는 적합성 결과가 필요합니다(INSPIRE).",INSPIRE_DomainConsistency:"도메인 일관성 보고서가 필요합니다(INSPIRE).",INSPIRE_LineageStatement:"범위가 데이터셋 또는 계열인 경우 리니지 설명이 필요합니다(INSPIRE).",FGDC_DescIfTemporal:"시간 범위에 대한 설명이 필요합니다(FGDC).",FGDC_Keywords:"주제, 태그 또는 테마 키워드가 필요합니다(FGDC).",FGDC_Reports:"완전성 누락 및 개념적 일관성 보고서가 필요합니다(FGDC).",FGDC_Temporal:"하나 이상의 시간 범위가 필요합니다(FGDC).",NAP_Contact:"주소/배달 지점, 전화/음성 번호 또는 온라인 리소스/URL이 필요합니다(NAP).",GEN_BoundingBox:"하나 이상의 지리적 경계 상자가 필요합니다.",GEN_ReportResult:"적합성 또는 정량적 결과가 필요합니다.",minLessThanMax:"최소값은 최대값보다 작아야 합니다."},hints:{integerGreaterThanZero:"(0보다 큰 정수 입력)",integerGreaterThanOne:"(1보다 큰 정수 입력)",integer0To100:"(0에서 100 사이의 정수 입력)",maxScale:"(0보다 큰 정수(예 50000) 입력)",minScale:"(0보다 큰 정수(예 150000000) 입력)",number0To100:"(0에서 100 사이의 숫자 입력)",number0To360:"(0에서 360 사이의 숫자 입력)",number90To90:"(-90에서 90 사이의 숫자 입력)",listOfDoubles:"(공백으로 구분된 숫자 목록 입력)"},htmlEditor:{button:"편집..."},sections:{overview:"오버뷰",esri:"Esri",resource:"리소스",reference:"참조",content:"콘텐츠",distribution:"분포",quality:"품질",eainfo:"필드",representation:"레프리젠테이션",metadata:"메타데이터"},metadataStyle:{caption:"ArcGIS 메타데이터 스타일",changeButton:"변경...",dialogTitle:"메타데이터 스타일 선택",updating:"문서 업데이트 중...","Item Description":"항목 설명","FGDC CSDGM Metadata":"FGDC CSDGM 메타데이터","ISO 19139 Metadata Implementation Specification":"ISO 19139 Metadata Implementation Specification","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 Metadata Implementation Specification GML3.2","INSPIRE Metadata Directive":"INSPIRE Metadata Directive","North American Profile of ISO19115 2003":"North American Profile of ISO19115 2003"},aggrInfo:{caption:"집약 정보",datasetHint:"데이터셋 식별자 또는 데이터셋 이름이 필요합니다.",aggrDSIdent:"데이터셋 식별자",aggrDSName:"데이터셋 이름"},appSchInfo:{caption:"응용프로그램 스키마",asName:"스키마 이름",asSchLang:"스키마 언어",asCstLang:"제약 언어",asAscii:"ASCII",asGraFile:"그래픽 파일",asGraFile_src:"그래픽 파일 소스",asSwDevFile:"소프트웨어 개발 파일",asSwDevFile_src:"소프트웨어 개발 파일 소스",asSwDevFiFt:"소프트웨어 개발 파일 형식"},citation:{caption:"인용",section:{titlesAndDates:"제목 및 날짜",links:"URL",identifiers:"식별자",presentation:"양식",other:"기타",edition:"에디션",series:"계열"},conditionalDate:{caption:"인용일",msg:"만든 날짜, 발행일 또는 개정일 중 하나가 필요합니다.",msg_nap:"인용 날짜가 필요합니다."},resTitle:"제목",resAltTitle:"대체 제목",collTitle:"집단 제목",date:{createDate:"생성일",pubDate:"발행일",reviseDate:"개정일",notavailDate:"사용할 수 없는 날짜",inforceDate:"유효일",adoptDate:"채택일",deprecDate:"사용 중단일",supersDate:"대체일"},isbn:"ISBN",issn:"ISSN",citId:{caption:"식별자",identCode:"코드",identAuth:"기관 인용"},resEd:"에디션",resEdDate:"에디션 날짜",datasetSeries:{seriesName:"이름",issId:"발행번호",artPage:"페이지"},otherCitDet:"기타 세부정보",contactCaption:"인용 연락처"},cntAddress:{caption:"주소",delPoint:"배달 지점",city:"시",adminArea:"행정 구역",postCode:"우편 번호",country:"국가",eMailAdd:"이메일",addressType:{caption:"주소 유형",postal:"우편 번호",physical:"실제",both:"양쪽 모두"}},cntOnlineRes:{caption:"온라인 리소스",linkage:"URL",protocol:"프로토콜",appProfile:"응용프로그램 프로필",orName:"이름",orDesc:"설명"},cntPhone:{caption:"전화 번호",voiceNum:"음성",faxNum:"팩스",tddtty:"TDD/TTY?"},codeRef:{caption:"식별자",identCode:"코드",idCodeSpace:"코드 공간",idVersion:"버전",identAuth:"기관 인용"},constraints:{caption:"제약",useLimit:"사용 제한",general:{caption:"일반"},legal:{caption:"법적 고지",accessConsts:"액세스 제약",useConsts:"사용 제약 조건",othConsts:"다른 제약"},security:{caption:"보안",classSys:"분류 시스템",userNote:"사용자 노트",handDesc:"처리 설명"}},contInfo:{caption:"콘텐츠 정보",section:{CovDesc:"커버리지 설명",ImgDesc:"이미지 설명",FetCatDesc:"피처 카탈로그"},attDesc:"속성 설명",covDim:{caption:"범위 또는 밴드",seqID:"시퀀스 식별자",seqIDType:"시퀀스 식별자 유형",dimDescrp:"설명자"},RangeDim:{caption:"범위 치수"},Band:{caption:"밴드",minVal:"최소 값",maxVal:"최대 값",valUnit:"값 단위",pkResp:"피크 응답",bitsPerVal:"값당 비트",toneGrad:"톤 그라데이션",sclFac:"축척 계수",offset:"오프셋"},CovDesc:{caption:"커버리지 설명",section:{description:"설명",rangesAndBands:"범위 및 밴드"}},ImgDesc:{caption:"이미지 설명",section:{description:"설명",rangesAndBands:"범위 및 밴드"},illElevAng:"조명 고도 각도",illAziAng:"조명 방위 각도",cloudCovPer:"운량 비율",cmpGenQuan:"압축 품질",trianInd:"삼각측정 표시기?",radCalDatAv:"방사 교정 데이터 가용성?",camCalInAv:"카메라 보정 정보 가용성?",filmDistInAv:"필름 왜곡 정보 가용성?",lensDistInAv:"렌즈 왜곡 정보 가용성?",imagQuCode:"품질 코드",prcTypCde:"프로세싱 단계 코드"},FetCatDesc:{caption:"피처 카탈로그",section:{description:"설명",featureTypes:"피처 유형",citation:"인용"},compCode:"ISO 19110 준수?",incWithDS:"Included With Dataset?",catCitation:"피처 카탈로그 인용",catFetTyps:{caption:"피처 유형",genericName:"이름",codeSpace:"코드 공간"}}},contact:{caption:"연락처",section:{name:"연락처 이름",info:"연락처 정보",hoursAndInstructions:"시간 및 지침"},conditionalName:{caption:"연락처 이름",msg:"개인 이름, 기관 이름 또는 위치 이름 중 하나가 필요합니다.",msg_fgdc:"개인 이름 또는 기관 이름 중 하나가 필요합니다."},rpIndName:"개인 이름",rpOrgName:"기관 이름",rpPosName:"위치 이름",rpCntInfo:"연락처 정보",cntHours:"서비스 시간",cntInstr:"연락 방법"},distInfo:{caption:"배포 정보",section:{format:"형식",distributor:"디스트리뷰터",transfer:"전송 옵션"},distFormat:{caption:"배포 형식",formatName:"형식 이름",formatVer:"형식 버전",formatAmdNum:"개정 번호",formatSpec:"사양",fileDecmTech:"압축풀기 기술",formatInfo:"정보 콘텐츠"},distributor:{caption:"디스트리뷰터"},distTranOps:{caption:"디지털 전송 옵션",section:{unitsAndSize:"단위"},unitsODist:"배포 단위",transSize:"전송 크기",offLineMed:{caption:"오프라인 매체",medDensity:"밀도",medDenUnits:"밀도 단위",medVol:"볼륨",medNote:"매체 참고"}},distorOrdPrc:{caption:"주문 프로세스",resFees:"수수료",planAvDtTm:"사용 가능일",planAvTmPd:{caption:"사용 가능한 기간",tmBegin:"시작 날짜/시간",tmEnd:"종료 날짜/시간"},ordInstr:"주문 방법",ordTurn:"소요 시간"}},dqInfo:{caption:"데이터 품질",section:{scope:"범위",report:"보고서",lineage:"리니지"},dqScope:{section:{level:"수준",extent:"범위"},scpLvl:"범위 수준",scpLvlDesc:"수준 설명",scpExt:"범위"},report:{section:{measure:"측정",evaluation:"평가",result:"결과",conformance:"적합성"},measDesc:"측정 설명",measName:"측정 이름",measDateTm:"측정 날짜",measId:"측정 식별자",evalMethDesc:"평가 방법",evalProc:"절차 인용",ConResult:{caption:"적합성 결과",conExpl:"설명",conSpec:"사양",conPass:{caption:"도",_1:"적합",_0:"부적합"}},QuanResult:{caption:"정량적 결과",quanVal:"값",quanValType:"값 유형",quanValUnit:"값 단위",errStat:"오류 통계"}},dataLineage:{section:{statement:"설명",dataSource:"데이터 원본",prcStep:"프로세스 단계"},statement:"리니지 설명",dataSource:{caption:"데이터 원본",section:{description:"설명",srcRefSys:"기준 체계",srcExt:"범위",srcCitatn:"인용"},srcDesc:"원본 설명",srcScale:{rfDenom:"축척 분모"},srcRefSys:"원본 기준 체계",srcExt:"원본 범위",srcCitatn:"원본 인용"},prcStep:{caption:"프로세스 단계",section:{description:"설명",stepProc:"프로세서",stepSrc:"데이터 원본"},stepDesc:"프로세스 설명",stepRat:"이유",stepDateTm:"프로세스 단계 날짜",stepProc:"프로세서",stepSrc:"데이터 원본"}}},eainfo:{caption:"엔터티 및 속성 정보",section:{detailed:"세부정보",overview:"오버뷰"},detailed:{caption:"엔터티 및 속성 세부정보",section:{enttyp:"엔터티",attr:"속성"},enttyp:{caption:"엔터티 유형",enttypl:"레이블",enttypt:"개체",enttypc:"개수",enttypd:"정의",enttypds:"정의 원본"},attr:{caption:"속성",section:{description:"설명",value:"값",domain:"도메인"},attrlabl:"레이블",attalias:"별칭",attrdef:"정의",attrdefs:"정의 원본",attrtype:"유형",attwidth:"너비",atprecis:"정밀도",attscale:"축척",atindex:"색인됨",attrvai:{attrva:"값 설명",attrvae:"값 정확도"},attrmfrq:"값 측정 빈도",begdatea:"값의 시작 날짜",enddatea:"값의 종료 날짜",attrdomv:{caption:"도메인",edom:{caption:"열거됨",edomv:"값",edomvd:"정의",edomvds:"정의 원본"},rdom:{caption:"범위",rdommin:"최소 값",rdommax:"최대 값",rdommean:"평균",rdomstdv:"표준 편차",attrunit:"단위",attrmres:"측정 해상도"},codesetd:{caption:"코드셋",codesetn:"이름",codesets:"소스"},udom:{caption:"레프리젠테이션 안 됨"}}}},overview:{caption:"오버뷰",eaover:"요약",eadetcit:"인용"}},extent:{caption:"범위",section:{description:"설명",geographic:"지리",temporal:"시간",vertical:"수직"},exDesc:"범위 설명",geoEle:{caption:"지리적 범위",GeoBndBox:{caption:"경계 상자",esriExtentType:"검색 범위?",exTypeCode:"리소스를 포함하는 범위?",westBL:"서쪽 경계 경도",eastBL:"동쪽 경계 경도",southBL:"남쪽 경계 경도",northBL:"북쪽 경계 경도"},GeoDesc:{caption:"지리적 설명",exTypeCode:"리소스를 포함하는 설명?",identCode:"코드"}},tempEle:{caption:"시간 범위",TM_Period:"기간",TM_Instant:"타임 인스턴트",tmPosition:"날짜",tmBegin:"시작일",tmEnd:"종료일"},vertEle:{caption:"수직 범위",vertMinVal:"최소 값",vertMaxVal:"최대 값"}},graphOver:{caption:"그래픽 찾아보기",bgFileName:"그래픽 URL 찾아보기",bgFileDesc:"그래픽 설명 찾아보기",bgFileType:"그래픽 파일 유형 찾아보기"},keywords:{caption:"키워드",section:{topicCategory:"주제",searchKeys:"태그",themeKeys:"테마",placeKeys:"장소",tempKeys:"시간",discKeys:"분야",stratKeys:"계층",productKeys:"제품",subTopicCatKeys:"하위 주제",otherKeys:"기타"},delimited:"키워드",searchKeys:"태그",themeKeys:"테마 키워드",placeKeys:"장소 키워드",tempKeys:"시간 키워드",discKeys:"분야 키워드",stratKeys:"계층 키워드",productKeys:"제품 키워드",subTopicCatKeys:"하위 주제 키워드",otherKeys:"다른 키워드",thesaName:"동의어 인용",thesaLang:"동의어 언어"},locales:{caption:"로캘",locale:"로캘",resTitle:"제목",idAbs:"요약"},maintenance:{caption:"유지관리",section:{frequency:"빈도",scope:"범위",note:"메모"},usrDefFreq:"사용자 정의 빈도",dateNext:"다음 업데이트",maintScp:"범위 업데이트",upScpDesc:{caption:"범위 설명",attribSet:"속성",attribIntSet:"속성 인스턴스",featSet:"특징",featIntSet:"피처 인스턴스",datasetSet:"데이터셋",other:"다른 인스턴스"},maintNote:"유지관리 노트",maintCont:"유지관리 연락처"},metadata:{section:{profile:"프로필",details:"범위"},mdFileID:"파일 식별자",mdParentID:"상위(Parent) 식별자",datasetURI:"데이터셋 URI",dataSetFn:"데이터셋 함수",mdDateSt:"메타데이터 날짜",mdLang:"메타데이터 언어",mdChar:"문자 집합",mdHrLv:"계층 수준",mdHrLvName:"계층 수준 이름",mdContact:"메타데이터 연락처",mdMaint:"메타데이터 유지관리",mdConst:"메타데이터 제약"},porCatInfo:{caption:"묘사 인용"},refSysInfo:{caption:"공간 기준 체계"},resource:{section:{citation:"인용",details:"세부정보",description:"설명",keywords:"키워드",status:"상태",resolution:"해상도",representation:"레프리젠테이션",browse:"그래픽 찾아보기",format:"형식",usage:"사용",aggregateInfo:"집합",additional:"추가"},idAbs:"설명(개요)",idPurp:"요약(목적)",suppInfo:"추가 정보",idCredit:"크레딧",envirDesc:"처리 환경",dataLang:"리소스 언어",dataExt:"리소스 범위",idPoC:"연락 담당자",resMaint:"리소스 유지관리",resConst:"리소스 제약",dsFormat:"리소스 형식",dataScale:{caption:"데이터 척도",equScale:"축척 해상도",scaleDist:"거리 해상도",scaleDist_value:"거리"},idSpecUse:{caption:"리소스 사용",specUsage:"특정 사용",usageDate:"사용일",usrDetLim:"제한 사항",usrCntInfo:"사용 연락처"}},service:{caption:"서비스",svType:"서비스 유형",svType_Name:"이름",svAccProps:"접근 등록정보",svCouplRes:{caption:"결합된 리소스",svOpName:"작업 이름",svResCitId:"리소스 식별자"},svCoupleType:"결합(Coupling) 유형"},scaleRange:{caption:"축척 범위",maxScale:"최대 축척",minScale:"최소 축척"},spatRepInfo:{caption:"공간 레프리젠테이션",section:{dimension:"디멘전",parameters:"매개변수"},numDims:"디멘전의 수",tranParaAv:"변환 매개변수 가용성?",axisDimension:{caption:"디멘전",dimSize:"크기",dimResol:{caption:"해상도",_value:"해상도 값",uom:"해상도 단위"}},VectSpatRep:{caption:"벡터",geometObjs:"지오메트릭 개체",geoObjCnt:"개체 수"},GridSpatRep:{caption:"그리드"},Georect:{caption:"Georectified",section:{centerPoint:"중심점",cornerPts:"모서리 지점"},chkPtAv:"체크 포인트 가용성?",chkPtDesc:"체크 포인트 설명",ptInPixel:"가리키고 있는 픽셀",transDimDesc:"변환 치수 설명",transDimMap:"변환 치수 매핑",cornerPts:{caption:"모서리 지점",pos:"위치",gmlDesc:"설명",gmlDescRef:"참조",gmlIdent:"식별자",codeSpace:"식별자 코드 공간"}},Georef:{caption:"지리보정 가능",ctrlPtAv:"컨트롤 포인트 가용성?",orieParaAv:"방향 매개변수 가용성?",orieParaDs:"방향 매개변수 설명",georefPars:"지리보정된 매개변수",paraCit:"매개변수 인용"},Indref:{caption:"간접"}},booleanOptions:{_false:"아니요",_true:"예"},codelist:{CountryCode:"국가",LanguageCode:"언어",MonetaryUnits:"통화 단위",MonetaryUnits_empty:"국제 통화 없음",PresentationForm:"FGDC 지리 공간 데이터 표현 형식",CI_PresentationFormCode:"표현 형식",CI_RoleCode:"역할",CI_OnLineFunctionCode:"함수",IMS_ContentType:"콘텐츠 유형",DQ_ElementDimension:"디멘전",DQ_ElementType:"보고서 유형",DQ_EvaluationMethodTypeCode:"평가 유형",DS_AssociationTypeCode:"연결 유형",DS_InitiativeTypeCode:"이니셔티브 유형",LI_SourceType:"원본 유형",MD_CellGeometryCode:"셀 지오메트리",MD_CharacterSetCode:"문자 집합",MD_ClassificationCode:"분류",MD_CoverageContentTypeCode:"콘텐츠 유형",MD_DimensionNameTypeCode:"치수 유형",MD_GeometricObjectTypeCode:"지오메트릭 개체 유형",MD_ImagingConditionCode:"이미지 상태",MD_MaintenanceFrequenceCode:"업데이트 빈도",MD_MediumFormatCode:"형식 코드",MD_MediumNameCode:"매체 이름",MD_PixelOrientationCode:"픽셀 방향",MD_ProgressCode:"상태",MD_RestrictionCode:"제한 코드",MD_ScopeCode:"범위",MD_SpatialRepresentationTypeCode:"공간 레프리젠테이션 유형",MD_TopicCategoryCode:"주제 범주",MD_TopologyLevelCode:"토폴로지 수준",RS_Dimension:"디멘전",SV_CouplingType:"결합(Coupling) 유형",UCUM:"단위",UCUM_Length:"거리 단위"}});