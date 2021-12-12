<?php
/* Získání a zpracování dat z české národní banky */
$current_date = date('d.m.Y');
$url = 'https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt?date=';
$all_currencies = file_get_contents($url . $current_date);
$all_currencies = str_replace("\n", "_", $all_currencies);
$currencies = explode('_', $all_currencies);
/* Předělání pořadí informací o měnách */
$prepared_currencies = array();
for ($i = 2; $i < count($currencies) - 1; $i++) {
    $temp_currency = explode('|', $currencies[$i]);
    $temp_currency = array($temp_currency[0], $temp_currency[1], $temp_currency[3], $temp_currency[4], $temp_currency[2]);
    array_push($prepared_currencies, $temp_currency);
}
/* Vyvoření jednotlivých HTML kódů a seznamu převodních hodnot */
$prepared_currency_rates = '';
$prepared_html_czk_to_x = '';
$prepared_html_x_to_czk = '';
for ($i = 0; $i < count($prepared_currencies); $i++) {
    $prepared_html_czk_to_x .= '<option value ="' . $i . '">' . 'Země: ' . $prepared_currencies[$i][0] . ' Název: ' . $prepared_currencies[$i][1] . ' Zkratka: ' . $prepared_currencies[$i][2] . '</option>';
    $prepared_html_x_to_czk .= '<option value ="' . $i . '">' . 'Země: ' . $prepared_currencies[$i][0] . ' Název: ' . $prepared_currencies[$i][1] . ' Zkratka: ' . $prepared_currencies[$i][2] . '</option>';
    if ($prepared_currencies[$i][4] > 1) {
        $temp_rounded_number = round($prepared_currencies[$i][4] / $prepared_currencies[$i][3], 2, PHP_ROUND_HALF_UP);
        $prepared_currency_rates .= $temp_rounded_number .= '|';
    } else {
        $prepared_currency_rates .= $prepared_currencies[$i][3] .= '|';
    }
}
/* Úprava vyvořených seznamů */
$prepared_currency_rates = substr($prepared_currency_rates, 0, -1);
$prepared_update_date = substr($currencies[0], 0, -5);
/* Odpověď*/
echo $prepared_html_czk_to_x . '&' . $prepared_html_x_to_czk . '&' . $prepared_currency_rates . '&' . $prepared_update_date;
