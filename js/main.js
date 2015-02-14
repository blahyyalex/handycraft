
$(function() {

	$(document).on('click', function() {
		$('#navMenu > li').removeClass('selected').find('ul:first').fadeOut();

		valute.removeClass('valListOpen');
		valute_ul.hide();
		hideBasketList();

		$('.opacity').fadeOut(150, function(){ $(this).remove(); });

		lang.find('li:not(.active)').fadeOut(150);
	});


	// Basket List
	var basket = $('#basket > a'),
		basketList = $('#basketList')
		hideBasketList = function() {
			basketList.fadeOut(110, function() {
				basket.removeClass('active');
			});
		};

	basket.on('click', function(e) {
		var self = $(this);

		if(self.hasClass('active')) {
			hideBasketList();
			$('.opacity').fadeOut(150, function(){ $(this).remove(); });
		} else {
			self.addClass('active');
			basketList.fadeIn(150);
			$('<div>').addClass('opacity').appendTo('body').fadeIn(150);
		}


		// Hide Valute
		valute.removeClass('valListOpen');
		valute_ul.hide();

		e.stopPropagation();
		return false;
	});

	basketList.on('click', function(e) {
		e.stopPropagation();
	});


	// Products preview gallery
	$('#pvImg .tumbl a').on('click', function() {
		var $this = $(this);

		$('#pvImg .tumbl a').removeClass('active');
		$this.addClass('active');

		$('#pvImg .img img').fadeOut(100, function() {
			var url = $this.attr('href');
			$(this).attr('src', url).fadeIn(100);
			$(this).parent().attr('href', url );
		});

		return false;
	});


	// Slider
	$(".slider").codaSlider({
		autoSlide: true,
		autoHeight: false,
		panelTitleSelector: '.panel'
	});



	// Navigation
	$('#topNav > li').hover(function(e){
		$(this).has('ul').addClass('selected').find('ul').fadeIn(160);
		return false;
	},function(){
		$(this).removeClass('selected').find('ul:first').fadeOut(100);
	});




});