import React from "react";
import PropTypes from "prop-types";
const signup = props => {
  return (
    <React.Fragment>
      <h3>Signup page!</h3>
    </React.Fragment>
  );
};

signup.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string
};

export default signup;
