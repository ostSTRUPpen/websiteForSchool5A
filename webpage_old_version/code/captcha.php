<?php
    /* Získání odpovědi */
    $captcha_answer =  hash("sha256", trim($_GET['ans']));
    /* Správné odpovědi */
    $captcha_keys = [
        '3c8c53ae4d73b75332dceed40e46c2eaff3dcfb486b41fb34e5ded19b901028c',
        '995545c4974b6ff59443b7e671651f0c2ffc53233d593150b5389da8e97d8b7a',
        '242dc71caab06d65617be88a96f36712a861d9322ee69a02caefaa6b4623fbe6',
        '64c62ac7dd56a738e0eddde0ffaab5547d4aadf2d34ed522ec37a07f88089808',
        'a7818241c4fbad252b6d84179fda4e30fc849a732cc99b530a2ed057d96f0e9f',
        '7c182a8ddac9a96eb47032e9f9a3452b105424b805a0ddd6d10d5e4ddeb962e9',
    ];
    /* Kontrola odpovědí */
    if(in_array($captcha_answer, $captcha_keys) == true) {
		/* Odpověď*/
        echo true;
    } else {
		/* Odpověď*/
        echo false;
    }
