import React from "react";
import FileUpload from "./FileUpload";
import { clientUploads, cojUploads } from "../../documents";
import { connect } from "react-redux";


class SentDocumentsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: [],
            clientUploads,
            cojUploads
        }
    }

    componentDidMount() {
        const { user, currentOrder } = this.props;
        const docs = user.role === "User" ? this.state.clientUploads : this.state.cojUploads;

        //Loop through documents getting the document code
        if (currentOrder.documents) {
            docs.map((idoc) => {
                currentOrder.documents.map((odoc) => {

                    const code = (odoc.path.split('_', 2)[1]).split('.', 1)[0];
                    // if (idoc.abbrev === odoc.abbrev) {
                    //     return {
                    //         //return object with a modified submitted field then set that array as state
                    //     }
                    // }
                })
            })
        }


        //Modify state to reflect if document has been submitted (if it exists)

        //Display tables using modified state
        this.setState({
            documents: user.role === "User" ? this.state.clientUploads : this.state.cojUploads
        })

    }

    render() {
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
                        this.state.documents.map((document, idx) => (
                            <tr key={idx}>
                                <td>{document.name}</td>
                                <td>
                                    {
                                        document.submitted ?
                                            <a href="http://google.com">
                                                {document.path}.pdf
                                    </a> : <span className="badge badge-danger">NOT SUBMITTED</span>
                                    }
                                </td>
                                <td>13/06/2018</td>
                                <td>
                                    <FileUpload
                                        handlesubmitDocuments={this.props.handlesubmitDocuments}
                                        document={document}
                                        ref={this.props.fileUploadClearState} />
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

export default connect(mapStateToProps)(SentDocumentsTable);