import React from "react";

import styles from "./QuestionView.module.scss";

import Radio from "../../components/Radio/Radio";
import Button from "../../components/Button/Button";
import StatusBar from "../../components/StatusBar/StatusBar";

import { ReactComponent as ForwardIcon } from "../../assets/icons/forward.svg";

//TODO: Add pickaxe lifebelt, progressbar next button

class QuestionView extends React.Component {
  state = {
    progress: 33,
    level: 0,
    selectedOption: null,
    answears: [],
  };

  changeSelection = (e) =>
    this.setState({
      selectedOption: parseInt(e.target.value),
    });

  handleNext = (e) => {
    const currentAnswear = {
      id: this.props.questions[this.state.level].id,
      answear: this.state.selectedOption,
      isCorrect:
        this.props.questions[this.state.level].correct ===
        this.state.selectedOption
          ? true
          : false,
    };
    if (this.state.level === 2) {
      console.log(this.state.answears);
      this.props.exitFn(this.state.answears.concat([currentAnswear]));
      return;
    }
    this.setState((prevState) => ({
      level: prevState.level + 1,
      progress: ((prevState.level + 2) / 3) * 100,
      answears: prevState.answears.concat([currentAnswear]),
    }));
  };

  render() {
    const { level } = this.state;
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
          className={styles.answearWrapper}
          onChange={this.changeSelection}
        >
          {questions[level].answears.map((el, i) => (
            <Radio key={i} name="answear" value={i}>
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
      </div>
    );
  }
}

export default QuestionView;
