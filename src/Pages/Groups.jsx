import React, { lazy, memo, Suspense, useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { matBlack  } from "../Constants/Color";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../Components/Styles/StyleComponents";
import AvatarCard from "../Components/shared/AvatarCard";
import { SempleChats, sempleUser } from "../Constants/SempleChats";
import UserItem from "../Components/shared/UserItem";

const ConfirmDeleteDialog = lazy(() =>
  import("../Components/Dialogs/ConfirmDeleteDialog")
);
const isAddMember = false;

const IsAddMember = lazy(() => import("../Components/Dialogs/AddMemberDialog"));
const Groups = () => {
  const navigate = useNavigate();
  const [IsMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [groupName, setgroupName] = useState();
  const [UpdatedGroupNameValue, setUpdatedGroupNameValue] = useState("");
  const [isConfirmDeleteDialog, setisConfirmDeleteDialog] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const chatId = useSearchParams()[0].get("group");

  const removeMemberHandler = (id) => {
    console.log("Remove User" + id);
  };

  const NavigateBack = () => {
    navigate("/");
  };

  const handleMobileOpen = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  const updateGroupName = () => {
    setisEdit(false);
  };

  const OpenConformDeleteHandler = () => {
    setisConfirmDeleteDialog(true);
  };
  const CloseConformDeleteHandler = () => {
    setisConfirmDeleteDialog(false);
  };
  const OpenAddMemberHandler = () => {};
  const deleteHandler = () => {
    console.log("Delete Group!!");
    CloseConformDeleteHandler();
  };
  useEffect(() => {
    if (chatId) {
      setgroupName(`Group Name ${chatId}`);
      setUpdatedGroupNameValue(`Group Name ${chatId}`);
    }
    return () => {
      setgroupName("");
      setUpdatedGroupNameValue("");
      setisEdit(false);
    };
  }, [chatId]);

  const IconButtons = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none", // Only show on small screens
            position: "fixed",
            top: "2rem",
            right: "1rem",
            left: "auto",
          }, // Set left to auto to avoid pushing it off screen
        }}
      >
        <Tooltip title="Groups">
          <IconButton onClick={handleMobileOpen}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            "&:hover": { bgcolor: "rgba(0,0,0,0.2)", color: "black" },
          }}
          onClick={NavigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"2.3rem"}
      marginLeft={"2rem"}
      sx={{
        "@media (min-width: 412px) and (max-width: 716px)": {
          marginTop: "5rem",
          width: "24rem",
        },
        "@media (min-width: 360px) and (max-width: 412px)": {
          marginTop: "2rem",
          width: "15rem",
        },
        "@media (min-width: 344px) and (max-width: 360px)": {
          marginTop: "2rem",
          width: "15rem",
        },
      }}
    >
      {isEdit ? (
        <>
          <TextField
            value={UpdatedGroupNameValue}
            onChange={(e) => {
              setUpdatedGroupNameValue(e.target.value);
            }}
          />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography
            sx={{
              fontSize:"3rem",
              "@media (min-width: 412px) and (max-width: 716px)": {
                fontSize: "2rem", // Your styles here
              },
              "@media (min-width: 360px) and (max-width: 412px)": {
                fontSize: " 0.9rem",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              },
            }}
          >
            {groupName}
          </Typography>
          <IconButton onClick={() => setisEdit(true)} sx={{}}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        sm: "row",
        xs: "column-reverse",
      }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem",
      }}
    >
      <Button
        size="large"
        variant="outlined"
        startIcon={<DeleteIcon />}
        color="error"
        onClick={OpenConformDeleteHandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="outlined"
        startIcon={<AddIcon />}
        color="primary"
        onClick={OpenAddMemberHandler}
      >
        Add Member
      </Button>
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{ display: { xs: "none", sm: "block" } }}
        sm={4}
        bgcolor={matBlack}
      >
        <GroupsList myGroups={SempleChats} chatId={chatId} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        "@media (min-width: 344px) and (max-width: 360px)": {
          padding:"3rem 1rem"
        },
        }}
        
      >
        {IconButtons}
        {groupName && (
          <>
            {GroupName}
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>

            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              height={"50vh"}
              overflow={"auto"}
            >
              {sempleUser.map((user) => (
                <UserItem
                  user={user}
                  key={user._id}
                  styling={{
                    boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                    padding: "1rem 2rem",
                    borderRadius: "1rem",
                  }}
                  handler={removeMemberHandler}
                />
              ))}
            </Stack>

            {ButtonGroup}
          </>
        )}
      </Grid>
      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <IsAddMember />
        </Suspense>
      )}

      {isConfirmDeleteDialog && (
        <Suspense fallback={<Backdrop open={true} />}>
          <ConfirmDeleteDialog
            open={isConfirmDeleteDialog}
            handleClose={CloseConformDeleteHandler}
            handleDelete={deleteHandler}
          />
        </Suspense>
      )}

      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={IsMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupsList w="50vw" myGroups={SempleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack
      width={w}
      sx={{
        maxHeight: "100vh", // Limits the height of the section
        overflowY: "auto", // Enables scrolling within the section
      }}
    >
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem group={group} chatId={chatId} key={group._id} />
        ))
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No Groups
        </Typography>
      )}
    </Stack>
  );
};

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) {
          e.preventDefault();
        }
      }}
    >
      <Stack direction={"row"} alignItems={"center"} padding={"1rem"}>
        <AvatarCard avatara={avatar} />
        <Typography fontWeight={600} fontFamily={"sans-serif"}>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
