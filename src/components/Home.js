import React from 'react'
import { Link } from 'react-router-dom'
import beerImg from './../assets/beers.png'
import randomBeerImg from './../assets/random-beer.png'
import newBeerImg from './../assets/new-beer.png'

const Home = () => {
  return (
    <>
        <Link to={`/beers`}>
        <div className="card" style={{width : "100rem"}}>
  <img src={beerImg} className="card-img-top" alt="all-beer"/>
  <div className="card-body">
    <h5 className="card-title">All Beers</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat elementum magna, in gravida odio dictum et. In laoreet pretium arcu, at finibus lectus. Aenean venenatis lobortis maximus. Duis quis enim id sapien eleifend varius. Suspendisse accumsan volutpat urna id maximus</p>
    {/* <Link to="/beers" className="btn btn-primary">All Beers</Link> */}
  </div>
</div>
</Link>
<Link to={`/Randombeers`}>
        <div className="card" style={{width : "100rem"}}>
  <img src={randomBeerImg} className="card-img-top" alt="all-beer"/>
  <div className="card-body">
    <h5 className="card-title">Random Beer</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat elementum magna, in gravida odio dictum et. In laoreet pretium arcu, at finibus lectus. Aenean venenatis lobortis maximus. Duis quis enim id sapien eleifend varius. Suspendisse accumsan volutpat urna id maximus</p>
  </div>
</div>
</Link>
<Link to={`/CreateNewBeer`}>
        <div className="card" style={{width : "100rem"}}>
  <img src={newBeerImg} className="card-img-top" alt="all-beer"/>
  <div className="card-body">
    <h5 className="card-title">Create New Beer</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat elementum magna, in gravida odio dictum et. In laoreet pretium arcu, at finibus lectus. Aenean venenatis lobortis maximus. Duis quis enim id sapien eleifend varius. Suspendisse accumsan volutpat urna id maximus</p>
  </div>
</div>
</Link>
     </>
  );
}

export default Home;