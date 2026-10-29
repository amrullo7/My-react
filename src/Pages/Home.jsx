
import React from "react";
import { useTranslation } from "react-i18next";
import man from "../Layout/img/hero image.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import gen from "../Layout/img/GenZ.png";
import lin from "../Layout/img/LinkedIn svg.png";
import ter1 from "../Layout/img/Terra-Color 1 (1).png";
import ter2 from "../Layout/img/Trace-Color 2.png";
import bl from "../Layout/img/Black.png";
import pl from "../Layout/img/Placeholder Image.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[40px] mt-[50px] px-6">
        <div className="w-full max-w-[584px] flex flex-col gap-[15px] mt-[15px]">
          <p className="text-[16px]">
            {t("greeting")}
          </p>

          <h1 className="text-[40px] font-semibold">
            {t("title1")} <br />
            {t("title2")} <br />
            {t("title3")}
          </h1>

          <p>
            {t("description")}
          </p>

          <div className="flex gap-[10px]">
            <button className="w-[107px] h-[52px] border rounded-[15px] bg-[#078D84] text-white">
              {t("hireMe")}
            </button>

            <button className="w-[107px] h-[52px] border rounded-[15px] text-[#078D84] border-[#078D84]">
              {t("Portfolio")}
            </button>
          </div>
        </div>

        <img
          src={man}
          alt=""
          className=""
        />
      </div>

      <div className="flex justify-center mt-[80px]">
        <h1 className="text-[35px] font-bold">
          {t("partners")}
        </h1>
      </div>

      <div className="mt-[80px] w-full overflow-hidden py-[35px] bg-gradient-to-r from-[#071F2A] via-[#104E52] to-[#071F2A] relative">

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(7,141,132,0.28),transparent_70%)]" />

        <div className="absolute left-0 top-0 z-10 h-full w-[50px] bg-gradient-to-r from-[#071F2A] to-transparent pointer-events-none" />

        <div className="absolute right-0 top-0 z-10 h-full w-[50px] bg-gradient-to-l from-[#071F2A] to-transparent pointer-events-none" />

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={35}
          loop={true}
          speed={4000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          className="logoSwiper relative z-[1]"
        >
          <SwiperSlide className="!w-[180px] !h-[90px] flex items-center justify-center">
            <div className="flex h-[80px] w-[170px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 shadow-lg backdrop-blur-md">
              <img src={bl} alt="Black logo" className="h-[55px] w-[140px] object-contain" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-[180px] !h-[90px] flex items-center justify-center">
            <div className="flex h-[80px] w-[170px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 shadow-lg backdrop-blur-md">
              <img src={ter1} alt="Terra logo" className="h-[55px] w-[140px] object-contain" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-[180px] !h-[90px] flex items-center justify-center">
            <div className="flex h-[80px] w-[170px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 shadow-lg backdrop-blur-md">
              <img src={ter2} alt="Trace logo" className="h-[55px] w-[140px] object-contain" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-[180px] !h-[90px] flex items-center justify-center">
            <div className="flex h-[80px] w-[170px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 shadow-lg backdrop-blur-md">
              <img src={lin} alt="LinkedIn logo" className="h-[55px] w-[140px] object-contain" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-[180px] !h-[90px] flex items-center justify-center">
            <div className="flex h-[80px] w-[170px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 shadow-lg backdrop-blur-md">
              <img src={gen} alt="GenZ logo" className="h-[55px] w-[140px] object-contain" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-[180px] !h-[90px] flex items-center justify-center">
            <div className="flex h-[80px] w-[170px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 shadow-lg backdrop-blur-md">
              <img src={bl} alt="Black logo" className="h-[55px] w-[140px] object-contain" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-[180px] !h-[90px] flex items-center justify-center">
            <div className="flex h-[80px] w-[170px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 shadow-lg backdrop-blur-md">
              <img src={ter1} alt="Terra logo" className="h-[55px] w-[140px] object-contain" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-[180px] !h-[90px] flex items-center justify-center">
            <div className="flex h-[80px] w-[170px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 shadow-lg backdrop-blur-md">
              <img src={ter2} alt="Trace logo" className="h-[55px] w-[140px] object-contain" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-[180px] !h-[90px] flex items-center justify-center">
            <div className="flex h-[80px] w-[170px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 shadow-lg backdrop-blur-md">
              <img src={lin} alt="LinkedIn logo" className="h-[55px] w-[140px] object-contain" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-[180px] !h-[90px] flex items-center justify-center">
            <div className="flex h-[80px] w-[170px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 shadow-lg backdrop-blur-md">
              <img src={gen} alt="GenZ logo" className="h-[55px] w-[140px] object-contain" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-center mt-[70px] gap-[45px]">
        <img
          src={pl}
          alt=""
          className=""
        />

        <div className="flex flex-col items-center justify-center gap-[40px] mt-[50px] px-6">
          <div className="w-full max-w-[584px] flex flex-col gap-[35px] mt-[15px]">
            <p className="text-[16px]">
              {t("greeting")}
            </p>

            <h1 className="text-[40px] font-semibold">
              {t("title1")} <br />
              {t("title2")} <br />
              {t("title3")}
            </h1>

            <p>
              {t("description")}
            </p>

            <div className="flex gap-[10px]">
              <button className="w-[107px] h-[52px] border rounded-[15px] bg-[#078D84] text-white">
                {t("aboutMe")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
