import createG2 from 'g2-react';
import React from 'react';
import {Stat} from 'g2';

const mapData = require('./data/usa-geo.json');
const data = require('./data/usa.json');

const map = [];
const features = mapData.features;
for (let i = 0; i < features.length; i++) {
  const name = features[i].properties.name;
  map.push({name});
}
const Map = createG2((chart) => {
  chart.source(map);
  chart.legend(false);
  chart
    .polygon()
    .position(Stat.map.region('name', mapData))
    .color('#e6e6e6')
    .style({stroke: '#999', lineWidth: 1});
  const view = chart.createView();
  view.source(data);
  view
    .polygon()
    .position(Stat.map.region('State', mapData))
    .color('Population', '#e5f5e0-#31a354');
  view
    .point()
    .position(Stat.map.center('State', mapData))
    .size(0)
    .label('code', {offset: 0});
  chart.render();
});
const MyComponent = React.createClass({
  getInitialState() {
    return {
      data,
      forceFit: true,
      width: 500,
      height: 800,
      plotCfg: {
        margin: [80, 20, 80, 20],
      },
    };
  },
  render() {
    return (
      <div>
        <Map
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
