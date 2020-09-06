import React from "react";
import axios from "axios";

import styles from "./Root.module.scss";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import StartView from "../StartView/StartView";
import QuestionView from "../QuestionView/QuestionView";
import ResultView from "../ResultView/ResultView";

const pages = {
  startPage: "startPage",
  questionPage: "questionPage",
  resultPage: "resultPage",
};

class Root extends React.Component {
  state = {
    currentPage: pages.startPage,
    questions: null,
    result: null,
  };

  componentDidMount() {
    axios
      .get("https://us-central1-mine-mystery.cloudfunctions.net/getRandom")
      .then((res) => {
        this.setState({
          questions: res.data,
        });
      });
  }

  nextPage = (result) => {
    this.setState((prevState) => {
      const newState =
        prevState.currentPage === pages.startPage
          ? pages.questionPage
          : pages.resultPage;
      return {
        currentPage: newState,
        result: result,
      };
    });
  };

  startAgain = () => {
    this.setState({
      currentPage: pages.startPage,
    });
  };

  render() {
    return (
      <>
        <NavBar name="Mine Mystery" logoHref="/" />
        <div className={styles.content}>
          {this.state.currentPage === pages.startPage ? (
            <StartView exitFn={this.nextPage} />
          ) : this.state.currentPage === pages.questionPage ? (
            <QuestionView
              questions={this.state.questions}
              exitFn={this.nextPage}
            />
          ) : (
            <ResultView
              result={this.state.result}
              startAgainFn={this.startAgain}
            />
          )}
        </div>
        <Footer href="https://github.com/dragenet/mine_mystery">
          View source on Github
        </Footer>
      </>
    );
  }
}

export default Root;
