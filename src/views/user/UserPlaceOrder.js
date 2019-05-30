import React from "react";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../../components/common/PageTitle";
import OrderInputDetails from "../OrderInputDetails";
import { orderService } from '../../redux/services/order.service';

class UserPlaceOrder extends React.Component {
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
      teaID: '',
      userID: '',
      selectedTeaItem: {},
      submitted: false,
      teaList: [
        {
          backgroundImage: require("../../images/content-management/17.jpg"),
          title: "Black Tea",
          body:
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          teaID: "COJ-CHAI-002",
        },
        {
          backgroundImage: require("../../images/content-management/17.jpg"),
          title: "Green Tea",
          body:
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          teaID: "COJ-CHAI-003",
        },
        {
          backgroundImage: require("../../images/content-management/17.jpg"),
          title: "Yellow Tea",
          body:
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          teaID: "COJ-CHAI-004",
        },
        {
          backgroundImage: require("../../images/content-management/17.jpg"),
          title: "White Tea",
          body:
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          teaID: "COJ-CHAI-005",
        }
      ],
    }


  }

  teaListItemClickable(index) {
    const teaID = this.state.teaList[index].teaID;
    this.setState({
      teaID: teaID,
      selectedTeaItem: this.state.teaList[index]
    })
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true, selectedTeaItem: {} });
    const { amount, description, teaID } = this.state;
    const { user } = this.props;
    const order = {
      amount,
      description,
      teaID,
      userID: user.userID
    }
    if (amount && description && teaID) {
      orderService.addOrder(order, user)
        .then(
          msg => {
            toast.success(msg);
            this.clearState();
          },
          error => {
            toast.error(error.message);
          }
        );
    }
  }

  clearState() {
    this.setState({
      amount: '',
      description: '',
      teaID: '',
    })
  }

  render() {
    const { amount, description } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        <ToastContainer />
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
            {this.state.teaList.map((tea, idx) => (
              <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>

                <a style={{ cursor: 'pointer' }} onClick={this.teaListItemClickable.bind(this, idx)}>
                  <Card small className="card-post card-post--1">
                    <div
                      className="card-post__image"
                      style={{ backgroundImage: `url(${tea.backgroundImage})` }} 
                    >
                      {
                        this.state.selectedTeaItem.teaID === tea.teaID ?
                          <Badge pill className={`card-post__category bg-warning`}>SELECTED</Badge> : ""
                      }
                    </div>
                    <CardBody>
                      <h5 className="card-title">
                        <a href="#" className="text-fiord-blue">
                          {tea.title}
                        </a>
                      </h5>
                      <p className="card-text d-inline-block mb-3">{tea.body}</p>
                      <span className="text-muted">{tea.teaID}</span>
                    </CardBody>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>

          <Row>
            <Col lg="12">
              <OrderInputDetails
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
  const { user } = state.authentication;
  return {
    user: user.data
  };
}


export default connect(mapStateToProps)(UserPlaceOrder)
