import { Link } from "react-router-dom";

function HomePage() {

    return(
        
        <div>
            <Link to="/beers">
               <h2>All Beers</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, sem at sollicitudin interdum, mauris erat tincidunt augue, semper commodo nulla velit at nulla. Donec efficitur, dui eget vestibulum eleifend, ex dolor rhoncus quam, nec condimentum ipsum nunc ut magna.</p>
            </Link>

            <Link to="/random-beer">
               <h2>Random Beer</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, sem at sollicitudin interdum, mauris erat tincidunt augue, semper commodo nulla velit at nulla. Donec efficitur, dui eget vestibulum eleifend, ex dolor rhoncus quam, nec condimentum ipsum nunc ut magna.</p>
            </Link>

            <Link to="/new-beer">
               <h2>New Beer</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, sem at sollicitudin interdum, mauris erat tincidunt augue, semper commodo nulla velit at nulla. Donec efficitur, dui eget vestibulum eleifend, ex dolor rhoncus quam, nec condimentum ipsum nunc ut magna.</p>
            </Link>
        </div>
    )
}

export default HomePage;
