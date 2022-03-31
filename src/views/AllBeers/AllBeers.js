import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { beerList } from './../../services/BeersService';

const Allbeers = () => {
    const [list, setList] = useState([])

    useEffect(() => {
      beerList()
      .then(response => { setList(response)})    
    } , [])
    return (
        <div>
            {list.map(beer => {
              return (
                
                  <div key={beer._id}>
                    <Link 
                    to={`/beers/${beer._id}`}
                    >{beer.name}
                    </Link>
                  </div>
              )
          })}
            
        </div>
    );
}

export default Allbeers;
