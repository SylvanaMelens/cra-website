/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from "react";
import Card from "../containers/Card";
import images from "../ListPortfolio";
import Typewriter from "../containers/Typewriter";
import Button from "../containers/Button";
import MailButton from "../containers/MailButton";

const styles = {
  main :{
    display: "flex",
    flexDirection:"column"
  },
  container: {
    display: "flex",
    width: "11em",
  },
  buttons: {
    display: "flex",
    flexFlow: "row wrap",
    alignContent: "space-between",
    marginBottom: "1.5em"
  },
  button: {
    margin: "1em"
  }
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
      <>
      <div style={styles.main}>
        <div className="text-right">
          
        </div>
        <div style={styles.container}>
          <Typewriter place="portfolio" title="mes réalisations" />
        </div>{" "}
        <div className="container container-fluid mt-1">{images}</div>
      </div>
        <div style={styles.buttons}>
          <MailButton style={styles.button} />
          <Button style={styles.button} to="/" title="RETOUR A L'ACCUEIL" />
        </div>
        </>
    );
  }
}
