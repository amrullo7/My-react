import React from "react";
import man from "../Layout/img/Group 11.png";
import avat from "../Layout/img//Ellipse 54 (1).png";
import avatar from "../Layout//img//Group 18 (2).png";
import star from "../Layout/img/Group 17 (1).png";
import av1 from "../Layout/img//Group 18 (3).png";
import gr from "../Layout/img/Group (6).png";
import gr1 from "../Layout/img/Group (6).svg";
import gr2 from "../Layout/img/Group 23.svg";
import card from "../Layout/img/credit-card 1.png"
import money from "../Layout/img/money (1) 1.png"
import time from "../Layout/img/clock 1.png"
import glass from "../Layout/img/workspace-with-office-supplies 1.png"
const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-[120px] mt-[80px]">
        <div className="">
          <h1 className="text-[36px] font-bold">
            Покупайте фриланс-услуги <br /> в{" "}
            <span className="text-[#1DBF73]">два клика</span>{" "}
          </h1>
          <p className="text-[20px]">
            Ворк — единица работы продавца, которую <br /> можно купить как
            товар в магазине{" "}
          </p>
          <div className="flex justify-between p-[15px] rounded-[50px] items-center bg-[#F2F0FE] w-[532px]">
            <p>Что нужно сделать?</p>
            <button className="text-white bg-[#FBA457] rounded-[50px] w-[124px] text-[16px] h-[40px]">
              Найти
            </button>
          </div>
          <p className="text-[18px]">Выберите рубрику, чтобы начать</p>
          <div className="w-[480px] items-center flex flex-wrap gap-[15px]">
            <p className="text-[16px] ">Тексты и переводы</p>
            <p className="text-[16px] ">Разработка</p>
            <p className="text-[16px] ">Дизайн</p>
            <p className="text-[16px] "> Аудио, видео монтаж </p>
            <p className="text-[16px] ">SEO и оптимизация</p>
            <p className="text-[16px] ">Бизнес и жизнь </p>
            <p className="text-[16px] ">Соцсети и реклама </p>
            <button className="text-[#FBA457] border w-[148px] border-[#FBA457] rounded-[50px] h-[40px] ">
              Все категории
            </button>
          </div>
        </div>
        <img src={man} alt="" />
      </div>
      <div className="bg-[#F6FAFD] mt-[40px] pt-[40px]">
        <div className="flex flex-col justify-center items-center ">
          <p className="font-bold text-[24px] mt-[50px]">Актуальные ворки</p>
          <div className="mt-[70px] flex flex-wrap gap-[35px] justify-center">
            <div className="flex flex-col gap-[25px] border border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[15px]">
              <div className="flex items-center gap-[25px]">
                <img src={avat} className="w-[44px] h-[44px]" alt="" />
                <h1 className="font-bold text-[18px]">
                  Сделать дизайн <br /> интернет-магазина
                </h1>
              </div>
              <p className="w-[390px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
                ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc
                ornare nulla neque, interdum. At pharetra consectetur nec est
                convallis...
              </p>
              <button className="border border-[#1DBF73] w-[380px] h-[41px] rounded-[50px] text-[#1DBF73] ">
                Посмотреть
              </button>
            </div>
            <div className="flex flex-col gap-[25px] border  border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[15px]">
              <div className="flex items-center gap-[25px]">
                <img src={avat} className="w-[44px] h-[44px]" alt="" />
                <h1 className="font-bold text-[18px]">Верстка landing page</h1>
              </div>
              <p className="w-[390px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
                ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc
                ornare nulla neque, interdum. At pharetra consectetur nec est
                convallis...
              </p>
              <button className="border border-[#1DBF73] bg-[#1DBF73] w-[380px] h-[41px] rounded-[50px] text-white ">
                Посмотреть
              </button>
            </div>
            <div className="flex flex-col gap-[25px] border border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[15px]">
              <div className="flex items-center gap-[25px]">
                <img src={avat} className="w-[44px] h-[44px]" alt="" />
                <h1 className="font-bold text-[18px]">
                  Сделать дизайн сайта-каталога <br /> и посадить на какой
                  нибудь ко...
                </h1>
              </div>
              <p className="w-[390px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
                ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc
                ornare nulla neque, interdum. At pharetra consectetur nec est
                convallis...
              </p>
              <button className="border border-[#1DBF73] w-[380px] h-[41px] rounded-[50px] text-[#1DBF73] ">
                Посмотреть
              </button>
            </div>
            <div className="flex flex-col gap-[25px] border border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[15px]">
              <div className="flex items-center gap-[25px]">
                <img src={avat} className="w-[44px] h-[44px]" alt="" />
                <h1 className="font-bold text-[18px]">
                  Продвижение instagram{" "}
                </h1>
              </div>
              <p className="w-[390px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
                ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc
                ornare nulla neque, interdum. At pharetra consectetur nec est
                convallis...
              </p>
              <button className="border border-[#1DBF73] w-[380px] h-[41px] rounded-[50px] text-[#1DBF73] ">
                Посмотреть
              </button>
            </div>
            <div className="flex flex-col gap-[25px] border border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[15px]">
              <div className="flex items-center gap-[25px]">
                <img src={avat} className="w-[44px] h-[44px]" alt="" />
                <h1 className="font-bold text-[18px]">
                  Срочно! Нужен веб дизайнер!
                </h1>
              </div>
              <p className="w-[390px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
                ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc
                ornare nulla neque, interdum. At pharetra consectetur nec est
                convallis...
              </p>
              <button className="border border-[#1DBF73] w-[380px] h-[41px] rounded-[50px] text-[#1DBF73] ">
                Посмотреть
              </button>
            </div>
            <div className="flex flex-col gap-[25px] bg-[#F2F0FE] items-center border border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[15px]">
              <p className="text-[#1DBF73] text-[18px]">Смотреть все ворки</p>
            </div>
          </div>
          <p className="font-bold text-[24px] mt-[50px]">Топ фрилансеров</p>
          <div className="mt-[70px] flex flex-wrap gap-[30px] justify-center">
            <div className="flex flex-col justify-center items-center gap-[25px] border border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[25px] ">
              <div className="flex justify-center gap-[45px] items-center ">
                <img src={avatar} alt="" />
                <div className="">
                  <p className="text-[18px]">Марина Королёва</p>
                  <p className="text-[#FBA457] text-[18px]">Разработчик PHP </p>
                  <p>Выполено проектов: 65</p>
                  <img src={star} alt="" />
                </div>
              </div>
              <button className="border border-[#1DBF73] bg-[#1DBF73] w-[380px] h-[41px] rounded-[50px] text-white ">
                Написать
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-[25px] border border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[25px] ">
              <div className="flex justify-center gap-[45px] items-center ">
                <img src={av1} alt="" />
                <div className="">
                  <p className="text-[18px]">Марина Королёва</p>
                  <p className="text-[#FBA457] text-[18px]">Разработчик PHP </p>
                  <p>Выполено проектов: 65</p>
                  <img src={star} alt="" />
                </div>
              </div>
              <button className="border border-[#1DBF73] w-[380px] h-[41px] rounded-[50px] text-[#1DBF73]">
                Написать
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-[25px] border border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[25px] ">
              <div className="flex justify-center gap-[45px] items-center ">
                <img src={av1} alt="" />
                <div className="">
                  <p className="text-[18px]">Марина Королёва</p>
                  <p className="text-[#FBA457] text-[18px]">Разработчик PHP </p>
                  <p>Выполено проектов: 65</p>
                  <img src={star} alt="" />
                </div>
              </div>
              <button className="border border-[#1DBF73] w-[380px] h-[41px] rounded-[50px] text-[#1DBF73]">
                Написать
              </button>
            </div>{" "}
            <div className="flex flex-col justify-center items-center gap-[25px] border border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[25px] ">
              <div className="flex justify-center gap-[45px] items-center ">
                <img src={av1} alt="" />
                <div className="">
                  <p className="text-[18px]">Марина Королёва</p>
                  <p className="text-[#FBA457] text-[18px]">Разработчик PHP </p>
                  <p>Выполено проектов: 65</p>
                  <img src={star} alt="" />
                </div>
              </div>
              <button className="border border-[#1DBF73] w-[380px] h-[41px] rounded-[50px] text-[#1DBF73]">
                Написать
              </button>
            </div>{" "}
            <div className="flex flex-col justify-center items-center gap-[25px] border border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[25px] ">
              <div className="flex justify-center gap-[45px] items-center ">
                <img src={av1} alt="" />
                <div className="">
                  <p className="text-[18px]">Марина Королёва</p>
                  <p className="text-[#FBA457] text-[18px]">Разработчик PHP </p>
                  <p>Выполено проектов: 65</p>
                  <img src={star} alt="" />
                </div>
              </div>
              <button className="border border-[#1DBF73] w-[380px] h-[41px] rounded-[50px] text-[#1DBF73]">
                Написать
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-[25px] bg-[#F2F0FE] border border-[#F2F0FE] justify-center w-[420px] rounded-[14px] p-[25px] ">
              <p className="text-[#1DBF73] text-[18px]">
                Посмотреть всех ТОП фрилансеров
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[80px] p-[110px] flex flex-col justify-between items-center">
          <p className="text-[24px] font-[600] self-start">
            Как решать задачи на WorkTap?
          </p>
          <p className="self-start">
            Идеально подходит для бизнеса и частных лиц
          </p>
          <div className="flex justify-center gap-[75px] mt-[70px] ">
            <div className="">
              <img src={gr} alt="" />
              <h1 className="font-bold">Выберите услугу</h1>
              <p>
                В супермаркете WorkTap представлен широкий <br /> выбор услуг от
                квалифицированных специалистов.
              </p>
            </div>
            <div className="">
              <img src={gr2} alt="" />
              <h1 className="font-bold">Оплатите</h1>
              <p>
                Деньги будут перечислены продавцу после <br /> того, как он
                выполнит работу, и вы её одобрите
              </p>
            </div>
            <div className="">
              <img src={gr1} alt="" />
              <h1 className="font-bold">Получите результат</h1>
              <p>
                Наш супермаркет гарантирует вам возврат средств <br /> в полном
                объёме в случае невыполнения заказа.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(248,194,0)]  flex justify-center items-center gap-[25px]">
        <div className="flex flex-col gap-[15px] justify-center">
          <p className="text-white">Как WorkTap помогает бизнесу?</p>
          <div className="flex w-[533px] items-center bg-white p-2 rounded-[20px] p-[15px] gap-[50px]"> 
            <img src={card} alt="" />
            <p>Оплачивайте с р/с или карты компании</p>
          </div>
           <div className="flex w-[533px] items-center bg-white p-2 rounded-[20px] p-[15px] gap-[50px]"> 
            <img src={money} alt="" />
            <p>Экономьте до 87% бюджета на фрилансе</p>
          </div>
           <div className="flex w-[533px] items-center bg-white p-2 rounded-[20px] p-[15px] gap-[50px]"> 
            <img src={time} alt="" />
            <p>Экономьте до 75% времени на решении фриланс задач</p>
          </div>
          <p className="text-white">WorkTap — быстро, просто и безопасно!</p>
          <button className="w-[181px] h-[49px] rounded-[50px] text-[20px] text-white bg-[#5E4EDB]">Начать!</button>
        </div>
        <img src={glass} className="w-[750px] h-[534px]" alt="" />
      </div>
    </div>
  );
};

export default Home;
