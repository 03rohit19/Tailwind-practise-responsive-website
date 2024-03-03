// import React, { useState, useContext } from "react";
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { FilterContext } from "./Modal";
// import "../styles/instagram.css";

// const Carousel = ({ images, zoomLevels }) => {
//   const [curr, setCurr] = useState(0);
//   const { filterClass, adjustment } = useContext(FilterContext);

//   const prev = () => {
//     setCurr((prevCurr) => (prevCurr === 0 ? images.length - 1 : prevCurr - 1));
//   };

//   const next = () => {
//     setCurr((prevCurr) => (prevCurr === images.length - 1 ? 0 : prevCurr + 1));
//   };

//   return (
//     <div className="overflow-hidden relative w-full h-full">
//       <div
//         className="flex transition-transform ease-out duration-500 w-full"
//         style={{
//           transform: `translateX(-${curr * 100}%) scale(${
//             zoomLevels[curr] / 100
//           })`,
//           filter: `contrast(${adjustment.contrast}%) brightness(${adjustment.brightness}%) saturate(${adjustment.saturate}%) sepia(${adjustment.sepia}%) grayScale(${adjustment.gray}%)`,
//         }}
//       >
//         {images.map((file, index) => (
//           <img
//             className={`border border-yellow-400 ${
//               file.naturalWidth > file.naturalHeight
//                 ? "w-[450px] h-[389px] object-cont landscape-image"
//                 : "w-[450px] h-[389px] object-cover portrait-image"
//             } ${filterClass}`}
//             key={index}
//             src={URL.createObjectURL(file)}
//             alt={`uploaded file ${index + 1}`}
//           />
//         ))}
//       </div>
//       {images.length > 1 && (
//         <div className="absolute inset-0 flex items-center justify-between">
//           <button className="rounded-full bg-white text-black" onClick={prev}>
//             <GoChevronLeft size={20} />
//           </button>
//           <button className="rounded-full bg-white text-black" onClick={next}>
//             <GoChevronRight size={20} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Carousel;

// import React, { useState, useContext, useEffect } from "react";
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { FilterContext } from "./Modal";
// import "../styles/instagram.css";

// const Carousel = ({ images, zoomLevels }) => {
//   const [curr, setCurr] = useState(0);
//   const { filterClass, adjustment } = useContext(FilterContext);

//   useEffect(() => {
//     console.log("Carousel rerendered. Current index:", curr);
//   }, [curr]);

//   const prev = () => {
//     console.log("Previous button clicked");
//     setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
//   };

//   const next = () => {
//     console.log("Next button clicked");
//     setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
//   };

//   return (
//     <div className="overflow-hidden relative w-full h-full">
//       <div
//         className="flex w-full  transition-transform ease-out duration-500"
//         style={{
//           transform: `translateX(-${curr * 100}%) scale(${zoomLevels / 100})`,
//           filter: `contrast(${adjustment.contrast}%) brightness(${adjustment.brightness}%) saturate(${adjustment.saturate}%) sepia(${adjustment.sepia}%) grayscale(${adjustment.gray}%)`,
//         }}
//       >
//         {images.map((file) => (
//           <img
//             className={`border border-yellow-400 w-[450px] h-[389px] object-cover ${filterClass}`}
//             key={file.name}
//             src={URL.createObjectURL(file)}
//             alt={`uploaded file ${file.name}`}
//           />
//         ))}
//       </div>
//       {images.length > 1 && (
//         <div className="absolute inset-0 flex items-center justify-between">
//           <button className="rounded-full bg-white text-black" onClick={prev}>
//             <GoChevronLeft size={20} />
//           </button>
//           <button className="rounded-full bg-white text-black" onClick={next}>
//             <GoChevronRight size={20} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useContext, useEffect } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FilterContext } from "./Modal";
import "../styles/instagram.css";

const Carousel = ({ images, zoomLevels, onZoomChange }) => {
  const [curr, setCurr] = useState(0);
  const { filterClass, adjustment } = useContext(FilterContext);

  useEffect(() => {
    console.log("Carousel rerendered. Current index:", curr);
  }, [curr]);

  const prev = () => {
    console.log("Previous button clicked");
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const next = () => {
    console.log("Next button clicked");
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  const handleZoomChange = (event) => {
    onZoomChange(event);
  };

  return (
    <div className="overflow-hidden relative w-full h-full">
      <div
        className="flex w-full  transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
          filter: `contrast(${adjustment.contrast}%) brightness(${adjustment.brightness}%) saturate(${adjustment.saturate}%) sepia(${adjustment.sepia}%) grayscale(${adjustment.gray}%)`,
        }}
      >
        {images.map((file, index) => (
          <img
            className={`border border-yellow-400 w-[450px] h-[389px] object-cover ${filterClass}`}
            style={{ zoom: `${zoomLevels}%` }}
            key={file.name}
            src={URL.createObjectURL(file)}
            alt={`uploaded file ${file.name}`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between">
          <button className="rounded-full bg-white text-black" onClick={prev}>
            <GoChevronLeft size={20} />
          </button>
          <button className="rounded-full bg-white text-black" onClick={next}>
            <GoChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
