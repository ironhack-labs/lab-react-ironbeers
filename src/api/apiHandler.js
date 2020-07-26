import axios from "axios";

const service = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com/beers",
})

export default {
    service,
    getAllBeers(){
        return service.get("/")
    },
    getBeerDetails(id){
        return service.get(`/${id}`)
    },
    getRandomBeer(){
        return service.get("/random")
    },
    addNewBeer(newBeer){
        return service.post("/new", newBeer)
    },
    searchBeer(query){
        return service.get(`/search?q=${query}`)
    }
}