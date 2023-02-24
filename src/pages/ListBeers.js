import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

function ListBeers(){
const [listbeers, setListBeers] = useState([])

useEffect(() =>{
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
        console.log("listbeers: ", response.data);
        setListBeers(response.data)
});
}, []);

return (
    <div>
    <Link to="/"></Link>

    <div>
      <h3>List all the beers</h3>
      {listbeers.map((beer) => (
        <>
        {console.log(beer)}
        <div className="card">
          <img src={beer.image_url} alt="beer" />
          <p>Name: {beer.name}</p>
          <p>Tagline: {beer.tagline}</p>
          <p>Contributed_By: {beer.contributed_by}</p>
        </div>
        </>
      ))}
</div>
</div>
 );
};
export default ListBeers;