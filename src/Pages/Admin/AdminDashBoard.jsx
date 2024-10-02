import { useFetchData } from "6pp";
import {
  AdminPanelSettings as AdminPanelSettingIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Moment from "moment";
import React from "react";
import Adminlayout from "../../Components/layout/Adminlayout";
import { DoughnutChart, LineChart } from "../../Components/Specific/Charts";
import {
  CurveButton,
  SearchField,
} from "../../Components/Styles/StyleComponents";
import { server } from "../../Constants/config";
import { useErrors } from "../../Hooks/hook";

const AdminDashBoard = () => {
  const { loading, data, error } = useFetchData(
    `${server}/api/v1/admin/stats`,
    "dashbord-stats"
  );
  const { stats } = data || {};

  useErrors([
    {
      isError: error,
      error: error,
    },
  ]);
  const Appbar = (
    <Paper
      elevation={3}
      sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingIcon sx={{ fontSize: "3rem" }} />
        <SearchField placeholder="Search.." />
        <CurveButton>Search</CurveButton>

        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}
        >
          {Moment().format("dddd, D MMMM YYYY")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const widgets = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={"2rem"}
      justifyContent="space-between"
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widgets title={"User"} value={stats?.userCount} icon={<PersonIcon />} />
      <Widgets title={"Chat"} value={stats?.groupCount} icon={<GroupIcon />} />
      <Widgets
        title={"Messages"}
        value={stats?.messagesCount}
        icon={<MessageIcon />}
      />
    </Stack>
  );

  return (
    <Adminlayout>
      {loading ? (
        <Skeleton width={"100vh"}/>
      ) : (
        <Container component={"main"}>
          {Appbar}

          <Stack
            direction={"row"}
            spacing={"1rem"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              gap: {
                xs: "20px",
                sm: "20px",
                md: "0px",
                lg: "0px",
              },
            }}
          >
            <Paper
              sx={{
                padding: "2rem 3.5rem",
                borderRadius: "1rem",
                width: "100%",
                maxWidth: "38rem",
              }}
            >
              <Typography variant="h4" margin={"2rem 0"}>
                Last Messages
              </Typography>
              <LineChart value={stats?.messageChart || []} />
            </Paper>
            <Paper
              elevation={3}
              sx={{
                padding: "1rem",
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100%", sm: "50%" },
                position: "relative",
                maxWidth: "20rem",
                height: "26rem",
                marginTop: "10px",
              }}
            >
              <DoughnutChart
                label={["Single Chats", "Group Chats"]}
                value={[
                  stats?.totalChatCount - stats?.groupCount || 0,
                  stats?.groupCount || 0,
                ]}
              />
              <Stack
                position={"absolute"}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={"1.5rem"}
                width={"100%"}
                height={"100%"}
              >
                <GroupIcon />
                <Typography>vs</Typography>
                <PersonIcon />
              </Stack>
            </Paper>
          </Stack>

          {widgets}
        </Container>
      )}
    </Adminlayout>
  );
};

const Widgets = ({ title, value, icon }) => (
  <Paper
    elevation={3}
    sx={{
      padding: "2rem ",
      margin: "2rem 0",
      borderRadius: "1.5rem",
      width: "20rem",
    }}
  >
    <Stack spacing={"1rem"} alignItems={"center"}>
      <Typography
        sx={{
          color: "black",
          borderRadius: "100%",
          border: "5px solid black",
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value}
      </Typography>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        {icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default AdminDashBoard;
