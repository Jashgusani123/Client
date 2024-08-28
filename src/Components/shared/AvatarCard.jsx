import { Avatar, AvatarGroup, Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import {transformImage} from '../../lib/Features';

const AvatarCard = ({ avatara=[], max = 4 }) => {
  useEffect(() => {
  }, [avatara]);

  return (
    <Stack direction={"row"} spacing={1} sx={{position:"relative"}}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"}>
          {avatara.map((url, index) => (
            <Avatar
              key={Math.random() * 100}
              src={transformImage(url)}
              alt={`Avatar ${index}`}
              sx={{
                width: "3rem",
                height: "3rem",
                position: "absolute",
                left: {
                  xs: `${0.5 + index}rem`,
                  sm: `${index}rem`,
                },
              }}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
