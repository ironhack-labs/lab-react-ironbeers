import axios from "axios";
import { useEffect, useState } from "react";

function BeersList() {

    const [beers, setBeerList] = useState([])
    // console.log(typeof(process.env.REACT_APP_API_URL));
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}`)
            .then((response) => {
                console.log(response.data);
                return(setBeerList(response.data))
            })
            .catch(e => console.log(e))
    }, [])

    return(
        <div>
            jjaaa
        </div>
    )
}

export default BeersList;