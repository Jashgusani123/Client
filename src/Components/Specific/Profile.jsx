import {
  CalendarMonth as CalendarIcon,
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
} from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import moment from 'moment';
import React from "react";
import { transformImage } from "../../lib/Features";

const Profile = ({user}) => {
  
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
      src={transformImage(user?.avatar?.url)}
        sx={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      {/* '2008-01-08T18:30:00.000Z' */}
      <ProfileCard heading={"Bio"} text={user.bio} />
      <ProfileCard heading={"UserName"} text={user.username || "Not Available"}  icon={<UserNameIcon />}/>
      <ProfileCard heading={"Name"} text={user.name} icon={<FaceIcon />}/>
      <ProfileCard heading={"Joined"} text={moment(user.createdAt).fromNow()} icon={<CalendarIcon />}/>
    </Stack>
  );
};

const ProfileCard = ({ text, icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {icon && icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography variant="caption" color={"grey"}>
        {heading}
      </Typography>
    </Stack>
  </Stack>
);
export default Profile;
