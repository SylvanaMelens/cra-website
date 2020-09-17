/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from "react";
import Card from "../containers/Card";
import images from "../ListPortfolio";
import Typewriter from "../containers/Typewriter";
import Button from "../containers/Button";

const styles = {
  container: {
    display: "flex",
    width: "11em",
  },
};

export default class Portfolio extends Component {
  state = {
    ...images,
  };

  render() {
    const images = Object.keys(this.state).map((image) => (
      <Card key={image} details={this.state[image]} />
    ));
    return (
      <div>
        <div className="text-right">
          <Button to="/" title="RETOUR A L'ACCUEIL" />
        </div>
        <div style={styles.container}>
          <Typewriter place="portfolio" title="mes réalisations" />
        </div>{" "}
        <div className="container container-fluid mt-1">{images}</div>
      </div>
    );
  }
}
