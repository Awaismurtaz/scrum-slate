import React from 'react'
import Task from "../../../assets/images/LandingPage/task.svg"
import Team from "../../../assets/images/LandingPage/Team.svg"
import Bugs from "../../../assets/images/LandingPage/Bugs.svg"
import Conversion from "../../../assets/images/LandingPage/Conversation.svg"
const features = () => {
  return (
    <section>
        <div className='features'>
            <div className='container'>
                <div className='text-center title'>
                    <h1>Our Features</h1>
                </div>
                <div className='row'>
                    <div className='col'>
                    <div className="card">
                        <div className="card-body text-center">
                            <div className='card_img mb-4'>
                                <img src={Task} alt='Task'/>
                            </div>
                            <h5 className="card-title mb-3">Task</h5>
                            <p className="card-text">
                                We Will Provide Enhanced Task View Features
                            </p>
                        </div>
                    </div>

                    </div>
                    <div className='col'>
                    <div className="card">
                        <div className="card-body text-center">
                            <div className='card_img team mb-4'>
                                <img src={Team} alt='Team Management'/>
                            </div>
                            <h5 className="card-title mb-3">Team Management</h5>
                            <p className="card-text text-wrap">
                            We Will Provide Team Management Features
                            </p>
                        </div>
                    </div>

                    </div>
                    <div className='col'>
                    <div className="card">
                        <div className="card-body text-center">
                            <div className='card_img mb-4'>
                                <img src={Conversion} alt='Live Conversation'/>
                            </div>
                            <h5 className="card-title mb-3">Live Conversation</h5>
                            <p className="card-text">
                            We Will Provide Innovative Live Conversation Features
                            </p>
                        </div>
                    </div>

                    </div>
                    <div className='col'>
                    <div className="card">
                        <div className="card-body text-center">
                            <div className='card_img Bug mb-4'>
                                <img src={Bugs} alt='Bug Tracking'/>
                            </div>
                            <h5 className="card-title mb-3">Bug Tracking</h5>
                            <p className="card-text">
                            We Will Provide Robust Bug Tracking Features
                            </p>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default features