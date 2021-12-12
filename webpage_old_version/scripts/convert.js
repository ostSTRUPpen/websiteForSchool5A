'use strict';
/** Funkce pro pokročilé
 * getUpdateTime() čas posledního získání dat z www.cnb.cz
 */
/* Čekání */
let lastUpdateTime;
let sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
/* Získání hodnot převodu */
let currencyRates;
$(function () {
	restOfPage(0);
	$.get('../code/convert.php', function (data, status) {
		if (status == 'error' || status == 'parseerror') {
			alert(
				'Mezi vámi a serverem došlo k chybě. Zkuste prosím znovu načíst stránku'
			);
		} else {
			const currenciesInfo = data.split('&');
			currencyRates = currenciesInfo[2].split('|');
			display(currenciesInfo[0], currenciesInfo[1]);
			lastUpdateTime = currenciesInfo[3];
		}
	});
});
/* Zobrazení */
function display(czkToX, xToCzk) {
	sleep(2000).then(() => {
		$('#czktoxInCurrency').html(czkToX);
		$('#xtoczkInCurrency').html(xToCzk);
		$('#loading').hide();
		restOfPage(1);
	});
}
/* Převod Kč do x */
function convertCzkToX() {
	const rate = parseFloat(currencyRates[$('#czktoxInCurrency').val()]);
	const czech = parseInt($('#czktoxInNumber').val());
	const x = parseFloat(czech / rate);
	$('#czktoxOutNumber').val(x);
}
/* Převod x do Kč */
function convertXToCzk() {
	const rate = parseFloat(currencyRates[$('#xtoczkInCurrency').val()]);
	const x = parseInt($('#xtoczkInNumber').val());
	const czech = parseFloat(x * rate);
	$('#xtoczkOutNumber').val(czech);
}
function getUpdateTime() {
	console.log(
		`Nejnovější data ze dne: ${lastUpdateTime}. Pamatujte, že čnb data aktualizuje každý pracovní den ve 14:30, proto může čas být o den, nebo více dní pozadu!`
	);
}
/* Detekce změny u formuláře */
$('#czktoxForm').change(function () {
	convertCzkToX();
});
$('#xtoczkForm').change(function () {
	convertXToCzk();
});
/* Zábrana proti znovu načtení stránky při zmáčknutí ENTER */
$('#xtoczkForm').submit(function () {
	$('#xtoczkInNumber').get(0);
	return false;
});
$('#czktoxForm').submit(function () {
	$('#czktoxInNumber').get(0);
	return false;
});
