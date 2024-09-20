import React from "react";
import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMassageAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  
  return (
    <div >
    <Stack
      width={w}
      direction={"column"}
      overflow={"auto"}
      height={"100%"}
    >
      {chats?.map((data, index) => {
        const { avatar, name, _id, groupChat, members } = data;

        const massageAlert = newMassageAlert.find(
          ({ chatId }) => chatId === _id
        );
        
        
        // Check if any member of the chat is online
        const isOnline = members?.some((member) => onlineUsers.includes(_id));

        return (
          <ChatItem
            newMassageAlert={massageAlert}
            isOnline={isOnline}
            name={name}
            _id={_id}
            sameSender={chatId === _id}
            key={_id}
            avatar={avatar}
            groupChat={groupChat}
            index={index}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
    </div>
  );
};

export default ChatList;
