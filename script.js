const menuItems = [
    {
        id: 1,
        name: "Türk kahvesi",
        price: "₺75",
        category: "bestsellers",
        badge: "En Çok Satanlardan",
        image: "menu_image.jpg"
    },
    {
        id: 2,
        name: "Menengiç kahvesi",
        price: "₺85",
        category: "bestsellers",
        image: "menu_image.jpg"
    },
    {
        id: 3,
        name: "Cilveli şehzade kahvesi",
        price: "₺130",
        category: "bestsellers",
        image: "menu_image.jpg"
    },
    {
        id: 4,
        name: "Dibek kahvesi",
        price: "₺85",
        category: "bestsellers",
        image: "menu_image.jpg"
    },
    {
        id: 5,
        name: "Kervansaray kahvesi",
        price: "₺85",
        category: "bestsellers",
        image: "menu_image.jpg"
    },
    {
        id: 6,
        name: "Türk kahvesi",
        price: "₺75",
        category: "sandcoffee",
        badge: "En Çok Satanlardan",
        image: "menu_image.jpg"
    },
    {
        id: 7,
        name: "Sütlü türk kahvesi",
        price: "₺90",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 8,
        name: "Kervansaray kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 9,
        name: "Menengiç kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 10,
        name: "Macun menengiç kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 11,
        name: "Dibek kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 12,
        name: "Osmanlı kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 13,
        name: "Cilveli şehzade kahvesi",
        price: "₺130",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 14,
        name: "Muzlu türk kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 15,
        name: "Çilekli türk kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 16,
        name: "Çörek otlu türk kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 17,
        name: "Karanfilli türk kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 18,
        name: "Çikolatalı türk kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 19,
        name: "Damla sakızlı türk kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 20,
        name: "Süvari menengiç",
        price: "₺95",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 21,
        name: "Süvari türk kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 22,
        name: "Çifte kavrulmuş türk kahvesi",
        price: "₺85",
        category: "sandcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 23,
        name: "Duble çay",
        price: "₺50",
        category: "hotdrinks",
        image: "menu_image.jpg"
    },
    {
        id: 24,
        name: "Çay",
        price: "₺30",
        category: "hotdrinks",
        image: "menu_image.jpg"
    },
    {
        id: 25,
        name: "Oralet çeşitleri",
        price: "₺30",
        category: "hotdrinks",
        image: "menu_image.jpg"
    },
    {
        id: 26,
        name: "Sıcak çikolata",
        price: "₺100",
        category: "hotdrinks",
        image: "menu_image.jpg"
    },
    {
        id: 27,
        name: "Sahlep",
        price: "₺110",
        category: "hotdrinks",
        image: "menu_image.jpg"
    },
    {
        id: 28,
        name: "Bitki Çayı",
        price: "₺90",
        category: "hotdrinks",
        image: "menu_image.jpg"
    },
    {
        id: 29,
        name: "Süt",
        price: "₺70",
        category: "hotdrinks",
        image: "menu_image.jpg"
    },
    {
        id: 30,
        name: "Ballı süt",
        price: "₺85",
        category: "hotdrinks",
        image: "menu_image.jpg"
    },
    {
        id: 31,
        name: "Dubai sıcak çikolata",
        price: "₺120",
        category: "hotdrinks",
        image: "menu_image.jpg"
    },
    {
        id: 32,
        name: "Su",
        price: "₺15",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 33,
        name: "Sade soda",
        price: "₺40",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 34,
        name: "Meyveli sodalar",
        price: "₺45",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 35,
        name: "Tropicano Meyve suları",
        price: "₺75",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 36,
        name: "Churchill tuzsuz",
        price: "₺80",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 37,
        name: "Churchill tuzlu",
        price: "₺80",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 38,
        name: "Retbull",
        price: "₺120",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 39,
        name: "Pepsi",
        price: "₺75",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 40,
        name: "Yedigün",
        price: "₺75",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 41,
        name: "Sprite",
        price: "₺75",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 42,
        name: "İce tea",
        price: "₺75",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 43,
        name: "Şerbetler",
        price: "₺100",
        category: "colddrinks",
        image: "menu_image.jpg"
    },
    {
        id: 44,
        name: "DOĞAL PORTAKAL SUYU",
        price: "₺120",
        category: "naturaljuices",
        image: "menu_image.jpg"
    },
    {
        id: 45,
        name: "DOĞAL PORTAKAL NAR SUYU",
        price: "₺125",
        category: "naturaljuices",
        image: "menu_image.jpg"
    },
    {
        id: 46,
        name: "DOĞAL PORTAKAL HAVUÇ SUYU",
        price: "₺125",
        category: "naturaljuices",
        image: "menu_image.jpg"
    },
    {
        id: 47,
        name: "DOĞAL NAR SUYU",
        price: "₺120",
        category: "naturaljuices",
        image: "menu_image.jpg"
    },
    {
        id: 48,
        name: "DOĞAL ÇİLEKLİ LİMONATA",
        price: "₺120",
        category: "naturaljuices",
        image: "menu_image.jpg"
    },
    {
        id: 49,
        name: "Greyfurt suyu",
        price: "₺120",
        category: "naturaljuices",
        image: "menu_image.jpg"
    },
    {
        id: 50,
        name: "Narlı limonata",
        price: "₺125",
        category: "naturaljuices",
        image: "menu_image.jpg"
    },
    {
        id: 51,
        name: "PEYNİRLİ GÖZLEME",
        price: "₺150",
        category: "gözleme-tost",
        image: "menu_image.jpg"
    },
    {
        id: 52,
        name: "PATATESLİ GÖZLEME",
        price: "₺150",
        category: "gözleme-tost",
        image: "menu_image.jpg"
    },
    {
        id: 53,
        name: "KAŞARLI GÖZLEME",
        price: "₺150",
        category: "gözleme-tost",
        image: "menu_image.jpg"
    },
    {
        id: 54,
        name: "SUCUK KAŞAR GÖZLEME",
        price: "₺175",
        category: "gözleme-tost",
        image: "menu_image.jpg"
    },
    {
        id: 55,
        name: "KAŞARLI TOST",
        price: "₺120",
        category: "gözleme-tost",
        image: "menu_image.jpg"
    },
    {
        id: 56,
        name: "SUCUKLU TOST",
        price: "₺120",
        category: "gözleme-tost",
        image: "menu_image.jpg"
    },
    {
        id: 57,
        name: "KARIŞIK TOST",
        price: "₺140",
        category: "gözleme-tost",
        image: "menu_image.jpg"
    },
    {
        id: 58,
        name: "Limonlu ÇITIR pasta",
        price: "₺145",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 59,
        name: "Yaban mersinli mono pasta",
        price: "₺160",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 60,
        name: "Cheesecake limon",
        price: "₺145",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 61,
        name: "Cheesecake frambuazlı",
        price: "₺145",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 62,
        name: "Mozaik pasta",
        price: "₺145",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 63,
        name: "Kalpli pasta (red love)",
        price: "₺170",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 64,
        name: "Gurme fıstık rüyası",
        price: "₺165",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 65,
        name: "Devil’s Fudge Cake",
        price: "₺145",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 66,
        name: "Tahinli pasta",
        price: "₺130",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 67,
        name: "Kuş sütü pasta",
        price: "₺155",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 68,
        name: "Siyah frambuazlı mono",
        price: "₺160",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 69,
        name: "Polka siyah",
        price: "₺155",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 70,
        name: "Sihirli top",
        price: "₺170",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 71,
        name: "Browni",
        price: "₺130",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 72,
        name: "Yanık ispanyol",
        price: "₺165",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 73,
        name: "Mono lotus chescake",
        price: "₺160",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 74,
        name: "Çilekli pasta",
        price: "₺145",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 75,
        name: "Muzlu çikolatalı pasta",
        price: "₺150",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 76,
        name: "Vişneli mono pasta",
        price: "₺160",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 77,
        name: "Orman meyveli pasta",
        price: "₺150",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 78,
        name: "Çikolatalı pasta",
        price: "₺145",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 79,
        name: "Hindistan cevizli mono",
        price: "₺160",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 80,
        name: "Mono Lotus pasta bisküvili",
        price: "₺165",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 81,
        name: "Tiramisu tondo",
        price: "₺145",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 82,
        name: "Sufle",
        price: "₺160",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 83,
        name: "Ballı cevizli pasta",
        price: "₺130",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 84,
        name: "Dubai çikolatalı pasta",
        price: "₺220",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 85,
        name: "Pasta süsleme",
        price: "₺45",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 86,
        name: "Servis ücreti",
        price: "₺45",
        category: "misc",
        image: "menu_image.jpg"
    },
    {
        id: 87,
        name: "Tarhana",
        price: "₺130",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 88,
        name: "Çerez",
        price: "₺170",
        category: "desserts",
        image: "menu_image.jpg"
    },
    {
        id: 89,
        name: "Espreesso",
        price: "₺85",
        category: "espresso",
        image: "menu_image.jpg"
    },
    {
        id: 90,
        name: "Copuccino",
        price: "₺110",
        category: "espresso",
        image: "menu_image.jpg"
    },
    {
        id: 91,
        name: "Cafe Latte",
        price: "₺110",
        category: "espresso",
        image: "menu_image.jpg"
    },
    {
        id: 92,
        name: "Americano",
        price: "₺95",
        category: "espresso",
        image: "menu_image.jpg"
    },
    {
        id: 93,
        name: "Latte machiato",
        price: "₺110",
        category: "espresso",
        image: "menu_image.jpg"
    },
    {
        id: 94,
        name: "Flat white",
        price: "₺110",
        category: "espresso",
        image: "menu_image.jpg"
    },
    {
        id: 95,
        name: "Mocha",
        price: "₺120",
        category: "espresso",
        image: "menu_image.jpg"
    },
    {
        id: 96,
        name: "Nesscoffee sade",
        price: "₺75",
        category: "espresso",
        image: "menu_image.jpg"
    },
    {
        id: 97,
        name: "Nesscoffeee sütlü (Toz)",
        price: "₺75",
        category: "espresso",
        image: "menu_image.jpg"
    },
    {
        id: 98,
        name: "Ristretto",
        price: "₺85",
        category: "espresso",
        image: "menu_image.jpg"
    },
    {
        id: 99,
        name: "İce latte",
        price: "₺125",
        category: "coldcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 100,
        name: "Frabbe",
        price: "₺170",
        category: "coldcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 101,
        name: "İce mocha",
        price: "₺140",
        category: "coldcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 102,
        name: "İce americano",
        price: "₺110",
        category: "coldcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 103,
        name: "Aromalı ice latte",
        price: "₺140",
        category: "coldcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 104,
        name: "İce white mocha",
        price: "₺140",
        category: "coldcoffee",
        image: "menu_image.jpg"
    },
    {
        id: 105,
        name: "CAFE ATOM MİLKSHAKE",
        price: "₺220",
        category: "milkshakes",
        image: "menu_image.jpg"
    },
    {
        id: 106,
        name: "MİLKSHAKE ÇİKOLATALI",
        price: "₺145",
        category: "milkshakes",
        image: "menu_image.jpg"
    },
    {
        id: 107,
        name: "MİLKSHAKE MUZLU",
        price: "₺135",
        category: "milkshakes",
        image: "menu_image.jpg"
    },
    {
        id: 108,
        name: "MİLKSHAKE VANİLYALI",
        price: "₺135",
        category: "milkshakes",
        image: "menu_image.jpg"
    },
    {
        id: 109,
        name: "MİLKSHAKE FRAMBUAZLI",
        price: "₺135",
        category: "milkshakes",
        image: "menu_image.jpg"
    },
    {
        id: 110,
        name: "MİLKSHAKE OREOLU",
        price: "₺135",
        category: "milkshakes",
        image: "menu_image.jpg"
    },
    {
        id: 111,
        name: "MİLKSHAKE KAVUNLU",
        price: "₺135",
        category: "milkshakes",
        image: "menu_image.jpg"
    },
    {
        id: 112,
        name: "MİLKSHAKE KARPUZLU",
        price: "₺135",
        category: "milkshakes",
        image: "menu_image.jpg"
    },
    {
        id: 113,
        name: "MİLKSHAKE MANGOLU",
        price: "₺135",
        category: "milkshakes",
        image: "menu_image.jpg"
    },
    {
        id: 114,
        name: "MİLKSHAKE ŞEFTALİLİ",
        price: "₺135",
        category: "milkshakes",
        image: "menu_image.jpg"
    },
    {
        id: 115,
        name: "MİLKSHAKE ÇİLEKLİ",
        price: "₺145",
        category: "milkshakes",
        image: "menu_image.jpg"
    },
    {
        id: 116,
        name: "Frozen ÇİLEKLİ",
        price: "₺140",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 117,
        name: "Fozen KİVİLİ",
        price: "₺140",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 118,
        name: "Fozen MANGOLU",
        price: "₺160",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 119,
        name: "Fozen FRAMBUAZLI",
        price: "₺180",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 120,
        name: "Fozen KARPUZLU",
        price: "₺140",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 121,
        name: "Fozen KARADUTLU",
        price: "₺140",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 122,
        name: "Fozen BÖĞÜRTLENLİ",
        price: "₺160",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 123,
        name: "Fozen ŞEFTALİLİ",
        price: "₺140",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 124,
        name: "Fozen KAVUNLU",
        price: "₺140",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 125,
        name: "Fozen YEŞİL ELMALI",
        price: "₺140",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 126,
        name: "Fozen MUZLU",
        price: "₺140",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 127,
        name: "Fozen YABAN MERSİNLİ",
        price: "₺160",
        category: "frozen",
        image: "menu_image.jpg"
    },
    {
        id: 128,
        name: "MANGO VE EJDER MEYVELİ",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 129,
        name: "COOL LİME",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 130,
        name: "OKYANUS",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 131,
        name: "KIRMIZININ GÜZELLİĞİ",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 132,
        name: "PİNE COLADA",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 133,
        name: "MOJİTO",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 134,
        name: "CİNDERELLA",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 135,
        name: "NANE MARGARİTA",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 136,
        name: "MİMOSA",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 137,
        name: "HİBİSKÜS VE ORMAN MEYVELİ",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 138,
        name: "ÇİLEK VE ACAİ AROMALI",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 139,
        name: "X on the beach",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 140,
        name: "Blue hawai",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 141,
        name: "Cosmopolitan",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 142,
        name: "Margarita",
        price: "₺140",
        category: "cocktails",
        image: "menu_image.jpg"
    },
    {
        id: 143,
        name: "Duble sütlü türk kahvesi",
        price: "₺135",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 144,
        name: "Duble türk kahvesi",
        price: "₺115",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 145,
        name: "Duble Kervansaray kahvesi",
        price: "₺130",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 146,
        name: "Duble dibek",
        price: "₺130",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 147,
        name: "Duble menengiç",
        price: "₺130",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 148,
        name: "Duble Osmanlı",
        price: "₺130",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 149,
        name: "Duble damla sakızlı",
        price: "₺130",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 150,
        name: "Duble çörek otlu kahve",
        price: "₺130",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 151,
        name: "Duble karanfilli kahve",
        price: "₺130",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 152,
        name: "Duble çilek aromalı kahve",
        price: "₺130",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 153,
        name: "Duble muz aromalı kahve",
        price: "₺130",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 154,
        name: "Duble çikolata aromalı kahve",
        price: "₺130",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 155,
        name: "Duble cilveli şehzade kahvesi",
        price: "₺195",
        category: "doublecoffees",
        image: "menu_image.jpg"
    },
    {
        id: 156,
        name: "Espresso çekirdek kahve",
        price: "₺1200",
        category: "packagedcoffees",
        image: "menu_image.jpg"
    },
    {
        id: 157,
        name: "Paket Türk kahvesi",
        price: "₺75",
        category: "packagedcoffees",
        image: "menu_image.jpg"
    },
    {
        id: 158,
        name: "Paket karışım kahveleri",
        price: "₺90",
        category: "packagedcoffees",
        image: "menu_image.jpg"
    },
    {
        id: 159,
        name: "Kıyafet kira",
        price: "₺75",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 160,
        name: "Çakmak 30₺",
        price: "₺30",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 161,
        name: "Çakmak 15₺",
        price: "₺15",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 162,
        name: "İskelet anahtarlık",
        price: "₺100",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 163,
        name: "Çakmak 35₺",
        price: "₺35",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 164,
        name: "Alaaddin lokumluk",
        price: "₺350",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 165,
        name: "Horozlu şeker",
        price: "₺20",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 166,
        name: "Yandan çarklı çakmak",
        price: "₺300",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 167,
        name: "Kabartmalı zibbo gazlı",
        price: "₺240",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 168,
        name: "Saatli çakmak",
        price: "₺300",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 169,
        name: "Benzinli Zippo 150",
        price: "₺150",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 170,
        name: "Şarjlı çakmak",
        price: "₺250",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 171,
        name: "25",
        price: "₺25",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 172,
        name: "Paket tarhana",
        price: "₺160",
        category: "gifts",
        image: "menu_image.jpg"
    },
    {
        id: 173,
        name: "Masa oturum",
        price: "₺20",
        category: "misc",
        image: "menu_image.jpg"
    }
];

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const categoryBtns = document.querySelectorAll('.category-btn');
const loader = document.getElementById('loader');

