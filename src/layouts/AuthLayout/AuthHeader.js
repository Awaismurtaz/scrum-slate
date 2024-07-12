import React from 'react'
import { Link } from 'react-router-dom'
 import Brand from "../../assets/images/Group_626.svg"
const AuthLayout = () => {
  return (
    <section className='authlayout'>
         <nav className="navbar">
          <div className="navbar-brand">
            <img src={Brand} alt="Scrum Slate" />
          </div>
          <Link type='button' className='button_home' to="/">Back to Home</Link>
        </nav>
    </section>
  )
}

export default AuthLayout;