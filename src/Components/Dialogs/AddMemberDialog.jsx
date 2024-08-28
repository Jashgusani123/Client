import React, { useState } from "react";
import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import { sempleUser } from "../../Constants/SempleChats";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({ addMember, isLodingAddMember, chatId }) => {
  const [Members, setMembers] = useState(sempleUser);
  const [SelectedMember, setSelectedMember] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMember((prev) => {
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id];
    });
  };
  const CheckItOut = (id)=>{
    console.log(id,chatId);
    
  }
  const closeHandler = () => {};
  const addMemberSubmitHandler = () => {};
  return (
    <Dialog open onClose={closeHandler}>
      <Stack spacing={"2rem"} p="2rem" width={"20rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {sempleUser.length > 0 ? (
            sempleUser.map((i) => (
              <UserItem key={i._id} user={i} handler={CheckItOut} />
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
            disabled={isLodingAddMember}
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
