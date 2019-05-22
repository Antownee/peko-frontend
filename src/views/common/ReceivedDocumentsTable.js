import React from 'react';
import { Button } from "shards-react";
import { clientUploads, cojUploads } from "../../documents";
import { connect } from "react-redux";

class ReceivedDocumentsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: []
        }
    }

    componentDidMount() {
        const { user } = this.props;
        this.setState({
            documents: user.role === "User" ? cojUploads : clientUploads
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
                            Date
                                            </th>
                        <th scope="col" className="border-0">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.documents.map((document, idx) => (
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