import{M as x,ak as p,e as j,r as u,j as s,am as g,G as t,g as b,u as f,aM as k,S as a,m as M,aN as C}from"./index-BmBvUYam.js";import{Close as w,Menu as y,ExitToApp as A,Dashboard as L,ManageAccounts as S,Group as T,Message as v}from"@mui/icons-material";import{B as D,T as B,D as I}from"./hook-BfoxiVHU.js";import{I as E}from"./index-DjVLi6pA.js";import{T as c}from"./Typography-CKxAtiXl.js";const m=x(p)`
    text-decoration:none;
    border-radius:2rem;
    padding:1rem 2rem;
    color:black;
    &:hover:{
        color:rgba(0,0,0,0.54);
    }

`,G=[{name:"Dashboard",path:"/admin/dashboard",icon:s.jsx(L,{})},{name:"Users",path:"/admin/user",icon:s.jsx(S,{})},{name:"Chats",path:"/admin/chat",icon:s.jsx(T,{})},{name:"Messages",path:"/admin/message",icon:s.jsx(v,{})}],l=({w:r})=>{const i=f(),o=k(),n=()=>{i(C())};return s.jsxs(a,{width:r,spacing:"3rem",direction:"column",p:"3rem",children:[s.jsx(c,{variant:"h5",textTransform:"uppercase",children:"Chat App"}),s.jsxs(a,{spacing:"1rem",children:[G.map(e=>s.jsx(m,{component:m,to:e.path,sx:o.pathname===e.path?{bgcolor:M,color:"white"}:{color:"inherit"},children:s.jsxs(a,{direction:"row",alignItems:"center",spacing:"1rem",children:[e.icon,s.jsx(c,{fontSize:"1.2rem",children:e.name})]})},e.path)),s.jsx(m,{onClick:n,children:s.jsxs(a,{direction:"row",alignItems:"center",spacing:"1rem",children:[s.jsx(A,{}),s.jsx(c,{children:"Logout"})]})})]})]})},$=({children:r})=>{const{isAdmin:i}=j(h=>h.auth),[o,n]=u.useState(!1),e=()=>{n(!o)},d=()=>{n(!1)};return i?s.jsxs(t,{container:!0,minHeight:"100vh",children:[s.jsx(D,{sx:{display:{xs:"block",md:"none"},position:"fixed",right:"1rem",top:"1rem"},children:s.jsx(B,{title:"Menu",children:s.jsx(E,{onClick:e,children:o?s.jsx(w,{}):s.jsx(y,{})})})}),s.jsx(t,{item:!0,md:4,lg:3,sx:{display:{xs:"none",md:"block"}},children:s.jsx(l,{})}),s.jsx(t,{item:!0,xs:12,md:8,lg:9,sx:{bgcolor:b},children:r}),s.jsx(I,{open:o,onClose:d,children:s.jsx(l,{w:"80vw"})})]}):s.jsx(g,{to:"/admin"})};export{$ as A};
