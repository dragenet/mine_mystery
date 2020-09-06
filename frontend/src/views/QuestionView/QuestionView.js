import React from "react";

import styles from "./QuestionView.module.scss";

import Radio from "../../components/Radio/Radio";
import Button from "../../components/Button/Button";
import StatusBar from "../../components/StatusBar/StatusBar";
import Modal from "../../components/Modal/Modal";

import { ReactComponent as ForwardIcon } from "../../assets/icons/forward.svg";

//TODO: Add pickaxe lifebelt, progressbar next button

class QuestionView extends React.Component {
  state = {
    progress: 33,
    level: 0,
    selectedOption: null,
    answers: [],
    isModalOpen: false,
  };

  changeSelection = (e) =>
    this.setState({
      selectedOption: parseInt(e.target.value),
    });

  handleNext = (e) => {
    if (this.state.selectedOption === null) {
      this.setState({
        isModalOpen: true,
      });
      return;
    }
    const currentAnswer = {
      id: this.props.questions[this.state.level].id,
      answer: this.state.selectedOption,
      isCorrect:
        this.props.questions[this.state.level].correct ===
        this.state.selectedOption
          ? true
          : false,
    };
    if (this.state.level === 2) {
      console.log(this.state.answers);
      this.props.exitFn(this.state.answers.concat([currentAnswer]));
      return;
    }
    this.setState((prevState) => ({
      level: prevState.level + 1,
      progress: ((prevState.level + 2) / 3) * 100,
      answers: prevState.answers.concat([currentAnswer]),
      selectedOption: null,
    }));
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { level, isModalOpen } = this.state;
    const { questions } = this.props;

    return (
      <div className={styles.wrapper}>
        {questions[level].image ? (
          <img
            className={styles.questionImage}
            src={questions[level].image}
            alt="mystery"
          />
        ) : null}

        <div className={styles.questionText}>{questions[level].question}</div>
        <div
          key={questions[level].id}
          className={styles.answerWrapper}
          onChange={this.changeSelection}
        >
          {questions[level].answers.map((el, i) => (
            <Radio key={i} name="answer" value={i}>
              {el}
            </Radio>
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Button round onClick={this.handleNext}>
            {/* <img src={forwardIcon} /> */}
            <ForwardIcon />
          </Button>
        </div>
        <div className={styles.statusWrapper}>
          <StatusBar status={this.state.progress} />
        </div>
        {isModalOpen && (
          <Modal close={this.closeModal}>Musisz wybrać odpowiedż!</Modal>
        )}
      </div>
    );
  }
}

export default QuestionView;
