import http from "./BaseService";

export const productList = () => http.get('/products');
export const productRandom = () => http.get('/products/random');
export const productSingle = (id) => http.get(`/products/${id}`)
export const productNew = (data) => http.post(`/products/new`, data)