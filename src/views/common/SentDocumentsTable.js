import React from "react";
import FileUpload from "./FileUpload";
import { connect } from "react-redux";


class SentDocumentsTable extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { displayDocuments } = this.props;
        return (
            <table className="table mb-0">
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0">
                            Name
                                            </th>
                        <th scope="col" className="border-0">
                            Link
                                            </th>
                        <th scope="col" className="border-0">
                            Date
                                            </th>
                        <th scope="col" className="border-0">
                            Upload document
                                            </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        displayDocuments ?
                        displayDocuments.map((document, idx) => (
                                <tr key={idx}>
                                    <td>{document.name}</td>
                                    <td>
                                        {
                                            document.submitted ?
                                                <span className="badge badge-success">SUBMITTED</span> :
                                                <span className="badge badge-danger">NOT SUBMITTED</span>
                                        }
                                    </td>
                                    <td>13/06/2018</td>
                                    <td>
                                        <FileUpload
                                            document={document}
                                            currentOrder={this.props.currentOrder} />
                                    </td>
                                </tr>
                            )) :
                            <h6 className="card-title">
                                <i className="material-icons">search</i>
                                <a className="text-fiord-blue" href="#">
                                    You cannot view any documents yet because the order is yet to be confirmed.
                                </a>
                            </h6>
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

export default connect(mapStateToProps)(SentDocumentsTable);