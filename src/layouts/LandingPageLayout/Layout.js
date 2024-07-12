import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../LandingPageLayout/Header'
import Footer from '../LandingPageLayout/Footer'
function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout