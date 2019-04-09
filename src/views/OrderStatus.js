import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import Steps, { Step } from "rc-steps"

import PageTitle from "../components/common/PageTitle";

const VALUES = [ /* The date strings go here */];

class OrderStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0 }
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Track order status" subtitle="Order Status" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Details</h6>
              </CardHeader>
              <CardBody>
                <Steps current={3} style={{ marginTop: 40 }}>
                  <Step title="Start" description="Samples dipatched" />
                  <Step title="Second" description="Documents with Cup of Joe" />
                  <Step title= "Third" description="Documents on client server" />
                  <Step title="Fourth" description="Tea enroute" />
                </Steps>
              </CardBody>
            </Card>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Active Users</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                  </th>
                      <th scope="col" className="border-0">
                        First Name
                  </th>
                      <th scope="col" className="border-0">
                        Last Name
                  </th>
                      <th scope="col" className="border-0">
                        Country
                  </th>
                      <th scope="col" className="border-0">
                        City
                  </th>
                      <th scope="col" className="border-0">
                        Phone
                  </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ali</td>
                      <td>Kerry</td>
                      <td>Russian Federation</td>
                      <td>Gdańsk</td>
                      <td>107-0339</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Clark</td>
                      <td>Angela</td>
                      <td>Estonia</td>
                      <td>Borghetto di Vara</td>
                      <td>1-660-850-1647</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Jerry</td>
                      <td>Nathan</td>
                      <td>Cyprus</td>
                      <td>Braunau am Inn</td>
                      <td>214-4225</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Colt</td>
                      <td>Angela</td>
                      <td>Liberia</td>
                      <td>Bad Hersfeld</td>
                      <td>1-848-473-7416</td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    )
  }
}

export default OrderStatus;
