import{a as r}from"./plan-357bf2a6.js";import{l as t}from"./vendor-894d6afa.js";const _=e=>{let i={};return t.isNumber(e.one_day_price)&&(i[r.ONEDAY]=e.one_day_price),t.isNumber(e.month_price)&&(i[r.MONTHLY]=e.month_price),t.isNumber(e.two_month_price)&&(i[r.BIMONTHLY]=e.two_month_price),t.isNumber(e.quarter_price)&&(i[r.QUARTERLY]=e.quarter_price),t.isNumber(e.half_year_price)&&(i[r.HALF_YEARLY]=e.half_year_price),t.isNumber(e.year_price)&&(i[r.YEARLY]=e.year_price),t.isNumber(e.two_year_price)&&(i[r.TWO_YEARLY]=e.two_year_price),t.isNumber(e.three_year_price)&&(i[r.THREE_YEARLY]=e.three_year_price),t.isNumber(e.onetime_price)&&(i[r.ONETIME]=e.onetime_price),i},E=(e,i)=>_(e)[i]||0,s=[r.MONTHLY,r.QUARTERLY,r.YEARLY,r.HALF_YEARLY,r.TWO_YEARLY,r.THREE_YEARLY,r.ONETIME],u=e=>{const i=_(e);return s.find(m=>t.isNumber(i[m]))||null};export{u as a,E as b,_ as g,s as p};
