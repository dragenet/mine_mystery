import React from "react";

import styles from "./QuestionView.module.scss";

import Radio from "../../components/Radio/Radio";

//TODO: Add pickaxe lifebelt and progressbar

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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
          corrupti. Rem atque veniam recusandae explicabo ipsa omnis sunt rerum,
          ea, suscipit minima voluptatum. Sunt veritatis pariatur, itaque fuga
          alias ut!
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
      </div>
    );
  }
}

export default QuestionView;
