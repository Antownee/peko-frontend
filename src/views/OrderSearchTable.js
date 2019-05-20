import React from "react";
import { Container, Row, Button, Card, CardHeader, CardBody } from "shards-react";
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
                dataField: 'confirmed',
                text: 'Status ',
                formatter: this.statusFormatter
            },{
                dataField: 'orderRequestID',
                text: 'Order ID'
            }, {
                dataField: 'amount',
                text: 'Price (USD)'
            }, {
                dataField: 'requestDate',
                text: 'Date '
            }
            ],
            orders: []
        }


        selectRow = {
            mode: 'radio',
            clickToSelect: true,
            onSelect: (row, isSelect, rowIndex, e) => {
                this.props.handleSearchState(isSelect, this.state.orders[rowIndex]);
            }
        };
    }

    statusFormatter(cell, row) {
        if (row.confirmed) {
            return (<Button size="sm" theme="success" className="mb-2 mr-1">CONFIRMED</Button>)
        } else {
            return (<Button size="sm" theme="warning" className="mb-2 mr-1">PENDING</Button>)
        }
    }

    componentDidMount() {
        //Fetch orders
        const user = this.props.user;
        if (user.role == "Admin") {
            this.getOrdersAdmin();
        }
        if (user.role == "User") {
            this.getOrdersUser();
        }
    }

    getOrdersUser() {
        orderService.getAllByUser(this.props.user)
            .then((orders) => {
                this.setState({
                    orders: orders
                })
            })
    }

    getOrdersAdmin() {
        orderService.getAll()
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
