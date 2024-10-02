import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { useAsyncMutation } from "../../Hooks/hook";
import {
  useLazySearchUserQuery,
  useSendFriendRequestMutation,
} from "../../redux/api/api";
import { setIsSearch } from "../../redux/reducers/misc";
import UserItem from "../shared/UserItem";


const Search = () => {
  const search = useInputValidation();
  const dispatch = useDispatch();

  const { isSearch } = useSelector((state) => state.misc);

  const [searchUser] = useLazySearchUserQuery();
  const [sendFriendRequest , isLoadingSendFriendRequst] = useAsyncMutation(useSendFriendRequestMutation);

  const [Users, setusers] = useState([]);

  const addFriendHandler = async(id) => {
   await sendFriendRequest("Sending Friend Request.." , {userId:id})
  };

  const searchCloseHandler = () => dispatch(setIsSearch(false));

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      // Check if search value is empty, and if so, retrieve all users
      searchUser(search.value || "") 
        .then(({ data }) => setusers(data.user))
        .catch((err) => console.log(err));
    }, 1000);
  
    return () => {
      clearTimeout(timeOutId);
    };
  }, [search.value]);

  return (
    <Dialog open={isSearch} onClose={searchCloseHandler}>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value || ""}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {Users.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={addFriendHandler}
              handlerLoding={isLoadingSendFriendRequst}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
