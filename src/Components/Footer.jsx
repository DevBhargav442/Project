// Footer.js
import React from "react";

const Footer = () => {
  const styles = {
    footerContainer: {
      backgroundColor: "#282c36",
      color: "#fff",
      padding: "20px",
      textAlign: "center",
      position: "fixed",
      bottom: 0,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: "30px",
      marginRight: "10px",
    },
  };

  return (
    <div style={styles.footerContainer}>
      <img
        src="https://www.oneindia.com/img/2017/07/swiggy-19-1500443913.jpg"
        alt="Swiggy Logo"
        style={styles.logo}
      />
      <p>&copy; 2023 Swiggy. All rights reserved.</p>
    </div>
  );
};

export default Footer;
