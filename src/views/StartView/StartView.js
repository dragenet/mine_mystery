import React from "react";
import shortid from "shortid";

import styles from "./StartView.module.scss";

import Button from "../../components/Button/Button";


const StartView = ({exitFn}) =>  (
      <div className={styles.wrapper} key={shortid.generate()}>
        <>
          <p className={styles.paragraph}>
            Witaj, Jestem złym górnikiem i pogrzebię Cię żywcem w tej kopalni.
          </p>
          <p className={styles.paragraph}>
            Dam Ci jednak szansę uratowania życia.
          </p>
          <p className={styles.paragraph}>
            Odpowiedz na 3 moje zagadki, a pozwolę Ci odejść.
          </p>

          <div className={styles.buttonWrapper}>
            <Button onClick={exitFn}>
              Zaczynamy!
            </Button>
          </div>
        </>
      </div>
    );
  


export default StartView;
