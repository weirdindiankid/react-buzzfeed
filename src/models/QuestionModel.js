import { observable } from "mobx";

export default class QuestionModel {
  id = Math.random();
  @observable title;
  @observable chosen = null;
  @observable options = [];

  constructor(qobject) {
    this.id =  qobject.id;
    this.title = qobject.title;
    this.options = qobject.options;
  }

}
