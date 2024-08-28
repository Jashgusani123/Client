import { Avatar, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Adminlayout from "../../Components/layout/Adminlayout";
import AvatarCard from "../../Components/shared/AvatarCard";
import Table from "../../Components/shared/Table";
import { DashBoardData } from "../../Constants/SempleChats";
import { transformImage } from "../../lib/Features";
const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => <AvatarCard avatara={params.row.avatar} />,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 300,
  },
  {
    field: "totalMembers",
    headerName: "Total Memners",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "members",
    headerName: "Memebers",
    headerClassName: "table-header",
    width: 400,
    renderCell: (params) => (
      <AvatarCard mx={100} avatara={params.row.members} />
    ),
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClassName: "table-header",
    width: 250,
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
        <span>{params.row.creator.name}</span>
      </Stack>
    ),
  },
];

const ChatManagement = () => {
  const [rows, setrows] = useState([]);

  useEffect(() => {
    setrows(DashBoardData.chats.map((i) => ({
      ...i,
      id: i._id,
      avatar:i.avatar.map((i)=>transformImage(i,50)),
      members:i.members.map((i)=>transformImage(i.avatar,50)),
      creator:{
        name:i.creator.name,
        avatar:transformImage(i.creator.avatar , 50)
      }
    })))
      
    
  }, []);

  return (
    <Adminlayout>
      <Table heading={"All Chats"} rows={rows} columns={columns} />
    </Adminlayout>
  );
};

export default ChatManagement;
