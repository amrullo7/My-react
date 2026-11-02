import loginRequest from '@/api/auth'
import React from 'react'
import { useNavigate } from 'react-router'
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import google from "../Layout//img/google 1.png" 
import face from "../Layout//img//facebook 1.png" 
import logo from "../Layout/img/Logo (11).png"
import { useTranslation } from "react-i18next";
const Login = () => {
  const { t } = useTranslation();
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
    <div className='flex justify-center pt-0 lg:pt-[100px]   lg:bg-[#BEBEC0] sm:bg-white'>
<form action="" onSubmit={handleSubmit} className='flex flex-col gap-[25px] mb-0 lg:mb-[80px] w-[450px] lg:w-[600px] pt-[25px]  bg-white p-8 items-center sm:w-[250px] lg:h-[600px]'>
  <img src={logo} className='block lg:hidden' alt="" />
  <h1 className='text-[20px] '>
    <span className='text-[#46A358] '>{t("Login")}</span>  | {t("Register")}
  </h1>
  <Field>
      <FieldLabel htmlFor="input-demo-api-key">{t("Enter your username and password to login.")}</FieldLabel>
      <Input className="h-[40px] w-[50px] lg:w-[500px] "  id="input-demo-api-key" name="email" type="text" placeholder="almamun_uxui@outlook.com" />
      
    </Field>
      <Field>
      <Input className="h-[40px] w-[200px] lg:w-[500px]" id="input-demo-api-key" name="pass" type="password" placeholder={t("Password")} />
      
    </Field>
<p className='text-[#46A358] self-end'>{t("Forgot Password?")}</p>
<button type="submit" className='text-white bg-[#46A358] w-[450px] lg:w-[500px] rounded-[5px] h-[50px]'>{t("Login")}</button>
<p>{t("Or login with")}</p>
<div className="flex items-center lg:bg-white lg:text-black text-white bg-[#4086F4] justify-center gap-[15px] h-[55px] rounded-[5px] border border-gray-400 lg:w-[500px] w-[450px]">
  <img src={google} alt="" />
  <p>{t("Login with Google")}</p>
</div>
<div className="flex items-center lg:bg-white lg:text-black text-white bg-[#3B5999] justify-center gap-[15px] h-[55px] rounded-[5px] border border-gray-400 lg:w-[500px] w-[450px]">
  <img src={face} alt="" />
  <p>{t("Login with Facebook")}</p>
</div>
</form>

    </div>
  )
}

export default Login