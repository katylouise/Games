$(document).ready(function() {
	$('#play').click(function() {
		$(this).hide();
		$('#rules').show();

		if ($('img').hasClass('highlighted_user') || $('img').hasClass('highlighted_computer')) {
			$('img').removeClass('highlighted_user');
			$('img').removeClass('highlighted_computer');
		}

	});

	$('#rock').click(function() {
		$(this).addClass('highlighted_user');
		$('#rules').hide();

		var random = Math.random();

		setTimeout(function() {
		if (random < 0.5) {
			$('#paper').addClass('highlighted_computer');
			$('#lose').show();
		}

		else {
			$('#scissors').addClass('highlighted_computer');
			$('#win').show();
		}
	}, 2000);

		setTimeout(function() {
			$('#play').show();
			$('#win').hide();
			$('#lose').hide();

		}, 4000);
	});

	$('#paper').click(function() {
		$(this).addClass('highlighted_user');
		$('#rules').hide();

		var random = Math.random();

		setTimeout(function() {
		if (random < 0.5) {
			$('#scissors').addClass('highlighted_computer');
			$('#lose').show();
		}

		else {
			$('#rock').addClass('highlighted_computer');
			$('#win').show();

		}}, 2000);


		setTimeout(function() {
			$('#play').show();
			$('#win').hide();
			$('#lose').hide();
		}, 4000);
	});

	$('#scissors').click(function() {
		$(this).addClass('highlighted_user');
		$('#rules').hide();

		var random = Math.random();

		setTimeout(function() {
		if (random < 0.5) {
			$('#rock').addClass('highlighted_computer');
			$('#lose').show();

		}

		else {
			$('#paper').addClass('highlighted_computer');
			$('#win').show();


		}}, 2000);


		setTimeout(function() {
			$('#play').show();
			$('#win').hide();
			$('#lose').hide();
		}, 4000);
	});

});


