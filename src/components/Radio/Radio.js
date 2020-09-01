import React from "react";

import shortid from "shortid";

import styles from "./Radio.module.scss";

const Radio = ({ children, name, value }) => {
  const id = shortid.generate();
  return (
    <div>
      <input id={id} type="radio" name={name} value={value} />
      <label htmlFor={id} className={styles.radio}>
        {children}
      </label>
    </div>
  );
};

export default Radio;
