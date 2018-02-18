import React from 'react'
import {
  Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis,ResponsiveContainer
} from 'recharts'

const data = [
    { subject: 'Math', A: 110, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
];
const TwoLevelPieChart  = React.createClass({
	render () {
  	return (
        <ResponsiveContainer>
      <RadarChart data={data}>
          <Radar name="Mike" dataKey="A" stroke="#2b627e" fill="#2b627e" strokeWidth={5} fillOpacity={0.2}/>
          
          <PolarGrid stroke='#03CEA4' />
         
          <PolarAngleAxis dataKey="subject"  stroke='#EAC435' />
        
        </RadarChart>
          </ResponsiveContainer>
    );
  }
})
export default TwoLevelPieChart 