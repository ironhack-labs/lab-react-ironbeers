import React, { Component } from "react";

class Beers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
    .then(res => res.json())
    .then(json =>  {
       this.setState({
         isLoaded: true,
         items: json,
       })
    });
  }

  render() {
     let { isLoaded, items } = this.state;

     if(!isLoaded) {
       return <div>Loading..</div>;
     }
     else {

      return (
        <div>
          <ul>
           {items.map(item => (
             <li key= {item._id}>
              Image {item.image_url} 
              | Name {item.name} 
              | Tagline {item.tagline} 
              | Contributed {item.food_pairing.contributed_by}
             </li>
           ))};
         </ul>
       <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div className="uk-card-media-left uk-cover-container">
               <img src="" alt="" uk-cover/>
               <canvas width="600" height="400"></canvas>
            </div>
            <div>
              <div className="uk-card-body">
                <Link className="uk-text-primary uk-card-title" to="/:id">Beer title</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
             </div>
           </div>
       </div>
    </div>
    )
  }
}

export default Beers;