// Function to generate menu item HTML
function generateMenuItem(item) {
    let varietiesHTML = '';
    if (item.varieties && item.varieties.length > 0) {
        varietiesHTML = `
            <div class="item-varieties">
                <div class="variety-title">
                    <i class="fas fa-list"></i> Çeşit Seçenekleri
                </div>
                <div class="variety-list">
                    ${item.varieties.map(variety => `
                        <div class="variety-item">
                            <div>${variety.name}</div>
                            <div class="variety-price">${variety.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    const badgeHTML = item.badge ? `<div class="item-badge">${item.badge}</div>` : '';

    return `
        <div class="menu-item" data-category="${item.category}" data-id="${item.id}">
            <div class="item-image">
                ${badgeHTML}
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-name">${item.name}</h3>
                    <div class="item-price">${item.price}</div>
                </div>
                <p class="item-description">${item.description || ''}</p>
                ${varietiesHTML}
            </div>
        </div>
    `;
}

// Function to render menu items
function renderMenuItems(category = 'all') {
    menuGrid.innerHTML = '';
    
    const itemsToRender = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Add animation delay for each item
    itemsToRender.forEach((item, index) => {
        const itemHTML = generateMenuItem(item);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = itemHTML;
        const menuItem = tempDiv.firstElementChild;
        
        // Set animation delay
        menuItem.style.animationDelay = `${index * 0.1}s`;
        menuGrid.appendChild(menuItem);
    });
}

// Event listeners for category buttons
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        renderMenuItems(category);
        
        // Scroll to menu section
        document.querySelector('.menu-container').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simulate loading with delay
setTimeout(() => {
    loader.classList.add('hidden');
    // Render all menu items initially
    renderMenuItems();
}, 2000);
// ========== YUKARI ÇIK BUTONU FONKSİYONLARI ==========

// HTML'den butonu seç
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Kullanıcı sayfayı belirli bir miktar aşağı kaydırdığında butonu göster
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // 200 pikselden fazla kaydırıldığında butona 'show' class'ını ekle
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

// Butona tıklandığında sayfanın en üstüne animasyonlu bir şekilde git
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});