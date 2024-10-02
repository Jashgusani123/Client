import React, { lazy, memo, Suspense, useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
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
import { matBlack } from "../Constants/Color";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../Components/Styles/StyleComponents";
import AvatarCard from "../Components/shared/AvatarCard";
import UserItem from "../Components/shared/UserItem";
import {
  useAddGroupMembersMutation,
  useChatDetailsQuery,
  useDeleteChatMutation,
  useMyGroupsQuery,
  useRemoveGroupMemberMutation,
  useRenameGroupMutation,
} from "../redux/api/api";
import { useAsyncMutation, useErrors } from "../Hooks/hook";
import { LayoutLoader } from "../Components/layout/Loaders";
import { useDispatch, useSelector } from "react-redux";
import { setIsAddMember } from "../redux/reducers/misc";

const ConfirmDeleteDialog = lazy(() =>
  import("../Components/Dialogs/ConfirmDeleteDialog")
);

const IsAddMember = lazy(() => import("../Components/Dialogs/AddMemberDialog"));
const Groups = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chatId = useSearchParams()[0].get("group");

  const myGroups = useMyGroupsQuery("");
  const groupDetails = useChatDetailsQuery(
    { chatId, populate: true },
    { skip: !chatId }
  );
  const [updateGroup, isLoadingGroupName] = useAsyncMutation(
    useRenameGroupMutation
  );
  const [removeMember, isLoadingRemoveMember] = useAsyncMutation(
    useRemoveGroupMemberMutation
  );
  const [deleteGroup, isLoadingdeleteGroup] = useAsyncMutation(
    useDeleteChatMutation
  );
  const { isAddMember } = useSelector((state) => state.misc);

  const [IsMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [groupName, setgroupName] = useState();
  const [UpdatedGroupNameValue, setUpdatedGroupNameValue] = useState("");
  const [isConfirmDeleteDialog, setisConfirmDeleteDialog] = useState(false);
  const [Members, setMembers] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const errors = [
    {
      isError: myGroups.isError,
      error: myGroups.isError,
    },
    {
      isError: groupDetails.isError,
      error: groupDetails.isError,
    },
  ];

  useErrors(errors);

  useEffect(() => {
    if (groupDetails.data) {
      setgroupName(groupDetails.data.chat.name);
      setUpdatedGroupNameValue(groupDetails.data.chat.name);
      setMembers(groupDetails.data.chat.members);
    }

    return () => {
      setgroupName("");
      setUpdatedGroupNameValue("");
      setMembers([]);
      setisEdit(false);
    };
  }, [groupDetails.data]);

  const removeMemberHandler = (userId) => {
    removeMember("Removing Member...", {
      chatId,
      userId,
    });
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
    updateGroup("Updating Group Name...", {
      chatId,
      name: UpdatedGroupNameValue,
    });
  };

  const OpenConformDeleteHandler = () => {
    setisConfirmDeleteDialog(true);
  };
  const CloseConformDeleteHandler = () => {
    setisConfirmDeleteDialog(false);
  };
  const OpenAddMemberHandler = () => {
    dispatch(setIsAddMember(true));
  };
  const deleteHandler = () => {
    deleteGroup("Deleting Group... ", chatId);
    CloseConformDeleteHandler();
    navigate("/groups");
  };

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
          <IconButton onClick={updateGroupName} disabled={isLoadingGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography
            sx={{
              fontSize: "3rem",
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
          <IconButton
            disabled={isLoadingGroupName}
            onClick={() => setisEdit(true)}
            sx={{}}
          >
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

  return myGroups.isLoading ? (
    <LayoutLoader />
  ) : (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{ display: { xs: "none", sm: "block" } }}
        sm={4}
        bgcolor={matBlack}
      >
        <GroupsList myGroups={myGroups?.data?.groups} chatId={chatId} />
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
            padding: "3rem 1rem",
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
              {isLoadingRemoveMember ? (
                <CircularProgress />
              ) : (
                Members.map((user) => (
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
                ))
              )}
            </Stack>

            {ButtonGroup}
          </>
        )}
      </Grid>
      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <IsAddMember chatId={chatId} />
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
        <GroupsList w="50vw" myGroups={myGroups.data.groups} chatId={chatId} />
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
      <Stack
        direction={"row"}
        alignItems={"center"}
        padding={"1rem"}
        gap={"1rem"}
      >
        <AvatarCard avatara={avatar} />
        <Typography fontWeight={600} fontFamily={"sans-serif"}>
          {name}
        </Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
