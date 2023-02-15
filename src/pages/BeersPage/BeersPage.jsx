import { CardBeer, HeaderBeers } from "../../components";
import { useState, useEffect } from "react";
import { getAllBeers } from "../../services/beers.services";

const BeerPage = () => {
    const [beers, setBeers] = useState([]);

    const getData = async() => {
        try {
          const beerList = await getAllBeers();
          setBeers(beerList.data);
        } catch (error) {
          console.log("Error en Beer List", error);
        };
      };
    
      useEffect(() => {
        getData()
      }, [])

    return(
        <div>
            <HeaderBeers />
            {
            beers.map(beer => (
            <CardBeer key={beer._id} {...beer} />
            ))
            }
        </div>
    );
};

export default BeerPage;