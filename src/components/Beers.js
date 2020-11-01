import React from 'react';
import { Link } from 'react-router-dom';
import NaviBar from './NaviBar'

export default function Beers(props) {
  //props.beers = [{}, {}, {}]
  // let {singleBeer} = props

  return (
    <div>
    <NaviBar/>
    <section id="beer-container">
    

      {/* {console.log('props.singleBeer is: ', props.singleBeer)} */}

      {
          props.singleBeer.map((beer) => {
        return (
            <div className="beer-box" /*style={{ width: '28rem' }}*/>
              <Link to={`/beers/${beer._id}`}>
                <img style={{ height: '150px', width: '50px'}} className="beer-pic" src={beer.image_url} alt="beerpic"/>
                <div className="card-body">
                  <h2 className="beer-title" key={beer._id}>{beer.name}</h2>
                  <h3 class="tag-line">{beer.tagline}</h3>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </Link>
            </div>
        );
      })
      }
    </section>
    </div>
  );
}
