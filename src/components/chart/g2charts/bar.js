import createG2 from 'g2-react';
import React from 'react';
import {Frame} from 'g2';
const data = [
  {
    group: 'All Survey Responses',
    type: 'All Survey Responses',
    total: 565,
    'Strongly Agree': 50.1,
    Agree: 40.7,
    'No Opinion': 4.8,
    Disagree: 3.7,
    'Strongly Disagree': 0.7,
  }, {
    group: 'Employment sector',
    type: 'Academic(nonstudent)',
    total: 253,
    'Strongly Agree': 64.0,
    Agree: 30.8,
    'No Opinion': 3.2,
    Disagree: 2.0,
    'Strongly Disagree': 0.0,
  }, {
    group: 'Employment sector',
    type: 'Business and industry',
    total: 176,
    'Strongly Agree': 40.6,
    Agree: 50.0,
    'No Opinion': 2.8,
    Disagree: 6.3,
    'Strongly Disagree': 0.0,
  }, {
    group: 'Employment sector',
    type: 'Federal, state, and local government',
    total: 71,
    'Strongly Agree': 38.0,
    Agree: 47.9,
    'No Opinion': 7.0,
    Disagree: 4.2,
    'Strongly Disagree': 2.8,
  }, {
    group: 'Employment sector',
    type: 'Private consultant/self-employed',
    total: 28,
    'Strongly Agree': 39.3,
    Agree: 53.6,
    'No Opinion': 7.1,
    Disagree: 0.0,
    'Strongly Disagree': 0.0,
  }, {
    group: 'Employment sector',
    type: 'Other (Including retired, student, not employed, etc.)',
    total: 34,
    'Strongly Agree': 29.4,
    Agree: 44.1,
    'No Opinion': 14.7,
    Disagree: 5.9,
    'Strongly Disagree': 5.9,
  }, {
    group: 'Race',
    type: 'White',
    total: 400,
    'Strongly Agree': 50.0,
    Agree: 41.8,
    'No Opinion': 4.5,
    Disagree: 2.8,
    'Strongly Disagree': 1.0,
  }, {
    group: 'Race',
    type: 'Asian',
    total: 122,
    'Strongly Agree': 53.3,
    Agree: 40.2,
    'No Opinion': 3.3,
    Disagree: 3.3,
    'Strongly Disagree': 0.0,
  }, {
    group: 'Race',
    type: 'Black or African American',
    total: 10,
    'Strongly Agree': 40.0,
    Agree: 30.0,
    'No Opinion': 20.0,
    Disagree: 10.0,
    'Strongly Disagree': 0.0,
  }, {
    group: 'Race',
    type: 'Other',
    total: 17,
    'Strongly Agree': 47.1,
    Agree: 35.3,
    'No Opinion': 5.9,
    Disagree: 11.8,
    'Strongly Disagree': 0.7,
  }, {
    group: 'Education',
    type: "Associate's and Bachelor's",
    total: 175,
    'Strongly Agree': 37.1,
    Agree: 49.1,
    'No Opinion': 5.7,
    Disagree: 6.9,
    'Strongly Disagree': 1.1,
  }, {
    group: 'Education',
    type: "Master's and Above",
    total: 388,
    'Strongly Agree': 55.9,
    Agree: 36.9,
    'No Opinion': 4.4,
    Disagree: 2.3,
    'Strongly Disagree': 0.5,
  }, {
    group: 'Gender',
    type: 'Male',
    total: 356,
    'Strongly Agree': 50.6,
    Agree: 41,
    'No Opinion': 4.2,
    Disagree: 3.4,
    'Strongly Disagree': 0.8,
  }, {
    group: 'Gender',
    type: 'Female',
    total: 200,
    'Strongly Agree': 51.0,
    Agree: 39.0,
    'No Opinion': 6.0,
    Disagree: 3.5,
    'Strongly Disagree': 0.5,
  },
];
let frame = new Frame(data);
const stronglyArr = frame.colArray('Strongly Disagree');
const disagreeArr = frame.colArray('Disagree');
for (let i = 0, l = stronglyArr.length; i < l; i++) {
  stronglyArr[i] = stronglyArr[i] * (-1);
  disagreeArr[i] = disagreeArr[i] * (-1);
}
frame.colReplace('Strongly Disagree', stronglyArr);
frame.colReplace('Disagree', disagreeArr);
frame = Frame.combinColumns(frame, [
  'Disagree', 'Strongly Disagree', 'No Opinion', 'Agree', 'Strongly Agree',
], 'value', 'opinion', ['group', 'type']);
const colorMap = {
  'Strongly Agree': '#3561A7',
  Agree: '#80B2D3',
  'No Opinion': '#D9F0F6',
  Disagree: '#EC7743',
  'Strongly Disagree': '#CB2920',
};
const Bar = createG2((chart) => {
  chart.source(frame, {
    value: {
      tickInterval: 10,
    },
  });
  chart.axis('type', {title: null});
  chart.axis('value', {
    position: 'right',
    title: null,
    tickLine: null,
    formatter(val) {
      return `${val}%`;
    },
  });
  chart.legend({position: 'bottom'});
  chart
        .coord()
        .transpose();
  chart
        .intervalStack()
        .position('type*value')
        .color('opinion', (opinion) => {
          return colorMap[opinion];
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
        margin: [80, 50, 100, 350],
      },
    };
  },
  render() {
    return (
      <div>
        <Bar
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
