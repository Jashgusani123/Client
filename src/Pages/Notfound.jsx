import { Error as ErrorIcon } from '@mui/icons-material';
import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <Container maxWidth={"lg"} sx={{
      height:"100vh"
    }}>
      <Stack alignItems={"center"} justifyContent={"center"} height={"100%"} spacing={"2rem"}>
        <ErrorIcon sx={{fontSize:"13rem"}}/>
        <Typography variant='h1'>404</Typography>
        <Typography variant='h3'>Not Found</Typography>
        <Link to="/">Go Back To Home</Link>
      </Stack>
    </Container>
  )
}

export default Notfound