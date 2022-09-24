import InitAxios from "./initAxios";

class BeersAxios extends InitAxios {
    constructor() {
        super()
    }

    getAllBeers() {
        return this.axios.get().then((res) => res.data)
    }

    getOneBeerById(id) {
        return this.axios.get(`/${id}`).then((res) => res.data)
    }

}

export default BeersAxios