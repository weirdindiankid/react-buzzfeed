import { observable, computed, action } from "mobx";

import QuestionModel from "./QuestionModel";

export default class QuestionListModel {
  @observable questions = [];
  points = 0;
  complete = false;

  @computed
  get unansweredQuestions() {
    return this.questions.filter(question => !question.chosen).length;
  }

  @computed
  get numberOfQuestions() {
    return this.questions.length;
  }

  @computed
  get isQuizComplete() {
    return (this.numberOfQuestions > 0 &&
      this.unansweredQuestions == 0);
  }

  @computed
  get quizStatusCSS() {
    if(this.isQuizComplete) {
      return " ";
    }
    return " quizactive";
  }

  @action
  setQuizComplete() {
    this.complete = true;
  }

  @action
  addQuestion(question) {
    this.questions.push(new QuestionModel(question));
  }

  @action
  addPoints(points) {
    this.points += points;
  }
}
