import React, { useState, useEffect } from "react";
import { fetchDogImages } from "../api";
import DogCard from "./DogCard";
import "./DogGallery.css";

const DogGallery = () => {
  const [dogImages, setDogImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadDogImages = async () => {
    setLoading(true);
    const images = await fetchDogImages();
    setDogImages(images);
    setLoading(false);
  };

  useEffect(() => {
    loadDogImages(); // Завантаження даних при першому рендері
  }, []);

  return (
    <div className="dog-gallery">
      <h1>Dog Gallery</h1>
      <button onClick={loadDogImages} disabled={loading}>
        {loading ? "Loading..." : "Reload Images"}
      </button>
      <div className="dog-list">
        {dogImages.map((url, index) => (
          <DogCard key={index} imageUrl={url} />
        ))}
      </div>
    </div>
  );
};

export default DogGallery;
