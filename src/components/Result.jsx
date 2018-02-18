import React, { Component } from "react";
import { observer } from "mobx-react";
import ReactDOM from "react-dom";

@observer
class Result extends React.Component {

  estimateAge = (score) => {
    return (score % 11) + 15;
  };

  estimateZodiacSign = (score) => {
    let signHash = {
      0: "Capricorn",
      1: "Aquarius",
      2: "Pisces",
      3: "Aries",
      4: "Taurus",
      5: "Gemini",
      6: "Cancer",
      7: "Leo",
      8: "Virgo",
      9: "Libra",
      10: "Scorpio",
      11: "Sagittarius"
    };
    return signHash[score%11];
  };

  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  render() {
    this.props.store.setQuizComplete();
    return (
      <div className="result-container xs-p2" ref="results">
        <div className="result-container-item">
          <div className="selected-rapper">
            <h1>{`You got: ${this.estimateAge(this.props.score)}
              and ${this.estimateZodiacSign(this.props.score)}!`}</h1>
            <p><a href="/">Retake Quiz</a></p>
          </div>
        </div>
      </div>
    );

  }
}

export default Result;
