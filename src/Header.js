import React from "react";
// import logo from "./left.png"; // Adjust the path based on your folder structure
import styles from "./Header.module.css"; // Import the CSS module

function Header({ title }) {
  return (
    <header className={styles.header}>
      {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
}

export default Header;
