import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Row,
  Col,
  FormSelect
} from "shards-react";

const TopReferrals = ({ title, referralData }) => (
  <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Details</h6>
              </CardHeader>
            </Card>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Last 5 orders made</h6>
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
                      <td>
                        <a href="http://google.com">
                          CertificateOfInspection12032018.pdf
                        </a>
                      </td>
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
);

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

TopReferrals.defaultProps = {
  title: "Top Referrals",
  referralData: [
    {
      title: "GitHub",
      value: "19,291"
    },
    {
      title: "Stack Overflow",
      value: "11,201"
    },
    {
      title: "Hacker News",
      value: "9,291"
    },
    {
      title: "Reddit",
      value: "8,281"
    },
    {
      title: "The Next Web",
      value: "7,128"
    },
    {
      title: "Tech Crunch",
      value: "6,218"
    },
    {
      title: "YouTube",
      value: "1,218"
    },
    {
      title: "Adobe",
      value: "1,171"
    }
  ]
};

export default TopReferrals;
