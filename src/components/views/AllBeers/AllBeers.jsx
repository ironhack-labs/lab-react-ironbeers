import React from 'react'
import Loader from "react-loader-spinner";

import BeerListCard from '../../BeerListCard/BeerListCard'


const AllBeers = ({beersData, loading}) => {


    return(
        <div className="container">

            {
                loading ? 
                <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                :
                <BeerListCard beersData={beersData}/>

            }
            
        </div>

    )
    
}

export default AllBeers