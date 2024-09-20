import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { LightBlue } from "../../Constants/Color";
import moment from "moment";
import { fileFormat } from "../../lib/Features";  // Import correctly
import Attachments from "./Attachments";

const MassageComponents = ({ massage, user }) => {
  const { sender, content, attachments = [], createdAt  , _id} = massage;
  
  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow();
  
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={LightBlue} fontWeight={"600"}>
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}

      {attachments.length > 0 &&
        attachments.map((i, index) => {
          const url = i.url;
          const fileType = fileFormat(url);  // Call the function directly

          return (
            <Box key={index}>
              <a href={url} target="_blank" download style={{ color: "black" }}>
                <Attachments file={fileType} url={url} />  {/* Pass fileType instead of file */}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color={"GrayText"}>
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MassageComponents);
