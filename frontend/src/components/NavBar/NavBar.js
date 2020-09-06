import React from "react";

import styles from "./NavBar.module.scss";

import logo from "../../assets/icons/mine-wagon.svg";

const NavBar = ({name, logoHref}) => (
  <a href={logoHref} className={styles.wrapper}>
    <img className={styles.logoImage} src={logo} alt="mine wagon" />
    <h1 className={styles.name}>{name}</h1>
  </a>
);

export default NavBar;
