import http from "./BaseService";

export const getAllAlbums = () => http.get("/albums")