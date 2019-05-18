import React from "react";
import OrderDetails from "./OrderDetails";
import OrderSearchTable from './OrderSearchTable';
import { Container } from "shards-react";
import { connect } from "react-redux";


class UserOrderList extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchState = this.handleSearchState.bind(this);

    this.state = {
      value: 0,
      previous: 0,
      isSearch: false,
      orders: [],
      selectedOrder: {}

    }
  }

  componentDidMount() {
    this.setState({
      isSearch: true
    })
  }

  handleSearchState(searchState, selectedRow) {
    this.setState({
      isSearch: !searchState,
      selectedOrder: selectedRow
    })

  }

  render() {
    return (
      <Container fluid className="main-content-container">
        {
          this.state.isSearch ? <OrderSearchTable handleSearchState={this.handleSearchState} /> : <OrderDetails order={this.state.selectedOrder} />
        }
      </Container>

    )
  }
}

const mapStateToProps = state => {
  const { user } = state.authentication;
  return {
    user: user.data
  };
}

export default connect(mapStateToProps)(UserOrderList);
