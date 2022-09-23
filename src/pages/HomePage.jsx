import { useState, useEffect } from "react";
import axios from 'axios';
import imgBeers from "../assets/beers.png";
import imgRandomBeer from "../assets/random-beer.png";
import imgNewBeer from "../assets/new-beer.png";
import { Link } from 'react-router-dom';

function HomePage() {
    const [homepages, setHomepage] = useState([]);
    const API_URL = process.env.REACT_APP_BASE_URL;

    useEffect(()=>{
        axios.get(`${API_URL}/beers`)
        .then(response => setHomepage(response.data))
        .catch(err => console.log(err))
        // eslint-disable-next-line 
    }, [])

    if(homepages.length === 0){
        return <>
            <p>Loading...</p>
        </>
    }

    return(
                <div>
                    <div>
                        
                        <img src={imgBeers} alt="image_beer" />
                        <h1><Link to={"/beers"}>All Beers</Link></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis. Duis at tellus at urna condimentum mattis pellentesque id.</p>

                    </div>
                    
                    <img src={imgRandomBeer} alt="image_random_beer" />
                    <h1><Link to={"/random-beer"}>Random Beer</Link></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis. Duis at tellus at urna condimentum mattis pellentesque id.</p>
                    
                    <img src={imgNewBeer} alt="image_new_beer" />
                    <h1><Link to={"/new-beer"}>New Beer</Link></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis. Duis at tellus at urna condimentum mattis pellentesque id.</p>
                    
                </div>
            
        
    );

}

export default HomePage;