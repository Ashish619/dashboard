import createG2 from 'g2-react';
import React from 'react';
import {Stat} from 'g2';

const mapData = require('./data/world-geo.json');

const userData = [];
const features = mapData.features;
for (let i = 0; i < features.length; i++) {
  const name = features[i].properties.name;
  userData.push({
    name,
    value: Math.round(Math.random() * 1000),
  });
}
const Map = createG2((chart) => {
  chart.source(userData, {
    '..long': {
      tickCount: 10,
    },
  });
  chart.coord('map', {
    projection: 'albers',
    basic: [
      0, 0, 0, 60,
    ],
    max: [
      161.89, 120.635,
    ],
    min: [-144.485, -27.666],
  });
  chart.axis('..long', {
    tickLine: null,
    labels: null,
    grid: {
      line: {
        stroke: '#d9d9d9',
        lineWidth: 1,
        lineDash: [2, 2],
      },
    },
  });
  chart.axis('..lant', {
    tickLine: null,
    labels: null,
    line: null,
  });
  chart.legend(false);
  chart
    .polygon()
    .position(Stat.map.region('name', mapData))
    .tooltip('name*value')
    .color('name', (val) => {
      if (val === 'United States of America' | val === 'China' | val === 'Russia' | val === 'Brazil' | val === 'Australia' | val === 'Turkey' | val === 'South Africa') {
        return '#F9815C';
      }
      return '#5479A9';
    });
  chart.render();
});
const MyComponent = React.createClass({
  getInitialState() {
    return {
      userData,
      forceFit: true,
      width: 500,
      height: 700,
      plotCfg: {
        margin: [120, 75, 120, 75],
      },
    };
  },
  render() {
    return (
      <div>
        <Map
          data={this.state.userData}
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
