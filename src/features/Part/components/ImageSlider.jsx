import React from "react";
import { sliderImages } from "../../../data/images";

const SECONDS_PER_IMAGE = 10;

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
  const sliderDurationSec = Math.max(images.length, 1) * SECONDS_PER_IMAGE;

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex w-max gap-[0.16rem] sm:gap-[0.31rem] animate-slider"
        style={{ animationDuration: `${sliderDurationSec}s` }}
      >
        {loopImages.map((img, idx) => (
          <img
            key={`${version}-${idx}`}
            src={img}
            alt={`slide-${idx}`}
            className="w-[6.703125rem] h-[4.14375rem] sm:w-[10.3125rem] sm:h-[6.375rem] object-cover shrink-0"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
