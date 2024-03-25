import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import crypto from "../../img/crypto-hunter_resized.png"
import foodblog from "../../img/cooking-blog_resized.png"
import visionpro from "../../img/visionpro_resized.png"
import more from "../../img/more.jpg"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a
          href="https://github.com/Pruthviraj7/Cryptocurrency-Tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={crypto} alt="" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a
          href="https://github.com/Pruthviraj7/Cooking-Blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={foodblog} alt="" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a
          href="https://github.com/Pruthviraj7/Vision-pro-clone"
          target="_blank"
          rel="noopener noreferrer"
        >

          <img src={visionpro} alt="" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a
          href="https://github.com/Pruthviraj7"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <img src={more} alt="" />
        </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
