import React from "react";
import { Button } from "shards-react";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileRename from 'filepond-plugin-file-rename';
import { authHeader } from '../../redux/helpers';


registerPlugin(FilePondPluginFileRename); //Register plugin

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
        this.setState({
            documentsToSubmit: [],
            labelText: "Choose file..."
        });
    }

    render() {
        const {document, currentOrder} = this.props;
        return (
            <div className="custom-file">
                <FilePond
                    server={
                        process = {
                            url: 'http://localhost:4895/admin/order/documents',
                            headers: { ...authHeader() },
                        }
                    }
                    allowDrop={false}
                    allowReplace={true}
                    labelIdle='<span class="filepond--label-action"> Upload file </span>'
                    fileRenameFunction={(file) => {
                        return `${currentOrder.orderRequestID}_${document.abbrev}${file.extension}`;
                    }
                    }
                    onupdatefiles={(files) => {
                        files[0].setMetadata("documentCode", document.abbrev)
                        files[0].setMetadata("orderID", currentOrder.orderRequestID)
                    }
                    }
                >
                </FilePond>
            </div>
        )
    }
}

export default FileUpload;  