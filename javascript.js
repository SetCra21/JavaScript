var x = 900000;
var y = 1500;
var z = x + y;
var a = x - y;
var b = x * y;
var c = x / y;
document.getElementById("add").innerHTML = "If I have" + x + "and I add" + y + "I get" + z;
document.getElementById("subtract").innerHTML = "If I have" + x + "and you take" + y + "Im left with" + a;
document.getElementById("multiply").innerHTML = "If I keep" + x + "and multiply it by" + y + "I have" + b;
document.getElementById("divide").innerHTML = "If I split" + x + "amongst" + y + "people everyone gets" + c;