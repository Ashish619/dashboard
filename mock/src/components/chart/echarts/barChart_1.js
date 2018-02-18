import React from 'react';
import ReactEcharts from 'echarts-for-react';
const BarChart1 = React.createClass({
  propTypes: {

  },
  getOtion() {
    const option = {
      backgroundColor: '#403F4C',
      title: {
       
        textStyle: {
          color: '#ffd285',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      color: ['#F9DC5C', '#E84855'],
      legend: {
        data: ['Female', 'Male'],
        itemGap: 20,
        textStyle: {
          color: '#ffd285',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [{
        type: 'category',
        name: '',
        data: [2, 3, 7, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67],
        axisLabel: {
          textStyle: {
            color: '#ffd285',
          }
        },
        axisLine: {
          lineStyle: {
            color: '#ffd285',
          },
        },
      }],
      yAxis: [{
        type: 'value',
        name: '',
        axisLine: {
          lineStyle: {
            color: '#ffd285',
          },
        },
        axisLabel: {
          textStyle: {
            color: '#ffd285',
          }
        },
      }],
      series: [{
        name: 'Female',
        type: 'bar',
        data: [0, 8, 1, 0, 1, 3, 4, 0, 8, 13, 58, 169, 188, 506, 740, 735, 1012, 1486, 1537, 2395, 2354, 2482, 2421, 2139, 2041, 1585, 1562, 1570, 1172, 1012, 792, 670, 599, 448, 308, 350, 337, 373, 179, 137, 277, 89, 75, 91, 87, 60, 109, 46, 22, 81, 13, 38, 46, 28, 28, 8, 17, 29, 4, 2,

        ],
      }, {
        name: 'Male',
        type: 'bar',
        data: [1, 0, 0, 1, 0, 0, 0, 7, 4, 30, 25, 122, 265, 433, 454, 718, 970, 906, 1383, 1590, 1936, 1797, 2042, 1803, 1806, 1548, 1391, 1324, 1066, 751, 774, 595, 401, 433, 354, 204, 267, 166, 244, 146, 101, 101, 80, 45, 56, 46, 95, 89, 24, 41, 24, 25, 24, 26, 12, 8, 5, 8, 14, 9],
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

export default BarChart1;
