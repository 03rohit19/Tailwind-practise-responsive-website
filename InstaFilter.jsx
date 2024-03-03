// import { useContext } from "react";
// import { Box, FormControl, MenuItem, Select } from "@mui/material";
// import { filterValues } from "../utils/filterValues";
// import { FilterContext } from "./Test";
// import flowerImage from "../assets/flower.jpg";

// const InstaFilter = () => {
//   const { filterClass, setFilterClass } = useContext(FilterContext);
//   const handleChange = (e) => {
//     setFilterClass(e.target.value);
//   };

//   return (
//     <>
//       <div className="flex flex-col border border-black h-full w-full">
//         <div className="grid grid-cols-3 gap-4">
//           {filterValues.map((filter) => (
//             <div key={filter.class} className="flex flex-col items-center">
//               <img
//                 src={flowerImage}
//                 alt={filter.name}
//                 className={`filter ${filter.class} w-16 h-16`}
//               />

//               <span className="mt-2">{filter.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default InstaFilter;

// InstaFilter.jsx;

import { useContext } from "react";
import { filterValues } from "../utils/filterValues";
import { FilterContext } from "./Modal";
import flowerImage from "../assets/flower.jpg";

const InstaFilter = () => {
  const { filterClass, setFilterClass } = useContext(FilterContext);

  const handleChange = (e) => {
    setFilterClass(e.target.value);
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col mt-3 h-[355px] w-[100%] overflow-hidden border border-red-900">
        <div className="grid grid-cols-3 gap-3 overflow-y-auto">
          {filterValues.map((filter) => (
            <div
              key={filter.class}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleChange({ target: { value: filter.class } })}
            >
              <img
                src={flowerImage}
                alt={filter.name}
                className={`flower-image ${filter.class} w-16 h-16`}
              />
              <span className="mt-2">{filter.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstaFilter;
