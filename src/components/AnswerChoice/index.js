import React, { Component } from 'react'
import { Card } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class AnswerChoice extends Component {
    render() {
      console.log(this.props)
        let { choice, handleChoiceClick, canClick } = this.props;
        let bg;
        if(!canClick && choice.correct == "false"){
          bg = 'red'
        } else if (!canClick && choice.correct == "true"){
          bg = 'yellow'
        } else {
          bg = ''
        }
        console.log('bg ', bg)
        return (
          <Card onClick={() => handleChoiceClick(choice.correct)} className={`${bg} choice-card`}>
            <CardContent>
              <Typography>{choice.value}</Typography>
            </CardContent>
          </Card>
        );
    }
}
