import { Header } from "./Header"
import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom';
import { fetchWrapper } from "../function/fetchWrapper";


export const Beers = () => {

    const [ beers, setBeers ] = useState(null);

    const [string, setString] = useState("")

        
    useEffect(() => {

        if(string !== ""){
            fetchWrapper(process.env.REACT_APP_API_BASE_URL + `/beers/search?q=${string}`)
                .then((data) => {
                    setBeers(data)
                    console.log(data)
                })
        } else {
            fetchWrapper(process.env.REACT_APP_API_BASE_URL + "/beers")
                .then((data) => setBeers(data))
        }

    }, [string]);

    const renderBeers = () => {
        const result = beers.map((beer) => {
            return (
                    <div key={beer._id}>
                        <NavLink to={`/beers/${beer._id}`} className="Beers">
                            <img src={beer.image_url} alt={beer.name}/>
                            <div className="beer-info">
                                <h2>{beer.name}</h2>
                                <p className="tagline">{beer.tagline}</p>
                                <p>Created by:{beer.contributed_by}</p>
                            </div>
                        </NavLink>
                        <hr className="line"/>
                    </div>
            );
        });
        return result; 
    }



    return (
        <>
            <Header/>
            <div className="Search">
            <label>Search Beers</label>
            <br/>
            <input 
                value={string} 
                type="text" 
                onChange={(e) => {
                    setString(e.target.value)
                    }} />
            </div>

            {!beers
            ? <p>loading...</p>
            : renderBeers()
            }
        </>
    )
}