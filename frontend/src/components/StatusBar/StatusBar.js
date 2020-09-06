import React from "react";

import styles from "./StatusBar.module.scss";

const StatusBar = ({ status }) => (
  <div className={styles.wrapper}>
    <div className={styles.path}></div>
    <div className={styles.status} style={{ width: status + "%" }}></div>
  </div>
);

export default StatusBar;
