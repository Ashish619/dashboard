import React from 'react'
import {color} from '../../utils'

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer} from 'recharts'
import './area-chart.less'

var d3 = require("d3");

const data = [
      {name: 'Page A', uv: 5700, pv: 300, amt: 13200},
      {name: 'Page B', uv: 1000, pv: 1820, amt: 13120},
      {name: 'Page C', uv: 210, pv: 4340, amt: 6010},
      {name: 'Page D', uv: 540, pv: 7910, amt: 2340},
      {name: 'Page E', uv: 2600, pv: 3900, amt: 1200},
      {name: 'Page F', uv: 8300, pv: 300, amt: 900},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
const cardinal = d3.curveCardinal.tension(0.2);

const SimpleAreaChart = React.createClass({
	render () {
  	return (
       <ResponsiveContainer minHeight={360}>
    	 <AreaChart width={600} height={400} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="name"/>
       
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='amt' stroke={color.brillant_azure} fill={color.brillant_azure} fillOpacity={0.9}/>
        <Area type={cardinal} dataKey='uv' stroke={color.desire} fill={color.desire} fillOpacity={0.9}/>
        <Area type='monotone' dataKey='pv' stroke={color.stil_de_gran_yellow} fill={color.stil_de_gran_yellow} fillOpacity={0.9}/>
        
      </AreaChart>
      </ResponsiveContainer>
    );
  }
})
export default SimpleAreaChart