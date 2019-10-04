import React, { Component } from 'react'
import "./Message.css"

export default class Message extends Component {
  render() {
    return (
      <div className="message">
        <h2 className="message-title">{this.props.title}</h2>
        <div className="message-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
