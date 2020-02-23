import React from "react";

class Newbeer extends React.Component {
  render() {
    console.log("beers.js RENDER: ", this.props);
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Beer name</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="..."
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="..."
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit new beer
          </button>
        </form>
      </div>
    );
  }
}

export default Newbeer;
