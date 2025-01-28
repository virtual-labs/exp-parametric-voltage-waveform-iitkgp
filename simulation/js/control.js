/**
 * 
 *  Document     : control.js
 *  Created on   : Jan 26, 2017, 4:35:25 AM
 *  Author       : Subir Sekhar
 *  Co-Author    : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */



function trigger_generator() {

    function rotateObject(id, p1, p2) {
        scene.getNode(id, function (myrotate) {

            var angle = p1;
            var angleInc = 15;
            scene.on("tick", function () {
                if (angle >= p2) {
                    angleInc *= 0;
                }
                angle += angleInc;
                myrotate.setAngle(angle);
            });
        });
    }

    function moveObject(id, r1, r2, r3, r4, r5, r6) {
        scene.getNode(id,
                function (myTranslate) {
                    var x = r1;
                    var xInc = 0.01;
                    var y = r3;
                    var yInc = 0.01;
                    var z = r5;
                    var zInc = 0.01;
                    scene.on("tick",
                            function () {
                                if (x <= r2) {
                                    xInc *= 0.0;
                                }
                                x += xInc;
                                if (y <= r4) {
                                    yInc *= 0.0;
                                }
                                y += yInc;
                                if (z <= r6) {
                                    zInc *= 0.0;
                                }
                                z += zInc;
                                myTranslate.setXYZ({x: x, y: y, z: z});
                            });
                });
    }
    
    
    

    function colorChange(id) {
        scene.getNode(id, function (myFlags) {
            myFlags.setTransparent(!myFlags.getTransparent());
        });
    }

getIndex();

    window.setTimeout(function () {
        moveObject("sphere5", -3.0, -3.0, 2.3, 2.3, 3.55, 3.7);
        moveObject("sphere7", -3.1, -3.1, 0.7, 0.7, 3.55, 3.7);
        moveObject("sphere9", -3.15, -3.15, -0.7, -0.7, 3.55, 3.7);
        moveObject("cylinder26", -0.5, 1, 0, 0, 1, 1);
        moveObject("cylinder27", -0.55, 1, 0, 0, 1, 1);
        moveObject("cylinder28", -0.4, 1, 0, 0, 1, 1);
        moveObject("tcylinder26", -3.3, -3.3, -0.65, -0.65, 3.32, 3.32);
        moveObject("tcylinder27", -3.3, -3.3, 0.75, 0.75, 3.32, 3.32);
        moveObject("tcylinder28", -3.2, -3.2, 2.25, 2.25, 3.32, 3.32);
        moveObject("cylinder15", -3.69, -3.6, 0.65, 0.65, 3.15, 3.15);

    }, 1000);
    window.setTimeout(function () {
        moveObject("sphere5", -3.0, -3.0, 2.3, 2.3, 3.45, 3.7);
        moveObject("sphere7", -3.1, -3.1, 0.7, 0.7, 3.45, 3.7);
        moveObject("sphere9", -3.15, -3.15, -0.7, -0.7, 3.45, 3.7);
        moveObject("cylinder26", -0.3, 1, 0, 0, 1, 1);
        moveObject("cylinder27", -0.3, 1, 0, 0, 1, 1);
        moveObject("cylinder28", -0.25, 1, 0, 0, 1, 1);
        moveObject("tcylinder26", -3.2, -3.2, -0.65, -0.65, 3.32, 3.32);
        moveObject("tcylinder27", -3.3, -3.3, 0.75, 0.75, 3.32, 3.32);
        moveObject("tcylinder28", -3.15, -3.15, 2.25, 2.25, 3.32, 3.32);
        moveObject("cylinder15", -3.67, -3.6, 0.65, 0.65, 3.15, 3.15);
    }, 1500);
    window.setTimeout(function () {
        moveObject("sphere5", -3.0, -3.0, 2.3, 2.3, 3.35, 3.7);
        moveObject("sphere7", -3.1, -3.1, 0.7, 0.7, 3.35, 3.7);
        moveObject("sphere9", -3.15, -3.15, -0.7, -0.7, 3.35, 3.7);
        moveObject("cylinder26", -0.2, 1, 0, 0, 1, 1);
        moveObject("cylinder27", -0.2, 1, 0, 0, 1, 1);
        moveObject("cylinder28", -0.2, 1, 0, 0, 1, 1);
        moveObject("tcylinder26", -3.1, -3.1, -0.65, -0.65, 3.2, 3.2);
        moveObject("tcylinder27", -3.3, -3.3, 0.75, 0.75, 3.2, 3.2);
        moveObject("tcylinder28", -3.1, -3.1, 2.25, 2.25, 3.2, 3.2);
        moveObject("cylinder15", -3.65, -3.6, 0.65, 0.65, 3.15, 3.15);
    }, 2000);
    window.setTimeout(function () {
        moveObject("sphere5", -3.0, -3.0, 2.3, 2.3, 3.25, 3.7);
        moveObject("sphere7", -3.1, -3.1, 0.7, 0.7, 3.25, 3.7);
        moveObject("sphere9", -3.15, -3.15, -0.7, -0.7, 3.25, 3.7);
        moveObject("cylinder26", -0.1, 1, 0, 0, 1, 1);
        moveObject("cylinder27", -0.1, 1, 0, 0, 1, 1);
        moveObject("cylinder28", -0.1, 1, 0, 0, 1, 1);
        moveObject("tcylinder26", -3.1, -3.1, -0.65, -0.65, 3.2, 3.2);
        moveObject("tcylinder27", -3.3, -3.3, 0.75, 0.75, 3.2, 3.2);
        moveObject("tcylinder28", -3.1, -3.1, 2.25, 2.25, 3.2, 3.2);
        moveObject("cylinder15", -3.65, -3.6, 0.65, 0.65, 3.15, 3.15);
        colorChange("myFlags11");
        colorChange("myFlags12");
        colorChange("myFlags13");
        colorChange("myFlags15");
        colorChange("myFlags16");
    }, 2500);
    window.setTimeout(function () {
        moveObject("sphere13", -3, -2.95, -0.75, -0.75, 3.4, 3.4);
        moveObject("sphere14", -2.8, -2.75, 2.25, 2.25, 3.4, 3.4);
        moveObject("sphere15", -2.85, -2.7, 0.6, 0.6, 3.4, 3.4);
//        moveObject("sphere16", 6.65, 6.65, 1.1, 1.1, 2.5, 2.5);
        audio();
        //moveObject("multi2", -9, -10, -0.75, -0.75, 4.5, 4.5);
    }, 2600);
    window.setTimeout(function () {
        moveObject("sphere13", -2.7, -2.7, -0.75, -0.75, 3.6, 3.6);
        moveObject("sphere14", -2.5, -2.5, 2.25, 2.25, 3.55, 3.55);
        moveObject("sphere15", -2.6, -2.6, 0.6, 0.6, 3.55, 3.55);
//        moveObject("sphere16", 6.65, 6.65, 0.7, 0.7, 2.4, 2.4);
    }, 3500);
    window.setTimeout(function () {
        colorChange("myFlags1");
        colorChange("myFlags2");
        colorChange("myFlags3");
        colorChange("myFlags4");
        colorChange("myFlags5");
        colorChange("myFlags6");
        colorChange("myFlags7");
        colorChange("myFlags8");
        colorChange("myFlags9");
        colorChange("myFlags11");
        colorChange("myFlags12");
        colorChange("myFlags13");
        colorChange("myFlags15");
        colorChange("myFlags16");
        rotateObject("cylinder38", 0, 0);
        rotateObject("cylinder39", 0, 0);
        colorChange("myFlags10");
    }, 3700);
    window.setTimeout(function () {
        moveObject("sphere5", -3.05, -3.05, 2.3, 2.3, 3.7, 5);
        moveObject("sphere7", -3.15, -3.15, 0.7, 0.7, 3.7, 4);
        moveObject("sphere9", -3.2, -3.2, -0.7, -0.7, 3.7, 4);
        moveObject("cylinder26", -0.9, 1, 0, 0, 1, 1);
        moveObject("cylinder27", -1, 1, 0, 0, 1, 1);
        moveObject("cylinder28", -0.75, 1, 0, 0, 1, 1);
        moveObject("tcylinder26", -3.5, -3.5, -0.65, -0.65, 3.4, 3.4);
        moveObject("tcylinder27", -3.45, -3.45, 0.75, 0.75, 3.4, 3.4);
        moveObject("tcylinder28", -3.3, -3.3, 2.25, 2.25, 3.4, 3.4);
        moveObject("cylinder15", -3.75, -3.75, 0.65, 0.65, 3.15, 3.15);
        $("#tab a").removeClass("disabled");
    }, 4000);
    window.setTimeout(function () {

//        graphGenerator();
        document.getElementById("meter").hidden = true;

    }, 3400);
     window.setTimeout(function () {
        displayMap();
        document.getElementById("buttn").disabled = false;

    }, 4500);

    
    document.getElementById("buttn3").disabled = true;
}

