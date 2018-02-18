import React from 'react';
import ReactEcharts from 'echarts-for-react';
const PieChart1 = React.createClass({
  propTypes: {},
  getOtion() {
    const option = {
      backgroundColor: '#403F4C',
      title: {
        text: '',
        subtext: '',
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br />{b} : {c} ({d}%)',
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['Mercedes', 'BMW', 'Audi', 'Volvo', 'Subaru', 'Ford', 'Reanult', 'Toyota'],
        itemGap: 20,
         textStyle: {
            color: '#ffd285',
          }
      },
      toolbox: {
        show: false,
        feature: {

          magicType: {
            show: true,
            type: ['pie', 'funnel'],
          },
          restore: {show: true},
          saveAsImage: {show: true},
        },
      },
      color: ['#EAC435', '#345995', '#E40066', '#03CEA4', '#FB4D3D', '#FFF', '#FA7921', '#1B998B'],

      calculable: true,
      series: [
        {
          name: 'Radius Mode',
          type: 'pie',
          radius: [10, 70],
          center: ['50%', 285],
          roseType: 'radius',
          width: '40%',
          max: 40,
          itemStyle: {
            normal: {
              label: {
                show: true,
              },
              labelLine: {
                show: true,
                smooth: 0.9,
                length: 5,
                length2: 10,
              },
              borderWidth: 0,
              shadowBlur: 30,
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
            emphasis: {
              label: {
                show: true,
              },
              labelLine: {
                show: true,
              },
            },
          },
          data: [
                        {value: 10, name: 'Mercedes'},
                        {value: 5, name: 'BMW'},
                        {value: 15, name: 'Audi'},
                        {value: 25, name: 'Volvo'},
                        {value: 20, name: 'Subaru'},
                        {value: 35, name: 'Ford'},
                        {value: 30, name: 'Reanult'},
                        {value: 40, name: 'Toyota'},
          ],
        },
        {
          name: 'Area Mode',
          type: 'pie',
          radius: [30, 60],
          center: ['50%', 100],
          roseType: 'area',
          x: '50%',
          max: 40,
          sort: 'ascending',
          data: [
                        {value: 10, name: 'Mercedes'},
                        {value: 5, name: 'BMW'},
                        {value: 15, name: 'Audi'},
                        {value: 25, name: 'Volvo'},
                        {value: 20, name: 'Subaru'},
                        {value: 35, name: 'Ford'},
                        {value: 30, name: 'Reanult'},
                        {value: 40, name: 'Toyota'},
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

export default PieChart1;
