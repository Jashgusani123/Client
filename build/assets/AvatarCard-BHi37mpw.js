import{K as U,J as _,M as w,O as c,r as l,P as L,Q as k,j as e,R as A,U as B,S as D,Y as I}from"./index-MwKyM0NC.js";import"./Menu-Dg8ucpFe.js";import{a as V,A as M}from"./Avatar-DQRrgh-w.js";import{B as z}from"./hook-DI4cddH2.js";function J(s){return _("MuiAvatarGroup",s)}const K=U("MuiAvatarGroup",["root","avatar"]),O=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],G={small:-16,medium:null},Q=s=>{const{classes:a}=s;return B({root:["root"],avatar:["avatar"]},J,a)},W=w("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,a)=>c({[`& .${K.avatar}`]:a.avatar},a.root)})(({theme:s,ownerState:a})=>{const t=a.spacing&&G[a.spacing]!==void 0?G[a.spacing]:-a.spacing;return{[`& .${V.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:t??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),Y=l.forwardRef(function(a,t){var r;const p=L({props:a,name:"MuiAvatarGroup"}),{children:j,className:N,component:g="div",componentsProps:$={},max:m=5,renderSurplus:f,slotProps:b={},spacing:y="medium",total:E,variant:u="circular"}=p,R=k(p,O);let o=m<2?2:m;const P=c({},p,{max:m,spacing:y,component:g,variant:u}),d=Q(P),v=l.Children.toArray(j).filter(n=>l.isValidElement(n)),i=E||v.length;i===o&&(o+=1),o=Math.min(i+1,o);const C=Math.min(v.length,o-1),x=Math.max(i-o,i-C,0),S=f?f(x):`+${x}`,h=(r=b.additionalAvatar)!=null?r:$.additionalAvatar;return e.jsxs(W,c({as:g,ownerState:P,className:A(d.root,N),ref:t},R,{children:[x?e.jsx(M,c({variant:u},h,{className:A(d.avatar,h==null?void 0:h.className),children:S})):null,v.slice(0,C).reverse().map(n=>l.cloneElement(n,{className:A(n.props.className,d.avatar),variant:n.props.variant||u}))]}))}),X=({avatara:s=[],max:a=4})=>(l.useEffect(()=>{},[s]),e.jsx(D,{direction:"row",spacing:1,sx:{position:"relative"},children:e.jsx(Y,{max:a,children:e.jsx(z,{width:"5rem",height:"3rem",children:s.map((t,r)=>e.jsx(M,{src:I(t),alt:`Avatar ${r}`,sx:{width:"3rem",height:"3rem",position:"absolute",left:{xs:`${.5+r}rem`,sm:`${r}rem`}}},Math.random()*100))})})}));export{X as A};
