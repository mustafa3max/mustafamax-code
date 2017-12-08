/*jslint devel: true */


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
/* Start Youtube */
/*
var videoOne = document.getElementById("video-one"),
	videoTwo = document.getElementById("video-two"),
	linksVideoOne = [
		"p8Ni9YR4i-k",
		"ksSIjC6VK-8",
		"LnPwC4pzviE",
		"embed/4N1RQaMk0z0",
		"QUlpkBgqmEY"
	],
	linksVideoTwo = [
		"LnPwC4pzviE",
		"embed/4N1RQaMk0z0",
		"DZ5EUt8swKU",
		"e03pw3L5bxA",
		"ROM7b9mueSA"
	],
	lengthListVideo = Math.floor(Math.random() * linksVideoOne.length);

window.onload = function () {
	"use strict";
	videoOne.setAttribute("src", "https://www.youtube.com/watch?v=" + linksVideoOne[lengthListVideo]);
	videoTwo.setAttribute("src", "https://www.youtube.com/watch?v=" + linksVideoTwo[lengthListVideo]);
};
*/
/* End Youtube */
/*------------------------Father----------------------------*/
///////////////////////> MUSTAFAMAX <///////////////////////////
/*------------------------Father----------------------------*/
/* Start Wait for the page to load */

window.onload = function () {
	"use strict";
	document.getElementById("page-load").style = "display: none";
};

/* End Wait for the page to load */
