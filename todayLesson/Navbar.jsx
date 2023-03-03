//this is a component
import { NavLink } from "react-router-dom";
    //import the hook and the context itself
import { useContext } from "react";
import { ThemeContext } from "../src/contexts/theme.context";

function NavBar() {
    //this way, we can use the function theme and the option of toggling it around !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    const {toggleTheme, theme} = useContext(ThemeContext);
    

    //this ${value} is comming from the context information where sending from there, specifically, on this line: <ThemeContext.Provider value={'dark'}>
return (   
    <nav className={`Navbar ${theme}`}>
        <NavLink to="/">
            <button>Home</button>
        </NavLink>

        <NavLink to="/apartments/new">
            <button>Add apartments</button>
        </NavLink>
    
        <button onClick={toggleTheme}> {/* and in here, we send the signal to toggle (switch) the theme */}
            {theme === 'Light' ? 'Dark' : 'Light'} mode
        </button>
    </nav>
    

    )
}



