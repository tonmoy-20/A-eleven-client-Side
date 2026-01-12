import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import i1 from "../assets/banerblood.jpg";
import i4 from "../assets/herob2.jpg";
import i6 from "../assets/herob3.jpg";

const SliderSwip = () => {
  return (
    <div className="relative h-[400px] md:h-[550px] w-full overflow-hidden">
      <Swiper
        pagination={{ dynamicBullets: true }}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full w-full"
      >
        <SwiperSlide>
          <img className="w-full h-full object-cover" src={i1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full object-cover" src={i4} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full object-cover" src={i6} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      <div className="absolute inset-0 z-10 bg-black/40 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          DROP of <span className="text-red-600">LIFE</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
          Your small contribution can bring back a smile to someone's face. Be a
          hero in someone's life today.
        </p>

        <div className="flex flex-col md:flex-row gap-5">
          <Link
            to="/signup"
            className="btn btn-error text-white px-10 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            Join as a Donor
          </Link>

          <Link
            to="/search-request"
            className="btn btn-outline border-2 border-white text-white px-10 rounded-xl font-bold hover:bg-white hover:text-black transition-all"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};
//
export default SliderSwip;
