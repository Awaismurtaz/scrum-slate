import React from 'react'
import Awais from "../../../assets/images/LandingPage/AwaisP.png"
import coloun from "../../../assets/images/LandingPage/Overview.png"
import Hamza from "../../../assets/images/LandingPage/hamza.png"
const Testimonials = () => {
   return (
      <section>
         <div className='testimonial'>
            <div className='container'>
               <div className='text-center title mb-5'>
                  <h1>User Testimonials</h1>
               </div>
               <div className='Testmonial_slide'>
                  <div id="carouselExampleControlsNoTouching" className="carousel slide"
                     data-bs-touch="false"
                  >
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="row">
                              <div className="col-sm-6 mb-3 mb-sm-0">
                                 <div className="card">
                                    <div className="card-body">
                                       <div className='profile_detail'>
                                          <img src={Hamza} alt='profile' />
                                          <span className='user_name'>
                                             <label>Hamza</label>
                                             <span>
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                             </span>
                                          </span>
                                       </div>
                                       <img src={coloun} className='colon' />
                                       <p className="card-text mt-4">
                                          Wow, What A Game-Changer! I Stumbled Upon This Project Management Landing Page,
                                          And It Has Completely Revolutionized The Way I Handle My Projects.
                                          The Design Is Sleek And User-Friendly, Making It Easy To Navigate And Find The Resources I Need.
                                          The Abundance Of Tools And Templates Available Has Streamlined My Workflow,
                                          Saving Me Valuable Time And Reducing Stress.
                                          Whether You're A Seasoned Project Manager Or Just Getting Started,
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6 mb-3 mb-sm-0">
                                 <div className="card">
                                    <div className="card-body">
                                       <div className='profile_detail'>
                                          <img src={Awais} alt='profile' />
                                          <span className='user_name'>
                                             <label>Awais</label>
                                             <span>
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                             </span>
                                          </span>
                                       </div>
                                       <img src={coloun} className='colon' />
                                       <p className="card-text mt-4">
                                          Wow, What A Game-Changer! I Stumbled Upon This Project Management Landing Page,
                                          And It Has Completely Revolutionized The Way I Handle My Projects.
                                          The Design Is Sleek And User-Friendly, Making It Easy To Navigate And Find The Resources I Need.
                                          The Abundance Of Tools And Templates Available Has Streamlined My Workflow,
                                          Saving Me Valuable Time And Reducing Stress.
                                          Whether You're A Seasoned Project Manager Or Just Getting Started,
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item ">
                           <div className="row">
                              <div className="col-sm-6 mb-3 mb-sm-0">
                                 <div className="card">
                                    <div className="card-body">
                                       <div className='profile_detail'>
                                          <img src={Awais} alt='profile' />
                                          <span className='user_name'>
                                             <label>Awais</label>
                                             <span>
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                             </span>
                                          </span>
                                       </div>
                                       <img src={coloun} className='colon' />
                                       <p className="card-text mt-4">
                                          Wow, What A Game-Changer! I Stumbled Upon This Project Management Landing Page,
                                          And It Has Completely Revolutionized The Way I Handle My Projects.
                                          The Design Is Sleek And User-Friendly, Making It Easy To Navigate And Find The Resources I Need.
                                          The Abundance Of Tools And Templates Available Has Streamlined My Workflow,
                                          Saving Me Valuable Time And Reducing Stress.
                                          Whether You're A Seasoned Project Manager Or Just Getting Started,
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6 mb-3 mb-sm-0">
                                 <div className="card">
                                    <div className="card-body">
                                       <div className='profile_detail'>
                                          <img src={Hamza} alt='profile' />
                                          <span className='user_name'>
                                             <label>Hamza</label>
                                             <span>
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                                <i class="bi bi-star-fill" />
                                             </span>
                                          </span>
                                       </div>
                                       <img src={coloun} className='colon' />
                                       <p className="card-text mt-4">
                                          Wow, What A Game-Changer! I Stumbled Upon This Project Management Landing Page,
                                          And It Has Completely Revolutionized The Way I Handle My Projects.
                                          The Design Is Sleek And User-Friendly, Making It Easy To Navigate And Find The Resources I Need.
                                          The Abundance Of Tools And Templates Available Has Streamlined My Workflow,
                                          Saving Me Valuable Time And Reducing Stress.
                                          Whether You're A Seasoned Project Manager Or Just Getting Started,
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='icons'>
                        <button
                           className="carousel-control-prev"
                           type="button"
                           data-bs-target="#carouselExampleControlsNoTouching"
                           data-bs-slide="prev"
                        >
                           <span className="carousel-control-prev-icon" aria-hidden="true" />
                           <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                           className="carousel-control-next"
                           type="button"
                           data-bs-target="#carouselExampleControlsNoTouching"
                           data-bs-slide="next"
                        >
                           <span className="carousel-control-next-icon" aria-hidden="true" />
                           <span className="visually-hidden">Next</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Testimonials