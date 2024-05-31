import React, { useState } from "react";

const Flower = ({ cx, cy, flowerimg, image, size, song, artist }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="absolute"
      style={{
        left: cx - size / 2,
        top: cy - size / 2,
        width: size,
        height: size,
        zIndex: showTooltip ? 100 : 30,
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img
        src={flowerimg}
        alt={song}
        style={{ width: "100%", height: "100%" }}
      />
      {showTooltip && (
        <div
          className="absolute bg-white text-black p-2 rounded shadow-lg w-[100px]"
          style={{ top: -50, left: size, zIndex: 200 }}
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
