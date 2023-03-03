import { createContext } from 'react';

const ApiContext = createContext();

function ApiWrapper(props) {
	//can also be called ThemeProvider

	const apiUrl = "https://ih-beers-api2.herokuapp.com/beers/"

	return (
		<ApiContext.Provider value={{ apiUrl }}>
			{props.children}
		</ApiContext.Provider>
	);
}

export { ApiContext, ApiWrapper };
