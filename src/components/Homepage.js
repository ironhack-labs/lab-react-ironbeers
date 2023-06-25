import pic1 from "../assets/beers.png"
import pic2 from '../assets/random-beer.png'
import pic3 from '../assets/new-beer.png'

import { NavLink } from "react-router-dom";


function Homepage (props) {
    return(
        <div className="App">
            {/*ALL BEERS  */}
            <section>
                <img src={pic1}/>
                <h1><NavLink to="/beers">All Beers</NavLink></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus velit sed purus accumsan, tempor tempor leo semper.
                </p>
            </section>
            {/* Random Beer */}
            <section>
                <img src={pic2}/>
                <h1><NavLink to="/random-beer">Random Beer</NavLink></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus velit sed purus accumsan, tempor tempor leo semper.
                </p>
            </section>
            {/* New Beer */}
            <section>
                <img src={pic3}/>
                <h1><NavLink to="new-beer">New Beer</NavLink></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus velit sed purus accumsan, tempor tempor leo semper.
                </p>
            </section>
        </div>
    )
}

export default Homepage;