import React from 'react';
import {color} from '../../../utils'

import {PieChart, Pie, ResponsiveContainer} from 'recharts';
const data01 = [
  {
    name: 'Group A',
    value: 400,
  }, {
    name: 'Group B',
    value: 300,
  }, {
    name: 'Group C',
    value: 300,
  }, {
    name: 'Group D',
    value: 200,
  },
];

const data02 = [
  {
    name: 'A1',
    value: 100,
  }, {
    name: 'A2',
    value: 300,
  }, {
    name: 'B1',
    value: 100,
  }, {
    name: 'B2',
    value: 80,
  }, {
    name: 'B3',
    value: 40,
  }, {
    name: 'B4',
    value: 30,
  }, {
    name: 'B5',
    value: 50,
  }, {
    name: 'C1',
    value: 100,
  }, {
    name: 'C2',
    value: 200,
  }, {
    name: 'D1',
    value: 150,
  }, {
    name: 'D2',
    value: 50,
  },
];

const PieChart1 = React.createClass({
  render() {
    return (
      <div>
        <ResponsiveContainer minHeight={450}>
          <PieChart>
            <Pie data={data01} outerRadius={60} fill={color.stil_de_gran_yellow} />
            <Pie
              data={data02}

              innerRadius={70}
              outerRadius={95}
              fill={color.desire}
              label={true}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  },
});

export default PieChart1;
