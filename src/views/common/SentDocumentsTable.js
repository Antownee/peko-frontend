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

        this.documentHandler = this.documentHandler.bind(this);
    }

    componentDidMount() {
        const { user } = this.props;

        //Modify state to reflect if document has been submitted (if it exists)
        this.documentHandler(user);

        var f = this.state;
        //Display tables using modified state
        this.setState({
            documents: user.role === "User" ? this.state.clientUploads : this.state.cojUploads
        })

    }

    // MAKE THIS FUNCTION PROMISE BASED SUCH THAT WE RUN THE STATE SETTING AFTER THE FUNCTION IS DONE
    //ALSO RETURN THE ARRAY
    async documentHandler(user) {

        //Loop through documents getting the document code
        const d = user.role === "User" ? this.state.clientUploads : this.state.cojUploads;
        const docs = await this.dochandler(d);

        //once done, set newDocs as the documents state
        let documents = Object.assign({}, this.state.documents);
        documents = docs
        this.setState({ documents });
    }

    dochandler(docs) {
        return new Promise((resolve, reject) => {
            const { user, currentOrder } = this.props;

            if (currentOrder.documents) {
                const nudoc = docs;
                docs.map((idoc) => {
                    currentOrder.documents.map((odoc) => {
                        const code = (odoc.path.split('_', 2)[1]).split('.', 1)[0];

                        let updateddoc = nudoc.find((d) => { return d.abbrev === code })
                        updateddoc.submitted = true;
                        updateddoc.path = odoc.path;
                    })
                    resolve(nudoc);
                })
            }
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
                                            <span className="badge badge-success">SUBMITTED</span> :
                                            <span className="badge badge-danger">NOT SUBMITTED</span>
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