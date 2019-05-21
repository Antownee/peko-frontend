import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, ListGroup, ListGroupItem } from "shards-react";
import { parse } from "date-fns";
import { connect } from "react-redux";
import Steps, { Step } from "rc-steps"
import PageTitle from "../../components/common/PageTitle";
import { orderService } from "../../redux/services/order.service";
import { ToastContainer, toast } from 'react-toastify';
import CustomFileUpload from "../../components/components-overview/CustomFileUpload";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { clientUploads, cojUploads } from "../../documents";
import { SentDocumentsTable, ReceivedDocumentsTable } from "./AdminOrderDocumentTable";


class AdminOrderDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: require("../../images/content-management/17.jpg"),
            currentOrder: this.props.order,
            documentsToSubmit: []
        }
        this.confirmOrder = this.confirmOrder.bind(this);
        this.handlesubmitDocuments = this.handlesubmitDocuments.bind(this);
        this.submitDocuments = this.submitDocuments.bind(this);
    }

    confirmOrder() {
        orderService.confirmOrder(this.state.currentOrder)
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

    handlesubmitDocuments(document, id) {
        //This function receives the files from the CustomFileUpload component
        const doc = {
            document,
            id
        }
        this.setState(state => {
            const documentsToSubmit = state.documentsToSubmit.concat(doc);
            return {
                documentsToSubmit
            }
        })
    }

    submitDocuments() {
        orderService.adminUploadDocuments(this.state.documentsToSubmit, this.state.currentOrder.orderRequestID)
            .then((res) => {
                toast.success(res.msg); //Successful document upload
                return this.setState({ documentsToSubmit: [] });
            })
            .catch((e) => {
                toast.error("Try again later");
            })
    }

    render() {
        const { order, user } = this.props;
        const currentOrder = this.state.currentOrder;
        return (
            <Container fluid className="main-content-container">
                {/* Page Header */}
                <ToastContainer />
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Admin Order status" subtitle="Admin Order Status" className="text-sm-left" />
                </Row>

                {/* Confirmed tab */}
                {
                    currentOrder.confirmed ? <span class="badge badge-success">CONFIRMED</span> : ""
                }

                {
                    !currentOrder.confirmed ?
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
                        :
                        ""
                }



                {/* Default Light Table */}
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
                                        <span className="text-muted">{order.requestDate}</span>
                                    </CardBody>
                                </Card>
                            </Col>
                        </CardBody>

                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Progress</h6>
                            </CardHeader>
                            <CardBody>
                                <Steps current={3} style={{ marginTop: 40 }}>
                                    <Step title="Start" description="Samples dipatched" />
                                    <Step title="Second" description="Documents with Cup of Joe" />
                                    <Step title="Third" description="Documents on client server" />
                                    <Step title="Fourth" description="Tea enroute" />
                                </Steps>
                            </CardBody>
                        </Card>

                        <Card small className="mb-4">
                            <Tabs>
                                <TabList>
                                    <Tab>Sent documents</Tab>
                                    <Tab>Received documents</Tab>
                                </TabList>

                                <TabPanel>
                                    <SentDocumentsTable documents={cojUploads} handlesubmitDocuments={this.handlesubmitDocuments} />
                                    <Button onClick={this.submitDocuments} className="m-3">Submit documents</Button>
                                </TabPanel>
                                <TabPanel>
                                    <ReceivedDocumentsTable documents={clientUploads} />
                                </TabPanel>
                            </Tabs>
                        </Card>

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

export default connect(mapStateToProps)(AdminOrderDetails);
