import React from "react";
import arrow from "../Layout/img/Frame 47.png";
import arr from "../Layout/img/akar-icons_chevron-down (1).png";
import people from "../Layout/img//Ellipse 66.png";
import { ArrowUpWideNarrow } from "lucide-react";
import vecto from "../Layout/img/Vector (4).png";
import nout from "../Layout/img/Rectangle 20 (1).png";
import fram from "../Layout/img/Frame 54.png";
import elipse from "../Layout/img/Ellipse 70.png";
import star from "../Layout/img///Group 17 (1).png";
const Products = () => {
  return (
    <div>
      <div className="flex items-center mt-[55px] gap-[80px]">
        <img src={arrow} alt="" />
        <div className="flex flex-col gap-[15px]">
          <p className="text-[#FBA457] text-[24px]">Дизайнер</p>
          <h1 className="text-[36px]">
            {" "}
            <span className="text-[#1DBF73]">Ернар</span> Ибрагимов
          </h1>
          <p>
            Работаю дизайнером с 1999 года. <br />
            Был опыт в газетах, журналах, типографиях, рекламных агентствах,
            издательских <br /> домах... Порядка 8 лет, занимаюсь логотипами и
            фирменными стилями.
          </p>
          <div className=" flex w-[586px] gap-[25px] flex-wrap">
            <p>Figma</p>
            <p>Adobe photoshop</p>
            <p>Adobe illustrator</p>
            <p>Corel draw</p>
            <p>Adobe After Effects</p>
            <p>HTML/CSS</p>
          </div>
          <div className="flex items-center gap-[80px] w-[565px] p-[25px]  bg-[#F2F0FE] h-[50px] rounded-[35px]">
            <p>Показать подробную информацию</p>
            <img src={arr} alt="" />
          </div>
        </div>
        <img src={people} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-[25px] mt-[65px]">
        <div className="">
          <p className="font-semibold ml-[150px] ">Мой ворки</p>
        </div>
        <div className="flex flex-wrap gap-[25px] items-center justify-center">
          <div className="flex flex-col items-center gap-[15px] w-[308px]">
            <img src={vecto} alt="" />
            <p className="text-[30px] text-[#1DBF73]">Создать ворк</p>
          </div>

          <div className="flex flex-col gap-[15px] items-start">
            <img src={nout} alt="" />
            <h1 className="font-semibold ml-[15px]">Дизайн сайта</h1>
            <h1 className="text-[#1DBF73] ml-[15px]">50 000 тенге</h1>
          </div>
          <div className="flex flex-col gap-[15px] items-start">
            <img src={nout} alt="" />
            <h1 className="font-semibold ml-[15px]">Дизайн сайта</h1>
            <h1 className="text-[#1DBF73] ml-[15px]">50 000 тенге</h1>
          </div>
          <div className="flex flex-col gap-[15px] items-start">
            <img src={nout} alt="" />
            <h1 className="font-semibold ml-[15px]">Дизайн сайта</h1>
            <h1 className="text-[#1DBF73] ml-[15px]">50 000 тенге</h1>
          </div>
          <div className="flex flex-col gap-[15px] items-start">
            <img src={nout} alt="" />
            <h1 className="font-semibold ml-[15px]">Дизайн сайта</h1>
            <h1 className="text-[#1DBF73] ml-[15px]">50 000 тенге</h1>
          </div>
          <div className="flex flex-col gap-[15px] items-start">
            <img src={nout} alt="" />
            <h1 className="font-semibold ml-[15px]">Дизайн сайта</h1>
            <h1 className="text-[#1DBF73] ml-[15px]">50 000 тенге</h1>
          </div>
          <div className="flex flex-col gap-[15px] items-start">
            <img src={nout} alt="" />
            <h1 className="font-semibold ml-[15px]">Дизайн сайта</h1>
            <h1 className="text-[#1DBF73] ml-[15px]">50 000 тенге</h1>
          </div>
          <div className="flex flex-col gap-[15px] items-start">
            <img src={nout} alt="" />
            <h1 className="font-semibold ml-[15px]">Дизайн сайта</h1>
            <h1 className="text-[#1DBF73] ml-[15px]">50 000 тенге</h1>
          </div>
          <div className="flex flex-col gap-[15px] items-start">
            <img src={nout} alt="" />
            <h1 className="font-semibold ml-[15px]">Дизайн сайта</h1>
            <h1 className="text-[#1DBF73] ml-[15px]">50 000 тенге</h1>
          </div>
          <div className="flex flex-col gap-[15px] items-start">
            <img src={nout} alt="" />
            <h1 className="font-semibold ml-[15px]">Дизайн сайта</h1>
            <h1 className="text-[#1DBF73] ml-[15px]">50 000 тенге</h1>
          </div>
          <div className="flex flex-col gap-[15px] items-start">
            <img src={nout} alt="" />
            <h1 className="font-semibold ml-[15px]">Дизайн сайта</h1>
            <h1 className="text-[#1DBF73] ml-[15px]">50 000 тенге</h1>
          </div>
          <div className="flex flex-col gap-[15px] items-start">
            <img src={nout} alt="" />
            <h1 className="font-semibold ml-[15px]">Дизайн сайта</h1>
            <h1 className="text-[#1DBF73] ml-[15px]">50 000 тенге</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[55px]">
        <img src={fram} alt="" />
      </div>
      <div className="mt-[80px] flex flex-col pl-[110px] items-center gap-[25px]">
        <div className="self-start">
          <p className="text-[24px] font-semibold">Отзывы</p>
          <p className="text-[24px] flex gap-[25px]">
            <span className="text-[#1DBF73]">Положительные (65)</span>
            Отрицательные(10)
          </p>
        </div>
        <div className="flex flex-wrap gap-[25px]">
          <div className="flex flex-col gap-[15px] border border-[#F2F0FE] rounded-[12px] w-[420px] p-[20px] ">
            <div className="flex items-center gap-[25px]">
              <img src={elipse} alt="" />
              <div className="flex flex-col justify-between gap-[15px]">
                <p>Никита Евреев</p>
                <img src={star} alt="" />
              </div>
            </div>
            <p className="w-[380px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In
              egestas cursus orci dignissim in lectus nulla.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-[15px] border border-[#F2F0FE] rounded-[12px] w-[420px] p-[20px] ">
            <div className="flex items-center gap-[25px]">
              <img src={elipse} alt="" />
              <div className="flex flex-col justify-between gap-[15px]">
                <p>Никита Евреев</p>
                <img src={star} alt="" />
              </div>
            </div>
            <p className="w-[380px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In
              egestas cursus orci dignissim in lectus nulla.{" "}
            </p>
          </div>{" "}
          <div className="flex flex-col gap-[15px] border border-[#F2F0FE] rounded-[12px] w-[420px] p-[20px] ">
            <div className="flex items-center gap-[25px]">
              <img src={elipse} alt="" />
              <div className="flex flex-col justify-between gap-[15px]">
                <p>Никита Евреев</p>
                <img src={star} alt="" />
              </div>
            </div>
            <p className="w-[380px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In
              egestas cursus orci dignissim in lectus nulla.{" "}
            </p>
          </div>{" "}
          <div className="flex flex-col gap-[15px] border border-[#F2F0FE] rounded-[12px] w-[420px] p-[20px] ">
            <div className="flex items-center gap-[25px]">
              <img src={elipse} alt="" />
              <div className="flex flex-col justify-between gap-[15px]">
                <p>Никита Евреев</p>
                <img src={star} alt="" />
              </div>
            </div>
            <p className="w-[380px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In
              egestas cursus orci dignissim in lectus nulla.{" "}
            </p>
          </div>{" "}
          <div className="flex flex-col gap-[15px] border border-[#F2F0FE] rounded-[12px] w-[420px] p-[20px] ">
            <div className="flex items-center gap-[25px]">
              <img src={elipse} alt="" />
              <div className="flex flex-col justify-between gap-[15px]">
                <p>Никита Евреев</p>
                <img src={star} alt="" />
              </div>
            </div>
            <p className="w-[380px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In
              egestas cursus orci dignissim in lectus nulla.{" "}
            </p>
          </div>{" "}
          <div className="flex flex-col gap-[15px] border border-[#F2F0FE] rounded-[12px] w-[420px] p-[20px] ">
            <div className="flex items-center gap-[25px]">
              <img src={elipse} alt="" />
              <div className="flex flex-col justify-between gap-[15px]">
                <p>Никита Евреев</p>
                <img src={star} alt="" />
              </div>
            </div>
            <p className="w-[380px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In
              egestas cursus orci dignissim in lectus nulla.{" "}
            </p>
          </div>
        </div>
      </div>
       <div className="flex justify-center mt-[55px]">
        <img src={fram} alt="" />
      </div>
    </div>
  );
};

export default Products;
