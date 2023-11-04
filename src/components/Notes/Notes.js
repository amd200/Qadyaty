import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Notes.css";
import Title from "../TitleSection/Title";


function Notes() {
 
  const breakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 40,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
      centeredSlides: false,
    },
  };
  return (
    <div className="notes py-5" id="notes">
      <Title title= "تعليمات الاستخدام"  isVisible={true} />
      <Swiper
      className="py-3"
      loop={true}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={1.3}
        breakpoints={breakpoints}
       
      >
        <SwiperSlide>
          <div className="number">1</div>
          <p>
            من المهم فتح التطبيق أول مرة مع وجود الانترنت ليتم التحميل البيانات
            علي الجهاز ثم الاستخدام بدون انترنت فيما بعد
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="number">2</div>
          <p>
            يرجي مسح الكاميرا جيدا قبل الاستخدام للتأكد من وضوح الباركود مما
            يزيد كفاءة النتيجة
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="number">3</div>
          <p>
            يرجي التأكد من عدم وجود ثنيات او لمعان علي الورقة المطبوع عليها
            الباركود للحصول علي نتيجة صحيحة
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="number">4</div>
          <p>
            باركود المنتج هو المطبوع عليه مباشرة وليس علي اللاصق الخاص بالمتجر
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="number">5</div>
          <p>
            يرجي متابعة قناة تليجرام الخاصة بالتطبيق لمتابعة التحديثات
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Notes;
