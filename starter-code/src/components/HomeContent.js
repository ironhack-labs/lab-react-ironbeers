import React, { Component } from 'react';


class HomeContent extends Component {
  render() {
    const {imgUrl, title, text} = this.props;
    return (
      <div>
        <div>
            <img src={imgUrl} alt={title}/>
        </div> 
        <h2>{title}</h2>
        <div>{text}</div>
      </div>
    );
  }
}

export default HomeContent;