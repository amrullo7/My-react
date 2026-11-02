import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

let dapi = "https://test-swagger-2ph6.onrender.com/products?limit=12";

import ras from "../Layout/imgpol/01 3.png";
import ras2 from "../Layout/imgpol//image 1.png";
import ras3 from "../Layout/imgpol/image 10 (1).png";
import ras4 from "../Layout/imgpol/image 2 (1).png";
import locl from "../Layout/socials//Group 40 (1).png"
import face from "../Layout/socials/Facebook.png"
import inst from "../Layout/socials/Instagram.png"
import link from "../Layout/socials/Linkedin.png"
import twt from "../Layout/socials/Twitter.png"
import un from "../Layout/socials/Union.png"

import group from "../Layout/imgpol/Group 23.png"
import logo from "..///Layout/imgpol/Logo (12).png"
import loc from "../Layout/imgpol/Location.png"
import mes from "../Layout//imgpol/Message.png"
import cal from "../Layout/imgpol/Calling.png"
import bank from "../Layout/socials/image 16.png"


import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import { Autoplay, Pagination } from "swiper/modules";

let rasarr = [ras, ras2, ras3, ras4];
let api="https://test-swagger-2ph6.onrender.com/products/"

const About = () => {
  const { t } = useTranslation();
  const [pro,setPro]=useState({})
  let [count,setCount]=useState(0)
  let [prew,setPrew]=useState("desc")
  
    let [data, setData] = useState([]);
  const {id}=useParams()
  if(!localStorage.getItem("cart")){

    localStorage.setItem("cart",JSON.stringify([]))
  }
  if(!localStorage.getItem("wsh")){
    localStorage.setItem("wsh",JSON.stringify([]))
  }
  function addwish(el) {
    let wsh=JSON.parse(localStorage.getItem("wsh"))
    wsh.push(el)
    localStorage.setItem("wsh",JSON.stringify(wsh))
  }

  const [man, setman] = useState(rasarr[0]);
  function addToCart(el) {
    let cart=JSON.parse(localStorage.getItem("cart"))
    cart.push({...el,cnt:1})
    
  localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  async function getProduct() {
    try {
      let token=localStorage.getItem("token")
      console.log(token);
      
      let {data}=await axios.get(api+id,{
        headers:{Authorization:`Bearer ${token}`}
      })
      setPro(data??data.data)
      console.log(data);
      console.log(data.data);
      
    } catch (error) {
      console.error();
      
    }
  }
  async function getData() {
    try {
      let url = dapi;


      let token = localStorage.getItem("token");

      let { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
getProduct()
getData()
  },[])
  return (
    <div className='lg:pt-[100px] p-3 lg:p-0'>
      <h1 className='mr-0  lg:ml-[180px]'> <span className='font-bold'>{t("Home")}</span>{t(" / Shop")}</h1>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-[90px]">
        <div className="lg:flex  gap-0 lg:gap-[40px]">
          <div className="">
 {rasarr.map((im)=>{
            return <img className='hidden lg:block lg:w-[100px] lg:h-[100px] ' onClick={()=>setman(im)} src={im} alt="" />
          })}
          </div>
         <img src={man} className='w-[350px]  lg:w-[404px] lg:h-[404px]' alt="" />
        </div>
        <div className="">
          <h1 className='text-[28px] font-semibold'>{pro.name?.toString().slice(0,14
          )}</h1>
          <div className="flex items-center gap-[50px]">
            <p className='text-[#46A358] text-[22px] font-semibold'>
              ${pro.price}.00
            </p>
            <img src={locl} alt="" />
          </div>
           <p className='w-[361px] lg:w-[573px]'>{t("The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.")}</p>
         <p>{t("Size:")}</p>
       <div className="flex gap-[15px] items-center">
        <p className=' border border-[#46A358] flex text-[#46A358] text-[16px] justify-center rounded-[50%] w-[28px] h-[28px]'>S</p>
        <p className=' border  flex border-black text-[16px] justify-center rounded-[50%] w-[28px] h-[28px]'>M</p>
        <p className=' border  flex border-black text-[16px] justify-center rounded-[50%] w-[28px] h-[28px]'>L</p>
        <p className=' border  flex border-black text-[16px] justify-center rounded-[50%] w-[28px] h-[28px]'>XL</p>
     
       </div>
       <div className="lg:flex hidden lg:block  lg:items-center gap-[15px]"> 

        <p onClick={()=>{setCount(count-1)}} className='   flex  bg-[#46A358] text-white text-[16px] justify-center rounded-[50%] w-[28px] h-[28px]'>-</p>
<p>{count}</p>
        <p onClick={()=>{setCount(count+1)}} className='   flex  bg-[#46A358] text-white text-[16px] justify-center rounded-[50%] w-[28px] h-[28px]'>+</p>

            <button className="flex items-center self-end text-white lg:w-[140px] h-[40px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">
              {t("BUY NOW")}
            </button>
             <button onClick={()=>addToCart(pro)} className="hidden lg:block flex items-center self-end  w-[140px] h-[40px] rounded-[6px] border text-[#46A358] border-[#46A358] justify-center gap-[5px]">
            {t("ADD TO CART")}
            </button>
                <button onClick={()=>addwish(pro)} className="flex items-center self-end  w-[40px] h-[40px] rounded-[6px] border text-[#46A358] border-[#46A358] justify-center gap-[5px]">
            ❤️
            </button>
       </div>
      <p>{t("SKU:")} 1995751877966</p>
      <p>{t("Categories:")} {t("Potter Plants")}</p>
      <p>{t("Tags:")} {t("Home")}, {t("Garden")}, {t("Plants")}</p>
       <div className="flex items-center gap-5">

      <p className='font-semibold'>{t("Share this products:")}</p>
         <div className="flex items-center gap-[25px]">
                     <img src={face} alt="" />
                     <img src={inst} alt="" />
                     <img src={link} alt="" />
                     <img src={un} alt="" />
                     <img src={twt} alt="" />
                   </div>
       </div>
        </div>
       
      </div>
      <div className="flex flex-col gap-[15px] justify-center items-center">
        <div className="flex items-center gap-[15px]">
          <h1 className='hidden lg:block font-semibold text-[#46A358]' onClick={()=>{setPrew("desc")}}>{t("Product Description")}</h1>
          <h1 className='hidden lg:block font-semibold' onClick={()=>{setPrew("rew")}}>{t("Reviews (19)")}</h1>
        </div>
        <div className="hidden lg:block">
          {prew=="desc"?
          <div className="flex flex-col gap-[15px] w-[1199px]">
            
        <p>{t("productDetailsText")}</p>
      <h1 className='font-semibold'>{t("Living Room:")}</h1> 
      <p>{t("roomPlanterText")}</p>
    <h1 className='font-semibold'>{t("Dining Room:")}</h1>
    <p>{t("The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.")}</p>
  <h1 className='font-semibold'>{t("Office:")}</h1> 
  <p>{t("roomPlanterText")}</p>

          </div>
: 
          <div className="flex flex-col gap-[15px] w-[1199px]">
     
        <p>{t("productDetailsText")}</p>
      <h1>{t("Living Room:")}</h1> 
      <p>{t("roomPlanterText")}</p>
    <h1>{t("Dining Room:")}</h1>
    <p>{t("The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.")}</p>
  <h1>{t("Office:")}</h1> 
  <p>{t("roomPlanterText")}</p>

</div>
}
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <Swiper
          className='hidden lg:block'
        modules={[Autoplay, Pagination]}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {data.map((el,i)=>{
          return <SwiperSlide key={el.id}>   <div key={el.id} className="w-[175px]  lg:w-[360px] ">
                    <img
                      className="bg-[#FBFBFB]"
                      src={rasarr[i % rasarr.length]}
                      alt=""
                    />
                 
                    <h1>{el.name.slice(0,9)}</h1>
                    <p className="text-[#46A358] font-bold text-[18px]">
                      ${el.price}.00
                    </p>
                  </div>
          </SwiperSlide>
        })}

      </Swiper>
        </div>
      </div>
       <div className="hidden text-black  lg:block mt-[50px]">
              <div className="flex justify-center bg-[#FBFBFB]">
                <img src={group} alt="" />
              </div>
              <div className="flex justify-center items-center mt-[50px] bg-[#EDF6EF] h-[88px]  gap-[145px]">
       <img src={logo} alt="" />
       <div className="flex items-center gap-[15px]">
        <img src={loc} alt="" />
        <p>70 West Buckingham Ave. <br />
      Farmingdale, NY 11735</p>
       </div>
        <div className="flex items-center gap-[15px]">
        <img src={mes} alt="" />
        <p>contact@greenshop.com</p>
       </div>
         <div className="flex items-center gap-[15px]">
        <img src={cal} alt="" />
        <p>+88 01911 717 490</p>
       </div>
              </div>
              <div className="flex justify-center mt-4 bg-[#FBFBFB]  gap-[205px]">
                <div className="">
                  <h1 className="text-[18px] font-bold">{t("My account")}</h1>
                  <p className="flex flex-col gap-[5px]">{t("My Account")} <br />
      {t("Our stores")} <br />
      {t("Contact us")}  <br />
      {t("Career")} <br />
      {t("Specials")}</p>
                </div>
                   <div className="">
                  <h1 className="text-[18px] font-bold">{t("Help & Guide")}</h1>
                  <p className="flex flex-col gap-[5px]">{t("Help Center")} <br />
      {t("How to Buy")} <br />
      {t("Shipping & Delivery")} <br />
      {t("Product Policy")} <br />
      {t("How to Return")}</p>
                </div>
                   <div className="">
                  <h1 className="text-[18px] font-bold">{t("Categories")}</h1> 
                  <p className="flex flex-col gap-[5px]">{t("House Plants")} <br />
      {t("Potter Plants")} <br />
      {t("Seeds")} <br />
      {t("Small Plants")} <br />
      {t("Accessories")}</p>
                </div>
                <div className="flex flex-col gap-[7px] items-start">
                  <h1 className="text-[18px] font-bold">{t("Social Media")}</h1> 
                  <div className="flex items-center gap-[25px]">
                    <img src={face} alt="" />
                    <img src={inst} alt="" />
                    <img src={link} alt="" />
                    <img src={un} alt="" />
                    <img src={twt} alt="" />
                  </div>
                  <h1 className="text-[18px] font-bold">{t("We accept")}</h1> 
                  <img src={bank} alt="" />
                  
                </div>
              </div>
              <hr className="mt-5" />
              <p className="flex justify-center mt-5">{t("© 2021 GreenShop. All Rights Reserved.")}</p>
            </div>
    </div>
  )
}

export default About