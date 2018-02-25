import React from 'react'
import styles from './verticalBarChart.less'
import { color } from '../../utils'
import { BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function VerticalBarChart(props) {
  if (props.loading) { return null; }
  else {
    const data = props.data;

    return (
      <div className={styles.sales}>
        <ResponsiveContainer minHeight={360}>
          <BarChart
            data={data}
            layout="vertical"
          >
            <XAxis type="number"  tickLine={false}  axisLine={{ stroke: color.borderBase, strokeWidth: 1 }}  padding={{ right: 10 }} />
            <YAxis type="category" dataKey="name" axisLine={{ stroke: color.borderBase, strokeWidth: 1 }}  tickLine={false} />
            <CartesianGrid  stroke={color.borderBase} strokeDasharray='3 3' />
            <Tooltip />
            <Bar dataKey="visitCount" barSize={25} fill={color.blue} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default VerticalBarChart
