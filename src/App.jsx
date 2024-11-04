import React, { useEffect } from "react";
import "./App.css";
import Video from "./Video/Video";
import Lyrics from "./Lyrics/Lyrics";
import { useState } from "react";
import { useRef } from "react";

const App = () => {
  const [start, setStart] = useState(false);
  const startref = useRef();
  const handdelclick = () => {
    setStart(!start);
  };
  useEffect(() => {
    if (start) {
      startref.current.classList.add("fade");
    }
  });
  return (
    <div className="app">
      <div className="video">
        <Video start={start} />
      </div>
      <Lyrics start={start} />
      <div ref={startref} className="start " onClick={handdelclick}>
        Start
      </div>
    </div>
  );
};

export default App;
