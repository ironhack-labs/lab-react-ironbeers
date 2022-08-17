import axios from "axios"

function successStatus(response){
return {
    status:true,
    data:response.data,
}
}

function internalServerError(error){
    //to do:
    if(error.response && error.response.data && error.response.data.errorMessage){
        return {
            status:false,
            errorMessage: error.response.data.errorMessage
        }
    }
    return {
        status:false,
        errorMessage: "Internal server error, check your server"
    }

}

const createBeer = axios.create({

    baseURL: `https://ih-beers-api2.herokuapp.com/beers`
})


export const createContact =(data)=>{
    return createBeer
    .post("/new",data)
    .then(successStatus)
    .catch(internalServerError)
}
