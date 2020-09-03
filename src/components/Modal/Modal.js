import React from "react";

import styles from "./Modal.module.scss";

import Button from "../Button/Button";

const Modal = ({ children, close }) => (
  <div className={styles.wrapper}>
    <div className={styles.text}>{children}</div>
    <Button onClick={close}>Ok</Button>
  </div>
);

export default Modal;
