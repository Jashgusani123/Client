import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React, { memo } from "react";

const UserItem = ({ user, handler, handlerLoding , isAdded = false  , styling={}}) => {
  const { name, _id, avatar } = user;
  return (
    <ListItem >
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
        {...styling}
      >
        <Avatar />
        <Typography variant="body1" sx={{
            display:"--webkit-box" , 
            WebkitLineClamp:1,
            WebkitBoxOrient:"vertical",
            overflow:"hidden",
            textOverflow:"ellipsis",
            width:"100%"
        }}>{name}</Typography>
        <IconButton onClick={()=>handler(_id)} disabled={handlerLoding} size="small" sx={{
            bgcolor:"primary.main",
            color:"white",
            "&:hover" :{
            bgcolor:"primary.dark",
            },
        }}>
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
