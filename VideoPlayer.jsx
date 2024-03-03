import React, { useRef } from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({ videoSrc, videoType = "mp4" }) => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <>
      <div className="grid grid-cols-1">
        <button className="btn text-black" onClick={handlePlay}>
          Play
        </button>
        <button className="btn text-black" onClick={handlePause}>
          Pause
        </button>
      </div>
      <video
        className=" ml-60 w-[520px] h-[240px] bg-black "
        controls
        ref={videoRef}
      >
        <source src={videoSrc} type={videoType} />
      </video>
    </>
  );
};

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  videoType: PropTypes.string,
};

export default VideoPlayer;
