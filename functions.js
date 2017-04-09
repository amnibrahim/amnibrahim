$(document).scroll(function() {

	var Vscroll = $(this).scrollTop();

	console.log(Vscroll);

	$('.pic1 img, .pic3 img').css({
		'transform': 'translateY('+ Vscroll/50 +'%)',
		'transition': '2s'
	});

	$('.pic2 img, .pic2 img').css({
		'transform': 'translateY('+ Vscroll/30 +'%)',
		'transition': '2s'
	});

	$('.picWrap pic5 img').css({
		'transform': 'translateY(-100%)',
		'transition': '2s'
	});

	// $('.pic1').css({
	// 	'background-color': 'rgb('+ Vscroll/50 +','+Vscroll/100+','+Vscroll/5+')',
	// 	'opacity': '1',
	// });

});