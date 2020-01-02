import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    if (this.props.score === undefined){
    return (
      <tr className="RuleRow RuleRow-active" onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
    }
    else {
      return (
      <tr className="RuleRow RuleRow-active">
      <td className="RuleRow-name">{this.props.name}</td>
      <td className="RuleRow-score">{this.props.score}</td>
    </tr>
      )
    }
  }
}

export default RuleRow;