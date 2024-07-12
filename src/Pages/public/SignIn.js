import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import eye from '../../assets/images/Icon_awesome-eye.svg'
import Google from "../../assets/images/_x31__stroke.svg"
import Apple from "../../assets/images/104490_apple_icon.svg"
import { Outlet } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'
const schema = yup.object().shape({
  email: yup.string().required("Enter Your Valid Email"),
  password: yup.string().required("Enter Your Valid Password"),
}).required();
const SignIn = () => {
  const {
    register, handleSubmit, formState: { errors, isSubmitting, isDirty, isValid }, }
    = useForm({
      resolver: yupResolver(schema), mode: "onChange",
    });

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState()
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    console.log(data, "data")
    const payload = {
      email: data.email,
      password: data.password
    }
    await axios.post("https://scrumslateapi.techenablers.info/api/auth/login", payload)
      .then((resp) => {
        console.log("response", resp)
        const token = (resp.data.data.access_token)
        localStorage.setItem("token", token)
        navigate("/projects")
      }).catch((err) => {
        console.log("error", err)
      });
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section>
      <div className='signin'>
        <div className='container'>
          <Outlet />
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center b">Sign in your account</h4>
              <form className='signin_form' onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-3  ">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>

                  <input
                    type="email"
                    className="form-control "
                    placeholder='example@email.com'
                    onChange={(e) => setEmail(e.target.value)}
                    {...register("email")}
                  />
                  {
                    errors.email && (<p className="error-message text-danger mt-2">{errors.email.message} </p>
                    )}
                </div>
                <div className="mb-3 password" >
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>

                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control "
                    placeholder='********'
                    onChange={(e) => setPassword(e.target.value)}
                    {...register("password")}
                  />
                  {
                    errors.password && (<p className="error-message text-danger mt-2">{errors.password.message} </p>
                    )}
                  <span type='button' className='eye' onClick={togglePasswordVisibility}>
                    {showPassword ? <i className="bi bi-eye " /> : <i className="bi bi-eye-slash" />}
                  </span>
                </div>
                <Link to="/forgotpassword">
                  <p className='card-text text-end mb-3'>Forgot Password?</p>
                </Link>
                <button type="submit" className="btn btn_sign_in mb-3" disabled={!isDirty || !isValid} >
                  Sign in
                </button>
                <p className='text-center mb-3'>
                  <span>Don't have an account?</span><Link to="/signup"><span className='card-text'> Sign up</span></Link>
                </p>
                <div className='google'>
                  <span className="btn btn_google mb-3">
                    Sign in with google
                  </span>
                  <a className='google_icon'> <img src={Google} /></a>
                </div>

                <div className='Apple'>
                  <span className="btn btn_apple mb-3">
                    Sign in with Apple
                  </span>
                  <a className='Apple_icon'> <img src={Apple} /></a>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn