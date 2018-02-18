import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
const LineChart1 = React.createClass({
  propTypes: {
  },
  getOtion() {
    const option = {
      backgroundColor: '#403F4C',
      title: {
        text: '',
        subtext: '',
        textStyle: {
          color: '#ffd285',
        },
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
      },
      toolbox: {
        show: false,
        feature: {
          saveAsImage: {
            title: 'Save',
          },
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLine: {
          lineStyle: {
            color: '#e22f0e',
          },
        },
        axisLabel: {
          textStyle: {
            color: '#e22f0e',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e22f0e',
          },
        },
      },
      yAxis: {
        type: 'value',
        min: 400,
        max: 900,
        axisLine: {
          lineStyle: {
            color: '#e22f0e',
          },
        },
        axisLabel: {
          textStyle: {
            color: '#e22f0e',
          },
          formatter: '{value}',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e22f0e',
          },
        },
      },
      grid: {
        show: false,
        containLabel: true,
        left: '20',
        right: '20',
        top: '5%',
        bottom: '10',

      },
      series: [
        {
          name: 'Burned Calories',
          type: 'line',
          smooth: true,
          showSymbol: true,
          symbol: 'circle',
          symbolSize: 20,
          lineStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
                offset: 0.3, color: '#f85a37',
              }, {
                offset: 1, color: '#a805dc',
              }], false),
              width: 5,
              borderWidth: 0,
              shadowBlur: 30,
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },

          },

          data: [650, 550, 800, 500, 750, 850, 750, 450, 650, 480, 520, 450],
        },
      ],
    };
    return option;
  },
  render() {
    return (
      <div className="examples">
        <div className="parent">

          <ReactEcharts
            option={this.getOtion()}
            style={{height: '450px', width: '100%'}}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default LineChart1;
