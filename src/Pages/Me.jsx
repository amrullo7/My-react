import axios from 'axios';
import React, { useEffect, useState } from 'react'
let api="https://test-swagger-2ph6.onrender.com/auth/me"
import act from "../Layout//imgme/Activity.png"
import dow from "../Layout/imgme/Download.png"
import loc from "../Layout/imgme/Location.png"
import shop from "../Layout/imgme/shopping 1 (1).png"
import us from "../Layout/imgme/User.svg"
import logout from "../Layout/imgme/Logout (1).png"
import heart from "../Layout/imgme/heart 1.png"
import { Input } from '@/components/ui/input';
import { useTranslation } from "react-i18next";
const Me = () => {
  const { t } = useTranslation();
    const [user,setUser]=useState({})
async function getUser() {
    try {
        let token=localStorage.getItem("token")
        let {data}=await axios.get(api,{
            headers:{Authorization:"Bearer"+" "+token}
        })
        setUser(data)
        console.log(data);
        
    } catch (error) {
        console.error(error);
        
    }
    
}
useEffect(()=>{
getUser()    
},[])
  return (
    <div className='pt-[100px] '>

<div className="flex justify-center gap-[50px]">
    <div className="hidden lg:block text-black bg-[#FBFBFB] lg:flex lg:flex-col lg:gap-[40px] lg:w-[310px] p-5 ">
          <h1 className="font-bold text-[18px]">{t("My Account")}</h1>
         <div className="flex items-center gap-[15px]">
            <img src={us} alt="" />
  <p>{t("Account Details")}</p>
         </div>
          <div className="flex items-center gap-[15px]">
            <img src={loc} alt="" />
  <p>{t("Address")}</p>
         </div>
          <div className="flex items-center gap-[15px]">
            <img src={shop} alt="" />
  <p>{t("Orders")}</p>
         </div>
          <div className="flex items-center gap-[15px]">
            <img src={heart} alt="" />
  <p>{t("Wishlist")}</p>
         </div>
          <div className="flex items-center gap-[15px]">
            <img src={act} alt="" />
  <p>{t("Reports")}</p>
         </div>
          <div className="flex items-center gap-[15px]">
            <img src={dow} alt="" />
  <p>{t("Downloads")}</p>
         </div>
          <div className="flex items-center gap-[15px]">
            <img src={loc} alt="" />
  <p>{t("Support")}</p>
         </div>
          <div onClick={()=>{
            localStorage.removeItem("token")
          }} className="flex items-center gap-[15px]">
            <img src={logout} alt="" />
  <p>{t("Loguot")}</p>
         </div>
        </div>
        <div className="flex flex-wrap  w-[900px] gap-[25px]">
            <div className="">
              <p>{t("First Name")}</p>
              <Input type="text" 
              defaultValue={user.name} className="w-[350px]" placeholder={t("Name")} />
            </div>
            <div className="">
              <p>{t("Last Name")}</p>
              <Input 
              defaultValue={user.name} type="text" className="w-[350px]" placeholder={t("Name")} />
            </div>
            <div className="">
              <p>{t("Country / Region")}</p>
              <Input
                type="text"
                
              defaultValue={user.city}
                className="w-[350px]"
                placeholder={t("Select a country / region")}
              />
            </div>
            <div className="">
              <p>Town / City</p>
              <Input
              
              defaultValue={user.city}
              type="text" className="w-[350px]" placeholder={t("Name")} />
            </div>
           
            <div className="">
              <p>{t("Email address")}</p>
              <Input
              
              defaultValue={user.email}
              type="text" className="w-[350px]" placeholder="" />
            </div>
            <div className="">
              <p>{t("Role")}</p>
              <Input
              
              defaultValue={user.role}
              type="phone" className="w-[350px]" placeholder="" />
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" name="" id="" />
              <p>{t("Ship to a different address?")}</p>
            </div>
            <br />
            <div className="">
              <p>{t("Order notes (optional)")}</p>
              <textarea name="" id=""></textarea>
            </div>
          </div>
</div>
    </div>
  )
}

export default Me