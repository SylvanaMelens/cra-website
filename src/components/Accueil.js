/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from "react";
import colors from "../utils/colors";
import Icons from "../containers/Icons";
import Typewriter from "../containers/Typewriter";
import Text from "../containers/Text";
import Button from "../containers/Button";
import MailButton from "../containers/MailButton";

const styles = {
  content: {
    backgroundColor: colors.bgc,
    display: "flex",
    flexDirection: "column",
    image: {
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    marginBottom: "0.7em",
    paddingBottom: "1.2em",
    paddingTop: "1.9em",
    borderRadius: "1em",
  },
  row: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "1em",
  },
  image: {
    borderRadius: "50%",
    marginBottom: "1em",
    border: "2px dotted",
    borderColor: colors.hover,
  },
  title: {
    color: colors.title,
    letterSpacing: "0.1em",
  },
  subtitle: {
    color: "#999",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
    textDecoration: "underline dotted",
    textDecorationColor: colors.hover,
    fontWeight: "normal",
    letterSpacing: "0.1em",
  },
};

export default class Accueil extends Component {
  state = {
    image: styles.image,
  };

  render() {
    return (
      <div style={styles.content}>
        <div style={styles.content.image}>
          <img
            src="sylvana-melens.jpg"
            style={this.state.image}
            alt="sylvana melens"
          />
        </div>
        <div style={styles.row}>
          <h1 style={styles.title}>SYLVANA MELENS</h1>
          <h2 style={styles.subtitle}>développement web</h2>
          <Typewriter place="accueil" title="Amoureuse du code - Autodidacte" />
          <Icons />
          <Text />
        </div>
        <div className="text-center">
          <Button to="/portfolio" title="VOIR LE PORTFOLIO" />
          <MailButton />
        </div>
      </div>
    );
  }
}
