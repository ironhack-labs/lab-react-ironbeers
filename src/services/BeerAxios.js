import InitAxios from "./InitAxios";

class BeerAxios extends InitAxios {
    constructor() {
        super('/beers')
    }

    getAllBeers() {
        return this.axios.get('/').then((res) => res.data)
    }

    getBeerById(id) {
        return this.axios.get(`/${id}`).then((res) => res.data)
    }

    getRandomBeer() {
        return this.axios.get('/random').then((res) => res.data)
    }

    createNewBeer(body) {
        return this.axios.post('/new', body).then((res) => res.data)
    }

    searchBeers(query) {
        return this.axios.get(`/search?q=${query}`).then((res) => res.data)
    }
}

export default BeerAxios