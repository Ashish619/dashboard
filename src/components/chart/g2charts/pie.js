import createG2 from 'g2-react';
import {Stat} from 'g2';
import React from 'react';


const data = [
  {
    name: 'Internet Explorer',
    value: 10,
  }, {
    name: 'Chrome',
    value: 60,
  }, {
    name: 'Firefox',
    value: 20,
  }, {
    name: 'Safari',
    value: 5,
  }, {
    name: 'Opera',
    value: 3,
  }, {
    name: 'Other',
    value: 2,
  },
];

const Pie = createG2((chart) => {
  chart.coord('theta', {
    radius: 0.8,
  });
  chart.legend('name', {position: 'bottom'});
  chart.tooltip({
    title: null,
    map: {
      value: 'value',
    },
  });
  chart
        .intervalStack()
        .position(Stat.summary.percent('value'))
        .color('name')
        .label('name*..percent', (name, percent) => {
          percent = `${(percent * 100).toFixed(2)}%`;
          return `${name} ${percent}`;
        });
  chart.render();
});

const MyComponent = React.createClass({

  getInitialState() {
    return {
      data,
      forceFit: true,
      width: 500,
      height: 600,
      plotCfg: {
        margin: [50, 100, 80, 60],
      },
    };
  },

  render() {
    return (
      <div>
        <Pie
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
