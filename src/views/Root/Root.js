import React from "react";

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
    currentPage: pages.questionPage,
    questions: [
      {
        id: "0",
        question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image: "https://source.unsplash.com/random/700x400",
        answears: [
          "Lorem ipsum",
          "dolor sit amet",
          "adipisicing elit",
          "Suscipit maiores",
        ],
        correct: 0,
      },
      {
        id: "1",
        question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        answears: ["Lorem ipsum", "dolor sit amet", "adipisicing elit"],
        correct: 0,
      },
      {
        id: "2",
        question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image: "https://source.unsplash.com/random/700x400",
        answears: [
          "Lorem ipsum",
          "dolor sit amet",
          "adipisicing elit",
          "Suscipit maiores",
        ],
        correct: 0,
      },
    ],
    result: null,
  };

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
        <NavBar />
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
        <Footer />
      </>
    );
  }
}

export default Root;
