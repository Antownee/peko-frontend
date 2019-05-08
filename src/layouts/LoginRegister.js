import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import "../assets/steps.css"


const LoginRegisterLayout = ({ children }) => (
  <Container fluid>
    <Row>
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {children}
      </Col>
    </Row>
  </Container>
);

export default LoginRegisterLayout;
