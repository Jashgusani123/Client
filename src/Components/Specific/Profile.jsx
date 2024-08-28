import { Stack, Avatar, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  CalendarMonth as CalendarIcon,
  AlternateEmail as UserNameIcon,
} from "@mui/icons-material";
import moment from 'moment';

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      {/* '2008-01-08T18:30:00.000Z' */}
      <ProfileCard heading={"Bio"} text={"Computer Engineering 💻📚"} />
      <ProfileCard heading={"UserName"} text={"jashgusani91"}  icon={<UserNameIcon />}/>
      <ProfileCard heading={"Name"} text={"Jash Gusani"} icon={<FaceIcon />}/>
      <ProfileCard heading={"Joined"} text={moment("2008-01-08T18:30:00.000Z").fromNow()} icon={<CalendarIcon />}/>
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
