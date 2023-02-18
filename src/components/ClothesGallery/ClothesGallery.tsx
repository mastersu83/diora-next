// "use client";

import React, { FC } from "react";
import classes from "./ClothesGallery.module.scss";
import HorizontalLoader from "../Loader/HorizontalLoader";
import VerticalLoader from "../Loader/VerticalLoader";
import { IImage, images } from "@/consts/images.data";
import { getPathName } from "@/utils/utils";

interface IProps {
  params: {
    typeOfClothing: string;
  };
}

const ClothesGallery: FC<IProps> = ({ params }) => {
  const { typeOfClothing, title } = getPathName(params.typeOfClothing);

  const boyImageVertical = images.filter(
    (i) => i.type === 0 && i.typeOfClothing === typeOfClothing
  );

  const boyImageHorizontal = images.filter(
    (i) => i.type === 1 && i.typeOfClothing === typeOfClothing
  );

  return (
    <div className={classes.clothesGirl}>
      <p className={classes.clothesGirl__title}>{title}</p>
      <div className={classes.clothesGirl__items}>
        <div className={classes.clothesGirl__verticalItems}>
          {images
            ? boyImageVertical.map((i: IImage) => (
                <img
                  className={classes.clothesGirl__item}
                  key={i._id}
                  src={`https://apidiorakids.ru/${i.imageUrl}`}
                  alt=""
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <VerticalLoader key={index} />)}
        </div>
        <div className={classes.clothesGirl__horizontalItems}>
          {images
            ? boyImageHorizontal.map((i: IImage) => (
                <img
                  className={classes.clothesGirl__item}
                  key={i._id}
                  src={`https://apidiorakids.ru/${i.imageUrl}`}
                  alt=""
                />
              ))
            : Array(3)
                .fill(0)
                .map((_, index) => <HorizontalLoader key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default ClothesGallery;
