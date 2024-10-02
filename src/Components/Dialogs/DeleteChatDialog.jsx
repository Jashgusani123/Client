import { Delete as DeleteIcon, ExitToApp as ExitToAppIcon } from "@mui/icons-material";
import { Menu, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAsyncMutation } from "../../Hooks/hook";
import { useDeleteChatMutation, useLeaveGroupMutation } from "../../redux/api/api";
import { setIsDeleteMenu } from "../../redux/reducers/misc";

const DeleteChatDialog = ({ dispatch, deleteOptionAnchor }) => {
    const navigate = useNavigate()

  const { isDeleteMenu, selectedDeleteChat } = useSelector(
    (state) => state.misc
  );

  const [deleteChat,_,deleteChatData] = useAsyncMutation(useDeleteChatMutation)
  const [leaveGroup,__,leaveGroupData] = useAsyncMutation(useLeaveGroupMutation)
  
  const closeHandler = () => {
    dispatch(setIsDeleteMenu(false));
    deleteOptionAnchor.current = null
  };

  const leaveGroupHandler = ()=>{
    closeHandler();
    leaveGroup("Leaving Group..." , selectedDeleteChat.chatId)
  }
  const deleteChatHandler = ()=>{
    closeHandler();
    deleteChat("Deleting Chat..." , selectedDeleteChat.chatId)
  }
  useEffect(()=>{
    if(deleteChatData || leaveGroupData) navigate("/")
  },[deleteChatData , leaveGroupData])
  return (
    <Menu
      open={isDeleteMenu}
      onClose={closeHandler}
      anchorEl={deleteOptionAnchor}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <Stack
        sx={{
          width: "10rem",
          padding: "0.5rem",
          cursor: "pointer",
        }}
        direction={"row"}
        alignItems={"center"}
        spacing={"0.5rem"}
        onClick={selectedDeleteChat.groupChat ? leaveGroupHandler : deleteChatHandler}
      >
        {selectedDeleteChat.groupChat ? <><ExitToAppIcon /> <Typography>Leave Group</Typography></> : <><DeleteIcon /> <Typography>Delete Chat</Typography></>}
      </Stack>
    </Menu>
  );
};

export default DeleteChatDialog;
