import React from 'react'
import {Link} from "react-router-dom";

export default function NavMain() {
    return (
        <div id = "nav">
            <div className="allbeers">
            <img src="../../images/beers.png" alt="beersimage"/>
            <Link to= "/beers"><h1>All Beers</h1> </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.</p>
            </div>

            <div className="allbeers">
            <img src="../../images/random-beer.png" alt="beersimage"/>
            <Link className="titlelink" to= "/random-beer"><h1>Random Beer</h1> </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.</p>
            </div>

            <div className="allbeers">
            <img src="../../images/new-beer.png" alt="beersimage"/>
            <Link to= "/new-beer"><h1>Add a new beer</h1> </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.</p>
            </div>
        </div>
    )
}