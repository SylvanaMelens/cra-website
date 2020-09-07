import React from "react";
import { Link } from "react-router-dom";

const styles = {
  button: {
    margin: "0 auto",
    width: "10em",
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
