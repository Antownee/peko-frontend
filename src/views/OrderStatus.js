import React from "react";
import OrderDetails from "./OrderDetails";
import SearchField from "react-search-field";

import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

const VALUES = [ /* The date strings go here */];

class OrderStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      previous: 0,
      isSearch: false
    }
  }

  render() {
    //Conditional rendering. Search bar that then brings up the order status complete with all informantion required
    return (
      // <div>
      //   {
      //     this.state.isSearch ? <SearchField /> : <OrderDetails />
      //   }
      // </div>

      <div>
        <SearchField/>
        <OrderDetails/>
      </div>

    )
  }
}

export default OrderStatus;
