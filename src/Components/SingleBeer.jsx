/* import React from 'react'

function SingleBeer() {
  const [SingleBeer, setSingleBeer] = useState([]); 

  useEffect(() => {
      axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
          setBeers(response.data);
        })
        .catch((err) => console.log(err));
    }, []);
  



  return (
    <div>SingleBeer</div>
  )
}

export default SingleBeer */