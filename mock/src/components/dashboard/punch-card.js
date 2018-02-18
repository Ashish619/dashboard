import React from 'react'
import {
  RadialBarChart, RadialBar, Legend,ResponsiveContainer
} from 'recharts'

const data = [
      {name: 'Cloud', uv: 31.47, pv: 2400, fill: '#2986ff'},
      {name: 'Home', uv: 26.69, pv: 4567, fill: '#01d2b9'},
      {name: 'Triology', uv: 15.69, pv: 1398, fill: '#00c4fa'},
      {name: 'Mergy', uv: 8.22, pv: 9800, fill: '#7c4dff'},
      {name: 'Yichee', uv: 8.63, pv: 3908, fill: '#feb407'},
      {name: 'Brook', uv: 2.63, pv: 4800, fill: '#ed5c21'},
    ];
    
  const style = {
  	top: 340,
  };

const SimpleRadialBarChart = React.createClass({
	render () {
  	return (
        <ResponsiveContainer>
    	<RadialBarChart data={data}>
        <RadialBar minAngle={55} label background clockWise={true} dataKey='uv'/>
        
        <Legend iconSize={15} iconType='star' layout='horizontal' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>
          </ResponsiveContainer>
    );
  }
})
export default SimpleRadialBarChart