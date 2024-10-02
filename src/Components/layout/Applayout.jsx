import { Drawer, Grid, Skeleton } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { matBlack } from "../../Constants/Color";
import {
  NewMessageAlert,
  NewRequest,
  OnlineUsers,
  Refetch_Chats
} from "../../Constants/Evants";
import { useErrors, useSocketEvents } from "../../Hooks/hook";
import { getOrSaveFromStorage } from "../../lib/Features";
import { useMyChatsQuery } from "../../redux/api/api";
import { incrementNotification, setNewMessagesAlert } from "../../redux/reducers/chat";
import { setIsDeleteMenu, setIsMobile, setSelectedDeleteChat } from "../../redux/reducers/misc";
import { getSocket } from "../../socket";
import DeleteChatDialog from "../Dialogs/DeleteChatDialog";
import Title from "../shared/Title";
import ChatList from "../Specific/ChatList";
import Profile from "../Specific/Profile";
import Header from "./Header";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    const Params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const chatId = Params.chat;
    const deleteMenuAnchor =useRef(null);

    const socket = getSocket();
    const { isMobile } = useSelector((state) => state.misc);
    const { user } = useSelector((state) => state.auth);
    const { newMessagesAlert } = useSelector((state) => state.chat);
    const [OnlineUser, setOnlineUser] = useState([])
    const { isLoading, isError, data, error, refetch } = useMyChatsQuery("");

    useErrors([{ isError, error }]);

    useEffect(()=>{
      getOrSaveFromStorage({key:NewMessageAlert , value:newMessagesAlert})
    },[newMessagesAlert])

    const handleDeleteChat = (e, chatId, groupChat) => {
      dispatch(setIsDeleteMenu(true))
      dispatch(setSelectedDeleteChat({chatId, groupChat}))
      deleteMenuAnchor.current = e.currentTarget;
    };

    const handleMobile = () => dispatch(setIsMobile(false));

    const newMessageAlertHandler = useCallback((data) => {
      if(data.chatId == chatId) return;
      dispatch(setNewMessagesAlert(data))
    }, [chatId]);

    const newRequestHandler = useCallback(() => {
      dispatch(incrementNotification());
    }, [dispatch]);

    const RefatchListener = useCallback(() => {
      refetch()
      navigate("/")
    }, [refetch , navigate]);

    const onlineUsersListener = useCallback((data) => {
      setOnlineUser(data)
    }, []);

    const eventHandler = {
      [NewMessageAlert]: newMessageAlertHandler,
      [NewRequest]: newRequestHandler,
      [Refetch_Chats]:RefatchListener,
      [OnlineUsers]:onlineUsersListener,
    };
    useSocketEvents(socket, eventHandler);
    
    return (
      <>
        <Title />
        <Header />
        <DeleteChatDialog dispatch={dispatch} deleteOptionAnchor={deleteMenuAnchor.current} />
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
              onlineUsers={OnlineUser}
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
                onlineUsers={OnlineUser}
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
