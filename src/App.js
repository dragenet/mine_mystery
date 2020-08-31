import React from "react";

import styles from "./App.module.scss";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <NavBar />
        <div className={styles.content}>
          <h1>Hello world</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
