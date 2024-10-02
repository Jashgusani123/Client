import{K as $,J as R,r as p,M as u,N as c,O as i,P as S,aE as Q,Q as j,j as n,R as h,U as w}from"./index-MwKyM0NC.js";import{B as V,M as q,P as N,e as G,J as Z}from"./index-qMaLzmVy.js";import{T as oo}from"./Typography-DTs5yARX.js";function ao(a){return R("MuiDialog",a)}const C=$("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),F=p.createContext({}),eo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ro=u(V,{name:"MuiDialog",slot:"Backdrop",overrides:(a,o)=>o.backdrop})({zIndex:-1}),io=a=>{const{classes:o,scroll:e,maxWidth:r,fullWidth:l,fullScreen:t}=a,d={root:["root"],container:["container",`scroll${c(e)}`],paper:["paper",`paperScroll${c(e)}`,`paperWidth${c(String(r))}`,l&&"paperFullWidth",t&&"paperFullScreen"]};return w(d,ao,o)},to=u(q,{name:"MuiDialog",slot:"Root",overridesResolver:(a,o)=>o.root})({"@media print":{position:"absolute !important"}}),lo=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(a,o)=>{const{ownerState:e}=a;return[o.container,o[`scroll${c(e.scroll)}`]]}})(({ownerState:a})=>i({height:"100%","@media print":{height:"auto"},outline:0},a.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},a.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),so=u(N,{name:"MuiDialog",slot:"Paper",overridesResolver:(a,o)=>{const{ownerState:e}=a;return[o.paper,o[`scrollPaper${c(e.scroll)}`],o[`paperWidth${c(String(e.maxWidth))}`],e.fullWidth&&o.paperFullWidth,e.fullScreen&&o.paperFullScreen]}})(({theme:a,ownerState:o})=>i({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:a.breakpoints.unit==="px"?Math.max(a.breakpoints.values.xs,444):`max(${a.breakpoints.values.xs}${a.breakpoints.unit}, 444px)`,[`&.${C.paperScrollBody}`]:{[a.breakpoints.down(Math.max(a.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:`${a.breakpoints.values[o.maxWidth]}${a.breakpoints.unit}`,[`&.${C.paperScrollBody}`]:{[a.breakpoints.down(a.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${C.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),go=p.forwardRef(function(o,e){const r=S({props:o,name:"MuiDialog"}),l=Q(),t={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{"aria-describedby":d,"aria-labelledby":m,BackdropComponent:g,BackdropProps:b,children:U,className:A,disableEscapeKeyDown:y=!1,fullScreen:E=!1,fullWidth:I=!1,maxWidth:L="sm",onBackdropClick:v,onClick:P,onClose:f,open:M,PaperComponent:_=N,PaperProps:T={},scroll:K="paper",TransitionComponent:X=Z,transitionDuration:B=t,TransitionProps:Y}=r,z=j(r,eo),x=i({},r,{disableEscapeKeyDown:y,fullScreen:E,fullWidth:I,maxWidth:L,scroll:K}),k=io(x),D=p.useRef(),H=s=>{D.current=s.target===s.currentTarget},J=s=>{P&&P(s),D.current&&(D.current=null,v&&v(s),f&&f(s,"backdropClick"))},W=G(m),O=p.useMemo(()=>({titleId:W}),[W]);return n.jsx(to,i({className:h(k.root,A),closeAfterTransition:!0,components:{Backdrop:ro},componentsProps:{backdrop:i({transitionDuration:B,as:g},b)},disableEscapeKeyDown:y,onClose:f,open:M,ref:e,onClick:J,ownerState:x},z,{children:n.jsx(X,i({appear:!0,in:M,timeout:B,role:"presentation"},Y,{children:n.jsx(lo,{className:h(k.container),onMouseDown:H,ownerState:x,children:n.jsx(so,i({as:_,elevation:24,role:"dialog","aria-describedby":d,"aria-labelledby":W},T,{className:h(k.paper,T.className),ownerState:x,children:n.jsx(F.Provider,{value:O,children:U})}))})}))}))});function no(a){return R("MuiDialogTitle",a)}const bo=$("MuiDialogTitle",["root"]),po=["className","id"],co=a=>{const{classes:o}=a;return w({root:["root"]},no,o)},uo=u(oo,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(a,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),fo=p.forwardRef(function(o,e){const r=S({props:o,name:"MuiDialogTitle"}),{className:l,id:t}=r,d=j(r,po),m=r,g=co(m),{titleId:b=t}=p.useContext(F);return n.jsx(uo,i({component:"h2",className:h(g.root,l),ownerState:m,ref:e,variant:"h6",id:t??b},d))});export{go as D,fo as a,bo as d};
