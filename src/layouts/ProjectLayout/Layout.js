import * as React from "react";
import Box from "@mui/material/Box";
import Header from './Header'
import Sidebar from '../PrivateLayout/sidebar'
import { Outlet } from 'react-router-dom'
import { Grid } from "@mui/material";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      <Header/>
      <Box>
          <Grid container spacing={1}> 
              <Grid  xs={2} >
                <Sidebar/>
              </Grid>
              <Grid xs={10} >
                <Outlet/>
                <Footer/>
              </Grid>
          </Grid>
      </Box>
    </div>
  );
}

export default Layout

