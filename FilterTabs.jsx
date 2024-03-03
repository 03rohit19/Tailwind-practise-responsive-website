import React, { useState } from "react";
import CustomFilter from "./CustomFilter";
import InstaFilter from "./InstaFilter";

const FilterTabs = () => {
  const [selectedFilter, setSelectedFilter] = useState("insta");

  const handleTabClick = (filterType) => {
    setSelectedFilter(filterType);
  };

  return (
    <>
      <div className="border-b border-slate-800 w-[101%] h-6 ">
        <div className="flex">
          <div
            className={`text-center w-[50%] h-[100%] border-r-2 mr-1${
              selectedFilter === "insta" ? "text-gray-300" : ""
            }`}
            onClick={() => handleTabClick("insta")}
          >
            <h1 className="text-gray-300 hover:text-white cursor-pointer">
              Filters
            </h1>
          </div>

          <div
            className={`text-center w-[80%] h-[100%]  mr-[4px] ${
              selectedFilter === "custom" ? "text-gray-300" : ""
            }`}
            onClick={() => handleTabClick("custom")}
          >
            <h1 className="text-gray-300 hover:text-white cursor-pointer">
              Adjustments
            </h1>
          </div>
        </div>
      </div>
      <div className="text-start h-[90%] object-cover w-[92%]  ml-6 ">
        {selectedFilter === "insta" && <InstaFilter />}
        {selectedFilter === "custom" && <CustomFilter />}
      </div>
    </>
  );
};

export default FilterTabs;
