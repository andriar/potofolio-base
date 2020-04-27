const hamburger = document.querySelector('.hamburger');
const burgers = document.querySelectorAll('.hamburger div');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	links.forEach((link) => {
		link.classList.toggle('fade');
	});

	burgers.forEach((burger) => {
		burger.classList.toggle('open');
	});
});
