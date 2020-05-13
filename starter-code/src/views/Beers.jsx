import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";



class Beers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
        }
    }

    componentDidMount() {
        console.log("mounted");
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((apiResponse) => {
                this.setState({ beers: apiResponse.data });
            })
            .catch((apiError) => {
                console.log(apiError)
            })
    }

    render() {
        return (
            <div>
                <NavBar />
                <h1>All Beers</h1>
                    {this.state.beers.map((beers, index) =>(

                            <p className='beer-image'>
                                <Link to={`/beer/${beers._id}`}><img src={beers.image_url} alt="" /></Link>
                                <h1>{beers.name}</h1>
                                <h4>{beers.tagline}</h4>
                                <h6>{beers.contributed_by}</h6>
                                <hr/>
                            </p>
                            
                    ))}


            </div>
        )

    }
}

// const Beers = () => {
//   return (
//     <div>
//     <NavBar />
//       <h1>Beers Page</h1>
//     </div>
//   );
// };

export default Beers;
