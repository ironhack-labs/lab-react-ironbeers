import React from 'react'
import {Link} from "react-router-dom"

import BeersImg from '../../../assets/beers.png';
import RandomBeerImg from '../../../assets/random-beer.png';
import NewBeerImg from '../../../assets/new-beer.png';

const Home = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="container m-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <img src={BeersImg} alt="beers" className="img-fluid rounded m-1"/>
                            <Link to="/beers"><h2>All Beers</h2></Link>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem 
                                at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container m-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <img src={RandomBeerImg} alt="random-beer" className="img-fluid rounded m-1"/>
                            <Link to="/random-beer"><h2>Random Beer</h2></Link>
                            <p className="text-justify">
                                Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora 
                                torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus 
                                ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin 
                                quam. Etiam ultrices. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container m-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <img src={NewBeerImg} alt="new-beer" className="img-fluid rounded m-1"/>
                            <Link to="/new-beer"><h2>New Beer</h2></Link>
                            <p className="text-justify">
                                Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet 
                                risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. 
                                Nulla quam. Aenean laoreet. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home