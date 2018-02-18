import React, { Component } from 'react';
import { observer } from 'mobx-react';

import QuestionList from './QuestionList';
import Result from './Result.jsx';

@observer
export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="site-title">
          <span className="title-links">
            <a href="/">React BuzzFeed</a>
          </span>
        </h1>
        <h2 className="site-title-dark">
          <span className="title-link-dark">
            Pick Some Random Stock Images And We'll Guess Your Age And Star Sign.
          </span>
        </h2>
        <QuestionList store={this.props.store} /><br/>
        <div>
          {this.props.store.isQuizComplete ?
            <Result store={this.props.store} score={this.props.store.points} />
             : ""}
        </div>
      </div>
    );
  }
}
