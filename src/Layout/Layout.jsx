import React from "react";
import { Link, Outlet } from "react-router";
import logo from "../Layout/img/worktap 1.png"
import face from "../Layout/img/akar-icons_facebook-fill.svg"
import twit from "../Layout/img/ant-design_twitter-circle-filled.svg"
import imst from "../Layout/img/Group 35.svg"
import ind from "..//Layout/img/entypo-social_linkedin-with-circle.svg"
const Layout = () => {
  return (
    <div className="bg-[#F7F6FF]">
      <nav className="flex justify-center items-center gap-[180px] pt-[20px] "> 
<img src={logo} alt="" />

<div className="flex gap-[35px]"> 
      <Link className="text-[16px] " to={"/"}>Биржа</Link>
      <Link className="text-[16px] " to={"/about"}>Ворки</Link>
      <Link className="text-[16px] " to={"/products"}>Конкурсы</Link>
      <Link className="text-[16px] " to={"/products"}>Создать ворк</Link>
      <Link className="text-[16px] " to={"/products"}>Создать заказ</Link>

</div>
<div className="flex gap-[15px]">
  <button className="bg-[#F2F0FE] text-green-700 text-[16px] p-[12px] pl-[40px] pr-[40px]   rounded-[50px]">Регистрация</button>
  <button className="bg-[#1DBF73] text-white p-[8px] pl-[40px] pr-[40px]  rounded-[50px]">Войти</button>
</div>
      </nav>
      <Outlet/>

<div className="">
  <div className="flex justify-center items-start gap-[180px] pt-[80px]">
    <div className="">
      <h1 className="font-bold text-[24px]">Топ категории</h1>
      <br />
      
      <p>Тексты и переводы</p>
      <p>Разработка</p>
      <p>Дизайн</p>
      <p>Аудио, видео монтаж</p>
      <p>Соцсети и реклама</p>
      <p>Бизнес и жизнь</p>
      <p>SEO и оптимизация</p>
    </div>
     <div className="">
      <h1 className="font-bold text-[24px]">О Проекте </h1>
      <br />
      
      <p>О Нас</p>
      <p>Как Это Работает</p>
      <p>Политика Приватности</p>
      <p>Правила Пользования </p>
      <p>Пресса о нас</p>
    </div>  <div className="">
      <h1 className="font-bold text-[24px]">Поддержка </h1>
      <br />
      
      <p>Контакты</p>
      <p>Политика Безопасности</p>
      <p>FAQ</p>
    </div>
     <div className="">
      <h1 className="font-bold text-[24px]">Follow </h1>
      <br />
      <div className="flex gap-[25px]">
        <img src={face} alt="" />
        <img src={twit} alt="" />
        <img src={imst} alt="" />
        <img src={ind} alt="" />
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Layout;
