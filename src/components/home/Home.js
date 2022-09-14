import Beers from '../../assets/beers.png'
import RandomBeer from '../../assets/random-beer.png'
import NewBeer from '../../assets/new-beer.png'

import './Home.css'

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Link to={'/beers'}>
        <div className="card">
          <img src={Beers} className="card-img-top" alt="All beers" />
          <div className="card-body">
            <h5 className="card-title">All beers</h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </Link>
      <Link to={'/random-beer'}>
        <div className="card">
          <img src={RandomBeer} className="card-img-top" alt="All beers" />
          <div className="card-body">
            <h5 className="card-title">Random beers</h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </Link>
      <Link to={'/new-beer'}>
        <div className="card">
          <img src={NewBeer} className="card-img-top" alt="All beers" />
          <div className="card-body">
            <h5 className="card-title">New beers</h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </Link>
    </div>
    
  )
}

export default Home;