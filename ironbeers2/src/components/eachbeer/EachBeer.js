import React, {Component} from 'react';
import "./eachbeer.css"



class EachBeer extends Component{

  render(){
    let allBeers = this.props.allTheBeers;
    let theID = this.props.match.params.id;

    const theActualBeer = allBeers.find((thebeer)=>{
      return thebeer._id === theID
    })


    // console.log(theActualBeer)


    if(this.props.ready)
    return(
      <div className='each-beer'>
        <img src={theActualBeer.image_url} alt='beerpic'></img>
        <div className='line'>
          <h1>{theActualBeer.name}</h1>
          <h1>{theActualBeer.attenuation_level}</h1>
        </div>
        <div className='line'>
          <h4 className='prop'>{theActualBeer.tagline}</h4>
          <h5>{theActualBeer.first_brewed}</h5>
        </div>
        <p>{theActualBeer.description}</p>
        <p>{theActualBeer.contributed_by}</p>
      </div>


    ) 
    else 
    return(<h1>loading</h1>)
  }


}

export default EachBeer;