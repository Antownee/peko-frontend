import React from "react";
import { Link } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

class PlaceOrder extends React.Component {
  constructor(props) {
    super(props);

    //this.teaListItemClickable = this.teaListItemClickable.bind(this);

    this.state = {
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

  //Card clickable callback onClick={siteSelectedCallback}    


  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Place Order" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
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
                      <Badge
                        pill
                        className={`card-post__category bg-${post.categoryTheme}`}
                      >
                        {post.category}
                      </Badge>
                      : ""
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
            <UserAccountDetails />
          </Col>
        </Row>
      </Container>
    )
  }

}
export default PlaceOrder;
