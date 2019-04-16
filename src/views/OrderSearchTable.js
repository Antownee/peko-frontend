import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import PageTitle from "../components/common/PageTitle";

const { SearchBar } = Search;

var selectRow;

class OrderSearchTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: [{
                dataField: 'id',
                text: 'Product ID'
            }, {
                dataField: 'name',
                text: 'Product Name'
            }, {
                dataField: 'price',
                text: 'Product Price'
            }],
            products: [
                {
                    id: 5454,
                    name: 'car',
                    price: 50
                },
                {
                    id: 9986,
                    name: 'shoes',
                    price: 140
                }
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

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Search orders" subtitle="Order Status" className="text-sm-left" />
                </Row>
                <Card>
                    <ToolkitProvider
                        keyField="id"
                        data={this.state.products}
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

export default OrderSearchTable;