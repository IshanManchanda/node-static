let prevScrollpos = 0;
const navItems = document.querySelectorAll('.transparent-light .nav-item-c');
const icons = document.querySelector('.icons-c');

window.onscroll = function () {
	const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

	if (prevScrollpos > currentScrollPos) {
		document.querySelector('.navbar-c').style.top = '0';
		if (currentScrollPos != 0) {
			for (let i = 0; i < navItems.length; i++) {
				navItems[i].style.color = '#242424';
			}
			document.querySelector('.cross-c').style.color = '#242424';
			document.querySelector('.navbar-c').style.backgroundColor = '#FFFFFF';
		} else {
			for (let i = 0; i < navItems.length; i++) {
				navItems[i].style.color = '#FFFFFF';
			}
			document.querySelector('.transparent-light .cross-c').style.color = '#FFFFFF';
			document.querySelector('.navbar-c').style.backgroundColor = 'transparent';
		}
	} else {
		document.querySelector('.navbar-c').style.top = '-72px';
	}

	prevScrollpos = currentScrollPos;
};

function navbarExpand() {
	document.querySelector('.cross-c').classList.toggle('show');
	document.querySelector('.icons-c').classList.toggle('show');
	document.querySelector('.links-c').classList.toggle('show');
	if (icons.classList.contains('show')) {
		for (let i = 0; i < navItems.length; i++) {
			navItems[i].style.color = '#242424';
		}
		document.querySelector('.transparent-light .cross-c').style.color = '#242424';
	} else {
		for (let i = 0; i < navItems.length; i++) {
			navItems[i].style.color = '#fff';
		}
		document.querySelector('.transparent-light .cross-c').style.color = '#fff';
	}
}
