import React from 'react';
import beers from '../../assets/beers.png';
import newBeer from '../../assets/new-beer.png';
import randomBeer from '../../assets/random-beer.png';
import {
  BrowserRouter as Router,  
  Link
} from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <img className="img-fluid" src={beers} alt="beers" />
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link to="/beers" >
                            <h2>All Beers</h2>
                        </Link>
                    </div>
                    <div className="col-12">
                        <h5 className="text-muted" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis nec ante non dignissim. Etiam cursus, enim ac ultrices laoreet, dolor massa convallis orci, nec blandit massa metus sed lacus. Aenean non mauris in est fringilla finibus. Vivamus diam nisi, vehicula nec turpis ac, dignissim suscipit nunc. Aenean euismod sem in odio sodales, consectetur convallis dui molestie. Mauris iaculis metus est, vel placerat nunc pellentesque eget. Mauris eu purus ut ante suscipit varius eu nec tortor.</h5>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <img className="img-fluid" src={randomBeer} alt="beers" />
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link to="/random-beer" >
                            <h2>Random Beer</h2>
                        </Link>
                    </div>
                    <div className="col-12">
                        <h5 className="text-muted" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis nec ante non dignissim. Etiam cursus, enim ac ultrices laoreet, dolor massa convallis orci, nec blandit massa metus sed lacus. Aenean non mauris in est fringilla finibus. Vivamus diam nisi, vehicula nec turpis ac, dignissim suscipit nunc. Aenean euismod sem in odio sodales, consectetur convallis dui molestie. Mauris iaculis metus est, vel placerat nunc pellentesque eget. Mauris eu purus ut ante suscipit varius eu nec tortor.</h5>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <img className="img-fluid" src={newBeer} alt="beers" />
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>New Beer</h2>
                    </div>
                    <div className="col-12">
                        <h5 className="text-muted" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis nec ante non dignissim. Etiam cursus, enim ac ultrices laoreet, dolor massa convallis orci, nec blandit massa metus sed lacus. Aenean non mauris in est fringilla finibus. Vivamus diam nisi, vehicula nec turpis ac, dignissim suscipit nunc. Aenean euismod sem in odio sodales, consectetur convallis dui molestie. Mauris iaculis metus est, vel placerat nunc pellentesque eget. Mauris eu purus ut ante suscipit varius eu nec tortor.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;