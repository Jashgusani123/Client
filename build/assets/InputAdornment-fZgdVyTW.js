import{K as y,J as C,M as I,O as c,r as b,P as A,Q as j,j as a,R as L,N as m,U as R}from"./index-MwKyM0NC.js";import{u as z,d as M}from"./TextField-GNfoWh2K.js";import{T as N}from"./Typography-DTs5yARX.js";function T(n){return C("MuiInputAdornment",n)}const f=y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var x;const U=["children","className","component","disablePointerEvents","disableTypography","position","variant"],$=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},F=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:o,position:s,size:r,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return R(d,T,t)},_=I("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:$})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),H=b.forwardRef(function(t,e){const o=A({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:g=!1,position:u,variant:v}=o,P=j(o,U),i=z()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const h=c({},o,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),E=F(h);return a.jsx(M.Provider,{value:null,children:a.jsx(_,c({as:l,ownerState:h,className:L(E.root,r),ref:e},P,{children:typeof s=="string"&&!g?a.jsx(N,{color:"text.secondary",children:s}):a.jsxs(b.Fragment,{children:[u==="start"?x||(x=a.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})});export{H as I};
