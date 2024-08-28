import React, { memo } from "react";
import { Link } from "../Styles/StyleComponents";
import { Box, Typography, Stack } from "@mui/material";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMassageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
      sx={{
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "black",
          position: "relative",
          padding:"1rem"
        }}
        
      >
        <AvatarCard avatara={avatar} />

        <Stack >
          <Typography sx={{color:"red" , fontWeight:700 , fontFamily:"sans-serif"}}>{name}</Typography>
          {newMassageAlert && (
            <Typography sx={{ color: sameSender ? "white" : "black" }}>
              {newMassageAlert.count} New Massage
            </Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              backgroundColor: "green",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </Box>
    </Link>
  );
};

export default memo(ChatItem);
