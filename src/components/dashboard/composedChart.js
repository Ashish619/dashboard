import React from 'react'
import styles from './composedChart.less'
import { color } from '../../utils'
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

var c = {
  angle: 0,
  fill: "#666",
  height: 30,
  index: 2,
  payload: {
    coordinate: 246.07142857142858,
    index: 2,
    isShow: true,
    tickCoord: 246.07142857142858,
    value: "Feb, 24th"
  },
  stroke: "none",
  textAnchor: "middle",
  verticalAnchor: "start",
  width: 507,
  x: 246.07142857142858,
  y: 331,
}
function ChartComposed(props) {
  if (props.loading) { return null; }
  else {
    const NotAxisTickButLabel = props => {
      let values = props.payload.value.split("-");
      if (values.length == 1) {
        return <text height={props.height} fontSize="10px" fill={props.fill} textAnchor={props.textAnchor} width={props.width} x={props.x} y={props.y}>
          {
            <tspan y={props.y + 20}>
              {props.payload.value}
            </tspan>
          }
        </text>

      }


      return <text height={props.height*values.length} fontSize="10px" fill={props.fill} textAnchor={props.textAnchor} width={props.width} x={props.x} y={props.y}>
        {values.map((val, i) => (<tspan key={i} y={props.y + 10 +i*10} x={props.x}>
          {val}
        </tspan>))

        }
      </text>
    }
    return (
      <div className={styles.sales}>
        <ResponsiveContainer minHeight={360}>
          <ComposedChart data={props.data}>
            <Legend verticalAlign='top'
              content={props => {

                const { payload } = props
                return <ul className={styles.legend + ' clearfix'}>
                  {payload.map((item, key) => <li key={key}><span className={styles.radiusdot} style={{ background: item.color }} />{key == 0 ? 'Visitors' : ((key == 1) ? 'Exit Intents' : 'Leads Generated')}</li>)}
                </ul>
              }} />
            <XAxis dataKey='name' tick={<NotAxisTickButLabel angle={0} />} axisLine={{ stroke: color.borderBase, strokeWidth: 1 }} tickLine={false} />

            <YAxis axisLine={false} tickLine={false} />
            <CartesianGrid stroke={color.borderBase} strokeDasharray='3 3' />
            <Tooltip
              wrapperStyle={{ border: 'none', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)' }}
              content={content => {
                const list = content.payload.map((item, key) => <li key={key} className={styles.tipitem}><span className={styles.radiusdot} style={{ background: item.color }} />{(key == 0 ? 'Visitors' : ((key == 1) ? 'Exit Intents' : 'Leads Generated')) + ':' + item.value}</li>)
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
