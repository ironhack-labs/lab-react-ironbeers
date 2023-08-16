import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from 'axios'
import { Link } from "react-router-dom";

const Beers = () =>{

    const [ beers, setBeers ] = useState([]);

    const [ searchBeer, setSearchBeer ] = useState("")

    const getAllBeers = async () => {
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            console.log(response.data)
            setBeers(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    const searchBeerQuery = async (query) => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            setBeers(response.data)
            
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        if(!searchBeer){
            getAllBeers();
        }else{
            searchBeerQuery(searchBeer);
        }
        
    }, [searchBeer])



    return(
        <div>
            <Header/>
            
            <input 
                className="searchInput"
                type="text" 
                name="search" 
                id="search" 
                onChange={ (e) => setSearchBeer(e.target.value) } 
                value={searchBeer}
                placeholder="Search beers"
                />
            {
                beers.length === 0 && <h1> Error 404 Beers no found</h1>
            }
                
            {
                
                beers.length !== 0 && (
                    
                    
                    beers.map(beer =>(
                    <Link to={`/beers/${beer._id}`} key={beer._id} className="beers">
                        <div className="beers-image">
                            <img src={beer.image_url} alt={beer.name} style={{width: "80px", height: "180px"}}/>
                        </div>
                        <div className="beers-info">
                            <h2>{beer.name}</h2>
                            <h3>{beer.tagline}</h3>
                            <p>Contributed by {beer.contributed_by}</p>
                        </div>
                    </Link>
                
                   
                )))
            }
        </div>
    )
}

export default Beers;