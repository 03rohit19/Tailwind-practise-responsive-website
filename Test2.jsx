import React, { useState, useRef } from "react";
import Carousel from "./Carousel";
import { FaArrowLeft } from "react-icons/fa";
import { TbPhotoVideo } from "react-icons/tb";
import { PiCopySimple } from "react-icons/pi";
import { GoZoomIn } from "react-icons/go";
import { MdCropFree } from "react-icons/md";

const Test2 = () => {
  const [showLargeDiv, setShowLargeDiv] = useState(false);
  const [images, setImages] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleNext = () => {
    setShowLargeDiv(true);
  };

  const handleBack = () => {
    setShowLargeDiv(false);
  };

  const fileInputRef = useRef(null);

  const handleBackIcon = () => {
    setImages([]);
  };

  const handleChange = (e) => {
    const fileList = e.target.files;
    const newImages = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      newImages.push(file);
    }

    setImages([...images, ...newImages]);
  };

  const handleSelectFromComputer = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      {showLargeDiv ? (
        <div
          className={`flex flex-col grid-cols-2 mt-6 ml-80 border border-black h-[500px] w-[700px]`}
        >
          <div className="border-b-2 border-black h-10">
            <div className="flex justify-between m-2">
              <a onClick={handleBack}>Back</a>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-col grid-cols-2 mt-6 ml-96 border border-black h-[500px] w-[500px]`}
        >
          <div className="border-b-2 border-black h-10">
            <div className="w-full h-12 border border-blue-800">
              {images.length > 0 ? (
                <div className="flex justify-between mb-2">
                  <button onClick={handleBackIcon}>
                    <FaArrowLeft className="m-2 text-lg text-black cursor-pointer" />
                  </button>
                  <h1>Crop</h1>
                  <button className="font-semibold " onClick={handleNext}>
                    Next
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center text-black font-semibold m-2">
                    Create new post
                  </div>
                  <div className="bg-black h-[400px] w-full">
                    <div className="flex w-[100%] justify-center">
                      <TbPhotoVideo
                        className="text-white text-8xl font-light text-center mt-28 "
                        style={{ transform: "rotate(5deg)" }}
                      />
                    </div>
                    <p className="text-white mt-1 ml-40">
                      Drag photos and videos
                    </p>
                    <div className="flex flex-col ">
                      <input
                        ref={fileInputRef}
                        className="hidden"
                        type="file"
                        onChange={handleChange}
                        multiple
                      />
                      <label
                        htmlFor="fileInput"
                        className="text-white mt-1 ml-40 bg-blue-600 rounded-lg cursor-pointer text-xs text-center p-2 w-40"
                        onClick={handleSelectFromComputer}
                      >
                        Select from computer
                      </label>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col border border-red-500 w-full ob h-[400px]">
            {images.length > 0 && (
              <>
                <Carousel images={images} zoomLevel={zoomLevel} />
                <input
                  ref={fileInputRef}
                  className="hidden"
                  type="file"
                  onChange={handleChange}
                  multiple
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Test2;
