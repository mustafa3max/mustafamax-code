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
	linkFive = document.getElementById("link-5"),
	randomMy = Math.random(),
	roundMy,
	numElse = 2000,
	numIF = roundMy;

/*__________________________Son__________________________*/
/* Function */
/* Change the random timing of the links when the list goes down */

function myRandom(num) {
	"use strict";
	roundMy = Math.round(randomMy * num);
	if (roundMy > 1500) {
		numIF;
	} else {
		numElse;
	}
	return numIF, numElse, roundMy;
}

/* Move the link in left to right */

function moveSliderLeft() {
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
	setTimeout(
		function () {
			linkOne.style = "transition: 3s; transform: translateX(-300px)";
		},
		myRandom(4000)
	);
	setTimeout(
		function () {
			linkTwo.style = "transition: 3s; transform: translateX(-300px)";
		},
		myRandom(3000)
	);

	setTimeout(
		function () {
			linkThree.style = "transition: 3s; transform: translateX(-300px)";
		},
		myRandom(2500)
	);

	setTimeout(
		function () {
			linkFour.style = "transition: 3s; transform: translateX(-300px)";
		},
		myRandom(3500)
	);
	setTimeout(
		function () {
			linkFive.style = "transition: 3s; transform: translateX(-300px)";
		},
		myRandom(3750)
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
