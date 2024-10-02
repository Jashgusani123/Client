import {createAsyncThunk} from '@reduxjs/toolkit';
import {server} from '../../Constants/config';
import axios from 'axios';

const adminLogin = createAsyncThunk(
    "admin/login",
    async (secretKey) => {
      try {
        const config = {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.post(
          `${server}/api/v1/admin/verify`,
          { secretKey },
          config
        );
  
        return data.message;
      } catch (err) {
         throw err.response.data.message;
      }
    }
);
const getAdmin = createAsyncThunk(
    "admin/getadmin",
    async () => {
        
        try {
            
            const { data } = await axios.get(
                `${server}/api/v1/admin/`,
                {withCredentials:true}
            );
            
        return data.admin;
      } catch (err) {
         throw err.response.data.message;
      }
    }
);
const adminLogout = createAsyncThunk(
  "admin/logoutadmin",
  async () => {
      
      try {
          
          const { data } = await axios.get(
              `${server}/api/v1/admin/logout`,
              {withCredentials:true}
          );
          
      return data.message;
    } catch (err) {
       throw err.response.data.message;
    }
  }
);
export {adminLogin , getAdmin , adminLogout}