import axios from "axios"

export const axiosInstance = axios.create({
    baseUrl: "https://ih-beers-api2.herokuapp.com/beers",
    transformResponse: [function (data) {
        // Do whatever you want to transform the data
        console.log(data)
        return data;
    }],
})