import{J as ee,K as te,M as K,N as X,r,P as oe,Q as j,O as w,j as I,R as G,U as ne,az as Ge}from"./index-MwKyM0NC.js";import{p as qe,z as Je,o as Y,h as De,M as Qe,P as Xe,r as Ie,t as Ye,v as Z,l as Ze,G as et,k as tt}from"./index-qMaLzmVy.js";function ot(e){return ee("MuiSvgIcon",e)}te("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const nt=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],rt=e=>{const{color:t,fontSize:o,classes:c}=e,n={root:["root",t!=="inherit"&&`color${X(t)}`,`fontSize${X(o)}`]};return ne(n,ot,c)},st=K("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="inherit"&&t[`color${X(o.color)}`],t[`fontSize${X(o.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var o,c,n,y,p,l,u,h,b,m,x,g,R;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=e.transitions)==null||(c=o.create)==null?void 0:c.call(o,"fill",{duration:(n=e.transitions)==null||(n=n.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((y=e.typography)==null||(p=y.pxToRem)==null?void 0:p.call(y,20))||"1.25rem",medium:((l=e.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((h=e.typography)==null||(b=h.pxToRem)==null?void 0:b.call(h,35))||"2.1875rem"}[t.fontSize],color:(m=(x=(e.vars||e).palette)==null||(x=x[t.color])==null?void 0:x.main)!=null?m:{action:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.active,disabled:(R=(e.vars||e).palette)==null||(R=R.action)==null?void 0:R.disabled,inherit:void 0}[t.color]}}),ye=r.forwardRef(function(t,o){const c=oe({props:t,name:"MuiSvgIcon"}),{children:n,className:y,color:p="inherit",component:l="svg",fontSize:u="medium",htmlColor:h,inheritViewBox:b=!1,titleAccess:m,viewBox:x="0 0 24 24"}=c,g=j(c,nt),R=r.isValidElement(n)&&n.type==="svg",_=w({},c,{color:p,component:l,fontSize:u,instanceFontSize:t.fontSize,inheritViewBox:b,viewBox:x,hasSvgAsChild:R}),P={};b||(P.viewBox=x);const a=rt(_);return I.jsxs(st,w({as:l,className:G(a.root,y),focusable:"false",color:h,"aria-hidden":m?void 0:!0,role:m?"img":void 0,ref:o},P,g,R&&n.props,{ownerState:_,children:[R?n.props.children:n,m?I.jsx("title",{children:m}):null]}))});ye.muiName="SvgIcon";function kt(e,t){function o(c,n){return I.jsx(ye,w({"data-testid":`${t}Icon`,ref:n},c,{children:e}))}return o.muiName=ye.muiName,r.memo(r.forwardRef(o))}var i={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=Symbol.for("react.element"),Se=Symbol.for("react.portal"),re=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),ae=Symbol.for("react.context"),it=Symbol.for("react.server_context"),ce=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),lt=Symbol.for("react.offscreen"),Ne;Ne=Symbol.for("react.module.reference");function T(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Pe:switch(e=e.type,e){case re:case ie:case se:case ue:case pe:return e;default:switch(e=e&&e.$$typeof,e){case it:case ae:case ce:case de:case fe:case le:return e;default:return t}}case Se:return t}}}i.ContextConsumer=ae;i.ContextProvider=le;i.Element=Pe;i.ForwardRef=ce;i.Fragment=re;i.Lazy=de;i.Memo=fe;i.Portal=Se;i.Profiler=ie;i.StrictMode=se;i.Suspense=ue;i.SuspenseList=pe;i.isAsyncMode=function(){return!1};i.isConcurrentMode=function(){return!1};i.isContextConsumer=function(e){return T(e)===ae};i.isContextProvider=function(e){return T(e)===le};i.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pe};i.isForwardRef=function(e){return T(e)===ce};i.isFragment=function(e){return T(e)===re};i.isLazy=function(e){return T(e)===de};i.isMemo=function(e){return T(e)===fe};i.isPortal=function(e){return T(e)===Se};i.isProfiler=function(e){return T(e)===ie};i.isStrictMode=function(e){return T(e)===se};i.isSuspense=function(e){return T(e)===ue};i.isSuspenseList=function(e){return T(e)===pe};i.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===re||e===ie||e===se||e===ue||e===pe||e===lt||typeof e=="object"&&e!==null&&(e.$$typeof===de||e.$$typeof===fe||e.$$typeof===le||e.$$typeof===ae||e.$$typeof===ce||e.$$typeof===Ne||e.getModuleId!==void 0)};i.typeOf=T;const at=r.createContext({});function ct(e){return ee("MuiList",e)}te("MuiList",["root","padding","dense","subheader"]);const ut=["children","className","component","dense","disablePadding","subheader"],pt=e=>{const{classes:t,disablePadding:o,dense:c,subheader:n}=e;return ne({root:["root",!o&&"padding",c&&"dense",n&&"subheader"]},ct,t)},ft=K("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})(({ownerState:e})=>w({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),dt=r.forwardRef(function(t,o){const c=oe({props:t,name:"MuiList"}),{children:n,className:y,component:p="ul",dense:l=!1,disablePadding:u=!1,subheader:h}=c,b=j(c,ut),m=r.useMemo(()=>({dense:l}),[l]),x=w({},c,{component:p,dense:l,disablePadding:u}),g=pt(x);return I.jsx(at.Provider,{value:m,children:I.jsxs(ft,w({as:p,className:G(g.root,y),ref:o,ownerState:x},b,{children:[h,n]}))})}),ht=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function ge(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function _e(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function Oe(e,t){if(t===void 0)return!0;let o=e.innerText;return o===void 0&&(o=e.textContent),o=o.trim().toLowerCase(),o.length===0?!1:t.repeating?o[0]===t.keys[0]:o.indexOf(t.keys.join(""))===0}function V(e,t,o,c,n,y){let p=!1,l=n(e,t,t?o:!1);for(;l;){if(l===e.firstChild){if(p)return!1;p=!0}const u=c?!1:l.disabled||l.getAttribute("aria-disabled")==="true";if(!l.hasAttribute("tabindex")||!Oe(l,y)||u)l=n(e,l,o);else return l.focus(),!0}return!1}const mt=r.forwardRef(function(t,o){const{actions:c,autoFocus:n=!1,autoFocusItem:y=!1,children:p,className:l,disabledItemsFocusable:u=!1,disableListWrap:h=!1,onKeyDown:b,variant:m="selectedMenu"}=t,x=j(t,ht),g=r.useRef(null),R=r.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});qe(()=>{n&&g.current.focus()},[n]),r.useImperativeHandle(c,()=>({adjustStyleForScrollbar:(s,{direction:d})=>{const S=!g.current.style.width;if(s.clientHeight<g.current.clientHeight&&S){const M=`${Je(Y(s))}px`;g.current.style[d==="rtl"?"paddingLeft":"paddingRight"]=M,g.current.style.width=`calc(100% + ${M})`}return g.current}}),[]);const _=s=>{const d=g.current,S=s.key,M=Y(d).activeElement;if(S==="ArrowDown")s.preventDefault(),V(d,M,h,u,ge);else if(S==="ArrowUp")s.preventDefault(),V(d,M,h,u,_e);else if(S==="Home")s.preventDefault(),V(d,null,h,u,ge);else if(S==="End")s.preventDefault(),V(d,null,h,u,_e);else if(S.length===1){const f=R.current,z=S.toLowerCase(),D=performance.now();f.keys.length>0&&(D-f.lastTime>500?(f.keys=[],f.repeating=!0,f.previousKeyMatched=!0):f.repeating&&z!==f.keys[0]&&(f.repeating=!1)),f.lastTime=D,f.keys.push(z);const N=M&&!f.repeating&&Oe(M,f);f.previousKeyMatched&&(N||V(d,M,!1,u,ge,f))?s.preventDefault():f.previousKeyMatched=!1}b&&b(s)},P=De(g,o);let a=-1;r.Children.forEach(p,(s,d)=>{if(!r.isValidElement(s)){a===d&&(a+=1,a>=p.length&&(a=-1));return}s.props.disabled||(m==="selectedMenu"&&s.props.selected||a===-1)&&(a=d),a===d&&(s.props.disabled||s.props.muiSkipListHighlight||s.type.muiSkipListHighlight)&&(a+=1,a>=p.length&&(a=-1))});const A=r.Children.map(p,(s,d)=>{if(d===a){const S={};return y&&(S.autoFocus=!0),s.props.tabIndex===void 0&&m==="selectedMenu"&&(S.tabIndex=0),r.cloneElement(s,S)}return s});return I.jsx(dt,w({role:"menu",ref:P,className:l,onKeyDown:_,tabIndex:n?0:-1},x,{children:A}))});function gt(e){return ee("MuiPopover",e)}te("MuiPopover",["root","paper"]);const vt=["onEntering"],yt=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Pt=["slotProps"];function ze(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function ke(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function Fe(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ve(e){return typeof e=="function"?e():e}const St=e=>{const{classes:t}=e;return ne({root:["root"],paper:["paper"]},gt,t)},bt=K(Qe,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),je=K(Xe,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),xt=r.forwardRef(function(t,o){var c,n,y;const p=oe({props:t,name:"MuiPopover"}),{action:l,anchorEl:u,anchorOrigin:h={vertical:"top",horizontal:"left"},anchorPosition:b,anchorReference:m="anchorEl",children:x,className:g,container:R,elevation:_=8,marginThreshold:P=16,open:a,PaperProps:A={},slots:s,slotProps:d,transformOrigin:S={vertical:"top",horizontal:"left"},TransitionComponent:M=et,transitionDuration:f="auto",TransitionProps:{onEntering:z}={},disableScrollLock:D=!1}=p,N=j(p.TransitionProps,vt),he=j(p,yt),k=(c=d==null?void 0:d.paper)!=null?c:A,O=r.useRef(),q=De(O,k.ref),B=w({},p,{anchorOrigin:h,anchorReference:m,elevation:_,marginThreshold:P,externalPaperSlotProps:k,transformOrigin:S,TransitionComponent:M,transitionDuration:f,TransitionProps:N}),J=St(B),Q=r.useCallback(()=>{if(m==="anchorPosition")return b;const v=ve(u),E=(v&&v.nodeType===1?v:Y(O.current).body).getBoundingClientRect();return{top:E.top+ze(E,h.vertical),left:E.left+ke(E,h.horizontal)}},[u,h.horizontal,h.vertical,b,m]),C=r.useCallback(v=>({vertical:ze(v,S.vertical),horizontal:ke(v,S.horizontal)}),[S.horizontal,S.vertical]),H=r.useCallback(v=>{const $={width:v.offsetWidth,height:v.offsetHeight},E=C($);if(m==="none")return{top:null,left:null,transformOrigin:Fe(E)};const $e=Q();let U=$e.top-E.vertical,W=$e.left-E.horizontal;const Re=U+$.height,Ce=W+$.width,Ee=Ie(ve(u)),Te=Ee.innerHeight-P,Le=Ee.innerWidth-P;if(P!==null&&U<P){const L=U-P;U-=L,E.vertical+=L}else if(P!==null&&Re>Te){const L=Re-Te;U-=L,E.vertical+=L}if(P!==null&&W<P){const L=W-P;W-=L,E.horizontal+=L}else if(Ce>Le){const L=Ce-Le;W-=L,E.horizontal+=L}return{top:`${Math.round(U)}px`,left:`${Math.round(W)}px`,transformOrigin:Fe(E)}},[u,m,Q,C,P]),[Ae,be]=r.useState(a),F=r.useCallback(()=>{const v=O.current;if(!v)return;const $=H(v);$.top!==null&&(v.style.top=$.top),$.left!==null&&(v.style.left=$.left),v.style.transformOrigin=$.transformOrigin,be(!0)},[H]);r.useEffect(()=>(D&&window.addEventListener("scroll",F),()=>window.removeEventListener("scroll",F)),[u,D,F]);const He=(v,$)=>{z&&z(v,$),F()},Ke=()=>{be(!1)};r.useEffect(()=>{a&&F()}),r.useImperativeHandle(l,()=>a?{updatePosition:()=>{F()}}:null,[a,F]),r.useEffect(()=>{if(!a)return;const v=Ye(()=>{F()}),$=Ie(u);return $.addEventListener("resize",v),()=>{v.clear(),$.removeEventListener("resize",v)}},[u,a,F]);let xe=f;f==="auto"&&!M.muiSupportAuto&&(xe=void 0);const Ue=R||(u?Y(ve(u)).body:void 0),me=(n=s==null?void 0:s.root)!=null?n:bt,we=(y=s==null?void 0:s.paper)!=null?y:je,We=Z({elementType:we,externalSlotProps:w({},k,{style:Ae?k.style:w({},k.style,{opacity:0})}),additionalProps:{elevation:_,ref:q},ownerState:B,className:G(J.paper,k==null?void 0:k.className)}),Me=Z({elementType:me,externalSlotProps:(d==null?void 0:d.root)||{},externalForwardedProps:he,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:Ue,open:a},ownerState:B,className:G(J.root,g)}),{slotProps:Be}=Me,Ve=j(Me,Pt);return I.jsx(me,w({},Ve,!Ze(me)&&{slotProps:Be,disableScrollLock:D},{children:I.jsx(M,w({appear:!0,in:a,onEntering:He,onExited:Ke,timeout:xe},N,{children:I.jsx(we,w({},We,{children:x}))}))}))});function wt(e){return ee("MuiMenu",e)}te("MuiMenu",["root","paper","list"]);const Mt=["onEntering"],$t=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Rt={vertical:"top",horizontal:"right"},Ct={vertical:"top",horizontal:"left"},Et=e=>{const{classes:t}=e;return ne({root:["root"],paper:["paper"],list:["list"]},wt,t)},Tt=K(xt,{shouldForwardProp:e=>Ge(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Lt=K(je,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),It=K(mt,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Ft=r.forwardRef(function(t,o){var c,n;const y=oe({props:t,name:"MuiMenu"}),{autoFocus:p=!0,children:l,className:u,disableAutoFocusItem:h=!1,MenuListProps:b={},onClose:m,open:x,PaperProps:g={},PopoverClasses:R,transitionDuration:_="auto",TransitionProps:{onEntering:P}={},variant:a="selectedMenu",slots:A={},slotProps:s={}}=y,d=j(y.TransitionProps,Mt),S=j(y,$t),M=tt(),f=w({},y,{autoFocus:p,disableAutoFocusItem:h,MenuListProps:b,onEntering:P,PaperProps:g,transitionDuration:_,TransitionProps:d,variant:a}),z=Et(f),D=p&&!h&&x,N=r.useRef(null),he=(C,H)=>{N.current&&N.current.adjustStyleForScrollbar(C,{direction:M?"rtl":"ltr"}),P&&P(C,H)},k=C=>{C.key==="Tab"&&(C.preventDefault(),m&&m(C,"tabKeyDown"))};let O=-1;r.Children.map(l,(C,H)=>{r.isValidElement(C)&&(C.props.disabled||(a==="selectedMenu"&&C.props.selected||O===-1)&&(O=H))});const q=(c=A.paper)!=null?c:Lt,B=(n=s.paper)!=null?n:g,J=Z({elementType:A.root,externalSlotProps:s.root,ownerState:f,className:[z.root,u]}),Q=Z({elementType:q,externalSlotProps:B,ownerState:f,className:z.paper});return I.jsx(Tt,w({onClose:m,anchorOrigin:{vertical:"bottom",horizontal:M?"right":"left"},transformOrigin:M?Rt:Ct,slots:{paper:q,root:A.root},slotProps:{root:J,paper:Q},open:x,ref:o,transitionDuration:_,TransitionProps:w({onEntering:he},d),ownerState:f},S,{classes:R,children:I.jsx(It,w({onKeyDown:k,actions:N,autoFocus:p&&(O===-1||h),autoFocusItem:D,variant:a},b,{className:G(z.list,b.className),children:l}))}))});export{at as L,Ft as M,mt as a,dt as b,kt as c};
