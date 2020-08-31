import React from "react";

import styles from "./Root.module.scss";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import StartView from "../StartView/StartView";

const pages = {
  startPage: "startPage",
  questionPage: "questionPage",
  resultPage: "resultPage",
};

class Root extends React.Component {
  state = {
    currentPage: pages.startPage,
  };

  render() {
    return (
      <>
        <NavBar />
        <div className={styles.content}>
          <StartView />
        </div>
        <Footer />
      </>
    );
  }
}

export default Root;
