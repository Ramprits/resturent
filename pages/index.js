import React, { Component } from "react";
import { Button, Alert } from "reactstrap";
import Layout from "../components/Layout";
export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <h2 style={{ textAlign: "center" }}>
            Welcome to Nextjs application worls!
          </h2>
          <Alert color="primary">
            Hello Project is strapi-next with Bootstrap
          </Alert>
          &nbsp; <Button color="primary">Hello from nextjs</Button>
        </Layout>
      </React.Fragment>
    );
  }
}
