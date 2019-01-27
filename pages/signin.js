import React from "react";
import PropTypes from "prop-types";
const signin = props => {
  return (
    <React.Fragment>
      <h3>signin page!</h3>
    </React.Fragment>
  );
};

signin.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string
};

export default signin;
