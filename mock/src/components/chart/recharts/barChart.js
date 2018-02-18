import React from 'react';
import {color} from '../../../utils'

import {
    BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend,
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

const BarChart1 = React.createClass({
  render() {
    return (
      <div>
        <ResponsiveContainer minHeight={450}>
          <BarChart

            data={data}
            margin={{
              top: 25,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Roadholding" fill={color.brillant_azure} />
            <Bar dataKey="Acceleration" fill={color.desire}/>
            <Bar dataKey="Economy" fill={color.stil_de_gran_yellow}/>

          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  },
});

export default BarChart1;
