import { Card } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

const pic = {
  width: "100%",
}

const Home = () => {
  return (
    <div className="container justify-content-center text-center" style={{paddingTop: 60}}>
      <Link to="/beers">
        <Card>
          <div>
            <img style={pic} src="/images/beers.png" alt="See al beers" />
            <h6 className="mt-3">Checkout the beers</h6>
          </div>
        </Card>
      </Link>
      <Link to="/random-beer" >
        <Card style={{marginTop: 10}}>
          <div>
            <img style={pic} src="/images/random-beer.png" alt="Random beer" />
            <h6 className="mt-2">Get a random beer</h6>
          </div>
        </Card>
      </Link>
      <Link to="/new-beer">
        <Card style={{marginTop: 10}}>
          <div>
            <img  style={pic} src="/images/new-beer.png" alt="Create a beer" />
            <h6 className="mt-2">Create your beer</h6>
          </div>
        </Card>
      </Link>
    </div>
  )
}

export default Home
