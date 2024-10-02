import React, { useState, useEffect } from "react";
import Adminlayout from "../../Components/layout/Adminlayout";
import Table from "../../Components/shared/Table";
import { Avatar, Skeleton } from "@mui/material";
import { DashBoardData } from "../../Constants/SempleChats";
import { transformImage } from "../../lib/Features";
import { useFetchData } from "6pp";
import { useErrors } from "../../Hooks/hook";
import { server } from "../../Constants/config";

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
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
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
];

const UserManagement = () => {
  const { loading, data, error } = useFetchData(
    `${server}/api/v1/admin/users`,
    "dashbord-users"
  );

  useErrors([
    {
      isError: error,
      error: error,
    },
  ]);

  const [rows, setrows] = useState([]);

  useEffect(() => {
    if (data) {
      setrows(
        data.users.map((i) => ({
          ...i,
          id: i._id,
          avatar: transformImage(i.avatar, 50),
        }))
      );
    }
  }, [data]);

  return (
    <Adminlayout>
      {loading ? (
        <Skeleton width={"100vh"} />
      ) : (
        <Table heading={"All Users"} rows={rows} columns={columns} />
      )}
    </Adminlayout>
  );
};

export default UserManagement;
