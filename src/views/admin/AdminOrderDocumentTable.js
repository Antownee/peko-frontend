import { Button } from "shards-react";
import React from "react";
import CustomFileUpload from "../../components/components-overview/CustomFileUpload";



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
                    <tr>
                        <td>{document.name}</td>
                        <td>
                            {
                                document.submitted ?
                                    <a href="http://google.com">
                                        {document.path}.pdf
                                    </a> : <span class="badge badge-danger">NOT SUBMITTED</span>
                            }
                        </td>
                        <td>13/06/2018</td>
                        <td>
                            <CustomFileUpload
                                handlesubmitDocuments={props.handlesubmitDocuments}
                                document={document}
                                resetCustomUploadState={props.resetCustomUploadState} />
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
