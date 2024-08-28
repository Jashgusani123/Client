import React, { useRef } from "react";
import Applayout from "../Components/layout/Applayout";
import { IconButton, Stack } from "@mui/material";
import { grayColor, red } from "../Constants/Color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../Components/Styles/StyleComponents";
import FileMenu from "../Components/Dialogs/FileMenu";
import { sempleMassage } from "../Constants/SempleChats";
import MassageComponents from "../Components/shared/MassageComponents";

const users = {
  _id: "fds",
  nameL: "JashGusani91",
};

const Chat = () => {
  const FileMenuRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{ overflowX: "hidden", overflowY: "auto" }}
      >
        {sempleMassage.map((i) => (
          <MassageComponents massage={i} user={users} key={i._id} />
        ))}
      </Stack>

      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              rotate: "30deg",
              position: "absolute",
              left: "1.5rem",
            }}
            ref={FileMenuRef}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Massage Here..." />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: red,
              rotate: "-30deg",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      {/* {FileMenuRef.current && <FileMenu anchorE1={FileMenuRef.current} />} */}
    </>
  );
};

export default Applayout()(Chat);
