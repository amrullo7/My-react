import React from 'react'

import logo from "../Layout/img/Frame 64.png";
import soc from "../Layout/img/social.png";
const About = () => {
  return (
    <div>
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
          </div>
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
  )
}

export default About