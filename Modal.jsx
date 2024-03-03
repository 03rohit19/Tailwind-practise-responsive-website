import { useState, useRef, createContext } from "react";
import Carousel from "./Carousel";
import { FaArrowLeft } from "react-icons/fa";
import { TbPhotoVideo } from "react-icons/tb";
import { PiCopySimple } from "react-icons/pi";
import { GoZoomIn } from "react-icons/go";
import { MdCropFree } from "react-icons/md";
import FilterTabs from "./FilterTabs";

// import domtoimage from "dom-to-image-more";
// import { saveAs } from "file-saver";

export const FilterContext = createContext();

const Modal = ({ isVisible, onClose }) => {
  const [images, setImages] = useState([]);

  const [showZoom, setShowZoom] = useState(false);
  const [crop, setCrop] = useState(false);
  const [zoomLevels, setZoomLevels] = useState(100);
  const [showLargeDiv, setShowLargeDiv] = useState(false);
  const [filterClass, setFilterClass] = useState("");
  const [adjustment, setAdjustment] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  });

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

  const handleZoomChange = (event, index) => {
    const newZoomLevel = parseInt(event.target.value, 10);

    setZoomLevels((prevZoomLevels) => {
      const newZoomLevels = [...prevZoomLevels];
      newZoomLevels[index] = newZoomLevel;
      return newZoomLevels;
    });
  };

  const handleCropOptions = () => {
    setCrop(!crop);
  };

  const fileInputRef = useRef(null);

  const handleBackIcon = () => {
    setImages([]);
  };

  const handleZoomOptions = () => {
    setShowZoom(!showZoom);
  };

  const handleChange = (e) => {
    const fileList = e.target.files;
    const newImages = Array.from(fileList);
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleSelectFromComputer = () => {
    fileInputRef.current.click();
  };

  const value = {
    filterClass,
    setFilterClass,
    adjustment,
    setAdjustment,
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center rounded-lg  ">
      <button
        className="text-white text-xl font-bold absolute top-2 right-2 "
        onClick={onClose}
      >
        X
      </button>
      <FilterContext.Provider value={value}>
        {showLargeDiv ? (
          <div
            className={`flex flex-col  mt-[100px] ml-0 items-center justify-center  h-[430px] w-[740px] rounded-lg bg-black border border-pink-500`}
          >
            <div className="border-b-2 justify-between  h-10 w-full rounded-t-lg border border-orange-600 bg-black">
              <div className="flex justify-between mb-2 mt-1">
                <button onClick={handleBack}>
                  <FaArrowLeft className="mb-3 ml-1  text-white cursor-pointer" />
                </button>
                <h1 className="text-white mt-0">Edit</h1>
                <button className="text-white mr-1 mb-3">Save</button>
              </div>
            </div>
            <div className="flex rounded-lg  border border-blue-600 ">
              <div className="w-[100%] h-[392px] object-contain overflow-hidden  ">
                {images.length > 0 && (
                  <>
                    <Carousel
                      images={images}
                      zoomLevels={zoomLevels}
                      onZoomChange={handleZoomChange}
                    />

                    {/* Pass zoomLevels to Carousel */}
                    <input
                      className="hidden"
                      type="file"
                      onChange={handleChange}
                      multiple
                    />
                  </>
                )}
              </div>
              <div className="h-[100%] w-[80%]  ">
                <FilterTabs />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-24 ml-6 overflow-hidden  h-[430px] w-[450px] relative bg-black rounded-lg border border-green-500">
            <div className="w-full border border-red-800 ">
              {images.length > 0 ? (
                <div className="flex justify-between mb-2">
                  <button onClick={handleBackIcon}>
                    <FaArrowLeft className="m-2  text-white cursor-pointer" />
                  </button>
                  <h1 className="text-white mt-1">Crop</h1>
                  <button onClick={handleNext} className="text-white mr-2">
                    Next
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center text-white font-semibold h-10 p-2 border-b border-slate-300 bg-black">
                    Create new post
                  </div>
                  <div className="bg-#1c1e21 h-[410px] w-full">
                    <div className="flex w-[100%] justify-center">
                      <TbPhotoVideo
                        className="text-white text-8xl font-light text-center mt-28 "
                        style={{ transform: "rotate(5deg)" }}
                      />
                    </div>
                    <p className="text-white mt-1 ml-[145px]">
                      Drag photos and videos
                    </p>
                    <div className="flex flex-col  ">
                      <input
                        ref={fileInputRef}
                        className="hidden"
                        type="file"
                        onChange={handleChange}
                        multiple
                      />
                      <label
                        htmlFor="fileInput"
                        className="text-white mt-3 ml-[149px] bg-blue-600 rounded-lg cursor-pointer text-xs text-center p-1 w-40 hover:bg-blue-700"
                        onClick={handleSelectFromComputer}
                      >
                        Select from computer
                      </label>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-col w-full object-cover h-[450px] border border-purple-600">
              {images.length > 0 && (
                <>
                  <Carousel
                    images={images}
                    zoomLevels={zoomLevels}
                    onZoomChange={handleZoomChange}
                  />
                  <input
                    ref={fileInputRef}
                    className="hidden"
                    type="file"
                    onChange={handleChange}
                    multiple
                  />

                  {crop && (
                    <div className="flex flex-col border  border-white absolute bottom-20 left-2 p-1 h-28 w-20 rounded-md bg-gray-600 opacity-75 cursor-pointer">
                      <div className="flex">
                        <a className="text-white">Original</a>
                      </div>
                      <div className="flex">
                        <a className="text-white">1:1</a>
                        <span className="border border-white h-5 w-5 rounded-md ml-3"></span>
                      </div>{" "}
                      <div className="flex">
                        <a className="text-white">1:1</a>
                        <span className="border border-white h-5 w-5 rounded-md ml-3"></span>
                      </div>{" "}
                      <div className="flex">
                        <a className="text-white">1:1</a>
                        <span className="border border-white h-5 w-5 rounded-md ml-3"></span>
                      </div>{" "}
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
                        value={zoomLevels}
                        step="10"
                        onChange={(event) => handleZoomChange(event)}
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
    </div>
  );
};

export default Modal;
