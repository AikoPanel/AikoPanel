System.register(["./vendor-legacy-a194f484.js","./index-legacy-3a6f8cc6.js","./DataGrid-legacy-cdb9310e.js"],(function(e,t){"use strict";var a,s,n,i,r,o,l,c,d,u,m,h,p,g,b,x,f;return{setters:[e=>{a=e.j,s=e.k,n=e.ba,i=e.r,r=e.cQ,o=e.B,l=e.cJ,c=e.cI,d=e.l,u=e.C,m=e.ai},e=>{h=e.M,p=e.m,g=e.j,b=e.B,x=e.b},e=>{f=e.D}],execute:function(){const t=({children:e,className:t})=>a(h,{className:t,content:!1,children:e}),S=p()((e=>({icon:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},successIcon:{color:e.palette.success.main,fontSize:".8rem"},errorIcon:{color:e.palette.error.main,fontSize:".8rem"},rateBox:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},rateChip:{minWidth:e.spacing(8)}}))),N=({className:e})=>{const{t:t}=s(),{data:h}=g(),{data:p,isLoading:x}=b(void 0,{skip:null===h?.plan_id,pollingInterval:1e4}),{classes:N}=S(),[y,w]=n.useState(10),v=i.useMemo((()=>r(p?.filter((e=>1===e.show&&1===e.is_online)).sort(((e,t)=>{switch(!0){case e.sort>t.sort:return 1;case e.sort<t.sort:return-1;default:return 0}}))??[],(e=>e.id))),[p]),C=i.useMemo((()=>[{field:"id",headerName:t("node.status.table.id",{context:"header"}).toString(),description:t("node.status.table.id",{context:"description"}).toString(),type:"number"},{field:"name",headerName:t("node.status.table.name",{context:"header"}).toString(),description:t("node.status.table.name",{context:"description"}).toString(),minWidth:160,sortable:!0,filterable:!0},{field:"is_online",headerName:t("node.status.table.status",{context:"header"}).toString(),description:t("node.status.table.status",{context:"description"}).toString(),width:120,sortable:!1,type:"boolean",renderCell:e=>a(o,{className:N.icon,children:e.value?a(l,{className:N.successIcon}):a(c,{className:N.errorIcon})})},{field:"type",headerName:t("node.status.table.type",{context:"header"}).toString(),description:t("node.status.table.type",{context:"description"}).toString(),width:160,sortable:!1,valueFormatter:e=>d.capitalize(e.value)},{field:"online",headerName:t("node.status.table.online",{context:"header"}).toString(),description:t("node.status.table.online",{context:"description"}).toString(),width:120,sortable:!0,filterable:!0,hide:!0},{field:"rate",headerName:t("node.status.table.rate",{context:"header"}).toString(),description:t("node.status.table.rate",{context:"description"}).toString(),width:120,sortable:!1,hide:!0,renderCell:e=>a(o,{className:N.rateBox,children:a(u,{label:`${e.value} x`,size:"small",className:N.rateChip})})},{field:"tags",headerName:t("node.status.table.tags",{context:"header"}).toString(),description:t("node.status.table.tags",{context:"description"}).toString(),minWidth:160,sortable:!1,type:"singleSelect",renderCell:e=>a(m,{direction:"row",spacing:1,children:e.value?.map((e=>a(u,{label:e,size:"small"},e)))})}]),[p,t,N]);return a(f,{columns:C,rows:v,className:e,loading:x,rowsPerPageOptions:[5,10,25,50],pageSize:y,onPageSizeChange:e=>w(e)})},y=p()((e=>({root:{flexGrow:1,height:"100%",display:"flex",flexDirection:"column"},dataGrip:{height:"100%"}}))),w=()=>{const{classes:e}=y();return a(t,{className:e.root,children:a(N,{className:e.dataGrip})})};e("default",(()=>(x("node-status"),a(w,{}))))}}}));
