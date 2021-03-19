
// Iteration 1: init axios and implement list events method.
import http from './base-api-service';

// The list method must return an array of events
const list = () => {
  return http.get('/').then(responseFromApi => {
    return responseFromApi.data;
  });
}

// Iteration 2: implement get event method.
// this method receives the event id and returns the event
const get = (id) => {
  return http.get(`/${id}`)
    .then(response => response);
}


// Iteration 3: implement create event method.
// this method receives the event returns the new event
const create = (event) => {}

// Iteration 4: implement remove event method.
// this method receives the event id and returns nothing (Promise.resolve())
const remove = (id) => {}


// Iteration 6: implement update event method.
// this method receives the event returns the updated event
const update = (event) => {}

const service = {
  create,
  update,
  remove,
  list,
  get
}
export default service;
