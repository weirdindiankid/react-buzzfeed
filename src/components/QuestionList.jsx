import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Question from "./Question";
import Result from "./Result.jsx";

@observer
class QuestionList extends React.Component {

  render() {
    return (
      <div className={"question-container" + this.props.store.quizStatusCSS}>
        {this.props.store.questions.map(question => (
          <Question store={this.props.store} question={question} key={question.id} />
        ))}
      </div>
    );
  }
}

export default QuestionList;
