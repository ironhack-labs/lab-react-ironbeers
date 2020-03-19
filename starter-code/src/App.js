import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../public/styles/App.css";
import Home from "./Home";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
  align-items: center;
  flex-direction: column-reverse;
`;

export const App = () => {
  return <Home />;
};
