import React from "react";
import Title from "../TitleSection/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { useImage } from "react-image";
import "swiper/css";
import "./Supporters.css";
function Supporters() {
  const { src: partnerSrc, isLoading: partnerLoading } = useImage({
    srcList: "imgs/partner.png",
  });
  const { src: partner2Src, isLoading: partner2Loading } = useImage({
    srcList: "imgs/partner2.png",
  });
  const breakpoints = {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <div className="supporters py-5" id="supporters">
      <div className="container">
        <Title title="الداعمين" />
        <div className="partners  d-flex align-items-center justify-content-center">
          <Swiper
            className="py-3"
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={breakpoints}
            loop={true}
          >
            <SwiperSlide>
             {!partnerLoading && <img src={partnerSrc} />}
            </SwiperSlide>
            <SwiperSlide>
            {!partner2Loading && <img src={partner2Src} />}
            </SwiperSlide>
            {/* <SwiperSlide><img src="imgs/partner2.png"/></SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Supporters;
