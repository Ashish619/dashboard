import createG2 from 'g2-react';
import React from 'react';

const data = [
  {
    Time: '9/1',
    Price: 10,
    name: 'Mercedes',
  }, {
    Time: '9/1',
    Price: 30,
    name: 'Audi',
  }, {
    Time: '9/2',
    Price: 12,
    name: 'Mercedes',
  }, {
    Time: '9/2',
    Price: 32,
    name: 'Audi',
  }, {
    Time: '9/3',
    Price: 11,
    name: 'Mercedes',
  }, {
    Time: '9/3',
    Price: 35,
    name: 'Audi',
  }, {
    Time: '9/4',
    Price: 15,
    name: 'Mercedes',
  }, {
    Time: '9/4',
    Price: 40,
    name: 'Audi',
  }, {
    Time: '9/5',
    Price: 20,
    name: 'Mercedes',
  }, {
    Time: '9/5',
    Price: 42,
    name: 'Audi',
  }, {
    Time: '9/6',
    Price: 22,
    name: 'Mercedes',
  }, {
    Time: '9/6',
    Price: 35,
    name: 'Audi',
  }, {
    Time: '9/7',
    Price: 21,
    name: 'Mercedes',
  }, {
    Time: '9/7',
    Price: 36,
    name: 'Audi',
  }, {
    Time: '9/8',
    Price: 25,
    name: 'Mercedes',
  }, {
    Time: '9/8',
    Price: 31,
    name: 'Audi',
  }, {
    Time: '9/9',
    Price: 31,
    name: 'Mercedes',
  }, {
    Time: '9/9',
    Price: 35,
    name: 'Audi',
  }, {
    Time: '9/10',
    Price: 32,
    name: 'Mercedes',
  }, {
    Time: '9/10',
    Price: 36,
    name: 'Audi',
  }, {
    Time: '9/11',
    Price: 28,
    name: 'Mercedes',
  }, {
    Time: '9/11',
    Price: 40,
    name: 'Audi',
  }, {
    Time: '9/12',
    Price: 29,
    name: 'Mercedes',
  }, {
    Time: '9/12',
    Price: 42,
    name: 'Audi',
  }, {
    Time: '9/13',
    Price: 40,
    name: 'Mercedes',
  }, {
    Time: '9/13',
    Price: 40,
    name: 'Audi',
  }, {
    Time: '9/14',
    Price: 41,
    name: 'Mercedes',
  }, {
    Time: '9/14',
    Price: 38,
    name: 'Audi',
  }, {
    Time: '9/15',
    Price: 45,
    name: 'Mercedes',
  }, {
    Time: '9/15',
    Price: 40,
    name: 'Audi',
  }, {
    Time: '9/16',
    Price: 50,
    name: 'Mercedes',
  }, {
    Time: '9/16',
    Price: 40,
    name: 'Audi',
  }, {
    Time: '9/17',
    Price: 65,
    name: 'Mercedes',
  }, {
    Time: '9/17',
    Price: 38,
    name: 'Audi',
  }, {
    Time: '9/18',
    Price: 45,
    name: 'Mercedes',
  }, {
    Time: '9/18',
    Price: 36,
    name: 'Audi',
  }, {
    Time: '9/19',
    Price: 50,
    name: 'Mercedes',
  }, {
    Time: '9/19',
    Price: 30,
    name: 'Audi',
  }, {
    Time: '9/20',
    Price: 51,
    name: 'Mercedes',
  }, {
    Time: '9/20',
    Price: 29,
    name: 'Audi',
  }, {
    Time: '9/21',
    Price: 65,
    name: 'Mercedes',
  }, {
    Time: '9/21',
    Price: 28,
    name: 'Audi',
  }, {
    Time: '9/22',
    Price: 60,
    name: 'Mercedes',
  }, {
    Time: '9/22',
    Price: 25,
    name: 'Audi',
  }, {
    Time: '9/23',
    Price: 62,
    name: 'Mercedes',
  }, {
    Time: '9/23',
    Price: 28,
    name: 'Audi',
  }, {
    Time: '9/24',
    Price: 65,
    name: 'Mercedes',
  }, {
    Time: '9/24',
    Price: 29,
    name: 'Audi',
  }, {
    Time: '9/25',
    Price: 45,
    name: 'Mercedes',
  }, {
    Time: '9/25',
    Price: 30,
    name: 'Audi',
  }, {
    Time: '9/26',
    Price: 55,
    name: 'Mercedes',
  }, {
    Time: '9/26',
    Price: 40,
    name: 'Audi',
  }, {
    Time: '9/27',
    Price: 59,
    name: 'Mercedes',
  }, {
    Time: '9/27',
    Price: 32,
    name: 'Audi',
  }, {
    Time: '9/28',
    Price: 52,
    name: 'Mercedes',
  }, {
    Time: '9/28',
    Price: 33,
    name: 'Audi',
  }, {
    Time: '9/29',
    Price: 53,
    name: 'Mercedes',
  }, {
    Time: '9/29',
    Price: 34,
    name: 'Audi',
  }, {
    Time: '9/30',
    Price: 40,
    name: 'Mercedes',
  }, {
    Time: '9/30',
    Price: 30,
    name: 'Audi',
  }, {
    Time: '9/31',
    Price: 45,
    name: 'Mercedes',
  }, {
    Time: '9/31',
    Price: 35,
    name: 'Audi',
  },
];
const Line = createG2((chart) => {
  chart
    .line()
    .position('Time*Price')
    .color('name')
    .shape('spline')
    .size(4);
  chart
    .point()
    .position('Time*Price')
    .color('name')
    .shape('name', ['circle', 'rect', 'diamond'])
    .size(8);
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
        margin: [50, 100, 80, 60],
      },
    };
  },
  render() {
    return (
      <div>
        <Line
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
