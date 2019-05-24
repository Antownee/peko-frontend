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

const DashboardOrderTable = ({ title, recentOrders }) => (
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
                Order ID
                  </th>
              <th scope="col" className="border-0">
                Date
                  </th>
              <th scope="col" className="border-0">
                Amount (kg)
                  </th>
            </tr>
          </thead>
          <tbody>
            {
              recentOrders.map((ord, idx) =>
                (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{ord.orderRequestID}</td>
                    <td>{ord.requestDate}</td>
                    <td>{ord.amount}</td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </CardBody>
    </Card>
  </Col>
);


export default DashboardOrderTable;
