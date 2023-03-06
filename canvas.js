var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(176, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(95, 90); // Move the pen to (30, 50)
ctx.lineTo(95, 700)
ctx.stroke();
ctx.beginPath();
ctx.moveTo(176, 90); // Move the pen to (30, 50)
ctx.lineTo(176, 700)
ctx.stroke();
ctx.beginPath();
ctx.arc(135, 700, 70, 0, Math.PI, false);
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = 'pink';
ctx.fill();
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Puta renfe, puta gene", 10, 800);

