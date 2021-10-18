import axios from 'axios';

// const service = axios.create({
//     baseUrl: 'https://ih-beers-api2.herokuapp.com'
// })

const BEER_SERVICE = {
    listAllBeers: () => {
        return axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(results => {
                // console.log(results)

                const arrayOfBeers = results.data;
                // console.log(arrayOfBeers)

                return arrayOfBeers;
            })
            .catch(err => console.log(err))
    }
}

export default BEER_SERVICE;