import { Paper, Typography,Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div style={{ background:"#ffff",borderTop:"1px solid lightgray"}}>
        <Box sx={{
         display:"flex",
         alignItems:"center",
         justifyContent:"center",
         width:"100rem",
         minHeight:"60px",
          '@media (max-width:1366px)': {
            width: "60rem !important"
          },
        }}
        >
           <Typography
           sx={{
            display:"flex"
           }}
           >
               © Copyright 2023, Developed by <Box sx={{color:"#0052CC",}}>Riemann Systems</Box> 
            </Typography>
        </Box>
    </div>
  )
}

export default Footer