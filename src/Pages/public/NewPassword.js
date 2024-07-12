import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import eye from '../../assets/images/Icon_awesome-eye.svg'
import { Outlet } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema= yup.object().shape({
password:yup.string().required("Please Enter your Password"),
confirmpassword:yup.string().required("Please Enter your Confirm Password")
}).required();

const NewPassword = () => {
  const {register, handleSubmit, formState:{errors,isDirty,isValid}}
  =useForm({resolver:yupResolver(schema),mode:"onChange"})  
  // create states
  const [password, setPassword]= useState();
  const [confirmpassword, setConfirmpassword]=useState();
  const [showPassword, setShowPassword]=useState(false)
  const [ConfirmShowPassword,setConfirmShowPassword] =useState(false)

  const onSubmit =(data)=>{
    console.log(data)
  }
  const handelShowpassword =()=>{
    setShowPassword(!showPassword)
  }
  const handelConfirmShowpassword =()=>{
    setConfirmShowPassword(!ConfirmShowPassword)
  }
  return (
    <section>
    <div className='newpassword'>
      <div className='container'>
       <Outlet/> 
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center b">Set new Password</h4>
          <form className='signin_form' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 password" >
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
             
              <input
                type={showPassword ? "text":"password"}
                className="form-control control_input "
                id="exampleInputPassword1"
                placeholder='********'
                onChange={(e)=>setPassword(e.target.value)}
                {...register("password")}
              />
              {errors.password&& (<p className='text-danger mt-2'>{errors.password.message}</p>)}
              <span type='button' className='eye' onClick={handelShowpassword}>
                {showPassword ?<i className="bi bi-eye "/>:  <i className="bi bi-eye-slash"/>}
              </span>
            </div>
            <div className="mb-3 password" >
              <label htmlFor="exampleInputPassword1" className="form-label">
              Conform Password
              </label>
             
              <input
                type={ConfirmShowPassword? "text":"password"}
                className="form-control  control_input"
                id="exampleInputPassword1"
                placeholder='********'
                onChange={(e)=>setConfirmpassword(e.target.value)}
                {...register("confirmpassword")}
              />
              {errors.confirmpassword && (<p className='text-danger mt-2'>{errors.confirmpassword.message}</p>)}
              <span type='button' className='eye' onClick={handelConfirmShowpassword}>
                {ConfirmShowPassword ?<i className="bi bi-eye "/>:  <i className="bi bi-eye-slash"/>}
              </span>
            </div>
            <button type="submit" className="btn btn_sign_in mb-4" disabled={!isDirty || !isValid}>
               Reset Password
            </button>
          </form>

        </div>
      </div>
      </div>
    </div>
  </section>
  )
}

export default NewPassword ;