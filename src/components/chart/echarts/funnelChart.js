import React from 'react';
import ReactEcharts from 'echarts-for-react';


const PieChart3 = React.createClass({
  propTypes: {},
  getOtion() {
    const option = {
       
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Audi','Mercedes','BMW','Lexus','Ford']
        },
        calculable: true,
        series: [
            {
                name: 'Audi',
                type: 'funnel',
                width: '40%',
                height: '45%',
                left: '5%',
                top: '50%',
                funnelAlign: 'right',
    
                center: ['25%', '25%'],  // for pie
    
                data:[
                    {value:60, name:'BMW'},
                    {value:30, name:'Lexus'},
                    {value:10, name:'Ford'},
                    {value:80, name:'Mercedes'},
                    {value:100, name:'Audi'}
                ]
            },
            {
                name: 'Mercedes',
                type:'funnel',
                width: '40%',
                height: '45%',
                left: '5%',
                top: '5%',
                sort: 'ascending',
                funnelAlign: 'right',
    
                center: ['25%', '75%'],  // for pie
    
                data:[
                    {value:60, name:'BMW'},
                    {value:30, name:'Lexus'},
                    {value:10, name:'Ford'},
                    {value:80, name:'Mercedes'},
                    {value:100, name:'Audi'}
                ]
            },
            {
                name:'Audi',
                type:'funnel',
                width: '40%',
                height: '45%',
                left: '55%',
                top: '5%',
                funnelAlign: 'left',
    
                center: ['75%', '25%'], 
    
                data: [
                    {value: 60, name: 'BMW'},
                    {value: 30, name: 'Lexus'},
                    {value: 10, name: 'Ford'},
                    {value: 80, name: 'Mercedes'},
                    {value: 100, name: 'Audi'}
                ]
            },
            {
                name: 'Mercedes',
                type:'funnel',
                width: '40%',
                height: '45%',
                left: '55%',
                top: '50%',
                sort: 'ascending',
                funnelAlign: 'left',
    
                center: ['75%', '75%'],  // for pie
    
                data: [
                    {value: 60, name: 'BMW'},
                    {value: 30, name: 'Lexus'},
                    {value: 10, name: 'Ford'},
                    {value: 80, name: 'Mercedes'},
                    {value: 100, name: 'Audi'}
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
              width: '100%',
            }}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default PieChart3;
