import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';




const PolarChart = React.createClass({
  propTypes: {

  },
  getOtion() {
    const option = {
      title: {
          text: 'Football Player'
      },
      tooltip: {},
      legend: {
          top: 20,
          itemWidth: 12,
          itemHeight: 12,
          data: [],
          textStyle: {
              color: '#fff'
          }
      },
      radar: {
          radius: '60%',
          splitNumber: 8,
          axisLine: {
              lineStyle: {
                  color: '#fff',
                  opacity: .2
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#fff',
                  opacity: .2
              }
          },
          splitArea: {
              areaStyle: {
                  color: 'rgba(127,95,132,.3)',
                  opacity: 1,
                  shadowBlur: 45,
                  shadowColor: 'rgba(0,0,0,.5)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 15,
              }
          },
          indicator: [{
              name: 'Defence',
              max: 100
          }, {
              name: 'Skill',
              max: 100
          }, {
              name: 'Attack',
              max: 100
          }, {
              name: 'Popularite',
              max: 100
          }, {
              name: 'Balance',
              max: 100
          }, 
           {
              name: 'Power',
              max: 100
          },
           {
              name: 'Jump',
              max: 100
          },
                     {
              name: 'Speed',
              max: 100
          },
                     {
              name: 'Fitness',
              max: 100
          },
          {
              name: 'Goals',
              max: 100
          }]
      },
      series: [{
          name: 'Messi',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
              normal: {
                  shadowBlur: 13,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: 1
              }
          },
          data: [{
              value: [80, 50, 70, 90, 76, 58, 66, 89, 55,99],
              name: 'Real Time',
          }]
      },{
        name: 'Ronaldo',
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
            }
        },
        data: [{
            value: [90, 75, 62, 100, 75, 45, 86, 79, 42,29],
            name: '',
        }]
    }],
      color: ['#ef4b4c', '#b1eadb'],
      backgroundColor: {
          type: 'radial',
          x: 0.4,
          y: 0.4,
          r: 0.35,
          colorStops: [{
              offset: 0,
              color: '#895355'
          }, {
              offset: .4,
              color: '#593640' 
          }, {
              offset: 1,
              color: '#39273d' 
          }],
          globalCoord: false
      }
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

export default PolarChart;
