import React from "react";
import { Link } from "react-router-dom"

import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  Button,
  Form
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import { orderActions } from '../redux/actions';

class PlaceOrder extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    console.log(dispatch);

    //this.teaListItemClickable = this.teaListItemClickable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      amount: '',
      description: '',
      submitted: false,
      selectedTeaItem: null,
      teaList: [
        {
          index: 0,
          backgroundImage: require("../images/content-management/17.jpg"),
          category: "Selected",
          categoryTheme: "warning",
          title: "Black Tea",
          body:
            "To be brewed in 100 degrees boiling water",
          date: "28 February 2019",
          selected: false
        },
        {
          index: 1,
          backgroundImage: require("../images/content-management/17.jpg"),
          category: "Selected",
          categoryTheme: "warning",
          title: "Green Tea",
          body:
            "To be brewed in 100 degrees boiling water",
          date: "29 February 2019",
          selected: false
        },
        {
          index: 2,
          backgroundImage: require("../images/content-management/17.jpg"),
          category: "Selected",
          categoryTheme: "warning",
          title: "Yellow Tea",
          body:
            "To be brewed in 100 degrees boiling water",
          date: "29 February 2019",
          selected: false
        },
        {
          index: 3,
          backgroundImage: require("../images/content-management/17.jpg"),
          category: "Selected",
          categoryTheme: "warning",
          author: "John James",
          title: "White Tea",
          body:
            "To be brewed in 100 degrees boiling water",
          date: "29 February 2019",
          selected: true
        }
      ],
    }


  }

  teaListItemClickable(index) {
    this.setState({
      selectedTeaItem: index
    })
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    // const { username, password } = this.state;
    // const { dispatch } = this.props;
    // if (username && password) {
    //   dispatch(userActions.login(username, password));
    // }
  }


  render() {
    const { amount, description } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        <Form name="form" onSubmit={this.handleSubmit}>
          <Row noGutters className="page-header py-4">
            <PageTitle title="Place Order" md="12" className="ml-sm-auto mr-sm-auto" />
          </Row>


          <Row>
            <Col lg="12">
              <span style={{ fontSize: "16px" }} className="d-block mb-2 text-muted">
                <strong>Select the blend of tea by clicking on the cards below:</strong>
              </span>
            </Col>
          </Row>
          <Row>
            {this.state.teaList.map((post, idx) => (
              <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>

                <a style={{ cursor: 'pointer' }} onClick={this.teaListItemClickable.bind(this, idx)}>
                  <Card small className="card-post card-post--1">
                    <div
                      className="card-post__image"
                      style={{ backgroundImage: `url(${post.backgroundImage})` }}
                    >
                      {
                        idx === this.state.selectedTeaItem ?
                          <Badge pill className={`card-post__category bg-${post.categoryTheme}`}> {post.category}</Badge> : ""
                      }
                    </div>
                    <CardBody>
                      <h5 className="card-title">
                        <a href="#" className="text-fiord-blue">
                          {post.title}
                        </a>
                      </h5>
                      <p className="card-text d-inline-block mb-3">{post.body}</p>
                      <span className="text-muted">{post.date}</span>
                    </CardBody>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>

          <Row>
            <Col lg="12">
              <UserAccountDetails
                handleChange={this.handleChange}
                amount={amount}
                description={description}
                submitted={this.state.submitted} />
            </Col>
          </Row>
          <Button theme="accent" type="submit">Place Order</Button>
        </Form>
      </Container>
    )
  }

}

function mapStateToProps(state) {

}


export default connect(mapStateToProps)(PlaceOrder)
