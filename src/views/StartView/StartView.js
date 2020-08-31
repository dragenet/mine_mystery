import React from "react";
import shortid from "shortid";

import styles from "./StartView.module.scss";

import Button from "../../components/Button/Button";

class StartView extends React.Component {
  state = {
    content: 0,
  };

  startClick = () => {
    if (this.state.content === 0) {
      this.setState({
        content: 1,
      });
    } else {
      this.props.exitFn();
    }
  };

  getId = () => {
    const id = shortid.generate();
    console.log(id);
    return id;
  };

  render() {
    return (
      <div className={styles.wrapper} key={this.getId()}>
        <>
          <p className={styles.paragraph}>
            {this.state.content === 0
              ? "Witaj, Jestem złym górnikiem i pogrzebię Cię żywcem w tej kopalni."
              : "Dodatkowo daję Ci jedną dodatkową pomoc..."}
          </p>
          <p className={styles.paragraph}>
            {this.state.content === 0
              ? "Dam Ci jednak szansę uratowania życia."
              : "..kilof."}
          </p>
          <p className={styles.paragraph}>
            {this.state.content === 0
              ? "Odpowiedz na 3 moje zagadki, a pozwolę Ci odejść."
              : "Możesz go wykorzystać w dowolnym momencie by zmusić mnie bym podał Ci 1 lub 2 blędne odpowiedzi"}
          </p>

          <div className={styles.buttonWrapper}>
            <Button onClick={this.startClick}>
              {this.state.content === 0 ? "Zaczynamy!" : "Dzięki!"}
            </Button>
          </div>
        </>
      </div>
    );
  }
}

export default StartView;
