import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sempleUser } from "../../Constants/SempleChats";
import UserItem from "../shared/UserItem";
import { useDispatch, useSelector } from "react-redux";
import {
  useAvailableFriendsQuery,
  useNewGroupMutation,
} from "../../redux/api/api";
import { useAsyncMutation, useErrors } from "../../Hooks/hook";
import { setIsNewGroup } from "../../redux/reducers/misc.js";
import toast from "react-hot-toast";

const NewGroups = () => {
  const { isNewGroup } = useSelector((state) => state.misc);
  const dispatch = useDispatch();
  const groupName = useInputValidation();
  const { isLoading, isError, error, data } = useAvailableFriendsQuery();
  const [SelectedMember, setSelectedMember] = useState([]);
  const [newGroup, isLoadingNewGroup] = useAsyncMutation(useNewGroupMutation);
  const errors = [
    {
      isError,
      error,
    },
  ];
  useErrors(errors);

  const selectMemberHandler = (id) => {
    setSelectedMember((prev) =>
      prev.includes(id) ? prev.filter((curEle) => curEle !== id) : [...prev, id]
    );
  };
  const submitHandler = () => {
    if (!groupName.value) return toast.error("Group name is Required");
    if (SelectedMember.length < 2)
      return toast.error("Please Select Atleast 3 Members");
    newGroup("Creating New Group..", {
      name: groupName.value,
      members: SelectedMember,
    });
    closeHandler();
  };
  const closeHandler = () => {
    dispatch(setIsNewGroup(false));
  };
  
  return (
    <Dialog open={isNewGroup} onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} spacing={"2rem"} width={"25rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>

        <TextField
          value={groupName.value}
          onChange={groupName.changeHandler}
          label="Group Name"
        />
        
        <Typography variant="body1">Members</Typography>

        <Stack>
          {isLoading  ? (
            <Skeleton />
          ) : (
             data?.Friends?.map((user) => (
              <UserItem
                user={user}
                key={user._id}
                handler={selectMemberHandler}
              />
            ))
          )}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-around"}>
          <Button
            variant="outlined"
            sx={{
              "&:hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
            color="error"
            size="large"
            onClick={closeHandler}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            sx={{
              "&:hover": {
                backgroundColor: "blue",
                color: "white",
              },
            }}
            color="primary"
            size="large"
            onClick={submitHandler}
            disabled={isLoadingNewGroup}
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroups;
