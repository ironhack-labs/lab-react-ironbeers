import React, {Component} from 'react';
import './beerlist.css'
import { Link } from 'react-router-dom';



class BeerList extends Component {







  showBeers = () => {
    return this.props.allTheBeers.map((eachB) => {

      return <div key={eachB._id} className='each-beer'>
              <img src={eachB.image_url} alt='beerpic'></img>
              <div className='beer-desc'>
                <Link to={`/${eachB._id}`} className='homelink'>
                  <h1>{eachB.name}</h1>
                </Link>
                <h4>{eachB.tagline}</h4>
                <p>{eachB.description}</p>
              </div>
            </div>
    })
  }

  render(){
    // console.log(this.props.allTheBeers)
    return(
      <div>
        {this.showBeers()}
      </div>
    )
  }



}



export default BeerList;