import React from 'react';
import {color} from '../../../utils'

import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend,
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

const LineChart1 = React.createClass({
  render() {
    return (
      <div>
        <ResponsiveContainer minHeight={360}>
          <LineChart
            data={data}
            margin={{
              top: 25,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >

            <CartesianGrid strokeDasharray="1 1" />
            <Tooltip />
            <Legend />
            <XAxis hide={true} dataKey="name" />
            <Line
              type="monotone"
              dataKey="Acceleration"
              stroke={color.brillant_azure} strokeWidth="5"
              activeDot={{
                r: 8,
              }}
            />
            <Line type="monotone" dataKey="Roadholding" stroke={color.desire} strokeWidth="5" />
            <Line type="monotone" dataKey="Economy" stroke={color.stil_de_gran_yellow} strokeWidth="5" />

          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
});

export default LineChart1;
