import "./Home.css";
import React, { useState, useEffect } from "react";

const slideshowImages = [
  "home2.JPG",
  "home3.JPG",
  "home4.JPG",
  "home5.JPG",
  "home6.JPG",
  "home7.JPG",
  "about-us-1.png",
];

const Home = () => {
 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const handleSlideshow = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % slideshowImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleSlideshow, 2000); // 2 seconds
    return () => clearInterval(interval); 
  }, []);
  return (
    <div className="home-container">
      <div className="home-left-box">
       
        <img
          className="slideshow-image"
          alt=""
          src={slideshowImages[currentImageIndex]}
        />
      </div>
      <img
        className="home-logo-1"
        alt=""
        src="/shroomiezamanitaonobg-3@2x.png"
      />
      <div className="home-written-area">
        <p className="para">{`Shroomiez is a collection of 660 meticulously hand-drawn NFTs that exist on the Ethereum blockchain. Stepping into the vibrant Shroomieverse means immersing oneself in a metaverse of untapped utility and value, providing opportunities for prosperity through DeFi and NFTs.

Just as each Shroomie is unique in its design, the experiences and opportunities it offers are singularly remarkable. 
As a Shroomie holder, you become a part of an influential decentralized community that is 
set to shape the future of the digital realm.
  `}</p>
        <a className="open-icon-door" href="/about-us" />
      </div>
    </div>
  );
};

export default Home;
