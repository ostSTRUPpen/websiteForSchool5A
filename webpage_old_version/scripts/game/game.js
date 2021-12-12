/* Volání funkce na začátku */
$(function () {
	typeWriter(0);
});

let text;
let length;
let timeOut;
let character;
/* Postupné psaní textu */
function typeWriter(loaded) {
	if (loaded != 1) {
		text = $('.typewriter').text();
		length = text.length;
		character = 0;
	}
	timeOut = setTimeout(function () {
		character++;
		var type = text.substring(0, character);
		$('.typewriter').text(type);
		typeWriter(1);

		if (character == length) {
			clearTimeout(timeOut);
		}
		/* Měňte číslo pro změnu času potřebného k výpisu */
	}, 50);
}
/* salon měnící se adam */
let imageNumber = -1;

function displayAdam() {
	if (imageNumber < 0) {
		imageNumber = 8;
	} else if (imageNumber > 8) {
		imageNumber = 0;
	}
	console.log(imageNumber);
	if (imageNumber == 0) {
		document.getElementById('Adam').src =
			'../../files/pictures/asihra/characters/Adam/normal/adam-cervena.png';
	} else if (imageNumber == 1) {
		document.getElementById('Adam').src =
			'../../files/pictures/asihra/characters/Adam/normal/adam-modra.png';
	} else if (imageNumber == 2) {
		document.getElementById('Adam').src =
			'../../files/pictures/asihra/characters/Adam/normal/adam-purpurova.png';
	} else if (imageNumber == 3) {
		document.getElementById('Adam').src =
			'../../files/pictures/asihra/characters/Adam/normal/adam-zluta.png';
	} else if (imageNumber == 4) {
		document.getElementById('Adam').src =
			'../../files/pictures/asihra/characters/Adam/normal/adam-bila.png';
	} else if (imageNumber == 5) {
		document.getElementById('Adam').src =
			'../../files/pictures/asihra/characters/Adam/normal/adam-pink.png';
	} else if (imageNumber == 6) {
		document.getElementById('Adam').src =
			'../../files/pictures/asihra/characters/Adam/normal/adam-ginger.png';
	} else if (imageNumber == 7) {
		document.getElementById('Adam').src =
			'../../files/pictures/asihra/characters/Adam/normal/adam-sexy modra.png';
	} else if (imageNumber == 8) {
		document.getElementById('Adam').src =
			'../../files/pictures/asihra/characters/Adam/normal/adam-black.png';
	}
}
function plus() {
	imageNumber++;
	displayAdam();
}

function minus() {
	imageNumber--;
	displayAdam();
}
