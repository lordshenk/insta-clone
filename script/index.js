const body = document.getElementsByTagName('body')[0];
const preload = document.getElementsByClassName('preload')[0];

window.onload = () => {
	preload.style.display = 'none';
	body.style.overflowY = 'scroll';
}