function getIndex(){
        if (index === 1) {
        document.getElementById("graphTitle").innerHTML = "C1";
        document.getElementById("graphTitle1").innerHTML = document.getElementById("demo3").value;
    } else if (index === 2) {
        document.getElementById("graphTitle").innerHTML = "Rf";
        document.getElementById("graphTitle1").innerHTML = document.getElementById("demo").value;
    } else if (index === 3) {
        document.getElementById("graphTitle").innerHTML = "Rt";
        document.getElementById("graphTitle1").innerHTML = document.getElementById("demo1").value;
    }
    
//    alert(index);
}


function displayMap() {
    document.getElementById('graph').style.display = "block";
    graphGenerator();
    document.getElementById('dwnldGraph').innerHTML = "";
     var linkk = "<a href='"+graphURI+"' download='mypanting.png' target='_blank' >Save Graph</a>";
      document.getElementById('dwnldGraph').innerHTML = linkk;
}


function audio() {
    var audio = new Audio('images/flash_sound1.mp3');
    audio.play();
}

function ground_switch() {
    function rotateObject(id, p1, p2) {
        scene.getNode(id, function (myrotate) {

            var angle = p1;
            var angleInc = 15;
            scene.on("tick", function () {
                if (angle >= p2) {
                    angleInc *= 0;
                }
                angle += angleInc;
                myrotate.setAngle(angle);
            });
        });
    }

    window.setTimeout(function () {
        rotateObject("cylinder38", 0, 90);
        rotateObject("cylinder39", 0, 90);
        document.getElementById("buttn1").disabled = true;
    }, 500);
    document.getElementById("buttn2").disabled = false;
}

