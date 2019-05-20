import React from "react";
import OrderSearchTable from '../OrderSearchTable';
import AdminOrderDetails from './AdminOrderDetails';
import { Container } from "shards-react";
import { connect } from "react-redux";



class AdminOrderList extends React.Component {
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
          this.state.isSearch ? <OrderSearchTable handleSearchState={this.handleSearchState} /> : <AdminOrderDetails order={this.state.selectedOrder} />
        }
      </Container>

    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapActionsToProps = {

}

export default connect(mapStateToProps, mapActionsToProps)(AdminOrderList);
