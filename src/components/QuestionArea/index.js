import React, { Component } from 'react'
import AnswerChoice from '../AnswerChoice';

export default class QuestionArea extends Component {
    render() {
        if(!this.props.question) return null;
        let { question, handleChoiceClick, canClick } = this.props;
        let { answers } = question;
        return (
          <div className="question-area">
            <div>
              <h3>{question.question}</h3>
            </div>
            <div>
              {answers.map((object) => {
                return (
                  <AnswerChoice
                    key={object.key}
                    handleChoiceClick={handleChoiceClick}
                    choice={object}
                    canClick={canClick}
                  />
                );
              })}
            </div>
          </div>
        );
    }
}
