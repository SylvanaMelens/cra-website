import React from "react";
import { Link } from "react-router-dom";

const styles = {
  button: {
    margin: "0 auto",
    width: "10em",
    boxShadow: "0px 5px 30px 2px black",
  },
};
const Button = ({ to, title }) => {
  return (
    <>
      <Link
        style={styles.button}
        to={to}
        className="btn btn-md col-sm-6 btn-light"
      >
        {title}
      </Link>
    </>
  );
};

export default Button;
