import React from "react";
import { sliderImages } from "../../../data/images";

export default function ImageSlider({ version = "pm" }) {
  const images = sliderImages[version] || [];
  const loopImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max gap-[0.16rem] sm:gap-[0.31rem] animate-slider">
        {loopImages.map((img, idx) => (
          <img
            key={`${version}-${idx}`}
            src={img}
            alt={`slide-${idx}`}
            className="w-[5.15625rem] h-[3.1875rem] sm:w-[10.3125rem] sm:h-[6.375rem] object-cover shrink-0"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
