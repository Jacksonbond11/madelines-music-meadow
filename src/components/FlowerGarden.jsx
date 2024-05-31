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
      flower: "./flowersSmall/file (1).png",
    },
    {
      id: "6wUK8WB3cbNUAAGjNmKy3M",
      artist: "Kayzo",
      song: "Suffocate",
      popularity: 59,
      image: "https://i.scdn.co/image/ab67616d0000b27383b23e605f2f8a88b86dbfe7",
      flower: "./flowersSmall/file (2).png",
    },
    {
      id: "4MAADpR6MjelkaZqe3Mgnv",
      artist: "Joey Purp",
      song: "Elastic",
      popularity: 60,
      image: "https://i.scdn.co/image/ab67616d0000b273c038cc146b4418bf3ddfdbb9",
      flower: "./flowersSmall/file (3).png",
    },
    {
      id: "4IiuExPFijOGZnVxGsKWcc",
      artist: "The White Stripes",
      song: "Seven Nation Army - The Glitch Mob Remix",
      popularity: 61,
      image: "https://i.scdn.co/image/ab67616d0000b2738b644b0543e2816dcca897f6",
      flower: "./flowersSmall/file (4).png",
    },
    {
      id: "4t5GyHjmowF0DFJSl03i3Y",
      artist: "Asking Alexandria",
      song: "The Violence - Sikdope Remix",
      popularity: 33,
      image: "https://i.scdn.co/image/ab67616d0000b273a1dc5a87c8b8a9ad041ef51f",
      flower: "./flowersSmall/file (5).png",
    },
    {
      id: "2npMfTDQAwY1Jga13HS01O",
      artist: "Sullivan King",
      song: "Riot",
      popularity: 42,
      image: "https://i.scdn.co/image/ab67616d0000b273788260291ea0b243469634c4",
      flower: "./flowersSmall/file (6).png",
    },
    {
      id: "4IadxL6BUymXlh8RCJJu7T",
      artist: "Hozier",
      song: "Too Sweet",
      popularity: 86,
      image: "https://i.scdn.co/image/ab67616d0000b273a5aab55aa65e5f6bd19564a2",
      flower: "./flowersSmall/file (7).png",
    },
    {
      id: "4zaTs0VrOpFsvcLjJH0Cdb",
      artist: "Party Favor",
      song: "HOOT",
      popularity: 20,
      image: "https://i.scdn.co/image/ab67616d0000b2737f6cc4d1aec2d9892307d254",
      flower: "./flowersSmall/file (8).png",
    },
    {
      id: "6fQaD9UaCJPLceCxfS8fpH",
      artist: "nothing,nowhere.",
      song: "THIRST4VIOLENCE (feat. Freddie Dredd & Silverstein)",
      popularity: 35,
      image: "https://i.scdn.co/image/ab67616d0000b2733bac3f5502b19553a25cd4c2",
      flower: "./flowersSmall/file (9).png",
    },
    {
      id: "0auAM0mRTL07NNoeCK96sS",
      artist: "Riot Ten",
      song: "Body Bag",
      popularity: 36,
      image: "https://i.scdn.co/image/ab67616d0000b273317af000f3882b54ab14bd38",
      flower: "./flowersSmall/file (10).png",
    },
    {
      id: "3Co9QY7WBNKoS44Nsk93r6",
      artist: "Kayzo",
      song: "DOMINATION",
      popularity: 49,
      image: "https://i.scdn.co/image/ab67616d0000b273c20e04712c5b91a3538069f3",
      flower: "./flowersSmall/file (11).png",
    },
    {
      id: "55AkyMunyvyP8mSFPvO45o",
      artist: "Huff",
      song: "BREAKOUT!",
      popularity: 21,
      image: "https://i.scdn.co/image/ab67616d0000b273b7f033ed3c27fd060ca52422",
      flower: "./flowersSmall/file (12).png",
    },
    {
      id: "0zMPotUcSqMFXv2WdCmtAs",
      artist: "Papa Roach",
      song: "Born for Greatness - Cymek Remix",
      popularity: 29,
      image: "https://i.scdn.co/image/ab67616d0000b27305320e8fcca574eff28e93b7",
      flower: "./flowersSmall/file (13).png",
    },
    {
      id: "6Aa7aDayiQHnUw1dUvdneZ",
      artist: "Mac Miller",
      song: "Donald Trump",
      popularity: 70,
      image: "https://i.scdn.co/image/ab67616d0000b27349a3f56cdc4d1f0da6b3be79",
      flower: "./flowersSmall/file (14).png",
    },
    {
      id: "3lAxntHH2z6L9wOFqCLYIq",
      artist: "GRAVEDGR",
      song: "BE WARY",
      popularity: 28,
      image: "https://i.scdn.co/image/ab67616d0000b273a1f7dacbd32eb6d3f0e80ad9",
      flower: "./flowersSmall/file (15).png",
    },
    {
      id: "0elCmyfISzkP5tAYTVuYjS",
      artist: "flipturn",
      song: "August",
      popularity: 64,
      image: "https://i.scdn.co/image/ab67616d0000b27335cedd0fe1bd17882886d400",
      flower: "./flowersSmall/file (16).png",
    },
    {
      id: "0i8cq68GTNkpkMW4lnOTcf",
      artist: "SNAILS",
      song: "Shake the Ground",
      popularity: 42,
      image: "https://i.scdn.co/image/ab67616d0000b273fe666b335e92ba635883667a",
      flower: "./flowersSmall/file (17).png",
    },
    {
      id: "4eydbGI5QpRXs0Tua5m2c1",
      artist: "GRAVEDGR",
      song: "Buck",
      popularity: 24,
      image: "https://i.scdn.co/image/ab67616d0000b2732c60dd7af42c315dab6c286a",
      flower: "./flowersSmall/file (18).png",
    },
    {
      id: "1IT0WQk5J8NsaeII8ktdlZ",
      artist: "Pierce The Veil",
      song: "King For A Day",
      popularity: 76,
      image: "https://i.scdn.co/image/ab67616d0000b273077cac00c2d9075e6f742570",
      flower: "./flowersSmall/file (19).png",
    },
    {
      id: "4roDTLs05yU9RpSBqwfKQ3",
      artist: "Lil Dicky",
      song: "Bruh...",
      popularity: 49,
      image: "https://i.scdn.co/image/ab67616d0000b273a5ea3573e8f48f5485760e2e",
      flower: "./flowersSmall/file.png",
    },
  ];

  const generateRandomPosition = (maxWidth, minY, maxY) => ({
    x: Math.random() * (maxWidth - 40) + 20,
    y: Math.random() * (maxY - minY) + minY,
  });

  const placeFlower = (flowers, size, minY, maxY) => {
    let position;
    let collision;
    let attempts = 0;
    const maxAttempts = 1000;
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

  const checkCollision = (flower1, flower2) => {
    const dx = flower1.x - flower2.x;
    const dy = flower1.y - flower2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < flower1.size / 2 + flower2.size / 2;
  };

  const calculateFlowerPositions = () => {
    const minY = window.innerHeight * 0.4;
    const maxY = window.innerHeight * 0.93;
    const flowers = [];
    const topTracks = tracks.map((track) => {
      const size = track.popularity * minY * 0.005;
      const position = placeFlower(flowers, size, minY, maxY);
      flowers.push({ ...position, size });
      return {
        ...track,
        size,
        position,
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
          image={track.image}
          flowerimg={track.flower}
          size={track.size}
          song={track.song}
          artist={track.artist}
        />
      ))}
    </div>
  );
};

export default FlowerGarden;
