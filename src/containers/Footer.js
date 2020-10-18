/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React from "react";
import colors from "../utils/colors";
import { FaLinkedinIn } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

const styles = {
  copyright: {
    position: "fixed",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    backgroundColor: colors.border,
    paddingTop: "0.5em",
    paddingLeft: "0.5em",
    marginTop: "0.5em",
    border: "1px solid #111",
  },
  text: {
    color: colors.title,
    fontSize: "0.8em",
    fontStyle: "italic",
    paddingTop: "0.5em",
    marginRight: "1em",
  },
  logo: {
    color: colors.title,
    fontSize: "1em",
    marginRight: "1em",
  },
};

const Footer = () => {
  return (
    <div style={styles.copyright} className="container-fluid col-sm">
      <p style={styles.text}>
        Copyright &copy; {new Date().getFullYear()} Sylvana MELENS
      </p>
      <div>
        <a
          style={styles.text}
          href="https://www.linkedin.com/in/sylvana-melens"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          style={styles.logo}
          href="https://github.com/SylvanaMelens"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiGithubBadge />
        </a>
      </div>
    </div>
  );
};

export default Footer;
