import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import eye from '../../assets/images/Icon_awesome-eye.svg'
import { Outlet } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  email:yup.string().required("Please Enter your Email"),
  name:yup.string().required("Please Enter your Name"),
  password:yup.string().required("Please Enter your password"),
  confirmpassword:yup.string().required("Please Enter your Confirm Password")
}).required();
const Signup = () => {
  const {register , handleSubmit, formState:{errors,isDirty,isValid}}
  =useForm({resolver:yupResolver(schema),mode:"onChange"})
  const [email, setEmail] = useState();
  const [name, setName]= useState();
  const [password, setPassword]= useState();
  const [confirmpassword, setConfirmPassword]= useState()
  const [showpassword, setShowPassword] =useState(false)
  const [ConfirmShowPassword,setConfirmShowPassword] =useState(false)
  const onSubmit=(data)=>{
    console.log(data)
  }

  const handelShowPassword=()=>{
    setShowPassword(!showpassword)
  }
  const handelConfirmShowpassword =()=>{
    setConfirmShowPassword(!ConfirmShowPassword)
  }
  return (
    <section>
    <div className='signup'>
      <div className='container'>
       <Outlet/> 
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center b">Sign up your account</h4>
          <form className='signin_form' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3  ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control control_input"
                placeholder='example@gmil.com'
                onChange={(e)=>setEmail(e.target.value)}
                {...register("email")}
              />
               {
                errors.email && (<p className="error-message text-danger mt-2">{errors.email.message} </p>
              )}
            </div>
            <div className="mb-3  ">
              <label htmlFor="exampleInputText" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control control_input"
                id="exampleInputText"
                placeholder='name'
                onChange={(e)=>setName(e.target.value)}
                {...register("name")}
              />
               {
                errors.name && (<p className="error-message text-danger mt-2">{errors.name.message} </p>
              )}
            </div>
            <div className="mb-3 password" >
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
             
              <input
                type={showpassword? "text" : "password"}
                className="form-control control_input "
                id="exampleInputPassword1"
                placeholder='********'
                onChange={(e)=>setPassword(e.target.value)}
                {...register("password")}
              />
               {
                errors.password && (<p className="error-message text-danger mt-2">{errors.password.message} </p>
              )}
             <span type='button' className='eye' onClick={handelShowPassword}>
                {showpassword ?<i className="bi bi-eye "/>:  <i className="bi bi-eye-slash"/>}
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
                onChange={(e)=>setConfirmPassword(e.target.value)}
                {...register("confirmpassword")}
              />
               {
                errors.confirmpassword && (<p className="error-message text-danger mt-2">{errors.confirmpassword.message} </p>
              )}
              <span type='button' className='eye' onClick={handelConfirmShowpassword}>
                {ConfirmShowPassword ?<i className="bi bi-eye "/>:  <i className="bi bi-eye-slash"/>}
              </span>
            </div>
            <p className=' mb-3'>
            <input type="checkbox" className="form-check-input mr-4" id="exampleCheck1"/>
            <span> I agree to your </span> 
            <span className='card-text'>terms </span>
            and 
            <span className='card-text'> privacy policy</span>
            </p>
            <button type="submit" className="btn btn_sign_in mb-2" disabled={!isDirty||!isValid}>
              Sign up
            </button>
            <p className='text-center '>
            <span>Already have an account?</span><Link to="/signin"><span className='card-text'> Sign in</span></Link>
            </p>
          </form>

        </div>
      </div>
      </div>
    </div>
  </section>
  )
}

export default Signup;