import React from 'react'
import styles from './line-chart.less'
import {color} from '../../utils'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

const data = [
      {name: 'Page A', Food: 1000, Clothes: 7500, Electronics: 5000},
      {name: 'Page B', Food: 1600, Clothes: 5000, Electronics: 3500},
      {name: 'Page C', Food: 1700, Clothes: 8200, Electronics: 6800},
      {name: 'Page D', Food: 1200, Clothes: 3000, Electronics: 2000},
      {name: 'Page E', Food: 2600, Clothes: 2000, Electronics: 7200},
      {name: 'Page F', Food: 4200, Clothes: 8600, Electronics: 5300},
      {name: 'Page G', Food: 4000, Clothes: 2300, Electronics: 6600},
];

function SimpleLineChart (props) {
  return (
    <div className={styles.sales}>
      <div className={styles.title}>Yearly Sales</div>
      <ResponsiveContainer minHeight={360}>
        <LineChart data={data}>
          <Legend verticalAlign='top'
            content={props => {
              const { payload } = props
              return <ul className={styles.legend + ' clearfix'}>
                {payload.map((item, key) => <li key={key}><span className={styles.radiusdot} style={{background: item.color}} />{item.value}</li>) }
              </ul>
            }} />
         
          <CartesianGrid vertical={false} stroke={color.borderBase} strokeDasharray='50 3' />
          <Tooltip
            wrapperStyle={{border: '1px solid rgba(0, 0, 0, 0.09)', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)'}}
            content={content => {
              const list = content.payload.map((item, key) => <li key={key} className={styles.tipitem}><span className={styles.radiusdot} style={{background: item.color}} />{item.name + ':' + item.value}</li>)
              return <div className={styles.tooltip}><p className={styles.tiptitle}>{content.label}</p><ul>{list}</ul></div>
            }} />
          <Line type='monotone' dataKey='Food' stroke={color.desire} strokeWidth={5} dot={{fill: color.purple}} activeDot={{r: 5, strokeWidth: 0}} />
          <Line type='monotone' dataKey='Clothes' stroke={color.tumblewedred} strokeWidth={5} dot={{fill: color.red}} activeDot={{r: 5, strokeWidth: 0}} />
          <Line type='monotone' dataKey='Electronics' stroke={color.stil_de_gran_yellow} strokeWidth={5} dot={{fill: color.green}} activeDot={{r: 5, strokeWidth: 0}} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SimpleLineChart
