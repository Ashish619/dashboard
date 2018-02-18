import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
const LineChart4 = React.createClass({
  propTypes: {
  },
  getOtion() {
    const option = {
      backgroundColor: '#403F4C',
      title: {
        text: 'Stadium Occupancy Rate',
        left: '50%',
        textAlign: 'center',
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
        orient: 'vertical',
        data: ['Arsenal', 'Dortmund'],
      },
      grid: {
        show: false,
        containLabel: true,
        left: '10',
        right: '50',
        top: '10%',
        bottom: '10',

      },
      xAxis: {
        type: 'category',
        data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nowember', 'December'],
        boundaryGap: false,
        splitLine: {
          show: true,
          interval: 'auto',
          lineStyle: {
            color: ['#D4DFF5'],
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#609ee9',
          },
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14,
          },
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: ['#D4DFF5'],
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#609ee9',
          },
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14,
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
        data: ['55000', '56000', '50000', '51000', '30000', '34580', '26500', '32444', '48000', '52000', '56000', '53000'],
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(199, 237, 250,0.5)',
            }, {
              offset: 1,
              color: 'rgba(199, 237, 250,0.2)',
            }], false),
          },
        },
        itemStyle: {
          normal: {
            color: '#F9564F',
          },
        },
        lineStyle: {
          normal: {
            width: 3,
          },
        },
      }, {
        name: 'Dortmund',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: ['24000', '32000', '10000', '29000', '26000', '28000', '24000', '36541', '48000', '50000', '68000', '63000'],
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(1, 1, 0, 1, [{
              offset: 0,
              color: 'rgba(16, 244, 247,1)',
            }, {
              offset: 1,
              color: 'rgba(216, 244, 247,1)',
            }], false),
          },
        },
        itemStyle: {
          normal: {
            color: '#F3C677',
          },
        },
        lineStyle: {
          normal: {
            width: 3,
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
            style={{height: '600px', width: '100%'}}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default LineChart4;
