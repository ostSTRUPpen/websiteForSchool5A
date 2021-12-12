/* Engine*/
/* Type writter */
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
    timeOut = setTimeout(function() {
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
/** [odkaz na obrázek do pozadí (0, pokud se nemá měnit), [zobrazit(0/1)obrázek mluvícího (0, pokud se nemá měnit)], 
 *  zobrazitPolreicha(1/0), zobrazit skip(1/0), [zobrazit(0/1), text], 
 *  tlačitko1[zobrazit(1/0), "text"], tlačitko2[zobrazit(1/0), "text"], tlačitko3[zobrazit(1/0), "text"],
 *  tlačitko4[zobrazit(1/0), "text"], tlačitko5[zobrazit(1/0), "text"], tlačitko6[zobrazit(1/0), "text"]]
 *  [backgroundImageURL, characterImageURL, 1, 0, [1, "Pogánek1"]
 * ]
 */
/* Základní funkce*/
const achievmentList = [];
const buttonIdList = ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'];
let secretCount = 0;

function changeBackground(bgImage) {
    $("body").css('background-image', `url(${bgImage})`);
}

/* Hlavní text */
function displayMainText(instruction) {
    if (instruction === 1) {
        $("#text_field").show();
    } else {
        $("#text_field").hide();
    }
}

function changeMainText(mainText) {
    $('#text_field').text(mainText);
}

/* Charakter */
function displayCharacter(instruction) {
    if (instruction === 1) {
        $("#character").show();
    } else {
        $("#character").hide();
    }
}

function changeCharacter(characterImage) {
    $("#character").attr("src", characterImage);
}

function displaySecret(instruction) {
    if (instruction === 1) {
        $("#secret").show();
    } else {
        $("#secret").hide();
    }
}

function displaySkip(instruction) {
    if (instruction === 1) {
        $("#skip").show();
    } else {
        $("#skip").hide();
    }
}

function achievment(achievmentNumber) {
    $("#achievment").attr("src", achievmentList[achievmentNumber]);
}

function displayButton(buttonId, instruction) {
    if (instruction === 1) {
        $(`#${buttonId}`).show();
    } else {
        $(`#${buttonId}`).hide();
    }
}

function changeButtonText(buttonId, buttonText) {
    $(`#${buttonId}`).text(buttonText);
}
/* hra -> engine překlad */
function changeHandler(changes) {
    /* pozadí */
    if (changes[0] !== '') {
        changeBackground(changes[0]);
    }
    /* mluvič */
    displayCharacter(changes[1][0]);
    if (changes[1][1] !== '') {
        changeCharacter(changes[1][1]);
    }
    /* polreich */
    displaySecret(changes[2]);

    /* skip */
    displaySkip(changes[3]);

    /* text */
    displayMainText(changes[4][0]);
    changeMainText(changes[4][1]);

    /* tlačítka */
    for (let i = 5; i < changes.length; i++) {
        displayButton(buttonIdList[i - 5], changes[i][0]);
        changeButtonText(buttonIdList[i - 5], changes[i][1]);
    }
}