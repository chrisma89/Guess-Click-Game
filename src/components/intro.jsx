import React from "react";

// fucntional component for dispaly of the intro for the game
const Intro = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-item-center intro">
      <h2>Guess-Click-Game</h2>
      <h4>
        Click on an image to earn points, but don't click on it more than once!
      </h4>
    </div>
  );
};

export default Intro;
