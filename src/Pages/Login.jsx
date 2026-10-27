import loginRequest from '@/api/auth'
import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  let navigate=useNavigate()
  let handleSubmit=async(e)=>{
    e.preventDefault()
    let obj={
      email:e.target.email.value,
      password:e.target.pass.value
    }
    let token=await loginRequest(obj)
  if(token){
    navigate("/",{replace:true})
  }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" />
        <input type="password" name="pass" id="" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login