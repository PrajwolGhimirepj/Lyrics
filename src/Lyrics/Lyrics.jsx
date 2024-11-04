import React, { useEffect, useState } from "react";
import "./Lyrics.css";

const Lyrics = ({ start }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("captions_words.json"); // Adjust the path if needed
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching the JSON data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="lyric-container">
      {data.map((item, index) => (
        <div
          className={`lyric font ${start ? "fadeIn" : ""}`} // Add class conditionally
          key={item.timestamp}
          style={{ animationDelay: `${item.timestamp}s` }} // Adjust the animation delay
        >
          {item.word}
        </div>
      ))}
    </div>
  );
};

export default Lyrics;
