import { createContext } from "react";

const ApiContext = createContext();

function ApiWrapper(props) {
  const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";
  /* const [theme, setTheme] = useState("light"); */

  /*   const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }; */
  //also uses ThemeProvider as default name in programming
  return (
    <ApiContext.Provider value={{ apiUrl }}>
      {" "}
      {/*value={theme, toggleTheme } */}
      {props.children}
    </ApiContext.Provider>
  );
}

export { ApiContext, ApiWrapper };
