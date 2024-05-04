import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  A11y,
} from "swiper/modules";

export default function Banner() {
  return (
    <div className="my-5">
      <Swiper
        slidesPerView={1}
        // centeredSlides={false}
        spaceBetween={50}
         slidesPerGroupSkip={1}
        loop={true}
        autoplay={true}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        scrollbar={{ draggable: true }}
         navigation={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[Keyboard, Scrollbar, Navigation, Pagination, A11y]}
        
      >
        <SwiperSlide>
          <img className="relative h-[340px] md:h-[600px] w-full  rounded-lg" src="https://i.postimg.cc/DzgCZpB5/beautiful-painted-furniture.jpg" />
          <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white rounded-lg">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
              Wooden Home Decor
              </h2>
              <p className="mt-2  animate__animated animate__rubberBand">
              Elevate your living environment with our exquisite wooden home decor pieces, designed to add a touch of natural beauty and sophistication to every corner of your home.
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative h-[340px] md:h-[600px] w-full  rounded-lg" src="https://i.postimg.cc/MKnKmhBM/handmade-baskets-jute-threads-crocheted-diy-rustic-home-decor-508626-280.jpg" />
          <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white rounded-lg">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
              Jute Home Decor
              </h2>
              <p className="mt-2  animate__animated animate__rubberBand">
              Embrace eco-friendly style with our charming jute home decor items, featuring intricately woven textures and earthy tones that effortlessly enhance the ambiance of any room.
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative h-[340px] md:h-[600px] w-full  rounded-lg" src="https://i.postimg.cc/P5F7zRmx/medium-b114ecdc-3c17-4397-9a1a-64f84c8bc3a3photo.jpg" />
          <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white rounded-lg">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
              Jute jewellery
              </h2>
              <p className="mt-2  animate__animated animate__rubberBand">
              Adorn yourself with the natural beauty of jute and wood with our exquisite jewellery pieces
              </p>
            </div>
        </SwiperSlide>

     
      </Swiper>
    </div>
  );
}
