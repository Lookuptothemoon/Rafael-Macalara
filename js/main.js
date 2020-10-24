/* ON WINDOW LOAD */
let reload = true;
$(window).on('load', function() {
	$('.preloader-wrapper').fadeOut(500);
});

/* ON DOCUMENT READY */
$(document).ready( function() {
	// slick slideshow prev and next buttons
	$('.slick-prev').html("<i class='fas fa-angle-left'></i>");
	$('.slick-next').html("<i class='fas fa-angle-right'></i>");

	/* submenu toggle */
	$(".submenu-trigger, .header-nav-submenu").hover( function() {
		$(".header-nav-submenu").show();
	}, function() {
		$(".header-nav-submenu").hide();
	});

	$(".submenu-mobile-trigger").click(function() {
		$(".header-mobile-nav-submenu").toggle();
	});
});

/* ON WINDOW RESIZING */
$(window).on('resize', function() {
	/* show nav menu when width >= 960 */
	let width = $(window).width();
	if(width >= 965){
		$(".navbar-menu-item").show();
	}else{
		$(".navbar-menu-item").hide();
	}

	if( $(window).width() >= 768 ){
		$(".header-mobile-modal")[0].style.display = "none";
		$(".header-nav-submenu, .header-mobile-nav-submenu").hide();
		$(".plus, .mobile-plus").show();
	}
});

/* mobile nav toggle */
// close modal menu on mobile
const closeModal = () => {
	$(".header-mobile-modal")[0].style.display = "none";
	$(".header-mobile-nav-submenu").hide();
};
// open modal menu on mobile
const openModal = () => {
	$(".header-mobile-modal")[0].style.display = "flex";
};
