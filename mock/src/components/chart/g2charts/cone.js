import createG2 from 'g2-react';
import React from 'react';

const data = [
  {
    name: 'General Public',
    value: 3500,
  }, {
    name: 'Recongnizes Brand',
    value: 3124,
  }, {
    name: 'Social Media Subscriber',
    value: 1003,
  }, {
    name: 'Prospect Customer',
    value: 252,
  }, {
    name: 'Customer',
    value: 200,
  }, {
    name: 'Loyal/Returning Customer',
    value: 137,
  }, {
    name: 'Brand Evangelist',
    value: 50,
  },
];

const Cone = createG2((chart) => {
  chart.source(data);
  chart.legend('name', {position: 'left'});
  chart
    .coord('rect')
    .transpose()
    .scale(1, -1);
  chart.axis(false);
  chart
    .intervalSymmetric()
    .position('name*value')
    .color('name')
    .shape('pyramid');
  chart.render();
});
const MyComponent = React.createClass({
  getInitialState() {
    return {
      data,
      forceFit: true,
      width: 500,
      height: 500,
      plotCfg: {
        margin: [80, 100],
      },
    };
  },
  render() {
    return (
      <div>
        <Cone
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          forceFit={this.state.forceFit}
          plotCfg={this.state.plotCfg}
        />
      </div>
    );
  },
});

export default MyComponent;
