import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

const Authflow = ({children}) => {
    const navigate=useNavigate()
 const location=useLocation()
    console.log(window.location.pathname);
    const token =localStorage.getItem("token" )
    useEffect(()=>{
      if(token && window.location.pathname=="/login"){
        console.log("a");
        navigate("/",{replace:true})
      }else if(!token && window.location.pathname!="/login"){
        console.log("b");
        navigate("login",{replace:true})
      }
    },[location.pathname,navigate])
  return (
    <div>
        {children}
    </div>
  )
}

export default Authflow