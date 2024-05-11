![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React Iron Brewers

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

This exercise is designed to help you practice and apply the concepts and techniques taught in class.



After completing this exercise, you will be able to:

- Set up side effects in React components with the `useEffect` hook.
- Make `POST` and `GET` HTTP requests from React components using `axios`.
- Integrate your front-end React app with an API or the backend of your application.

  <br>
  
  <hr> 

</details>

<br>

In this lab, we will be working on an app that caters to brewers, beer enthusiasts, and all those interested in handcrafted beers - the Iron Brewers app. Our mission here is to create an app to showcase some of the best handcrafted beers, but not just that - also make it so that users can contribute by saving their handcrafted beers to the database and sharing them with fellow brewers and the community.

Our final result of the app should resemble something similar to this:





<p align="center">
  <img src="https://user-images.githubusercontent.com/23629340/45887951-2ca0bb80-bdbd-11e8-91a4-08b66d88a7c7.gif" />
</p>


## Setup

- Fork this repo
- Clone this repo

```shell
cd lab-react-iron-brewers
npm install
npm run dev
```

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request and submit your assignment.

<br>

##  Test Your Code

This lab is equipped with unit tests to provide automated feedback on your progress and help you understand whether your code is working as expected. If you want to check the tests, they are located in the `src/test` folder.




### Iterations and Test Results

During an iteration, if your code seems to work as expected but some tests don't pass, feel free to move on to the next iteration. Once you've completed all the mandatory iterations, you can go back and resolve any remaining failed test

<br>

### Run the Tests

1. To execute the tests, run the following command in the terminal:

   ```shell
   npm run test
   ```

2. The above command will execute the tests and open the `@vitest/ui` Test Reporter in the browser. 

3. To see the test results, **open** [http://127.0.0.1:51204/\_\_vitest\_\_](http://127.0.0.1:51204/__vitest__) in your browser.

<br>



## Introduction

### Beers API (backend)

We will be building a React app, so the API (backend) needs to be built somewhere for us, right? You are completely right, we will be using a public API called Beers API. The base URL of the API is:

**`https://ih-beers-api2.herokuapp.com/beers`**

<br>

The API provides the following endpoints:

| Method | Endpoint            | Response (200)                                         | Action                                                       |
| ------ | ------------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| `GET`  | `/`                 | [beers]                                                | Get all the beers from the DB                                |
| `GET`  | `/:id`              | { beer }                                               | Get a single/specific beer                                   |
| `GET`  | `/random`           | { beer }                                               | Get a random beer from the DB                                |
| `POST` | `/new`              | { message: "New beer successfully saved to database!"} | Create a new beer (see iteration 7 for fields)               |
| `GET`  | `/search?q={query}` | [beers]                                                | Search beers by name containing the specified term. Example: `/search?q=lager` query will return all beers with the word lager in their name. |

<br>



You can refer to this section any time during the exercise for information about the API endpoints and their usage.



**Note:** The first time you make a request to the API, it might take a bit longer to respond.

<br>



<br>

## Instructions

To help you get started quickly, we have provided you with the starter code and all the required page components. This means there's no need for you to create any new components. Instead, your task is to set up effects in the components to make HTTP requests to the API using `axios` to retrieve and send data.

<br>

The app already includes the following pages:

- A **Home** page with links to 3 different pages:
  - _All Beers_
  - _Random Beer_
  - _New Beer_
  
- An **All Beers** page where you should display all the beers

- A **Single Beer** page where you should display the details of the beer the user clicked on

- A **New Beer** page showing a form where you should implement the functionality to create new beer (make a POST request to the API)

- A **Random Beer** page where you should display a random handcrafted beer

<br>

Take a moment to explore the starter code and familiarize yourself with the components and the structure of the app. To run the app, use the command `npm run dev` in the terminal. 


<br>



### Iteration 1 | List all the beers

In this iteration, you will work on the `AllBeersPage` component in the `src/pages/AllBeersPage.jsx`, which is rendered on the `/beers` route.


The `AllBeersPage` component already displays a list of beers coming from a static JSON data that is stored in a state variable `beers`. However, the component should display a list of all the beers from the Beers API. Your task is to replace the static data with the data coming from the Beers API.


<br>

Your task is to make a `GET` request to the Beers API endpoint `https://ih-beers-api2.herokuapp.com/beers` using `axios`. This API endpoint returns an **array of beers**. Once you get a response from the Beers API, save it in the state variable `beers`.



<br>



<details>


  <summary><b>See Expected Result</b></summary>



<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-iron-brewers/Iteration+1.png" height="800px" />
</p>




  <br>

</details>



<br>

----

### Iteration 2 | Display a single beer

In this iteration, you will work on the `BeerDetailsPage` component in the `src/pages/BeerDetailsPage.jsx`.



When a user clicks on one of the beers in the list on the `AllBeersPage`, they will be redirected to the *Beer Details page*. When the user is redirected, the URL displayed in the browser's address bar will change to `/beers/:beerId`. Here, `:beerId` represents the unique id of the beer that the user selected.

<br>

Your task is to display the details of the selected beer by fetching the data from the Beers API.

<br>



#### 2.1 | Access URL Parameter

To get the details of a specific beer, you will need the beer id, which you can get from the URL. 

The beer id is passed as a URL parameter `:beerId` in the URL. To access the URL parameter, you need to use the `useParams` hook from the `react-router-dom` package.

Check [this example](https://reactrouter.com/en/6.10.0/hooks/use-params) if you need a reminder of how to set up the useParams hook and access the URL parameters.

<br>



#### 2.2 | Make a request to the API

To get the details of a specific beer, you need to make a `GET` request to the Beers API endpoint `https://ih-beers-api2.herokuapp.com/beers/:id`, where `:id` should be replaced with the id of the selected beer. 

**Example:** [https://ih-beers-api2.herokuapp.com/beers/**5fb6a86265b9c209606e10e2**](https://ih-beers-api2.herokuapp.com/beers/5fb6a86265b9c209606e10e2)

<br>



#### 2.3 | Save the response in the state

The `BeerDetailsPage` component already has a state variable `beer` and is set up to display the beer details. Once you make the `GET` request to the API, save the response data in the `beer` state variable so that it displays in the component.


<br>



<details>


  <summary><b>See Expected Result</b></summary>



<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-iron-brewers/Iteration+2.png" height="750px" />
</p>




  <br>

</details>



<br>

----


### Iteration 3 | Create a new beer

In this iteration, you will work on the `AddBeerPage` component in the `src/pages/AddBeerPage.jsx`, which is rendered on the `/new-beer` route.

<br>



The `AddBeerPage` component, which is rendered on the `/new-beer` route, already includes a `form` for creating a new beer, together with state variables and handler functions for the form inputs. You will use them as a starting point for implementing the functionality to create a new beer.

<br>



Your task is to create a submit handler function that will be called when the user *submits* the form. The handler function should make a `POST` request to the API endpoint `https://ih-beers-api2.herokuapp.com/beers/new` to create a new beer.

<br>

When you send the `POST` request, the  **the request `body` fields MUST have the following names**:


| Property Name             | Data Type    |
| ------------------------- | ------------ |
| **`name`**                | String       |
| **`tagline`**             | String       |
| **`description`**         | String       |
| **`image_url`**           | String       |
| **`first_brewed`**        | String       |
| **`brewers_tips`**        | String       |
| ***`attenuation_level`*** | ***Number*** |
| **`contributed_by`**      | String       |

<br>

:exclamation: **Important**: Take a moment to double-check that the fields in the request `body` match the names shown above. If the names don't match, the API will reject the request.

<br>

If everything goes well, you will receive a **200** response from the server. :beer:

The `attenuation_level` value must be set to the correct data type of `number`.  If a `string` is sent instead, the API will respond with a **500** error status code.

<br>



<details>


  <summary><b>See Expected Result</b></summary>



<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-iron-brewers/Iteration+3.gif" height="750px" />
</p>







  <br>

</details>


<br>

----

### Bonus: Iteration 4 | A random beer

In this iteration, you will work on the `RandomBeerPage` component in the `src/pages/RandomBeerPage.jsx`.

<br>



The `RandomBeerPage` component, which is rendered on the `/random-beer` route, should display a random beer retrieved from the Beers API. 

Your task is to make a `GET` request to the endpoint `https://ih-beers-api2.herokuapp.com/beers/random` to get the data of a random beer to display on the page.

<br>



The `RandomBeerPage` component already has a state variable `randomBeer` and is set up to display the beer details. Once you make the `GET` request to the API, save the response data in the `randomBeer` state variable so that it displays in the component.



<br>



<details>


  <summary><b>See Expected Result</b></summary>



<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-iron-brewers/Iteration+4.png" height="750px" />
</p>






  <br>

</details>



<br>

----

### Bonus: Iteration 5 | Filter the beers

As the final feature, your task is to implement a search functionality where users can filter beers based on keywords.

Your task is to implement the functionality to filter the beers by name. In the `AllBeersPage` component, you will find a `SearchBar` component that is rendered above the list of beers. You should use it as a starting point for implementing the search functionality.

Every time the user types a new letter in the search bar, you should make a request to `https://ih-beers-api2.herokuapp.com/beers/search?q={query}`, passing the input value as the `q` param.

<br>



<details>



  <summary><b>See Expected Result</b></summary>



<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-iron-brewers/Iteration+5.gif" height="750px" />
</p>







  <br>

</details>


<br>


<br>

Happy coding! :blue_heart:

<br>

## FAQs


<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>

  <br>

  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 

  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the error: "Cannot find module 'Node.js'". How can I resolve it?</summary>

  <br>

  The error "Cannot find module" in a Node.js application means that the module you are trying to import or use does not exist in your project or cannot be found by Node.js.

  There are a few things you can try to resolve the issue:

  1. **Dependencies are not installed**: Make sure that all dependencies are installed.
      To do this, run the command `npm install` in the root folder of your project.
      This will install all of the dependencies listed in the project's `package.json` file, and ensure that all of the modules that your Node'js application requires are available.

  2. **Module is not installed**: Make sure that the *package* you are trying to use is listed in the project's `package.json` and that it is installed.
      To do this, run the command `npm install <package_name>`, replacing the `<package_name>` with the name of the package.
      This will add the package to the list of dependencies in the `package.json` file, and install it in the project.

  3. **Module is not imported:** Make sure that you've imported the module/package correctly and that the `import` statement is spelled correctly and available in the correct place in your code.

  4. **Wrong file path:** If you are importing another file as a module, make sure that the file you are trying to *import* is located in the correct folder and that you are using the correct file path.

  5. **Wrong module/package name:** Check the spelling of the package name you are trying to import.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the message: "Something is already running at ... Would you like to run the app at another port instead? [Y/n]". What should I do?</summary>

  <br>

  This message means that another process is already using the specified port. This could be another instance of your React app, or it could be another application that is using that port.

  To resolve this, you can change the port your React app is running on by typing Y when prompted. This will kill the process and automatically start the server on another port.

  Another approach is to manually terminate the process using the port in question and then try running the app again.

  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>How do I display an <em>image</em> in a React component?</summary>

  <br>

  To display an image in a React component, you should first `import` the image in the component and then render it. Here is an example of how to do this:

  ```jsx
  import example from "./example.png"; // Import the image file

  function App() {
    return (
      <img src={example} alt="example" /> // Display the image
    )
  }

  export default App;
  ```

  In the above example, the `example` variable is assigned the value of the imported image file. The image is then displayed using the `<img>` element, with the `src` attribute set to the `example` variable.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the warning in my React app:" 'variable' is assigned a value but never used: no-unused-vars". What should I do?</summary>

  <br>

  This warning is a linting error thrown by a linting tool in your React project, and it is warning you that the variable is created, but that it is never being used in your code.

  To resolve this issue, you can either use the variable in your code, or you can simply remove the variable if you don't need it.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the warning: "Each child in a list should have a unique 'key' prop". How can I resolve it?</summary>

  <br>

  The warning *"Each child in a list should have a unique “key” prop"*  means that you are trying to render a list of elements, but one or more elements is missing the `key` prop.

  To fix this, add a `key` prop to each element you return from the `map()` when rendering the list. The key should be a unique identifier for that element, such as an item ID or the id of the document from the database.

  For example, if you have an array of objects with the following structure:

  ```js
  const projects = [
    { id: "127fae", name: "EatBCN", stack: "React, Express" },
    { id: "985afw", name: "Levels", stack: "React, Express" },
    { id: "347eef", name: "IronClub", stack: "React, Java" }
  ];
  ```

  <br>

  Inside your component, you would render the list in the following way:

  ```jsx
  {
    projects.map((el) => {
      return (
        <div key={el.id}>
          <h3>{project.name}</h3>
          <p> Tech Stack: {project.stack} </p>
        </div>
      
    })
  }
  ```

  In the above example, the objects in the `projects` array all have a common property `id`,  which is a unique id string, and therefore we can use it to set the `key` prop.

  When creating lists we must always assign the `key` prop to the outermost (enclosing) element returned from the `map()`, in this case the `div`. We are setting the `key` prop to each `div` element we render in the list.

  **Important**: You should not use *index* of the `map` as *key*. This is considered an *anti-pattern* that may lead to unpredictable results.

  <br>

  For more information, check: [React Docs - Rendering Lists](https://beta.reactjs.org/learn/rendering-lists#keeping-list-items-in-order-with-key)

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to render a list of elements from an array in a React component?</summary>

  <br>

  To render a list of elements from an array in a React component, you can use the method `map()` to loop over the `projects` array and return JSX elements to be rendered. 

  To render a filtered list, where some items are skipped, you can use the `filter()` method.

  Each element returned should have a *unique* `key` prop assigned to them. It's important to note that the `key` prop should always be assigned to the outermost (enclosing) element returned from the `map()`.

  Here is an example of rendering a list of elements using the `map()` method:

  ```js
const projects = [
    { id: "127fae", name: "EatBCN", stack: "React, Express" },
    { id: "985afw", name: "Levels", stack: "React, Express" },
    { id: "347eef", name: "IronClub", stack: "React, Java" }
  ]

  function ProjectList() {
    return (
      <div>
        {
          projects.map((el) => {
            return (
              <div key={el.id}>
                <h3>{el.name}</h3>
                <p>Tech Stack: {el.stack}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  export default ProjectList;
  ```

  In the above code example, we use `map()` inside of the component to loop over the `projects` array, and for each project, return a `div` element with the `project.name` and the `project.stack` as its contents. 

  Each object in the `projects` array contains a common property `id` which we use as the `key` prop. 

  The `key` prop must be set on the outermost element returned from the `map()`, in this case, the `div` element.

  **Important**: You should not use *index* of the `map` as *key*. This is considered an *anti-pattern* that may lead to unpredictable results.

  For more information, check: [React Docs - Rendering Lists](https://beta.reactjs.org/learn/rendering-lists#keeping-list-items-in-order-with-key) 

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I update a state variable in my React component? How do I use the useState hook in my React component?</summary>

  <br>

  To update a state variable in a React component, you should use the `useState` hook. This hook returns an array with two elements: the **current value** of the state variable and a **function to update it**. Here is an example of how to use `useState` to update the `count` state variable:

  ```jsx
  import { useState } from "react";

  function MyComponent() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    }

    return (
      <div>
        <button onClick={handleClick}> Increment </button>
        <p>Count: {count}</p>
      </div>
    )
  }
  ```

  In the above example, the `handleClick` function is called when the button is clicked, and it updates the `count` state variable by calling the `setCount` function with the new value: `setCount(count + 1)`. 
  The component will re-render every time a state variable gets updated.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I use the <code>useEffect</code> hook in my React component?</summary>

  <br>

  The `useEffect` hook (also called the *Effect Hook*) allows you to run your side effects. Data fetching, setting up a subscription, starting a timer, and manually changing the DOM in React components are all examples of common actions (aka *side effects*) that you may want to set up in your components.

  The `useEffect` hook allows you to run side effects during all three lifecycle phases:

  - **Mounting phase**
  - **Update phase**
  - **Unmounting phase**

  <br>

  ##### Syntax

  The syntax of the `useEffect` is the following:

  ```jsx
  // Actual syntax
  useEffect(() => {}, [])
  ```

  As you can see `useEffect` takes two arguments:

  ```jsx
  // Pseudo code:
  useEffect(didUpdate, dependencyArray)
  ```

  - `didUpdate` - a function containing the code (side effect) we want to run.
  - `dependencyArray` - the array of values that the effect depends on. React watches this array for any change and when a value in this array changes, the effect will run.

  <br>

  ##### `useEffect` - Mounting phase

  We can set the `useEffect` to **run code in the mounting phase**, **only once** right after the component is rendered for the first time. 

  To do so, we use the `useEffect` Hook with the following syntax:

  ```jsx
  // Run the effect only once 
  // during the mounting phase
  
  useEffect(() => {
    // Do something ...
  }, [])
  ```

  The empty array `[]` means that “this effect doesn’t depend on anything”, and will therefore run only once, after the initial render.

  <br>

  ##### `useEffect` - Unmounting phase

  Often, *effects* create resources that need to be cleaned up before the component leaves the screen, such as a subscription or a timer, like in the previous example. Before the component *unmounts*, we should cancel all remaining processes to prevent memory leaks.

  To do this, the function passed to **`useEffect` may return a cleanup function**. Example:

  ```jsx
  useEffect(() => {
    // Do something ...

    // Returned function is known as a "cleanup function",
    // which React will automatically run
    // right before the component is removed from the DOM
    return () => {
      // Perform clean up actions here
    };
    
  }, [])
  ```

  <br>

  ##### `useEffect` - Conditional updates (Update phase)

  The `useEffect` Hook can also be used to run code during the *Update* phase, whenever there is an update of state or props.

  As you may have noticed, `useEffect` takes a second argument `[]` the *dependency array*. A dependency array is used to specify the values that the effect depends on. Additionally, React keeps track of this array to know if it should re-run the effect. Example:

  ```jsx
  useEffect(() => {
    // Do something ...
    
    // Effect will run again if either `a` or `b` change or are updated
  }, [a, b]
  ```

  <br>

  **Important**: Whenever a value specified in the dependency array updates, React re-runs the effect.

  <br>

  For detailed explanation, check the following documentation pages:

  - [React Docs: Synchronizing with Effects](https://beta.reactjs.org/learn/synchronizing-with-effects)
  - [React Docs: `useEffect`](https://beta.reactjs.org/reference/react/useEffect)

  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>I am getting an error: "not defined". How do I fix it?</summary>

  <br>

  The "ReferenceError: variable is not defined" error in JavaScript occurs when you try to access a variable or a function that has not been defined yet or is out of scope. 

  To fix the issue, check that you have defined the variable or function that you are trying to use and double-check the spelling to make sure you are using the correct name.

  In case the variable or a function is defined in another file, make sure that the file has been imported or loaded correctly.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>

  <br>

  There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

  1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

  ```bash
  git add .
  git commit -m "Your commit message"
  git push
  ```

  2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.

    To check which remote repository you have cloned, run the following terminal command from the project folder:

  ```bash
  git remote -v
  ```

  If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.
  Note: You may want to make a copy of the code you have locally, to avoid losing it in the process.

  <br>

  [Back to top](#faqs)

</details>

