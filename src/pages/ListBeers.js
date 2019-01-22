import React from "react";
import { getData } from "../lib/getData.js";
import { ListBeersCard } from "../components/ListBeersCard.js";
import { Loader } from "../components/Loader";
import { Input } from "../components/Input.js";

export default class ListBeers extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      query: "",
      notFound: false
    };
  }
  componentDidMount() {
    console.log("Component did mount");
    getData("all").then(data => {
      this.setState({ data });
    });
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  handleSearch(e) {
    if (e.target.value !== "") {
      this.setState({ query: e.target.value }, () => {
        getData(`search?q=${this.state.query}`).then(results => {
          this.setState({ data: results });
        });
      });
    } else {
      this.setState({ query: e.target.value, notFound: false }, () => {
        getData("all").then(data => {
          this.setState({ data });
        });
      });
    }
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <Input
            name="Search beer"
            title="Search"
            inputtype="text"
            placeholder="Type the beer name..."
            value={this.state.query}
            handleChange={e => this.handleSearch(e)}
          />
          <div className="columns is-multiline">
            {this.state.data ? (
              this.state.data.length === 0 ? (
                <div className="section">
                  <article className="message is-danger">
                    <div className="message-header">
                      <p>Not Found</p>
                    </div>
                    <div className="message-body">
                      We don't have this beer, please add it to our DB
                    </div>
                  </article>
                </div>
              ) : (
                this.state.data.map(beer => (
                  <ListBeersCard key={beer._id} beer={beer} />
                ))
              )
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    );
  }
}
