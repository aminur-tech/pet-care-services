import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import { useState } from "react";
import { Link } from "react-router";

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/s9x1QLXd/images-2.jpg",
      title: "Keep Your Pets Warm & Happy",
      subtitle: "Cozy winter care for your furry friends",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/kg7Gwd0c/download-7.jpg",
      title: "Stylish Winter Outfits for Pets",
      subtitle: "Comfort meets cuteness this winter season",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/dJ65S65x/download-6.jpg",
      title: "Healthy, Warm, and Loved",
      subtitle: "Make sure your pets enjoy every chilly moment",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
            <div className="relative text-center text-white z-10 px-6">
              <h1
                className={`text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg ${
                  activeIndex === index
                    ? "animate__animated animate__fadeInUp"
                    : ""
                }`}
              >
                {slide.title}
              </h1>

              <p
                className={`text-lg md:text-xl mb-6 drop-shadow-md ${
                  activeIndex === index
                    ? "animate__animated animate__fadeInDown animate__delay-1s"
                    : ""
                }`}
              >
                {slide.subtitle}
              </p>

              <Link
                to="/services"
                className={`btn bg-white text-gray-900 hover:bg-blue-400 border-none font-semibold rounded-full px-6 py-2 ${
                  activeIndex === index
                    ? "animate__animated animate__fadeInUp animate__delay-2s"
                    : ""
                }`}
              >
                Explore Winter Care
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
