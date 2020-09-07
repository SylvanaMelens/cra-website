/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from "react";
import CardCertificate from "../containers/CardCertificate";
import images from "../ListCertifications";

const styles = {
  container: {
    display: "flex",
    width: "11em",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
  }
};

export default class Portfolio extends Component {
  state = {
    ...images,
  };

  render() {
    const images = Object.keys(this.state).map((image) => (
      <CardCertificate key={image} details={this.state[image]} />
    ));
    return (
      <div>
        <h1 style={styles.h1}>Certificates</h1>
        <div style={styles.container}> </div>
        <div style={styles.title} className="certif-container container-fluid">{images}</div>
      </div>
    );
  }
}
