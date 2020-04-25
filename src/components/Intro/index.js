import React, { Component } from 'react'
// import Button from "@material-ui/core/Button";
import {Button} from "@material-ui/core/";

export default class Intro extends Component {
    render() {
        return (
          <div className="start-container">
            <h1>React Quiz</h1>
            <div>
              Answer these 10 basic react questions with 10 points each.
            </div>
            <div>
              <Button onClick={this.props.handleStartClick} variant="contained" color="primary">
                Start
              </Button>
            </div>
          </div>
        );
    }
}
