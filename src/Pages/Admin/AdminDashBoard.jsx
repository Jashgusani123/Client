import React from "react";
import Adminlayout from "../../Components/layout/Adminlayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import Moment from "moment";
import {
  CurveButton,
  SearchField,
} from "../../Components/Styles/StyleComponents";
import { DoughnutChart, LineChart } from "../../Components/Specific/Charts";

const AdminDashBoard = () => {
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
      <Widgets title={"User"} value={55} icon={<PersonIcon />} />
      <Widgets title={"Chat"} value={114} icon={<GroupIcon />} />
      <Widgets title={"Messages"} value={516} icon={<MessageIcon />} />
    </Stack>
  );

  return (
    <Adminlayout>
      <Container component={"main"}>
        {Appbar}

        <Stack
          direction={"row"}
          spacing={"1rem"} // Use spacing if you want consistent spacing between items
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            gap: {
              xs: "20px", // Gap for extra small screens
              sm: "20px", // Gap for small screens
              md: "0px", // No gap for medium screens and up
              lg: "0px", // No gap for large screens and up
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
            <LineChart value={[44, 55, 3, 33, 84, 12]} />
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
              value={[23, 45]}
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
