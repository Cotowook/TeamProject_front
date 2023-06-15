import React, { useEffect, useState } from "react";
import Header from "./Header";
import ImageSlider from "./ImageSlide";
import about_hl from "./img/about_hl.png";
import midBanner from "./img/banner.jpeg";
import logo_mean_left from "./img/logo_mean_left.jpeg";
import logo_mean_right from "./img/logo_mean_right.jpeg";
import "./MainPage.css";

const MainPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const [leftLogoVisible, setLeftLogoVisible] = useState(false);
  const [rightLogoVisible, setRightLogoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const leftLogo = document.querySelector(".logo_mean_left");
      const rightLogo = document.querySelector(".logo_mean_right");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (leftLogo) {
        const logoMeanLeftOffset = leftLogo.offsetTop;
        if (scrollPosition > logoMeanLeftOffset - windowHeight + 100) {
          setLeftLogoVisible(true);
        } else {
          setLeftLogoVisible(false);
        }
      }

      if (rightLogo) {
        const logoMeanRightOffset = rightLogo.offsetTop;
        if (scrollPosition > logoMeanRightOffset - windowHeight + 100) {
          setRightLogoVisible(true);
        } else {
          setRightLogoVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="MainPage">
      <Header />
      <ImageSlider />
      <img className="about_hl" src={about_hl} alt="about_hl" />
      <img className="mid_banner" src={midBanner} alt="mid_banner" />
      <div className="logos">
        <img
          className={`logo_mean_left ${leftLogoVisible ? "visible" : ""}`}
          src={logo_mean_left}
          alt="logo_meaning_left"
        />
        <img
          className={`logo_mean_right ${rightLogoVisible ? "visible" : ""}`}
          src={logo_mean_right}
          alt="logo_meaning_right"
        />
      </div>
    </div>
  );
};

export default MainPage;