import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import eye from '../../assets/images/Icon_awesome-eye.svg'
import { Outlet } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Enter Your Valid Email"),
}).required();

const ForgotPassword = () => {
  const {
    register,handleSubmit,formState: { errors, isSubmitting, isDirty, isValid},}
     = useForm({ resolver: yupResolver(schema),mode: "onChange",
  });
  const [email ,setEmail]= useState();
   const onSubmit=(data)=>{
    console.log(data)
   }
  return (
    <section>
    <div className='forgot'>
      <div className='container'>
       <Outlet/> 
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center b">Sign in your account</h4>
          <p class="card-text text-center">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          <form className='signin_form' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder='example@gmil.com'
                onChange={(e)=>setEmail(e.target.value)}
                {...register("email")}
              />
               {
                errors.email && (<p className="error-message text-danger mt-2">{errors.email.message} </p>
              )}
            </div>
            <button type="submit" className="btn btn_sign_in mb-4" disabled={!isDirty || !isValid}>
            Verify Email
            </button>
          </form>

        </div>
      </div>
      </div>
    </div>
  </section>
  )
}

export default ForgotPassword ;