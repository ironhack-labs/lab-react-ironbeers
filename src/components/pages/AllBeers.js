import apiBeers from "../../utils/apiBeers"
import { useState, useEffect } from "react"

const AllBeers = () => {

  const [ allBeers, setAllBeers ] = useState([])

  useEffect(() => {
    const getAllBeers = async () => {
      const fetchBeers = await apiBeers.getAllBeers()
      setAllBeers(fetchBeers)
    }

    getAllBeers()
  }, [])

  return (<div>
      All Beers
  </div>)
};

export default AllBeers;
