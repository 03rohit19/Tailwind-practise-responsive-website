import { useState, useRef, createContext } from "react";
import Carousel from "./Carousel";
import { FaArrowLeft } from "react-icons/fa";
import { TbPhotoVideo } from "react-icons/tb";
import { PiCopySimple } from "react-icons/pi";
import { GoZoomIn } from "react-icons/go";
import { MdCropFree } from "react-icons/md";
import FilterTabs from "./FilterTabs";
export const FilterContext = createContext();

const Test = () => {
  const [images, setImages] = useState([]);
  const [showZoom, setShowZoom] = useState(false);
  const [crop, setCrop] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showLargeDiv, setShowLargeDiv] = useState(false);

  const handleNext = () => {
    setShowLargeDiv(true);
  };

  const handleBack = () => {
    setShowLargeDiv(false);
    setFilterClass("");
    setAdjustment({
      contrast: 100,
      brightness: 100,
      saturate: 100,
      sepia: 0,
      gray: 0,
    });
  };

  const handleZoomChange = (event) => {
    const newZoomLevel = parseInt(event.target.value, 10);
    setZoomLevel(newZoomLevel);
  };

  const handleZoomOptions = () => {
    setShowZoom(!showZoom);
  };

  const handleCropOptions = () => {
    setCrop(!crop);
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

  const [filterClass, setFilterClass] = useState("");
  const [adjustment, setAdjustment] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  });
  console.log(adjustment);
  const value = {
    filterClass,
    setFilterClass,
    adjustment,
    setAdjustment,
  };

  return (
    <FilterContext.Provider value={value}>
      {showLargeDiv ? (
        <div
          className={`flex flex-col  mt-6 ml-80 border border-black h-[380px] w-[700px]`}
        >
          <div className="border-b-2 border-black h-10">
            <div className="flex justify-between m-2">
              <a onClick={handleBack}>Back</a>
            </div>
          </div>
          <div className="flex">
            <div className=" border border-red-500 w-[400px] h-[340px]">
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
            <div className="  border  border-black h-[100%] w-[50%] ">
              <FilterTabs />
            </div>
          </div>
        </div>
      ) : (
        <div className="m-4 ml-96 overflow-hidden border border-black h-[380px] w-[400px] relative bg-slate-400">
          <div className="w-full h-12 border border-blue-800">
            {images.length > 0 ? (
              <div className="flex justify-between mb-2">
                <button onClick={handleBackIcon}>
                  <FaArrowLeft className="m-2 text-lg text-black cursor-pointer" />
                </button>
                <h1>Crop</h1>
                <button onClick={handleNext}>Next</button>
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
                {crop && (
                  <div className=" flex flex-col border  border-white absolute bottom-20 left-2 p-1 h-28 w-20 rounded-md bg-slate-800 opacity-75 cursor-pointer">
                    <div className="flex">
                      <a className="text-white ">Original</a>
                    </div>
                    <div className="flex">
                      <a className="text-white ">1:1</a>
                      <span className="border border-white h-5 w-5 rounded-md ml-3"></span>
                    </div>{" "}
                    <div className="flex">
                      {" "}
                      <a className="text-white ">1:1</a>
                      <span className="border border-white h-5 w-5 rounded-md ml-3"></span>
                    </div>
                    <div className="flex">
                      <a className="text-white ">1:1</a>
                      <span className="border border-white h-5 w-5 rounded-md ml-3"></span>{" "}
                    </div>
                  </div>
                )}

                <MdCropFree
                  size={35}
                  className="absolute bottom-2 left-2 p-1 border-rose-950 rounded-full bg-slate-800 opacity-75 cursor-pointer"
                  onClick={handleCropOptions}
                />
                {showZoom && (
                  <div className="absolute bottom-16 left-20 p-1 border-rose-950 rounded-md bg-slate-800 opacity-75 cursor-pointer">
                    <input
                      type="range"
                      id="zoomSlider"
                      min="100"
                      max="300"
                      value={zoomLevel}
                      step="10"
                      onChange={handleZoomChange}
                    />
                  </div>
                )}

                <GoZoomIn
                  size={35}
                  className="absolute bottom-2 left-20 p-1 border-rose-950 rounded-full bg-slate-800 opacity-75 cursor-pointer"
                  onClick={handleZoomOptions}
                />
                <PiCopySimple
                  size={35}
                  className="absolute bottom-2 right-2 p-1 border-rose-950 rounded-full bg-slate-800 opacity-75 cursor-pointer"
                  onClick={handleSelectFromComputer}
                />
              </>
            )}
          </div>
        </div>
      )}
    </FilterContext.Provider>
  );
};

export default Test;
