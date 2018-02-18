import createG2 from 'g2-react';
import React from 'react';

const data = [
  {
    term: 'Zombieland',
    count: 9,
  }, {
    term: 'OldBoy',
    count: 8,
  }, {
    term: 'Toy Story',
    count: 8,
  }, {
    term: 'Saving Private Ryan',
    count: 7,
  }, {
    term: 'Ring',
    count: 6,
  }, {
    term: 'Deadpool',
    count: 6,
  }, {
    term: 'Logan',
    count: 4,
  }, {
    term: 'Batman',
    count: 4,
  }, {
    term: 'The Shawshank Redemption',
    count: 2,
  }, {
    term: 'Inception',
    count: 1,
  },
];

const Radial = createG2((chart) => {
  chart.source(data, {
    count: {
      max: 12,
    },
  });
  chart.coord('theta', {inner: 0.2});
  chart
    .interval()
    .position('term*count')
    .color('#009999')
    .shape('line');
  chart
    .point()
    .position('term*count')
    .color('#009999')
    .shape('circle');
  for (let i = 0, l = data.length; i < l; i++) {
    const obj = data[i];
    chart
      .guide()
      .text([
        obj.term, 0,
      ], `${obj.term} `, {textAlign: 'right'});
  }
  chart
    .guide()
    .text([
      -3.5, 0,
    ], 'Movies', {
      textAlign: 'center',
      fontSize: 28,
      fill: '#066',
    });
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
        margin: [50, 10, 10, 10],
      },
    };
  },
  render() {
    return (
      <div>
        <Radial
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
