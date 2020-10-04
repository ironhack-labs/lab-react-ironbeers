import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import BeerItem from './BeerItem';


function Beers() {
    const [state, setState] = useState([])
    
    useEffect(async() => {
        const allBeers = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        console.log(allBeers.data)
        setState(allBeers.data)
    }, [])
    console.log(state)
    
  //Class:
  // componentDidMount() -- quando o component é webkitConvertPointFromPageToNode
  // componentDidUpdate() -- sempre atualiza
  // componentWillUnmout() -- qdo o components é deletado

  //Hook:
  //useEffect(() => {callback}, [var])

    return (
        <div>
            <Header />
            {state.map((beer, idx) => <BeerItem key={idx} element={beer} /> )}
        </div>
    )
}

export default Beers;



// <Link to={`/beer-detail/${beer._id}`}> 
// <div key={idx}>
// <img src={beer.image_url} height="150" width="100"/>
// <p>{beer.name}</p>
// <p>{beer.tagline}</p>
// <p>{beer.contributed_by}</p>
// </div>
// </Link>