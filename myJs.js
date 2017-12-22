/*jslint devel: true */
/*global $, SmoothScroll*/


/*------------------------Father----------------------------*/
/* Start Navbar */
/* This is the code navbar & list slider */

/*____________________________________________________*/
/* variable */

var btnListShow = document.getElementById("btn-list-show"),
	list = document.getElementById("list"),
	linkOne = document.getElementById("link-1"),
	linkTwo = document.getElementById("link-2"),
	linkThree = document.getElementById("link-3"),
	linkFour = document.getElementById("link-4"),
	linkFive = document.getElementById("link-5");


/*__________________________Son__________________________*/
/* Function */
/* Change the random timing of the links when the list goes down */

function myRandom(num) {
	"use strict";

	var roundMy = Math.round(Math.random() * num),
		numElse = 2000;

	if (roundMy > 1500) {
		roundMy.toFixed();
	} else {
		numElse.toFixed();
	}
	return numElse + roundMy;
}

/* Move the link in left to right */

function moveSliderLeft() {

	"use strict";

	setTimeout(
		function () {
			linkOne.style = "transition: 3s; transform: translateX(0px)";
		},
		myRandom(4000)
	);
	setTimeout(
		function () {
			linkTwo.style = "transition: 3s; transform: translateX(0px)";
		},
		myRandom(3000)
	);

	setTimeout(
		function () {
			linkThree.style = "transition: 3s; transform: translateX(0px)";
		},
		myRandom(2500)
	);

	setTimeout(
		function () {
			linkFour.style = "transition: 3s; transform: translateX(0px)";
		},
		myRandom(3500)
	);
	setTimeout(
		function () {
			linkFive.style = "transition: 3s; transform: translateX(0px)";
		},
		myRandom(3750)
	);

}

/* Move the link in right to left */

function moveSliderRight() {
	"use strict";

	setTimeout(
		function () {
			linkOne.style = "transition: .1s; transform: translateX(-300px)";
		},
		400
	);
	setTimeout(
		function () {
			linkTwo.style = "transition: .1s; transform: translateX(-300px)";
		},
		400
	);

	setTimeout(
		function () {
			linkThree.style = "transition: .1s; transform: translateX(-300px)";
		},
		400
	);

	setTimeout(
		function () {
			linkFour.style = "transition: .1s; transform: translateX(-300px)";
		},
		400
	);
	setTimeout(
		function () {
			linkFive.style = "transition: .1s; transform: translateX(-300px)";
		},
		400
	);

}


/*__________________________Son__________________________*/


/*__________________________Son__________________________*/
/* visible and hidden the list in the navbar */

btnListShow.onclick = function () {
	"use strict";

	btnListShow.classList.toggle("fa-bars");
	btnListShow.classList.toggle("fa-close");

	list.classList.toggle("move-up");
	list.classList.toggle("move-down");

	if (btnListShow.className.length === 16) {
		
		moveSliderRight();
		
	} else {
		
		moveSliderLeft();
		
	}

};

/* End Navbar */
/*------------------------Father----------------------------*/
///////////////////////> MUSTAFAMAX <///////////////////////////
/*------------------------Father----------------------------*/
/* Start Scroll Top*/

var scrolTop = document.getElementById("scroll-top");
	
window.onscroll = function () {
	
	"use strict";
	
	if (window.scrollY > 500) {
		
		scrolTop.style.display = "block";
		
	} else {
		
		scrolTop.style.display = "none";
		
	}
	
};

/* End Scroll Top */
/*------------------------Father----------------------------*/
///////////////////////> MUSTAFAMAX <///////////////////////////
/*------------------------Father----------------------------*/
/* Start code jQuery */

$(function () {
	"use strict";

	var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 1500,
			easing: 'easeOutCubic',
			ignore: '[data-scroll-ignore]'

		}),
		heightWindow = $(window).height(),
		widthWindow = $(window).width();

	$(".height-window").height($(window).height());

	/* Start resize window site */

	$(window).on("resize", function () {

		$(".height-window").height($(window).height());

		var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 1500,
			easing: 'easeOutCubic',
			ignore: '[data-scroll-ignore]'
		});

	});

	/* End resize window site */

	/* Start responsive video */

	$(".youtube").fitVids();

	/* End responsive video */

	/* Start load page site */

	$("#page-load").hide();

	/* End load page site */

	/* Start scroll site */

	$("html").niceScroll({
		cursorcolor: "#888",
		cursorwidth: "15px",
		cursorborder: "1px solid #555",
		cursorborderradius: null,
		cursoropacitymin: 0.1,
		zindex: 1
	});

	/* End scroll site */
	
	/* Start responsive text */
	
	if (widthWindow > 500) {
		
		$(".fit-text").fitText(4);
		
	} else {
		
		$(".fit-text").fitText(2.5);
		
	}
	
	/* End responsive text */

});

/* End code jQuery */
