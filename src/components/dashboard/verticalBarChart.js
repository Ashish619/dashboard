import React from 'react'
import styles from './verticalBarChart.less'
import { color } from '../../utils'
import { BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function VerticalBarChart(props) {
  if (props.loading) { return null; }
  else {
    const data = props.data;
    const NotAxisTickButLabel = props => {


      return <text height={props.height} fontSize="10px" fill={props.fill} textAnchor={props.textAnchor} width={props.width} x={props.x} y={props.y}>
        {
          <tspan y={props.y + 20}>
            {props.payload.value}
          </tspan>
        }
      </text>


    }

    const NotAxisTickButLabely = props => {
if(props.payload.value.length > 10)
{
  var values = props.payload.value.split(" ");
      return <text height={props.height} fontSize="10px" fill={props.fill} textAnchor={props.textAnchor} width={props.width} x={props.x} y={props.y}>
        {values.map((val, i) => (<tspan y={props.y  +i*10} x={props.x}>
          {val}
        </tspan>))

        }
      </text>
}      
   return <text height={props.height} fontSize="10px" fill={props.fill} textAnchor={props.textAnchor} width={props.width} x={props.x} y={props.y}>
   {
     <tspan >
       {props.payload.value}
     </tspan>
   }
 </text>

    }
    return (
      <div className={styles.sales}>
        <ResponsiveContainer minHeight={360}>
          <BarChart
            data={data}
            layout="vertical"
          >
            <XAxis type="number" tick={<NotAxisTickButLabel angle={0} />} tickLine={false} axisLine={{ stroke: color.borderBase, strokeWidth: 1 }} padding={{ right: 10 }} />
            <YAxis type="category" tick={<NotAxisTickButLabely angle={0} />} dataKey="name" axisLine={{ stroke: color.borderBase, strokeWidth: 1 }} tickLine={false} />
            <CartesianGrid stroke={color.borderBase} strokeDasharray='3 3' />
            <Tooltip />
            <Bar dataKey="visitCount" barSize={25} fill={color.blue} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default VerticalBarChart
