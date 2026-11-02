import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import logo from "../Layout/img/Logo (10).png"
import ser from "..//Layout/img/Vector (5).png"
import gr from "../Layout/img/Group 1 (2).png"
import us from "..//Layout/imgme/User.svg"
import logout from "../Layout/img/Logout.png"
import { useTranslation } from "react-i18next";
const Layout = () => {
  const [body, setBody] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
    const { i18n, t } = useTranslation();

  function changeLanguage(e) {
    const lang = e.target.value;

    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  useEffect(() => {
    localStorage.setItem("theme", body ? "dark" : "light");
  }, [body]);
  return (
    <div 
      style={{
        backgroundColor: body ? "#111827" : "white",
        color: body ? "white" : "black",
        minHeight: "100vh",
        transition: "background-color 0.3s, color 0.3s",
      }}>
      <div className=""> 
        <nav className="hidden lg:flex lg:justify-center lg:items-center lg:fixed backdrop-blur-2xl  lg:block lg:gap-[300px] z-10 lg:pt-[20px] lg:w-[100%]   ">
          <img src={logo} alt="" />
          <div className="flex gap-[35px]">
            <Link className="text-[16px] " to={"/"}>
           {t("Home")}
            </Link>
            <Link className="text-[16px] " to={"/shop"}>
           {t("Shop")}
            </Link>
            <Link className="text-[16px]  " to={"/login"}>{t("Plant Care")}</Link>
            <Link className="text-[16px] " to={"/wish"}>{t("Wishlist")}</Link>
          </div>
          <div className="flex justify-center items-center gap-[15px]">
        <Link to={"/me"}>
        
            <img src={us} alt="" />
        </Link>
            <Link to={"/cart"}>
            
            <img src={gr} alt="" />
            </Link>
            <button onClick={()=>{localStorage.clear()}} className="flex items-center text-white w-[100px] h-[35px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">
               <img  src={logout} alt="" />
              {t("Login")}</button>
              <button
            onClick={() => setBody((prev) => !prev)}
            className="border rounded px-3 py-1"
          >
            {body ? t("lightMode"): t("darkMode")}
          </button>
            <select
        value={i18n.language}
        onChange={changeLanguage}
        className="border rounded-md px-3 py-2"
      >
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
          </div>
         
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
