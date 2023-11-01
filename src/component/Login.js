import React, { useState } from 'react'
import './style.css'
import { Link, useNavigate, } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail]= useState("")
  const [pass, setPass]= useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    setEmail("")
    setPass("")
    toast.success("Login successfully", {
      position : "top-center"
    })
    setTimeout(()=>{
       navigate("/")
    }, 2000)
   
  }

  
  return ( 
  <>
    <div className="login-page">
    <div className="login-container">
      <h2 className='login-title'>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control input-size" id="exampleInputEmail1" value={email} onChange={e=>setEmail(e.target.value)} aria-describedby="emailHelp" placeholder='Enter your email address' />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control input-size" id="exampleInputPassword1" value={pass} onChange={e=>setPass(e.target.value)} placeholder='Enter your password'/>
        </div>
        
        <button type="submit" disabled={email.length ===0 || pass.length ===0} className="btn btn-primary login-button">submit</button>
      </form>
      <p>Don't have an account? <Link to="/signup" className='login-signup' >Sign up</Link></p>
    </div>
    </div>
    <ToastContainer  />
   </>
  )
}

export default Login
