"use client";

import React from "react";
import classes from "./Slider.module.scss";
import SimpleImageSlider from "react-simple-image-slider";
import image from "../../assets/IndigoDesigns_BabyBoy_cl+(5)1.png";
import Image from "next/image";

export type ImageTypes = {
  type: string;
  typeOfClothing: string;
  imageUrl: string;
};

const Slider = () => {
  const sliderImages = [
    "https://apidiorakids.ru/uploads/IMG_6422.jpg",
    "https://apidiorakids.ru/uploads/IMG_6454.jpg",
  ];

  return (
    <div className={classes.slider}>
      <SimpleImageSlider
        width={1200}
        height={750}
        images={sliderImages}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={1}
        slideDuration={2}
      />

      <Image
        width={305}
        className={classes.slider__image}
        src={image}
        alt="BabyBoy"
      />
    </div>
  );
};

export default Slider;
