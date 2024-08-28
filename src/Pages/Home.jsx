import React from 'react'
import Applayout from '../Components/layout/Applayout'
import { Box, Typography } from '@mui/material'
import { grayColor } from '../Constants/Color'

const Home = () => {
  return (
    <Box bgcolor={grayColor} height={"100%"}>
    <Typography p={"2rem"} variant='h5' textAlign={"center"}>Select a Friend to Chat</Typography>

    </Box>
  )
}

export default Applayout()(Home)