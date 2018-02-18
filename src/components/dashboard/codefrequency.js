import React from 'react'
import {
  BarChart, Bar, XAxis,Rectangle, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts'

var d3 = require("d3");

const data = [
  
  {
    name: '12:19',
    amt: 2000
  }, {
    name: '12:20',
    amt: 2500
  }, {
    name: '12.21',
    amt: 3500
  }, {
    name: '12:22',
    amt: 3000
  }, {
    name: '12:23',
    amt: 3250
  }, {
    name: '12:24',
    amt: 1750
  }, {
    name: '12:25',
    amt: 1600
  }
];
const CustomBar = (props) => {
	return (
  	<Rectangle {...props} radius={20} />
  )
}
const SimpleBarChart_2 = React.createClass({
	render () {
  	return (
         <ResponsiveContainer>
    	<BarChart  data={data} stackOffset="silhouette">
       <XAxis dataKey="name" stroke='#EAC435'  />
    
       
       <Bar dataKey="amt" fill="#5ee4a4"  barSize={30} shape={CustomBar}/>
      </BarChart>
      </ResponsiveContainer>
    );
  }
})
export default SimpleBarChart_2