import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
function BeersList() {
    const [beersArr, setBeersArr] = useState([]);


    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(e => {
                setBeersArr(e.data);


            })
            .catch(e => console.log(e))

    }, [])
    console.log(beersArr);

    return (
        <div>
            {beersArr.map((e, index) => {
                return <div key={index}>
                    <Link to={"/beers/" + e._id}>
                        <img src={e.image_url
                        } alt="" />
                        <h2>{e.name}</h2>
                        <h3>{e.tagline}</h3>
                        <div>Created by: <span>{e.contributed_by}</span></div>
                    </Link>
                </div>
            })}

        </div>
    )

}

export default BeersList;