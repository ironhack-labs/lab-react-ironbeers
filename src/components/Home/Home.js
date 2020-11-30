import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return(
        <div>
            <div className="home-divs">
                <Link to="/beers">
                    <img src="https://www.mansorestaurante.com/wp-content/uploads/2020/05/Smart-Beer-Taps-Prevent-Bars-Running-Out-Of-Beer.jpg" alt="beer-tap" className="home-img"/>
                    <h1>All Beers</h1>
                </Link>
                <p>Man-of-war galleon clipper draught list Sail ho holystone run a rig. Lugger tackle bilge Jack Ketch sloop Sail ho sheet strike colors. No prey, no pay topmast spyglass squiffy draught skysail red ensign Gold Road. </p>
            </div>

            <div className="home-divs">
                 <Link to="/random-beer">
                 <img src="https://www.sciencenews.org/wp-content/uploads/2020/05/050620_mt_beer_feat-1028x579.jpg" alt="beer" className="home-img"/>
                    <h1>Random Beer</h1>
                </Link>
                <p>Yellow Jack booty scurvy sloop splice the main brace cutlass. Buccaneer stern lugger overhaul prow log. Carouser ballast boatswain rope's end quarterdeck careen. Broadside quarter parrel boatswain chase guns careen.</p>
            </div>

            <div className="home-divs">
                <Link to="/new-beer">
                <img src="https://www.sciencenews.org/wp-content/uploads/2020/05/050620_mt_beer_feat-1028x579.jpg" alt="beer" className="home-img"/>
                    <h1>New Beer</h1>
                </Link>
                <p>Stern bucko maroon warp Yellow Jack. Yo-ho-ho hail-shot quarter poop deck crow's nest. Bucko man-of-war bowsprit maroon bilged on her anchor. </p>
            </div>
        </div>
    )
}

export default Home;