import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import React, { memo } from "react";
import { sempleNotification } from "../../Constants/SempleChats";

const Notification = () => {
  const FriendRequstHandler = ({ _id, accept }) => {};

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notification</DialogTitle>
        {sempleNotification.length > 0 ? (
          sempleNotification.map((i) => (
            <NotificationItem
              sender={i.sender}
              _id={i._id}
              handler={FriendRequstHandler}
              key={i._id}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>0 Notification</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar  />
        <Typography
          variant="body1"
          sx={{
            display: "--webkit-box",
            WebkitLineClamp: 1,
            whiteSpace: "nowrap", 
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${sender.name} sent you a Friend Request.`}
        </Typography>

          <Stack direction={{xs:"column" , sm:"row" }}>
            <Button onClick={()=>{handler({_id ,accept:true})}}>Accept</Button>
            <Button color="error" onClick={()=>{handler({_id ,accept:false})}}>Reject</Button>
          </Stack>

      </Stack>
    </ListItem>
  );
});

export default Notification;
