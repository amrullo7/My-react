import React from "react";
import banner from "../Layout/img/main banner.png";
import c1 from "../Layout/img/card_hov.png";
import c2 from "../Layout/img/card (5).png";
import c3 from "../Layout/img/card (6).png";
import card from "../Layout/img/img (8).png";
import card1 from "../Layout/img/img (5).png";
import card2 from "../Layout/img/img (6).png";
import logo from "../Layout/img/Frame 64.png";
import soc from "../Layout/img/social.png";
const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img className="mt-[50px] " src={banner} alt="" />
      </div>
      <div className="mt-[50px] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[40px] font-bold">Каталог товаров</h1>
          <p>
            Небольшое описание блока <br /> размеров в две строки
          </p>
        </div>
        <div className="flex justify-center">
          <img src={c1} alt="" />
          <img src={c2} alt="" />
          <img src={c3} alt="" />
        </div>
        <button className="bg-[#36895F] text-white rounded-[40px] w-[222px] h-[48px] txt-[15px]">
          перейти в каталог
        </button>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-[40px] font-bold">О компании</h1>
        <p className="w-[1320px] text-[19px]">
          ООО «КД-ГРУПП» — это команда единомышленников и профессионалов в таких
          направлениях, как сельскохозяйственная и специальная техника. Основной
          состав компании сформирован из инженеров-производственников, которые
          не по наслышке знают все трудности и проблемы, с которыми Вам
          приходится сталкиваться в процессе работы с техникой. Мы всегда готовы
          прийти Вам на помощь.
          <br />
          <br />А также, наша компания предлагает к поставке прутковые
          транспортеры и комплектующие собственного производства под брендом
          MEDO.В кратчайшие сроки выполним заказ на изготовление транспортера
          для сельхозтехники по уборке урожая овощных культур.Дополнительно, мы
          оказывает услуги по восстановлению ваших б/у транспортёров с заменой
          всех ремней, пластинок, заклёпок и замков.
        </p>
      </div>
      <div className="flex justify-center gap-[80px] mt-[50px]">
        <div className="">
          <h1 className="text-[#00552F] text-[40px] font-bold">500</h1>
          <p className="tetx-[19px]">товаров</p>
        </div>
        <div className="">
          <h1 className="text-[#00552F] text-[40px] font-bold">300+</h1>
          <p className="tetx-[19px]">клиентов</p>
        </div>
        <div className="">
          <h1 className="text-[#00552F] text-[40px] font-bold">15</h1>
          <p className="tetx-[19px]">специалистов</p>
        </div>
      </div>
      <div className="flex mt-14 justify-center gap-[15px]">
        <img src={card1} className="w-[458px]" alt="" />
        <img src={card2} alt="" />
        <img src={card} className="w-[458px]" alt="" />
      </div>

      <div className="flex flex-col justify-center  bg-[#EFEFEF] w-[100%] mt-[25px]">
        <div className="flex justify-between p-[45px] items-center">
          <img src={logo} alt="" />
          <img src={soc} alt="" />
        </div>
        <div className="flex justify-between p-[45px]">
          <div className="flex flex-col">
            <h1 className="font-bold">Информация</h1>
            <p>О нас</p>
            <p>Партнерам</p>
            <p>Карьера</p>
            <p>Контакты</p>
          </div>{" "}
          <div className="flex flex-col">
            <h1 className="font-bold">Каталог</h1>
            <p>
              Свеклоуборочная <br />
              техника
            </p>
            <p>
              Картофелеуборочная
              <br /> техника
            </p>
            <p>Транспортеры MEDO</p>
            <p>Комплектующие MEDO</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Блог</h1>
            <p>Новости</p>
            <p>События</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Адрес</h1>
            <p>юридический и фактический:</p>
            <p>
              117638, Россия, г. Москва, <br />
              ул. Криворожская, д. 6А <br />, стр. 2,
              <br />  пом. 236
            </p>
            <p>адрес производства:</p>
            <p>г. Брянск, Московский проезд, д10а</p>
          </div>
               <div className="flex flex-col">
            <h1 className="font-bold">Контакты</h1>
            <p>звонок бесплатный</p>
            <h1 className="font-bold">8 800 505 72 32
            </h1>
            <p>электронная почта</p>
            <h1 className="font-bold">info@kd-grupp.com</h1>
            <button className="border border-green-800 rounded-[40px] w-[185px]">написать нам</button>
          </div>
        </div>
        <div className="flex justify-between p-[45px]">
          <p>© 2020 ООО «КД-Групп». Все права защищены</p>
          <p>Разработка и продвижение SilverDuck</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
