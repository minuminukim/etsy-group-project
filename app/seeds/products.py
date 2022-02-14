from dis import dis
from app.models import db, Product


def seed_products():
    # SWITCHES
    cherry_red_switch = Product(
        user_id=4,
        title="Cherry RGB Red Switches (10 PCS)",
        description="Linear, 35 cN operating force, 2.0 mm pre travel, 4.0 mm total travel, Plate mount 3pin, MX stem",
        price=4.00,
        rating=4,
        stock=200,
        category="switches",
    )

    cherry_brown_switch = Product(
        user_id=4,
        title="Cherry RGB Brown Switches (10 PCS)",
        description="Tactile, 45 cN operating force, 2.0 mm pre travel, 4.0 mm total travel, Plate mount 3pin, MX stem",
        price=4.00,
        rating=4,
        stock=200,
        category="switches",
    )

    cherry_blue_switch = Product(
        user_id=4,
        title="Cherry RGB Blue Switches (10 PCS)",
        description="Tactile & Clicky, 50 cN operating force, 2.2 mm pre travel, 4.0 mm total travel, Plate mount 3pin, MX stem",
        price=4.00,
        rating=3,
        stock=200,
        category="switches",
    )

    cherry_black_switch = Product(
        user_id=4,
        title="Cherry RGB Black Switches (10 PCS)",
        description="Linear, 60 cN operating force, 2.0 mm pre travel, 4.0 mm total travel, Plate mount 3 pin, MX stem",
        price=4.00,
        rating=5,
        stock=200,
        category="switches",
    )

    cherry_silver_switch = Product(
        user_id=4,
        title="Cherry RGB Silver Switches (10 PCS)",
        description="Linear, 45 cN operating force, 1.2 mm pre travel, 3.4 mm total travel, Plate mount 3pin, MX stem",
        price=5.50,
        rating=5,
        stock=100,
        category="switches",
    )

    akko_rose_switch = Product(
        user_id=2,
        title="Akko CS Switches, 3 Pin 43gf Linear Switch Compatible for MX Mechanical Keyboard (45 pcs, Rose Red)",
        description="Akko CS Switch Series - Akko Custom Series (CS) switches are 3-pin custom switches made for DIY enthusiasts to obtain satisfying typing feelings with more affordable options.",
        price=13.99,
        rating=4,
        discount=10,
        stock=22,
        category="switches",
    )

    akko_green_switch = Product(
        user_id=2,
        title="Akko CS Switches, 3 Pin 43gf Linear Switch Compatible for MX Mechanical Keyboard (45 pcs, Green)",
        description="Akko CS Switch Series - Akko Custom Series (CS) switches are 3-pin custom switches made for DIY enthusiasts to obtain satisfying typing feelings with more affordable options.",
        price=13.99,
        rating=4,
        discount=10,
        stock=22,
        category="switches",
    )

    akko_starfish_switch = Product(
        user_id=2,
        title="Akko CS Switches, 3 Pin 43gf Linear Switch Compatible for MX Mechanical Keyboard (45 pcs, Starfish)",
        description="Akko CS Switch Series - Akko Custom Series (CS) switches are 3-pin custom switches made for DIY enthusiasts to obtain satisfying typing feelings with more affordable options.",
        price=13.99,
        rating=4,
        discount=10,
        stock=12,
        category="switches",
    )

    akko_jelly_switch = Product(
        user_id=2,
        title="Akko CS Switches, 3 Pin 43gf Linear Switch Compatible for MX Mechanical Keyboard (45 pcs, Jelly Blue)",
        description="Akko CS Switch Series - Akko Custom Series (CS) switches are 3-pin custom switches made for DIY enthusiasts to obtain satisfying typing feelings with more affordable options.",
        price=16.00,
        rating=5,
        stock=4,
        category="switches",
    )

    tecsee_metal_switch = Product(
        user_id=3,
        title="Tecsee Metal Coated Switches 5-Pin PCB Mounted (35PCS)",
        description="Specs: Sold as one pack, 1 pack = 35 switches. Laser Switch; Linear; Aluminum Coated over PC Housing; UHMWPE Stem; 63.5g Double Gold-Plated Springs; 5-pins PCB Mounted",
        price=56.00,
        rating=5,
        stock=45,
        category="switches",
    )

    tecsee_gold_switch = Product(
        user_id=3,
        title="Tecsee Gold Coated Switches 5-Pin PCB Mounted (35PCS)",
        description="Specs: Sold as one pack, 1 pack = 35 switches. Laser Switch; Linear; Aluminum Coated over PC Housing; UHMWPE Stem; 63.5g Double Gold-Plated Springs; 5-pins PCB Mounted",
        price=72.99,
        rating=4,
        stock=13,
        category="switches",
    )

    gateron_white_switch = Product(
        user_id=2,
        title="Gateron 3 Pins G Pro White Linear Silver Switches (35pcs)",
        description="Specs: Linear; Operating force 38g; Bottom-out 45g; 2.0 +- 0.6 mm pre-travel; 4.0+-0.4 mm total travel; Plate mount 3 pin; MX stem.",
        price=11.80,
        rating=3,
        stock=6,
        category="switches",
    )

    # KEYCAPS
    pbt_chalk_keycaps = Product(
        user_id=1,
        title="PBT Cherry Profile Chalk Smiley Keycaps Set",
        description="Material: PBT material, Profile: Cherry profile, Production Method: Dye-sublimated, Total Keys: 126, Thickness: 1.35mm, Weight: 460g",
        price=45.00,
        rating=4,
        stock=20,
        category="keycaps",
    )

    enjoypbt_green_keycaps = Product(
        user_id=5,
        title="EnjoyPBT ABS Doubleshot Green & White Keycaps Set",
        description="Material: ABS material, Profile: Cherry Profile, Production Method: Doubleshot, Weight: 820g, Thickness: 1.5mm, Total Keys: 160, Manufacturer: ePBT",
        price=69.00,
        rating=4,
        stock=5,
        category="keycaps",
    )

    enjoypbt_black_keycaps = Product(
        user_id=5,
        title="EnjoyPBT ABS Doubleshot Black & Orange Keycaps Set",
        description="Material: ABS material, Profile: Cherry Profile, Production Method: Doubleshot, Total Keys: 164keys, Manufacturer: ePBT, Weight: 837g, Thickness: 1.5mm",
        price=69.00,
        rating=4,
        stock=0,
        category="keycaps",
    )

    artisan_bear_esc_keycap = Product(
        user_id=1,
        title="Cherry Profile Artisan Bear ESC Keycaps",
        description="Material: PC Material, Profile: Cherry Profile, Thickness: 1.6mm, Weight: 30g, Compatibility: Cherry MX",
        price=9.90,
        rating=5,
        stock=12,
        category="keycaps",
    )

    holyoops_game_console_keycap = Product(
        user_id=1,
        title="Holyoops Game Console Artisan Keycaps",
        description="Material: Anodized Aluminum body, Size: 1.75u (for CapsLock), Weight: 35g, Details: Shine-through for silicone buttons",
        price=29.00,
        rating=4,
        stock=10,
        category="keycaps",
    )

    blue_hell_keycaps = Product(
        user_id=6,
        title="Blue Hell Keycaps Dye-Sublimation PBT Keycap Set Cherry Profile Japanese Keycaps",
        description="Only sell keycaps!!! The keyboard in the picture is only for the demo and is not for sale.",
        price=39.99,
        rating=4,
        discount=10,
        stock=22,
        category="keycaps",
    )

    magic_violet_keycaps = Product(
        user_id=6,
        title="PBT Keycaps,137 Keys Magic Theme Keycaps Dye Sublimation XDA Profile Violet PBT Keycap Set for 61/87/104/108/84/64/98/96 Cherry MX Mechanical Keyboard",
        description="Only sell keycaps!!! The keyboard in the picture is only for the demo and is not for sale. 37 keycaps can be used for most ANSI MX switch mechanical keyboards, a good choice for you to DIY your mechanical keyboard.137 keys can fit for 61, 64, 68, 74, 84, 87, 96, 980, 104, 108 key layout mechanical keyboard with MX switch",
        price=39.99,
        rating=3,
        discount=10,
        stock=22,
        category="keycaps",
    )

    pbt_coral_keycaps = Product(
        user_id=5,
        title="PBT Keycaps, 137 Keys Magic Theme Keycaps Dye Sublimation XDA Profile Violet PBT Keycap Set for 61/87/104/108/84/64/98/96 Cherry MX Mechanical Keyboard (Coral Sea)",
        description="Only sell keycaps!!! The keyboard in the picture is only for the demo and is not for sale. 37 keycaps can be used for most ANSI MX switch mechanical keyboards, a good choice for you to DIY your mechanical keyboard.137 keys can fit for 61, 64, 68, 74, 84, 87, 96, 980, 104, 108 key layout mechanical keyboard with MX switch",
        price=25.99,
        rating=3,
        discount=7,
        stock=5,
        category="keycaps",
    )

    pbt_fate_keycaps = Product(
        user_id=5,
        title="PBT Keycaps, 137 Keys Magic Theme Keycaps Dye Sublimation XDA Profile Violet PBT Keycap Set for 61/87/104/108/84/64/98/96 Cherry MX Mechanical Keyboard (Fate)",
        description="Only sell keycaps!!! The keyboard in the picture is only for the demo and is not for sale. 37 keycaps can be used for most ANSI MX switch mechanical keyboards, a good choice for you to DIY your mechanical keyboard.137 keys can fit for 61, 64, 68, 74, 84, 87, 96, 980, 104, 108 key layout mechanical keyboard with MX switch",
        price=25.99,
        rating=3,
        discount=7,
        stock=22,
        category="keycaps",
    )

    pbt_izakaya_keycaps = Product(
        user_id=5,
        title="PBT Keycaps, 137 Keys Magic Theme Keycaps Dye Sublimation XDA Profile Violet PBT Keycap Set for 61/87/104/108/84/64/98/96 Cherry MX Mechanical Keyboard (Izakaya)",
        description="Only sell keycaps!!! The keyboard in the picture is only for the demo and is not for sale. 37 keycaps can be used for most ANSI MX switch mechanical keyboards, a good choice for you to DIY your mechanical keyboard.137 keys can fit for 61, 64, 68, 74, 84, 87, 96, 980, 104, 108 key layout mechanical keyboard with MX switch",
        price=25.99,
        rating=3,
        discount=7,
        stock=1,
        category="keycaps",
    )

    pbt_matcha_keycaps = Product(
        user_id=5,
        title="Matcha Dye Sub ZDA PBT Keycap Similar to XDA Japanese Korean Russian for MX Keyboard 104 87 61 Melody 96 KBD75 ID80 GK64 68 (Matcha Japanese Base kit)",
        description="Package Includes: 124 Original Matcha Keycaps + Wire Puller.This link is only the keycaps,no keyboard included.The keycap loading board is only to take photo,not included in the sold package.There is anti-fake space presented in bags. This keycap set is ZDA profile which is ball shape,which is lower than SA,higher than XDA.",
        price=32.90,
        rating=4,
        stock=0,
        category="keycaps",
    )

    pbt_gameboy_keycaps = Product(
        user_id=5,
        title="Gameboy Dye Sub ZDA PBT Keycap Similar to XDA Japanese Korean Russian for MX Keyboard 104 87 61 Melody 96 KBD75 ID80 GK64 68 (Gameboy Base kit)",
        description="Package Includes: 24 Original Gameboy Keycaps + Wire Puller.This link is only the keycaps,no keyboard included.The keycap loading board is only to take photo,not included in the sold package.There is anti-fake space presented in bags. This keycap set is ZDA profile which is ball shape,which is lower than SA,higher than XDA.",
        price=32.90,
        rating=4,
        stock=0,
        category="keycaps",
    )

    # KEYBOARDS
    keychron_k2_keyboard = Product(
        user_id=2,
        title="Keychron K2 Wireless Mechanical Keyboard",
        description="K2 is a super tactile wirless or wired keyboard giving you all the keys and function you need while keeping it compact, with the largest battery seen in a mechanical keyboard. Comes with RGB Backlight.",
        price=79.00,
        rating=4,
        stock=12,
        category="keyboards",
    )

    keychron_c2_keyboard = Product(
        user_id=2,
        title="Keychron C2 Wired Mechanical Keyboard",
        description="Engineered to maximize your productivity with most popular full size layout with number pad. The hot-swappable option offers the freedom to easily personalize your typing experience without soldering.",
        price=59.00,
        rating=5,
        stock=10,
        category="keyboards",
    )

    keychron_k14_keyboard = Product(
        user_id=2,
        title="Keychron K14 Wireless Mechanical Keyboard",
        description="K14 is a 70% wireless mechanical keyboard that retains direct access to the entire navigation cluster that a tenkeyless keyboard does, but in a smaller footprint. The hot-swappable option offers the freedom to easily customize per-key typing experience without soldering.",
        price=59.00,
        rating=4,
        stock=12,
        category="keyboards",
    )

    tofu60_keyboard = Product(
        user_id=3,
        title="Tofu60 Hot-swap Mechanical Keyboard With ePBT Dye-sub Multi-color Japanese Keycaps",
        description="PCB: Hot-swappable, Keycaps: ePBT Dye-sub Multi-color Japanese Keycaps 61keys, Case: Tofu60 Aluminum E-coating Pink, Plate: Aluminum, USB port: USB-C interface, Software: Support VIA configurator",
        price=205.00,
        rating=4,
        stock=8,
        category="keyboards",
    )

    kbdpad_numpad_keyboard = Product(
        user_id=3,
        title="KBDPAD MKII E-white Soldered Mechanical Keyboard Pad",
        description="In collaboration with ai03, the KBDPAD has been redesigned inside and out. Enjoy a high-quality, versatile number pad for affordable prices. At 370g, the case is light enough to be carried around, while being solid on the desk.",
        price=106.00,
        rating=5,
        stock=4,
        category="keyboards",
    )

    chinese_drum_keyboard = Product(
        user_id=1,
        title="Chinese Characters Drum Keyboard",
        description="Exclusive 500% Layout Chinese Character Drumpad Keyboard. One of One. Party Like A Rockstar 🤩",
        price=9999.99,
        rating=5,
        stock=1,
        category="keyboards",
    )

    kbd_purple_keyboard = Product(
        user_id=1,
        title="KBD75 V3.1 Violet Purple Mechanical Keyboard with Simple Purple Dye-Sub Keycaps",
        description="Soldered PCB: KBD75 Rev 2.0 solder PCB; Hot-swap PCB: KBD75 hot swap PCB; Typing Angle: 7 degrees; RGB: Both PCB come with RGB underglow; PCB Port: Type-C; Case Material: Aluminum; Layout size: 75%; Structure: Top-mount; Plate: Brass / Aluminum / Polycarbonate Plate; Stabs: Dyboox PC screw-in stabs 60 set - purple; Weight bar: Aluminum; Keycaps: Cherry Profile Simple Purple Dye-sub Keycaps",
        price=265.00,
        rating=4,
        discount=10,
        stock=26,
        category="keyboards",
    )

    kbd_soldered_keyboard = Product(
        user_id=2,
        title="Fully Assembled KBD75 V2 Soldered Mechanical Keyboard",
        description="Includes: Structure: Tray mount; Anodized KBD75 V2 aluminum case; KBD75 PCD (RGB underglow, soldered version); Brass plate or Aluminum plate (Tofu84 Aluminum plate); Cherry screw-in or GMK screw-in stabs; Screws and rubber feet; Acrylic mid-layer",
        price=153.00,
        rating=3,
        discount=10,
        stock=3,
        category="keyboards",
    )

    d84_black_keyboard = Product(
        user_id=3,
        title="D84 V2 Black Hot-Swap RCG Mechanical Keyboard with PBT Orange Doubleshot OSA Keycaps",
        description="Structure:  Gasket Mount; Case:  D84 V2 black aluminum case; Typing Angle: 7°; Hot-swap version:  KBD75RGB Hot-swap PCB (Per-key RGB on top) SKU:  DP4025 , Type-C; interface, without RGB underglow . Fixed layout (84 keys), one layout ONLY for hot-swap PCB.; Plate:  Polycarbonate  Plate; Stabilizers:  Cherry screw-in stabs 60set; Keycaps :   PBT Doubleshot; OSA Keycaps Set  - color2  (SKU: DP0002 ) ; PCB foam:  Put it between PCB and; Plate  DP1393; Case foam:  Put it between PCB and Case  DP0501",
        price=278.00,
        rating=3,
        stock=99,
        category="keyboards",
    )

    custom_wood_keyboard = Product(
        user_id=4,
        title="Fully Assembled Wood Custom Keyboard",
        description="Wood case + WristRest; DZ60 V2 Soldered Flex Cut PCD (Update: 2022/1/3); USB-C; QMK Firmware; Dye-sub Keycaps cherry Profile + NPKC CMYK. NOTE: Please select the switches and pay together at the checkout, the fully-assembled keyboard does not support return requests, by the way, the case is organic wood made, it is a normal phenomenon if there exits the little gouge or little stripe, please do not add it to your cart if you care about it, thank you.",
        price=139.00,
        rating=3,
        stock=12,
        category="keyboards",
    )

    mountain_ergo_keyboard = Product(
        user_id=5,
        title="[RESTOCK] Mountain Ergo Keyboard",
        description="Color options: Aluminum Black, E-white; Typing Angle: Left 5°, right 3°, case 7°; Structure: Top mount; Weight: Around 2.2 kg; Tmk firmware, programmable, http://www.ydkb.io; Aluminum Top and Bottom case; bottom weight: E-white or Alu Black; Plate: Aluminum material; Ergonomic design, PCB and Plate are split. PCB : solder version and hot-swap version; Type-C interface; Both versions do not support LED, only indicating caplock light support. Including the WOOD WRIST REST; Mac,Windows,Linux compatible - Design by Wei",
        price=442.00,
        rating=5,
        stock=22,
        category="keyboards",
    )

    azio_retro_keyboard = Product(
        user_id=6,
        title="Azio MK Retro Classic Artisan Backlit Bluetooth USB Keyboard - Azio Typelit Key Switch",
        description=" Inspired by vintage typewriters and crafted with ultramodern features, the Azio Retro Classic is the perfect amalgam of past, present and future. A backlit mechanical keyboard with round key caps that evoke nostalgia of yesteryear complemented with a durable zinc alloy frame.",
        price=219.00,
        rating=3,
        stock=22,
        category="keyboards",
    )

    # DIY KITS
    kbdpad_diy_kit = Product(
        user_id=3,
        title="KBDPAD MKII Mechanical Keyboard DIY Kit (E-creamy White)",
        description="In collaboration with ai03, the KBDPAD has been redesigned inside and out. Enjoy a high-quality, versatile number pad for affordable prices. At 370g, the case is light enough to be carried around, while being solid on the desk.",
        price=83.00,
        rating=5,
        stock=12,
        category="diy_kits",
    )

    kbd67_diy_kit = Product(
        user_id=3,
        title="KBD67 Lite R3 Mechanical Keyboard DIY Kit (Transparent Orange)",
        description="Top and Bottom ABS plastic case, Mute silicone, PC screw-in stabilizers 60 set, Wired, Supports RGB and Hot-Swap, USB-C supports MAC, Windows, Linux, Made in China",
        price=109.00,
        rating=4,
        stock=5,
        category="diy_kits",
    )

    tofu84_diy_kit = Product(
        user_id=3,
        title="Tofu84 75% Soldered Mechanical Keyboard DIY Kit (Acrylic)",
        description="Tray Mount, 75 layout, Soldered Version, Unassembled",
        price=159.00,
        rating=4,
        stock=3,
        category="diy_kits",
    )

    blade65_aluminum_diy_kit = Product(
        user_id=1,
        title="Blade65 Aluminum Skull DIY Kit",
        description="Material: Aluminum case; Badge: z Skull (limited edition); Typing angle: 7°; Structure: Gasket mount; Size: 325 mm (length) x 125 mm (width); PCB: KBD67 MKII v3 hot-swap PCB (Per-key RGB on top/ Type-C/ VIA support); Plate: KBD67 Lite Polycarbonate/ Brass; Stabs: Cherry screw-in stabs 60set; Mute Silicone: KBD67 Lite Mute Silicone (Between PCB and Plate); Case foam: Between Case and PCB; Weight: Around 2.2 kg; Designer: KBDfans Wei",
        price=289.00,
        rating=4,
        discount=5,
        stock=22,
        category="diy_kits",
    )

    bento_cherry_diy_kit = Product(
        user_id=1,
        title="140 Key Japanese Bento Root Cherry Profile Dye Sub Keycaps for Mechanical Keyboard GH60 XD64 GK64 Tada68 Poker 60 XD60",
        description="[PBT Dye Sublimation] With high-quality PBT keycaps and an anti-grease coating, these 141-key keycaps provide top-notch durability and a great feel for your typing. Advanced five-sided sublimation technology makes the pattern not fade.",
        price=37.99,
        rating=3,
        discount=25,
        stock=77,
        category="diy_kits",
    )

    independent_cherry_diy_kit = Product(
        user_id=2,
        title="GK61 GK61x RGB Hot Swap Independent Driver Tyce-C ANSI Replaceable Space Cherry MX Switches Mechanical Keyboard DIY Kit Case Plate PCB",
        description="There are no switches in the kit, you can order Cherry Gateron Kailh SMD Box switches etc yourself. Just put in switches in PCB is ok,no need soldering again.3 pin 5 pin both are ok.If little keys not working,check the switch pin whether it's bent at first.Especially Kailh switches",
        price=63.00,
        rating=3,
        stock=72,
        category="diy_kits",
    )

    womier_pudding_diy_kit = Product(
        user_id=3,
        title="Womier WK61 Hot-Swappable Keyboard Ultra-Compact RGB Gaming Keyboard w/Pudding Keycaps, Linear Red Switch, Pro Driver/Software Supported (Blue)",
        description="[Hot-Swappable Red Switches & Type-C USB Cable]: Quiet mechanical switch, linear and soft key travel makes every click easy to register. Made to last with switches rated for 50 million keypresses. Type-C USB Cable, High Speed Transmission,More stable transmission.",
        price=58.00,
        rating=4,
        stock=2,
        category="diy_kits",
    )

    womier_tiffany_diy_kit = Product(
        user_id=3,
        title="Womier WK61 Hot-Swappable Keyboard Ultra-Compact RGB Gaming Keyboard w/Pudding Keycaps, Linear Red Switch, Pro Driver/Software Supported (Tiffany Color)",
        description="[Hot-Swappable Red Switches & Type-C USB Cable]: Quiet mechanical switch, linear and soft key travel makes every click easy to register. Made to last with switches rated for 50 million keypresses. Type-C USB Cable, High Speed Transmission,More stable transmission.",
        price=58.00,
        rating=4,
        stock=62,
        category="diy_kits",
    )

    gk61x_cherry_diy_kit = Product(
        user_id=4,
        title="GK61X DIY Mechanical Keyboard kit hot-swappable Wired RGB Customization Compatible with Cherry MX Gateron Kailh Switch Walnut",
        description="Equipped with hot-swappable terminals, you can directly install the MX shaft body without welding, and easily build your own mechanical keyboard",
        price=136.71,
        rating=3,
        discount=5,
        stock=0,
        category="diy_kits",
    )

    yunzii_macaron_diy_kit = Product(
        user_id=4,
        title="YUNZII Macaron 84 84-Key RGB Hotswap Wired Mechanical Gaming Keyboard with PBT Dye-subbed Keycaps for Mac/Win/Gamers (Gateron Black Switch,Macaron)",
        description="The YUNZII Macaron 84 keyboard is inspired from happy tint of bright colors of macaron, it can cheer you up when you start working or gaming. The keycaps of Macaron 84 applies top-grade 85% PBT with high-contrast dye-sublimated legends, which generally last longer than ABS equivalents. The Dye-Sub PBT keycaps of Macaron 84 enhances the overall durability with water and dust resistance.",
        price=95.00,
        rating=4,
        stock=0,
        category="diy_kits",
    )

    yunzii_rainbow_diy_kit = Product(
        user_id=4,
        title="YUNZII Macaron 84 84-Key RGB Hotswap Wired Mechanical Gaming Keyboard with PBT Dye-subbed Keycaps for Mac/Win/Gamers (Blue Rainbow)",
        description="The YUNZII Blue Rainbow 84 keyboard is inspired from happy tint of bright colors of macaron, it can cheer you up when you start working or gaming. The keycaps of Macaron 84 applies top-grade 85% PBT with high-contrast dye-sublimated legends, which generally last longer than ABS equivalents. The Dye-Sub PBT keycaps of Macaron 84 enhances the overall durability with water and dust resistance.",
        price=95.00,
        rating=4,
        stock=4,
        category="diy_kits",
    )

    yunzii_mint_diy_kit = Product(
        user_id=4,
        title="YUNZII Macaron 84 84-Key RGB Hotswap Wired Mechanical Gaming Keyboard with PBT Dye-subbed Keycaps for Mac/Win/Gamers (Mint)",
        description="The YUNZII Blue Rainbow 84 keyboard is inspired from happy tint of bright colors of macaron, it can cheer you up when you start working or gaming. The keycaps of Macaron 84 applies top-grade 85% PBT with high-contrast dye-sublimated legends, which generally last longer than ABS equivalents. The Dye-Sub PBT keycaps of Macaron 84 enhances the overall durability with water and dust resistance.",
        price=95.00,
        rating=3,
        stock=1,
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

    db.session.add(akko_rose_switch)
    db.session.add(akko_green_switch)
    db.session.add(akko_starfish_switch)
    db.session.add(akko_jelly_switch)
    db.session.add(tecsee_metal_switch)
    db.session.add(tecsee_gold_switch)
    db.session.add(gateron_white_switch)

    db.session.add(blue_hell_keycaps)
    db.session.add(magic_violet_keycaps)
    db.session.add(pbt_coral_keycaps)
    db.session.add(pbt_fate_keycaps)
    db.session.add(pbt_izakaya_keycaps)
    db.session.add(pbt_matcha_keycaps)
    db.session.add(pbt_gameboy_keycaps)

    db.session.add(kbd_purple_keyboard)
    db.session.add(kbd_soldered_keyboard)
    db.session.add(d84_black_keyboard)
    db.session.add(custom_wood_keyboard)
    db.session.add(mountain_ergo_keyboard)
    db.session.add(azio_retro_keyboard)

    db.session.add(blade65_aluminum_diy_kit)
    db.session.add(bento_cherry_diy_kit)
    db.session.add(independent_cherry_diy_kit)
    db.session.add(womier_pudding_diy_kit)
    db.session.add(womier_tiffany_diy_kit)
    db.session.add(gk61x_cherry_diy_kit)
    db.session.add(yunzii_macaron_diy_kit)
    db.session.add(yunzii_rainbow_diy_kit)
    db.session.add(yunzii_mint_diy_kit)

    db.session.commit()


def undo_products():
    db.session.execute("TRUNCATE products RESTART IDENTITY CASCADE;")
    db.session.commit()
