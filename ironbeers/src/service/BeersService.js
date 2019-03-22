
import axios from 'axios'


export default class BeerService{
    constructor (){

        this.service = axios.create({
            baseURL: "http://localhost:3000/api/"


        })

    }




}







export default BeerService