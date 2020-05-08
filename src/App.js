/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */
import React, { Component } from "react";
import "./App.css";
import Presentation from "./components/Presentation";
import CV from "./components/CV";
import Portfolio from "./components/Portfolio";
import Error from "./components/Error";
import NavbarHeader from "./containers/NavbarHeader";
import Footer from "./containers/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("isShow dans app", this.props.isShow);
    this.state = {
      isShow: true,
    };
  }

  handleClick = (e) => {
    this.setState({ isShow: false });
    console.log("click sur accepter");
  };

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div className="container-fluid App-header">
            <NavbarHeader />
            <Switch className="Content">
              <Route exact path="/" component={Presentation} />
              <Route path="/presentation" component={Presentation} />
              <Route path="/cv" component={CV} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="" component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
