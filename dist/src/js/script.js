const iconMenu = document.querySelector(".hamburger");
const categoriesList = document.getElementById("categories");
const headerArrow = document.querySelector(".header__arrow");
if (iconMenu) {
	const MenuBody = document.querySelector(".header-nav");
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle("hamburger__active");
		MenuBody.classList.toggle("header-nav__active");
	});
}
if (categoriesList) {
	categoriesList.addEventListener("click", function () {
		headerArrow.classList.toggle("header__arrow-active");
	});
}