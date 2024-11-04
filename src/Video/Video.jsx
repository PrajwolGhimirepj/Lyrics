import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";

const Video = ({ start }) => {
  const videoOptions = {
    height: "360",
    width: "400",
    playerVars: {
      autoplay: 1,
    },
  };

  const playerRef = useRef(null); // Create a ref to store the player instance

  const onReady = (event) => {
    playerRef.current = event.target; // Save the player instance in the ref
    // If you want to pause the video when it's ready and not based on `start`, keep this line
  };

  useEffect(() => {
    if (playerRef.current) {
      if (start) {
        playerRef.current.playVideo(); // Play the video if start is true
      }
    }
  }, [start]);
  //www.youtube.com/watch?v=U2SVCCENLjE
  https: return (
    <YouTube videoId="U2SVCCENLjE" opts={videoOptions} onReady={onReady} />
  );
};

export default Video;
