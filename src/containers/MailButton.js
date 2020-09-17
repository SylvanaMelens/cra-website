import React from "react";
import { Link } from "react-router-dom";

const styles = {
  a: {
    paddingTop: "1.1em",
    paddingBottom: "1.1em",
    boxShadow: "0px 5px 30px 2px black",
  },
};
const MailButton = ({ to, title }) => {
  return (
    <>
      <a
        style={styles.a}
        href="mailto::sylvana.melens@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary ml-3"
      >
        ENVOYER UN MAIL
      </a>
    </>
  );
};

export default MailButton;
