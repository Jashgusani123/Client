import {
    Close as CloseIcon,
    Dashboard as DashboardIcon,
    ExitToApp as ExitToAppIcon,
    Group as GroupIcon,
    ManageAccounts as ManageAccountsIcon,
    Menu as MenuIcon,
    Message as MessageIcon,
} from "@mui/icons-material";
import {
    Box,
    Drawer,
    Grid,
    IconButton,
    Stack,
    styled,
    Tooltip,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link as LinkComponent, Navigate, useLocation } from "react-router-dom";
import { grayColor, matBlack } from "../../Constants/Color";

const Link = styled(LinkComponent)`
    text-decoration:none;
    border-radius:2rem;
    padding:1rem 2rem;
    color:black;
    &:hover:{
        color:rgba(0,0,0,0.54);
    }

`;

const Admintab = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "Users",
      path: "/admin/user",
      icon: <ManageAccountsIcon />,
    },
    {
      name: "Chats",
      path: "/admin/chat",
      icon: <GroupIcon />,
    },
    {
      name: "Messages",
      path: "/admin/message",
      icon: <MessageIcon />,
    },
  ];
  const logoutHandler =()=>{}
  
  const Sidebar = ({ w }) => {
    const Location = useLocation();
  
    return (
      <Stack width={w} spacing={"3rem"} direction={"column"} p={"3rem"}>
        <Typography variant="h5" textTransform={"uppercase"}>
          Chat App
        </Typography>
        <Stack spacing={"1rem"}>
          {Admintab.map((tab) => (
            <Link
              key={tab.path}
              component={Link}
              to={tab.path}
              sx={
                Location.pathname === tab.path
                  ? {
                      bgcolor: matBlack,
                      color: "white",
                    }
                  : {
                      color: "inherit", // This will keep the default link color
                    }
              }
            >
              <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                {tab.icon}
                <Typography fontSize={"1.2rem"}>{tab.name}</Typography>
              </Stack>
            </Link>
          ))}
         <Link onClick={logoutHandler}>
              <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                <ExitToAppIcon/>
                <Typography>Logout</Typography>
              </Stack>
            </Link>
        </Stack>
      </Stack>
    );
  };

  const isAdmin = true
   
const Adminlayout = ({ children }) => {
  const [isMobile, setisMobile] = useState(false);
  const handleMobile = () => {
    setisMobile(!isMobile);
  };
  const handleClose = () => {
    setisMobile(false);
  };
if(!isAdmin){
    return <Navigate to={"/admin"} />
}
  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <Tooltip title="Menu">
          <IconButton onClick={handleMobile}>
            {isMobile ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Tooltip>
      </Box>
      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar />
      </Grid>

      <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: grayColor }}>
        {children}
      </Grid>

      <Drawer open={isMobile} onClose={handleClose}>
        <Sidebar w={"80vw"} />
      </Drawer>
    </Grid>
  );
};

export default Adminlayout;
