import React from "react";
import { Link, Outlet } from "react-router";
import logo from "../Layout/img//logo.png";
import blog from "../Layout/img/Blog.png";
import form from "..//Layout/img/form.png";
import logo1 from "../Layout/img/logo (9).png";
import socials from "../Layout/img/socials (1).png";
import light from "../Layout/img/light.png";
const Layout = () => {
  return (
    <div className="">
      <div className="bg-[#FEDAD5] ">
        <nav className="flex justify-center items-center gap-[180px] pt-[20px] w-[100%] fixed z-100 backdrop-blur-2xl  ">
          <img src={logo} alt="" />
          <div className="flex gap-[35px]">
            <Link className="text-[16px] " to={"/"}>
              About Us
            </Link>
            <Link className="text-[16px] " to={"/about"}>
              Courses
            </Link>
            <Link className="text-[16px] ">Events</Link>
            <Link className="text-[16px] ">Blog</Link>
            <Link className="text-[16px] ">Contacts</Link>
          </div>
          <div className="flex items-center gap-[25px]">
            <button className="bg-[#F95318] w-[200px] h-[50px] rounded-[5px] text-white">
              Get consultation
            </button>
            <p>Log in / Register</p>
          </div>
        </nav>
      </div>
      <Outlet />
      <div className="flex justify-center mt-[50px]">
        <img src={blog} alt="" />
      </div>
      <div className="bg-[#FDDDCF] mt-[50px] h-[444px]  ">
        <div className="flex flex-col items-center pt-[80px]">
          <p className="text-[16px] font-semibold">Don’t miss anything</p>
          <h1 className="text-[46px] w-[810px] text-center font-semibold">
            Subscribe to the Createx School announcements
          </h1>
        </div>
        <div className="flex justify-center mt-[50px]">
          <img src={form} alt="" />
        </div>
      </div>
      <div className="bg-[#1E212C] flex justify-center gap-[60px] pt-[80px] h-[300px] text-white">
        <div className="">
          <img src={logo1} alt="" />
          <p className="w-[350px]">
            Createx Online School is a leader in online studying. We have lots
            of courses and programs from the main market experts. We provide
            relevant approaches to online learning, internships and employment
            in the largest companies in the country.{" "}
          </p>
          <img src={socials} alt="" />
        </div>
        <div className="">
          <h1>SITE MAP</h1>
          <p>About Us</p>
          <p>Courses</p>
          <p>Events</p>
          <p>Blog</p>
          <p>Contacts</p>
        </div>
        <div className="">
          <h1>COURSES</h1>
          <p>Marketing</p>
          <p>Courses</p>
          <p>Events</p>
          <p>Blog</p>
          <p>Contacts</p>
        </div>
        <div className="">
          <h1>Contact us</h1>
          <p>(405) 555-0128</p>
          <p>hello@createx.com</p>
        </div>
        <div className="">
          <h1>SIGN UP TO OUR NEWSLETTER</h1>
          <img src={light} alt="" />
          <p>
            *Subscribe to our newsletter to receive communications and <br />{" "}
            early updates from Createx SEO Agency.
          </p>
        </div>
      </div>
      <div className="flex justify-center  gap-[840px] h-[58px] items-center bg-[#292C37] text-white">
        <p>© All rights reserved.Made withby Createx Studio </p>
        <p>GO TO TOP</p>

      </div>
    </div>
  );
};

export default Layout;
