import React, { Component } from 'react';
import './options.css'

class Option extends Component{

  handle(arg){
    //arg dice a que componente llamar
    ///navegar a tu otro componente
  }

  render(){
    return (
      <div onClick={()=>this.handle(this.props.title)} className="option">
        <div >

          <div >
            <div className="container">
                <img className="beer-img-top" src={this.props.img} alt="Beer card"/>
            </div>
          </div>
          <div >
            <div className="container">
              <h3>{this.props.title}</h3>
            </div>
          </div>
            <p>{this.props.text}</p>
        </div>
      </div>

    )
  }

}


export default  Option;
