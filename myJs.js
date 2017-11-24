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
	linkFive = document.getElementById("link-5"),
	randomMy = Math.random(),
	roundMy;

/*__________________________Son__________________________*/
/* Change the random timing of the links when the list goes down */

function myRandom(num) {
	"use strict";
	roundMy = Math.round(randomMy * num);
	if (roundMy > 1500) {
		var numIF = roundMy;
	} else {
		var numElse = 2000;
	}
	return numIF, numElse, roundMy;
}

/*__________________________Son__________________________*/


/*__________________________Son__________________________*/
/* visible and hidden the list in the navbar */

btnListShow.onclick = function () {
	"use strict";

	if (btnListShow.className.length >= 16) {

		list.classList.toggle("move-down");

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

		btnListShow.classList.remove("fa", "fa-bars", "fa-lg");
		btnListShow.classList.add("fa", "fa-times", "fa-lg");

		btnListShow.onclick = function () {

			list.classList.toggle("move-up");
			list.firstElementChild.classList.toggle("move-left");

			btnListShow.classList.remove("fa", "fa-times", "fa-lg");
			btnListShow.classList.add("fa", "fa-bars", "fa-lg");

		};

	}

};

/* End Navbar */
/*------------------------Father----------------------------*/
