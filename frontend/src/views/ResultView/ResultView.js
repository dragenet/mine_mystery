import React from "react";
import shortid from "shortid";

import styles from "./ResultView.module.scss";

import Button from "../../components/Button/Button";

const getId = () => {
  const id = shortid.generate();
  console.log(id);
  return id;
};

const ResultView = ({ startAgainFn, result }) => {
  const isPassed = result.reduce((prev, curr) => prev && curr.isCorrect, true);
  return (
    <div className={styles.wrapper} key={getId()}>
      {isPassed ? (
        <>
          <p className={styles.paragraph}>Wygrałeś,</p>
          <p className={styles.paragraph}>możesz odejść.</p>
        </>
      ) : (
        <>
          <p className={styles.paragraph}>Przegrałeś,</p>
          <p className={styles.paragraph}>zostaniesz tu na wieki!</p>
        </>
      )}

      <div className={styles.buttonWrapper}>
        <Button onClick={startAgainFn}>Spróbuj jeszcze raz!</Button>
      </div>
    </div>
  );
};

export default ResultView;
