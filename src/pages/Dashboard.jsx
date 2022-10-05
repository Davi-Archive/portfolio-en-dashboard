import React from 'react'
import { Box, Typography } from '@mui/material'



const Dashboard = () => {
  console.log(import.meta.env.VITE_API_URL)
  return (
    <Box marginLeft="auto" marginTop="auto">
      <Typography variant="h1">Hello, welcome</Typography>
    </Box>
  )
}

export default Dashboard