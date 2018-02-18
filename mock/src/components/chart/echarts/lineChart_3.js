import React from 'react';
import ReactEcharts from 'echarts-for-react';
const LineChart3 = React.createClass({
  propTypes: {
  },
  getOtion() {
    const option = {
      backgroundColor: '#403F4C',
      color: ['#D8973C', '#FFFFFF', '#64ea91'],

      title: [{
        text: 'USA Air Quality Index This Week',
        left: '2%',
        top: '5%',
        textStyle: {
          color: '#ffd285',
        },
      }, {
        text: 'Pollution Analysis',
        left: '83%',
        top: '6%',
        textAlign: 'center',
        textStyle: {
          color: '#ffd285',
        },
      }],
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        x: 200,
        left: 'center',
        top: '1%',
        textStyle: {
          color: '#ffd285',
        },
        data: ['Los Angeles', 'New York', 'California'],
      },
      grid: {
        left: '1%',
        right: '30%',
        top: '16%',
        bottom: '6%',
        containLabel: true,
      },
      toolbox: {
        show: false,
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#c0576d',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#ffd285',
          },
        },
        boundaryGap: false,
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#c0576d',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#c0576d',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#ffd285',
          },
        },
        type: 'value',
      },
      series: [{
        name: 'Los Angeles',
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: [90, 50, 39, 50, 120, 82, 80],
      }, {
        name: 'New York',
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: [70, 162, 50, 87, 90, 147, 60],
      }, {
        name: 'California',
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: [290, 335, 80, 132, 187, 330, 39],
      },
      {
        type: 'pie',
        center: ['83%', '33%'],
        radius: ['25%', '30%'],
        label: {
          normal: {
            position: 'center',
          },
        },
        data: [{
          value: 335,
          name: 'Analysis of Pollution Sources',
          itemStyle: {
            normal: {
              color: '#ffd285',
            },
          },
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                color: '#ffd285',
                fontSize: 20,

              },
            },
          },
        }, {
          value: 310,
          name: 'Vehicles',
          tooltip: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: '#b04459',
            },
          },
          label: {
            normal: {
              textStyle: {
                color: '#ffd285',
              },
              formatter: '{b}',
            },
          },
        }],
      },

      {
        type: 'pie',
        center: ['83%', '72%'],
        radius: ['25%', '30%'],
        label: {
          normal: {
            position: 'center',
          },
        },
        data: [{
          value: 535,
          name: 'Industry',
          itemStyle: {
            normal: {
              color: '#ff733f',
            },
          },
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                color: '#ff733f',
                fontSize: 20,

              },
            },
          },
        }, {
          value: 210,
          name: 'Indsutry',
          tooltip: {
            show: true,
          },
          itemStyle: {
            normal: {
              color: '#b04459',

            },
          },
          label: {
            normal: {
              textStyle: {
                color: '#ffd285',
              },
              formatter: '{b}',
            },
          },
        }],
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

export default LineChart3;
