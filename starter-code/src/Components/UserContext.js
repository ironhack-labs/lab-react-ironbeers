import React, { Component } from "react";
const UserContext = React.createContext();

class UserProvider extends Component {
  // Context state
  state = {
    loadStatus: false,
  };

  // Method to update state
  setLoad = (arg) => {
      console.log('entered setload with arg', arg)
    this.setState({
        loadStatus: arg 
  });
}

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
export { UserProvider };
export default UserContext;
