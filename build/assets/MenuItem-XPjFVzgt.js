import{K as M,J as T,M as w,O as r,r as u,P as B,Q as U,j as f,R as O,U as V,az as F,ay as C}from"./index-BmBvUYam.js";import{L as P}from"./Menu-v_V5_JOT.js";import{T as I}from"./Typography-CKxAtiXl.js";import{j as G,p as _,h as E}from"./index-DjVLi6pA.js";function te(e){return T("MuiDivider",e)}const N=M("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);function se(e){return T("MuiListItemIcon",e)}const j=M("MuiListItemIcon",["root","alignItemsFlexStart"]);function S(e){return T("MuiListItemText",e)}const $=M("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),W=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],z=e=>{const{classes:t,inset:s,primary:a,secondary:l,dense:d}=e;return V({root:["root",s&&"inset",d&&"dense",a&&l&&"multiline"],primary:["primary"],secondary:["secondary"]},S,t)},H=w("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[{[`& .${$.primary}`]:t.primary},{[`& .${$.secondary}`]:t.secondary},t.root,s.inset&&t.inset,s.primary&&s.secondary&&t.multiline,s.dense&&t.dense]}})(({ownerState:e})=>r({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),ae=u.forwardRef(function(t,s){const a=B({props:t,name:"MuiListItemText"}),{children:l,className:d,disableTypography:o=!1,inset:v=!1,primary:c,primaryTypographyProps:y,secondary:L,secondaryTypographyProps:b}=a,R=U(a,W),{dense:x}=u.useContext(P);let i=c??l,n=L;const p=r({},a,{disableTypography:o,inset:v,primary:!!i,secondary:!!n,dense:x}),m=z(p);return i!=null&&i.type!==I&&!o&&(i=f.jsx(I,r({variant:x?"body2":"body1",className:m.primary,component:y!=null&&y.variant?void 0:"span",display:"block"},y,{children:i}))),n!=null&&n.type!==I&&!o&&(n=f.jsx(I,r({variant:"body2",className:m.secondary,color:"text.secondary",display:"block"},b,{children:n}))),f.jsxs(H,r({className:O(m.root,d),ownerState:p,ref:s},R,{children:[i,n]}))});function A(e){return T("MuiMenuItem",e)}const g=M("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),J=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],K=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},Q=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:d,classes:o}=e,c=V({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",d&&"selected"]},A,o);return r({},o,c)},q=w(G,{shouldForwardProp:e=>F(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:K})(({theme:e,ownerState:t})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:C(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${g.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:C(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${g.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:C(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:C(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${g.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${g.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${N.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${N.inset}`]:{marginLeft:52},[`& .${$.root}`]:{marginTop:0,marginBottom:0},[`& .${$.inset}`]:{paddingLeft:36},[`& .${j.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${j.root} svg`]:{fontSize:"1.25rem"}}))),oe=u.forwardRef(function(t,s){const a=B({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:d="li",dense:o=!1,divider:v=!1,disableGutters:c=!1,focusVisibleClassName:y,role:L="menuitem",tabIndex:b,className:R}=a,x=U(a,J),i=u.useContext(P),n=u.useMemo(()=>({dense:o||i.dense||!1,disableGutters:c}),[i.dense,o,c]),p=u.useRef(null);_(()=>{l&&p.current&&p.current.focus()},[l]);const m=r({},a,{dense:n.dense,divider:v,disableGutters:c}),h=Q(a),D=E(p,s);let k;return a.disabled||(k=b!==void 0?b:-1),f.jsx(P.Provider,{value:n,children:f.jsx(q,r({ref:D,role:L,tabIndex:k,component:d,focusVisibleClassName:O(h.focusVisible,y),className:O(h.root,R)},x,{ownerState:m,classes:h}))})});export{ae as L,oe as M,se as a,te as g};