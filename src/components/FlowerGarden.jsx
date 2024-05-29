import React from "react";
import Flower from "./Flower";

const FlowerGarden = () => {
  const sampleSpotifyData = [
    {
      id: "1",
      name: "Song 1",
      album: { primary_color: "#FF6347" },
      artist: "Lorde",
      popularity: 75,
      duration_ms: 210000,
      tempo: 120,
      plays: 1500,
    },
    {
      id: "2",
      name: "Song 2",
      album: { primary_color: "#4682B4" },
      popularity: 60,
      duration_ms: 180000,
      tempo: 130,
      plays: 1200,
    },
    {
      id: "3",
      name: "Song 3",
      album: { primary_color: "#32CD32" },
      popularity: 85,
      duration_ms: 240000,
      tempo: 140,
      plays: 2000,
    },
    {
      id: "4",
      name: "Song 4",
      album: { primary_color: "#FFD700" },
      popularity: 55,
      duration_ms: 150000,
      tempo: 110,
      plays: 800,
    },
    {
      id: "5",
      name: "Song 5",
      album: { primary_color: "#6A5ACD" },
      popularity: 70,
      duration_ms: 200000,
      tempo: 100,
      plays: 1400,
    },
    {
      id: "6",
      name: "Song 6",
      album: { primary_color: "#FF4500" },
      popularity: 65,
      duration_ms: 190000,
      tempo: 105,
      plays: 1300,
    },
    {
      id: "7",
      name: "Song 7",
      album: { primary_color: "#2E8B57" },
      popularity: 80,
      duration_ms: 220000,
      tempo: 115,
      plays: 1600,
    },
    {
      id: "8",
      name: "Song 8",
      album: { primary_color: "#8B0000" },
      popularity: 90,
      duration_ms: 230000,
      tempo: 125,
      plays: 200,
    },
    {
      id: "9",
      name: "Song 9",
      album: { primary_color: "#FF1493" },
      popularity: 50,
      duration_ms: 160000,
      tempo: 135,
      plays: 900,
    },
    {
      id: "10",
      name: "Song 10",
      album: { primary_color: "#20B2AA" },
      popularity: 95,
      duration_ms: 250000,
      tempo: 145,
      plays: 2200,
    },
  ];

  const maxPlays = Math.max(...sampleSpotifyData.map((track) => track.plays));
  const minPlays = Math.min(...sampleSpotifyData.map((track) => track.plays));

  const generateRandomPosition = (maxWidth, minY, maxY) => ({
    x: Math.random() * (maxWidth - 40) + 20, // 20px margin on both sides
    y: Math.random() * (maxY - minY) + minY,
  });

  const checkCollision = (flower1, flower2) => {
    const dx = flower1.x - flower2.x;
    const dy = flower1.y - flower2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < flower1.size / 2 + flower2.size / 2;
  };

  const placeFlower = (flowers, size, minY, maxY) => {
    let position;
    let collision;
    do {
      collision = false;
      position = generateRandomPosition(window.innerWidth, minY, maxY);
      for (let i = 0; i < flowers.length; i++) {
        if (checkCollision({ ...position, size }, flowers[i])) {
          collision = true;
          break;
        }
      }
    } while (collision);
    return position;
  };

  const topTracks = sampleSpotifyData.map((track) => {
    const size = ((track.plays - minPlays) / (maxPlays - minPlays)) * 80 + 20; // Normalize size between 20 and 100
    return {
      id: track.id,
      petalColor: track.album.primary_color || "pink",
      petalCount: (track.popularity % 5) + 5,
      petalLength: (track.duration_ms % 20) + 30,
      petalWidth: (track.tempo % 10) + 10,
      size,
      position: null, // Will be assigned later
      song: track.name,
      artist: track.artist,
      plays: track.plays,
    };
  });

  // Assign non-overlapping positions
  const minY = window.innerHeight / 2;
  const maxY = window.innerHeight - 40;
  const flowers = [];
  topTracks.forEach((track) => {
    const position = placeFlower(flowers, track.size, minY, maxY);
    track.position = position;
    flowers.push({ ...position, size: track.size });
  });

  return (
    <div className="relative w-full h-full">
      {topTracks.map((track) => (
        <Flower
          key={track.id}
          cx={track.position.x}
          cy={track.position.y}
          petalColor={track.petalColor}
          petalCount={track.petalCount}
          petalLength={track.petalLength}
          petalWidth={track.petalWidth}
          size={track.size}
          song={track.song}
          artist={track.artist}
          plays={track.plays}
        />
      ))}
    </div>
  );
};

export default FlowerGarden;
