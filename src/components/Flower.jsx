import React, { useState } from "react";

const Flower = ({
  cx,
  cy,
  petalColor,
  petalCount,
  petalLength,
  petalWidth,
  size,
  song,
  artist,
  plays,
  image,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const petalData = Array.from({ length: petalCount }, (_, i) => ({
    cx: 0,
    cy: -petalLength / 2,
    rx: petalWidth,
    ry: petalLength,
    rotate: (360 / petalCount) * i,
  }));

  return (
    <div
      className="absolute"
      style={{
        left: cx - size / 2,
        top: cy - size / 2,
        width: size,
        height: size + 40,
        zIndex: 30,
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <svg viewBox="0 0 100 140">
        {/* Draw the stem */}
        <rect x="48" y="60" width="4" height="80" fill="green" />
        {/* Draw the center of the flower */}
        <circle cx="50" cy="50" r="10" fill="yellow" />
        {/* Draw the petals */}
        {petalData.map((petal, index) => (
          <ellipse
            key={index}
            cx="50"
            cy="50"
            rx={petal.rx}
            ry={petal.ry}
            fill={petalColor}
            transform={`rotate(${petal.rotate}, 50, 50)`}
          />
        ))}
      </svg>
      {showTooltip && (
        <div
          className="absolute bg-white text-black p-2 rounded shadow-lg"
          style={{ top: -60, left: size, zIndex: 40 }}
        >
          <img src={`${image}`} alt="album cover" />
          <div>
            <strong>Song:</strong> {song}
          </div>
          <div>
            <strong>Artist:</strong> {artist}
          </div>
        </div>
      )}
    </div>
  );
};

export default Flower;