var chargeCapacitorTimer = null, chargeCapacitorCount = 0;

function charge_capacitor() {
    function colorChange(id) {
        scene.getNode(id, function (myFlags) {
            myFlags.setTransparent(!myFlags.getTransparent());
        });
    }

    window.setTimeout(function () {
        colorChange("myFlags10");
        document.getElementById("meter").hidden = false;
        document.getElementById("charge-msg").innerText = "Charging...";
    }, 300);
    window.setTimeout(function () {
        colorChange("myFlags1");
        colorChange("myFlags2");
        colorChange("myFlags3");
        colorChange("myFlags4");
        colorChange("myFlags5");
        colorChange("myFlags6");
        document.getElementById("buttn3").disabled = false;
        document.getElementById("buttn2").disabled = true;
    }, 5000);
    if (!chargeCapacitorTimer) {
        chargeCapacitorTimer = setInterval(function () {
            chargeCapacitorCount = chargeCapacitorCount + 2;
            if (chargeCapacitorCount == 100) {
                clearInterval(chargeCapacitorTimer);
                chargeCapacitorCount = 0;
                chargeCapacitorTimer = null;
                document.getElementById("charge-msg").innerText = "Charged";
            } else
                document.getElementById("charge-progress").value = chargeCapacitorCount;
        }, 100);
    }
}



function start() {
//    document.getElementById("buttn").value = "Restart";
    document.getElementById("buttn").disabled = true;
    document.getElementById("buttn1").disabled = false;
}
function restart() {
    document.getElementById("buttn").value = "Start Experiment";
    document.getElementById("buttn1").disabled = true;
    document.getElementById("buttn2").disabled = true;
    document.getElementById("buttn3").disabled = true;
    document.getElementById('buttn').addEventListener('click', function () {

        start();
    });
}

function toggleButton() {
    
     document.getElementById('graph').style.display = "none";
//    var bval = document.getElementById("buttn").value;
//    if (bval === "Start Experiment") {
         if (index === 0){
        alert('Please select a parameter first');
    } else{
  
    start();
    
}
//    } else {
//        window.location.href = window.location.href;
//    }

}
function aaa() {
    document.getElementById("demo").value = document.getElementById("Rf").value;
}
function aaa1() {
    document.getElementById("demo1").value = document.getElementById("Rt").value;
}
function aaa2() {
    document.getElementById("demo2").value = document.getElementById("Cg").value;
}
function aaa3() {
    document.getElementById("demo3").value = document.getElementById("C1").value;
}
function aaa4() {
    document.getElementById("demo4").value = document.getElementById("V0").value;
}
function aaa8() {
    document.getElementById("demo8").value = document.getElementById("Td").value;
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

