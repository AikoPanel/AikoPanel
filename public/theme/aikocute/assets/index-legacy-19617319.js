System.register(["./vendor-legacy-21e846b5.js","./index-legacy-4d5357df.js","./useQuery-legacy-84be3fc1.js"],(function(e,t){"use strict";var r,n,a,i,c,o,l,s,d,u,p,h,g,m,b,x,w,f,k,v,y,C,j,S,I,_,B,M,N,L,O,R,W,E,z,H,D,T,q,A,P,Y,F,G,Q,$,V,X,K,U,Z,J,ee,te,re,ne,ae,ie,ce,oe,le,se,de,ue,pe,he,ge,me,be,xe,we,fe,ke,ve,ye,Ce;return{setters:[e=>{r=e.i,n=e.j,a=e.B,i=e.bO,c=e.a4,o=e.aa,l=e.k,s=e.ab,d=e.al,u=e.r,p=e.at,h=e.z,g=e.ag,m=e.o,b=e.p,x=e.au,w=e.t,f=e.as,k=e.ar,v=e.s,y=e.aj,C=e.T,j=e.cj,S=e.F,I=e.ak,_=e.cb,B=e.bw,M=e.bx,N=e.bd,L=e.be,O=e.bf,R=e.by,W=e.c7,E=e.c8,z=e.bs,H=e.bg,D=e.c9,T=e.ca,q=e.bi,A=e.c4,P=e.bm,Y=e.cd,F=e.a3,G=e.C,Q=e.bh,$=e.bj,V=e.bR,X=e.bW,K=e.c3,U=e.aL,Z=e.aH,J=e.aG,ee=e.bC,te=e.ck,re=e.cl,ne=e.cm,ae=e.cn,ie=e.co,ce=e.bv,oe=e.bD,le=e.a6,se=e.a9,de=e.bB},e=>{ue=e.V,pe=e.W,he=e.X,ge=e.Y,me=e.m,be=e.Z,xe=e.M,we=e.S,fe=e._,ke=e.c,ve=e.j,ye=e.A},e=>{Ce=e.u}],execute:function(){const t=({color:e,size:t,variant:i,sx:c})=>{const o=r(),l=ue(o,e||"primary"),{main:s}=l;return n(a,{component:"span",sx:{width:t||8,height:t||8,borderRadius:"50%",bgcolor:"outlined"===i?"":s,..."outlined"===i&&{border:`1px solid ${s}`},...c}})},[je,Se]=i((({id:e})=>{const t=r(),n=c(t.breakpoints.down("lg")),{enqueueSnackbar:a}=o(),{t:i}=l(),p=Ce(),h=s(),[g,m]=d(!1),[b,x]=u.useState(e??0),[w,f]=u.useState(p.get("s")??""),[k,v]=u.useState(""),[y,C]=u.useState(null);u.useEffect((()=>{n||m.set(!0)}),[n]);const j=u.useMemo((()=>n?280:320),[n]),S=pe(void 0,{pollingInterval:6e4}),I=he(b,{skip:0===b,pollingInterval:3e4}),[_]=ge();return u.useEffect((()=>{b&&(v(""),C(null))}),[b]),u.useEffect((()=>{S.data&&(S.data?.length??0)>0&&!b&&(x(S.data[0].id),h(`/ticket/${S.data[0].id}`))}),[S.data]),{tickets:u.useMemo((()=>S.data?.filter((e=>{let t=!0,r=!1;return["subject"].forEach((t=>{e[t].toString().toLowerCase().includes(w.toString().toLowerCase())&&(r=!0)})),r||(t=!1),t}))??[]),[S.data,w]),ticketsQuery:S,ticketQuery:I,currentId:b,setCurrentId:x,drawerOpen:g,drawerActions:m,drawerWidth:j,search:w,setSearch:f,messageInput:k,setMessageInput:v,handleOnSend:async()=>{if(""!==k.trim())try{await _({id:b,message:k}).unwrap(),a(i("notice::send-message",{context:"success"}),{variant:"success"}),v(""),C(null)}catch(e){a(i("notice::send-message",{context:"failed"}),{variant:"error"}),C(e.message)}else a(i("notice::send-message",{context:"empty"}),{variant:"warning"})},errorMessage:y}}));e("T",je);var Ie=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ie||{}),_e=(e=>(e[e.Replied=0]="Replied",e[e.Pending=1]="Pending",e))(_e||{}),Be=(e=>(e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High",e))(Be||{});const Me={0:"low",1:"medium",2:"high"},Ne=me()((e=>({listItemButton:{paddingLeft:e.spacing(1)},text:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},iconAvatar:{width:e.spacing(4.5),height:e.spacing(4.5),fontSize:"1rem"}}))),Le=()=>{const{t:e}=l(),a=r(),{tickets:i,currentId:c,setCurrentId:o}=Se(),{classes:d,css:S,cx:I}=Ne(),_=s(),B=u.useCallback(((t,r)=>{const n=p().diff(p.unix(t),"second");switch(!0){case n<60:return e(r,{context:"just_now"});case n<3600:return e(r,{context:"minute",count:p().diff(p.unix(t),"minute")});case n<86400:return e(r,{context:"hour",count:p().diff(p.unix(t),"hour")});case n<2592e3:return e(r,{context:"day",count:p().diff(p.unix(t),"day")});case n<31536e3:return e(r,{context:"month",count:p().diff(p.unix(t),"month")});default:return e(r,{context:"year",count:p().diff(p.unix(t),"year")})}}),[e]),M=u.useCallback((e=>{switch(e){case Be.Low:default:return S({color:a.palette.success.main,backgroundColor:a.palette.success.lighter});case Be.Medium:return S({color:a.palette.warning.main,backgroundColor:a.palette.warning.lighter});case Be.High:return S({color:a.palette.error.main,backgroundColor:a.palette.error.lighter})}}),[a.palette,S]);return n(h,{component:"nav",children:i.map((r=>n(g,{disablePadding:!0,divider:!0,children:m(b,{className:d.listItemButton,selected:r.id===c,onClick:()=>{o(r.id),_(`/ticket/${r.id}`)},children:[n(x,{children:n(w,{className:I(M(r.level),d.iconAvatar),children:r.reply_status===_e.Replied?n(f,{}):n(k,{})})}),n(v,{primary:m(y,{component:"span",direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[n(C,{variant:"h5",color:"inherit",className:d.text,children:r.subject}),n(C,{component:"span",color:"textSecondary",variant:"caption",children:e("ticket.drawer.reply_status",{context:r.status===Ie.Closed?"closed":r.reply_status===_e.Replied?"replied":"pending"})})]}),secondary:m(y,{component:"span",direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[n(C,{variant:"caption",color:"textSecondary",className:d.text,children:B(r.updated_at,"ticket.drawer.updated_at")}),r.status===Ie.Open?n(t,{color:"primary"}):n(j,{style:{color:a.palette.primary.main}})]})})]})},r.id)))})},Oe=me()((e=>({root:{padding:e.spacing(2,0),backgroundColor:"transparent"}}))),Re=()=>{const{t:e}=l(),[t,{set:r}]=d(!1),[a]=be(),{classes:i}=Oe(),c=u.useCallback((async(e,{setSubmitting:t,setStatus:n,setErrors:i})=>{t(!0);try{await a(e).unwrap(),r(!1),n({success:!0})}catch(c){n({success:!1}),i(c.errors||{submit:c.message})}finally{t(!1)}}),[]);return m(S,{children:[n(I,{onClick:()=>r(!0),children:n(_,{})}),m(B,{open:t,onClose:()=>r(!1),fullWidth:!0,children:[n(M,{children:e("ticket.drawer.create_dialog.title")}),n(N,{initialValues:{subject:"",message:"",level:Be.Low},validationSchema:L().shape({subject:O().required(e("ticket.drawer.create_dialog.subject",{context:"required"}).toString()),message:O().required(e("ticket.drawer.create_dialog.message",{context:"required"}).toString()),level:O().required(e("ticket.drawer.create_dialog.level",{context:"required"}).toString())}),onSubmit:c,children:({handleSubmit:t,handleBlur:a,handleChange:c,values:o,touched:l,errors:s,submitForm:d,isSubmitting:u,resetForm:p})=>m(S,{children:[n(R,{children:m(y,{component:W,onSubmit:t,className:i.root,spacing:2,children:[n(E,{name:"subject",value:o.subject,onChange:c,onBlur:a,error:l.subject&&Boolean(s.subject),helperText:l.subject&&s.subject,label:e("ticket.drawer.create_dialog.subject",{context:"label"}),fullWidth:!0}),m(z,{fullWidth:!0,children:[n(H,{htmlFor:"level-select",children:e("ticket.drawer.create_dialog.level",{context:"label"})}),n(D,{id:"level-select",name:"level",value:o.level,onChange:c,onBlur:a,error:l.level&&Boolean(s.level),label:e("ticket.drawer.create_dialog.level",{context:"label"}),fullWidth:!0,children:[Be.Low,Be.Medium,Be.High].map((t=>n(T,{component:"option",value:t,children:e("ticket.drawer.create_dialog.level",{context:t})},t)))}),l.level&&s.level&&n(q,{error:l.level&&Boolean(s.level),children:l.level&&s.level})]}),n(E,{name:"message",value:o.message,onChange:c,onBlur:a,error:l.message&&Boolean(s.message),helperText:l.message&&s.message,label:e("ticket.drawer.create_dialog.message",{context:"label"}),rows:4,multiline:!0,fullWidth:!0})]})}),m(A,{children:[n(P,{type:"reset",disabled:u,onClick:()=>{p(),r(!1)},children:e("ticket.drawer.create_dialog.cancel",{context:"button"})}),n(Y,{loading:u,onClick:d,type:"submit",variant:"contained",children:e("ticket.drawer.create_dialog.submit",{context:"button"})})]})]})})]})]})},We=me()(((e,{drawerWidth:t})=>({drawer:{width:t,zIndex:e.zIndex.drawer,[e.breakpoints.up("lg")]:{zIndex:0},display:"flex",flexDirection:"column",flexShrink:0,flexGrow:1},drawerPaper:{width:t,boxSizing:"border-box",position:"relative",border:"none"},mainCard:{[e.breakpoints.down("lg")]:{backgroundColor:"transparent"},borderRadius:e.spacing(.5,0,0,.5),borderRight:"none"},mainCardContainer:{padding:e.spacing(3),paddingBottom:e.spacing(1)},titleChip:{width:20,height:20,borderRadius:"50%","& .MuiChip-label":{padding:e.spacing(.5,0)}},searchInput:{padding:e.spacing(1.3125,0,1.5),color:e.palette.text.primary}}))),Ee=()=>{const{t:e}=l(),t=r(),{drawerWidth:i,drawerOpen:o,drawerActions:{set:s},search:d,setSearch:u,ticketsQuery:{data:p}}=Se(),h=c(t.breakpoints.down("lg")),{classes:g}=We({drawerWidth:i});return n(F,{className:g.drawer,classes:{paper:g.drawerPaper},variant:h?"temporary":"persistent",anchor:"left",open:o,ModalProps:{keepMounted:!0},onClose:()=>s(!1),children:o&&m(xe,{className:g.mainCard,border:!h,content:!1,children:[n(a,{className:g.mainCardContainer,children:m(y,{spacing:2,children:[m(y,{direction:"row",spacing:1,alignItems:"center",justifyContent:"space-between",children:[m(y,{direction:"row",spacing:1,alignItems:"center",children:[n(C,{variant:"h5",color:"inherit",children:e("ticket.drawer.title")}),n(G,{label:p?.filter((e=>e.status===Ie.Open)).length??0,component:"span",color:"secondary",className:g.titleChip})]}),n(y,{direction:"row",alignItems:"center",justifyContent:"flex-end",children:n(Re,{})})]}),n(Q,{fullWidth:!0,id:"input-search-header",placeholder:e("ticket.drawer.search",{context:"placeholder"}).toString(),value:d,onChange:e=>{u(e.target.value)},sx:{"& .MuiOutlinedInput-input":{p:"10.5px 0px 12px",color:"darkgray"}},startAdornment:n($,{position:"start",children:n(V,{style:{fontSize:"small"}})})})]})}),n(we,{sx:{overflowX:"hidden",height:h?"calc(100vh - 120px)":"calc(100vh - 428px)",minHeight:h?0:420},children:n(a,{sx:{p:3,pt:0},children:n(Le,{})})})]})})},ze=()=>{const{t:e}=l(),[t,{set:r}]=d(!1),{enqueueSnackbar:a}=o(),{ticketQuery:{data:i}}=Se(),[c,{isLoading:s}]=fe(),p=u.useCallback((async()=>{if(i)try{await c(i.id).unwrap(),a(e("notice::close-ticket",{context:"success"}),{variant:"success"}),r(!1)}catch(t){a(e("notice::close-ticket",{context:"failed"}),{variant:"error"})}}),[e,i]);return m(S,{children:[n(I,{onClick:()=>r(!0),children:n(X,{})}),m(B,{open:t,onClose:()=>r(!1),children:[n(M,{children:e("ticket.header.close_dialog.title")}),n(R,{children:n(K,{children:e("ticket.header.close_dialog.content")})}),m(A,{children:[n(P,{onClick:()=>r(!1),children:e("ticket.header.close_dialog.cancel-button")}),n(Y,{onClick:p,loading:s,variant:"contained",color:"error",children:e("ticket.header.close_dialog.confirm-button")})]})]})]})},He=me()((e=>({root:{backgroundColor:e.palette.background.paper,paddingRight:e.spacing(2),paddingBottom:e.spacing(2),borderBottom:`1px solid ${e.palette.divider}`}}))),De=()=>{const{t:e}=l(),{drawerOpen:t,drawerActions:{toggle:r},currentId:a,ticketQuery:{data:i,isFetching:c}}=Se(),{classes:o}=He();return m(U,{container:!0,justifyContent:"space-between",className:o.root,children:[n(U,{item:!0,children:m(y,{direction:"row",alignItems:"center",spacing:1,children:[n(I,{onClick:()=>r(),color:"secondary",size:"large",children:n(t?Z:J,{})}),m(y,{children:[n(C,{variant:"subtitle1",children:i&&!c?e("ticket.header.title",{id:i.id,subject:i.subject}):n(ee,{variant:"text",width:200})}),n(C,{variant:"caption",color:"textSecondary",children:i&&!c?e("ticket.header.ticket_level",{context:Me[i.level]}):n(ee,{variant:"text",width:80})})]})]})}),n(U,{item:!0,children:n(y,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:1,children:i?.status===Ie.Open&&n(ze,{})})})]})},Te=me()((e=>({iconButton:{opacity:.5},card:{borderRadius:e.spacing(1)}}))),qe=()=>{const{setMessageInput:e}=Se(),t=r(),[a,i]=u.useState(null),c=u.useMemo((()=>Boolean(a)),[a]),o=()=>{i(null)},{classes:l}=Te();return m(S,{children:[n(I,{ref:a,"aria-describedby":"emoji-selector",onClick:e=>{i(a?null:e?.currentTarget)},className:l.iconButton,size:"medium",color:"secondary",children:n(te,{})}),n(re,{id:"emoji-selector",open:c,anchorEl:a,disablePortal:!0,anchorOrigin:{vertical:"center",horizontal:"right"},onClose:()=>o(),children:n(xe,{elevation:8,content:!1,className:l.card,children:n(ne,{onEmojiClick:t=>{e((e=>e+t.emoji)),o()},lazyLoadEmojis:!0,autoFocusSearch:!0,theme:"dark"===t.palette.mode?ae.DARK:ae.LIGHT,emojiStyle:ie.APPLE,getEmojiUrl:e=>(ke.emojiEndpoint??"https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/{{code}}.png").replace("{{code}}",e)})})})]})},Ae=me()((e=>({root:{backgroundColor:e.palette.background.paper,borderTop:`1px solid ${e.palette.divider}`,padding:e.spacing(2),height:"auto"},textField:{paddingRight:e.spacing(2),"& .MuiInput-root:before":{borderBottomColor:e.palette.divider}}}))),Pe=()=>{const{t:e}=l(),{messageInput:t,setMessageInput:r,handleOnSend:a}=Se(),{classes:i}=Ae(),c=u.useRef(null),o=e=>{"Enter"===e.key&&(e.ctrlKey?r(t+"\n"):a())};return u.useEffect((()=>{c.current&&c.current.addEventListener("keypress",o)}),[c.current]),m(y,{className:i.root,children:[n(E,{inputRef:c,className:i.textField,rows:4,placeholder:e("ticket.input-area.input",{context:"placeholder"}).toString(),value:t,onChange:e=>{let t=e.target.value;r(t)},variant:"standard",fullWidth:!0,multiline:!0}),m(y,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[n(y,{direction:"row",sx:{py:2,ml:-1},children:n(qe,{})}),n(I,{color:"primary",onClick:a,size:"large",sx:{mr:1.5},children:n(ce,{})})]})]})},Ye=me()((e=>({root:{overflowX:"hidden"},rootBox:{paddingLeft:e.spacing(1),paddingRight:e.spacing(3)},userMessageCard:{display:"inline-block",float:"right",bgcolor:e.palette.primary.main,boxShadow:"none"},serverMessageCard:{display:"inline-block",float:"left",backgroundColor:"dark"===e.palette.mode?e.palette.background.paper:e.palette.grey[0],boxShadow:"none"},cardContent:{padding:e.spacing(1.25),paddingBottom:`${e.spacing(1.25)} !important`,width:"fit-content",marginLeft:"auto","& > p":{marginBottom:0}},textBlock:{"& > p":{color:e.palette.primary.contrastText,marginBottom:0}}}))),Fe=()=>{const{t:e}=l(),{classes:t}=Ye(),{enqueueSnackbar:r}=o(),{ticketQuery:{data:i}}=Se(),{data:c}=ve(),s=u.useRef(document.createElement("div")),d=u.useCallback((()=>{s.current.scrollIntoView(!1)}),[s.current]);u.useEffect((()=>{d()}),[i?.message.length,d]);const h=u.useCallback((t=>()=>{window.navigator.clipboard.writeText(t).then((()=>{r(e("notice::copy",{context:"success"}),{variant:"success"})})).catch((t=>{r(e("notice::copy",{context:"error"}),{variant:"error"})}))}),[r,e]),g=({message:e})=>m(y,{direction:"row",spacing:1.25,children:[m(U,{container:!0,spacing:1,justifyContent:"flex-end",children:[n(U,{item:!0,xs:2,md:3,xl:4}),n(U,{item:!0,xs:10,md:9,xl:8,children:m(y,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:1,children:[n(I,{size:"small",onClick:h(e.message),children:n(oe,{})}),n(le,{className:t.userMessageCard,children:n(se,{className:t.cardContent,children:n(de,{children:e.message})})})]})}),n(U,{item:!0,xs:12,children:n(C,{align:"right",variant:"subtitle2",color:"textSecondary",children:p.unix(e.created_at).format("DD/MM/YYYY HH:mm")})})]}),n(ye,{alt:c?.email,src:c?.avatar_url})]}),b=({message:e})=>m(y,{direction:"row",spacing:1.25,alignItems:"flex-start",children:[n(ye,{alt:"server",color:"secondary"}),m(U,{container:!0,children:[n(U,{item:!0,xs:12,sm:7,children:m(y,{direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:1,children:[n(le,{className:t.serverMessageCard,children:n(se,{className:t.cardContent,children:n(de,{children:e.message})})}),n(I,{size:"small",onClick:h(e.message),children:n(oe,{})})]})}),n(U,{item:!0,xs:12,sx:{mt:1},children:n(C,{align:"left",variant:"subtitle2",color:"textSecondary",children:p.unix(e.created_at).format("DD/MM/YYYY HH:mm")})})]})]});return n(we,{className:t.root,children:n(a,{className:t.rootBox,children:n(y,{spacing:2.5,ref:s,direction:"column",children:i?.message.map(((e,t)=>e.is_me?n(g,{message:e},t):n(b,{message:e},t)))})})})},Ge=me()(((e,{drawerOpen:t,drawerWidth:r})=>({root:{transition:e.transitions.create("margin",{easing:t?e.transitions.easing.easeOut:e.transitions.easing.sharp,duration:e.transitions.duration.shorter}),marginLeft:t?0:-r,width:t?`calc(100% - ${r}px)`:"100%",[e.breakpoints.down("lg")]:{paddingLeft:0,marginLeft:0},display:"flex",flexDirection:"column",flexWrap:"wrap",flexGrow:1},mainCard:{backgroundColor:"dark"===e.palette.mode?e.palette.background.paper:e.palette.grey[50],paddingTop:e.spacing(2),borderRadius:e.spacing(0,.5,.5,0),borderLeft:"none",height:"100%"},centerBox:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexGrow:1,height:"100%"}}))),Qe=()=>{const{t:e}=l(),{drawerOpen:t,drawerWidth:r,currentId:i,ticketQuery:{data:c}}=Se(),{classes:o}=Ge({drawerOpen:t,drawerWidth:r});return n(a,{className:o.root,children:n(U,{container:!0,flexGrow:1,children:n(U,{item:!0,xs:12,children:n(xe,{content:!1,className:o.mainCard,children:n(y,{spacing:3,direction:"column",height:"100%",children:0===i?n(a,{className:o.centerBox,children:n(C,{variant:"h5",children:e("ticket.conversation.none_selected")})}):m(S,{children:[n(De,{}),n(a,{flexGrow:1,children:n(Fe,{})}),c?.status===Ie.Open&&n(Pe,{})]})})})})})})};e("a",(()=>m(a,{display:"flex",flexDirection:"row",flexWrap:"nowrap",flexGrow:"1",children:[n(Ee,{}),n(Qe,{})]})))}}}));
