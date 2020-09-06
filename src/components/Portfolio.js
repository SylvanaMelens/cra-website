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
  button: {
    margin: "0 auto",
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
        <div style={styles.container}>
          <Typewriter place="portfolio" title="mes réalisations" />
        </div>
        <div className="container container-fluid mt-4">{images}</div>

        <Button
          style={styles.button}
          to="/accueil"
          title="RETOUR A L'ACCUEIL"
        />
      </div>
    );
  }
}
