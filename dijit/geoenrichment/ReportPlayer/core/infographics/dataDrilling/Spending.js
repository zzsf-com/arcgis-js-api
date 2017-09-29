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

define(["./ChartBuilder"],function(a){var l={};return l.totalExpenditures={name:"Total Expendituers",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Total Expendituers",null,"",[{label:"Annual Budget Exp",calculator:"n/SpendingTotal.X1001_X"},{label:"Retail Goods",calculator:"n/SpendingTotal.X15001_X"}])}},l.apparelMenVsWomen={name:"Spending on Apparel Men vs Women",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createDonutChart("Apparel Men vs Women",[{label:"Men`s Apparel",calculator:"n/clothing.X5002_X"},{label:"Women`s Apparel",calculator:"n/clothing.X5016_X"}])}},l.apparelMen={name:"Spending on Men's Apparel",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Men's Apparel",null,"",[{label:"Men`s Suits",calculator:"n/clothing.X5003_X"},{label:"Men`s Sport Coats",calculator:"n/clothing.X5004_X"},{label:"Men`s Coats & Jackets",calculator:"n/clothing.X5005_X"},{label:"Men`s Underwear",calculator:"n/clothing.X5006_X"},{label:"Men`s Hosiery",calculator:"n/clothing.X5007_X"},{label:"Men`s Accessories",calculator:"n/clothing.X5008_X"},{label:"Men`s Active Sportswear",calculator:"n/clothing.X5010_X"},{label:"Men`s Pants & Shorts",calculator:"n/clothing.X5012_X"},{label:"Men`s Sleepwear",calculator:"n/clothing.X5013_X"},{label:"Men`s Uniforms",calculator:"n/clothing.X5014_X"},{label:"Men`s Costumes",calculator:"n/clothing.X5015_X"}],{sorting:"Descending"})}},l.apparelWomen={name:"Spending on Women's Apparel",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Women's Apparel",null,"",[{label:"Women`s Dresses",calculator:"n/clothing.X5017_X"},{label:"Women`s Coats & Jackets",calculator:"n/clothing.X5018_X"},{label:"Women`s Sport Coat/Tlrd Jacket",calculator:"n/clothing.X5019_X"},{label:"Women`s Skirts",calculator:"n/clothing.X5022_X"},{label:"Women`s Pants & Shorts",calculator:"n/clothing.X5023_X"},{label:"Women`s Active Sportswear",calculator:"n/clothing.X5024_X"},{label:"Women`s Sleepwear",calculator:"n/clothing.X5025_X"},{label:"Women`s Undergarments",calculator:"n/clothing.X5026_X"},{label:"Women`s Hosiery",calculator:"n/clothing.X5027_X"},{label:"Women`s Suits",calculator:"n/clothing.X5028_X"},{label:"Women`s Accessories",calculator:"n/clothing.X5029_X"},{label:"Women`s Uniforms",calculator:"n/clothing.X5030_X"},{label:"Women`s Costumes",calculator:"n/clothing.X5031_X"}],{sorting:"Descending"})}},l.eatingOut={name:"Spending on Eating Out",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Eating Out",null,"",[{label:"Lunch",calculator:"n/food.X1132_X"},{label:"Dinner",calculator:"n/food.X1137_X"},{label:"Snacks",calculator:"n/food.X1142_X"},{label:"Breakfast",calculator:"n/food.X1147_X"},{label:"School Meals",calculator:"n/food.X1152_X"}],{sorting:"Descending"})}},l.healthCare={name:"Spending on Health Care",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Health Care",null,"",[{label:"Health Insurance",calculator:"n/Health.X8002_X"},{label:"Medicare Payments",calculator:"n/Health.X8013_X"},{label:"Medical Care",calculator:"n/HealthPersonalCareCEX.X8018_X"},{label:"Medical Services",calculator:"n/HealthPersonalCareCEX.X8019_X"},{label:"Drugs and Vitamins",calculator:"n/Health.X8028_X"},{label:"Medical Supplies",calculator:"n/HealthPersonalCareCEX.X8033_X"}],{sorting:"Descending"})}},l.medicalServices={name:"Spending on Medical Services",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Medical Services",null,"",[{label:"Physician",calculator:"n/Health.X8020_X"},{label:"Dental",calculator:"n/Health.X8021_X"},{label:"Eyecare",calculator:"n/Health.X8022_X"},{label:"Med Prof excluding Physicians",calculator:"n/HealthPersonalCareCEX.X8023_X"},{label:"Lab Tests/X-rays",calculator:"n/Health.X8024_X"},{label:"Hospital Room & Service",calculator:"n/Health.X8025_X"},{label:"Convalescent/Nursing Home Care",calculator:"n/Health.X8026_X"},{label:"Other",calculator:"n/HealthPersonalCareCEX.X8027_X"}],{sorting:"Descending"})}},l.travel={name:"Spending on Travel",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Spending on Travel",null,"",[{label:"Transportation Costs",calculator:"n/TravelCEX.X7002_X"},{label:"Lodging on Trips",calculator:"n/TravelCEX.X7015_X"},{label:"Vacation Clubs",calculator:"n/TravelCEX.X7016_X"},{label:"Food & Drink on Trips",calculator:"n/TravelCEX.X7017_X"},{label:"Entertainment on Trips",calculator:"n/TravelCEX.X7021_X"}],{sorting:"Descending"})}},l.entertainmentOnTrips={name:"Entertainment on Trips (Spending)",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Entertainment on Trips",null,"",[{label:"Recreational Expenses",calculator:"n/TravelCEX.X7022_X"},{label:"Fees for Part Sports",calculator:"n/TravelCEX.X7023_X"},{label:"Movie/Museum/Other Admission",calculator:"n/TravelCEX.X7024_X"},{label:"Sports Events Admission",calculator:"n/TravelCEX.X7025_X"},{label:"Other Entertainment Services",calculator:"n/TravelCEX.X7026_X"}],{sorting:"Descending"})}},l.education={name:"Spending on Education",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Spending on Education",null,"",[{label:"College Tuition",calculator:"n/education.X11002_X"},{label:"Elementary & HS Tuition",calculator:"n/education.X11003_X"},{label:"Vocational & Tech School Tuition",calculator:"n/education.X11004_X"},{label:"Tuition for Other Schools",calculator:"n/education.X11005_X"},{label:"Other School Expenses incl Books/Equip Rent",calculator:"n/education.X11006_X"},{label:"College School Book/Supplies",calculator:"n/education.X11007_X"},{label:"Elementary/HS School Books/Supplies",calculator:"n/education.X11008_X"},{label:"Vocactional/Tech School Books/Supplies",calculator:"n/education.X11009_X"},{label:"Preschool/Other School Book/Supplies",calculator:"n/education.X11010_X"},{label:"Other School Supplies",calculator:"n/education.X11011_X"},{label:"Test Prep & Tutoring Srvs",calculator:"n/education.X11012_X"}],{sorting:"Descending"})}},l.entertainmentRecreation={name:"Spending on Entertainment/Recreation",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Entertainment/Recreation",null,"",[{label:"Fees & Admissions",calculator:"n/entertainment.X9004_X"},{label:"TV/Video/Audio",calculator:"n/entertainment.X9011_X"},{label:"Pets",calculator:"n/entertainment.X9035_X"},{label:"Toys & Games",calculator:"n/entertainment.X9040_X"},{label:"Recreational Vehicles & Fees",calculator:"n/entertainment.X9046_X"},{label:"Sports/Rec/Exercise Equip",calculator:"n/entertainment.X9051_X"},{label:"Photo Equipment/Supplies",calculator:"n/entertainment.X9060_X"},{label:"Reading",calculator:"n/entertainment.X9065_X"}],{sorting:"Descending"})}},l.foodTotals={name:"Spending on Food (Totals)",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createDonutChart("Food Totals",[{label:"Away from Home",calculator:"n/food.X1130_X"},{label:"At Home",calculator:"n/food.X1003_X"}])}},l.householdGoods={name:"Spending on Household Goods",states:"n,a,i",fieldInfo:{isChart:!0,chartJson:a.createChart("Bar","Household Goods",null,"",[{label:"Housekeeping Supplies",calculator:"n/HousingHousehold.X4033_X"},{label:"Household Textiles",calculator:"n/HousingHousehold.X4044_X"},{label:"Furniture",calculator:"n/HousingHousehold.X4052_X"},{label:"Rugs",calculator:"n/HousingHousehold.X4062_X"},{label:"Major Appliances",calculator:"n/HousingHousehold.X4063_X"},{label:"Housewares",calculator:"n/HousingHousehold.X4074_X"},{label:"Small Appliances",calculator:"n/HousingHousehold.X4082_X"},{label:"Other HH Items",calculator:"n/HousingHousehold.X4085_X"}],{sorting:"Descending"})}},l});