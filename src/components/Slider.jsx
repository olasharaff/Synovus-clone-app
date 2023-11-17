import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css/bundle";
import {SliderDatas} from "./SliderData"

export default function Slider() {
     SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 3000 }}
      >
        {SliderDatas.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full overflow-hidden h-[550px]">
              <img
                src={item.pic}
                alt="index"
                className="w-full object-cover bg-no-repeat bg-cover"
              />
            </div>
            <div className="absolute z-40 overflow-hidden right-16 -bottom-3 max-w-lg  bg-[#202221] px-6 py-4 text-white h-[300px] opacity-90">
              <h1 className="text-4xl font-bold mb-4">{item.header}</h1>
              <p className="text-sm mb-6">{item.content}</p>
              <button className="mb-6 border-2 border-white px-6 py-3 rounded-lg">
                {item.btn}
              </button>
            </div>
            {/* <p className="text-[#f4f8f3] absolute left-1 top-3 font-medium max-w-[90%] bg-[#457b9d] px-3 py-2 rounded-br-3xl shadow-lg opacity-90">
              {data.name}
            </p>
            <p className="text-[#f4f8f3] absolute left-1 bottom-3 font-medium max-w-[90%] bg-[#e63946] px-3 py-2 rounded-tr-3xl shadow-lg opacity-100">
              ${data.discountedPrice ?? data.regularPrice}{" "}
              {data.type === "rent" && "/ months"}
            </p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
