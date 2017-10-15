$(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

function callback(event) {
    // Provided by the core
    var element   = event.target;         // DOM element, in this example .owl-carousel
    var name      = event.type;           // Name of the event, in this example dragged
    var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
    var items     = event.item.count;     // Number of items
    var item      = event.item.index;     // Position of the current item
    // Provided by the navigation plugin
    var pages     = event.page.count;     // Number of pages
    var page      = event.page.index;     // Position of the current page
    var size      = event.page.size;      // Number of items per page
};

$('.select').selectize();

	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).height()){
			$('.top').addClass('active');
		}else{
			$('.top').removeClass('active');
		}
	});
	
	$('.top').click(function(){
		$('html, body').stop().animate({scrolTop:0},'slow','swing' );
	});

//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});


	//Resize Window
	function onResize(){
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onrisize = function(){onResize();}

});
$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
});