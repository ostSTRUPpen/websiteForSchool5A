'use strict';
let canTest = true;
$(function () {
	/* Schová zbytek stránky, dokud člověk neprojde captchu */
	restOfPage(0);
	captcha('Co za text se nachází na obrázku?', -1);
	/* Kontrola jestli už nedělal test */
	const score = cookieGet('score');
	if (score != '') {
		canTest = false;
		const finnalPoints = cookieGet('score');
		$('#finnalOutput').html(
			`${finnalPoints} správných odpovědí z 18<br/>Úspěšnost:<br/><meter min='0' max='18' low='10' optimum='18' high='15' value='${finnalPoints}'></meter><br/>`
		);
	}
});
/* Generace náhodného čísla */
function between(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
function captcha(msg, last) {
	/* Výběr captchi */
	const captchaChosenRandomNumber = between(0, 5);
	/* Brání zobrazení stejné captchi za sebou */
	if (captchaChosenRandomNumber == last) {
		captcha(msg, captchaChosenRandomNumber);
	} else {
		/* Načtení správného obrázku */
		const captchaChosenRandomImage = `../files/captcha/captcha${captchaChosenRandomNumber}.png`;
		/* Samotná captcha */
		const captchaBox = $('#captcha');
		captchaBox.find('.message').text(msg);
		/* Kontrola textu */
		captchaBox
			.find('.yes')
			.unbind()
			.click(function () {
				checkCaptchaAnswer();
			});
		captchaBox.on('keydown', function (event) {
			if (event.which == 13) {
				checkCaptchaAnswer();
			}
		});
		/* Vznik nové captchy */
		captchaBox.find('.captchaImage').attr('src', captchaChosenRandomImage);
		captchaBox.find('.captchaInput').val('');
		captchaBox.show();

		/* Samotná kontrola textu */
		function checkCaptchaAnswer() {
			/* Žádost o kontrolu captchy */
			$.get(
				'../code/captcha.php',
				`ans=${captchaBox.find('.captchaInput').val()}`,
				function (data, status) {
					if (status == 'error' || status == 'parseerror') {
						alert(
							'Mezi vámi a serverem došlo k chybě. Zkuste prosím znovu načíst stránku'
						);
					} else {
						if (data == true) {
							captchaBox.hide();
							restOfPage(1);
						} else {
							captcha(msg, captchaChosenRandomNumber);
						}
					}
				}
			);
		}
	}
}
function finnalPoints() {
	/* Ještě netestoval */
	if (canTest == true) {
		/* Načtení všech odpovědí */
		const quizAnswers = [
			$("[name='hypertextmarkuplanguageQuestion1']:checked").val(),
			$("[name='hypertextmarkuplanguageQuestion2']:checked").val(),
			$("[name='hypertextmarkuplanguageQuestion3']:checked").val(),
			$("[name='hypertextmarkuplanguageQuestion4']:checked").val(),
			$("[name='hypertextmarkuplanguageQuestion5']:checked").val(),
			$("[name='cascadingstylesheetsQuestion1']:checked").val(),
			$("[name='cascadingstylesheetsQuestion2']:checked").val(),
			$("[name='cascadingstylesheetsQuestion3']:checked").val(),
			$("[name='cascadingstylesheetsQuestion4']:checked").val(),
			$("[name='cascadingstylesheetsQuestion5']:checked").val(),
			$('#javascriptQuestion1').val(),
			$("[name='javascriptQuestion2']:checked").val(),
			$('#javascriptQuestion3').val(),
			$('#javascriptQuestion4').val(),
			$('#javascriptQuestion5').val(),
			$('#javascriptQuestion6').val(),
			$('#javascriptQuestion7').val(),
			$('#javascriptQuestion8').val(),
		];
		/**
		 * Výběrové pole vrací undefined, pokud nic nevybral
		 * Textové pole vrací '', pokud nic nevybral
		 * */
		if (
			quizAnswers.indexOf(undefined) >= 0 ||
			quizAnswers.indexOf('') >= 0
		) {
			alert('Prosím odpovězte na všechny otázky');
			return;
		}
		/* Zformátování a převedení odpovědí na string */
		let quizAnswersString = '';
		for (let i = 0; i < quizAnswers.length; i++) {
			quizAnswersString +=
				quizAnswers[i]
					.toString()
					.replaceAll(' ', '')
					.replaceAll("'", '"') + '@@';
		}
		quizAnswersString = quizAnswersString.slice(0, -2);
		/* Žádost o vyhodnocení */
		$.get(
			'../code/test.php',
			`qAns=${quizAnswersString}`,
			function (data, status) {
				if (status == 'error' || status == 'parseerror') {
					alert(
						'Mezi vámi a serverem došlo k chybě. Zkuste prosím znovu načíst stránku'
					);
				} else {
					data = data.split('|');
					const points = data[0];
					let partOfText;
					if (data[1] != 'a') {
						partOfText = data[1];
					} else if (points == 0) {
						partOfText = 'správných odpovědí z 18';
					} else if (points == 1) {
						partOfText = 'správná odpověď z 18';
					} else if (points >= 2 && points <= 4) {
						partOfText = 'správné odpovědi z 18';
					} else {
						partOfText = 'správných odpovědí z 18';
					}
					$('#finnalOutput').html(
						`${points} ${partOfText}<br/><br/><p class="success_rate">Úspěšnost:</p><meter min='0' max='18' low='10' optimum='18' high='15' value='${points}'></meter><br/>`
					);
					cookieSet('score', points, 1);
					canTest = false;
				}
			}
		);
	} else if (canTest == false) {
		/* Už testoval */
		alert('Test můžete udělat pouze jednou denně!');
	}
}
