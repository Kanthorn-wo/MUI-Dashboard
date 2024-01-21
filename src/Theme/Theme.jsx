import React from 'react'
import { Box } from '@mui/material';
import SideBar from '../Components/SideBar';

const Theme = ({ children }) => {

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '55px' }}>
          {children}
        </Box>
      </Box>
    </>
  )
}

export default Theme