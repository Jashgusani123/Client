import React, { useState } from "react";
import { Button, Dialog, DialogTitle, Skeleton, Stack, Typography } from "@mui/material";
import { sempleUser } from "../../Constants/SempleChats";
import UserItem from "../shared/UserItem";
import { useAsyncMutation, useErrors } from "../../Hooks/hook";
import { useAddGroupMembersMutation, useAvailableFriendsQuery } from "../../redux/api/api";
import { useDispatch, useSelector } from "react-redux";
import { setIsAddMember } from "../../redux/reducers/misc";

const AddMemberDialog = ({  chatId }) => {
  const dispatch = useDispatch()
  const {isAddMember} = useSelector((state) => state.misc);
  // const [Members, setMembers] = useState(sempleUser);
  const [SelectedMember, setSelectedMember] = useState([]);
  const {isLoading, data , isError , error} = useAvailableFriendsQuery(chatId)

  
  const [addmember , isLoadingAddMember] = useAsyncMutation(useAddGroupMembersMutation)
  const selectMemberHandler = (id) => {
    setSelectedMember((prev) => ( prev.includes(id)
      ? prev.filter((currElement) => currElement !== id)
      : [...prev, id]
    ));
  };

  useErrors([{isError , error}])
  
  const CheckItOut = (id)=>{
    console.log(id,chatId);
  }
  const closeHandler = () => {
    dispatch(setIsAddMember(false))
  };
  const addMemberSubmitHandler = () => {
    addmember("Adding Members..." , {members:SelectedMember , chatId})
  };
  
  return (
    <Dialog open={isAddMember} onClose={closeHandler}>
      <Stack spacing={"2rem"} p="2rem" width={"20rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {isLoading ? <Skeleton /> : data.friend.length > 0 ? (
            data.friend.map((i) => (
              <UserItem key={i._id} user={i} handler={selectMemberHandler} isAdded={SelectedMember.includes(i._id)} />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isLoadingAddMember}
            onClick={addMemberSubmitHandler}  
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
