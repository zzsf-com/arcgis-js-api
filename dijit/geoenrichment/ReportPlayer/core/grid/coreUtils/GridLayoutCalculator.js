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

define(["dojo/_base/lang","dojo/dom-style","./gridLayoutCalcUtils/GridLayoutCalculatorQueryUtil","./gridLayoutCalcUtils/GridElementBoxCalculator","./gridLayoutCalcUtils/GridCellNodePlacer","./gridLayoutCalcUtils/rows/GridLayoutRowsCalculator","./gridLayoutCalcUtils/columns/GridLayoutColumnsCalculator","./gridLayoutCalcUtils/GridLayoutSnapper","../../supportClasses/TableUtil"],function(t,e,a,l,o,i,r,u,d){var n={};return l.calculator=n,n.markAsDirty=a.markAsDirty,n.fieldToColumn=a.fieldToColumn,n.dataIdToData=a.dataIdToData,n.getSpannedColumns=a.getSpannedColumns,n.recalcRows=i.recalcRows,n.recalcColumns=r.recalcColumns,n.recalcColumnsTableJson=r.recalcColumnsTableJson,n.recalcRowsToFitHeight=i.recalcRowsToFitHeight,n.adjustColumnWidth=r.adjustColumnWidth,n.getAffectedCellsForColumnAdjust=r.getAffectedCells,n.adjustRowHeight=i.adjustRowHeight,n.getAffectedCellsForRowAdjust=i.getAffectedCells,n.recalcGridWidth=r.recalcGridWidth,n.calcFieldWidth=r.calcFieldWidth,n.getFieldWidth=r.getFieldWidth,n.setFieldWidth=r.setFieldWidth,n.calcDataHeight=i.calcDataHeight,n.getDataHeight=i.getDataHeight,n.setDataHeight=i.setDataHeight,n.autoSnapLayout=u.autoSnapLayout,n.positionCells=o.positionCells,n.calcFeatureCount=function(t,e,a){return(t-e)/a},n.calcRingIndexForCell=function(t){var e=t.parentGrid;if(!e)return-1;if(e.getNumDynamicRows())return void 0!==t.gridData.previewFeatureIndex?t.gridData.previewFeatureIndex:t.gridData.index-e.getNumFixedRows();var a=e.getNumFixedColumns();return t.column.index<a?-1:Math.floor((t.column.index-a)/e.getNumDynamicColumns())},n.trimColumnsForNumberOfFeatures=function(t){for(var e=t.viewModel.dynamicReportInfo.fieldData.featureData.length,a=n.recalcGridWidth(t),l=0,o=0;o<t.getNumFixedColumns();o++)l+=t.columns[o].style.width;var i=a-l,r=n.calcFeatureCount(t.columns.length,t.getNumFixedColumns(),t.getNumDynamicColumns()),u=r-e;if(!(0>u)){for(var d=t.columns.slice(),o=d.length=t.getNumFixedColumns(),c=[],s=0;;){if(!t.columns[o])break;for(var m=0;e>m;m++){var g=t.columns[o++];s+=g.style.width,c.push(g)}o+=u}var C=i/s;c.forEach(function(t){t.style.width*=C}),t.columns=d.concat(c)}},n.adjustRowsForNumberOfFeatures=function(e){var a=e.viewModel.dynamicReportInfo.fieldData.featureData.length;if(!(1>=a)){var l=e.store.data[e.getNumFixedRows()];l.previewFeatureIndex=0;for(var o=1;a>o;o++){var i=t.clone(l);i.previewFeatureIndex=o,e.store.data.push(i)}d.applyDefaultStyling({data:{data:e.store.data,columns:e.columns}})}},n});