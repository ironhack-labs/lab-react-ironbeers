// import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { BASE_URL } from "./consts";
import axios from "axios";

export const GetBeers = (code) => {
    console.log("The code: ", code);
    const [status, setStatus] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        axios.get(BASE_URL + `/${code}`).then(res => {
            setStatus({
                data: res.data,
                loading: false
            })
        });
    }, []);

    return status;
}

export const newBeer = data => {
    axios.post(BASE_URL + `/new`, data)
}