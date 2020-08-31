import React from "react";

import styles from "./Button.module.scss";

const Button = ({ children, onClick, ...props }) => (
  <button className={styles.primary} onClick={onClick} {...props}>
    {children}
  </button>
);

export default Button;
