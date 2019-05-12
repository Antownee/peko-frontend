import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { connect } from "react-redux";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import PageTitle from "../components/common/PageTitle";
import { orderService } from "../redux/services/order.service";

const { SearchBar } = Search;

var selectRow;

class OrderSearchTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: [{
                dataField: 'orderRequestID',
                text: 'Order ID'
            }, {
                dataField: 'amount',
                text: 'Price (USD)'
            }, {
                dataField: 'requestDate',
                text: 'Date '
            }],
            orders: [
                // {
                //     orderRequestID: "ORQ-fqcYjEpbY",
                //     amount: '50000',
                //     requestDate: "12/5/2019 08:56AM"
                // }
            ]
        }


        selectRow = {
            mode: 'radio',
            clickToSelect: true,
            onSelect: (row, isSelect, rowIndex, e) => {
                this.props.handleSearchState(isSelect, row);
            }
        };
    }

    componentDidMount() {
        //Fetch orders
        orderService.getAll(this.props.user)
            .then((orders) => {
                this.setState({
                    orders: orders
                })
            })
    }


    render() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Search orders" subtitle="Order Status" className="text-sm-left" />
                </Row>
                <Card>
                    <ToolkitProvider
                        keyField="id"
                        data={this.state.orders}
                        columns={this.state.columns}
                        search
                    >
                        {
                            props => (
                                <div>
                                    <SearchBar {...props.searchProps} className="mt-4 ml-4" />
                                    <hr />
                                    <BootstrapTable
                                        {...props.baseProps}

                                        selectRow={selectRow}
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>
                </Card>
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

export default connect(mapStateToProps)(OrderSearchTable);
