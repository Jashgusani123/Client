import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../Specific/ChatList";
import { SempleChats } from "../../Constants/SempleChats";
import { useParams } from "react-router-dom";
import Profile from "../Specific/Profile";
import {  matBlack, PerperColorLight } from "../../Constants/Color";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    const Params = useParams();
    const chatId = Params.chat;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat);
    };
    return (
      <>
        <Title />
        <Header />
        <Grid container style={{ height: "calc(100vh - 4rem)" }}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor:matBlack,
            }}
            height={"100%"}
          >
            <ChatList
              chats={SempleChats}
              chatId={chatId}
              newMassageAlert={[
                {
                  chatId,
                  count: 4,
                },
              ]}
              onlineUsers={["1", "2"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default Applayout;
