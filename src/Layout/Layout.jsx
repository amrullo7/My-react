import React from "react";
import { Link, Outlet } from "react-router";
const Layout = () => {
  return (
    <div className="">
      <div className=""> 
        <nav className="flex justify-center items-center gap-[180px] pt-[20px] w-[100%]   ">
          <div className="flex gap-[35px]">
            <Link className="text-[16px] " to={"/"}>
              About Us
            </Link>
            <Link className="text-[16px] " to={"/about"}>
              Catalogs
            </Link>
            <Link className="text-[16px]  " to={"/login"}>Login</Link>
            <Link className="text-[16px] " to={"/products"} >Catalog</Link>
            <Link className="text-[16px] " >Contacts</Link>
          </div>
         
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
