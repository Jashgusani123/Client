import React, { lazy, useState, Suspense } from "react";
import {
  AppBar,
  Backdrop,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { red } from "../../Constants/Color";
import axios from "axios";
import { server } from "../../Constants/config";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userNotExists } from "../../redux/reducers/auth";
import {
  setIsMobile,
  setIsSearch,
  setIsNotification,
} from "../../redux/reducers/misc";
import { resetNotification } from "../../redux/reducers/chat";
// Lazy-loaded components
const SearchDialogs = lazy(() => import("../Specific/Search"));
const NotificationDialogs = lazy(() => import("../Specific/Notification"));
const NewGroupDialogs = lazy(() => import("../Specific/NewGroups"));

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSearch, isNotification } = useSelector((state) => state.misc);
  const { notificationCount } = useSelector((state) => state.chat);

  const [isNewGroup, setIsNewGroup] = useState(false);

  const handleMobile = () => dispatch(setIsMobile(true));
  const handleSearch = () => dispatch(setIsSearch(true));
  const openNewGroup = () => setIsNewGroup((prev) => !prev);
  const openNotification = () => {dispatch(setIsNotification(true))
    dispatch(resetNotification())
  };
  const navigateToGroup = () => navigate("/groups");
  const logoutHandler = async () => {
    try {
      const { data } = await axios.get(`${server}/api/v1/user/logout`, {
        withCredentials: true,
      });
      dispatch(userNotExists());
      toast.success(data.message);
    } catch (err) {
      toast.error(err.response.data.message || "Something Went Wrong");
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ backgroundColor: red }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              ChatAPP
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box>
              <IconBtn
                title="Search"
                icon={<SearchIcon />}
                onClick={handleSearch}
              />
              <IconBtn
                title="Notifications"
                icon={<NotificationIcon />}
                onClick={openNotification}
                value={notificationCount}
              />
              <IconBtn
                title="New Group"
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title="Manage Group"
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title="Logout"
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialogs />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialogs />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialogs />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick, value }) => (
  <Tooltip title={title}>
    <IconButton color="inherit" size="large" onClick={onClick}>
      {value ? <Badge badgeContent={value} color="error"> {icon}</Badge> : icon}
    </IconButton>
  </Tooltip>
);

export default Header;
