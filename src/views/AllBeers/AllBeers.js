import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/FormInput/FormInput';
import ItemPreview from '../../components/ItemPreview/ItemPreview';
import { beerList } from './../../services/BeersService';


const Allbeers = () => {
  const [list, setList] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    beerList()
    .then(response => { setList(response)})    
  } , [])

  const filterList = () => {
      return list.filter(beer => {
          if (beer.name.toLowerCase().includes(search.toLowerCase())){
              return true;
            }
            return false;
      })
  }

  const handleChange = (e) => {setSearch(e.target.value)}

  const listToPrint= filterList()
  return (

      <div>
        <FormInput type={"text"} name={"name"} handleChange={handleChange}/>
        <div className="allBeers">
            {listToPrint.map(beer => {
              return (
                  <div key={beer._id} >
                    <Link
                    to={`/beers/${beer._id}`}
                    ><ItemPreview {...beer}/>
                    </Link>
                  </div>
              )
            })}
        </div>
      </div>
  );
}

export default Allbeers;
