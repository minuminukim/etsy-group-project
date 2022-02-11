from app.models import db, ProductImage


def seed_product_images():
    # SWITCHES
    cherry_red_switch_image1 = ProductImage(
        product_id=1,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-red-switches-1.jpeg",
    )

    cherry_brown_switch_image1 = ProductImage(
        product_id=2,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-brown-switches-1.jpeg",
    )

    cherry_blue_switch_image1 = ProductImage(
        product_id=3,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-blue-switches-1.jpeg",
    )

    cherry_black_switch_image1 = ProductImage(
        product_id=4,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-black-switches-1.jpeg",
    )

    cherry_silver_switch_image1 = ProductImage(
        product_id=5,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/cherry-silver-switches-1.jpeg",
    )

    akko_rose_switch_image1 = ProductImage(
        product_id=20,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/akko_rose_switches-1.jpg",
    )

    akko_rose_switch_image2 = ProductImage(
        product_id=20,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/akko_rose_switches-2.jpg",
    )

    akko_green_switch_image1 = ProductImage(
        product_id=21,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/akko_green_switches-1.jpg"
    )

    akko_green_switch_image2 = ProductImage(
        product_id=21,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/akko_green_switches-2.jpg"
    )

    akko_starfish_switch_image1 = ProductImage(
        product_id=22,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/akko_starfish_switches-1.jpg"
    )

    akko_starfish_switch_image2 = ProductImage(
        product_id=22,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/akko_starfish_switches-2.jpg"
    )

    akko_jelly_switch_image1 = ProductImage(
        product_id=23,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/akko_jelly_switches-1.jpg"
    )

    akko_jelly_switch_image2 = ProductImage(
        product_id=23,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/akko_jelly_switches-2.jpg"
    )

    tecsee_metal_switch_image1 = ProductImage(
        product_id=24,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Tecsee_metal_switches-1.jpeg"
    )

    tecsee_metal_switch_image2 = ProductImage(
        product_id=24,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Tecsee_metal_switches-2.jpeg"
    )

    tecsee_metal_switch_image3 = ProductImage(
        product_id=24,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Tecsee_metal_switches-3.jpeg"
    )

    tecsee_gold_switch_image1 = ProductImage(
        product_id=25,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Tecsee_gold_switches-1.jpeg"
    )

    tecsee_gold_switch_image2 = ProductImage(
        product_id=25,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Tecsee_gold_switches-2.jpeg"
    )

    gateron_white_switch_image1 = ProductImage(
        product_id=26,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/gateron_white_switches-1.jpeg"
    )

    gateron_white_switch_image2 = ProductImage(
        product_id=26,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/gateron_white_switches-2.jpeg"
    )

    gateron_white_switch_image3 = ProductImage(
        product_id=26,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/gateron_white_switches-3.jpeg"
    )

    # KEYCAPS
    pbt_chalk_keycaps_image1 = ProductImage(
        product_id=6,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt-chalk-keycaps-1.jpeg",
    )

    pbt_chalk_keycaps_image2 = ProductImage(
        product_id=6,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt-chalk-keycaps-2.jpeg",
    )

    pbt_chalk_keycaps_image3 = ProductImage(
        product_id=6,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt-chalk-keycaps-3.jpeg",
    )

    enjoypbt_green_keycaps_image1 = ProductImage(
        product_id=7,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/enjoypbt-green-keycaps-1.jpeg",
    )

    enjoypbt_green_keycaps_image2 = ProductImage(
        product_id=7,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/enjoypbt-green-keycaps-2.jpeg",
    )

    enjoypbt_green_keycaps_image3 = ProductImage(
        product_id=7,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/enjoypbt-green-keycaps-3.jpeg",
    )

    enjoypbt_black_keycaps_image1 = ProductImage(
        product_id=8,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/enjoypbt-black-keycaps-1.jpeg",
    )

    enjoypbt_black_keycaps_image2 = ProductImage(
        product_id=8,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/enjoypbt-black-keycaps-2.jpeg",
    )

    enjoypbt_black_keycaps_image3 = ProductImage(
        product_id=8,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/enjoypbt-black-keycaps-3.jpeg",
    )

    artisan_bear_esc_keycap_image1 = ProductImage(
        product_id=9,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/artisan-bear-esc-keycap-1.jpeg",
    )

    artisan_bear_esc_keycap_image2 = ProductImage(
        product_id=9,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/artisan-bear-esc-keycap-2.jpeg",
    )

    artisan_bear_esc_keycap_image3 = ProductImage(
        product_id=9,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/artisan-bear-esc-keycap-3.jpeg",
    )

    holyoops_game_console_keycap_image1 = ProductImage(
        product_id=10,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/holyoops-game-console-keycap-1.jpeg",
    )

    holyoops_game_console_keycap_image2 = ProductImage(
        product_id=10,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/holyoops-game-console-keycap-2.jpeg",
    )

    blue_hell_keycap_image1 = ProductImage(
        product_id=27,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/blue_hell_keycaps-1.jpg",
    )

    magic_violet_keycap_image1 = ProductImage(
        product_id=28,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/magic_violet_keycaps-1.jpg",
    )

    magic_violet_keycap_image2 = ProductImage(
        product_id=28,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/magic_violet_keycaps-2.jpg",
    )

    pbt_coral_keycap_image1 = ProductImage(
        product_id=29,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt_coral_keycaps-1.jpg",
    )

    pbt_coral_keycap_image2 = ProductImage(
        product_id=29,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt_coral_keycaps-2.jpg",
    )

    pbt_fate_image1 = ProductImage(
        product_id=30,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt_fate_keycaps-1.jpg",
    )

    pbt_fate_image2 = ProductImage(
        product_id=30,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt_fate_keycaps-2.jpg",
    )

    pbt_izakaya_image1 = ProductImage(
        product_id=31,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt_izakaya_keycaps-1.jpg",
    )

    pbt_izakaya_image2 = ProductImage(
        product_id=31,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt_izakaya_keycaps-2.jpg",
    )

    pbt_matcha_image1 = ProductImage(
        product_id=32,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt_matcha_keycaps-1.jpg",
    )

    pbt_matcha_image2 = ProductImage(
        product_id=32,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt_matcha_keycaps-2.jpg",
    )

    pbt_gameboy_image1 = ProductImage(
        product_id=33,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt_gameboy_keycaps-1.jpg",
    )

    pbt_gameboy_image2 = ProductImage(
        product_id=33,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/pbt_gameboy_keycaps-2.jpg",
    )


    # KEYBOARDS
    keychron_k2_keyboard_image1 = ProductImage(
        product_id=11,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/keychron-k2-keyboard-1.jpeg",
    )

    keychron_k2_keyboard_image2 = ProductImage(
        product_id=11,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/keychron-k2-keyboard-2.jpeg",
    )

    keychron_k2_keyboard_image3 = ProductImage(
        product_id=11,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/keychron-k2-keyboard-3.jpeg",
    )

    keychron_c2_keyboard_image1 = ProductImage(
        product_id=12,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/keychron-c2-keyboard-1.jpeg",
    )

    keychron_c2_keyboard_image2 = ProductImage(
        product_id=12,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/keychron-c2-keyboard-2.jpeg",
    )

    keychron_c2_keyboard_image3 = ProductImage(
        product_id=12,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/keychron-c2-keyboard-3.jpeg",
    )

    keychron_k14_keyboard_image1 = ProductImage(
        product_id=13,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/keychron-k14-keyboard-1.jpeg",
    )

    keychron_k14_keyboard_image2 = ProductImage(
        product_id=13,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/keychron-k14-keyboard-2.jpeg",
    )

    tofu60_keyboard_image1 = ProductImage(
        product_id=14,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/tofu60-keyboard-1.jpeg",
    )

    tofu60_keyboard_image2 = ProductImage(
        product_id=14,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/tofu60-keyboard-2.jpeg",
    )

    tofu60_keyboard_image3 = ProductImage(
        product_id=14,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/tofu60-keyboard-3.jpeg",
    )

    tofu60_keyboard_image4 = ProductImage(
        product_id=14,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/tofu60-keyboard-4.jpeg",
    )

    kbdpad_numpad_keyboard_image1 = ProductImage(
        product_id=15,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-numpad-keyboard-1.jpeg",
    )

    kbdpad_numpad_keyboard_image2 = ProductImage(
        product_id=15,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-numpad-keyboard-2.jpeg",
    )

    kbdpad_numpad_keyboard_image3 = ProductImage(
        product_id=15,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-numpad-keyboard-3.jpeg",
    )

    kbdpad_numpad_keyboard_image4 = ProductImage(
        product_id=15,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-numpad-keyboard-4.jpeg",
    )

    chinese_drum_keyboard_image1 = ProductImage(
        product_id=19,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/chinese_drum_keyboard-1.jpeg",
    )
    chinese_drum_keyboard_image2 = ProductImage(
        product_id=19,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/chinese_drum_keyboard_2.jpeg",
    )
    chinese_drum_keyboard_image3 = ProductImage(
        product_id=19,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/chinese_drum_keyboard_3.jpeg",
    )
    chinese_drum_keyboard_image4 = ProductImage(
        product_id=19,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/chinese_drum_keyboard_4.jpeg",
    )
    chinese_drum_keyboard_image5 = ProductImage(
        product_id=19,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/chinese_drum_keyboard_5.jpeg",
    )

    kbd_purple_keyboard_image1 = ProductImage(
        product_id=34,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbd-purple-keyboard-1.jpeg",
    )

    kbd_purple_keyboard_image2 = ProductImage(
        product_id=34,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbd-purple-keyboard-2.jpeg",
    )

    kbd_soldered_keyboard_image1 = ProductImage(
        product_id=35,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Kbd_soldered_keyboard-1.jpeg",
    )

    d84_black_keyboard_image1 = ProductImage(
        product_id=36,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/D84_black_keyboard-1.jpeg",
    )

    d84_black_keyboard_image2 = ProductImage(
        product_id=36,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/D84_black_keyboard-2.jpeg",
    )

    custom_wood_keyboard_image1 = ProductImage(
        product_id=37,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/custom_wood_keyboard-1.jpeg",
    )

    custom_wood_keyboard_image2 = ProductImage(
        product_id=37,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/custom_wood_keyboard-2.jpeg",
    )

    mountain_ergo_keyboard_image1 = ProductImage(
        product_id=38,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Mountain_ergo_keyboard-1.jpeg",
    )

    mountain_ergo_keyboard_image2 = ProductImage(
        product_id=38,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Mountain_ergo_keyboard-2.jpeg",
    )

    azio_retro_keyboard_image1 = ProductImage(
        product_id=39,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/azio_retro_keyboard-1.jpg",
    )


    # DIY KITS
    kbdpad_diy_kit_image1 = ProductImage(
        product_id=16,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-diy-kit-1.jpeg",
    )

    kbdpad_diy_kit_image2 = ProductImage(
        product_id=16,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-diy-kit-2.jpeg",
    )

    kbdpad_diy_kit_image3 = ProductImage(
        product_id=16,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbdpad-diy-kit-3.jpeg",
    )

    kbd67_diy_kit_image1 = ProductImage(
        product_id=17,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbd67-diy-kit-1.png",
    )

    kbd67_diy_kit_image2 = ProductImage(
        product_id=17,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbd67-diy-kit-2.jpeg",
    )

    kbd67_diy_kit_image3 = ProductImage(
        product_id=17,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/kbd67-diy-kit-3.jpeg",
    )

    tofu84_diy_kit_image1 = ProductImage(
        product_id=18,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/tofu84-diy-kit-1.jpeg",
    )

    tofu84_diy_kit_image2 = ProductImage(
        product_id=18,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/tofu84-diy-kit-2.jpeg",
    )

    tofu84_diy_kit_image3 = ProductImage(
        product_id=18,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/tofu84-diy-kit-3.jpeg",
    )

    blade65_aluminum_diy_kit_image1 = ProductImage(
        product_id=40,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/diy_kits-1.jpeg",
    )

    bento_cherry_diy_kit_image1 = ProductImage(
        product_id=41,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Bento_cherry_diy_kit-1.jpg",
    )

    bento_cherry_diy_kit_image2 = ProductImage(
        product_id=41,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Bento_cherry_diy_kit-2.jpg",
    )

    independent_cherry_diy_kit_image1 = ProductImage(
        product_id=42,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Independent_cherry_diy_kit-1.jpg",
    )

    womier_pudding_diy_kit_image1 = ProductImage(
        product_id=43,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/womier_pudding_diy_kits-1.jpg",
    )

    womier_tiffany_diy_kit_image1 = ProductImage(
        product_id=44,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/womier_tiffany_diy_kits-1.jpg",
    )

    womier_tiffany_diy_kit_image2 = ProductImage(
        product_id=44,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/womier_tiffany_diy_kits-2.jpg",
    )

    gk61x_cherry_diy_kit_image1 = ProductImage(
        product_id=45,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/womier_tiffany_diy_kits-2.jpg"
    )

    yunzii_macaron_diy_kit_image1 = ProductImage(
        product_id=46,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Yunzii_macaron_diy_kit-1.jpg"
    )

    yunzii_macaron_diy_kit_image2 = ProductImage(
        product_id=46,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Yunzii_macaron_diy_kit-2.jpg"
    )

    yunzii_macaron_diy_kit_image3 = ProductImage(
        product_id=46,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Yunzii_macaron_diy_kit-3.jpg"
    )

    yunzii_rainbow_diy_kit_image1 = ProductImage(
        product_id=47,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Yunzii_rainbow_diy_kit-1.jpg"
    )

    yunzii_rainbow_diy_kit_image2 = ProductImage(
        product_id=47,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Yunzii_rainbow_diy_kit-2.jpg"
    )

    yunzii_mint_diy_kit_image1 = ProductImage(
        product_id=48,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Yunzii_mint_diy_kit-1.jpg"
    )

    yunzii_mint_diy_kit_image2 = ProductImage(
        product_id=48,
        image_url="https://qwerty-project-bucket.s3.amazonaws.com/product_images/Yunzii_mint_diy_kit-2.jpg"
    )




    db.session.add(cherry_red_switch_image1)
    db.session.add(cherry_brown_switch_image1)
    db.session.add(cherry_blue_switch_image1)
    db.session.add(cherry_black_switch_image1)
    db.session.add(cherry_silver_switch_image1)

    db.session.add(pbt_chalk_keycaps_image1)
    db.session.add(pbt_chalk_keycaps_image2)
    db.session.add(pbt_chalk_keycaps_image3)

    db.session.add(enjoypbt_green_keycaps_image1)
    db.session.add(enjoypbt_green_keycaps_image2)
    db.session.add(enjoypbt_green_keycaps_image3)

    db.session.add(enjoypbt_black_keycaps_image1)
    db.session.add(enjoypbt_black_keycaps_image2)
    db.session.add(enjoypbt_black_keycaps_image3)

    db.session.add(artisan_bear_esc_keycap_image1)
    db.session.add(artisan_bear_esc_keycap_image2)
    db.session.add(artisan_bear_esc_keycap_image3)

    db.session.add(holyoops_game_console_keycap_image1)
    db.session.add(holyoops_game_console_keycap_image2)

    db.session.add(keychron_k2_keyboard_image1)
    db.session.add(keychron_k2_keyboard_image2)
    db.session.add(keychron_k2_keyboard_image3)

    db.session.add(keychron_c2_keyboard_image1)
    db.session.add(keychron_c2_keyboard_image2)
    db.session.add(keychron_c2_keyboard_image3)

    db.session.add(keychron_k14_keyboard_image1)
    db.session.add(keychron_k14_keyboard_image2)

    db.session.add(tofu60_keyboard_image1)
    db.session.add(tofu60_keyboard_image2)
    db.session.add(tofu60_keyboard_image3)
    db.session.add(tofu60_keyboard_image4)

    db.session.add(kbdpad_numpad_keyboard_image1)
    db.session.add(kbdpad_numpad_keyboard_image2)
    db.session.add(kbdpad_numpad_keyboard_image3)
    db.session.add(kbdpad_numpad_keyboard_image4)

    db.session.add(kbdpad_diy_kit_image1)
    db.session.add(kbdpad_diy_kit_image2)
    db.session.add(kbdpad_diy_kit_image3)

    db.session.add(kbd67_diy_kit_image1)
    db.session.add(kbd67_diy_kit_image2)
    db.session.add(kbd67_diy_kit_image3)

    db.session.add(tofu84_diy_kit_image1)
    db.session.add(tofu84_diy_kit_image2)
    db.session.add(tofu84_diy_kit_image3)

    db.session.add(chinese_drum_keyboard_image1)
    db.session.add(chinese_drum_keyboard_image2)
    db.session.add(chinese_drum_keyboard_image3)
    db.session.add(chinese_drum_keyboard_image4)
    db.session.add(chinese_drum_keyboard_image5)

    db.session.add(akko_rose_switch_image1)
    db.session.add(akko_rose_switch_image2)
    db.session.add(akko_green_switch_image1)
    db.session.add(akko_green_switch_image2)
    db.session.add(akko_starfish_switch_image1)
    db.session.add(akko_starfish_switch_image2)
    db.session.add(akko_jelly_switch_image1)
    db.session.add(akko_jelly_switch_image2)
    db.session.add(tecsee_metal_switch_image1)
    db.session.add(tecsee_metal_switch_image2)
    db.session.add(tecsee_metal_switch_image3)
    db.session.add(tecsee_gold_switch_image1)
    db.session.add(tecsee_gold_switch_image2)
    db.session.add(gateron_white_switch_image1)
    db.session.add(gateron_white_switch_image2)
    db.session.add(gateron_white_switch_image3)

    db.session.add(blue_hell_keycap_image1)
    db.session.add(magic_violet_keycap_image1)
    db.session.add(magic_violet_keycap_image2)
    db.session.add(pbt_coral_keycap_image1)
    db.session.add(pbt_coral_keycap_image2)
    db.session.add(pbt_fate_image1)
    db.session.add(pbt_fate_image2)
    db.session.add(pbt_izakaya_image1)
    db.session.add(pbt_izakaya_image2)
    db.session.add(pbt_matcha_image1)
    db.session.add(pbt_matcha_image2)
    db.session.add(pbt_gameboy_image1)
    db.session.add(pbt_gameboy_image2)

    db.session.add(kbd_purple_keyboard_image1)
    db.session.add(kbd_purple_keyboard_image2)
    db.session.add(kbd_soldered_keyboard_image1)
    db.session.add(d84_black_keyboard_image1)
    db.session.add(d84_black_keyboard_image2)
    db.session.add(custom_wood_keyboard_image1)
    db.session.add(custom_wood_keyboard_image2)
    db.session.add(mountain_ergo_keyboard_image1)
    db.session.add(mountain_ergo_keyboard_image2)
    db.session.add(azio_retro_keyboard_image1)

    db.session.add(blade65_aluminum_diy_kit_image1)
    db.session.add(bento_cherry_diy_kit_image1)
    db.session.add(bento_cherry_diy_kit_image2)
    db.session.add(independent_cherry_diy_kit_image1)
    db.session.add(womier_pudding_diy_kit_image1)
    db.session.add(womier_tiffany_diy_kit_image1)
    db.session.add(womier_tiffany_diy_kit_image2)
    db.session.add(gk61x_cherry_diy_kit_image1)
    db.session.add(yunzii_macaron_diy_kit_image1)
    db.session.add(yunzii_macaron_diy_kit_image2)
    db.session.add(yunzii_macaron_diy_kit_image3)
    db.session.add(yunzii_rainbow_diy_kit_image1)
    db.session.add(yunzii_rainbow_diy_kit_image2)
    db.session.add(yunzii_mint_diy_kit_image1)
    db.session.add(yunzii_mint_diy_kit_image2)

    db.session.commit()


def undo_product_images():
    db.session.execute("TRUNCATE product_images RESTART IDENTITY CASCADE;")
    db.session.commit()
