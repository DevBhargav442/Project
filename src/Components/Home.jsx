// Home.js

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Home.css";

const Home = () => {
  const cardStyle = {
    width: "300px",
    height: "200px",
    margin: "10px",
    objectFit: "cover",
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="background-image-container">
        <div className="scrolling-container">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/d044fe1e896e1d6bcc8d91175352c707"
            alt="offers"
            style={cardStyle}
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_506/rng/md/carousel/production/ea4857fd3ad8869418dfa14a92e7a4fd"
            alt=""
            style={cardStyle}
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_505/rng/md/carousel/production/2b9401fca1d171746b89dffcd392df3c"
            alt=""
            style={cardStyle}
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_507/rng/md/carousel/production/2b9401fca1d171746b89dffcd392df3c"
            alt=""
            style={cardStyle}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
