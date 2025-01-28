/**
 * 
 *  Document     : control.js
 *  Created on   : Feb 17, 2017, 3:40:00 AM
 *  Author       : Subir Sekhar
 *  Co-Author    : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */
var chart;
var dataTable;
var graphURI;
var dataArr = [['t', 'V']];
var options;
var t = [];
var V = [];
google.charts.load("current", {packages: ["corechart", "line"]});
google.charts.setOnLoadCallback(ivg);
$(window).resize(function () {
    ivg();
    graphGenerator();
    
});

function ivg() {
//    var i;
//    t[i] = i;
//    V = [];
//    V[i] = 0;

    for (var i = 0; i < 200; i++) {
        var arrData = [0, 0];
        arrData[0] = i;
        dataArr.push(arrData);
    }
    console.log(dataArr);
    dataTable = new google.visualization.arrayToDataTable(dataArr);
//    dataTable.addColumn('number', 't');
//    dataTable.addColumn('number', 'V');
    var options = {
        title: 'V - T Curve',
        explorer: {maxZoomOut: 20},
        curveType: 'function',
        legend: {position: 'none'},
        'isStacked': true,
        pieSliceText: 'percentage',
        width: '100%',
        height: '100%',
        chartArea: {
            left: "5%",
            top: "8%",
            height: "80%",
            width: "90%"
        },
        hAxis: {
            title: 'Time ( Micro Second )'
        },
        vAxis: {
            title: 'Voltage ( kV )'
        },
        colors: ['#a52714', '#097138'],
        selectionMode: 'multiple',
        tooltip: {trigger: 'both',
            focusTarget: 'category'
        },
        aggregationTarget: 'none',
        crosshair: {
            color: '#000',
            trigger: 'both',

            focused: {color: ['#00ff00']},
            selected: {color: ['#00ffff']},
            focusTarget: 'category'
        }
    };
    chart = new google.visualization.LineChart(document.getElementById('visualization'));
      google.visualization.events.addListener(chart, 'ready', function () {

        graphURI = chart.getImageURI();
        //cng = "'" + png + "'"

    });
    chart.draw(dataTable, options);

}


function graphGenerator() {
    var Rf = Number(document.getElementById('Rf').value);
    var Rt = Number(document.getElementById('Rt').value);
    var Cg = Number(document.getElementById('Cg').value);
    var C1 = Number(document.getElementById('C1').value);
    var V0 = Number(document.getElementById('V0').value);
    var d = Number(document.getElementById('d').value);
    var V = [];
//    t = [];
    var z = [];
    var voltArr = [];
    var RF = Rt;
    var RT = Rf;
    var v = 10 * V0;
    var a = 1 / ((Cg + C1) * RT + (RF * Cg));
    var b = ((Cg + C1) * RT + (RF * Cg)) / (RF * RT * Cg * C1);
    for (var i = 0; i < 200; i++)
    {
        V[i] = (((v * 2.5) * (Math.exp(-a * i) - Math.exp(-b * i))) / (RF * C1 * (b - a)));
        var xx = [0, 0];
        xx[0] = i;
        xx[1] = V[i];

        voltArr.push(xx);

    }
    console.log(voltArr);



    var cl = dataArr[0].length;
//    alert('length='+cl);
    var titleGraph = document.getElementById("graphTitle").innerHTML;
    var titleGraph1 = document.getElementById("graphTitle1").innerHTML;

    for (var i = 1; i < dataArr.length; i++) {
        dataArr[i][cl] = voltArr[i - 1][1];
    }
    console.log(dataArr);
   
    
    var titleGraph11 = document.getElementById("demo4").value;
    var titleGraph2 = document.getElementById("demo2").value;
    var titleGraph3 = document.getElementById("demo3").value;
    var titleGraph4 = document.getElementById("demo").value;
    var titleGraph5 = document.getElementById("demo1").value;
    var titleGraph6 = document.getElementById("demo8").value;
    
     dataArr[0][cl] = 'C1' + '=' + titleGraph3 + '\xa0\xa0' + 'Rf' + '='+ titleGraph4 + '\xa0\xa0'+ 'Rt' + '='+ titleGraph5;
    dataTable = new google.visualization.arrayToDataTable(dataArr);
    options = {
        title: 'V - T Curve' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'V =' + ' ' + titleGraph11 + ' ' + 'kV' + '    \xa0\xa0\xa0      ' + 'Cg =' + ' ' + titleGraph2 + ' ' + '\xB5' + 'F' + '   \xa0\xa0\xa0    ' + 'Sphere Gap =' + ' ' + titleGraph6 + ' ' + 'cm',
        explorer: {maxZoomOut: 20},
        curveType: 'function',
//        legend: {position: 'none'},
        'isStacked': true,
        pieSliceText: 'percentage',
        width: '100%',
        height: '100%',
        chartArea: {
            left: "5%",
            top: "8%",
            height: "80%",
            width: "75%"
        },
        hAxis: {
            title: 'Time ( Micro Second )'
        },
        vAxis: {
            title: 'Voltage ( kV )'
        },
//        colors: ['#a52714', '#097138'],
        selectionMode: 'multiple',
        tooltip: {trigger: 'both',
            focusTarget: 'category'
        },
        aggregationTarget: 'none',
        crosshair: {
            color: '#000',
            trigger: 'both',

            focused: {color: ['#00ff00']},
            selected: {color: ['#00ffff']},
            focusTarget: 'category'
        }
    };

//    chart.clearChart();
    chart.draw(dataTable, options);
//    chart.draw(data, options);
}



var arrowSign = "&#x25BC;";
function changeThings() {
    if (arrowSign === "&#x25BC;") {
        document.getElementById("ckt_diagram").style.display = "none";
        document.getElementById("dropdown-content").style.display = "block";
        document.getElementById("circle").innerHTML = "&#916;";
        arrowSign = "&#916;";
    } else {
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("ckt_diagram").style.display = "block";
        document.getElementById("circle").innerHTML = "&#x25BC;";
        arrowSign = "&#x25BC;";
    }
}

