import React from 'react'
import Brand from "../../assets/images/LandingPage/Group_634.svg"
import Facebook from "../../../src/assets/images/LandingPage/facebook.svg";
import Tewitter from '../../assets/images/LandingPage/twitter.svg'
import Linkdin from '../../assets/images/LandingPage/linkedin.svg'
import Pinterest from '../../assets/images/LandingPage/pinterest.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section>
        <div className='LandingPageFooter'>
            <div className='container'>
               <div className='row'>
                <div className='col'>
                <div class="card" >
                    <img src={Brand} class="card-img-top" alt="scrum slate"/>
                    <div class="card-body">
                        <p class="card-text">Are you a project? Because meeting you would be a major </p>
                      <div className='social_icon'>
                        <a type='button' className='social_btn'><Link><img src={Facebook}/></Link></a>
                        <a type='button' className='social_btn'><Link><img src={Tewitter}/></Link></a>
                        <a type='button' className='social_btn'><Link><img src={Linkdin}/></Link></a>
                        <a type='button' className='social_btn'><Link><img src={Pinterest}/></Link></a>
                      </div>
                    </div>
                </div>
                </div>
                <div className='col'>
                   <div className='links'>
                   <div className='card '>
                    <h4 className='card-title'>Links</h4>
                    <ul className="list-group list-group-flush"> 
                        <li className="list-group-item"><Link to="#">Home</Link></li>
                        <li className="list-group-item"><Link to="#">About us</Link>  </li>
                        <li className="list-group-item"> <Link to="#">Our Process</Link></li>
                        <li className="list-group-item"><Link to="#">Services</Link></li>
                    </ul>
                    </div>
                   </div>
                </div>
                <div className='col'>
                 <div className='links'>
                   <div className='card '>
                    <h4 className='card-title'>Community</h4>
                    <ul className="list-group list-group-flush"> 
                        <li className="list-group-item"><Link to="#">Go Premium</Link></li>
                        <li className="list-group-item"><Link to="#">Team Plans</Link>  </li>
                        <li className="list-group-item"> <Link to="#">Refer a Friend</Link></li>
                        <li className="list-group-item"><Link to="#">Gift Cards</Link></li>
                    </ul>
                    </div>
                   </div>
                   </div>
                <div className='col'> 
                 <div className='links'>
                   <div className='card '>
                    <h4 className='card-title'>Resources</h4>
                    <ul className="list-group list-group-flush"> 
                        <li className="list-group-item"><Link to="#">Support</Link></li>
                        <li className="list-group-item"><Link to="#">Latest Updates</Link>  </li>
                        <li className="list-group-item"> <Link to="#">Updates Newsletter</Link></li>
                        <li className="list-group-item"><Link to="#">Flow Management</Link></li>
                    </ul>
                    </div>
                   </div>
                   </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Footer