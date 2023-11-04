import React from "react";
import { Link } from "react-router-dom";
import Title from "../TitleSection/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import "./Team.css";
function Team() {
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
    <div className="team py-5" id="team">
      <div className="container">
        <Title title="المتطوعين" />
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.3}
        breakpoints={breakpoints}
        centeredSlides={true}
        loop={true}
      >
        <SwiperSlide>
          <div className="img-person">
            <img src="imgs/person1.webp" alt="" />
          </div>
          <div className="details">
            <h6>م.أحمد محمد</h6>
            <p>مطور الموقع</p>
            <ul className="list-unstyled social-media-icons">
              <li>
                <Link to="https://www.facebook.com/ahmed.elhosseni.71">
                <FaFacebook />
                </Link>
              
              </li>
              <li>
              <Link to="https://www.linkedin.com/in/ahmed-mohamed-77aa41239/">
                <FaLinkedinIn/>
                </Link>
              </li>
              <li>
              <Link to="mailto: ahm12ddev@gmail.com">
                  <BiLogoGmail/>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/ahmed.elhosseni.71/">
                  <BsInstagram/>
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img-person">
            <img src="imgs/person2.webp" alt="" />
          </div>

          <div className="details">
            <h6>م.حسناء حمدي</h6>
            <p>مطورة التطبيق</p>
            <ul className="list-unstyled social-media-icons">
              <li>
                <Link to="https://www.facebook.com/hasnaa0hamdi">
                  <FaFacebook/>
                </Link>
              </li>
              <li>
              <Link to="https://www.linkedin.com/in/hasnaa0hamdi/">
                <FaLinkedinIn/>
                </Link>
              </li>
              <li>
              <Link to="mailto: hasnaa0hamdi@gmail.com">
                  <BiLogoGmail/>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/hasnaa_hamdi?fbclid=IwAR10yRG93dPjbFZ0fqHWyvOSAgM9Jwp0vGOa3qTGh28fvIS2tp3Vqrh_vmc">
                  <BsInstagram/>
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img-person">
            <img src="imgs/person3.webp" alt="" />
          </div>
          <div className="details">
            <h6>م.ابراهيم ربيع</h6>
            <p>مصمم تجربة المستخدم</p>
            <ul className="list-unstyled social-media-icons">
              <li>
                <Link to="https://www.facebook.com/ibrahim.rabie.5">
                  <FaFacebook/>
                </Link>
              </li>
              <li>
              <Link to="https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.linkedin.com%2Fin%2Fibrahim-rabie-087476158%3Ffbclid%3DIwAR08sFpiZ-MKgs0KrUZghxYrJ5CHC7gJjIfbd0QY5lM1RpN8atQlpZn9V7c&h=AT0madUQVOcaSCSGF08JpUMgSkRHs9vBecmpG2qKVC0zs_1yCKRLoESYa0xf7zcoo1haM1vNF0b6H4n7tu7ElAF0SwZbKs8V_QLg-JlGYdofnPDAIokUUnbR9UGxod_WkNXD6g">
                <FaLinkedinIn/>
                </Link>
              </li>
              <li>
              <Link to="mailto: ibrahimrabie43@gmail.com">
                  <BiLogoGmail/>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/ibrahim_rabie43/?fbclid=IwAR08sFpiZ-MKgs0KrUZghxYrJ5CHC7gJjIfbd0QY5lM1RpN8atQlpZn9V7c">
                  <BsInstagram/>
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img-person">
            <img src="imgs/person1.webp" alt="" />
          </div>
          <div className="details">
            <h6>م.أحمد محمد</h6>
            <p>مطور الموقع</p>
            <ul className="list-unstyled social-media-icons">
              <li>
                <Link to="https://www.facebook.com/ahmed.elhosseni.71">
                  <FaFacebook/>
                </Link>
              </li>
              <li>
              <Link to="https://www.linkedin.com/in/ahmed-mohamed-77aa41239/">
                <FaLinkedinIn/>
                </Link>
              </li>
              <li>
                <Link to="mailto: ahm12ddev@gmail.com">
                  <BiLogoGmail/>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/ahmed.elhosseni.71/">
                  <BsInstagram/>
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img-person">
            <img src="imgs/person2.webp" alt="" />
          </div>
          <div className="details">
            <h6>م.حسناء حمدي</h6>
            <p>مطورة التطبيق</p>
            <ul className="list-unstyled social-media-icons">
              <li>
                <Link to="https://www.facebook.com/hasnaa0hamdi">
                  <FaFacebook/>
                </Link>
              </li>
              <li>
              <Link to="https://www.linkedin.com/in/hasnaa0hamdi/">
                <FaLinkedinIn/>
                </Link>
              </li>
              <li>
              <Link to="mailto: hasnaa0hamdi@gmail.com">
                  <BiLogoGmail/>
                </Link>
              </li>
              <li>
              <Link to="https://www.instagram.com/hasnaa_hamdi?fbclid=IwAR10yRG93dPjbFZ0fqHWyvOSAgM9Jwp0vGOa3qTGh28fvIS2tp3Vqrh_vmc">
                  <BsInstagram/>
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img-person">
            <img src="imgs/person3.webp" alt="" />
          </div>

          <div className="details">
            <h6>م.ابراهيم ربيع</h6>
            <p>مصمم تجربة المستخدم</p>
            <ul className="list-unstyled social-media-icons">
              <li>
                <Link to="https://www.facebook.com/ibrahim.rabie.5">
                  <FaFacebook/>
                </Link>
              </li>
              <li>
              <Link to="https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.linkedin.com%2Fin%2Fibrahim-rabie-087476158%3Ffbclid%3DIwAR08sFpiZ-MKgs0KrUZghxYrJ5CHC7gJjIfbd0QY5lM1RpN8atQlpZn9V7c&h=AT0madUQVOcaSCSGF08JpUMgSkRHs9vBecmpG2qKVC0zs_1yCKRLoESYa0xf7zcoo1haM1vNF0b6H4n7tu7ElAF0SwZbKs8V_QLg-JlGYdofnPDAIokUUnbR9UGxod_WkNXD6g">
                <FaLinkedinIn/>
                </Link>
              </li>
              <li>
              <Link to="mailto: ibrahimrabie43@gmail.com">
                  <BiLogoGmail/>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/ibrahim_rabie43/?fbclid=IwAR08sFpiZ-MKgs0KrUZghxYrJ5CHC7gJjIfbd0QY5lM1RpN8atQlpZn9V7c">
                  <BsInstagram/>
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Team;
