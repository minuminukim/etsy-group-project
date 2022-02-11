from app.models import db, Product


def seed_products():
    # SWITCHES
    cherry_red_switch = Product(
        user_id=4,
        title="Cherry RGB Red Switches (10 PCS)",
        description="Linear, 35 cN operating force, 2.0 mm pre travel, 4.0 mm total travel, Plate mount 3pin, MX stem",
        price=4.00,
        rating=9,
        stock=200,
        category="switches",
    )

    cherry_brown_switch = Product(
        user_id=4,
        title="Cherry RGB Brown Switches (10 PCS)",
        description="Tactile, 45 cN operating force, 2.0 mm pre travel, 4.0 mm total travel, Plate mount 3pin, MX stem",
        price=4.00,
        rating=10,
        stock=200,
        category="switches",
    )

    cherry_blue_switch = Product(
        user_id=4,
        title="Cherry RGB Blue Switches (10 PCS)",
        description="Tactile & Clicky, 50 cN operating force, 2.2 mm pre travel, 4.0 mm total travel, Plate mount 3pin, MX stem",
        price=4.00,
        rating=7,
        stock=200,
        category="switches",
    )

    cherry_black_switch = Product(
        user_id=4,
        title="Cherry RGB Black Switches (10 PCS)",
        description="Linear, 60 cN operating force, 2.0 mm pre travel, 4.0 mm total travel, Plate mount 3 pin, MX stem",
        price=4.00,
        rating=10,
        stock=200,
        category="switches",
    )

    cherry_silver_switch = Product(
        user_id=4,
        title="Cherry RGB Silver Switches (10 PCS)",
        description="Linear, 45 cN operating force, 1.2 mm pre travel, 3.4 mm total travel, Plate mount 3pin, MX stem",
        price=5.50,
        rating=9,
        stock=100,
        category="switches",
    )

    # KEYCAPS
    pbt_chalk_keycaps = Product(
        user_id=1,
        title="PBT Cherry Profile Chalk Smiley Keycaps Set",
        description="Material: PBT material, Profile: Cherry profile, Production Method: Dye-sublimated, Total Keys: 126, Thickness: 1.35mm, Weight: 460g",
        price=45.00,
        rating=8,
        stock=20,
        category="keycaps",
    )

    enjoypbt_green_keycaps = Product(
        user_id=5,
        title="EnjoyPBT ABS Doubleshot Green & White Keycaps Set",
        description="Material: ABS material, Profile: Cherry Profile, Production Method: Doubleshot, Weight: 820g, Thickness: 1.5mm, Total Keys: 160, Manufacturer: ePBT",
        price=69.00,
        rating=9,
        stock=5,
        category="keycaps",
    )

    enjoypbt_black_keycaps = Product(
        user_id=5,
        title="EnjoyPBT ABS Doubleshot Black & Orange Keycaps Set",
        description="Material: ABS material, Profile: Cherry Profile, Production Method: Doubleshot, Total Keys: 164keys, Manufacturer: ePBT, Weight: 837g, Thickness: 1.5mm",
        price=69.00,
        rating=8,
        stock=0,
        category="keycaps",
    )

    artisan_bear_esc_keycap = Product(
        user_id=1,
        title="Cherry Profile Artisan Bear ESC Keycaps",
        description="Material: PC Material, Profile: Cherry Profile, Thickness: 1.6mm, Weight: 30g, Compatibility: Cherry MX",
        price=9.90,
        rating=10,
        stock=12,
        category="keycaps",
    )

    holyoops_game_console_keycap = Product(
        user_id=1,
        title="Holyoops Game Console Artisan Keycaps",
        description="Material: Anodized Aluminum body, Size: 1.75u (for CapsLock), Weight: 35g, Details: Shine-through for silicone buttons",
        price=29.00,
        rating=8,
        stock=10,
        category="keycaps",
    )

    # KEYBOARDS
    keychron_k2_keyboard = Product(
        user_id=2,
        title="Keychron K2 Wireless Mechanical Keyboard",
        description="K2 is a super tactile wirless or wired keyboard giving you all the keys and function you need while keeping it compact, with the largest battery seen in a mechanical keyboard. Comes with RGB Backlight.",
        price=79.00,
        rating=8,
        stock=12,
        category="keyboards",
    )

    keychron_c2_keyboard = Product(
        user_id=2,
        title="Keychron C2 Wired Mechanical Keyboard",
        description="Engineered to maximize your productivity with most popular full size layout with number pad. The hot-swappable option offers the freedom to easily personalize your typing experience without soldering.",
        price=59.00,
        rating=9,
        stock=10,
        category="keyboards",
    )

    keychron_k14_keyboard = Product(
        user_id=2,
        title="Keychron K14 Wireless Mechanical Keyboard",
        description="K14 is a 70% wireless mechanical keyboard that retains direct access to the entire navigation cluster that a tenkeyless keyboard does, but in a smaller footprint. The hot-swappable option offers the freedom to easily customize per-key typing experience without soldering.",
        price=59.00,
        rating=8,
        stock=12,
        category="keyboards",
    )

    tofu60_keyboard = Product(
        user_id=3,
        title="Tofu60 Hot-swap Mechanical Keyboard With ePBT Dye-sub Multi-color Japanese Keycaps",
        description="PCB: Hot-swappable, Keycaps: ePBT Dye-sub Multi-color Japanese Keycaps 61keys, Case: Tofu60 Aluminum E-coating Pink, Plate: Aluminum, USB port: USB-C interface, Software: Support VIA configurator",
        price=205.00,
        rating=8,
        stock=8,
        category="keyboards",
    )

    kbdpad_numpad_keyboard = Product(
        user_id=3,
        title="KBDPAD MKII E-white Soldered Mechanical Keyboard Pad",
        description="In collaboration with ai03, the KBDPAD has been redesigned inside and out. Enjoy a high-quality, versatile number pad for affordable prices. At 370g, the case is light enough to be carried around, while being solid on the desk.",
        price=106.00,
        rating=10,
        stock=4,
        category="keyboards",
    )

    chinese_drum_keyboard = Product(
        user_id=1,
        title="Chinese Characters Drum Keyboard",
        description="Exclusive 500% Layout Chinese Character Drumpad Keyboard. One of One. Party Like A Rockstar 🤩",
        price=9999.99,
        rating=10,
        stock=1,
        category="keyboards",
    )

    # DIY KITS
    kbdpad_diy_kit = Product(
        user_id=3,
        title="KBDPAD MKII Mechanical Keyboard DIY Kit (E-creamy White)",
        description="In collaboration with ai03, the KBDPAD has been redesigned inside and out. Enjoy a high-quality, versatile number pad for affordable prices. At 370g, the case is light enough to be carried around, while being solid on the desk.",
        price=83.00,
        rating=10,
        stock=12,
        category="diy_kits",
    )

    kbd67_diy_kit = Product(
        user_id=3,
        title="KBD67 Lite R3 Mechanical Keyboard DIY Kit (Transparent Orange)",
        description="Top and Bottom ABS plastic case, Mute silicone, PC screw-in stabilizers 60 set, Wired, Supports RGB and Hot-Swap, USB-C supports MAC, Windows, Linux, Made in China",
        price=109.00,
        rating=8,
        stock=5,
        category="diy_kits",
    )

    tofu84_diy_kit = Product(
        user_id=3,
        title="Tofu84 75% Soldered Mechanical Keyboard DIY Kit (Acrylic)",
        description="Tray Mount, 75 layout, Soldered Version, Unassembled",
        price=159.00,
        rating=9,
        stock=3,
        category="diy_kits",
    )

    db.session.add(cherry_red_switch)
    db.session.add(cherry_brown_switch)
    db.session.add(cherry_blue_switch)
    db.session.add(cherry_black_switch)
    db.session.add(cherry_silver_switch)

    db.session.add(pbt_chalk_keycaps)
    db.session.add(enjoypbt_green_keycaps)
    db.session.add(enjoypbt_black_keycaps)
    db.session.add(artisan_bear_esc_keycap)
    db.session.add(holyoops_game_console_keycap)

    db.session.add(keychron_k2_keyboard)
    db.session.add(keychron_c2_keyboard)
    db.session.add(keychron_k14_keyboard)
    db.session.add(tofu60_keyboard)
    db.session.add(kbdpad_numpad_keyboard)
    db.session.add(kbdpad_diy_kit)
    db.session.add(kbd67_diy_kit)
    db.session.add(tofu84_diy_kit)

    db.session.add(chinese_drum_keyboard)

    db.session.commit()


def undo_products():
    db.session.execute("TRUNCATE products RESTART IDENTITY CASCADE;")
    db.session.commit()
