import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.wrapper}>
    <a
      className={styles.githubLink}
      href="https://github.com/dragenet"
      target="_blank"
      rel="noopener noreferrer"
    >
      View source on Github
    </a>
  </div>
);

export default Footer;
