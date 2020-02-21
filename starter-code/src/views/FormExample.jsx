import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

import "./Signup.css";

export default class Signup extends Component {
  state = {
    avatarPreviewURL: "",
    avatar: "",
    fullName: "",
    email: "",
    password: "",
    mobile: ""
  };

  setRef = (() => {
    this.avatarInput = React.createRef();
  })(); // IIFE !!!

  updateState = e => {
    if (e.target.name === "avatar") return;
    this.setState({ [e.target.name]: e.target.value });
  };

  simulateInputClick = () => {
    this.avatarInput.current.click();
  };

  handleAvatar = e => {
    this.setState({
      avatar: e.target.files[0]
    });

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        avatarPreviewURL: reader.result
      });
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { avatarPreviewURL } = this.state;

    return (
      <form
        id="signup"
        className="form"
        onChange={this.updateState}
        onSubmit={e => e.preventDefault()}
      >
        <header className="header">
          <div
            className="avatar-preview"
            style={{
              background: avatarPreviewURL ? `url(${avatarPreviewURL})` : "none"
            }}
          ></div>
          <FontAwesomeIcon
            className="icon"
            size="lg"
            onClick={this.simulateInputClick}
            icon={faEdit}
          />
          <input
            type="file"
            ref={this.avatarInput}
            className="is-hidden"
            name="avatar"
            onChange={this.handleAvatar}
          />
        </header>

        <div className="content">
          <h1 className="title">Basic Information</h1>

          <input
            type="text"
            name="fullName"
            className="input"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <h2 className="title">Password and Mobile Number</h2>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <input
            type="tel"
            name="mobile"
            className="input"
            placeholder="Mobile"
          />
          <button className="btn">Sign-up</button>
          <a href="foo" className="link">
            Already an account <i>?</i>
          </a>
        </div>
      </form>
    );
  }
}
