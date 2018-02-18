import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

var d3 = require("d3");

const data = [
  {
    name: '12:18',
    amt: 2200
  },
  {
    name: '12:19',
    amt: 2200
  }, {
    name: '12:20',
    amt: 3000
  }, {
    name: '12.21',
    amt: 4600
  }, {
    name: '12:22',
    amt: 3900
  }, {
    name: '12:23',
    amt: 1200
  }, {
    name: '12:24',
    amt: 5900
  }, {
    name: '12:25',
    amt: 3200
  },
   {
    name: '12:26',
    amt: 4200
  }
];

const SimpleAreaChart = React.createClass({
  render() {
    return (
      <ResponsiveContainer>
        <AreaChart
          width={600}
          height={400}
          data={data}
          margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0
        }}>
         
          <Tooltip coordinate={{ x: 500, y: 1 }}/>
          <Area
            type='monotone'
            dataKey='amt'
            stroke='#ff5892'
            fill='#ff5892'
            fillOpacity={1}  dot={{ stroke: 'white', strokeWidth: 3,r:5 }}/>
        </AreaChart>
      </ResponsiveContainer>
    );
  }
})
export default SimpleAreaChart