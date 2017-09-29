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

define({general:{cancel:"Cancelar",close:"Fechar",none:"Nenhum",ok:"OK",other:"Outro",stamp:"Data",now:"Agora",choose:"Selecione Um:"},editor:{noMetadata:"Não existem metadados para este item.",xmlViewOnly:"O tipo de metadados associados com este item não é suportado pelo editor. Metadados devem estar em formato ArcGIS.",editorDialog:{caption:"Metadados",captionPattern:"Metadados para {title}"},primaryToolbar:{view:"Visualização",viewXml:"Visualizar XML",edit:"Editar",initializing:"Carregando...",startingEditor:"A iniciar editor...",loadingDocument:"A carregar documento...",updatingDocument:"A atualizar documento...",generatingView:"A gerar visualização...",errors:{errorGeneratingView:"Ocorreu um erro ao gerar a visualização.",errorLoadingDocument:"Ocorreu um erro ao carregar o ficheiro."}},changesNotSaved:{prompt:"O seu documento possui alterações que não foram guardadas.",dialogTitle:"Fechar Editor de Metadados",closeButton:"Fechar"},download:{caption:"Descarregar",dialogTitle:"Descarregar",prompt:"Clique aqui para descarregar o seu ficheiro."},load:{caption:"Abrir",dialogTitle:"Abrir",typeTab:"Novo Documento",fileTab:"Abrir Ficheiro",templateTab:"Um Modelo",itemTab:"O Seu item",filePrompt:"Seleccionar um ficheiro local Metadados XML ArcGIS.  Metadados devem estar em formato ArcGIS.",templatePrompt:"Criar Metadados",pullItem:"Preencher metadados com os detalhes do item.",importWarning:"O ficheiro seleccionado não aparece em formato ArcGIS. Metadados carregados devem ter formato ArcGIS.",loading:"Carregando...",noMetadata:"Metadados podem ser criados para este item escolhendo uma das seguintes opções.",unrecognizedMetadata:"Este tipo de metadados associado com este item não é suportado pelo editor. Metadados suportados podem ser criados escolhendo uma das seguintes opções.",errorLoading:"Ocorreu um erro durante o carregamento.",warnings:{badFile:"O ficheiro selecionado não pôde ser carregado.",notAnXml:"O ficheiro selecionado não é um ficheiro XML.",notSupported:"Este tipo de ficheiro não é suportado."}},save:{caption:"Guardar",dialogTitle:"Guardar Metadados",working:"A Guardar Metadados...",errorSaving:"Ocorreu um erro, os seus metadados não foram guardados.",saveDialog:{pushCaption:"Aplicar alterações ao seu item."}},saveAndClose:{caption:"Guardar e Fechar"},saveDraft:{caption:"Guardar Cópia Local",dialogTitle:"Guardar Cópia Local"},validate:{caption:"Validar",dialogTitle:"Validação",docIsValid:"O seu documento é válido."},del:{caption:"Eliminar",dialogTitle:"Eliminar Metadados",prompt:"Tem a certeza de que pretende eliminar estes metadados?",working:"A Eliminar Metadados...",errorDeleting:"Ocorreu um erro, os seus metadados não foram eliminados."},transform:{caption:"Transformar",dialogTitle:"Transformar Para",prompt:"",working:"A Transformar...",errorTransforming:"Ocorreu um erro ao transformar o seu documento."},errorDialog:{dialogTitle:"Ocorreu um erro"}},arcgis:{portal:{metadataButton:{caption:"Metadados"}}},calendar:{button:"Calendário...",title:"Calendário"},geoExtent:{button:"Definir Extensão Geográfica...",title:"Extensão Geográfica",navigate:"Navegar",draw:"Desenhar um Rectângulo",drawHint:"Pressione para começar e solte para finalizar."},hints:{date:"(yyyy ou yyyy-mm ou yyyy-mm-dd)",dateTime:"(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy ou yyyy-mm ou yyyy-mm-dd ou yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(utilize vírgula ou uma nova linha para separar)",fgdcDate:"(yyyy ou yyyy-mm ou yyyy-mm-dd)",fgdcTime:"(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",integer:"(introduza um valor inteiro)",latitude:"(graus decimais)",longitude:"(graus decimais)",number:"(introduza um número)",numberGreaterThanZero:"(introduza um número > 0)"},isoTopicCategoryCode:{caption:"Categoria de Tópicos",boundaries:"Limites Administrativos e Políticos",farming:"Agricultura e Pecuária",climatologyMeteorologyAtmosphere:"Atmosfera e Clima",biota:"Biologia e Ecologia",economy:"Negócios e Economia",planningCadastre:"Cadastro",society:"Cultura, Sociedade e Demografia",elevation:"Elevação e Produtos Derivados",environment:"Ambiente e Conservação",structure:"Instalações e Estruturas",geoscientificInformation:"Geologia e Geofísica",health:"Saúde e Doenças",imageryBaseMapsEarthCover:"Imagem e Mapas Base",inlandWaters:"Recursos Hídricos do Interior",location:"Localizações e Redes Geodésicas",intelligenceMilitary:"Militar",oceans:"Oceanos e Estuários",transportation:"Redes de Transporte",utilitiesCommunication:"Utilities e Comunicações"},multiplicity:{moveElementDown:"Mover secção para baixo",moveElementUp:"Mover secção para cima",removeElement:"Remover Secção",repeatElement:"Repetir Secção"},optionalNode:{switchTip:"Incluir ou excluir esta secção."},serviceTypes:{featureService:"Serviço de Elementos",mapService:"Serviço de Mapas",imageService:"Serviço de Imagem",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"OK",empty:"É necessário um valor.",date:"O valor deve ser uma data.",integer:"O valor deve ser inteiro.",number:"O valor deve ser um número.",other:"O valor não é válido."},validationPane:{clearMessages:"Limpar Mensagens",prompt:"(clicar em cada mensagem em baixo e forneça a informação requerida no campo especificado)"}});