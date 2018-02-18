import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

const Statistics = React.createClass({
  propTypes: {},
  getOtion() {
    const option = {

      tooltip: {
        z: 1,
        trigger: 'axis'
      },

      grid: {
        show: false,
        containLabel: true,
        left: '2%',
        right: '5%',
        top: '5%',
        bottom: '5%'

      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#ccc',
              fontWeight: 'bold'
            }
          },
          axisPointer: {
            type: 'shadow',
            value: 6,
            status: 'show',
            shadowStyle: {
              color: new echarts
                .graphic
                .LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0.5,
                    color: '#eee'
                  }, {
                    offset: 1,
                    color: '#9a74fd'
                  }
                ]),
            
              opacity: 0.5,
            }
          },
          splitLine: {
            show: false
          },
          data: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#ccc',
              fontWeight: 'bold'
            }

          },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        }
      ],
      series: [
        {
          name: 'Facebook',
          type: 'line',
          stack: 'Total',
          showSymbol: true,
          symbolSize: 15,
          symbol: 'circle',
          itemStyle: {
            normal: {
              barBorderRadius: 10,
              color: new echarts
                .graphic
                .LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#d0c6e9'
                  }, {
                    offset: 1,
                    color: '#9a74fd'
                  }
                ])
            }
          },
          lineStyle: {
            normal: {
              width: 4,
              shadowColor: 'rgba(112, 155, 233, 0.5)',
              shadowBlur: 4,
              shadowOffsetY: 4
            }
          },
          areaStyle: {
            normal: {
              color: new echarts
                .graphic
                .LinearGradient(0, 1, 0, 1, [
                  {
                    offset: 0.8,
                    color: 'rgba(12, 155, 233, 0.2)'
                  }, {
                    offset: 0.9,
                    color: 'rgba(102, 155, 233, 0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(112, 155, 233, 0.4)'
                  }
                ])
            }
          },
          markPoint: {
            symbol: 'pin'
          },
          smooth: true,
          data: [
            150,
            120,
            160,
            250,
            180,
            300,
            320,
            230,
            210,
            300,
            450,
            430
          ]
        }
      ]
    };
    return option;
  },
  render() {
    return (
      <div className="examples">
        <div className="parent">

          <ReactEcharts
            option={this.getOtion()}
            style={{
            height: '450px',
            width: '100%'
          }}
            className="react_for_echarts"/>

        </div>
      </div>
    );
  }
});

export default Statistics;
