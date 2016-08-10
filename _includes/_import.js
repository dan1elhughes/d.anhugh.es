/* https://codepen.io/hakimel/pen/ZOrvQV */

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var lines = [];

var step = 0,
	width = 0,
	height = 0;

window.onresize = setup;

setup();
update();

function setup() {

	width = window.innerWidth;
	height = document.querySelector('header').clientHeight;

	lines.length = 0;

	var lineCount = 10;
	var pointCount = 14;
	var spacingH = width / pointCount;
	var spacingV = height / lineCount;

	for (var v = 0; v < lineCount; v++) {

		var line = {
			points: [],
			ran: 0.2 + Math.random() * 0.7
		};

		for (var h = 0; h < pointCount; h++) {
			line.points.push({
				nx: h * spacingH,
				ny: v * spacingV
			});
		}

		line.points.push({
			nx: width + spacingH,
			ny: v * spacingV
		});

		lines.push(line);

	}

}

function update() {

	step += 0.4;

	canvas.width = width;
	canvas.height = height;

	context.clearRect(0, 0, width, height);

	context.lineWidth = 3;
	context.strokeStyle = '#333';
	context.fillStyle = '#212425';

	lines.forEach(function(line) {

		context.beginPath();

		line.points.forEach(function(point) {

			point.x = point.nx;
			point.y = point.ny + Math.sin((point.x * line.ran + (step + point.ny)) / 40) * (6 + (point.ny / height * 34));

		});

		line.points.forEach(function(point, h) {

			var nextPoint = line.points[h + 1];

			if (h === 0) {
				context.moveTo(point.x, point.y);
			} else if (nextPoint) {
				var cpx = point.x + (nextPoint.x - point.x) / 2;
				var cpy = point.y + (nextPoint.y - point.y) / 2;
				context.quadraticCurveTo(point.x, point.y, cpx, cpy);
			}

		});

		context.stroke();

		context.lineTo(width, height);
		context.lineTo(0, height);
		context.closePath();
		context.fill();

	});

	requestAnimationFrame(update);

}
