const menuBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#menu');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	mobileMenu.classList.toggle('flex');
	mobileMenu.classList.toggle('hidden');
});
