// 柱状图模块1
(function () {
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '12px'
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '12px'
                },
                axisLine: {
                    lineStyle: {
                        width: '2',
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '35%',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// 柱状图2
(function () {
    var myColor = ['#1089e7', '#f57474', '#56d0e3', '#f8b448', '#8b78f6'];
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));
    var option = {
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
            // containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: 'category',
                inverse: true,
                data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: 'white'
                }
            },
            {
                type: 'category',
                inverse: true,
                data: [702, 350, 610, 793, 664],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: 'white'
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: [70, 34, 60, 78, 69],
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        return myColor[params.dataIndex]
                    }
                },
                barCategoryGap: 50,
                barWidth: 10,
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
            {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: 'none',
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// 折线图1
(function () {
    var yearData = [
        {
            year: "2020",
            data: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: "2021",
            data: [
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ]

    var myChart = echarts.init(document.querySelector('.line .chart'));
    var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: '#4c9bfd'
            },
            right: '10%'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                data: yearData[0].data[0],
                smooth: true
            },
            {
                name: '新增游客',
                type: 'line',
                data: yearData[0].data[1],
                smooth: true
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })

    $('.line h2').on('click', 'a', function () {
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        myChart.setOption(option);
    })

})();

// 折线图2
(function () {
    var myChart = echarts.init(document.querySelector('.line2 .chart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top: '0%',
            textStyle: {
                color: 'rgba(255,255,255,0.5)',
                fontSize: '12'
            }
        },
        grid: {
            left: '10',
            top: '30',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30"
                ],
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,0.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: false,
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '12'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                }
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#0184d5',
                    width: '2'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)"
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)"
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                emphasis: {
                    focus: 'series'
                },
                symbol: 'circle',
                symbolSize: 8,
                showSymbol: false,
                itemStyle: {
                    normal: {
                        color: "#0184d5",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40
                ]
            },
            {
                name: '转发量',
                type: 'line',
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#00d887",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: [
                    50,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    50,
                    60,
                    40,
                    60,
                    40,
                    80,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40
                ]
            },
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// 饼形图
(function () {
    var myChart = echarts.init(document.querySelector('.pie .chart'));
    var option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
            "#06b4ab",
            "#06c8ab",
            "#06dcab",
            "#06f0ab"
        ],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '0%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'rgba(255,255,255,0.5)',
                fontSize: 12
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', '45%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// 饼形图2
(function () {
    var myChart = echarts.init(document.querySelector('.pie2 .chart'));
    var option = {
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        legend: {
            bottom: '0%',
            itemHeight: 10,
            itemWidth: 10,
            textStyle:{
                color: 'rgba(255,255,255,0,5)',
                fontSize: 12
            }
        },
        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                label:{
                    fontSize:10
                },
                labelLine:{
                    length: 6,
                    length2: 8
                },
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "深圳" },
                    { value: 42, name: "广东" }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();


