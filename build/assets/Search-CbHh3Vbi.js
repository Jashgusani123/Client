import{u as h,e as x,aY as f,r as a,j as s,S,aZ as j,$ as g}from"./index-BmBvUYam.js";import{a as I}from"./index-DjVLi6pA.js";import{Search as F}from"@mui/icons-material";import{u as v}from"./hook-BfoxiVHU.js";import{U as R}from"./UserItem-CMUskLN-.js";import{D as T,a as U}from"./DialogTitle-DK4wOqc_.js";import{T as q}from"./TextField-C9k3Krci.js";import{I as y}from"./InputAdornment-BTw7Fg-6.js";import{b as A}from"./Menu-v_V5_JOT.js";import"./ListItem-8HR17T2P.js";import"./isMuiElement-D6y26tg6.js";import"./Avatar-vsw6e8ON.js";import"./Typography-CKxAtiXl.js";const Q=()=>{const t=I(),n=h(),{isSearch:o}=x(e=>e.misc),[i]=f(),[c,d]=v(j),[l,m]=a.useState([]),u=async e=>{await c("Sending Friend Request..",{userId:e})},p=()=>n(g(!1));return a.useEffect(()=>{const e=setTimeout(()=>{i(t.value||"").then(({data:r})=>m(r.user)).catch(r=>console.log(r))},1e3);return()=>{clearTimeout(e)}},[t.value]),s.jsx(T,{open:o,onClose:p,children:s.jsxs(S,{p:"2rem",direction:"column",width:"25rem",children:[s.jsx(U,{textAlign:"center",children:"Find People"}),s.jsx(q,{label:"",value:t.value||"",onChange:t.changeHandler,variant:"outlined",size:"small",InputProps:{startAdornment:s.jsx(y,{position:"start",children:s.jsx(F,{})})}}),s.jsx(A,{children:l.map(e=>s.jsx(R,{user:e,handler:u,handlerLoding:d},e._id))})]})})};export{Q as default};
