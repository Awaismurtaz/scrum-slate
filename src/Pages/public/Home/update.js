import React from 'react'

const update = () => {
  return (
 <section>
   <div className='update'>
   <div className='container'>
      <div className="card text-center">
         <div className="card-body">
            <h1 className="card-title">Subscribe For Updates</h1>
            <p className="card-text">
            Be the first to know about our latest news, offers, and insights.
             Join our community and subscribe for updates today
            </p>
            <div className='form'>
               <input type='search' className='form-control' placeholder='Enter your Email'/>
               <button className='btn btn-primary subscribe'>Subscribe</button>
            </div>
         </div>
      </div>
   </div>
</div>
 </section>
  )
}

export default update