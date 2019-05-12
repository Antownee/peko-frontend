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
  FormFeedback,
  FormTextarea,
  Button,
  InputGroup,
  FormInput
} from "shards-react";

class UserAccountDetails extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { handleChange, amount, description, handleSubmit, submitted } = this.props;

    return (
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0"></h6>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Row form>
                  {/* Amount (Kilogrammes) */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feAmount">Amount (Kilogrammes)</label>
                    <FormInput
                      id="feAmount"
                      name="amount"
                      value={amount}
                      placeholder="Amount"
                      type="number"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row form>
                  {/* Notes */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feNotes">Notes (Add any special instructions for your order)</label>
                    <FormTextarea id="feNotes" name="description" value={description} rows="5" onChange={handleChange} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    )
  }

}

export default UserAccountDetails;
