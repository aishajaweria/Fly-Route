
import { useEffect, useState } from "react";
import "./HeroStyles.css";

import homeImg2 from "../Assets/bg.jpg";
import homeImg1 from "../Assets/bg1.jpg";
import homeImg3 from "../Assets/bg2.jpg";


const images = [homeImg1, homeImg2, homeImg3]; // Add your images here
const Hero = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className={props.cName}>
        <img src={images[currentImageIndex]} alt="HeroImage" />
        <div className="hero-text">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <div className="btn-container">
            <a href={props.url} className={props.btnClass}>
              {props.btnText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
