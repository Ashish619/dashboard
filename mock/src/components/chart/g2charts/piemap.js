import createG2 from 'g2-react';
import {Stat} from 'g2';
import React from 'react';

const data = [
  {
    gender: 'Male',
    count: 40,
    class: 'A Class',
    grade: 'First Grade',
  }, {
    gender: 'FeMale',
    count: 30,
    class: 'A Class',
    grade: 'First Grade',
  }, {
    gender: 'Male',
    count: 35,
    class: 'B Class',
    grade: 'First Grade',
  }, {
    gender: 'FeMale',
    count: 45,
    class: 'B Class',
    grade: 'First Grade',
  }, {
    gender: 'Male',
    count: 20,
    class: 'B Class',
    grade: 'First Grade',
  }, {
    gender: 'FeMale',
    count: 35,
    class: 'C Class',
    grade: 'First Grade',
  }, {
    gender: 'Male',
    count: 30,
    class: 'A Class',
    grade: 'Second Grade',
  }, {
    gender: 'FeMale',
    count: 40,
    class: 'A Class',
    grade: 'Second Grade',
  }, {
    gender: 'Male',
    count: 25,
    class: 'B Class',
    grade: 'Second Grade',
  }, {
    gender: 'FeMale',
    count: 32,
    class: 'B Class',
    grade: 'Second Grade',
  }, {
    gender: 'Male',
    count: 28,
    class: 'C Class',
    grade: 'Second Grade',
  }, {
    gender: 'FeMale',
    count: 36,
    class: 'C Class',
    grade: 'Second Grade',
  },
];

const PieMap = createG2((chart) => {
  chart.coord('theta');
  chart.facet([
    'grade', 'class',
  ], {
    type: 'tree',
    line: {
      stroke: '#00a3d7',
    },
    smooth: true,
  });
  chart
    .intervalStack()
    .position(Stat.summary.percent('count'))
    .color('gender'); //
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
        margin: [10, 100, 50, 150],
      },
    };
  },
  render() {
    return (
      <div>
        <PieMap
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
