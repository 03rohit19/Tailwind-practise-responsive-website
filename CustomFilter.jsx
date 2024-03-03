import React from "react";
import SliderField from "./SliderField";

const CustomFilter = () => {
  const Slider = [
    { label: "Contrast", defaultValue: 100, field: "contrast" },
    { label: "Brightness", defaultValue: 100, field: "brightness" },
    { label: "Saturation", defaultValue: 100, field: "contrast" },
    { label: "Sepia", defaultValue: 0, field: "sepia" },
    { label: "Gray Scale", defaultValue: 0, field: "gray" },
  ];

  return (
    <>
      <div className="mt-10  text-white font-thin ">
        {Slider.map((slide) => (
          <SliderField slide={slide} key={slide.field} />
        ))}
      </div>
    </>
  );
};

export default CustomFilter;
