import { Button } from "shards-react";
import React from "react";

export const SentDocumentsTable = ({ ...props }) => (
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
                props.documents.map((document, idx) => (
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
                            <AdminFileUpload
                                handlesubmitDocuments={props.handlesubmitDocuments}
                                document={document} />
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
);


export const ReceivedDocumentsTable = ({ documents }) => (
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
                documents.map((document, idx) => (
                    <tr>
                        <td>{document.name}</td>
                        <td>13/06/2018</td>
                        <td>
                            <Button size="sm" theme="primary" className="mb-2 mr-1">
                                Download
                        </Button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
);


class AdminFileUpload extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        documentsToSubmit: [],
        labelText: "Choose file..."
      }
  
      this.submitDocuments = this.submitDocuments.bind(this);
      this.resetState = this.resetState.bind(this);
    }
  
  
    submitDocuments(event) {
      this.setState({ labelText: event.target.files[0].name })
      this.props.handlesubmitDocuments(event.target.files[0], event.target.id);
    }
  
    resetState() {
      this.state({
        documentsToSubmit: [],
        labelText: "Choose file..."
      })
    }
  
    render() {
      const document = this.props.document;
      return (
        <div className="custom-file">
          <input type="file" className="custom-file-input" id={document.abbrev} onChange={this.submitDocuments} />
          <label className="custom-file-label" htmlFor="customFile2">
            {this.state.labelText}
          </label>
        </div>
      )
    }
  }
  
export default AdminFileUpload;  