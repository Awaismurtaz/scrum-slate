import React from 'react'
import { Link } from 'react-router-dom'
import Mange from "../../../assets/images/LandingPage/Group_1391.png"
const started = () => {
  return (
    <section>
        <div className='started'> 
           <div className='container'>
            <div className='row'>
              <div className='col text_col'>
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Simple Way To Mange Your Project With (Name)</h1>
                  <p className="card-text">
                  Are you a project? Because meeting you would be a major milestone on my timeline.
                  Let's collaborate and create a project plan for a future filled with success, one task at a time.
                  </p>
                  <div className='card-link'>
                    <Link to="" className="btn btn-primary">
                      Get Started
                    </Link>
                     <Link to="" className="btn btn-outline-primary">
                     <i class="bi bi-play-fill"/>
                      Watch video
                    </Link>
                  </div>
                </div>
              </div>
              </div>
              <div className='col mange_col'>
                <div className='mange'> 
                <img src={Mange} alt="image"/>
                </div>
              </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default started