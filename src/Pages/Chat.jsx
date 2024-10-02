import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Applayout from "../Components/layout/Applayout";
import { IconButton, Skeleton, Stack } from "@mui/material";
import { grayColor, red } from "../Constants/Color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../Components/Styles/StyleComponents";
import FileMenu from "../Components/Dialogs/FileMenu";
import { sempleMassage } from "../Constants/SempleChats";
import MassageComponents from "../Components/shared/MassageComponents";
import { getSocket } from "../socket";
import {
  Alert,
  ChatJoind,
  ChatLeaved,
  newMessage,
  StartTyping,
  StopTyping,
} from "../Constants/Evants.js";
import { useChatDetailsQuery, useGetMessagesQuery } from "../redux/api/api.js";
import { useErrors, useSocketEvents } from "../Hooks/hook.jsx";
import { useInfiniteScrollTop } from "6pp";
import { useDispatch } from "react-redux";
import { setIsFileMenu } from "../redux/reducers/misc.js";
import { removeMessageAlert } from "../redux/reducers/chat.js";
import { TypingLoader } from "../Components/layout/Loaders.jsx";
import { useNavigate } from "react-router-dom";

const Chat = ({ chatId, user }) => {
  const FileMenuRef = useRef(null);
  const containerRef = useRef(null);
  const bottomRef = useRef(null);
  const TypingTimeOut = useRef(null);

  const navigate = useNavigate()
  const socket = getSocket();
  const dispatch = useDispatch();

  const [message, setmessage] = useState("");
  const [messages, setmessages] = useState([]);
  const [page, setpage] = useState(1);
  const [FileMenuAnchor, setFileMenuAnchor] = useState(null);
  const [IamTyping, setIamTyping] = useState(false);
  const [userTyping, setuserTyping] = useState(false);

  const chatDetails = useChatDetailsQuery({ chatId, skip: !chatId });
  const oldMessageChunk = useGetMessagesQuery({ chatId, page });
  const members = chatDetails?.data?.chat?.members;

  const { data: oldMessages, setData: setOldMessages } = useInfiniteScrollTop(
    containerRef,
    oldMessageChunk.data?.totalPages,
    page,
    setpage,
    oldMessageChunk.data?.messages
  );

  const errorsArray = [
    { isError: chatDetails.isError, error: chatDetails.error },
    { isError: oldMessageChunk.isError, error: oldMessageChunk.error },
  ];

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    socket.emit(newMessage, { chatId, members, message });
    setmessage("");
  };

  useEffect(() => {
    socket.emit(ChatJoind , {userId:user._id , members})
    dispatch(removeMessageAlert(chatId));
    return () => {
      setmessage("");
      setmessages([]);
      setpage(1);
      setOldMessages([]);
      socket.emit(ChatLeaved , {userId:user._id , members})
    };
  }, [chatId]);

  useEffect(() => {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if(chatDetails.isError){
      return navigate("/")
    }
  }, []);

  const newMessageListener = useCallback(
    (data) => {
      if (data.chatId !== chatId) return;
      setmessages((prev) => [...prev, data.message]);
    },
    [chatId]
  );

  const StartTypingListener = useCallback(
    (data) => {
      if (data.chatId !== chatId) return;
      setuserTyping(true);
    },
    [chatId]
  );
  const StopTypingListener = useCallback(
    (data) => {
      if (data.chatId !== chatId) return;
      setuserTyping(false);
    },
    [chatId]
  );
  const alertListener = useCallback(
    (data) => {
      if(data.chatId !== chatId)return ;
      const messageForAlert = {
        content: data.message,
        sender: {
          _id: "kkljlljlilpkl",
          name: "Admin",
        },
        chat: chatId,
        createdAt: new Date().toISOString(),
      };
      setmessages((prev)=> [...prev, messageForAlert])
    },
    [chatId]
  );

  const eventHandler = {
    [Alert]: alertListener,
    [newMessage]: newMessageListener,
    [StartTyping]: StartTypingListener,
    [StopTyping]: StopTypingListener,
  };

  useSocketEvents(socket, eventHandler);
  useErrors(errorsArray);

  const allMessages = [...oldMessages, ...messages];

  const handleFileMenuOpen = (e) => {
    dispatch(setIsFileMenu(true));
    setFileMenuAnchor(e.currentTarget);
  };
  const MessageChangeHandler = (e) => {
    setmessage(e.target.value);
    if (!IamTyping) {
      socket.emit(StartTyping, { members, chatId });
      setIamTyping(true);
    }
    if (TypingTimeOut.current) clearTimeout(TypingTimeOut.current);
    TypingTimeOut.current = setTimeout(() => {
      socket.emit(StopTyping, { members, chatId });
      setIamTyping(false);
    }, [800]);
  };

  return chatDetails.isLoading ? (
    <Skeleton />
  ) : (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{ overflowX: "hidden", overflowY: "auto" }}
      >
        {allMessages.map((i, index) => (
          <MassageComponents
            massage={i}
            user={user}
            key={i._id || `temp-${index}`} // Use a fallback key
          />
        ))}

        {userTyping && <TypingLoader />}

        <div ref={bottomRef} />
      </Stack>

      <form style={{ height: "10%" }} onSubmit={sendMessage}>
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
            onClick={handleFileMenuOpen}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox
            placeholder="Type Massage Here..."
            value={message}
            onChange={MessageChangeHandler}
          />
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
      <FileMenu anchorE1={FileMenuAnchor} chatId={chatId} />
    </Fragment>
  );
};

export default Applayout()(Chat);
