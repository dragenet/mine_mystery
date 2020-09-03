import React from "react";

import styles from "./Footer.module.scss";

const Footer = ({children, href}) => (
  <div className={styles.wrapper}>
    <a
      className={styles.githubLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </div>
);

export default Footer;
