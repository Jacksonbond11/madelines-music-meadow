import React, { useState, useEffect } from "react";
import Flower from "./Flower";

const FlowerGarden = () => {
  const tracks = [
    {
      id: "434qhYDxNYCvwimHtlSNvF",
      artist: "Party Favor",
      song: "2012",
      popularity: 33,
      image: "https://i.scdn.co/image/ab67616d0000b27388d152fedc3d2753970934be",
      color: "#FF69B4", // Hot Pink
    },
    {
      id: "6wUK8WB3cbNUAAGjNmKy3M",
      artist: "Kayzo",
      song: "Suffocate",
      popularity: 59,
      image: "https://i.scdn.co/image/ab67616d0000b27383b23e605f2f8a88b86dbfe7",
      color: "#8A2BE2", // Blue Violet
    },
    {
      id: "4MAADpR6MjelkaZqe3Mgnv",
      artist: "Joey Purp",
      song: "Elastic",
      popularity: 60,
      image: "https://i.scdn.co/image/ab67616d0000b273c038cc146b4418bf3ddfdbb9",
      color: "#7FFF00", // Chartreuse
    },
    {
      id: "4IiuExPFijOGZnVxGsKWcc",
      artist: "The White Stripes",
      song: "Seven Nation Army - The Glitch Mob Remix",
      popularity: 61,
      image: "https://i.scdn.co/image/ab67616d0000b2738b644b0543e2816dcca897f6",
      color: "#FF4500", // Orange Red
    },
    {
      id: "4t5GyHjmowF0DFJSl03i3Y",
      artist: "Asking Alexandria",
      song: "The Violence - Sikdope Remix",
      popularity: 33,
      image: "https://i.scdn.co/image/ab67616d0000b273a1dc5a87c8b8a9ad041ef51f",
      color: "#1E90FF", // Dodger Blue
    },
    {
      id: "2npMfTDQAwY1Jga13HS01O",
      artist: "Sullivan King",
      song: "Riot",
      popularity: 42,
      image: "https://i.scdn.co/image/ab67616d0000b273788260291ea0b243469634c4",
      color: "#FFD700", // Gold
    },
    {
      id: "4IadxL6BUymXlh8RCJJu7T",
      artist: "Hozier",
      song: "Too Sweet",
      popularity: 86,
      image: "https://i.scdn.co/image/ab67616d0000b273a5aab55aa65e5f6bd19564a2",
      color: "#ADFF2F", // Green Yellow
    },
    {
      id: "4zaTs0VrOpFsvcLjJH0Cdb",
      artist: "Party Favor",
      song: "HOOT",
      popularity: 20,
      image: "https://i.scdn.co/image/ab67616d0000b2737f6cc4d1aec2d9892307d254",
      color: "#FF6347", // Tomato
    },
    {
      id: "6fQaD9UaCJPLceCxfS8fpH",
      artist: "nothing,nowhere.",
      song: "THIRST4VIOLENCE (feat. Freddie Dredd & Silverstein)",
      popularity: 35,
      image: "https://i.scdn.co/image/ab67616d0000b2733bac3f5502b19553a25cd4c2",
      color: "#9400D3", // Dark Violet
    },
    {
      id: "0auAM0mRTL07NNoeCK96sS",
      artist: "Riot Ten",
      song: "Body Bag",
      popularity: 36,
      image: "https://i.scdn.co/image/ab67616d0000b273317af000f3882b54ab14bd38",
      color: "#00FFFF", // Cyan
    },
    {
      id: "3Co9QY7WBNKoS44Nsk93r6",
      artist: "Kayzo",
      song: "DOMINATION",
      popularity: 49,
      image: "https://i.scdn.co/image/ab67616d0000b273c20e04712c5b91a3538069f3",
      color: "#FF00FF", // Magenta
    },
    {
      id: "55AkyMunyvyP8mSFPvO45o",
      artist: "Huff",
      song: "BREAKOUT!",
      popularity: 21,
      image: "https://i.scdn.co/image/ab67616d0000b273b7f033ed3c27fd060ca52422",
      color: "#FF1493", // Deep Pink
    },
    {
      id: "0zMPotUcSqMFXv2WdCmtAs",
      artist: "Papa Roach",
      song: "Born for Greatness - Cymek Remix",
      popularity: 29,
      image: "https://i.scdn.co/image/ab67616d0000b27305320e8fcca574eff28e93b7",
      color: "#32CD32", // Lime Green
    },
    {
      id: "6Aa7aDayiQHnUw1dUvdneZ",
      artist: "Mac Miller",
      song: "Donald Trump",
      popularity: 70,
      image: "https://i.scdn.co/image/ab67616d0000b27349a3f56cdc4d1f0da6b3be79",
      color: "#8B0000", // Dark Red
    },
    {
      id: "3lAxntHH2z6L9wOFqCLYIq",
      artist: "GRAVEDGR",
      song: "BE WARY",
      popularity: 28,
      image: "https://i.scdn.co/image/ab67616d0000b273a1f7dacbd32eb6d3f0e80ad9",
      color: "#00FA9A", // Medium Spring Green
    },
    {
      id: "0elCmyfISzkP5tAYTVuYjS",
      artist: "flipturn",
      song: "August",
      popularity: 64,
      image: "https://i.scdn.co/image/ab67616d0000b27335cedd0fe1bd17882886d400",
      color: "#4682B4", // Steel Blue
    },
    {
      id: "0i8cq68GTNkpkMW4lnOTcf",
      artist: "SNAILS",
      song: "Shake the Ground",
      popularity: 42,
      image: "https://i.scdn.co/image/ab67616d0000b273fe666b335e92ba635883667a",
      color: "#FF8C00", // Dark Orange
    },
    {
      id: "4eydbGI5QpRXs0Tua5m2c1",
      artist: "GRAVEDGR",
      song: "Buck",
      popularity: 24,
      image: "https://i.scdn.co/image/ab67616d0000b2732c60dd7af42c315dab6c286a",
      color: "#B22222", // Firebrick
    },
    {
      id: "1IT0WQk5J8NsaeII8ktdlZ",
      artist: "Pierce The Veil",
      song: "King For A Day",
      popularity: 76,
      image: "https://i.scdn.co/image/ab67616d0000b273077cac00c2d9075e6f742570",
      color: "#DAA520", // Goldenrod
    },
    {
      id: "4roDTLs05yU9RpSBqwfKQ3",
      artist: "Lil Dicky",
      song: "Bruh...",
      popularity: 49,
      image: "https://i.scdn.co/image/ab67616d0000b273a5ea3573e8f48f5485760e2e",
      color: "#9932CC", // Dark Orchid
    },
  ];

  const maxPopularity = Math.max(...tracks.map((track) => track.popularity));
  const minPopularity = Math.min(...tracks.map((track) => track.popularity));

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
    let attempts = 0;
    const maxAttempts = 1000; // Set a maximum number of attempts to avoid infinite loops
    do {
      collision = false;
      position = generateRandomPosition(window.innerWidth, minY, maxY);
      for (let i = 0; i < flowers.length; i++) {
        if (checkCollision({ ...position, size }, flowers[i])) {
          collision = true;
          break;
        }
      }
      attempts++;
    } while (collision && attempts < maxAttempts);
    if (attempts >= maxAttempts) {
      console.warn(
        "Could not place flower without collision after maximum attempts"
      );
    }
    return position;
  };

  const calculateFlowerPositions = () => {
    const minY = window.innerHeight * 0.2; // Adjust the minimum Y position
    const maxY = window.innerHeight * 0.8; // Adjust the maximum Y position
    const flowers = [];
    const topTracks = tracks.map((track) => {
      const size =
        ((track.popularity - minPopularity) / (maxPopularity - minPopularity)) *
          80 +
        20; // Normalize size between 20 and 100
      const position = placeFlower(flowers, size, minY, maxY);
      flowers.push({ ...position, size });
      return {
        ...track,
        size,
        position,
        petalColor: track.color,
        petalCount: (track.popularity % 5) + 5,
        petalLength: (track.popularity % 20) + 50, // Larger petals
        petalWidth: (track.popularity % 10) + 20, // Larger petals
      };
    });
    return topTracks;
  };

  const [flowerPositions, setFlowerPositions] = useState(
    calculateFlowerPositions()
  );

  useEffect(() => {
    const handleResize = () => {
      setFlowerPositions(calculateFlowerPositions());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {flowerPositions.map((track) => (
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
          plays={track.popularity}
          image={track.image}
        />
      ))}
    </div>
  );
};

export default FlowerGarden;
