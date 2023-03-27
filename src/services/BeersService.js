import http from "./BaseService";

export const listBeers = () => http.get("/");
