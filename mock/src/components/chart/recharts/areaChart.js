import React from 'react';
import {color} from '../../../utils'

import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip, Legend,
    ResponsiveContainer,
} from 'recharts';
const data = [
  {
    name: 'Mercedes',
    Roadholding: 1,
    Acceleration: 8,
    Economy: 1,
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

const AreaChart1 = React.createClass({
  render() {
    return (
      <div>
        <ResponsiveContainer minHeight={450}>
          <AreaChart
            data={data}
            margin={{
              top: 25,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >
            <XAxis hide={true} dataKey="name" />

            <CartesianGrid strokeDasharray="1 1" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="Roadholding"
              stackId="1"
              stroke={color.brillant_azure}
              fill={color.brillant_azure}
            />
            <Area
              type="monotone"
              dataKey="Acceleration"
              stackId="1"
              stroke={color.desire}
              fill={color.desire}
            />
            <Area
              type="monotone"
              dataKey="Economy"
              stackId="1"
              stroke={color.stil_de_gran_yellow}
              fill={color.stil_de_gran_yellow}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  },
});

export default AreaChart1;
