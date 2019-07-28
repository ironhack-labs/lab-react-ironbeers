import React from 'react';

export default class BeerComp extends React.Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
      <div>
      <img src={this.props.image_url}/>
      <h4>{this.props.name}</h4>
      <p>{this.props.description}</p>
      </div>
    )
  }
}