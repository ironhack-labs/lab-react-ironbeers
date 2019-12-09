import React, { Component, createContext } from 'react';

export const MyContext = createContext();

class MyProvider extends Component {
	state = {
		msg: 'Hola desde el contexto'
	};

	render() {
		const { state, changeMsg } = this;
		return (
			<MyContext.Provider
				value={{
					state,
					changeMsg
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
