from app.models import db, ProductImage


def seed_product_images():
    # SWITCHES
    cherry_red_switch_image1 = ProductImage(
        product_id=1,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/red-switch.png",
    )

    cherry_brown_switch_image1 = ProductImage(
        product_id=2,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/brown-switch.png",
    )

    cherry_blue_switch_image1 = ProductImage(
        product_id=3,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/blue-switch.png",
    )

    cherry_black_switch_image1 = ProductImage(
        product_id=4,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/black-switch.png",
    )

    cherry_silver_switch_image1 = ProductImage(
        product_id=5,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/silver-switch.jpg",
    )

    akko_rose_switch_image1 = ProductImage(
        product_id=20,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/20.jpg",
    )

    akko_green_switch_image1 = ProductImage(
        product_id=21,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/21.jpg"
    )

    akko_starfish_switch_image1 = ProductImage(
        product_id=22,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/22.jpg"
    )

    akko_jelly_switch_image1 = ProductImage(
        product_id=23,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/23.jpg"
    )

    tecsee_metal_switch_image1 = ProductImage(
        product_id=24,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/24.jpg"
    )

    tecsee_gold_switch_image1 = ProductImage(
        product_id=25,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/25.jpg"
    )

    gateron_white_switch_image1 = ProductImage(
        product_id=26,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/26.jpg"
    )

    # KEYCAPS
    pbt_chalk_keycaps_image1 = ProductImage(
        product_id=6,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/6.jpg",
    )

    enjoypbt_green_keycaps_image1 = ProductImage(
        product_id=7,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/7.jpg",
    )

    enjoypbt_black_keycaps_image1 = ProductImage(
        product_id=8,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/8.jpg",
    )

    artisan_bear_esc_keycap_image1 = ProductImage(
        product_id=9,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/9.jpg",
    )
    artisan_bear_esc_keycap_image2 = ProductImage(
        product_id=9,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/gorilla-2.jpg",
    )
    artisan_bear_esc_keycap_image3 = ProductImage(
        product_id=9,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/gorilla-3.jpg",
    )
    artisan_bear_esc_keycap_image4 = ProductImage(
        product_id=9,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/gorilla-4.jpg",
    )

    holyoops_game_console_keycap_image1 = ProductImage(
        product_id=10,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/10.jpg",
    )

    blue_hell_keycap_image1 = ProductImage(
        product_id=27,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/27.jpeg",
    )

    magic_violet_keycap_image1 = ProductImage(
        product_id=28,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/28.jpg",
    )

    pbt_coral_keycap_image1 = ProductImage(
        product_id=29,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/29.jpeg",
    )

    pbt_fate_image1 = ProductImage(
        product_id=30,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/30.jpg",
    )

    pbt_izakaya_image1 = ProductImage(
        product_id=31,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/31.jpg",
    )

    pbt_matcha_image1 = ProductImage(
        product_id=32,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/32.jpg",
    )

    pbt_gameboy_image1 = ProductImage(
        product_id=33,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/33.jpg",
    )

    # KEYBOARDS
    keychron_k2_keyboard_image1 = ProductImage(
        product_id=11,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/11.jpg",
    )

    keychron_c2_keyboard_image1 = ProductImage(
        product_id=12,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/12.jpg",
    )

    keychron_k14_keyboard_image1 = ProductImage(
        product_id=13,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/13.jpg",
    )

    tofu60_keyboard_image1 = ProductImage(
        product_id=14,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/14.jpg",
    )

    kbdpad_numpad_keyboard_image1 = ProductImage(
        product_id=15,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/15.jpg",
    )

    chinese_drum_keyboard_image1 = ProductImage(
        product_id=19,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/drum1.jpg",
    )
    chinese_drum_keyboard_image2 = ProductImage(
        product_id=19,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/drum2.jpg",
    )
    chinese_drum_keyboard_image3 = ProductImage(
        product_id=19,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/drum3.jpg",
    )
    chinese_drum_keyboard_image4 = ProductImage(
        product_id=19,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/drum4.jpg",
    )


    kbd_purple_keyboard_image1 = ProductImage(
        product_id=34,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/34.jpg",
    )

    kbd_soldered_keyboard_image1 = ProductImage(
        product_id=35,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/35.jpg",
    )

    d84_black_keyboard_image1 = ProductImage(
        product_id=36,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/36.PNG",
    )

    custom_wood_keyboard_image1 = ProductImage(
        product_id=37,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/37.PNG",
    )

    mountain_ergo_keyboard_image1 = ProductImage(
        product_id=38,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/38.jpeg",
    )

    azio_retro_keyboard_image1 = ProductImage(
        product_id=39,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/39.jpg",
    )


    # DIY KITS
    kbdpad_diy_kit_image1 = ProductImage(
        product_id=16,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/16.jpg",
    )

    kbd67_diy_kit_image1 = ProductImage(
        product_id=17,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/17.jpg",
    )

    tofu84_diy_kit_image1 = ProductImage(
        product_id=18,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/18.jpg",
    )

    blade65_aluminum_diy_kit_image1 = ProductImage(
        product_id=40,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/40.jpg",
    )

    bento_cherry_diy_kit_image1 = ProductImage(
        product_id=41,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/41.jpg",
    )

    independent_cherry_diy_kit_image1 = ProductImage(
        product_id=42,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/42.jpg",
    )

    womier_pudding_diy_kit_image1 = ProductImage(
        product_id=43,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/43.jpg",
    )

    womier_tiffany_diy_kit_image1 = ProductImage(
        product_id=44,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/44.jpg",
    )

    gk61x_cherry_diy_kit_image1 = ProductImage(
        product_id=45,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/45.jpg"
    )

    yunzii_macaron_diy_kit_image1 = ProductImage(
        product_id=46,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/46.jpg"
    )

    yunzii_rainbow_diy_kit_image1 = ProductImage(
        product_id=47,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/47.jpg"
    )

    yunzii_mint_diy_kit_image1 = ProductImage(
        product_id=48,
        image_url="https://qwerty-project-bucket.s3.us-west-1.amazonaws.com/product_images/48.jpg"
    )




    db.session.add(cherry_red_switch_image1)
    db.session.add(cherry_brown_switch_image1)
    db.session.add(cherry_blue_switch_image1)
    db.session.add(cherry_black_switch_image1)
    db.session.add(cherry_silver_switch_image1)

    db.session.add(pbt_chalk_keycaps_image1)

    db.session.add(enjoypbt_green_keycaps_image1)

    db.session.add(enjoypbt_black_keycaps_image1)

    db.session.add(artisan_bear_esc_keycap_image1)
    db.session.add(artisan_bear_esc_keycap_image2)
    db.session.add(artisan_bear_esc_keycap_image3)
    db.session.add(artisan_bear_esc_keycap_image4)

    db.session.add(holyoops_game_console_keycap_image1)

    db.session.add(keychron_k2_keyboard_image1)

    db.session.add(keychron_c2_keyboard_image1)

    db.session.add(keychron_k14_keyboard_image1)

    db.session.add(tofu60_keyboard_image1)

    db.session.add(kbdpad_numpad_keyboard_image1)

    db.session.add(kbdpad_diy_kit_image1)

    db.session.add(kbd67_diy_kit_image1)

    db.session.add(tofu84_diy_kit_image1)

    db.session.add(chinese_drum_keyboard_image1)
    db.session.add(chinese_drum_keyboard_image2)
    db.session.add(chinese_drum_keyboard_image3)
    db.session.add(chinese_drum_keyboard_image4)

    db.session.add(akko_rose_switch_image1)
    db.session.add(akko_green_switch_image1)
    db.session.add(akko_starfish_switch_image1)
    db.session.add(akko_jelly_switch_image1)
    db.session.add(tecsee_metal_switch_image1)
    db.session.add(tecsee_gold_switch_image1)
    db.session.add(gateron_white_switch_image1)

    db.session.add(blue_hell_keycap_image1)
    db.session.add(magic_violet_keycap_image1)
    db.session.add(pbt_coral_keycap_image1)
    db.session.add(pbt_fate_image1)
    db.session.add(pbt_izakaya_image1)
    db.session.add(pbt_matcha_image1)
    db.session.add(pbt_gameboy_image1)

    db.session.add(kbd_purple_keyboard_image1)
    db.session.add(kbd_soldered_keyboard_image1)
    db.session.add(d84_black_keyboard_image1)
    db.session.add(custom_wood_keyboard_image1)
    db.session.add(mountain_ergo_keyboard_image1)
    db.session.add(azio_retro_keyboard_image1)

    db.session.add(blade65_aluminum_diy_kit_image1)
    db.session.add(bento_cherry_diy_kit_image1)
    db.session.add(independent_cherry_diy_kit_image1)
    db.session.add(womier_pudding_diy_kit_image1)
    db.session.add(womier_tiffany_diy_kit_image1)
    db.session.add(gk61x_cherry_diy_kit_image1)
    db.session.add(yunzii_macaron_diy_kit_image1)
    db.session.add(yunzii_rainbow_diy_kit_image1)
    db.session.add(yunzii_mint_diy_kit_image1)

    db.session.commit()


def undo_product_images():
    db.session.execute("TRUNCATE product_images RESTART IDENTITY CASCADE;")
    db.session.commit()
