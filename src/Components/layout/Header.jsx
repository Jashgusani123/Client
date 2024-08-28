import React, { lazy, useState, Suspense } from "react";
import {
  AppBar,
  Backdrop,
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
import {red} from '../../Constants/Color';
// Lazy-loaded components
const SearchDialogs = lazy(() => import("../Specific/Search"));
const NotificationDialogs = lazy(() => import("../Specific/Notification"));
const NewGroupDialogs = lazy(() => import("../Specific/NewGroups"));

const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => setIsMobile((prev) => !prev);
  const handleSearch = () => setIsSearch((prev) => !prev);
  const openNewGroup = () => setIsNewGroup((prev) => !prev);
  const openNotification = () => setIsNotification((prev) => !prev);
  const navigateToGroup = () => navigate("/groups");

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static"  sx={{ backgroundColor:red}}>
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
                onClick={() => {
                  /* handle logout */
                }}
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
      {/* <Suspense fallback={<Backdrop open />}>
        {isSearch && <SearchDialogs />}
        {isNotification && <NotificationDialogs />}
        {isNewGroup && <NewGroupDialogs />}
      </Suspense> */}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => (
  <Tooltip title={title}>
    <IconButton color="inherit" size="large" onClick={onClick}>
      {icon}
    </IconButton>
  </Tooltip>
);

export default Header;
