import React from "react";

import styles from "./Root.module.scss";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import StartView from "../StartView/StartView";
import QuestionView from "../QuestionView/QuestionView";

const pages = {
  startPage: "startPage",
  questionPage: "questionPage",
  resultPage: "resultPage",
};

class Root extends React.Component {
  state = {
    currentPage: pages.questionPage,
  };

  nextPage = () => {
    this.setState((prevState) => {
      const newState =
        prevState.currentPage === pages.startPage
          ? pages.questionPage
          : pages.resultPage;
      return {
        currentPage: newState,
      };
    });
  };

  render() {
    return (
      <>
        <NavBar />
        <div className={styles.content}>
          {this.state.currentPage === pages.startPage ? (
            <StartView exitFn={this.nextPage} />
          ) : this.state.currentPage === pages.questionPage ? (
            <QuestionView />
          ) : (
            <h2>Result Page</h2>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Root;
