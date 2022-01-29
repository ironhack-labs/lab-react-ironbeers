import axios from "axios";

class apiBeers {
    constructor () {
        this.api = axios.create({
            baseURL:"https://ih-beers-api2.herokuapp.com/beers"
        })
    }

    getAllBeers = async () => {
        try{
            const { data } = await this.api.get("/")
            return data
        } catch (error) {
            throw new Error ("Could not fetch data")
        }
    }

    getSingleBeer = async (id) => {
        try{
            const { data } = await this.api.get(`/${id}`)
            return data
        } catch (error) {
            throw new Error ("Could not fetch data")
        }
    }

    getRandomBeer = async () => {
        try{
            const { data } = await this.api.get("/random")
            return data
        } catch (error) {
            throw new Error ("Could not fetch data")
        }
    }

    createNewBeer = async (newBeer) => {
        try{
            await this.api.post("/new", newBeer)
        } catch {
            throw new Error ("Could not create new beer")
        }
    }

    getSearchBeer = async (query) => {
        try{
            const { data } = await this.api.get(`/search?q=${query}`)
            return data
        } catch {
            throw new Error ("Could not locate the searched beer")
        }
    }
}

export default new apiBeers()