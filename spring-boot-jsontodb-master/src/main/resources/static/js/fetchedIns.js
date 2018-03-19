var jsondata;
$.ajax({
    type: "GET",
    url: 'http://localhost:8888/log',
    dataType: "json",
    success:function(data){
        jsondata = data[0];
        fetchedIns();
    }
});

function fetchedIns() {
    var dom = document.getElementById("fetchedIns");
    var myChart = echarts.init(dom);
    var app = {};
    var totalIns = jsondata.totalNumberOfFetchedInstructions;
    var ipc = jsondata.ipc;
    var th0fet = jsondata.threadFetchedInstructions.th0;
    var th1fet = jsondata.threadFetchedInstructions.th1;
    var th2fet = jsondata.threadFetchedInstructions.th2;
    var th3fet = jsondata.threadFetchedInstructions.th3;
    var th4fet = jsondata.threadFetchedInstructions.th4;
    var th5fet = jsondata.threadFetchedInstructions.th5;

    option = null;
    option = {
        title : {
            text: 'Fetched Instructions',
            subtext: 'Total number of fetched instructions: ' + totalIns + ',  IPC: ' + ipc,
            x:'center',
            textStyle: {
                fontSize: 30 // 用 legend.textStyle.fontSize 更改示例大小
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        // },
        series : [
            {
                name: 'Percent: ',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:th0fet, name:'Thread0 Fetched Instructions'},
                    {value:th1fet, name:'Thread1 Fetched Instructions'},
                    {value:th2fet, name:'Thread2 Fetched Instructions'},
                    {value:th3fet, name:'Thread3 Fetched Instructions'},
                    {value:th4fet, name:'Thread4 Fetched Instructions'},
                    {value:th5fet, name:'Thread5 Fetched Instructions'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

