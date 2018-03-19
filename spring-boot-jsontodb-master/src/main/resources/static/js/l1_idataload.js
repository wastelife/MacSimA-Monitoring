var jsondata;
$.ajax({
    type: "GET",
    url: 'http://localhost:8888/log',
    dataType: "json",
    success:function(data){
        jsondata = data[0];
        l1icacheAM();
        l1icacheRt();
        // console.log(jsondata.id);
    }
});

function l1icacheAM() {
    var dom = document.getElementById("l1icontainer");
    var myChart = echarts.init(dom);
    var app = {};
    var ird000 = jsondata.l1Cache.ird000;
    var ird001 = jsondata.l1Cache.ird001;
    var ird002 = jsondata.l1Cache.ird002;
    var ird003 = jsondata.l1Cache.ird003;
    var ird004 = jsondata.l1Cache.ird004;
    var ird005 = jsondata.l1Cache.ird005;


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
            data: ['L1$I[000] RD','L1$I[001] RD','L1$I[002] RD','L1$I[003] RD','L1$I[004] RD','L1$I[005] RD']
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
                data: [ parseInt(ird000.access), parseInt(ird001.access), parseInt(ird002.access), parseInt(ird003.access), parseInt(ird004.access), parseInt(ird005.access)]
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
                data: [ parseInt(ird000.miss), parseInt(ird001.miss), parseInt(ird002.miss), parseInt(ird003.miss), parseInt(ird004.miss), parseInt(ird005.miss)]
            },
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function l1icacheRt() {
    var ird000 = jsondata.l1Cache.ird000;
    var ird001 = jsondata.l1Cache.ird001;
    var ird002 = jsondata.l1Cache.ird002;
    var ird003 = jsondata.l1Cache.ird003;
    var ird004 = jsondata.l1Cache.ird004;
    var ird005 = jsondata.l1Cache.ird005;

    var dom = document.getElementById("l1icontainer_2");
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
                data : ['th000','th001','th002','th003','th004','th005'],
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
                data:[parseFloat(ird000.ratio), parseFloat(ird001.ratio), parseFloat(ird002.ratio), parseFloat(ird003.ratio), parseFloat(ird004.ratio), parseFloat(ird005.ratio)]
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}
