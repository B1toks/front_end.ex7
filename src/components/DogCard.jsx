import React from "react";
import "./DogCard.css";

const DogCard = ({ imageUrl }) => {
  return (
    <div className="dog-card">
      <img src={imageUrl} alt="A cute dog" />
    </div>
  );
};

export default DogCard;
