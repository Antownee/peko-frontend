import React from "react";
import { Button } from "shards-react";


class FileUpload extends React.Component {
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
        if (event.target.files.length > 0) {
            this.setState({ labelText: event.target.files[0].name })
            this.props.handlesubmitDocuments(event.target.files[0], event.target.id);
        }
    }

    resetState() {
        console.log("Cleared file upload state")
        this.setState({
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
                {/* <Button onClick={this.resetState} className="m-3">reset</Button> */}
            </div>
        )
    }
}

export default FileUpload;  