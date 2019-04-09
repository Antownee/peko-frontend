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
                  <Step title="Third" description="Documents on client server" />
                  <Step title="Fourth" description="Tea enroute" />
                </Steps>
              </CardBody>
            </Card>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Documents submitted</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                  </th>
                      <th scope="col" className="border-0">
                        Name
                  </th>
                      <th scope="col" className="border-0">
                        Link
                  </th>
                      <th scope="col" className="border-0">
                        Date
                  </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ali</td>
                      <td>
                        <a href="http://google.com">
                          BillOfLading12032018.pdf
                        </a>
                      </td>
                      <td>13/06/2018</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Clark</td>
                      <td>
                        <a href="http://google.com">
                          CertificateOfInspection12032018.pdf
                        </a>
                      </td>
                      <td>17/06/2018</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Jerry</td>
                      <td>CertificateOfInspection120320198.pdf</td>
                      <td>25/06/2018</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Colt</td>
                      <td>
                        <a href="http://google.com">
                          Manifestmain12032018.pdf
                        </a>
                      </td>
                      <td>26/06/2018</td>
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
