import React from "react";

import styles from "./Button.module.scss";

const Button = ({ children, onClick, round }) => {
  const buttonClas = round ? styles.round : styles.primary;
  return (
    <button className={buttonClas} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
