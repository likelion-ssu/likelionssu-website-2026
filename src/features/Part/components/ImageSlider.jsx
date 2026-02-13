import React from "react";
import { sliderImages } from "../../../data/images"

export default function ImageSlider({ version = "pm" }) {
  const images = sliderImages[version] || [];

  // 무한 루프 위해 2번 이어붙임
  const loopImages = [...images, ...images,...images, ...images];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-[0.16rem] sm:gap-[0.31rem] animate-slider">
        {loopImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className="w-[5.15625rem] h-[3.1875rem] sm:w-[10.3125rem] sm:h-[6.375rem] object-cover"
          />
        ))}
      </div>
    </div>
  );
}
