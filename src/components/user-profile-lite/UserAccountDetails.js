import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  
  FormTextarea,
  Button,
  InputGroup,
  FormInput
} from "shards-react";


const UserAccountDetails = ({ title, userDetails }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          

        </Row>

        <Row>
          <Col>
            <Form>
              <Row form>
                {/* Amount (Kilogrammes) */}
                <Col md="12" className="form-group">
                  <label htmlFor="feAmount">Amount (Kilogrammes)</label>
                  <FormInput
                    id="feAmount"
                    placeholder="Amount"
                    onChange={() => { }}
                  />
                </Col>
              </Row>

              <Row form>
                {/* Notes */}
                <Col md="12" className="form-group">
                  <label htmlFor="feNotes">Notes (Add any special instructions for your order)</label>
                  <FormTextarea id="feNotes" rows="5" />
                </Col>
              </Row>
              <Button theme="accent">Place Order</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Order Details",
  userDetails: {
    name: "Sierra Brooks",
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default UserAccountDetails;
