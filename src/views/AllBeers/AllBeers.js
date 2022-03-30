import React,{ useState, useEffect } from 'react';
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
                  <p key={beer._id}>{beer.name}</p>
              )
          })}
            
        </div>
    );
}

export default Allbeers;
