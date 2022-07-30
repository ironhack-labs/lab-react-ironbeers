import { useEffect, useState } from 'react'
import { getRandomBeer } from '../api/beers'

const useBeers = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [random, setRandom] = useState({})

  const fetchRandom = async () => {
    try {
      setIsLoading(true)
      const res = await getRandomBeer()
      setRandom(res.data)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.log('Error fetching beer: ', e)
    }
  }

  useEffect(() => {
    fetchRandom()
  }, [])

  return { isLoading, random }
}
export default useBeers
