![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# IronBeers Project

Since beers is one of the most demanded drinks between Ironhackers, we will create an app to display some of the best handcrafted beers. We will have something like the this:

<div style="display: flex; justify-content: center">
<img src="https://user-images.githubusercontent.com/23629340/45887951-2ca0bb80-bdbd-11e8-91a4-08b66d88a7c7.gif" />
</div>
 
## Introduction

For this project, we will be using an API so that we can retrieve the data of the beers. The root of the API is: `https://ironbeer-api.herokuapp.com/beers`, and the available endpoints are the following:

| Method | Endpoint | Response (200)     | Action |
| ------ | -------- | ------------------ | ------ |
| GET    | /all     | Beers[]            | Get all the beers from the DB |
| GET    | /single/:id | { Beer }        | Get the specific beer      |
| GET    | /random     | { Beer }        | Get a random beer from the DB |
| POST   | /new        | { Message: OK } | Create a new beer (The fields are specify on the instructions)|
| GET    | /search?q=`{query}` | Beers[10] | Search with a RegEx using the `query` specified and return the first ten result |

On each iteration, we will explain which endpoint you should use!

The **IronBeers** Project will include the following features:

- A **Home** Page with three different options.
  - All Beers
  - Random Beer
  - New Beer
- A **List Beers** Page where you should display all the beers.
- A **Single Beer** Page to display a unique beer by clicking on the List.
- A **Random Beer** Page where we display a Random Beer.
- A **New Beer** Page to show a form where a user can create new beers.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.


## Instructions

:exclamation: At the very beginning we will offer you to shoot for the stars: as a **bonus** focus on **mobile first** design!

### Iteration 1: Create the App

Easy peasy! Using  `create-react-app`  you should build a new app. Feel free to name it as you want it, but if you need some inspiration, we called **Reactive BeersJS**.

### Iteration 2: Home Page

Create the **Home Page**. The view should include three views:

- `/beers`
- `/random-beer`
- `/new-beer`

Feel free about the design, but here is how we did it:

<div style="display: flex; justify-content: center">
<img src="https://user-images.githubusercontent.com/23629340/40706572-933439b8-63ee-11e8-8d65-538fb59f79ab.png" height="600px" />
</div>

### Iteration 3: The `Header`

On every view (except for the `home`), we should add a **header** with a `link` to the root of the `app`.

<div style="display: flex; justify-content: center">
<img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" height="100px" />
</div>

### Iteration 4: List the Beers

On the `/beers` route, we should display all the beers from the Database. So, in this case, you need to call the API `https://ironbeer-api.herokuapp.com/beers/all`. The API will return an array of `Beers` objects.

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


### Iteration 5: Single Beer

When a user click on one of the beers, you should display a detailed view of it, including the following fields:

  - `image`
  - `name`
  - `tagline`
  - `first_brewed`
  - `attenuation_level`
  - `description`
  - `contributed_by`

<div style="display: flex; justify-content: center">
<img src="https://user-images.githubusercontent.com/23629340/40707269-84bedd78-63f0-11e8-86c3-b14efb9323a7.png" height="600px" />
</div>

### Iteration 6: Random Beer

On the `/random-beer` route, we will render a single beer that will be retrieved from the database. The endpoint will do all the job for us, so we need to call to `https://ironbeer-api.herokuapp.com/beers/random`. We should receive an object including all the info about a beer. The same way we did with the **Single Beer** view, we should render the following fields: 

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

### Iteration 7: Create New Beer

Finally, on the `/new-beer` route, we should render a form where user could create new beers. The `form` should include the following fields:

  - **name**
  - **tagline**
  - **description**
  - **first_brewed**
  - **brewers_tips**
  - **attenuation_level** (must be a number above 1)
  - **contributed_by**

Then, you should do a `POST` request to `https://ironbeer-api.herokuapp.com/beers/new`, passing all the data on the `body` object. If everything went ok, you would receive a **200** response from the server. 

Notice that the fields on the `body` should have those specific **names** so the API can create a new beer.


Since we did not cover how to upload images, do not worry about that, the API will assign a random image to the new beer. :beer:


<div style="display: flex; justify-content: center">
<img src="https://user-images.githubusercontent.com/23629340/40707877-3c9dad42-63f2-11e8-8c95-4881bbde64a2.png" height="600px" />
</div>

### (Extra) Bonus Iteration: Filter the Beers

Yes! One endpoint left! On the `/beers` route, add an `input` where users can search for beers. Every time a new letter is typed, you should call to `https://ironbeer-api.herokuapp.com/beers/search?q={query}` passing the value of the input in the `q` param.

# We are done!

Awesome! Grab a beer (if you're not underage :wink: )! Now you are a **React Warrior**, keep training to become the Ninja!


Happy coding! :heart:

