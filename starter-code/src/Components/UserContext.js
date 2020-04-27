import React, { Component } from "react";
const UserContext = React.createContext();

class UserProvider extends Component {
  // Context state
  state = {
    loadStatus: false,
  }

  // Method to update state
  setLoad = loadStatus => {
    this.setState((prevState) => ({ loadStatus }));
  };

  render() {
    const { children } = this.props;
    const { loadStatus } = this.state;
    const { setLoad } = this;

    return (
      <UserContext.Provider
        value={{
          setLoad,
          loadStatus,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserContext;

export { UserProvider };
