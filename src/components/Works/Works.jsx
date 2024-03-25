import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import einfo from "../../img/einfo_resized.png";
import jekson from "../../img/jekson_resized.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import humber from "../../img/Humber_resized.webp";
import meta from "../../img/meta_resized.png";
import hrank from "../../img/hrank_resized.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works and
          </span>
          <span>Certifications</span>
          <span>
          During my tenure at Jekson Vision, I served as a dedicated Database Analyst, 
          <br/>
          leveraging my expertise to optimize data structures and enhance information systems. 
          <br/>Additionally, my role as an ASIC Design Intern at eInfochips provided a unique perspective,
          <br/> where I delved into hardware design intricacies and seamlessly connected this knowledge
          <br/> to web development. This experience cultivated a deep understanding of system architectures.
          <br/> Complementing my practical experience, I hold certificates from HackerRank
          <br/> and Meta in SQL and React, showcasing my commitment to continuous
          <br/> learning and proficiency in these key technologies.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={einfo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={meta} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={humber} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={hrank} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={jekson} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
