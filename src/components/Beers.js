import homeImg from '../assets/20326047.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Beers(props) {
    
    const [beersArr, setBeersArr] = useState([]);
    const [beerIdLink, setBeerIdLink] = useState("");
    const [isRandom, setIsRandom] = useState(props.random);

    useEffect(() => {

        axios.get(process.env.REACT_APP_API_URL + "/beers/" + beerIdLink + isRandom)
            .then((response) => {
            
                //console.log(response);

                let newList = [];
                beerIdLink || isRandom !== "" ? newList = [response.data] : newList = response.data;

                setBeersArr(newList);
                //console.log(beersArr);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [beerIdLink, isRandom]);

    return (
        <div>
            <Link to="/">
                < header > <img src={homeImg} alt="No" /></header>
            </Link>
            {beersArr.map((beer) => {
                return <>
                    <img src={beer.image_url} alt="Beer bottle" />
                    <section>
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>

                        {(beerIdLink || isRandom) &&
                            <div>
                                <p>First brewed: {beer.first_brewed}</p>
                                <p>Attenuation level: {beer.attenuation_level}</p>
                                <p>Description: {beer.description}</p>
                            </div>}

                        <p>Contributed by: {beer.contributed_by}</p>

                        {!beerIdLink && !isRandom && <button onClick={() => { setBeerIdLink(beer._id); }}>Get info</button>}
                        {beerIdLink && !isRandom && <button onClick={() => { setBeerIdLink(""); }}>Beers list</button>}
                        {isRandom && <button onClick={() => { setIsRandom("")}}>Beers list</button>}
                        
                    </section>
                </>
            })}
        </div>

    )

}

export default Beers;