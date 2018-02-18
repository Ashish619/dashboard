import createG2 from 'g2-react';
import React from 'react';

const data = [
  {
    country: 'SQL',
    cost: 96,
  }, {
    country: 'SPSS',
    cost: 121,
  }, {
    country: 'Oracle',
    cost: 100,
  }, {
    country: 'Php',
    cost: 111,
  }, {
    country: 'Java',
    cost: 102,
  }, {
    country: 'C#',
    cost: 124,
  }, {
    country: 'Delphi',
    cost: 123,
  }, {
    country: 'Pascal',
    cost: 111,
  }, {
    country: 'Prolog',
    cost: 123,
  }, {
    country: 'C++',
    cost: 109,
  }, {
    country: 'Python',
    cost: 115,
  }, {
    country: 'Ruby',
    cost: 99,
  }, {
    country: 'Basic',
    cost: 91,
  }, {
    country: 'Cobol',
    cost: 87,
  }, {
    country: '.Net',
    cost: 125,
  }, {
    country: 'Arduino',
    cost: 130,
  }, {
    country: 'Objective-C',
    cost: 109,
  }, {
    country: 'Swift',
    cost: 123,
  }, {
    country: 'Linq',
    cost: 91,
  }, {
    country: 'Perl',
    cost: 83,
  }, {
    country: 'Angular',
    cost: 101,
  }, {
    country: 'VB',
    cost: 116,
  }, {
    country: 'Javascript',
    cost: 111,
  }, {
    country: 'React',
    cost: 107,
  },
];

const Pie = createG2((chart) => {
  chart.coord('polar');
  chart.legend('name', {position: 'bottom'});
  chart.axis('cost', {labels: null});
  chart.axis('country', {
    gridAlign: 'middle',
    labels: {
      label: {
        textAlign: 'center',
      },
    },
  });
  chart.legend('country', {
    position: 'bottom',
    itemWrap: true,
  });
  chart
    .interval()
    .position('country*cost')
    .color('country')
    .label('cost', {
      offset: -15,
      label: {
        textAlign: 'center',
        fontWeight: 'bold',
      },
    })
    .style({lineWidth: 1, stroke: '#fff'});
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
        margin: [50, 100, 150, 60],
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
