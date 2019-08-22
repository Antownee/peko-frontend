import React from 'react';
import { connect } from "react-redux";
import { config } from "../../config";
import { format } from 'date-fns';


class ReceivedDocumentsTable extends React.Component {

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
                                <td>{(document.dateAdded) ? format(document.dateAdded, 'DD/MM/YYYY') : "N/A"}</td>
                                <td>
                                    {
                                        document.submitted ?
                                            <a style={{ display: "table-cell" }}
                                                href={`${config.apiUrl}/admin/order/file?orderID=${orderID}&documentCode=${document.documentCode}`}
                                                target="_blank" rel="noopener noreferrer" >Download
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
    return { user }
}

export default connect(mapStateToProps)(ReceivedDocumentsTable);