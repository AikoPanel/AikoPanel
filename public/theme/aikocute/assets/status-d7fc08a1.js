import{j as s,k as S,bb as x,r as c,c6 as y,B as d,b$ as C,bZ as N,l as w,C as u,aj as v}from"./vendor-4c8effbd.js";import{M as z,m as p,j as I,B as j,b as B}from"./index-efdad191.js";import{D as G}from"./DataGrid-345901e9.js";const k=({children:a,className:e})=>s(z,{className:e,content:!1,children:a}),M=p()(a=>({icon:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},successIcon:{color:a.palette.success.main,fontSize:".8rem"},errorIcon:{color:a.palette.error.main,fontSize:".8rem"},rateBox:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},rateChip:{minWidth:a.spacing(8)}})),P=({className:a})=>{const{t:e}=S(),{data:l}=I(),{data:o,isLoading:m}=j(void 0,{skip:(l==null?void 0:l.plan_id)===null,pollingInterval:10*1e3}),{classes:r}=M(),[h,b]=x.useState(10),f=c.useMemo(()=>{var t;return y((t=o==null?void 0:o.filter(n=>n.show===1&&n.is_online===1).sort((n,i)=>{switch(!0){case n.sort>i.sort:return 1;case n.sort<i.sort:return-1;default:return 0}}))!=null?t:[],n=>n.id)},[o]),g=c.useMemo(()=>[{field:"id",headerName:e("node.status.table.id",{context:"header"}).toString(),description:e("node.status.table.id",{context:"description"}).toString(),type:"number"},{field:"name",headerName:e("node.status.table.name",{context:"header"}).toString(),description:e("node.status.table.name",{context:"description"}).toString(),minWidth:160,sortable:!0,filterable:!0},{field:"is_online",headerName:e("node.status.table.status",{context:"header"}).toString(),description:e("node.status.table.status",{context:"description"}).toString(),width:120,sortable:!1,type:"boolean",renderCell:t=>s(d,{className:r.icon,children:t.value?s(C,{className:r.successIcon}):s(N,{className:r.errorIcon})})},{field:"type",headerName:e("node.status.table.type",{context:"header"}).toString(),description:e("node.status.table.type",{context:"description"}).toString(),width:160,sortable:!1,valueFormatter:t=>w.capitalize(t.value)},{field:"online",headerName:e("node.status.table.online",{context:"header"}).toString(),description:e("node.status.table.online",{context:"description"}).toString(),width:120,sortable:!0,filterable:!0,hide:!0},{field:"rate",headerName:e("node.status.table.rate",{context:"header"}).toString(),description:e("node.status.table.rate",{context:"description"}).toString(),width:120,sortable:!1,hide:!0,renderCell:t=>s(d,{className:r.rateBox,children:s(u,{label:`${t.value} x`,size:"small",className:r.rateChip})})},{field:"tags",headerName:e("node.status.table.tags",{context:"header"}).toString(),description:e("node.status.table.tags",{context:"description"}).toString(),minWidth:160,sortable:!1,type:"singleSelect",renderCell:t=>{var n;return s(v,{direction:"row",spacing:1,children:(n=t.value)==null?void 0:n.map(i=>s(u,{label:i,size:"small"},i))})}}],[o,e,r]);return s(G,{columns:g,rows:f,className:a,loading:m,rowsPerPageOptions:[5,10,25,50],pageSize:h,onPageSizeChange:t=>b(t)})},W=p()(a=>({root:{flexGrow:1,height:"100%",display:"flex",flexDirection:"column"},dataGrip:{height:"100%"}})),D=()=>{const{classes:a}=W();return s(k,{className:a.root,children:s(P,{className:a.dataGrip})})},$=()=>(B("node-status"),s(D,{}));export{$ as default};
