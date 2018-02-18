import React from 'react';
import ReactEcharts from 'echarts-for-react';
const RadarChart1 = React.createClass({
  propTypes: {},
  getOtion() {
    const option = {
      title: {
        text: '',
        subtext: '',
      },
      tooltip: {
        trigger: 'axis',
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
        '#f7b1cd', '#6493ff',
      ],

      calculable: true,
      polar: [
        {
          indicator: [
            {
              text: 'Development',
              max: 100,
            }, {
              text: 'Marketing',
              max: 100,
            }, {
              text: 'Sales',
              max: 100,
            }, {
              text: 'Support',
              max: 100,
            }, {
              text: 'Admin',
              max: 100,
            }, {
              text: 'Tech',
              max: 100,
            },
          ],
          radius:130,
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
                opacity: 0.5,
                type: 'default',
                borderWidth: 0,

              },
            },
          },
          data: [
            {
              value: [
                100,
                70,
                100,
                55,
                90,
                75,
              ],
              name: 'Prod A',
            }, {
              value: [
                70,
                60,
                80,
                80,
                65,
                60,
              ],
              name: 'Prod B',
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
