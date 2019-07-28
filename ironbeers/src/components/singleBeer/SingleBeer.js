import React from 'react';
import axios from 'axios';


export default class SingleBeer extends React.Component {
    constructor(props){
        super(props)
      }


    render() {
        console.log(this.props.beer)

const ID = this.props.match.params.idOfBeer; 

let beerList = this.props.Singles;

const acutalBeer = beerList.find((Single)=>{
    
    return Single._id === ID

})

if(this.props.ready)

      return (

  
        <div>

          {acutalBeer.name}



  
              
        </div>
  
      );
      else

      return (
          <div> You Suck</div>
      );
    }
  }