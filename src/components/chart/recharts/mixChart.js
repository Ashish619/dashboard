import React from 'react';
import {color} from '../../../utils'

import {
    ComposedChart, Line, Area, Bar, XAxis, CartesianGrid, Tooltip, Legend,
    ResponsiveContainer,
} from 'recharts';
const data = [
  {
    name: 'Mercedes',
    Roadholding: 5,
    Acceleration: 8,
    Economy: 6,
  }, {
    name: 'Audi',
    Roadholding: 3,
    Acceleration: 2,
    Economy: 5,
  }, {
    name: 'Bmw',
    Roadholding: 8,
    Acceleration: 7,
    Economy: 4,
  }, {
    name: 'Renault',
    Roadholding: 6,
    Acceleration: 6,
    Economy: 8,
  }, {
    name: 'Opel',
    Roadholding: 1,
    Acceleration: 6,
    Economy: 12,
  }, {
    name: 'Volvo',
    Roadholding: 9,
    Acceleration: 7,
    Economy: 5,
  }, {
    name: 'Ford',
    Roadholding: 10,
    Acceleration: 3,
    Economy: 4,
  },
];

const MixChart1 = React.createClass({
  render() {
    return (
      <div>
        <ResponsiveContainer minHeight={450}>
          <ComposedChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 25,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >
            <XAxis dataKey="name" />

            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="Economy" fill={color.stil_de_gran_yellow} stroke={color.brillant_azure} />
            <Bar dataKey="Acceleration" barSize={10} fill={color.desire} />
            <Line type="monotone" dataKey="Roadholding" stroke={color.brillant_azure} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  },
});

export default MixChart1;
