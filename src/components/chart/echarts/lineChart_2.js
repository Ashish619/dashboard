import React from 'react';
import ReactEcharts from 'echarts-for-react';
const LineChart2 = React.createClass({
  propTypes: {
  },
  getOtion() {
    const option = {
      backgroundColor: '#403F4C',
      title: {
        text: 'Products Chart',
        left: 'center',
        top: '3%',
        textStyle: {
          color: '#ffd285',
        },
      },
      tooltip: {
        trigger: 'asix',
        axisPointer: {
          lineStyle: {
            color: '#ddd',
          },
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
          color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)',
      },
      legend: {
        right: 20,
        orient: 'horizontal',
        data: ['Arsenal', 'Dortmund'],
        textStyle: {
          color: '#ffffff',
        },
      },
      grid: {
        show: false,
        containLabel: true,
        left: '10',
        right: '50',
        top: '100',
        bottom: '10',

      },
      xAxis: {
        show: true,
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
        axisLine: {
          show: false,
          lineStyle: {
            color: '#e22f0e',
          },
        },
        axisLabel: {
          show: false,

        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#fff',
            type: 'dotted',
          },
        },
      },
      yAxis: {
        show: true,
        axisLine: {
          show: false,
          lineStyle: {
            color: '#e22f0e',
          },
        },
        axisLabel: {
          show: false,

        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#fff',
            type: 'dotted',
          },
        },

      },
      series: [{
        name: 'Arsenal',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: ['0', '45000', '30000', '51000', '80000', '42000', '66500', '52300', '79500', '62410', '54800', '42500', '0'],
        areaStyle: {
          normal: {
            color: '#af6d65',
            opacity: 0.8,
          },
        },
        lineStyle: {
          normal: {
            opacity: 0,
          },
        },

      }, {
        name: 'Dortmund',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: ['0', '32000', '15000', '69000', '26000', '88000', '54000', '45800', '69041', '55159', '34052', '48012', '0'],
        areaStyle: {
          normal: {
            color: '#7ebeb1',
            opacity: 0.8,
          },
        },
        lineStyle: {
          normal: {
            opacity: 0,
          },
        },

      }],
    };
    return option;
  },
  render() {
    return (
      <div className="examples">
        <div className="parent">

          <ReactEcharts
            option={this.getOtion()}
            style={{height: '500px', width: '100%'}}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default LineChart2;
