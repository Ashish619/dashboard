import React from 'react';
import ReactEcharts from 'echarts-for-react';
const RadarChart1 = React.createClass({
  propTypes: {},
  getOtion() {
    const option = {
backgroundColor: '#403F4C',
      title: {
        text: '',
        subtext: '',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        orient: 'vertical',
        right: 10,
        bottom: 20,
        data: [
          'Ronaldo', 'Messi',
        ],
        textStyle: {
          color: '#fff',

        },
        itemGap: 20,
      },
      toolbox: {
        show: false,
        feature: {
          restore: {
            show: true,
            title: 'Refresh',
          },
          saveAsImage: {
            show: true,
            title: 'Save As Image',
          },
        },
      },
      color: [
        '#EE4266', '#118AB2',
      ],

      calculable: true,
      polar: [
        {
          indicator: [
            {
              text: 'Attack',
              max: 100,
            }, {
              text: 'Defend',
              max: 100,
            }, {
              text: 'Fitness',
              max: 100,
            }, {
              text: 'Speed',
              max: 100,
            }, {
              text: 'Power',
              max: 100,
            }, {
              text: 'Skill',
              max: 100,
            },
          ],
          radius: 95,
        },
      ],
      series: [
        {
          name: 'Players fully live data',
          type: 'radar',
          itemStyle: {
            symbolSize: 0,
            normal: {
              areaStyle: {
                opacity: 0.9,
                type: 'default',
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                shadowColor: 'rgba(0, 0, 0, 0.9)',
              },
            },
          },
          data: [
            {
              value: [
                90,
                42,
                60,
                70,
                50,
                40,
              ],
              name: 'Messi',
            }, {
              value: [
                62,
                90,
                55,
                65,
                45,
                35,
              ],
              name: 'Ronaldo',
            },
          ],
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
            style={{
              height: '450px',
              width: '100%',
            }}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default RadarChart1;
