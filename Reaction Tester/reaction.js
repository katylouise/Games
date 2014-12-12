
		var clickedTime;
		var createdTime;
		var reactionTime;

//create box after 4 seconds
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
			var left = Math.random() * 800;

			$('#box').css({'left':left});
			$('#box').css({'top':top});
		}
//disappear box on clicking
		function boxDisappear() {
			$('#box').click(function() {
				clickedTime = $.now();
				reactionTime = (clickedTime - createdTime)/1000;
				$('#time').html(reactionTime);

				$(this).hide();
				boxAppear();
			});
		}
//start on click of button		
function start() {
$('#button').click(function() {
	boxAppear();
	});
}

$(document).ready(function() {
	start();
	boxDisappear();
});