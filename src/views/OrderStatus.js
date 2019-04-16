import React from "react";
import OrderDetails from "./OrderDetails";
import OrderSearchTable from './OrderSearchTable';
import { Container } from "shards-react";


class OrderStatus extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchState = this.handleSearchState.bind(this);

    this.state = {
      value: 0,
      previous: 0,
      isSearch: false,

    }
  }

  componentDidMount() {
    this.setState({
      isSearch: true
    })

  }

  handleSearchState(searchState, selectedRow){
    console.log(selectedRow);
    this.setState({
      isSearch: !searchState
    })

  }

  render() {
    return (
      <Container fluid className="main-content-container">
        {
          this.state.isSearch ? <OrderSearchTable handleSearchState={this.handleSearchState} /> : <OrderDetails />
        }
      </Container>

    )
  }
}

export default OrderStatus;
