'use strict';
/** Funkce pro pokročilé
 * cookieDelete(název) vymaže danou cookie (Všechny cookies jdou získat příkazem documnet.cookie)
 */
$(function () {
	let mode = cookieGet('mode');
	if (mode == 'dark') {
		modeSwitch();
	}
});
/* Cookies věci > */
/* Vyvoření cookie */
function cookieSet(cname, cvalue, exdays) {
	if (exdays > 0) {
		let d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		var expires = 'expires=' + d.toUTCString();
		document.cookie = `${cname}=${cvalue};${expires};path=/;`;
	} else {
		document.cookie = `${cname}=${cvalue};path=/;`;
	}
}
/* Získání cookie */
function cookieGet(cname) {
	const name = cname + '=';
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}
/* Smazaní cookie */
function cookieDelete(cname) {
	document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 //UTC; path=/;`;
}
/* < Cookies věci */
/* Light / Dark mode */
function modeSwitch() {
	let current_mode;
	$('body').toggleClass('dark-theme');
	if ($('body').attr('class') == 'light-theme') {
		current_mode = 'white';
	} else {
		current_mode = 'dark';
	}
	cookieSet('mode', current_mode, -1);
}
/*element je buď ID (#x) nebo CLASS (.x) nebo TAG (x) offSet určuje o kolik nad daný element to skočí*/
function scrollToElement(element, offSet) {
	console.log('A');
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: $(element).offset().top - offSet,
		},
		1000
	);
}
/* Schová vše v <header> <footer> a .everythingElse */
function restOfPage(state) {
	const header = $('header');
	const page = $('.everythingElse');
	const footer = $('footer');
	if (state == 0) {
		header.hide();
		page.hide();
		footer.hide();
	} else if (state == 1) {
		header.show();
		page.show();
		footer.hide();
	}
}
$('#change').click(function () {
	modeSwitch();
});
