import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import './App.css';


class WelcomePage extends Component {
  render() {
    return (
        <div className="content">

          <h2>All beers</h2>
          <p><img className="img-components" src="/images/beers.png" alt="All-beers" /></p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste suscipit excepturi doloremque corrupti nesciunt, corporis exercitationem, ducimus laborum voluptatibus soluta debitis, esse voluptas rerum expedita minima dolore repellendus illum accusamus!
          <p><Link to="/beers" className="main-components">All Beers</Link></p>
          {/* <Route exact path="/beers" component={Beers} /> */}


          <h2>Random beer</h2>
          <p><img className="img-components" src="/images/random-beer.png" alt="All-beers" /></p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit sapiente architecto laboriosam unde iste neque quidem explicabo optio, odio quibusdam quaerat soluta sint aut quam ipsum ipsa inventore laudantium velit?
          <p><Link to="/random" className="main-components">Random beer</Link></p>
          {/* <Route exact path="/random" component={RandomBeer} /> */}


          <h2>Add new beer</h2>
          <p><img className="img-components" src="/images/new-beer.png" alt="All-beers" /></p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, veniam! Sequi ducimus repellat est distinctio id reprehenderit suscipit ad consequuntur nostrum nihil rerum minima, omnis expedita dignissimos provident cum facilis.
          <p><Link to="/new" className="main-components">New Beers</Link></p>
          {/* <Route exact path="/new" component={NewBeer} /> */}

          {/* <Route path="/:id" component={ShowInfoBeer} /> */}

          {/* <Switch>
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/random" component={RandomBeer} />
            <Route exact path="/new" component={NewBeer} />
          </Switch> */}
        </div>
    );
  }
}

export default WelcomePage;