var jsondata;
$.ajax({
    type: "GET",
    url: 'http://localhost:8888/log',
    dataType: "json",
    success:function(data){
        jsondata = data[0];
        l1dcacheAM();
        l1dcacheRt();
        // console.log(jsondata.id);
    }
});

function l1dcacheAM() {
    var dom = document.getElementById("l1dcontainer");
    var myChart = echarts.init(dom);
    var app = {};

    var drd000 = jsondata.l1Cache.drd000;
    var drd001 = jsondata.l1Cache.drd001;
    var drd002 = jsondata.l1Cache.drd002;
    var drd003 = jsondata.l1Cache.drd003;
    var drd004 = jsondata.l1Cache.drd004;
    var drd005 = jsondata.l1Cache.drd005;

    var dwr000 = jsondata.l1Cache.dwr000;
    var dwr001 = jsondata.l1Cache.dwr001;
    var dwr002 = jsondata.l1Cache.dwr002;
    var dwr003 = jsondata.l1Cache.dwr003;
    var dwr004 = jsondata.l1Cache.dwr004;
    var dwr005 = jsondata.l1Cache.dwr005;

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
            data: ['L1$D[000] RD','L1$D[000] WR','L1$D[001] RD','L1$D[001] WR','L1$D[002] RD','L1$D[002] WR','L1$D[003] RD','L1$D[003] WR','L1$D[004] RD','L1$D[004] WR','L1$D[005] RD','L1$D[005] WR']
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
                data: [ parseInt(drd000.access),parseInt(dwr000.access), parseInt(drd001.access), parseInt(dwr001.access),parseInt(drd002.access), parseInt(dwr002.access),parseInt(drd003.access), parseInt(dwr003.access),parseInt(drd004.access), parseInt(dwr004.access),parseInt(drd005.access),parseInt(dwr005.access)]
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
                data: [ parseInt(drd000.miss),parseInt(dwr000.miss), parseInt(drd001.miss), parseInt(dwr001.miss),parseInt(drd002.miss), parseInt(dwr002.miss),parseInt(drd003.miss), parseInt(dwr003.miss),parseInt(drd004.miss), parseInt(dwr004.miss),parseInt(drd005.miss),parseInt(dwr005.miss)]
            },
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function l1dcacheRt() {

    var drd000 = jsondata.l1Cache.drd000;
    var drd001 = jsondata.l1Cache.drd001;
    var drd002 = jsondata.l1Cache.drd002;
    var drd003 = jsondata.l1Cache.drd003;
    var drd004 = jsondata.l1Cache.drd004;
    var drd005 = jsondata.l1Cache.drd005;

    var dwr000 = jsondata.l1Cache.dwr000;
    var dwr001 = jsondata.l1Cache.dwr001;
    var dwr002 = jsondata.l1Cache.dwr002;
    var dwr003 = jsondata.l1Cache.dwr003;
    var dwr004 = jsondata.l1Cache.dwr004;
    var dwr005 = jsondata.l1Cache.dwr005;

    var dom = document.getElementById("l1dcontainer_2");
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
                data : ['th0r','th0w','th1r','th1w','th2r','th2w','th3r','th3w','th4r','th4w','th5r','th5w'],
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
                data:[parseFloat(drd000.ratio),parseFloat(dwr000.ratio), parseFloat(drd001.ratio), parseFloat(dwr001.ratio),parseFloat(drd002.ratio), parseFloat(dwr002.ratio),parseFloat(drd003.ratio), parseFloat(dwr003.ratio),parseFloat(drd004.ratio), parseFloat(dwr004.ratio),parseFloat(drd005.ratio),parseFloat(dwr005.ratio)]
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}
