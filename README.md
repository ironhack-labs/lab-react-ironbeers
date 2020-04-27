![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# IronBeers

Since beer is one of the most consumed drinks among Ironhackers 🍻 , our mission is to showcase some of the best-handcrafted beers, but not just that - to save some as well so the rest of Ironhack community is informed 😌.

## App

This React application was created in response to the following Ironhack lab assignment (from which it's forked):
`https://github.com/ironhack-labs/lab-react-ironbeers`

## Functionality

- See a list of beers
- Search for beers
- Get a random beer
- Add a new beer

## API

This app makes calls to the Ironhack API deployed on *heroku*: 
**`https://ih-beers-api2.herokuapp.com/beers`**.

The endpoints are as follows:

| Method | Endpoint | Response (200)     | Action |
| ------ | -------- | ------------------ | ------ |
| GET    | /     | [beers]            | Get all the beers from the DB |
| GET    | /:id | { beer }        | Get the a single/specific beer      |
| GET    | /random     | { beer }        | Get a random beer from the DB |
| POST   | /new        | { message: "New beer successfully saved to database!"}| Create a new beer (the fields are specified in the instructions)|
| GET    | /search?q=`{query}` | [beers] | Get beers from the DB whose name contains the search term. For example `/search?q=lager` searches for all beers with lager in the name. |
