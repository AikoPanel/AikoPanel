import{k as r,j as e,F as l,o,aL as i,aj as s,B as a,T as c,bm as d,m}from"./vendor-4c8effbd.js";import{m as h,b as g,c as p}from"./index-efdad191.js";const u="/theme/aikocute/assets/Error404-fc1d5475.png",f="/theme/aikocute/assets/TwoCone-870f0bbe.png",x=h()(t=>({container:{minHeight:"100vh",paddingTop:t.spacing(1.5),paddingBottom:t.spacing(1),overflow:"hidden"},box404Image:{width:250,height:130,[t.breakpoints.up("sm")]:{width:590,height:300}},image404:{width:"100%",height:"100%"},coneGrid:{position:"relative"},coneBox:{position:"absolute",top:60,left:-40,width:130,height:115,[t.breakpoints.up("sm")]:{width:390,height:330}},cone:{width:"100%",height:"100%"}})),k=()=>{const{t}=r();g("not_found");const{classes:n}=x();return e(l,{children:o(i,{container:!0,spacing:10,direction:"column",alignItems:"center",justifyContent:"center",className:n.container,children:[e(i,{item:!0,xs:12,children:o(s,{direction:"row",children:[e(i,{item:!0,children:e(a,{className:n.box404Image,children:e(a,{component:"img",src:u,alt:"404",className:n.image404})})}),e(i,{item:!0,className:n.coneGrid,children:e(a,{className:n.coneBox,children:e(a,{component:"img",src:f,alt:"cone",className:n.cone})})})]})}),e(i,{item:!0,xs:12,children:o(s,{spacing:2,justifyContent:"center",alignItems:"center",children:[e(c,{variant:"h1",children:t("maintenance.404.title")}),e(c,{color:"textSecondary",align:"center",noWrap:!0,children:t("maintenance.404.description")}),e(d,{component:m,to:p.defaultPath,variant:"contained",children:t("maintenance.404.button")})]})})]})})};export{k as default};
