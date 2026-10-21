import React from "react";
import { Link, Outlet } from "react-router";
import logo from "../Layout/img/Frame 64.png";
import phonw from "../Layout/img/phone.png";
import mail from "../Layout/img/mail (1).png";
import vk from "../Layout/img/вк.png";
import soc from "../Layout/img/buttons.png";
import vek from "../Layout/img/Vector (3).png"
import search from "../Layout/img/search.png"

const Layout = () => {
  return (
    <div>
      <nav className=" ">
        <div className="">
          <div className="flex items-center justify-center gap-[30px]">
            <img src={logo} alt="" />
            <p className="text-[14px]">
              Качественные детали и узлы  <br /> для сельскохозяйственной
              техники
            </p>
            <div className="flex flex-col items-end">
              <p>звонок бесплатный</p>
              <h1 className="flex gap-[10px] font-bold text-[18px]">
                <img src={phonw} alt="" /> 8 800 505 72 32{" "}
              </h1>
            </div>
            <div className="flex flex-col items-end">
              <p>отвечаем быстро</p>
              <h1 className="text-black font-bold flex gap-[10px] text-[18px]">
                <img src={mail} alt="" />
                info@kd-grupp.com
              </h1>
            </div>
            <img src={vk} alt="" />
            <img src={soc} alt="" />
          </div>
          <div className="flex justify-center items-center  gap-[315px]">
            <div className="flex justify-center items-center gap-[40px]"> 
              
            <h1 className="text-[#36895F] text-[18px] font-[800px] ">Главная</h1>
            <h1 className="flex items-center gap-3 text-[18px] font-[800px] ">Каталог <img src={vek} alt="" /></h1>
            <h1 className=" text-[18px] font-[800px] ">О нас</h1>
            <h1 className=" text-[18px] font-[800px] ">Новости</h1>
            <h1 className=" text-[18px] font-[800px] ">Партнеры</h1>
            <h1 className=" text-[18px] font-[800px] " >Контакты</h1>
            </div>
            <img src={search} alt="" />
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Layout;
