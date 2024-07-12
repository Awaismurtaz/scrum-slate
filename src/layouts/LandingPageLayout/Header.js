import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Brand from "../../assets/images/LandingPage/Group_634.svg"
const Header = () => {
    const [opensearch , setOpensearch]=useState(false)

    const handelOpen=()=>{
        setOpensearch(true)
    }
    const handelClose=()=>{
        setOpensearch(false)
    }
  return (
    <section>
        <div className='header'>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container ">
                <a className="navbar-brand" >
                    <Link to="">
                     <img src={Brand} alt='scrum slate'/>
                    </Link>
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {opensearch? false :<ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                        Home
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/features">
                       Features
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">
                       About Us
                    </Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                       Pricing
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                       Contact
                    </a>
                    </li>
                </ul>}
                
                <div className="search" role="search"> 
             
                    {!opensearch && (
                        <button onClick={handelOpen}><i className='fas fa-search icon' /></button>
                    )}
                        {opensearch && (
                        <div className='search_close'>
                         <div className="input-group">
                                    <span class="input-group-text" id="basic-addon1"><i className='fas fa-search'/></span>
                                    <input type="text" className="form-control"  placeholder='search...' autoFocus/>
                            </div>
                            <button onClick={handelClose}><i className='fas fa-times icon' /></button>
                        
                        </div>
                    )}
                
                </div>
                  <Link class="btn btn-primary Signin_button" type="button" to="signin">Sign in</Link>
                </div>
            </div>
          </nav>
        </div>
    </section>
  )
}

export default Header