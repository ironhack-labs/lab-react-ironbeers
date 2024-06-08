import axios from "axios";

//creamos la constante de la base de la ruta
//el metodo create recibe un objeto con la clave baseURL = a la url base
const http = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com/beers"
});

//Antes de nada usamos el interceptor para acceder al data del objeto que devuelve la API
//Accedemos a la response que recive dos funciones
http.interceptors.response.use(
    function (response) {
        return response.data;
    }, function (error) {
        return Promise.reject(error);
    }
);

//Ahora creamos las funciones para acceder a la informacion que queremos
//Primero accedemos a la lista completa
//exportamos la funcion
export const getBeers = () => {
    //sin el return no devuelve nada
    return http.get("/");
};

//Aquí traemos una sola beer
//El id será el que marque la documentación
export const getBeer = (id) => {
    return http(`/${id}`);
};

export const getRandomBeer = () => {
    return http.get("/random");
};

export const addBeer = (beer) => {
    return http.post("/new", beer)
}