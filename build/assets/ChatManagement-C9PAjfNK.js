import{r as d,Y as m,j as e,A as n,S as c,a4 as p}from"./index-BmBvUYam.js";import{d as f}from"./index-DjVLi6pA.js";import{A as w}from"./Adminlayout-Hh78gLOe.js";import{A as i}from"./AvatarCard-afY2Tilm.js";import{T as N}from"./Table-Dxri5Kwr.js";import{a as b}from"./hook-BfoxiVHU.js";import{A as v}from"./Avatar-vsw6e8ON.js";import"@mui/icons-material";import"./Typography-CKxAtiXl.js";import"./Menu-v_V5_JOT.js";import"./Container-BLdifuCd.js";import"./TextField-C9k3Krci.js";import"./isMuiElement-D6y26tg6.js";import"./Toolbar-Dix1PW1-.js";import"./MenuItem-XPjFVzgt.js";import"./Button-DHZJ6Cwx.js";import"./InputAdornment-BTw7Fg-6.js";import"./CircularProgress-B59hGHVX.js";const C=[{field:"id",headerName:"ID",headerClassName:"table-header",width:200},{field:"avatar",headerName:"Avatar",headerClassName:"table-header",width:150,renderCell:a=>e.jsx(i,{avatara:a.row.avatar})},{field:"name",headerName:"Name",headerClassName:"table-header",width:300},{field:"groupChat",headerName:"Group",headerClassName:"table-header",width:100},{field:"totalMembers",headerName:"Total Memners",headerClassName:"table-header",width:120},{field:"members",headerName:"Memebers",headerClassName:"table-header",width:400,renderCell:a=>e.jsx(i,{mx:100,avatara:a.row.members})},{field:"totalMessages",headerName:"Total Messages",headerClassName:"table-header",width:120},{field:"creator",headerName:"Created By",headerClassName:"table-header",width:250,renderCell:a=>e.jsxs(c,{direction:"row",alignItems:"center",spacing:"1rem",children:[e.jsx(v,{alt:a.row.creator.name,src:a.row.creator.avatar}),e.jsx("span",{children:a.row.creator.name})]})}],_=()=>{const{loading:a,data:t,error:o}=f(`${p}/api/v1/admin/chats`,"dashbord-chats");b([{isError:o,error:o}]);const[h,l]=d.useState([]);return d.useEffect(()=>{t&&t.chats&&l(t.chats.map(r=>({...r,id:r._id,avatar:r.avatar.map(s=>m(s,50)),members:r.memebrs.map(s=>m(s.avatar,50)),creator:{name:r.creator.name,avatar:m(r.creator.avatar,50)}})))},[t]),e.jsx(w,{children:a?e.jsx(n,{width:"100vh"}):e.jsx(N,{heading:"All Chats",rows:h,columns:C})})};export{_ as default};