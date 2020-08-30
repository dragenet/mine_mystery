import React from "react";

import styles from "./NavBar.module.scss";

import logo from "../../assets/icons/mine-wagon.svg";

const NavBar = () => (
  <div className={styles.wrapper}>
    <img className={styles.logoImage} src={logo} alt="mine wagon" />
    <h1 className={styles.name}>Mine Mystery</h1>
  </div>
);

export default NavBar;
