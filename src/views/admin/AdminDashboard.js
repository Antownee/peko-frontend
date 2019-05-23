import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { connect } from "react-redux";
import PageTitle from "../../components/common/PageTitle";
import SmallStats from "../../components/common/SmallStats";
import UsersOverview from "../../components/blog/UsersOverview";
import DashboardOrderTable from "../../components/common/DashboardOrderTable";
import { orderService } from "../../redux/services/order.service";


class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfOrders: 0,
      pendingOrders: 0,
      priceOfTea: 0,
      smallStats: this.props.smallStats
    }
  }

  componentDidMount() {
    const { user } = this.props;
    orderService.populateAdminDashboard(user)
      .then((res) => {

        const { smallStats } = this.state;
        //number of orders made
        smallStats[0].value = res.numberOfOrders;
        //pending orders
        smallStats[1].value = res.pendingOrders;

        this.setState({
          smallStats
        })
      })
      .catch((e) => {
        var f = e
      })
  }


  render() {
    const { smallStats } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="ADMIN DASHBOARD " subtitle="ADMIN" className="text-sm-left mb-3" />
        </Row>

        {/* Small Stats Blocks */}
        <Row>
          {smallStats.map((stats, idx) => (
            <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
              <SmallStats
                id={`small-stats-${idx}`}
                variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={stats.value}
                increase={stats.increase}
                decrease={stats.decrease}
              />
            </Col>
          ))}
        </Row>

        <Row>
          {/* Users Overview */}
          <Col lg="12" md="12" sm="12" className="mb-4">
            <UsersOverview />
          </Col>
        </Row>

        <Row>
          <Col lg="12" md="12" sm="12" className="mb-4">
            <DashboardOrderTable />
          </Col>
        </Row>

        <Row>
          {/* Users by Device */}
          <Col lg="4" md="6" sm="12" className="mb-4">
          </Col>

          {/* New Draft */}
          <Col lg="4" md="6" sm="12" className="mb-4">
          </Col>

          {/* Discussions */}
          <Col lg="5" md="12" sm="12" className="mb-4">
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

export default connect(mapStateToProps)(AdminDashboard);


AdminDashboard.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

AdminDashboard.defaultProps = {
  smallStats: [
    {
      label: "No. of orders made",
      value: "0",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Pending orders",
      value: "0",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Average auction price of Kenyan tea ($ per kg)",
      value: "2.07",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    }
  ]
};

