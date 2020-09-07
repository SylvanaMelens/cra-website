/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../containers/Card";
import images from "../ListPortfolio";
import Typewriter from "../containers/Typewriter";
import colors from "../utils/colors";

const styles = {
  container: {
    display: "flex",
    width: "11em",
  },
  button: {
    backgroundColor: colors.border,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.title,
    padding: "0.5em",
    textShadow: "2px 2px 75px black",
    borderRadius: "5px",
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
        <div className="container container-fluid mt-1">{images}</div>

        <Link style={styles.button} to="/accueil">
          RETOUR A L'ACCUEIL
        </Link>
      </div>
    );
  }
}
