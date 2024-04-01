import{k,j as t,o,aj as _,T as x,B as W,i as tt,al as $,F as O,bm as S,bw as E,bx as Y,bd as z,be as A,bq as H,l as R,c7 as V,by as Q,bK as K,c8 as T,c4 as U,r as N,ab as it,bf as D,bs as et,bg as nt,c9 as at,ca as rt,bi as ot,bC as ct,aa as dt,bb as st,at as L,ax as j,ak as P,bD as lt,cb as vt,aL as I}from"./vendor-4c8effbd.js";import{m as J,C as M,M as B,D as mt,c as X,E as ht,F as ut,G as wt,b as yt}from"./index-efdad191.js";import{D as gt}from"./DataGrid-345901e9.js";const Z=J()(i=>({root:{},form:{backgroundColor:"transparent"}})),ft=()=>{var c,m;const{t:i}=k(),{data:e}=M(),[s]=mt(),{classes:v}=Z();tt();const[f,{setLeft:n,setRight:r}]=$(!1);return o(O,{children:[t(S,{variant:"contained",onClick:r,children:i("invite.my-invite.invitation-card.transfer-button")}),o(E,{open:f,onClose:n,fullWidth:!0,children:[t(Y,{children:i("invite.my-invite.invitation-card.transfer-dialog.title")}),t(z,{initialValues:{transfer_amount:0},validationSchema:A().shape({transfer_amount:H().min(.01,i("invite.my-invite.invitation-card.transfer-dialog.validation_min",{count:.1}).toString()).max(((c=e==null?void 0:e.stat[4])!=null?c:0)/100,i("invite.my-invite.invitation-card.transfer-dialog.validation_max",{count:((m=e==null?void 0:e.stat[4])!=null?m:0)/100}).toString()).required(i("invite.my-invite.invitation-card.transfer-dialog.validation_required").toString())}),onSubmit:async(b,{setSubmitting:h,setErrors:a,setStatus:l})=>{try{h(!0),await s(b.transfer_amount*100).unwrap(),l({success:!0}),n()}catch(d){a(R.isEmpty(d.errors)?{transfer_amount:d.message}:d.errors),l({success:!1})}finally{h(!1)}},children:({values:b,handleChange:h,handleBlur:a,handleSubmit:l,isSubmitting:d,errors:u,touched:w})=>{var p;return o(W,{component:V,onSubmit:l,className:v.form,children:[t(Q,{children:o(_,{spacing:3,children:[t(K,{severity:"info",children:i("invite.my-invite.invitation-card.transfer-dialog.info",{siteName:X.title})}),t(T,{id:"total-amount",type:"number",disabled:!0,fullWidth:!0,value:((p=e==null?void 0:e.stat[4])!=null?p:0)/100,label:i("invite.my-invite.invitation-card.transfer-dialog.total-amount",{context:"label"}),variant:"standard"}),t(T,{id:"transfer-amount",name:"transfer_amount",type:"number",value:b.transfer_amount,onChange:h,onBlur:a,label:i("invite.my-invite.invitation-card.transfer-dialog.transfer-amount",{context:"label"}),fullWidth:!0,disabled:d,helperText:u.transfer_amount&&w.transfer_amount?u.transfer_amount:void 0,error:Boolean(w.transfer_amount&&u.transfer_amount),variant:"standard"})]})}),o(U,{children:[t(S,{onClick:n,children:i("invite.my-invite.invitation-card.transfer-dialog.cancel-button")}),t(S,{type:"submit",variant:"contained",disabled:d,children:i("invite.my-invite.invitation-card.transfer-dialog.confirm-button")})]})]})}})]})]})},bt=()=>{var a,l;const[i,e]=N.useState(!0),[s,{setLeft:v,setRight:f}]=$(!1),{t:n}=k(),{data:r}=M(),{data:c}=ht(void 0,{skip:i}),[m]=ut(),b=it(),{classes:h}=Z();return o(O,{children:[t(S,{variant:"outlined",onClick:()=>{f(),e(!1)},children:n("invite.my-invite.invitation-card.withdraw-button")}),o(E,{open:s,onClose:v,fullWidth:!0,children:[t(Y,{children:n("invite.my-invite.invitation-card.withdraw-dialog.title")}),t(z,{initialValues:{withdraw_method:(a=c==null?void 0:c.withdraw_methods[0])!=null?a:"",withdraw_account:"",withdraw_name:"",withdraw_amount:((l=r==null?void 0:r.stat[4])!=null?l:0)/100},validationSchema:A().shape({withdraw_method:D().required(n("invite.my-invite.invitation-card.withdraw-dialog.validation_required",{name:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-method",{context:"label"})}).toString()),withdraw_account:D().required(n("invite.my-invite.invitation-card.withdraw-dialog.validation_required",{name:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-account",{context:"label"})}).toString()),withdraw_name:D().required(n("invite.my-invite.invitation-card.withdraw-dialog.validation_required",{name:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-name",{context:"label"})}).toString()),withdraw_amount:H().required(n("invite.my-invite.invitation-card.withdraw-dialog.validation_required",{name:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-amount",{context:"label"})}).toString())}),onSubmit:async(d,{setSubmitting:u,setErrors:w,setStatus:p})=>{try{await m(d).unwrap(),p({success:!0}),b("/ticket"),v()}catch(y){w(R.isEmpty(y.errors)?{withdraw_account:y.message}:y.errors),p({success:!1})}finally{u(!1)}},children:({values:d,handleChange:u,handleBlur:w,handleSubmit:p,isSubmitting:y,errors:g,touched:C})=>{var F,G;return o(W,{component:V,onSubmit:p,className:h.form,children:[t(Q,{children:o(_,{spacing:3,children:[t(K,{severity:"info",color:"info",children:n("invite.my-invite.invitation-card.withdraw-dialog.info",{siteName:X.title,amount:((F=r==null?void 0:r.stat[4])!=null?F:0)/100})}),o(et,{fullWidth:!0,variant:"standard",children:[t(nt,{id:"select-payment-label",children:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-method",{context:"label"})}),t(at,{labelId:"select-payment-label",id:"select-payment",name:"withdraw_method",value:d.withdraw_method,label:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-method",{context:"label"}),onChange:u,onBlur:w,disabled:y,children:c==null?void 0:c.withdraw_methods.map(q=>t(rt,{value:q,children:q},q))}),g.withdraw_method&&C.withdraw_method&&t(ot,{error:!0,children:g.withdraw_method})]}),t(T,{id:"withdraw-account",name:"withdraw_account",type:"text",value:d.withdraw_account,onChange:u,onBlur:w,label:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-account",{context:"label"}),fullWidth:!0,disabled:y,helperText:g.withdraw_account&&C.withdraw_account?g.withdraw_account:void 0,error:Boolean(C.withdraw_account&&g.withdraw_account),variant:"standard"}),t(T,{id:"withdraw-name",name:"withdraw_name",type:"text",value:d.withdraw_name,onChange:u,onBlur:w,label:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-name",{context:"label"}),fullWidth:!0,disabled:y,helperText:g.withdraw_name&&C.withdraw_name?g.withdraw_name:void 0,error:Boolean(C.withdraw_name&&g.withdraw_name),variant:"standard"}),t(T,{id:"withdraw-amount",type:"number",disabled:!0,fullWidth:!0,value:((G=r==null?void 0:r.stat[4])!=null?G:0)/100,label:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-amount",{context:"label"}),variant:"standard"})]})}),o(U,{children:[t(S,{onClick:v,children:n("invite.my-invite.invitation-card.withdraw-dialog.cancel-button")}),t(S,{type:"submit",variant:"contained",disabled:y,children:n("invite.my-invite.invitation-card.withdraw-dialog.confirm-button")})]})]})}})]})]})},pt=()=>{var s;const{t:i}=k(),{data:e}=M();return t(B,{title:i("invite.my-invite.invitation-card.title"),sx:{height:240},children:o(_,{spacing:2,children:[o(_,{direction:"row",spacing:2,alignItems:"flex-end",children:[t(x,{variant:"h2",component:"span",children:Number(((s=e==null?void 0:e.stat[4])!=null?s:0)/100).toLocaleString("vi-VN")}),t(x,{variant:"h6",component:"span",color:"textSecondary",children:i("invite.my-invite.invitation-card.currency")})]}),o(W,{children:[t(x,{variant:"subtitle1",children:i("invite.my-invite.invitation-card.description")}),t(x,{variant:"body2",color:"textSecondary",noWrap:!0,children:i("invite.my-invite.invitation-card.helperText")})]}),o(_,{direction:"row",spacing:2,children:[t(ft,{}),t(bt,{})]})]})})},_t=J()(i=>({root:{height:i.spacing(30),display:"flex",flexDirection:"column","& .MuiCardContent-root":{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center"}}})),xt=()=>{const{t:i}=k(),{data:e,isLoading:s}=M(),v=N.useMemo(()=>{var n,r,c,m;return[{label:i("invite.my-invite.info-card.user-register-count"),value:i("invite.my-invite.info-card.user-register-count-value",{count:(n=e==null?void 0:e.stat[0])!=null?n:0})},{label:i("invite.my-invite.info-card.commission-rate"),value:i("invite.my-invite.info-card.commission-rate-value",{rate:(r=e==null?void 0:e.stat[3])!=null?r:0})},{label:i("invite.my-invite.info-card.commission-confirming"),value:i("invite.my-invite.info-card.commission-confirming-value",{count:((c=e==null?void 0:e.stat[2])!=null?c:0)/100})},{label:i("invite.my-invite.info-card.commission-total"),value:i("invite.my-invite.info-card.commission-total-value",{count:((m=e==null?void 0:e.stat[1])!=null?m:0)/100})}]},[e,i]),{classes:f}=_t();return t(B,{title:i("invite.my-invite.info-card.title"),className:f.root,children:t(_,{spacing:2,children:v.map((n,r)=>s?t(ct,{variant:"text",width:"100%"},r):o(_,{direction:"row",justifyContent:"space-between",children:[t(x,{variant:"body1",children:n.label}),t(x,{variant:"body1",children:n.value})]},r))})})},St=()=>{var h;const{t:i}=k(),{data:e,isLoading:s}=M(),[v,{isLoading:f}]=wt(),{enqueueSnackbar:n}=dt(),[r,c]=st.useState(10),m=()=>{v().unwrap().then(()=>{n(i("notice::generate-invite-codes_success"),{variant:"success"})}).catch(a=>{console.error(a),n(i("notice::generate-invite-codes_failed"),{variant:"error"})})},b=N.useMemo(()=>[{field:"id",headerName:i("invite.my-invite.invite-codes-table.id",{context:"header"}).toString(),maxWidth:120,type:"number",valueFormatter:({value:a})=>{var l;return(l=a==null?void 0:a.toString().padStart(4,"0"))!=null?l:a}},{field:"code",headerName:i("invite.my-invite.invite-codes-table.code",{context:"header"}).toString(),description:i("invite.my-invite.invite-codes-table.code",{context:"description"}).toString(),maxWidth:160,type:"string"},{field:"created_at",headerName:i("invite.my-invite.invite-codes-table.created_at",{context:"header"}).toString(),description:i("invite.my-invite.invite-codes-table.created_at",{context:"description"}).toString(),width:200,type:"dateTime",valueGetter:({value:a})=>L.unix(a).toDate(),valueFormatter:({value:a})=>L(a).format("DD-MM-YYYY HH:mm:ss")},{field:"actions",headerName:i("invite.my-invite.invite-codes-table.actions",{context:"header"}).toString(),type:"actions",getActions:a=>[t(j,{title:i("invite.my-invite.invite-codes-table.action-copy",{context:"tooltip"}).toString(),children:t(P,{onClick:()=>{window.navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/register?code=${a.row.code}`).then(()=>{n(i("notice::copy_success"),{variant:"success"})})},children:t(lt,{})})},"copy")]}],[e,i]);return t(B,{content:!1,title:i("invite.my-invite.invite-codes-table.title"),secondary:t(j,{title:i("invite.my-invite.invite-codes-table.generate_tooltip"),placement:"left",children:t(P,{onClick:m,disabled:f,children:t(vt,{})})}),children:t(W,{height:{xs:400,md:500},children:t(gt,{columns:b,rows:(h=e==null?void 0:e.codes)!=null?h:[],rowsPerPageOptions:[10,20,50],pageSize:r,onPageSizeChange:a=>c(a),loading:s})})})},Ct=()=>o(I,{container:!0,spacing:2,children:[t(I,{item:!0,xs:12,md:6,children:t(pt,{})}),t(I,{item:!0,xs:12,md:6,children:t(xt,{})}),t(I,{item:!0,xs:12,children:t(St,{})})]}),It=()=>(yt("invite"),t(Ct,{}));export{It as default};
