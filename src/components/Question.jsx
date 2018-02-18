import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Question extends React.Component {

  renderOptions() {
    const root = '/assets/images/';
    let question = this.props.question;

    return question.options.map((option) => {
      return (
        <div key={option.id} className="col-md-4">
          <div onClick={() => {this.props.store.complete? {} : question.chosen = option.id;
             this.props.store.addPoints(option.points)}}
              className={question.chosen === option.id ?
                'thumbnail chosen' : "thumbnail"}>
            <img id="option-img" src={`${root}${option.img}`} />
            <i className={question.chosen === option.id ? 'fa fa-check-square-o fa-lg' : 'fa fa-square-o fa-lg'}></i>
          </div>
        </div>
      );
    });
  }

  render() {
    let question = this.props.question;
    return(
      <div key={question.id} className="question-card">
        <h3 className="question-title">{question.title}</h3>
        <div className="row">
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}

export default Question;
