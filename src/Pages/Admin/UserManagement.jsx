import React, { useState, useEffect } from "react";
import Adminlayout from "../../Components/layout/Adminlayout";
import Table from "../../Components/shared/Table";
import { Avatar } from "@mui/material";
import { DashBoardData } from '../../Constants/SempleChats';
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
    renderCell: (params) => <Avatar alt={params.row.name} src={params.row.avatar} />,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "username",
    headerName: "UserName",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "groups",
    headerName: "Groups",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "joind",
    headerName: "Joind",
    headerClassName: "table-header",
    width: 200,
  },
];

const UserManagement = () => {
  const [rows, setrows] = useState([]);

  useEffect(() => {
    // Ensure DashBoardData.users is an array and each user has the necessary properties
    if (Array.isArray(DashBoardData.users)) {
      setrows(DashBoardData.users.map((i) => ({
        ...i,
        id: i._id,
        avatar: transformImage(i.avatar, 50),
      })));
    }
  }, []);

  return (
    <Adminlayout>
      <Table heading={"All Users"} rows={rows} columns={columns} />
    </Adminlayout>
  );
};

export default UserManagement;
