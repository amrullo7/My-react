import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const log = ({ child }) => {
  let navigate=useNavigate()
  let location=useLocation()
  console.log(window.location.pathname);
  let token=localStorage.getItem("token")
  useEffect(()=>{
    if(token && window.location.pathname=="/login"){
      console.log("a");
      navigate("/",{replace:true})
    }else if(!token && window.location.pathname!="/login"){
      console.log("b");
      navigate("login",{replace:true})
      
    }
  },[location.pathname,navigate])
  
  return <div>{child}</div>;
};

export default log;
