System.register(["./vendor-legacy-21e846b5.js","./AuthWrapper-legacy-e64f4946.js","./AnimateButton-legacy-ef3d17cf.js","./index-legacy-4d5357df.js","./password-strength-legacy-0a064d1d.js"],(function(e,r){"use strict";var o,i,s,a,t,n,l,d,c,p,m,u,h,g,w,_,f,b,x,y,S,v,C,q,B,j,k,A,F,W,I,P,z,D,E,K,V,$,R;return{setters:[e=>{o=e.i,i=e.k,s=e.bc,a=e.ab,t=e.aa,n=e.r,l=e.j,d=e.F,c=e.bd,p=e.be,m=e.bf,u=e.bp,h=e.a$,g=e.o,w=e.aL,_=e.aj,f=e.bg,b=e.ap,x=e.bh,y=e.bi,S=e.br,v=e.bj,C=e.bk,q=e.bl,B=e.bs,j=e.B,k=e.T,A=e.l,F=e.bm,W=e.aq,I=e.m},e=>{P=e.A},e=>{z=e.A},e=>{D=e.g,E=e.I,K=e.b},e=>{V=e.S,$=e.s,R=e.a}],execute:function(){const r=()=>{const e=o(),{t:r}=i("common"),I=s(),P=a(),{enqueueSnackbar:K}=t(),[L]=D(),[M,O]=n.useState(),[T,G]=n.useState(!1),H=()=>{G(!T)},J=e=>{e.preventDefault()},N=e=>{const r=$(e);O(R(r))};return n.useEffect((()=>{N("")}),[]),l(d,{children:l(c,{initialValues:{email:"",password:"",password_confirm:"",email_code:"",submit:null},validationSchema:p().shape({email:m().email(r("forgot_password.email_invalid").toString()).max(255,r("forgot_password.email_max",{count:255}).toString()).required(r("forgot_password.email_required").toString()),password:m().max(255,r("forgot_password.password_max",{count:255}).toString()).required(r("forgot_password.password_required").toString()),password_confirm:m().oneOf([u("password"),null],r("forgot_password.password_confirm_invalid").toString()).required(r("forgot_password.password_confirm_required").toString()),email_code:m().min(6,r("forgot_password.email_code_min",{count:6}).toString()).max(6,r("forgot_password.email_code_max",{count:6}).toString()).required(r("forgot_password.email_code_required").toString())}),onSubmit:async(e,{setErrors:o,setStatus:i,setSubmitting:s})=>{if(6!==e.email_code.length)return i({success:!1}),void o({email_code:r("forgot_password.email_code_invalid").toString()});await L({email:e.email,password:e.password,email_code:e.email_code}).unwrap().then((()=>{I.current&&(i({success:!0}),s(!1),K(r("notice::forgot_password.reset_success"),{variant:"success"}),h.event("reset_password",{category:"auth",label:"reset_password",email:e.email,success:!0}),P("/login",{replace:!0}))})).catch((r=>{I.current&&(i({success:!1}),o(r.errors||{submit:r.message}),s(!1),h.event("reset_password",{category:"auth",label:"reset_password",email:e.email,success:!1,error:r.message}))})).finally((()=>{I.current&&s(!1)}))},children:({errors:o,handleBlur:i,handleChange:s,handleSubmit:a,isSubmitting:t,touched:n,values:d,setValues:c})=>l("form",{noValidate:!0,onSubmit:a,children:g(w,{container:!0,spacing:3,children:[l(w,{item:!0,xs:12,children:g(_,{spacing:1,children:[l(f,{htmlFor:"email",children:l(b,{children:"forgot_password.email"})}),l(x,{fullWidth:!0,error:Boolean(n.email&&o.email),id:"email",type:"email",value:d.email,name:"email",onBlur:i,onChange:s,placeholder:"user@example.com",inputProps:{},endAdornment:l(V,{email:d.email})}),n.email&&o.email&&l(y,{error:!0,id:"helper-text-email-signup",children:o.email})]})}),l(w,{item:!0,xs:12,children:g(_,{spacing:1,children:[l(f,{htmlFor:"email-code-signup",children:l(b,{children:"forgot_password.email_code"})}),l(S,{value:d.email_code,onChange:e=>{c((r=>({...r,email_code:e})))},numInputs:6,containerStyle:{justifyContent:"space-between"},inputProps:{name:"email_code",id:"email-code-signup",onBlur:i},inputStyle:{width:"100%",margin:"8px",padding:"10px",border:`1px solid ${"dark"===e.palette.mode?e.palette.grey[200]:e.palette.grey[300]}`,borderRadius:4,":hover":{borderColor:e.palette.primary.main}},focusStyle:{outline:"none",boxShadow:e.customShadows.primary,border:`1px solid ${e.palette.primary.main}`}}),n.email_code&&o.email_code&&l(y,{error:!0,id:"helper-text-email-signup",children:o.email_code})]})}),g(w,{item:!0,xs:12,children:[g(_,{spacing:1,children:[l(f,{htmlFor:"password-signup",children:l(b,{children:"forgot_password.password"})}),l(x,{fullWidth:!0,error:Boolean(n.password&&o.password),id:"password-signup",type:T?"text":"password",value:d.password,name:"password",onBlur:i,onChange:e=>{s(e),N(e.target.value)},autoComplete:"new-password",endAdornment:l(v,{position:"end",children:l(E,{"aria-label":"toggle password visibility",onClick:H,onMouseDown:J,edge:"end",color:"secondary",children:l(T?C:q,{})})}),placeholder:"******",inputProps:{}}),n.password&&o.password&&l(y,{error:!0,id:"helper-text-password-signup",children:o.password})]}),l(B,{fullWidth:!0,sx:{mt:2},children:g(w,{container:!0,spacing:2,alignItems:"center",children:[l(w,{item:!0,children:l(j,{sx:{bgcolor:M?.color,width:85,height:8,borderRadius:"7px"}})}),l(w,{item:!0,children:l(k,{variant:"subtitle1",fontSize:"0.75rem",children:r("forgot_password.password_strength",{context:A.lowerCase(M?.label)}).toString()})})]})})]}),l(w,{item:!0,xs:12,children:g(_,{spacing:1,children:[l(f,{htmlFor:"password-confirm",children:l(b,{children:"forgot_password.password_confirm"})}),l(x,{fullWidth:!0,error:Boolean(n.password_confirm&&o.password_confirm),id:"password-confirm",type:T?"text":"password",value:d.password_confirm,name:"password_confirm",onBlur:i,onChange:e=>{s(e),N(e.target.value)},autoComplete:"new-password",placeholder:"******",inputProps:{}}),n.password_confirm&&o.password_confirm&&l(y,{error:!0,id:"helper-text-password-confirm",children:o.password_confirm})]})}),o.submit&&l(w,{item:!0,xs:12,children:l(y,{error:!0,children:o.submit})}),l(w,{item:!0,xs:12,children:l(z,{children:l(F,{disableElevation:!0,disabled:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:t?l(W,{size:24}):l(b,{i18nKey:"forgot_password.submit",children:"重置密码"})})})})]})})})})};e("default",(()=>(K("forgot-password"),l(P,{children:g(w,{container:!0,spacing:3,children:[l(w,{item:!0,xs:12,children:g(_,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[l(k,{variant:"h3",children:l(b,{i18nKey:"forgot_password.title",children:"Forgot password"})}),l(k,{component:I,to:"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:l(b,{i18nKey:"forgot_password.back_to_login",children:"Back to login"})})]})}),l(w,{item:!0,xs:12,children:l(r,{})})]})}))))}}}));
