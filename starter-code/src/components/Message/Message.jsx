import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <div className="message">
        <h2 className="message-title">{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}
