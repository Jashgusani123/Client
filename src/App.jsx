import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRouter from "./Components/auth/ProtectRouter";
import { LayoutLoader } from "./Components/layout/Loaders";
import axios from "axios";
import { server } from "./Constants/config.js";
import {useDispatch, useSelector} from 'react-redux'; 
import { userExists, userNotExists } from "./redux/reducers/auth.js";
import {Toaster} from 'react-hot-toast';
import { SocketProvider } from "./socket.jsx";

const Home = lazy(() => import("./Pages/Home"));
const Groups = lazy(() => import("./Pages/Groups"));
const Chat = lazy(() => import("./Pages/Chat"));
const Login = lazy(() => import("./Pages/Login"));
const Notfound = lazy(() => import("./Pages/Notfound"));
const AdminLogin = lazy(() => import("./Pages/Admin/AdminLogin"));
const AdminDashBoard = lazy(() => import("./Pages/Admin/AdminDashBoard"));
const UserManagement = lazy(() => import("./Pages/Admin/UserManagement"));
const ChatManagement = lazy(() => import("./Pages/Admin/ChatManagement"));
const MessageManagement = lazy(() => import("./Pages/Admin/MessageManagement"));

const App = () => {
  const {user , loader} = useSelector(state=>state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${server}/api/v1/user/me` , {withCredentials:true})
      .then(({data}) => dispatch(userExists(data.user)))
      .catch((err) => {dispatch(userNotExists())});
  }, [dispatch]);
  return loader?<LayoutLoader />:(
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<SocketProvider>
            <ProtectRouter user={user} />
          </SocketProvider>}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chat" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRouter user={!user} redirect="/">
                <Login />
              </ProtectRouter>
            }
          />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashBoard />} />
          <Route path="/admin/user" element={<UserManagement />} />
          <Route path="/admin/chat" element={<ChatManagement />} />
          <Route path="/admin/message" element={<MessageManagement />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-center"/>
    </BrowserRouter>
  );
};

export default App;
