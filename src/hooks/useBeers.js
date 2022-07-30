import { useEffect, useState } from 'react'
import { getAllBeers } from '../api/beers'

const useBeers = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [beers, setBeers] = useState([])

  const fetchBeers = async () => {
    try {
      setIsLoading(true)
      const res = await getAllBeers()
      setBeers(res.data)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.log('Error fetching beers: ', e)
    }
  }

  useEffect(() => {
    fetchBeers()
  }, [])

  return { isLoading, beers }
}
export default useBeers
