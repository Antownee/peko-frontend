import React from 'react';
import { connect } from "react-redux";
import { config } from "../../config";
import { format } from 'date-fns';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';

class ReceivedDocumentsTable extends React.Component {

    render() {
        let orderID = this.props.currentOrder.orderRequestID;
        let displayDocuments = this.props.displayDocuments;
        const { intl } = this.props;

        const messages = defineMessages({
            PFINV: { id: "userorderdetails.proforma-invoice" },
            CMINV: { id: "userorderdetails.commercial-invoice" },
            ORCNF: { id: "userorderdetails.order-confirmation" },
            CRTORG: { id: "userorderdetails.certificate-origin" },
            EXPENT: { id: "userorderdetails.export-entry" },
            CRTINS: { id: "userorderdetails.certificate-of-inspection" },
            PCKLST: { id: "userorderdetails.packing-list" },
            ALSYSCRT: { id: "userorderdetails.analysis-certificate" },
            BOL: { id: "userorderdetails.bill-of-lading" },
            CRTPHY: { id: "userorderdetails.phytosanitary-certificate" }
        })

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
                                <td>{intl.formatMessage(messages[document.documentCode])}</td>
                                <td>{(document.dateAdded) ? format(document.dateAdded, 'DD/MM/YYYY') : "N/A"}</td>
                                <td>
                                    {
                                        document.submitted ?
                                            <a style={{ display: "table-cell" }}
                                                href={`${config.apiUrl}/admin/order/file?orderID=${orderID}&documentCode=${document.documentCode}`}
                                                target="_blank" rel="noopener noreferrer" ><FormattedMessage
                                                id="userorderdetails.label-download"
                                                defaultMessage="Download" />
                                            </a>
                                            :
                                            <FormattedMessage
                                                id="userorderdetails.label-not_available"
                                                defaultMessage="Unavailable" />
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

export default injectIntl(connect(mapStateToProps)(ReceivedDocumentsTable));