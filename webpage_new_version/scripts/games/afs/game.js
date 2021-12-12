function toSalon() {
     $('.intro').hide()
     $('.salon').show()
}
function toGame() {
    $('.salon').hide();
    $('.game').show()
}
/* MĚNÍCÍ SE ADAM */
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
            '../../../files/pictures/asihra/characters/Adam/normal/adam-cervena.png';
    } else if (imageNumber == 1) {
        document.getElementById('Adam').src =
            '../../../files/pictures/asihra/characters/Adam/normal/adam-modra.png';
    } else if (imageNumber == 2) {
        document.getElementById('Adam').src =
            '../../../files/pictures/asihra/characters/Adam/normal/adam-purpurova.png';
    } else if (imageNumber == 3) {
        document.getElementById('Adam').src =
            '../../../files/pictures/asihra/characters/Adam/normal/adam-zluta.png';
    } else if (imageNumber == 4) {
        document.getElementById('Adam').src =
            '../../../files/pictures/asihra/characters/Adam/normal/adam-bila.png';
    } else if (imageNumber == 5) {
        document.getElementById('Adam').src =
            '../../../files/pictures/asihra/characters/Adam/normal/adam-pink.png';
    } else if (imageNumber == 6) {
        document.getElementById('Adam').src =
            '../../../files/pictures/asihra/characters/Adam/normal/adam-ginger.png';
    } else if (imageNumber == 7) {
        document.getElementById('Adam').src =
            '../../../files/pictures/asihra/characters/Adam/normal/adam-sexy modra.png';
    } else if (imageNumber == 8) {
        document.getElementById('Adam').src =
            '../../../files/pictures/asihra/characters/Adam/normal/adam-black.png';
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
/* HRA */
/* Příběhové proměnné a konstanty */
let story = [
    ['', [1, '../../../files/pictures/asihra/characters/Adam/normal/adam-hneda.png'],
        0, 1, [1, 'Vítejte v příběhu, kde určujete Adamův život Vy! Zažijte s Adamem jeho běžný pátek!'],
        [1, '...proč'],
        [1, 'Chci hrát'],
        [1, 'End my suffering'],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, '../../../files/pictures/asihra/characters/Adam/normal/adam-hneda.png'],
        0, 1, [1, 'Barva, kterou sis na vlasy před chvílí napatlal, byla fakt jakože shitty (a nebo máš fakt stronnng vlasy!) Takže po půl hodině slezla.'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['../../../files/pictures/asihra/backgrounds/room-nightS.png', [1, '../../../files/pictures/asihra/characters/Adam/special/adam-exhausted.png'],
        0, 0, [1, 'Je pátek, dvě hodiny ráno. Nechce se ti, ale měl by ses začít připravovat na výuku 5.A.'],
        [1, 'Připravím se na hodinu'],
        [1, 'Kašlu na to, jsem rozený improvizátor!'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 1, [1, 'Oči se ti přes všechny legální i nelegální životabudiče zavírají...doslova, koukni se na sebe, jak vypadáš. Usínáš.'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['../../../files/pictures/asihra/backgrounds/room-dayS.png', [1, '../../../files/pictures/asihra/characters/Adam/normal/adam-hneda.png'],
        0, 0, [1, 'Ráno se cítíš trochu líp. Je spojená hodina ICT výtvarné i hudební skupiny, položil jsi studentům otázku: Jak určíš classsu "important" .divu. Jediní se hlásí Sára a Vojta V.'],
        [1, 'Vyvolám Sáru!'],
        [1, 'Vyvolám Vojtu V!'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 0, [1, 'Odpověď byla správná, co dál?'],
        [1, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 0, [1, 'Ukončil jsi hodinu a začala ti přednáška, co půjdeš dělat?'],
        [1, 'Jíst.'],
        [1, 'Spát.'],
        [1, 'Koukat na LikeHouse'],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['../../../files/pictures/asihra/backgrounds/kitchenS.jpg', [1, ''],
        0, 0, [1, 'Docela ti vyhládlo, ale ty se rozhodneš namísto objednání donášky si udělat vlastní oběd. První do mísy hodíš:'],
        [1, 'Mouku.'],
        [1, 'Vejce.'],
        [1, 'Bůček.'],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 0, [1, 'Pak přileješ:'],
        [1, 'Mléko.'],
        [1, 'Alkohol.'],
        [1, 'Smetanu.'],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 0, [1, 'Navrch přidáš:'],
        [1, 'Papriku.'],
        [1, 'Barevné zdobení na dort.'],
        [1, 'Kypřící prášek do pečiva.'],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 0, [1, 'A teď to:'],
        [1, 'Dáš do trouby.'],
        [1, 'Dáš na radiátor.'],
        [1, 'Dáš vyudit.'],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 0, [1, 'Podáváš s přílohou:'],
        [1, 'Rýže.'],
        [1, 'Houskový knedlík'],
        [1, 'Bábovka.'],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, '../../../files/pictures/asihra/characters/Adam/special/adammnam.png'],
        0, 1, [1, 'Wait, proč jsi to sežral??'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, '../../../files/pictures/asihra/characters/Adam/special/adam-na-zbliti.png'],
        0, 1, [1, 'Tvl, why? Cos čekal? Nenásleduj Mončiny recepty ve statusu!!'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['../../../files/pictures/asihra/backgrounds/hospitalS.jpg', [1, ''],
        0, 1, [1, 'A teď jsi v nemocnici... congrats.'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, '../../../files/pictures/asihra/characters/others/doctor.png'],
        0, 1, [1, '„Vypumpovali jsme Vám žaludek, můžete jít domů :)“'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['../../../files/pictures/asihra/backgrounds/streetS.jpg', [1, '../../../files/pictures/asihra/characters/Adam/normal/adam-hneda.png'],
        0, 1, [1, 'V nemocnici jsi naštěstí stihnul nelostnout, takže si to štráduješ domů.'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['../../../files/pictures/asihra/backgrounds/black-vanS.jpg', [1, '../../../files/pictures/asihra/characters/Adam/special/adam-scared.png'],
        0, 1, [1, '*uširvoucí skřípění brzd*'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['../../../files/pictures/asihra/backgrounds/blackS.jpg', [0, ''],
        0, 1, [1, 'Dostals pořádnej flákanec a nějakou dobu jsi v bezvědomí...'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['../../../files/pictures/asihra/backgrounds/basementS.jpg', [1, '../../../files/pictures/asihra/characters/Adam/special/adam-scared.png'],
        0, 1, [1, 'Oh shit, was is das misto? Za tebou se ozve hlas. Polekaně se otočíš.'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 0, [1, '„Řeknu ti to takhle. Dost mi ublížilo, že jsi nevyvolal dopoledne mne. Takže to uděláme následovně. Vezmu si tady telefon a zavolám Dannymu, nějaký čas bys s ním pobyl. Určitě spolu zažijete spoustu zábavy!“'],
        [1, 'Nenennenenennenennenennenenene!!!!! Znovu už ne!'],
        [1, 'NE, DANNYHO NE!!! PROSÍM, MĚJ SRDCE!!!'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 0, [1, '„A nebo Dannymu volat nemusíme a já dostanu plusko. Co ty na to?“'],
        [1, 'ANO'],
        [1, 'ANO!!'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 1, [1, '„Bylo mi jasné, že se domluvíme... A teď? Lubomírku, víš co máš dělat :)“'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['../../../files/pictures/asihra/backgrounds/blackS.jpg', [1, '../../../files/pictures/asihra/characters/others/flakanec.png'],
        0, 1, [1, '*flákanec*'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['../../../files/pictures/asihra/backgrounds/room-nightS.png', [1, '../../../files/pictures/asihra/characters/Adam/special/adam-exhausted.png'],
        0, 0, [1, 'Probudil ses ve svém pokoji. Hrozně tě bolí tě hlava a ... no prostě ti není úplně nejlíp. Existují jen dvě možnosti, jak na únos studentem reagovat.'],
        [1, 'Nahlásit únos na policii.'],
        [1, 'Zamilovat se, protože Stockholmský syndrom.'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 1, [1, 'Natahuješ se po telefonu.'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['', [1, ''],
        0, 1, [1, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ],
    ['../../../files/pictures/asihra/backgrounds/blackS.jpg', [1, '../../../files/pictures/asihra/characters/Adam/special/adambaf.png'],
        0, 0, [1, 'Gratulujeme!! Vy-vyhráls? Asi? Já nevim... Reklamace typu: „Ale Sááároooo, však skoro žádná odpověď nic neovlivnilaaaa“ neberem. Inspirací nám byly aplikace Chapter, Lovesick, Episode,...a tam to funguje stejně :D Trestní oznámení za stalking si taky nechte, nebo pošleme Dannyho ;) A pokud jsi Danny... no. Jinak doporučuji si projít všechny backgroundy, celkem jsem si s nimi vyhrála a máte tam easter eggy, jako Kajumiho auto, Bat signál, inzerci na Adama F. a celkově je Adamův pokoj zajímavý xd. Jinak můžete hru leavnout...už tu nic není...doslova, co byste ještě chtěli???'],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, ''],
        [0, '']
    ]
]
let storyPointer = 0;

let storyVars = ['', '', ''];

/* Hra */
function storyHandler(buttonId) {
    console.log(`Old storyPointer: ${storyPointer}`)
    buttonHandler(buttonId, storyPointer);
    eventHandler(storyPointer);
    changeHandler(story[storyPointer]);
    typeWriter(0);
    storyPointer++;
    console.log(`New storyPointer: ${storyPointer}`)
}

function eventHandler(storyPoint) {
    switch (storyPoint) {
        case 4:
            {
                if (storyVars[0] === 'prepared') {
                    story[5][5][1] = 'Mám přípravu (Dál se probírá).';
                } else if (storyVars[0] === 'unprepared') {
                    story[5][5][1] = 'Nemám přípravu (Jde se hrát gartic.phone).';
                }
            }
        case 6:
            {
                if (storyVars[1] === 'SE') {
                    story[20][1][1] = '../../../files/pictures/asihra/characters/others/vojta5head.png';
                } else if (storyVars[1] === 'VV') {
                    story[20][1][1] = '../../../files/pictures/asihra/characters/others/saramrkmrk.png';
                }
            }
        case 26:
            {
                if (storyVars[2] === 'police') {
                    story[26][4][1] = 'Policejní tým, který byl zavolán k případu údajného stalkingu, únosu a vyhrožování, taky miloval Wattpad příběhy. Proto začali shipovat Stockholmský syndrom a nepřišli ti na pomoc :D Žiješ život plný strachu, vydírání, plusek za nic a hlavně Dannyho!';
                    story[26][1][1] = '../../../files/pictures/asihra/characters/Adam/special/adam-scared.png';
                } else if (storyVars[2] === 'love') {
                    story[26][4][1] = 'Po 3 měsících a jednom adoptovaném dítěti jste se vzali a žili šťastně dokud jednoho z vás nezabila konkurenčí mafie, nebo vás nezavřeli do basy <3';
                    story[26][1][1] = '../../../files/pictures/asihra/characters/Adam/special/adam-stockholm.png';
                }
            }
    }
}

function buttonHandler(buttonId, storyPoint) {
    switch (storyPoint) {
        case 3:
            {
                if (buttonId === '1') {
                    storyVars[0] = 'prepared';
                } else if (buttonId === '2') {
                    storyVars[0] = 'unprepared';
                }
                break;
            }
        case 5:
            {
                if (buttonId === '1') {
                    storyVars[1] = 'SE';
                } else if (buttonId === '2') {
                    storyVars[1] = 'VV';
                }
                break;
            }
        case 25:
            {
                if (buttonId === '1') {
                    storyVars[2] = 'police';
                } else if (buttonId === '2') {
                    storyVars[2] = 'love';
                }
                break;
            }
    }
}