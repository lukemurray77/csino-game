import React, {Component} from 'react';
import Sparkline from 'react-sparkline';


class SparklineChart extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    const color = this.props.sparklineData[this.props.sparklineData.length - 1];
    let strokeColor;
    if (color > 0) {
      strokeColor = 'white';
    } else {
      strokeColor = 'red';
    }
    console.log(strokeColor);
    const sparklineData = this.props.sparklineData ? this.props.sparklineData : [100];

    return (
      <div>
        <Sparkline
          width={700}
          height={200}
          strokeColor={strokeColor}
          data={sparklineData}
        />
      </div>
    );

  }
}

export default SparklineChart;
