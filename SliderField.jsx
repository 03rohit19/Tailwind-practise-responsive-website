import React, { useContext, useState, useEffect } from "react";
import { Box, Slider } from "@mui/material";
import { FilterContext } from "./Modal";

const SliderField = ({ slide }) => {
  const { label, defaultValue, field } = slide;
  const [value, setValue] = useState(defaultValue);
  const { adjustment, setAdjustment } = useContext(FilterContext);

  useEffect(() => {
    setAdjustment({ ...adjustment, [field]: value });
  }, [value]);

  const handleSliderValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Box>
        <Box>{label}</Box>
        <Slider
          size="small"
          valueLabelDisplay="auto"
          value={value}
          onChange={handleSliderValue}
          max={200}
          min={-50}
        />
      </Box>
    </>
  );
};

export default SliderField;
