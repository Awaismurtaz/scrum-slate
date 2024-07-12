import React from 'react'
import Chart from "../../../assets/images/LandingPage/chart.svg"
import { Link } from 'react-router-dom'
const chart = () => {
  return (
    <section>
        <div className='chart'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='chart_img'>
                            <img src={Chart} alt='chart'/>
                        </div>
                    </div>
                    <div className='col text-col'>
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Mange Your Project Easily</h1>
                            <p className="card-text mt-4 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            </p>
                            <div className='row'>
                                <div className='col'>
                                    <div className='steps mb-4'>
                                        <label>Overview</label>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className='steps '>
                                        <label>Project</label>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                                <div className='col mb-4 ml-5'>
                                    <div className='steps mb-4'>
                                        <label>Sprints</label>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className='steps'>
                                        <label>Reports</label>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="#" className="btn btn-primary">
                               Get Started
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

export default chart