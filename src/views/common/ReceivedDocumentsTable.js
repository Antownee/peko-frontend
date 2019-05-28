import React from 'react';
import { userUploads, adminUploads } from "../../documents";
import { connect } from "react-redux";
import { config } from "../../config";


class ReceivedDocumentsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let orderID = this.props.currentOrder.orderRequestID;
        let displayDocuments = this.props.displayDocuments;
        return (
            <table className="table mb-0">
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0">
                            Name
                </th>
                        <th scope="col" className="border-0">
                            Date
                                            </th>
                        <th scope="col" className="border-0">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        displayDocuments.map((document, idx) => (
                            <tr>
                                <td>{document.name}</td>
                                <td>13/06/2018</td>
                                <td>
                                    {
                                        document.submitted ?
                                            <a style={{ display: "table-cell" }}
                                                href={`${config.apiUrl}/admin/order/file?orderID=${orderID}&documentCode=${document.documentCode}`}
                                                target="_blank">Download
                                            </a>
                                            :
                                            <p>Not available</p>
                                    }

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        )
    }
}

const mapStateToProps = state => {
    const { user } = state.authentication;
    return {
        user: user.data
    };
}

export default connect(mapStateToProps)(ReceivedDocumentsTable);