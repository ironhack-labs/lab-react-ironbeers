
import axios from "axios";


// https://ih-beers-api2.herokuapp.com/beer



const getAllBeers = () => {
    let resultArr = []
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(result => {
            return result
        })
        .catch(err => console.log(err))

}




export default getAllBeers;