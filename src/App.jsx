import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ProtectRouter from "./Components/auth/ProtectRouter";
import { LayoutLoader } from "./Components/layout/Loaders";


const Home = lazy(() => import("./Pages/Home"));
const Groups = lazy(() => import("./Pages/Groups"));
const Chat = lazy(() => import("./Pages/Chat"));
const Login = lazy(() => import("./Pages/Login"));
const Notfound = lazy(()=>import('./Pages/Notfound'))
const AdminLogin = lazy(()=>import('./Pages/Admin/AdminLogin'))
const AdminDashBoard = lazy(()=>import('./Pages/Admin/AdminDashBoard'))
const UserManagement = lazy(()=>import('./Pages/Admin/UserManagement'))
const ChatManagement = lazy(()=>import('./Pages/Admin/ChatManagement'))
const MessageManagement = lazy(()=>import('./Pages/Admin/MessageManagement'))


const App = () => {
  let user = true;
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}>
      <Routes>
        <Route element={<ProtectRouter user={user} />}>
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
        <Route path="/admin" element={<AdminLogin />}/>
        <Route path="/admin/dashboard" element={<AdminDashBoard />}/>
        <Route path="/admin/user" element={<UserManagement />}/>
        <Route path="/admin/chat" element={<ChatManagement />}/>
        <Route path="/admin/message" element={<MessageManagement />}/>

      <Route path="*" element={<Notfound />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
