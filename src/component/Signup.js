import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import './style.css'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
  const navigate = useNavigate()
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [pass, setPass]= useState("")
  const [cpass, setCpass]= useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    setEmail("")
    setName("")
    setPass("")
    setCpass("")
    toast.success("Sign up successfully", {
      position : "top-center"
    })
    setTimeout(()=>{
       navigate("/login")
    }, 2000)
   
  }
  return (
    <>
    <div className="signup-page">
    <div className="signup-container">
    <h2 className='signup-title'>Signup Page</h2>
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label htmlFor="name" className="form-label">Full Name</label>
<input type="text" className="form-control input-size" id="name" value={name} onChange={e=>setName(e.target.value)} placeholder='Enter your name'/>
</div>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input type="email" className="form-control input-size" id="exampleInputEmail1" value={email} onChange={e=> setEmail(e.target.value)} aria-describedby="emailHelp" placeholder='Enter your email address'/>
</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input type="password" className="form-control input-size" id="exampleInputPassword1" value={pass} onChange={e=>setPass(e.target.value)} placeholder='Enter your password'/>
</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
<input type="cpassword" className="form-control input-size" id="exampleInputPassword2" value={cpass} onChange={e=>setCpass(e.target.value)} placeholder='Enter your confirm password'/>
</div>

<button type="submit" disabled={name.length===0 || email.length===0 || pass.length===0 || cpass.length===0} className="btn btn-primary signup-button">Submit</button>
</form>

<p>Already have an account? <Link to="/login" className='login-signup'>Login</Link></p>
</div>
</div>
<ToastContainer/>
</>
  )
}

export default Signup
