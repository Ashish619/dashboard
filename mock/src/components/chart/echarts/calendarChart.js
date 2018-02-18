import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts
        .number
        .parseDate(year + '-01-01');
    var end = +echarts
        .number
        .parseDate((+ year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts
                .format
                .formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

var data = getVirtulData(2016);

const CalendarChart = React.createClass({
    propTypes: {},
    getOtion() {
        const option = {
            backgroundColor: '#404a59',

            title: {
                top: 30,
                text: 'The number of steps per person in 2016',
                subtext: 'The data is purely fictitious',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '30',
                left: '100',
                data: [
                    'Step Count', 'Top 12'
                ],
                textStyle: {
                    color: '#fff'
                }
            },
            calendar: [
                {
                    top: 100,
                    left: 'center',
                    range: [
                        '2016-01-01', '2016-06-30'
                    ],
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#000',
                            width: 4,
                            type: 'solid'
                        }
                    },
                    yearLabel: {
                        formatter: '{start}  1st',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#323c48',
                            borderWidth: 1,
                            borderColor: '#111'
                        }
                    }
                }, {
                    top: 340,
                    left: 'center',
                    range: [
                        '2016-07-01', '2016-12-31'
                    ],
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#000',
                            width: 4,
                            type: 'solid'
                        }
                    },
                    yearLabel: {
                        formatter: '{start}  2nd',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#323c48',
                            borderWidth: 1,
                            borderColor: '#111'
                        }
                    }
                }
            ],
            series: [
                {
                    name: 'Step Count',
                    type: 'scatter',
                    coordinateSystem: 'calendar',
                    data: data,
                    symbolSize: function (val) {
                        return val[1] / 500;
                    },
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    }
                }, {
                    name: 'Step Count',
                    type: 'scatter',
                    coordinateSystem: 'calendar',
                    calendarIndex: 1,
                    data: data,
                    symbolSize: function (val) {
                        return val[1] / 500;
                    },
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    }
                }, {
                    name: 'Top 12',
                    type: 'effectScatter',
                    coordinateSystem: 'calendar',
                    calendarIndex: 1,
                    data: data.sort(function (a, b) {
                        return b[1] - a[1];
                    }).slice(0, 12),
                    symbolSize: function (val) {
                        return val[1] / 500;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }, {
                    name: 'Top 12',
                    type: 'effectScatter',
                    coordinateSystem: 'calendar',
                    data: data.sort(function (a, b) {
                        return b[1] - a[1];
                    }).slice(0, 12),
                    symbolSize: function (val) {
                        return val[1] / 500;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
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
                        height: '600px',
                        width: '100%'
                    }}
                        className="react_for_echarts"/>

                </div>
            </div>
        );
    }
});

export default CalendarChart;
