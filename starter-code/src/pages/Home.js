import React, { Component } from 'react';
 import Card from '../components/Card';

class Home extends Component {
  state = {
    beers: [],
  };
  render() {
    return (
      <div className=" col d-flex-col align-items-center">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <Card
            title="All Beers"
            text="See the full list"
            imgSrc="https://thumbor.thedailymeal.com/86y-kZbskjitihF2e8IiRXhjeAk=//https://www.thedailymeal.com/sites/default/files/2019/12/27/iStock-854848732.jpg"
            route="/beers"
          />
        </div>
        <div className=" align-self-center col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <Card
            title="Random Beer"
            text="Get a random Beer"
            imgSrc="https://image.freepik.com/foto-gratis/verter-cerveza-espuma-burbuja-vidrio-fondo_53089-87.jpg"
            route="/random-beer"
          />
        </div>
        <div className=" align-self-center col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <Card
            title="Add Beer"
            text="Register a new beer"
            imgSrc="https://pngimage.net/wp-content/uploads/2018/05/add-logo-png-8.png"
            route="/new-beer"
          />
        </div>
      </div>
    );
  }
}

export default Home;