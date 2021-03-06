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
      numberOfCorrectAnswers: 0,
      canClick: true
    }
  };
  handleStartClick = () => {
    this.setState({selected: 2})
  }
  handleRender = () => {
    let { selected, questions, questionNumber, numberOfCorrectAnswers, canClick } = this.state;
    switch(selected){
      case 1:
        return <Intro handleStartClick={this.handleStartClick} />;
      case 2:
        return (
          <QuestionArea
            handleChoiceClick={this.handleChoiceClick}
            question={questions[questionNumber]}
            canClick={canClick}
          />
        );
      case 3:
        return <Result handleReset={this.handleReset} numberOfCorrectAnswers={numberOfCorrectAnswers * 10} />;
    }
  }
  handleChoiceClick = (boolean) => {
    let { canClick } = this.state;
    if(!canClick) return;
    if(boolean === "false"){
      this.setState({
        canClick: false
      })
      setTimeout(() => {
        this.setState({
          canClick: true,
          questionNumber: this.state.questionNumber + 1,
        });
      }, 2500)
    } else {
      if(boolean === "true" && canClick){
        this.setState({
          numberOfCorrectAnswers: this.state.numberOfCorrectAnswers + 1,
          questionNumber: this.state.questionNumber + 1,
        });
      }
    }
    if(this.state.questionNumber === this.state.questions.length - 1){
      this.setState({
        selected: 3
      });
      return;
    }
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
