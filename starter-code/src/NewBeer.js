import React from 'react';
import Navbar from './Navbar';

class NewBeer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* <form>
          <h1>Todo list App</h1>
          <input
            type="text"
            placeholder="Add a new task"
            value={this.state.newTaskText}
            onChange={(e) => this.onNewTaskInpuntChange(e)} />
          <input
            type="button"
            value="Add new task"
            onClick={() => this.addNewTask()} />
        </form> */}
      </React.Fragment>
    )
  }
}

export default NewBeer;