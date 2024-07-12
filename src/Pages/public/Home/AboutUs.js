import React from 'react'
import { Link } from 'react-router-dom'
import Group from "../../../assets/images/LandingPage/Group.svg"
const AboutUs = () => {
  return (
    <section>
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='about_img'>
                            <img src={Group} alt='group image'/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title mb-4">About Us</h2>
                            <p className="card-text">
                            At [Your Company Name], we are passionate about turning your vision into a reality.
                            With a dedicated team of experienced project managers, we specialize in delivering
                             exceptional project management services tailored to your unique needs. Our commitment 
                             to excellence and a proven track record of successful projects make us your trusted partner
                              in achieving your goals.
                            </p>
                            <Link to="#" className="btn btn-primary">
                            Read More
                            </Link>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs