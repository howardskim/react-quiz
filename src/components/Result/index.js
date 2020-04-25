import React, { Component } from 'react'
import { Button } from "@material-ui/core/";

export default class Result extends Component {
    render() {
        return (
          <div className="result-score-area">
            <div className="score">
              <h3>Score</h3>
              <div>{this.props.numberOfCorrectAnswers}</div>
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.props.handleReset}
              >
                Try Again
              </Button>
            </div>
          </div>
        );
    }
}
