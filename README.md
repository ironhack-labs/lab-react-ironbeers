![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React IronBeers

Since beer is one of the most consumed drinks between Ironhackers 🍻 , our mission here is to create an app to showcase some of the best-handcrafted beers, but not just that - to save some as well so the rest of Ironhack community is informed 😌. Our end goal is creating something like this:

<div style="display: flex; justify-content: center">
<img src="https://user-images.githubusercontent.com/23629340/45887951-2ca0bb80-bdbd-11e8-91a4-08b66d88a7c7.gif" />
</div>

## Setup

- Fork this repo
- Clone this repo

```shell
$ cd lab-react-ironbeers
$ npm install
$ npm start
```

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Introduction

We will be building a React app so the API (server) needs to be built somewhere for us, right? You are completely right, it's deployed on _heroku_ and the root fo the API is:
**`https://ih-beers-api2.herokuapp.com/beers`**.

The available endpoints are the following:

| Method | Endpoint            | Response (200)                                         | Action                                                                                                                                  |
| ------ | ------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /                   | [beers]                                                | Get all the beers from the DB                                                                                                           |
| GET    | /:id                | { beer }                                               | Get the a single/specific beer                                                                                                          |
| GET    | /random             | { beer }                                               | Get a random beer from the DB                                                                                                           |
| POST   | /new                | { message: "New beer successfully saved to database!"} | Create a new beer (the fields are specified in the instructions)                                                                        |
| GET    | /search?q=`{query}` | [beers]                                                | Get beers from the DB whose name contains the search term. For example `/search?q=lager` searches for all beers with lager in the name. |

On each iteration, we will explain which endpoint you should use!

The **IronBeers** project will include the following features:

- A **Home** page with three different options:
  - _All Beers_
  - _Random Beer_
  - _New Beer_
- A **List Beers** page where you should display all the beers
- A **Single Beer** page to display the details of the beer the user clicked on
- A **Random Beer** page to display a Random Beer
- A **New Beer** page to show a form where a user can create new beers

## Instructions

:exclamation: At the very beginning we will offer you to shoot for the stars: as a **bonus** focus on **mobile first** design! As we said this is bonus, so it's up to you. :+1:

<!-- ### Iteration 1: Create the App

Well, at this point, this comes natural: we will use `create-react-app` to build a new app. Feel free to name it as you wish, but if you need some inspiration, we called it **Reactive BeersJS**. -->

### Iteration 1 | Home Page

Create a **Home Page**. This view should include three links to separate pages:

- `/beers`
- `/random-beer`
- `/new-beer`

Feel free to design it however you wish, but in case you want to do it the way we did it, you can find the following images in `src/assets` folder:

<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40706572-933439b8-63ee-11e8-8d65-538fb59f79ab.png" height="600px" />
</div>

### Iteration 2 | Header

On every view (except for the `home`), we should add a **header** with a `link` to the root of the `app`.

<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" height="100px" />
</div>

### Iteration 3 | List all the beers

On the `/beers` route, we should display all the beers from the database. So, in this case, you need to "hit" the API's route `https://ih-beers-api2.herokuapp.com/beers` and the API will return an **array of beers**.

_Hint_: The array of beers is array of objects. We strongly advise you to **console log the response** from the API so you can see the structure of it.

You should display the following from each of the beers:

- `image`
- `name`
- `tagline`
- `contributed_by`
- **Also, add the link to check the details of each beer. The link should navigate to `/beers/:beerId`.**

<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40706960-96223ade-63ef-11e8-9375-b7b6d091e716.png" height="600px" />
</div>

The first time you call the API, it might take a bit to respond. It's hosted on Heroku, and it goes to sleep after 30 minutes, you know! :wink:

### Iteration 4 | Display a single beer

When a user click on one of the beers, you should display a detailed view of it, including the following fields:

- `image`
- `name`
- `tagline`
- `first_brewed`
- `attenuation_level`
- `description`
- `contributed_by`

Again, we **strongly recommend to console log the response from the API**.

<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40707269-84bedd78-63f0-11e8-86c3-b14efb9323a7.png" height="600px" />
</div>

### Iteration 5 | A random beer

On the `/random-beer` route, we will render a single beer that will be retrieved from the database. The endpoint will do all the job for us, all we need to do is to call `https://ih-beers-api2.herokuapp.com/beers/random`. We should receive an object including all the info about a beer.
The same way we did with the **Single Beer** view, we should render the following fields:

- `image`
- `name`
- `tagline`
- `first_brewed`
- `attenuation_level`
- `description`
- `contributed_by`

<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40707457-05a22990-63f1-11e8-84b2-a86143b7b821.png" height="600px" />
</div>

### Iteration 6 | Create a new beer

Finally, on the `/new-beer` route (remember, this is you react route, you're displaying the form on this route), we should render a form where user can create new beers. The `form` should include the following fields:

- **name** - must be type _text_
- **tagline** - must be type _text_
- **description** - must be type _text_
- **first_brewed** - must be type _text_
- **brewers_tips** - must be type _text_
- **attenuation_level** - must be type _number_ **!!!**
- **contributed_by** - must be type _text_

Why we pointed out the type? Well, since we already console log response from the API, we could notice that all the fields are strings but _attenuation_level_, which is number. Using our knowledge from module II, we can make conclusion that in the _beer model_ all the properties are type _String_ except _attenuation_level_, which is type _Number_.
When you have built the form, you should do a `POST` request to `https://ih-beers-api2.herokuapp.com/beers/new`, passing all the data on the `body` object. If everything went ok, you would receive a **200** response from the server.

Notice that the fields on the `body` should have those specific **names** so the API can create a new beer.

_What could go wrong?_: You inputted string instead of number in the _attenuation_level_ field and the server sent you **500** error.
Since we didn't cover how to upload images yet, don't worry about it now - the API will assign a random image to the new beer. :beer:

<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40707877-3c9dad42-63f2-11e8-8c95-4881bbde64a2.png" height="600px" />
</div>

### Iteration 7 | Bonus | Filter the beers

Yes! One endpoint left! On the `/beers` route, add an `input` where users can search for beers. Every time a new letter is typed, you should call to `https://ih-beers-api2.herokuapp.com/beers/search?q={query}` passing the value of the input in the `q` param.

**We are done!** :trophy:

Awesome! Grab a beer (if you're not underage :wink: )! Now you are a **React Warrior**, keep training to become the Ninja!

Happy coding! :heart:
