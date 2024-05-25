import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import { IoMdArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ProductItem from "../home/ProductItem";
const RelatedProducts = ({ tittle }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className=" w-[90%] m-auto my-10">
      <div className=" flex justify-between items-center my-8">
        <div>
          <h2 className=" text-[20px] font-bold uppercase">{tittle}</h2>
        </div>
        <Button variant="outline" className="rounded-2xl border border-red-600">
          View All
          <span className=" ml-3 text-[18px]">
            <IoMdArrowForward />
          </span>
        </Button>
      </div>
      <div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={5}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
