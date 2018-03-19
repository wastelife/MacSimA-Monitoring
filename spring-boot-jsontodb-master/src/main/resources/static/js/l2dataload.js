var jsondata;
$.ajax({
    type: "GET",
    url: 'http://localhost:8888/log',
    dataType: "json",
    success:function(data){
        jsondata = data[0];
        l2cacheAM();
        l2cacheRt();
    }
});

function l2cacheAM() {
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    var wr000 = jsondata.l2Cache.wr000;
    var wr001 = jsondata.l2Cache.wr001;
    var rd000 = jsondata.l2Cache.rd000;
    var rd001 = jsondata.l2Cache.rd001;
    // console.log(wr000.access);

    option = null;
    app.title = '堆叠条形图';

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['access','miss']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['L2$[000] RD','L2$[000] WR','L2$[001] RD','L2$[001] WR']
        },
        series: [
            {
                name: 'access',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [ parseInt(rd000.access), parseInt(wr000.access), parseInt(rd001.access), parseInt(wr001.access)]
            },
            {
                name: 'miss',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [ parseInt(rd000.miss), parseInt(wr000.miss), parseInt(rd001.miss), parseInt(wr001.miss)]
            },
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function l2cacheRt() {
    var wr000 = jsondata.l2Cache.wr000;
    var wr001 = jsondata.l2Cache.wr001;
    var rd000 = jsondata.l2Cache.rd000;
    var rd001 = jsondata.l2Cache.rd001;

    var dom = document.getElementById("container_2");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '坐标轴刻度与标签对齐';

    option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['th0rd','th0wr','th1rd','th1wr'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
            }
        ],
        series : [
            {
                name:'Ratio (Miss/Access)',
                type:'bar',
                barWidth: '60%',
                data:[parseFloat(rd000.ratio), parseFloat(wr000.ratio), parseFloat(rd001.ratio), parseFloat(wr001.ratio)]
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}
