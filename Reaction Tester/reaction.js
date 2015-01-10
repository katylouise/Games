

var clickedTime;
var createdTime;
var reactionTime;
var totalTime = 0;
var count = 0;
var fastestTime = 100;
//create box after random time < 4 seconds
function boxAppear() {

	setTimeout(function() {
		createdTime = $.now();
		$('#box').show();
	}, Math.floor(Math.random() * 4000));

	//create random coloured boxes
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	$('#box').css({'background':'rgb(' + r + ',' + g + ',' + b + ')'});
	//create circles or squares
	var shape = Math.random();

	if (shape < 0.5) {
		$('#box').css({'border-radius': '0px'});
	}

	else {
		$('#box').css({'border-radius': '75px'});
	}
	//randomly position shape
	var top = Math.random() * 250;
	var left = Math.random() * 900;

	$('#box').css({'left':left});
	$('#box').css({'top':top});

	//randomly change size
	var size = Math.random() * 150;

	if (size < 40) {
		var size = Math.random() * 150;
	}

	$('#box').css({'width': size});
	$('#box').css({'height': size});

}
//disappear box on clicking
function boxDisappear() {
	$('#box').click(function() {
		clickedTime = $.now();
		reactionTime = (clickedTime - createdTime)/1000;
		$('#time').html(reactionTime + " seconds");

		totalTime += reactionTime;
		
		if (reactionTime < fastestTime)
		{
			fastestTime = reactionTime;
		}

		$(this).hide();
		count += 1;

		if (count < 10) {
		boxAppear();
		}
		else {
			gameOver();
		}
	});
}

function gameOver() {
				$('#your_time').hide();

				averageTime = totalTime / 10;
				$('#average').html(averageTime);
				$('#fastest').html(fastestTime);
				$('#gameover').show();
				count = 0;
			}
//start on click of button		
function start() {
$('button').click(function() {
	$('#instructions').hide();
	$('#gameover').hide();
	$('#your_time').show();
	$('#time').html('')
	boxAppear();
	});
}

$(document).ready(function() {
	start();
	boxDisappear();
});