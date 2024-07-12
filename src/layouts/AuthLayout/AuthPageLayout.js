import React from 'react'
import AuthHeader from "../AuthLayout/AuthHeader"
import { Outlet } from 'react-router-dom'
const AuthPageLayout = () => {
  return (
    <section>
      <div className='authpagelayout'>
        <div className='container'>
          <AuthHeader/>
          <Outlet/>
        </div>
      </div>
    </section>
  )
}

export default AuthPageLayout