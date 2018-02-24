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
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} />
            <CartesianGrid vertical={false} horizontal={false} stroke={color.borderBase} strokeDasharray='3 3' />
            <Tooltip />
            <Bar dataKey="visitCount" barSize={25} fill={color.blue} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default VerticalBarChart
