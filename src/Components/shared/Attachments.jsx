import React from "react";
import { transformImage } from "../../lib/Features";  // Corrected import statement
import { FileOpen } from "@mui/icons-material";

const Attachments = ({ file, url }) => {
  switch (file) {
    case "Video":
    return <video src={url} width={"200px"} controls preload="none" />;

    case "Image":
     return <img
        src={transformImage(url, 200)}
        width={"200px"}
        height={"150px"}
        style={{
          objectFit: "contain",
        }}
        alt="Attachement"
      />;
      
    case "Audio":
       return <audio src={url} controls preload="none" />;
      
    default:
      return  <FileOpen />
      
  }
};

export default Attachments;
