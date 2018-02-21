import React from 'react'
import styles from './composedChart.less'
import { color } from '../../utils'
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function ChartComposed(props) {
  if (props.loading) { return null; }
  else {
    return (
      <div className={styles.sales}>
        <ResponsiveContainer minHeight={360}>
          <ComposedChart data={props.data}>
            <Legend verticalAlign='top'
              content={props => {

                const { payload } = props
                return <ul className={styles.legend + ' clearfix'}>
                  {payload.map((item, key) => <li key={key}><span className={styles.radiusdot} style={{ background: item.color }} />{item.value}</li>)}
                </ul>
              }} />
            <XAxis dataKey='name' axisLine={{ stroke: color.borderBase, strokeWidth: 1 }} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <CartesianGrid vertical={false} stroke={color.borderBase} strokeDasharray='3 3' />
            <Tooltip
              wrapperStyle={{ border: 'none', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)' }}
              content={content => {
                const list = content.payload.map((item, key) => <li key={key} className={styles.tipitem}><span className={styles.radiusdot} style={{ background: item.color }} />{item.name + ':' + item.value}</li>)
                return <div className={styles.tooltip}><p className={styles.tiptitle}>{content.label}</p><ul>{list}</ul></div>
              }} />
            <Bar type='monotone' dataKey='visitors' barSize={25} fill={color.blue} />
            <Line type='monotone' dataKey='exitIntents' stroke={color.red} strokeWidth={3} dot={{ fill: color.red }} activeDot={{ r: 5, strokeWidth: 0 }} />
            <Line type='monotone' dataKey='leadsGenerated' stroke={color.green} strokeWidth={3} dot={{ fill: color.green }} activeDot={{ r: 5, strokeWidth: 0 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default ChartComposed
