import axios from "axios";
 
const service =axios.create({
    baseURL:"https://ih-beers-api2.herokuapp.com/beers"
});

export default{
    service,
    
    getBeers (){
        return service.get("/")
    },

    getOne(id){
        return service.get("/" + id)
    },

    getRandom(id){
        return service.get("/random" + id);
    },
    createNew(data){
        return service.post("/new-beer", data);
    },
};