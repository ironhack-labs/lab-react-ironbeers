import React ,{ Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {


 
    render(){
        return(<><section className="all-beers-section">
            <div id="img1-all-beers"></div>
            <div className="all-beers-div"><NavLink to="/beers"><h1>All beers</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat elit nisl, non ultrices urna vehicula non. Donec vulputate, enim et imperdiet mattis, dolor tortor faucibus sapien, non aliquet dui libero vitae odio. Maecenas quis nisi rhoncus, ultrices tellus vel, volutpat arcu.</p></NavLink></div>
        </section>
        <section className="all-beers-section">
            <div id="img2-all-beers"></div>
            <div className="all-beers-div"><NavLink to="/RandomBeer"><h1>Random Beer</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat elit nisl, non ultrices urna vehicula non. Donec vulputate, enim et imperdiet mattis, dolor tortor faucibus sapien, non aliquet dui libero vitae odio. Maecenas quis nisi rhoncus, ultrices tellus vel, volutpat arcu.</p></NavLink></div>
        </section>
        <section className="all-beers-section">
            <div id="img3-all-beers"></div>
            <div className="all-beers-div"><NavLink to="/NewBeer"><h1>New Beer</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat elit nisl, non ultrices urna vehicula non. Donec vulputate, enim et imperdiet mattis, dolor tortor faucibus sapien, non aliquet dui libero vitae odio. Maecenas quis nisi rhoncus, ultrices tellus vel, volutpat arcu.</p></NavLink></div>
        </section>
        </>
        )

    }
        
    
}

export default Home