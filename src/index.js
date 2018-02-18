import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

import QuestionList from './components/QuestionList';
import QuestionListModel from './models/QuestionListModel';
import QuestionModel from './models/QuestionModel';
import Questions from './initializers/Questions';

const store = new QuestionListModel();

render(
  <div>
    <App store={store} />
  </div>,
  document.querySelector('.root-pageview')
);

Questions.forEach((question) => store.addQuestion(question));
