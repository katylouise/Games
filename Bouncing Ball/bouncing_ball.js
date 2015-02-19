var canvas = document.getElementById('bounce');
var ctx = canvas.getContext('2d');
var requestID;

var x = 250;
var y = 100;
var vx = 2;
var vy = 5;
var radius = 40;
var ballY = y + radius;
var ballX = x + radius;

function draw() {
	ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();

	if (y + 40 > canvas.height | y - 40 < 0) {
		vy = -vy;
	}
	if (x + 40 > canvas.width | x - 40 < 0) {
		vx = -vx;
	}

}
function move() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
	x += vx;
	y += vy;
	requestID = window.requestAnimationFrame(move);
	console.log(y);
	}

canvas.addEventListener('mouseover', function(e){
	move();
});

canvas.addEventListener('mouseout', function(e){
	requestID = window.cancelAnimationFrame(requestID);
});

