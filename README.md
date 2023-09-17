![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React IronBeers

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

This exercise allows you to practice and apply the concepts and techniques taught in class.



After completing this exercise, you will be able to:

  - Create a React application that contains multiple pages using React Router.
  - Use React Router `useParams` hook to access the URL parameters.
  - Create a page component that renders content based on URL parameter values.
  - Perform side effects in a component with the `useEffect` hook.
  - Make a `GET` request to an API (backend) and store retrieved data in the component's state.
  - Make a `POST` request to an API (backend) to create a new item on the API.
  - Create controlled components to manage the form inputs.

  <br>
  <hr> 

</details>

<br>

Since beer is one of the most consumed drinks by Ironhackers 🍻 , our mission here is to create an app to showcase some of the best handcrafted beers, but not just that - to save some as well so the rest of Ironhack community is informed 😌. Our end goal is to create something like this:

<div style="display: flex; justify-content: center">
<img src="https://user-images.githubusercontent.com/23629340/45887951-2ca0bb80-bdbd-11e8-91a4-08b66d88a7c7.gif" />
</div>

## Setup

- Fork this repo
- Clone this repo

```shell
cd lab-react-ironbeers-vite
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

We will be building a React app, so the API (backend) needs to be built somewhere for us, right? You are completely right, it's deployed on _Heroku_, and the base URL of the API is:

**`https://ih-beers-api2.herokuapp.com/beers`**



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

### App Overview (frontend)

The **IronBeers** app will include the following features:

- A **Home** page with links to 3 different pages:
  - _All Beers_
  - _Random Beer_
  - _New Beer_
- An **All Beers** page where you should display all the beers
- A **Single Beer** page to display the details of the beer the user clicked on
- A **Random Beer** page to display a Random Beer
- A **New Beer** page to show a form where a user can create new beers

<br>

## Instructions

### Iteration 1 | Setup React Router and Create Routes

The first step is configuring React Router to allow you to create and navigate between different pages in your app:



1. Set up React Router in your `src/main.jsx` file:

```jsx
// src/main.jsx
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
```

<br>

2. In your `App.jsx` set up the routes that render the following pages:

- Route `/`, which renders the `HomePage` component
- Route `/beers`, which renders the `AllBeersPage` component.
- Route `/random-beer`, which renders the `RandomBeerPage` component.
- Route `/new-beer`, which renders the `AddBeerPage` component.
- Route `/beers/:beerId`, which renders the `BeerDetailsPage` component.



<br>



### Iteration 2 | Home Page

Implement the `HomePage` component located in the `src/pages/HomePage.jsx` so that it includes links to the following pages:

- `/beers` - to the "All Beers" page
- `/random-beer` - to the "Random Beer" page
- `/new-beer` - to the "New Beer" page

<br>

Feel free to style the page in any way that you prefer. If you want to follow the below example, you can find the corresponding images in the `src/assets` folder.

<br>

<details>

  <summary><b>See Expected Result</b></summary>



<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40706572-933439b8-63ee-11e8-8d65-538fb59f79ab.png" height="600px" />
</div>



  <br>

</details>



<br>

### Iteration 3 | Navbar

In this iteration, you will work on the `Navbar` component located in `src/components/Navbar.jsx`.

The `Navbar` component should render a `nav` element with a `Link` that, when clicked, navigates to the Home Page (`/`).

The `Navbar` component should be rendered on every page.

<br>

<details>


  <summary><b>See Expected Result</b></summary>



<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" height="100px" />
</div>



  <br>

</details>



<br>



### Iteration 4 | List all the beers

Next, we'll work on the `AllBeersPage` component in the `src/pages/AllBeersPage.jsx`.

The `AllBeersPage` that gets rendered on the route `/beers`, should display a list of all the beers from the API. 



To do this, you need to make a `GET` request to the Beers API endpoint `https://ih-beers-api2.herokuapp.com/beers`. This API endpoint returns an **array of beers**. 

**Hint**: The array of beers is an *array* of *objects*. You should **`console.log`** the response data to help you visualize the structure of the beer objects and how the data is structured.



The list should display the following info for each beer:

- `image`

- `name`

- `tagline`

- `contributed_by`
- **Each beer in the list should include a `Link`** to the beer details page **`/beers/:beerId`** , where `:beerId` is the unique identifier for the beer. 



<br>



<details>


  <summary><b>See Expected Result</b></summary>



<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40706960-96223ade-63ef-11e8-9375-b7b6d091e716.png" height="600px" />
</div>



  <br>

</details>



<br>



### Iteration 5 | Display a single beer

In this iteration, you will work on the `BeerDetailsPage` component in the `src/pages/BeerDetailsPage.jsx`.

When a user clicks on one of the beers in the list on the `AllBeersPage`, they should be navigated to the *Beer Details page* (`BeerDetailsPage`) where details of that specific beer should be shown.

<br>

#### 5.1 | Access URL Parameter

To access URL parameter `beerId` from the browser's URL bar, use the React Router hook `useParams`.

Check [this example](https://reactrouter.com/en/6.10.0/hooks/use-params) if you need a reminder of how to set up the useParams hook and access the URL parameters.

<br>



#### 5.2 | Make a request to the API

To get the beer details, you need to make a `GET` request to the Beers API endpoint `https://ih-beers-api2.herokuapp.com/beers/:id`, where `:id` should be replaced with the id of the selected beer. 

**Example:** [https://ih-beers-api2.herokuapp.com/beers/**5fb6a86265b9c209606e10e2**](https://ih-beers-api2.herokuapp.com/beers/5fb6a86265b9c209606e10e2)

Remember to **`console.log`** the response data to help you visualize the structure of the beer object and how the data is structured.

<br>



#### 5.3 | Display Beer Details

The `BeerDetailsPage` component should display the following information about the selected beer:

- `image`
- `name`
- `tagline`
- `first_brewed`
- `attenuation_level`
- `description`
- `contributed_by`

<br>



<details>


  <summary><b>See Expected Result</b></summary>



<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40707269-84bedd78-63f0-11e8-86c3-b14efb9323a7.png" height="600px" />
</div>



  <br>

</details>



<br>



### Iteration 6 | A random beer

In this iteration, you will work on the `BeerDetailsPage` component in the `src/pages/BeerDetailsPage.jsx`.



When the `RandomBeerPage` component is rendered on the `/random-beer` route, it should show a random beer retrieved from the Beers API. To get the data of a random beer, you need to make a `GET` request to the endpoint `https://ih-beers-api2.herokuapp.com/beers/random`.

<br>

The `RandomBeerPage` component should display the following information about the random (same as in the `BeerDetailsPage`):

- `image`
- `name`
- `tagline`
- `first_brewed`
- `attenuation_level`
- `description`
- `contributed_by`



<br>



<details>


  <summary><b>See Expected Result</b></summary>



<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40707457-05a22990-63f1-11e8-84b2-a86143b7b821.png" height="600px" />
</div>





  <br>

</details>



<br>



### Iteration 7 | Create a new beer

In this iteration, you will work on the `AddBeerPage` component in the `src/pages/AddBeerPage.jsx`.



When the user navigates to the `/new-beer` route in your react app, the `AddBeerPage` component should be rendered, displaying a `form` where the user can create new beers. 

<br>


The `form` should include the following:

- `input`:
  - Label: Name
  - Attributes: `name="name"` and `type="text"`
- `input`:
  - Label: Tagline
  - Attributes: `name="tagline"` and `type="text"`
- `textarea`:
  - Label: Description
  - Attributes: `name="description"` and `type="text"`
- `input`:
  - Label: First Brewed
  - Attributes: `name="first_brewed"` and `type="text"`
- `input`:
  - Label: Brewer's Tips
  - Attributes: `name="brewers_tips"` and `type="text"`
- `input`:
  - Label: Attenuation Level
  - Attributes: `name="attenuation_level"` and **`type="number"`**
- `input`:
  - Label: Contributed By
  - Attributes: `name="contributed_by"` and `type="text"`
- `button`:
  - Text: "Add Beer"
  - Attributes: `type="submit"`

<br>

**Note:** All inputs are of type `text` except `attenuation_level`, which is of type `number`. This is important because the API will only accept the request if all values have the correct data types.

<br>

Once you are done creating the form, make a `POST` request to the API endpoint `https://ih-beers-api2.herokuapp.com/beers/new`, passing all the input values in the request `body` as an object. The fields of the request `body` should have exact **names** so that the API can create a new beer.

If everything goes well, you will receive a **200** response from the server. :beer:

The `attenuation_level` value must be set to the correct data type of `number`.  If a `string` is sent instead, the API will respond with a **500** error status code.

<br>



<details>


  <summary><b>See Expected Result</b></summary>



<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40707877-3c9dad42-63f2-11e8-8c95-4881bbde64a2.png" height="600px" />
</div>





  <br>

</details>





<br>

### Bonus: Iteration 8 | Filter the beers

As the final feature, we will implement a search functionality where users can filter beers based on keywords.

In the `AllBeersPage` component, add an `input` where users can type in their search query. Every time the user types a new letter, you should call to `https://ih-beers-api2.herokuapp.com/beers/search?q={query}`, passing the input value as the `q` param.



**We are done!** :trophy:



Awesome! If you're of legal drinking age and allowed to, feel free to celebrate with a beer! :wink: You've now become a **React Warrior**. Keep practicing, and soon you'll be a React Ninja!

<br>

Happy coding! :heart:

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

