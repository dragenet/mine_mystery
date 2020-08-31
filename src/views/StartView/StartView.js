import React from "react";

import styles from "./StartView.module.scss";

class StartView extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <p className={styles.paragraph}>
          Witaj, Jestem złym górnikiem i pogrzebię Cię żywcem w tej kopalni.
        </p>
        <p className={styles.paragraph}>
          Dam Ci jednak szansę uratowania życia.
        </p>
        <p className={styles.paragraph}>
          Odpowiedz na 3 moje zagadki, a pozwolę Ci odejść.
        </p>
      </div>
    );
  }
}

export default StartView;
