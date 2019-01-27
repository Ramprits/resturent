import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
const signup = props => {
  return (
    <Layout>
      <h3>Signup page!</h3>
    </Layout>
  );
};

signup.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string
};

export default signup;
