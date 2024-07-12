import React from 'react'
import { Link } from 'react-router-dom'
import Zoom from "../../../assets/images/LandingPage/Zoom-Logo-2014.png"
import Google from "../../../assets/images/LandingPage/google.png"
import Freepik from "../../../assets/images/LandingPage/freepik.png"
import Skype from "../../../assets/images/LandingPage/skype.png"
import Freedcamp from "../../../assets/images/LandingPage/freedcamp.png"
import Slack from "../../../assets/images/LandingPage/slack.png"
const companies = () => {
  return (
   <section>
    <div className='companies'>
    <div className='container-fluid'>
    <div className="card">
        <div className="card-body">
            <h1 className="card-title text-center"><span className='text-primary'>100+</span>Companies Trust Us</h1>
            <ul className='companies_link'>
                <li>
                    <Link>
                    <img src={Zoom}/>
                    </Link>
                </li>
                <li>
                    <Link>
                    <img src={Google}/>
                    </Link>
                </li>
                <li>
                    <Link>
                    <img src={Freepik}/>
                    </Link>
                </li>
                <li>
                    <Link>
                    <img src={Skype}/>
                    </Link>
                </li>
                <li>
                    <Link>
                    <img src={Freedcamp}/>
                    </Link>
                </li>
            <li>
                <Link>
                   <img src={Slack}/>
                </Link>
            </li>
        </ul>
        </div>
       </div>
    </div>
    </div>
   </section>
  )
}

export default companies