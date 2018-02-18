import React from 'react';
import ReactEcharts from 'echarts-for-react';


const AreaChart = React.createClass({
  propTypes: {

  },
  getOtion() {
    const option = {
      backgroundColor: '#fff',
      color: ['#49C1B6', '#FDC20A', '#F78320', '#068E81', '#EA007B'],
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              lineStyle: {
                  color: '#777'
              }       
          }
      },
  
      xAxis: {
          type: 'category',
  
          boundaryGap: false,
          splitLine: {
              show: false
          },
          axisLabel: {
              interval: 0
          },
          "splitArea": {
              "show": false
          },
          
          "axisLine": {
              lineStyle: {
                  color: '#FFFFFF'
              }
          },
  
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      grid: {
          left: '4%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      yAxis: {
          axisLine: {
              show: false
          },
          splitLine: {
              show: false,
          },
      },
      series: [{
              name: 'A',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 4,
              showSymbol: false,
              itemStyle:{
                  normal:{
                      shadowBlur: 6,
                      shadowColor:'#49C1B6'
                  }
              },
              lineStyle: {
                  normal: {
                      width: 0
                  }
              },
              areaStyle: {
                  normal: {
                      opacity: "0.6",
                  }
              },
              data: [0, -7.5, -1.0, 3.7, 0, -3, 8, 0,-3.6, 4, -2, 0]
          },
  
          {
              name: 'B',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 4,
              showSymbol: false,itemStyle:{
                  normal:{
                      shadowBlur: 6,
                      shadowColor:'#FDC20A'
                  }
              },
              lineStyle: {
                  normal: {
                      width: 0
                  }
              },
              areaStyle: {
                  normal: {
                      opacity: "0.6",
                  }
              },
              data: [0, -2.2, 2, -2.2, 0, -1.5, 0, 2.4, -1, 3, -1, 0]
          }, {
              name: 'C',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 4,
              showSymbol: false,
              itemStyle:{
                  normal:{
                      shadowBlur: 6,
                      shadowColor:'#F78320'
                  }
              },
              lineStyle: {
                  normal: {
                      width: 0
                  }
              },
              areaStyle: {
                  normal: {
                      opacity: "0.6",
                  }
              },
              data: [0, 2.3, 0, 1.2, -1, 3, 0, -3.3, 0, 2, -0.3, 0]
          },
  
          {
              name: 'D',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 4,
              showSymbol: false,
              itemStyle:{
                  normal:{
                      shadowBlur: 6,
                      shadowColor:'#019A90'
                  }
              },
              lineStyle: {
                  normal: {
                      width: 0
                  }
              },
              areaStyle: {
                  normal: {
                      opacity: "0.6",
                  }
              },
              data: [0, 10, 0.13,2,0, 2, 0, 3.7, 0, 1, -3, 0]
          }, {
              name: 'E',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 4,
              showSymbol: false,
              itemStyle:{
                  normal:{
                      shadowBlur: 6,
                      shadowColor:'#EA007B'
                  }
              },
              lineStyle: {
                  normal: {
                      width: 0
                  }
              },
              areaStyle: {
                  normal: {
                      opacity: "0.6",
                  }
              },
              data: [0, -4.5, -0.9, 5.5, -1.9, 1.3, -2.8, 0, -1.7, 0, 3, 0, ]
          },
  
  
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
            style={{height: '600px', width: '100%'}}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default AreaChart;
