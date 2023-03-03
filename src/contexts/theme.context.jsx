//we need to import this from react
import { createContext } from "react";
import { useState, useEffect } from "react";


//common practice to make Context, uppercased, so:
const ThemeContext = createContext();


function ThemeWrapper(props){

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {

        theme === 'light'? setTheme('dark') : setTheme('light');
        
    };


    return  //if we want to send more than one thing through value, in this case, theme AND toggleTheme, we need to put them inside curlies, so we can use them as props, so we get this value={{theme, toggleTheme}}
        <ThemeContext.Provider value={{theme, toggleTheme}}>    
                {props.children}            
        </ThemeContext.Provider>
}

export { ThemeContext, ThemeWrapper };











