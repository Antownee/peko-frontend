import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";
import Loading from "../views/common/Loading";

import "../assets/steps.css"


export class AdminLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noNavbar: false,
      noFooter: false,
      isLoading: false
    }
  }

  render() {
    const {children} = this.props;
    const { noNavbar, noFooter, isLoading} = this.state;
    return (
      <Container fluid>
        <Row>
          <MainSidebar />
          <Col
            className="main-content p-0"
            lg={{ size: 10, offset: 2 }}
            md={{ size: 9, offset: 3 }}
            sm="12"
            tag="main"
          >
            {
              isLoading ? <Loading /> :
                <div>
                  {!noNavbar && <MainNavbar />}
                  {children}
                  {!noFooter && <MainFooter />}
                </div>
            }
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AdminLayout;
