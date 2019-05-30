import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import { connect } from "react-redux";
import Steps, { Step } from "rc-steps"
import { format, parse } from 'date-fns';
import PageTitle from "../../components/common/PageTitle";
import { orderService } from "../../redux/services/order.service";
import { ToastContainer, toast } from 'react-toastify';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import SentDocumentsTable from "../common/SentDocumentsTable";
import { documentHandler } from '../../utils/documentHandler';
import { userUploads, adminUploads } from "../../documents";
import ReceivedDocumentsTable from "../common/ReceivedDocumentsTable";
import ReactPDF from "@react-pdf/renderer";
import MyDocument from "./MyDocument"

class OrderDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: require("../../images/content-management/17.jpg"),
            currentOrder: this.props.order,
            displaySentDocuments: [],
            displayReceivedDocuments: [],
            userUploads: {
                sendDocs: userUploads, //what he is sending
                receivedDocs: adminUploads //what he receives
            },
            adminUploads: {
                sendDocs: userUploads, //what he is sending
                receivedDocs: adminUploads //what he receives
            }
        }
        this.confirmOrder = this.confirmOrder.bind(this);
        this.goBack = this.goBack.bind(this);
        this.loadDocumentTables = this.loadDocumentTables.bind(this);
        this.getDocument = this.getDocument.bind(this);
    }

    componentDidMount() {
        this.loadDocumentTables();
    }

    async loadDocumentTables() {
        //if admin, set your sent and received. if user, set their sent and received
        let received_source = this.props.user.role === "User" ? this.state.userUploads.sendDocs : this.state.adminUploads.sendDocs;
        let sent_source = this.props.user.role === "User" ? this.state.userUploads.receivedDocs : this.state.adminUploads.receivedDocs;

        let received = await documentHandler(received_source, this.state.currentOrder);
        let sent = await documentHandler(sent_source, this.state.currentOrder)

        this.setState({
            displaySentDocuments: this.props.user.role === "Admin" ? sent : received,
            displayReceivedDocuments: this.props.user.role === "Admin" ? received : sent
        });
    }

    confirmOrder() {
        orderService.confirmOrder(this.state.currentOrder, this.props.user)
            .then((res) => {
                toast.success(res);
                let order = Object.assign({}, this.state.currentOrder);
                order["confirmed"] = true;
                return this.setState({ currentOrder: order });
            })
            .catch((e) => {
                toast.error(e.message);
            })
    }

    goBack() {
        //Change state
        this.props.handleSearchState(false);
        this.setState({
            documentsToSubmit: [],
            displayDocuments: [],
            userUploads: {
                sendDocs: [], //what he is sending
                receivedDocs: [] //what he receives
            },
            adminUploads: {
                sendDocs: [], //what he is sending
                receivedDocs: [] //what he receives
            }
        })
    }

    getDocument() {
    }

    render() {
        const { order, user } = this.props;
        const currentOrder = this.state.currentOrder;

        return (
            <Container fluid className="main-content-container">
                {/* Page Header */}
                <ToastContainer />
                <Button className="mt-4" pill onClick={this.goBack}>&larr; Go Back</Button>
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Order status" subtitle="Order Status" className="text-sm-left" />
                </Row>

                {/* Confirmed tab */}
                {
                    currentOrder.confirmed ? <span className="badge badge-success">CONFIRMED</span> : ""
                }

                {
                    user.role === "Admin" && !currentOrder.confirmed ?
                        (<Row>
                            <Col className="mb-4" />
                            <Col className="mb-4">
                                <div
                                    className="bg-primary text-white text-center rounded p-3 "
                                    style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}
                                    onClick={this.confirmOrder}>Confirm order?
                                </div>
                            </Col>
                            <Col className="mb-4" />
                        </Row>)
                        : ""
                }

                <Row>
                    <Col>
                        <CardBody>
                            <Col lg="12" sm="12" className="mb-4" >
                                <Card small className="card-post card-post--aside card-post--1">
                                    <div
                                        className="card-post__image"
                                        style={{ backgroundImage: `url(${this.state.backgroundImage})` }}
                                    >
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title">
                                            <a className="text-fiord-blue" href="#">
                                                {order.orderRequestID}
                                            </a>
                                        </h5>
                                        <p className="card-text d-inline-block mb-3">{order.teaID}</p><br />
                                        <p className="card-text d-inline-block mb-3">{order.notes}</p><br />
                                        <span className="text-muted">{format(order.requestDate, 'MMMM Do, YYYY')}</span>
                                        <div className="mt-4">
                                            {
                                                currentOrder.confirmed ?
                                                    <Button className="mt-8" pill onClick={this.getDocument}>Download order confirmation</Button> : ""
                                            }
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </CardBody>


                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Progress</h6>
                            </CardHeader>
                            <CardBody>
                                <Steps current={2} style={{ marginTop: 10 }}>
                                    <Step title="Start" description="Order placed" />
                                    <Step title="Second" description="Order confirmed awaiting customer to upload documents" />
                                    <Step title="Third" description="Documents uploaded by customer awaiting shipping of cargo" />
                                    <Step title="Fourth" description="Cargo shipped. ETA: 3 months" />
                                </Steps>
                            </CardBody>
                        </Card>

                        {
                            user.role === "User" && !currentOrder.confirmed ?
                                <p>Kindly wait for your order to be confirmed to upload documents</p> :
                                <Card small className="mb-4">
                                    <Tabs>
                                        <TabList>
                                            <Tab>Sent documents</Tab>
                                            <Tab>Received documents</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <SentDocumentsTable
                                                currentOrder={order}
                                                displayDocuments={this.state.displaySentDocuments}
                                                currentOrder={currentOrder}
                                            />
                                        </TabPanel>
                                        <TabPanel>
                                            <ReceivedDocumentsTable
                                                currentOrder={currentOrder}
                                                displayDocuments={this.state.displayReceivedDocuments} />
                                        </TabPanel>
                                    </Tabs>
                                </Card>
                        }

                    </Col>
                </Row>
            </Container>
        )

    }
}

const mapStateToProps = state => {
    const { user } = state.authentication;
    return {
        user: user.data
    };
}

export default connect(mapStateToProps)(OrderDetails);
