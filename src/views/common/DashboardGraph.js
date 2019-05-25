import React from "react";
import { Card, CardHeader, CardBody, Col } from "shards-react";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryArea } from 'victory';

export default class DashboardGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { historicalPrices } = this.props;
    return (
      <Card small >
        <CardHeader className="border-bottom">
          <h6 className="m-0">Price of tea over the past 5 months</h6>
        </CardHeader>
        <CardBody className="pt-0">

          <VictoryChart
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            height={300}
            width={900}
            scale={{ x: "month" }}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4, 5]}
            />
            <VictoryAxis
              dependentAxis
            // tickFormat specifies how ticks should be displayed
            //tickFormat={(x) => (`$${x / 1000}k`)}
            />
            <VictoryLine
              style={{
                data: { stroke: "#00b8d8" },
                parent: { border: "1px solid #ccc" }
              }}
              data={historicalPrices.reverse()}
              x="month"
              y="price"
            />
          </VictoryChart>
        </CardBody>
      </Card>
    );
  }
}

