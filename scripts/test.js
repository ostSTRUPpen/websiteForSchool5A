$(function () {
	restOfPage(0);
	captcha('Co za text se nachází na obrázku?', -1);
});
function between(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
function captcha(msg, last) {
	// Načtení správných odpovědí
	const captchaKeys = [
		'3c8c53ae4d73b75332dceed40e46c2eaff3dcfb486b41fb34e5ded19b901028c',
		'995545c4974b6ff59443b7e671651f0c2ffc53233d593150b5389da8e97d8b7a',
		'242dc71caab06d65617be88a96f36712a861d9322ee69a02caefaa6b4623fbe6',
		'64c62ac7dd56a738e0eddde0ffaab5547d4aadf2d34ed522ec37a07f88089808',
		'a7818241c4fbad252b6d84179fda4e30fc849a732cc99b530a2ed057d96f0e9f',
		'7c182a8ddac9a96eb47032e9f9a3452b105424b805a0ddd6d10d5e4ddeb962e9',
	];
	// Načtení náhodného obrázku a souvisejícího textu
	const captchaChosenRandomNumber = between(0, 5);
	/* Brání zobrazení stejného obrázku za sebou */
	if (captchaChosenRandomNumber == last) {
		captcha(msg, captchaChosenRandomNumber);
	} else {
		const captchaChosenRandomImage = `../files/captcha/test${captchaChosenRandomNumber}.png`;
		const captchaChosenRandomAnswer = `${captchaKeys[captchaChosenRandomNumber]}`;
		// Samotná captcha
		const captchaBox = $('#captcha');
		captchaBox.find('.message').text(msg);
		// Kontrola textu
		captchaBox
			.find('.yes')
			.unbind()
			.click(function () {
				if (
					SHA256(captchaBox.find('.captchaInput').val()) ==
						captchaChosenRandomAnswer ||
                    /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ODSTRANIT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
					captchaBox.find('.captchaInput').val() == '.'
				) {
					captchaBox.hide();
					restOfPage(1);
				} else {
					captcha(msg, captchaChosenRandomNumber);
				}
			});
		// Vznik nové captchi
		captchaBox.find('.captchaImage').attr('src', captchaChosenRandomImage);
		captchaBox.find('.captchaInput').val('');
		captchaBox.show();
	}
}
/**
 * Schová zbytek stránky, dokud člověk neprojde captchu ('captcha()')
 * 0 = schovat
 * 1 = zobrazit
 **/
function restOfPage(state) {
	const page = $('#everythingElse');
	if (state == 0) {
		page.hide();
	} else if (state == 1) {
		page.show();
	}
}
/* Samotné formuláře */
let didHypertextmarkuplanguage = false;
let didCascadingstylesheets = false;
let didJavascript = false;
let finnalPoints = 0;
/* Zobrazení finálního skóre */
function finnalPointsDisplay() {
	if (
		didHypertextmarkuplanguage == true &&
		didCascadingstylesheets == true &&
		didJavascript == true
	) {
		$('#finnalOutput').html(
			`${finnalPoints} správných odpovědí z 18<br/>Úspěšnost:<br/><meter min='0' max='18' low='10' optimum='18' high='15' value='${finnalPoints}'></meter><br/>`
		);
	}
}
function checkHypertextmarkuplanguage() {
	if (didHypertextmarkuplanguage == false) {
		/* Správné odpovědi */
		const hypertextmarkuplanguageRightAnswers = [
			'4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
			'6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
			'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35',
			'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35',
			'4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
		];
		/* Odpovědi uživatele */
		const hypertextmarkuplanguageAnswers = [
			$("[name='hypertextmarkuplanguageQuestion1']:checked").val(),
			$("[name='hypertextmarkuplanguageQuestion2']:checked").val(),
			$("[name='hypertextmarkuplanguageQuestion3']:checked").val(),
			$("[name='hypertextmarkuplanguageQuestion4']:checked").val(),
			$("[name='hypertextmarkuplanguageQuestion5']:checked").val(),
		];
		/* $("[name='hypertextmarkuplanguageQuestion2']:checked").val() vrací undefined, pokud nic nevybral */
		if (hypertextmarkuplanguageAnswers.indexOf(undefined) >= 0) {
			alert('Prosím odpovězte na všechny otázky');
			return;
		}
		let hypertextmarkuplanguagePoints = 0;
		for (let i = 0; i < hypertextmarkuplanguageAnswers.length; i++) {
			const answer = hypertextmarkuplanguageAnswers[i]
				.toString()
				.replaceAll(' ', '');
			if (SHA256(answer) == hypertextmarkuplanguageRightAnswers[i]) {
				hypertextmarkuplanguagePoints++;
			}
		}
		finnalPoints += hypertextmarkuplanguagePoints;
		$('#hypertextmarkuplanguageOutput').html(
			`${hypertextmarkuplanguagePoints} správných odpovědí z 5<br/>Úspěšnost:<br/><meter min='0' max='5' low='3' optimum='5' high='4' value='${hypertextmarkuplanguagePoints}'></meter><br/>`
		);
		didHypertextmarkuplanguage = true;
	}
	finnalPointsDisplay();
}
function checkCascadingstylesheets() {
	if (didCascadingstylesheets == false) {
		/* Správné odpovědi */
		const cascadingstylesheetsRightAnswers = [
			'4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
			'4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce',
			'4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce',
			'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35',
			'4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
		];
		/* Odpovědi uživatele */
		const cascadingstylesheetsAnswers = [
			$("[name='cascadingstylesheetsQuestion1']:checked").val(),
			$("[name='cascadingstylesheetsQuestion2']:checked").val(),
			$("[name='cascadingstylesheetsQuestion3']:checked").val(),
			$("[name='cascadingstylesheetsQuestion4']:checked").val(),
			$("[name='cascadingstylesheetsQuestion5']:checked").val(),
		];
		/* $("[name='cascadingstylesheetsQuestion1']:checked").val() vrací undefined, pokud nic nevybral */
		if (cascadingstylesheetsAnswers.indexOf(undefined) >= 0) {
			alert('Prosím odpovězte na všechny otázky');
			return;
		}
		let cascadingstylesheetsPoints = 0;
		for (let i = 0; i < cascadingstylesheetsAnswers.length; i++) {
			const answer = cascadingstylesheetsAnswers[i]
				.toString()
				.replaceAll(' ', '');
			if (SHA256(answer) == cascadingstylesheetsRightAnswers[i]) {
				cascadingstylesheetsPoints++;
			}
		}
		finnalPoints += cascadingstylesheetsPoints;
		$('#cascadingstylesheetsOutput').html(
			`${cascadingstylesheetsPoints} správných odpovědí z 5<br/>Úspěšnost:<br/><meter min='0' max='5' low='3' optimum='5' high='4' value='${cascadingstylesheetsPoints}'></meter><br/>`
		);
		didCascadingstylesheets = true;
	}
	finnalPointsDisplay();
}
function checkJavascript() {
	if (didJavascript == false) {
		/* Správné odpovědi */
		const javascriptRightAnswers = [
			'cb688cff968f64325cdf37ffbaa40ed98778fea69af09c652cd2ec2163359b3d',
			'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35',
			'04cfb84138fdd5f7486380937975f1c6b669fdf46c99a085db08f8f796265f0a',
			'785f3ec7eb32f30b90cd0fcf3657d388b5ff4297f2f9716ff66e9b69c05ddd09',
			'44c8031cb036a7350d8b9b8603af662a4b9cdbd2f96e8d5de5af435c9c35da69',
			'93223b3d4cf2ac047ac044b8c4dd87900592a3ce4a35d7d3b0226935e4234e3f',
			'270f56275f8ec05ca56e0c310f8a734f6eb60f51e6dfb9277e33921df6991a7c',
			'3b325109deb02ebf8150c4cc76e908d55f977082fe74bfd455e298770351b77d',
		];
		/* Odpovědi uživatele */
		const javascriptAnswers = [
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
		 * $("[name='javascriptQuestion2']:checked").val() vrací undefined, pokud nic nevybral
		 * $('#javascriptQuestion1').val() vrací '', pokud nic nevybral
		 **/
		if (
			javascriptAnswers.indexOf(undefined) >= 0 ||
			javascriptAnswers.indexOf('') >= 0
		) {
			alert('Prosím odpovězte na všechny otázky');
			return;
		}
		let javascriptPoints = 0;
		for (let i = 0; i < javascriptAnswers.length; i++) {
			const answer = javascriptAnswers[i].toString().replaceAll(' ', '');
			if (SHA256(answer) == javascriptRightAnswers[i]) {
				javascriptPoints++;
			}
		}
		finnalPoints += javascriptPoints;
		$('#javascriptOutput').html(
			`${javascriptPoints} správných odpovědí z 8<br/>Úspěšnost:<br/><meter min='0' max='8' low='5' optimum='8' high='6' value='${javascriptPoints}'></meter><br/>`
		);
		didJavascript = true;
	}
	finnalPointsDisplay();
}

/**
 * Vše pod tímto komentářem je až moc nerd-stuff (ani já tomu nerozumím)
 * Secure Hash Algorithm (SHA256)
 * http://www.webtoolkit.info/
 * Original code by Angel Marin, Paul Johnston
 **/
function SHA256(s) {
	var chrsz = 8;
	var hexcase = 0;

	function safe_add(x, y) {
		var lsw = (x & 0xffff) + (y & 0xffff);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xffff);
	}

	function S(X, n) {
		return (X >>> n) | (X << (32 - n));
	}
	function R(X, n) {
		return X >>> n;
	}
	function Ch(x, y, z) {
		return (x & y) ^ (~x & z);
	}
	function Maj(x, y, z) {
		return (x & y) ^ (x & z) ^ (y & z);
	}
	function Sigma0256(x) {
		return S(x, 2) ^ S(x, 13) ^ S(x, 22);
	}
	function Sigma1256(x) {
		return S(x, 6) ^ S(x, 11) ^ S(x, 25);
	}
	function Gamma0256(x) {
		return S(x, 7) ^ S(x, 18) ^ R(x, 3);
	}
	function Gamma1256(x) {
		return S(x, 17) ^ S(x, 19) ^ R(x, 10);
	}

	function core_sha256(m, l) {
		var K = new Array(
			0x428a2f98,
			0x71374491,
			0xb5c0fbcf,
			0xe9b5dba5,
			0x3956c25b,
			0x59f111f1,
			0x923f82a4,
			0xab1c5ed5,
			0xd807aa98,
			0x12835b01,
			0x243185be,
			0x550c7dc3,
			0x72be5d74,
			0x80deb1fe,
			0x9bdc06a7,
			0xc19bf174,
			0xe49b69c1,
			0xefbe4786,
			0xfc19dc6,
			0x240ca1cc,
			0x2de92c6f,
			0x4a7484aa,
			0x5cb0a9dc,
			0x76f988da,
			0x983e5152,
			0xa831c66d,
			0xb00327c8,
			0xbf597fc7,
			0xc6e00bf3,
			0xd5a79147,
			0x6ca6351,
			0x14292967,
			0x27b70a85,
			0x2e1b2138,
			0x4d2c6dfc,
			0x53380d13,
			0x650a7354,
			0x766a0abb,
			0x81c2c92e,
			0x92722c85,
			0xa2bfe8a1,
			0xa81a664b,
			0xc24b8b70,
			0xc76c51a3,
			0xd192e819,
			0xd6990624,
			0xf40e3585,
			0x106aa070,
			0x19a4c116,
			0x1e376c08,
			0x2748774c,
			0x34b0bcb5,
			0x391c0cb3,
			0x4ed8aa4a,
			0x5b9cca4f,
			0x682e6ff3,
			0x748f82ee,
			0x78a5636f,
			0x84c87814,
			0x8cc70208,
			0x90befffa,
			0xa4506ceb,
			0xbef9a3f7,
			0xc67178f2
		);
		var HASH = new Array(
			0x6a09e667,
			0xbb67ae85,
			0x3c6ef372,
			0xa54ff53a,
			0x510e527f,
			0x9b05688c,
			0x1f83d9ab,
			0x5be0cd19
		);
		var W = new Array(64);
		var a, b, c, d, e, f, g, h, i, j;
		var T1, T2;

		m[l >> 5] |= 0x80 << (24 - (l % 32));
		m[(((l + 64) >> 9) << 4) + 15] = l;

		for (var i = 0; i < m.length; i += 16) {
			a = HASH[0];
			b = HASH[1];
			c = HASH[2];
			d = HASH[3];
			e = HASH[4];
			f = HASH[5];
			g = HASH[6];
			h = HASH[7];

			for (var j = 0; j < 64; j++) {
				if (j < 16) W[j] = m[j + i];
				else
					W[j] = safe_add(
						safe_add(
							safe_add(Gamma1256(W[j - 2]), W[j - 7]),
							Gamma0256(W[j - 15])
						),
						W[j - 16]
					);

				T1 = safe_add(
					safe_add(
						safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)),
						K[j]
					),
					W[j]
				);
				T2 = safe_add(Sigma0256(a), Maj(a, b, c));

				h = g;
				g = f;
				f = e;
				e = safe_add(d, T1);
				d = c;
				c = b;
				b = a;
				a = safe_add(T1, T2);
			}

			HASH[0] = safe_add(a, HASH[0]);
			HASH[1] = safe_add(b, HASH[1]);
			HASH[2] = safe_add(c, HASH[2]);
			HASH[3] = safe_add(d, HASH[3]);
			HASH[4] = safe_add(e, HASH[4]);
			HASH[5] = safe_add(f, HASH[5]);
			HASH[6] = safe_add(g, HASH[6]);
			HASH[7] = safe_add(h, HASH[7]);
		}
		return HASH;
	}

	function str2binb(str) {
		var bin = Array();
		var mask = (1 << chrsz) - 1;
		for (var i = 0; i < str.length * chrsz; i += chrsz) {
			bin[i >> 5] |=
				(str.charCodeAt(i / chrsz) & mask) << (24 - (i % 32));
		}
		return bin;
	}

	function Utf8Encode(string) {
		string = string.replace(/\r\n/g, '\n');
		var utftext = '';

		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if (c > 127 && c < 2048) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
		}

		return utftext;
	}

	function binb2hex(binarray) {
		var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
		var str = '';
		for (var i = 0; i < binarray.length * 4; i++) {
			str +=
				hex_tab.charAt(
					(binarray[i >> 2] >> ((3 - (i % 4)) * 8 + 4)) & 0xf
				) +
				hex_tab.charAt((binarray[i >> 2] >> ((3 - (i % 4)) * 8)) & 0xf);
		}
		return str;
	}

	s = Utf8Encode(s);
	return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}
