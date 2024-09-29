import { createContext, useMemo , useContext} from "react"
import io from "socket.io-client"
import { server } from "./Constants/config";
import React from 'react'; // Explicit import to avoid JSX-related issues


const SocketContext = createContext();
const getSocket = ()=>useContext(SocketContext)
const SocketProvider = ({children})=>{
const socket  = useMemo(()=> io(server , {withCredentials:true}),[])

    return (
        <SocketContext.Provider value={socket} >
            {children}
        </SocketContext.Provider>
    )
}


export {getSocket , SocketProvider}