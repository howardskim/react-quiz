import React, { Component } from 'react'
import { Card } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class AnswerChoice extends Component {
    render() {
        let { choice, handleChoiceClick } = this.props;
        return (
          <Card onClick={() => handleChoiceClick(choice.correct)} className="choice-card">
            <CardContent>
              <Typography>{choice.value}</Typography>
            </CardContent>
          </Card>
        );
    }
}
