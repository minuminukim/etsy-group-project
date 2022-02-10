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

    db.session.commit()


def undo_product_images():
    db.session.execute("TRUNCATE product_images RESTART IDENTITY CASCADE;")
    db.session.commit()
