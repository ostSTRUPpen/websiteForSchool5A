let textNumber = 0;
let prepared; /* True(připraven(button))/False(nepřipraven(buttoon)) */
let asked; /* SE(vyvolan Sáru(button))/VV(vyvolal mne(buttoon)) */
let retard; /* False(zavolal policii(button))/True(zamiloval se(button)) */

function changeText(buttonNumber) {
	/* Ten else if strom mě sere, ale kvůli Adamovi, vám to nebudu přepisovat na switch. */
	if (textNumber == 0) {
		document.getElementById('text_field').innerHTML =
			'Barva, kterou sis na vlasy před chvílí napatlal, byla fakt jakože shitty (a nebo máš fakt stronnng vlasy!) Takže po půl hodině slezla.';
		document.getElementById('button').style.display = 'none';
		document.getElementById('buttoon').style.display = 'none';
		document.getElementById('buttooon').style.display = 'none';
		document.getElementById('skip').style.display = 'block';
	}
	if (textNumber == 1) {
		/* 2 RANO */

		document.getElementById('text_field').innerHTML =
			'Je pátek, dvě hodiny ráno. Nechce se ti, ale měl by ses začít připravovat na výuku 5.A.';

		document.getElementById('button').style.display = 'block';
		document.getElementById('buttoon').style.display = 'block';
		document.getElementById('button').innerHTML = 'Připravím se na hodinu.';
		document.getElementById('buttoon').innerHTML =
			'Kašlu na to, jsem rozený improvizátor!';
		document.getElementById('buttooon').style.display = 'none';
		document.getElementById('skip').style.display = 'none';
		document.body.style.backgroundImage =
			"url('../../files/pictures/asihra/backgrounds/room-nightS.png')";
		document.getElementById('character').src =
			'../../files/pictures/asihra/characters/Adam/special/adam-exhausted.png';
	} else if (textNumber == 2) {
		/* Spát */
		document.getElementById('text_field').innerHTML =
			'Oči se ti přes všechny legální i nelegální životabudiče zavírají...doslova, koukni se na sebe, jak vypadáš. Usínáš.';
		document.getElementById('button').style.display = 'none';
		document.getElementById('buttoon').style.display = 'none';
		document.getElementById('buttooon').style.display = 'none';
		document.getElementById('skip').style.display = 'block';
	} else if (textNumber == 3) {
		/* HODINA */
		document.getElementById('text_field').innerHTML =
			'Ráno se cítíš trochu líp. Je spojená hodina ICT výtvarné i hudební skupiny, položil jsi studentům otázku: Jak určíš classsu "important" .divu. Jediní se hlásí Sára a Vojta V.';

		document.getElementById('button').style.display = 'block';
		document.getElementById('buttoon').style.display = 'block';
		document.getElementById('button').innerHTML = 'Vyvolám Sáru!';
		document.getElementById('buttoon').innerHTML = 'Vyvolám Vojtu V!';
		document.getElementById('buttooon').style.display = 'none';
		document.getElementById('skip').style.display = 'none';

		document.getElementById('character').src =
			'../../files/pictures/asihra/characters/Adam/normal/adam-hneda.png';
		document.body.style.backgroundImage =
			"url('../../files/pictures/asihra/backgrounds/room-dayS.png')";
	} else if (textNumber == 4) {
		document.getElementById('text_field').innerHTML =
			'Odpověď byla správná, co dál?';
		if (prepared == true) {
			document.getElementById('button').innerHTML =
				'Mám přípravu (Dál se probírá).';
		} else if (prepared == false) {
			document.getElementById('button').innerHTML =
				'Nemám přípravu (Jde se hrát gartic.phone).';
		} else {
			console.log(`Tohle by se nemělo stát. Prepared -> ${prepared}`);
		}
		document.getElementById('buttoon').style.display = 'none';
		document.getElementById('buttooon').style.display = 'none';
	} else if (textNumber == 5) {
		/* PŘEDNÁŠKA */
		document.getElementById('text_field').innerHTML =
			'Ukončil jsi hodinu a začala ti přednáška, co půjdeš dělat?';

		document.getElementById('button').innerHTML = 'Jíst.';
		document.getElementById('buttoon').innerHTML = 'Spát.';
		document.getElementById('buttooon').innerHTML = 'Koukat LikeHouse.';
		document.getElementById('buttooon').style.display = 'block'; //navraceni buttonu
		document.getElementById('buttoon').style.display = 'block';
	} else if (textNumber == 6) {
		/* OBĚD */
		/* z ceho varit */
		document.getElementById('text_field').innerHTML =
			'Docela ti vyhládlo, ale ty se rozhodneš namísto objednání donášky si udělat vlastní oběd. První do mísy hodíš:';

		document.getElementById('button').innerHTML = 'Mouku.';
		document.getElementById('buttoon').innerHTML = 'Vejce.';
		document.getElementById('buttooon').innerHTML = 'Bůček.';
		document.body.style.backgroundImage =
			"url('../../files/pictures/asihra/backgrounds/kitchenS.jpg')";
	} else if (textNumber == 7) {
		/* OBĚD */
		/* co prida */
		document.getElementById('text_field').innerHTML = 'Pak přileješ:';

		document.getElementById('button').innerHTML = 'Mléko.';
		document.getElementById('buttoon').innerHTML = 'Alkohol.';
		document.getElementById('buttooon').innerHTML = 'Smetanu.';
	} else if (textNumber == 8) {
		/* OBĚD */
		/* a jeste */
		document.getElementById('text_field').innerHTML = 'Navrch přidáš:';

		document.getElementById('button').innerHTML = 'Papriku.';
		document.getElementById('buttoon').innerHTML =
			'Barevné zdobení na dort.';
		document.getElementById('buttooon').innerHTML =
			'Kypřící prášek do pečiva.';
	} else if (textNumber == 9) {
		/* OBĚD */
		/* a ted to */
		document.getElementById('text_field').innerHTML = 'A teď to:';

		document.getElementById('button').innerHTML = 'Dáš to do trouby.';
		document.getElementById('buttoon').innerHTML = 'Dáš to na radiátor.';
		document.getElementById('buttooon').innerHTML = 'Dáš vyudit.';
	} else if (textNumber == 10) {
		/* OBĚD */
		/* priloha */
		document.getElementById('text_field').innerHTML = 'Podáváš s přílohou:';

		document.getElementById('button').innerHTML = 'Rýže.';
		document.getElementById('buttoon').innerHTML = 'Houskový knedlík.';
		document.getElementById('buttooon').innerHTML = 'Bábovka.';
	} else if (textNumber == 11) {
		/* OBĚD */
		/* Adam mnam */
		document.getElementById('text_field').innerHTML =
			'Wait, proč jsi to sežral??';
		document.getElementById('button').style.display = 'none';
		document.getElementById('buttoon').style.display = 'none';
		document.getElementById('buttooon').style.display = 'none';
		document.getElementById('skip').style.display = 'block';
		document.getElementById('character').src =
			'../../files/pictures/asihra/characters/Adam/special/adammnam.png';
	} else if (textNumber == 12) {
		/* OBĚD */
		/* Adam zvraci */
		document.getElementById('text_field').innerHTML =
			'Tvl, why? Cos čekal? Nenásleduj Mončiny recepty ve statusu!!';
		document.getElementById('character').src =
			'../../files/pictures/asihra/characters/Adam/special/adam-na-zbliti.png';
	} else if (textNumber == 13) {
		/* NEMOCNICE */
		document.getElementById('text_field').innerHTML =
			'A teď jsi v nemocnici... congrats.';
		document.body.style.backgroundImage =
			"url('../../files/pictures/asihra/backgrounds/hospitalS.jpg')";
	} else if (textNumber == 14) {
		/* NEMOCNICE */
		document.getElementById('text_field').innerHTML =
			'„Vypumpovali jsme Vám žaludek, můžete jít domů :)“ ';
		document.getElementById('character').src =
			'../../files/pictures/asihra/characters/others/doctor.png';
	} else if (textNumber == 15) {
		/* ULICE */
		document.getElementById('text_field').innerHTML =
			'V nemocnici jsi naštěstí stihnul nelostnout, takže si to štráduješ domů.';
		document.body.style.backgroundImage =
			"url('../../files/pictures/asihra/backgrounds/streetS.jpg')";
		document.getElementById('character').src =
			'../../files/pictures/asihra/characters/Adam/normal/adam-hneda.png';
	} else if (textNumber == 16) {
		/* ULICE */
		document.getElementById('text_field').innerHTML =
			'*uširvoucí skřípění brzd*';
		document.body.style.backgroundImage =
			"url('../../files/pictures/asihra/backgrounds/black-vanS.jpg')";
		document.getElementById('character').src =
			'../../files/pictures/asihra/characters/Adam/special/adam-scared.png';
	} else if (textNumber == 17) {
		/* SKLEP */
		document.getElementById('text_field').innerHTML =
			'Dostals pořádnej flákanec a nějakou dobu jsi v bezvědomí...';
		document.body.style.backgroundImage =
			"url('../../files/pictures/asihra/backgrounds/blackS.jpg')";
		document.getElementById('character').src =
			'../../files/pictures/asihra/backgrounds/blackS.jpg';
	} else if (textNumber == 18) {
		/* SKLEP */
		document.getElementById('text_field').innerHTML =
			'Oh shit, was is das misto? Za tebou se ozve hlas. Polekaně se otočíš.';
		document.getElementById('character').display = 'block';
		document.getElementById('character').src =
			'../../files/pictures/asihra/characters/Adam/special/adam-scared.png';
		document.body.style.backgroundImage =
			"url('../../files/pictures/asihra/backgrounds/basementS.jpg')";
	} else if (textNumber == 19) {
		/* SKLEP */
		document.getElementById('text_field').innerHTML =
			'„Řeknu ti to takhle. Dost mi ublížilo, že jsi nevyvolal dopoledne mne. Takže to uděláme následovně. Vezmu si tady telefon a zavolám Dannymu, nějaký čas bys s ním pobyl. Určitě spolu zažijete spoustu zábavy!“';
		document.getElementById('button').style.display = 'block';
		document.getElementById('buttoon').style.display = 'block';
		document.getElementById('button').innerHTML =
			'Nenennenenennenennenennenenene!!!!! Znovu už ne!';
		document.getElementById('buttoon').innerHTML =
			'NE, DANNYHO NE!!! PROSÍM, MĚJ SRDCE!!!';
		document.getElementById('skip').style.display = 'none';
		if (asked == 'SE') {
			document.getElementById('character').src =
				'../../files/pictures/asihra/characters/others/vojta5head.png';
		} else if (asked == 'VV') {
			document.getElementById('character').src =
				'../../files/pictures/asihra/characters/others/saramrkmrk.png';
		} else {
			console.log(`Tohle by se nemělo stát. Asked -> ${asked}`);
		}
	} else if (textNumber == 20) {
		/* POKOJ */
		document.getElementById('text_field').innerHTML =
			'„A nebo Dannymu volat nemusíme a já dostanu plusko. Co ty na to?“';
		document.getElementById('button').innerHTML = 'ANO';
		document.getElementById('buttoon').innerHTML = 'ANO!!';
	} else if (textNumber == 21) {
		/* POKOJ */
		document.getElementById('text_field').innerHTML =
			'„Bylo mi jasné, že se domluvíme... A teď? Lubomírku, víš co máš dělat :)“';
		document.getElementById('button').style.display = 'none';
		document.getElementById('buttoon').style.display = 'none';
		document.getElementById('skip').style.display = 'block';
	} else if (textNumber == 22) {
		/* POKOJ */
		document.getElementById('text_field').innerHTML = '*flákanec*';
		document.body.style.backgroundImage =
			"url('../../files/pictures/asihra/backgrounds/blackS.jpg')";
		document.getElementById('character').src =
			'../../files/pictures/asihra/characters/others/flakanec.png';
	} else if (textNumber == 23) {
		/* POKOJ */
		document.getElementById('text_field').innerHTML =
			'Probudil ses ve svém pokoji. Hrozně tě bolí tě hlava a ... no prostě ti není úplně nejlíp. Existují jen dvě možnosti, jak na únos studentem reagovat.';
		document.getElementById('button').style.display = 'block';
		document.getElementById('buttoon').style.display = 'block';
		document.getElementById('button').innerHTML =
			'Nahlásit únos na policii.';
		document.getElementById('buttoon').innerHTML =
			'Zamilovat se, protože Stockholmský syndrom.';
		document.getElementById('skip').style.display = 'none';
		document.getElementById('character').src =
			'../../files/pictures/asihra/characters/Adam/special/adam-exhausted.png';
		document.body.style.backgroundImage =
			"url('../../files/pictures/asihra/backgrounds/room-nightS.png')";
	} else if (textNumber == 24) {
		/* POKOJ */
		document.getElementById('text_field').innerHTML =
			'Natahuješ se po telefonu.';
		document.getElementById('skip').style.display = 'block';
		document.getElementById('button').style.display = 'none';
		document.getElementById('buttoon').style.display = 'none';
	} else if (textNumber == 25) {
		/* POKOJ */

		if (retard == true) {
			document.getElementById('text_field').innerHTML =
				'Po 3 měsících a jednom adoptovaném dítěti jste se vzali a žili šťastně dokud jednoho z vás nezabila konkurenčí mafie, nebo vás nezavřeli do basy <3';
			document.getElementById('character').src =
				'../../files/pictures/asihra/characters/Adam/special/adam-stockholm.png';
			document.getElementById('button').style.display = 'none';
			document.getElementById('buttoon').style.display = 'none';
			document.getElementById('skip').style.display = 'block';
		} else if (retard == false) {
			document.getElementById('text_field').innerHTML =
				'Policejní tým, který byl zavolán k případu údajného stalkingu, únosu a vyhrožování, taky miloval Wattpad příběhy. Proto začali shipovat Stockholmský syndrom a nepřišli ti na pomoc :D Žiješ život plný strachu, vydírání, plusek za nic a hlavně Dannyho!';
			document.getElementById('character').src =
				'../../files/pictures/asihra/characters/Adam/special/adam-scared.png';
			document.getElementById('button').style.display = 'none';
			document.getElementById('buttoon').style.display = 'none';
			document.getElementById('skip').style.display = 'block';
		} else {
			console.log(`Tohle by se nemělo stát. Retard -> ${retard}`);
		}
	} else if (textNumber == 26) {
		/* KONEC */
		document.getElementById('text_field').innerHTML =
			'Gratulujeme!! Vy-vyhráls? Asi? Já nevim... Reklamace typu: „Ale Sááároooo, však skoro žádná odpověď nic neovlivnilaaaa“ neberem. Inspirací nám byly aplikace Chapter, Lovesick, Episode,...a tam to funguje stejně :D Trestní oznámení za stalking si taky nechte, nebo pošleme Dannyho ;) A pokud jsi Danny... no. Jinak doporučuji si projít všechny backgroundy, celkem jsem si s nimi vyhrála a máte tam easter eggy, jako Kajumiho auto, Bat signál, inzerci na Adama F. a celkově je Adamův pokoj zajímavý xd. Jinak můžete hru leavnout...už tu nic není...doslova, co byste ještě chtěli???';
		document.getElementById('character').src =
			'../../files/pictures/asihra/characters/Adam/special/adambaf.png';
		document.body.style.backgroundImage =
			"url('../../files/pictures/asihra/backgrounds/blackS.jpg')";
		document.getElementById('button').style.display = 'none';
		document.getElementById('buttoon').style.display = 'none';
		document.getElementById('skip').style.display = 'none';
	}
	typeWriter(0);
	buttonHandler(buttonNumber);
	textNumber++;
}
/* buttonId je počet 'o' v button když odečtete 1 */
function buttonHandler(buttonId) {
	switch (textNumber - 1) {
		case 1: {
			if (buttonId == 0) {
				prepared = true;
			} else if (buttonId == 1) {
				prepared = false;
			}
			break;
		}
		case 3: {
			if (buttonId == 0) {
				asked = 'SE';
			} else if (buttonId == 1) {
				asked = 'VV';
			}
			break;
		}
		case 23: {
			console.log('a');
			if (buttonId == 0) {
				console.log('b');
				retard = false;
			} else if (buttonId == 1) {
				console.log('c');
				retard = true;
			}
			console.log('d');
			break;
		}
	}
}
