import React from 'react';
import './List.css';




export default class List extends React.Component {
  constructor(props){
    super(props)
  }


render(){


  return (
    <div className="theBeers">

<img className="images" src={this.props.image_url} />
<h4>{this.props.name}</h4>
<p>{this.props.description}</p>


    </div>
  );
}

  }
