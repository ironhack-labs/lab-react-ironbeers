import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


import { useState, useEffect } from 'react';
import axios from 'axios';

function Beers() {

  const [beersArray, setBeersArray] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => {
        console.log(res.data)
        setBeersArray(res.data)})
      .catch(err => console.log(err))
  }, [])


    return(
        <div>
            <Navbar />
            <h1>test 1</h1>
            {beersArray.map(element => {
                return (
                    <div key={element._id}>
                        <img src={element.image_url} alt={element.name} width={50} />
                        <h3>Name: {element.name}</h3>
                        <p>Description: {element.tagline}</p>
                        <p>Contributed By: {element.contributed_by}</p>
                        <Link to={`/beer/${element._id}`} >View {element.name}</Link>
                    </div>
        );
      })}
        </div>
    )
}


export default Beers