import React, { useCallback, useEffect } from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Drawer, Grid, Skeleton } from "@mui/material";
import ChatList from "../Specific/ChatList";
import { SempleChats } from "../../Constants/SempleChats";
import { useParams } from "react-router-dom";
import Profile from "../Specific/Profile";
import { matBlack, PerperColorLight } from "../../Constants/Color";
import { useMyChatsQuery } from "../../redux/api/api";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "../../redux/reducers/misc";
import toast from "react-hot-toast";
import { useErrors, useSocketEvents } from "../../Hooks/hook";
import { getSocket } from "../../socket";
import {
  newMessage,
  NewMessageAlert,
  NewRequest,
} from "../../Constants/Evants";
import { incrementNotification, setNewMessagesAlert } from "../../redux/reducers/chat";
import { getOrSaveFromStorage } from "../../lib/Features";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    const Params = useParams();
    const dispatch = useDispatch();
    const chatId = Params.chat;
    const socket = getSocket();
    const { isMobile } = useSelector((state) => state.misc);
    const { user } = useSelector((state) => state.auth);
    const { newMessagesAlert } = useSelector((state) => state.chat);

    const { isLoading, isError, data, error, refetch } = useMyChatsQuery("");

    useErrors([{ isError, error }]);

    useEffect(()=>{
      getOrSaveFromStorage({key:NewMessageAlert , value:newMessagesAlert})
    },[newMessagesAlert])

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat);
    };

    const handleMobile = () => dispatch(setIsMobile(false));

    const newMessageAlertHandler = useCallback((data) => {
      if(data.chatId == chatId) return;
      dispatch(setNewMessagesAlert(data))
    }, [chatId]);

    const newRequestHandler = useCallback(() => {
      dispatch(incrementNotification());
    }, [dispatch]);

    const eventHandler = {
      [NewMessageAlert]: newMessageAlertHandler,
      [NewRequest]: newRequestHandler,
    };
    useSocketEvents(socket, eventHandler);
    
    return (
      <>
        <Title />
        <Header />
        {isLoading ? (
          <Skeleton />
        ) : (
          <Drawer open={isMobile} onClose={handleMobile}>
            <ChatList
              w="70vw"
              chats={data?.transformedChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
              newMassageAlert={newMessagesAlert}
            />
          </Drawer>
        )}
        <Grid container style={{ height: "calc(100vh - 4rem)" }}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor: matBlack,
            }}
            height={"100%"}
          >
            {isLoading ? (
              <Skeleton />
            ) : (
              <ChatList
                chats={data?.transformedChats}
                chatId={chatId}
                newMassageAlert={newMessagesAlert}
                onlineUsers={["1", "2"]}
                handleDeleteChat={handleDeleteChat}
              />
            )}
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} chatId={chatId} user={user} />
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
            <Profile user={user} />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default Applayout;
