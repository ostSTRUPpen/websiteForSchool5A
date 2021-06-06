<?php
/* Získání uživatelských odpovědí a jejich úprava*/
$quiz_answers = $_GET['qAns'];
$quiz_answers = explode('@@', $quiz_answers);
/* Správné odpovědi */
$quiz_answers_right = [
    '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
    '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
    'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35',
    'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35',
    '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
    '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
    '4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce',
    '4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce',
    'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35',
    '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
    'cb688cff968f64325cdf37ffbaa40ed98778fea69af09c652cd2ec2163359b3d',
    'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35',
    '04cfb84138fdd5f7486380937975f1c6b669fdf46c99a085db08f8f796265f0a',
    '785f3ec7eb32f30b90cd0fcf3657d388b5ff4297f2f9716ff66e9b69c05ddd09',
    '44c8031cb036a7350d8b9b8603af662a4b9cdbd2f96e8d5de5af435c9c35da69',
    '93223b3d4cf2ac047ac044b8c4dd87900592a3ce4a35d7d3b0226935e4234e3f',
    '270f56275f8ec05ca56e0c310f8a734f6eb60f51e6dfb9277e33921df6991a7c',
    '3b325109deb02ebf8150c4cc76e908d55f977082fe74bfd455e298770351b77d',
];
/* Kontrola odpovědí */
$points = 0;
for ($i = 0; $i < count($quiz_answers); $i++) {
    $quiz_answer = hash("sha256", trim($quiz_answers[$i]));
    if ($quiz_answer == $quiz_answers_right[$i]) {
        $points++;
    }
}
$return_value = 0;
if ($points == 18) {
    /* Za toto slovo na p nemůžu být potrestán, pokud si ho napoprvé a bez podvádění nezískal, jako odpověď v testu :)*/
    $return_value = $points .= "| z 18ti - to je docela pogánek! :)";
} else {
    $return_value = $points .= "|a";
}
/* Odpověď */
echo $return_value;
