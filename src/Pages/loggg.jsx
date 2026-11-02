import loginRequest from '@/api/ath'
import React from 'react'
import { useNavigate } from 'react-router'

const loggg = () => {
    let navigate=useNavigate()
    let handleSubmit=async(e)=>{
        e.preventDefault()
        let obj={
            email:e.target.email.value,
            pass:e.target.pass.value
        }
        let token=await loginRequest(obj)
        if(token){
            navigate("/",{replace:true})
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" id="" />
            <input type="text" name="pass" id="" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default loggg