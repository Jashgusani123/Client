import{K as N,J as E,M as O,O as o,r as d,P as w,Q as $,j as l,R as I,U as D,ay as x}from"./index-BmBvUYam.js";import{L}from"./Menu-v_V5_JOT.js";import{p as Z,h as tt,l as _,j as et}from"./index-DjVLi6pA.js";import{i as st}from"./isMuiElement-D6y26tg6.js";function ot(t){return E("MuiListItem",t)}const b=N("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),at=N("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function nt(t){return E("MuiListItemSecondaryAction",t)}N("MuiListItemSecondaryAction",["root","disableGutters"]);const it=["className"],rt=t=>{const{disableGutters:e,classes:s}=t;return D({root:["root",e&&"disableGutters"]},nt,s)},ct=O("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),T=d.forwardRef(function(e,s){const a=w({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=a,i=$(a,it),p=d.useContext(L),u=o({},a,{disableGutters:p.disableGutters}),g=rt(u);return l.jsx(ct,o({className:I(g.root,n),ownerState:u,ref:s},i))});T.muiName="ListItemSecondaryAction";const lt=["className"],dt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],pt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},ut=t=>{const{alignItems:e,button:s,classes:a,dense:n,disabled:i,disableGutters:p,disablePadding:u,divider:g,hasSecondaryAction:f,selected:A}=t;return D({root:["root",n&&"dense",!p&&"gutters",!u&&"padding",g&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",A&&"selected"],container:["container"]},ot,a)},mt=O("div",{name:"MuiListItem",slot:"Root",overridesResolver:pt})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${at.root}`]:{paddingRight:48}},{[`&.${b.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${b.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${b.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),bt=O("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Ct=d.forwardRef(function(e,s){const a=w({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:p=!1,children:u,className:g,component:f,components:A={},componentsProps:G={},ContainerComponent:M="li",ContainerProps:{className:z}={},dense:j=!1,disabled:h=!1,disableGutters:P=!1,disablePadding:H=!1,divider:J=!1,focusVisibleClassName:K,secondaryAction:k,selected:Q=!1,slotProps:W={},slots:Y={}}=a,q=$(a.ContainerProps,lt),X=$(a,dt),V=d.useContext(L),R=d.useMemo(()=>({dense:j||V.dense||!1,alignItems:n,disableGutters:P}),[n,V.dense,j,P]),S=d.useRef(null);Z(()=>{i&&S.current&&S.current.focus()},[i]);const m=d.Children.toArray(u),B=m.length&&st(m[m.length-1],["ListItemSecondaryAction"]),y=o({},a,{alignItems:n,autoFocus:i,button:p,dense:R.dense,disabled:h,disableGutters:P,disablePadding:H,divider:J,hasSecondaryAction:B,selected:Q}),F=ut(y),U=tt(S,s),C=Y.root||A.Root||mt,v=W.root||G.root||{},r=o({className:I(F.root,v.className,g),disabled:h},X);let c=f||"li";return p&&(r.component=f||"div",r.focusVisibleClassName=I(b.focusVisible,K),c=et),B?(c=!r.component&&!f?"div":c,M==="li"&&(c==="li"?c="div":r.component==="li"&&(r.component="div")),l.jsx(L.Provider,{value:R,children:l.jsxs(bt,o({as:M,className:I(F.container,z),ref:U,ownerState:y},q,{children:[l.jsx(C,o({},v,!_(C)&&{as:c,ownerState:o({},y,v.ownerState)},r,{children:m})),m.pop()]}))})):l.jsx(L.Provider,{value:R,children:l.jsxs(C,o({},v,{as:c,ref:U},!_(C)&&{ownerState:o({},y,v.ownerState)},r,{children:[m,k&&l.jsx(T,{children:k})]}))})});export{Ct as L};
