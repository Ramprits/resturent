import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
const signin = props => {
  return (
    <Layout>
      <h3>signin page!</h3>
    </Layout>
  );
};

signin.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string
};

export default signin;
