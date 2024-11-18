import React, { useState } from "react";
import "./Game.css"; // Add this for custom styling

const Game = () => {
  const [showCircles, setShowCircles] = useState(false);
  const [hoveredCircle, setHoveredCircle] = useState(null);

  const handleMouseEnterMain = () => setShowCircles(true);
  const handleMouseLeaveMain = () => setShowCircles(false);

  const circleData = [
    { id: 1, text: "Circle 1 Text", image: "circle1.png" },
    { id: 2, text: "Circle 2 Text", image: "circle2.png" },
    { id: 3, text: "Circle 3 Text", image: "circle3.png" },
  ];

  return (
    <div className="app">
      <div
        className="main-button"
        onMouseEnter={handleMouseEnterMain}
        onMouseLeave={handleMouseLeaveMain}
      >
        Main Button
        {showCircles && (
          <div className="circle-container">
            {circleData.map((circle) => (
              <div
                key={circle.id}
                className="circle"
                onMouseEnter={() => setHoveredCircle(circle.id)}
                onMouseLeave={() => setHoveredCircle(null)}
              >
                <img src={circle.image} alt={`Circle ${circle.id}`} />
                {hoveredCircle === circle.id && (
                  <span className="circle-text">{circle.text}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
