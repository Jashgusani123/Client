import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { sempleUser } from "../../Constants/SempleChats";
import UserItem from "../shared/UserItem";

const NewGroups = () => {
  const groupName = useInputValidation();

  const [Members, setMembers] = useState(sempleUser)
  const [SelectedMember, setSelectedMember] = useState([])


  const selectMemberHandler = () => {
  };
  const submitHandler = ()=>{};
  return (
    <Dialog open>
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
          {Members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-around"}>
          <Button variant="outlined" sx={{"&:hover":{
            backgroundColor:"red",
            color:"white"
          }}} color="error" size="large">
            Cancel
          </Button>
          <Button variant="outlined" sx={{"&:hover":{
            backgroundColor:"blue",
            color:"white"
          }}} color="primary" size="large" onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroups;
