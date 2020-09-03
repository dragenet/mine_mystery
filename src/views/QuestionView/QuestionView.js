import React from "react";

import styles from "./QuestionView.module.scss";

import Radio from "../../components/Radio/Radio";
import Button from "../../components/Button/Button";

import { ReactComponent as ForwardIcon } from "../../assets/icons/forward.svg";

//TODO: Add pickaxe lifebelt, progressbar next button

class QuestionView extends React.Component {
  changeSelection = (e) => console.log(e.target.value);

  render() {
    return (
      <div className={styles.wrapper}>
        <img
          className={styles.questionImage}
          src="https://source.unsplash.com/random/700x400"
          alt="mystery"
        />
        <div className={styles.questionText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div className={styles.answearWrapper} onChange={this.changeSelection}>
          <Radio name="answear" value="A">
            Opcja A
          </Radio>
          <Radio name="answear" value="B">
            Opcja B
          </Radio>
          <Radio name="answear" value="C">
            Opcja C
          </Radio>
          <Radio name="answear" value="D">
            Opcja D
          </Radio>
        </div>
        <div className={styles.buttonWrapper}>
          <Button round>
            {/* <img src={forwardIcon} /> */}
            <ForwardIcon />
          </Button>
        </div>
      </div>
    );
  }
}

export default QuestionView;
