import React, { Component } from 'react';
import Intro from '../src/components/Intro';
import QuestionArea from "../src/components/QuestionArea";
import Result from "../src/components/Result";

import data from './data';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: data,
      selected: 1,
      questionNumber: 0,
      numberOfCorrectAnswers: 0
    }
  };
  handleStartClick = () => {
    this.setState({selected: 2})
  }
  handleRender = () => {
    let { selected, questions, questionNumber, numberOfCorrectAnswers } = this.state;
    switch(selected){
      case 1:
        return <Intro handleStartClick={this.handleStartClick} />;
      case 2:
        return (
          <QuestionArea
            handleChoiceClick={this.handleChoiceClick}
            question={questions[questionNumber]}
          />
        );
      case 3:
        return <Result handleReset={this.handleReset} numberOfCorrectAnswers={numberOfCorrectAnswers * 10} />;
    }
  }
  handleChoiceClick = (boolean) => {
    if(boolean === "true"){
      this.setState({
        numberOfCorrectAnswers: this.state.numberOfCorrectAnswers + 1
      });
    }
    if(this.state.questionNumber === this.state.questions.length - 1){
      this.setState({
        selected: 3
      });
      return;
    }
    this.setState({
      questionNumber: this.state.questionNumber + 1
    })
  }
  handleReset = () => {
    this.setState({
      selected: 1,
      questionNumber: 0,
      numberOfCorrectAnswers: 0,
    });
  }
  render(){
    let { numberOfCorrectAnswers, questionNumber, selected } = this.state;
    return (
      <React.Fragment>
        {selected !== 1 && selected !== 3 ? (
        <div className="score-area">
          <div className="question-number">
            <h3>Question</h3>
            <div>{questionNumber + 1}</div>
          </div>
          <div className="score">
            <h3>Score</h3>
            <div>{numberOfCorrectAnswers * 10}</div>
          </div>
        </div>
        ): ''}
        {this.handleRender()}
      </React.Fragment>
    );
  }
}

export default App;
