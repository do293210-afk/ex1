/* ==========================================================================
   DISCOVER ANDONG - APPLICATION LOGIC & I18N SYSTEM
   Features: Multi-language (EN/KO/JA/ZH), Leaflet Map, Speech Audio, Itinerary Planner
   ========================================================================== */

// --- DATA: ATTRACTIONS ---
const ATTRACTIONS = [
    {
        id: "hahoe",
        name: {
            en: "Hahoe Folk Village",
            ko: "안동 하회마을",
            ja: "安東河回村",
            zh: "安东河回村"
        },
        subtitle: "UNESCO World Heritage Site",
        category: "unesco",
        image: "assets/hahoe.jpg",
        rating: 4.9,
        duration: "3.5 Hours",
        lat: 36.5387,
        lng: 128.5173,
        address: "40 Hahoejongga-gil, Pungcheon-myeon, Andong",
        addressKo: "경상북도 안동시 풍천면 하회종가길 40",
        taxiPhrase: "기사님, 안동 하회마을로 가주세요.",
        admission: "₩5,000 (Adult)",
        hours: "09:00 - 18:00 (Apr-Oct) / 09:00 - 17:00 (Nov-Mar)",
        desc: {
            en: "A historic village where descendants of the Ryu clan have lived for over 600 years. Famous for traditional Hanok architecture, the Hahoe Mask Dance Drama, and serene Nakdong River views.",
            ko: "600년 이상 풍산 류씨 가문이 집성촌을 이루어 온 대표적 유네스코 세계문화유산. 하회탈춤과 전통 한옥의 미를 경험할 수 있습니다.",
            ja: "600年以上の歴史を持つユネスコ世界文化遺産。伝統的な韓屋村と河回仮面劇が有名です。",
            zh: "拥有600多年历史的联合国教科文组织世界文化遗产。以传统韩屋建筑和河回假面舞而闻名。"
        }
    },
    {
        id: "wollyeonggyo",
        name: {
            en: "Wollyeonggyo Moonlight Bridge",
            ko: "안동 월영교",
            ja: "月映橋",
            zh: "月映桥"
        },
        subtitle: "Longest Wooden Footbridge in Korea",
        category: "night",
        image: "assets/wollyeonggyo.jpg",
        rating: 4.8,
        duration: "1.5 Hours",
        lat: 36.5772,
        lng: 128.7566,
        address: "26 Wollyeonggyo-gil, Andong",
        addressKo: "경상북도 안동시 월영교길 26",
        taxiPhrase: "기사님, 월영교 주차장으로 가주세요.",
        admission: "Free Access",
        hours: "Open 24/7 (Lighted at night until 23:00)",
        desc: {
            en: "A magnificent 387-meter wooden bridge straddling the Nakdong River. At night, it illuminates with enchanting colors, and visitors can ride romantic Moon Boats.",
            ko: "국내 최장 목책교로 낙동강의 수려한 풍경과 밤하늘의 달빛이 어우러지는 명소. 밤에는 환상적인 야경과 문보트를 즐길 수 있습니다.",
            ja: "韓国最長の木造歩道橋。夜はライトアップされ、ロ맨チックなムーンボートの体験も人気です。",
            zh: "韩国最长的木制人行桥。夜晚灯光璀璨，十分浪漫，还可以体验月亮船。"
        }
    },
    {
        id: "jjimdak-market",
        name: {
            en: "Andong Gu-Sijang (Jjimdak Street)",
            ko: "안동구시장 (찜닭골목)",
            ja: "安東旧市場（チムタク通り）",
            zh: "安东旧市场 (炖鸡街)"
        },
        subtitle: "Traditional Food & Market Hub",
        category: "food",
        image: "assets/jjimdak.jpg",
        rating: 4.7,
        duration: "1.5 Hours",
        lat: 36.5654,
        lng: 128.7298,
        address: "55 Nammun-dong, Andong",
        addressKo: "경상북도 안동시 번영1길 55 (안동구시장)",
        taxiPhrase: "기사님, 안동 구시장 찜닭골목으로 가주세요.",
        admission: "Free Entry",
        hours: "09:00 - 22:00 (Varies by restaurant)",
        desc: {
            en: "The birthplace of Andong Jjimdak! Over 30 specialized restaurants serve piping hot braised chicken with glass noodles in savory soy sauce.",
            ko: "매콤달콤한 안동찜닭의 원조 골목. 30여 개 찜닭 전문점과 다양한 시장 먹거리가 가득합니다.",
            ja: "安東チムタクの発祥地！甘辛い醤油ベースの鶏肉料理が味わえる有名市場です。",
            zh: "安东炖鸡的发源地！汇聚了30多家专业炖鸡店和传统市场美食。"
        }
    },
    {
        id: "byeongsan",
        name: {
            en: "Byeongsan Seowon Academy",
            ko: "병산서원",
            ja: "屏山書院",
            zh: "屏山书院"
        },
        subtitle: "UNESCO Confucian Academy",
        category: "unesco",
        image: "assets/hahoe.jpg", // fallback high quality image
        rating: 4.9,
        duration: "2 Hours",
        lat: 36.5401,
        lng: 128.5445,
        address: "386 Byeongsan-gil, Pungcheon-myeon, Andong",
        addressKo: "경상북도 안동시 풍천면 병산길 386",
        taxiPhrase: "기사님, 병산서원으로 가주세요.",
        admission: "Free",
        hours: "09:00 - 18:00 (Summer) / 09:00 - 17:00 (Winter)",
        desc: {
            en: "Considered one of the most beautiful architectural masterworks of the Joseon Dynasty, overlooking the steep cliff of Byeongsan Mountain and Nakdong River.",
            ko: "조선시대 서원 건축의 백미로 꼽히는 세계유산. Mantaewaru Pavilion에서 바라보는 병산과 낙동강의 풍광이 절경입니다.",
            ja: "朝鮮時代の書院建築の最高峰。雄大な山と川に囲まれた静寂な空間です。",
            zh: "被誉为朝鲜时代书院建筑的顶峰。依山傍水，风景如画。"
        }
    },
    {
        id: "dosan",
        name: {
            en: "Dosan Seowon Academy",
            ko: "도산서원",
            ja: "陶山書院",
            zh: "陶山书院"
        },
        subtitle: "Home of Master Yi Hwang",
        category: "historic",
        image: "assets/hahoe.jpg",
        rating: 4.8,
        duration: "2 Hours",
        lat: 36.7321,
        lng: 128.8317,
        address: "154 Dosanseowon-gil, Dosan-myeon, Andong",
        addressKo: "경상북도 안동시 도산면 도산서원길 154",
        taxiPhrase: "기사님, 도산서원으로 가주세요.",
        admission: "₩2,000",
        hours: "09:00 - 18:00",
        desc: {
            en: "Established in 1574 to honor Yi Hwang, Korea's most prominent Confucian scholar featured on the 1,000 KRW bill.",
            ko: "퇴계 이황 선생의 학문과 덕행을 기리기 위해 건립된 서원. 한국 1,000원 지폐의 배경이기도 합니다.",
            ja: "韓国の1,000ウォン札に描かれている朱子学者・李滉（退渓）を祀る有名な書院。",
            zh: "为纪念韩国著名儒学大家李滉而建，韩币1000圆纸币背面的图案即为此处。"
        }
    },
    {
        id: "nakgang",
        name: {
            en: "Nakgang Waterway Park",
            ko: "낙강물길공원",
            ja: "洛江水路公園",
            zh: "洛江水路公园"
        },
        subtitle: "'Secret Forest' of Andong",
        category: "scenic",
        image: "assets/wollyeonggyo.jpg",
        rating: 4.7,
        duration: "1 Hour",
        lat: 36.5794,
        lng: 128.7612,
        address: "423 Sanga-dong, Andong",
        addressKo: "경상북도 안동시 상아동 423",
        taxiPhrase: "기사님, 낙강물길공원으로 가주세요.",
        admission: "Free",
        hours: "Open 24/7",
        desc: {
            en: "Nicknamed Andong's Secret Forest or Claude Monet's Garden, offering emerald ponds, stepping stones, and towering metasequoia trees.",
            ko: "한국의 지베르니(모네의 정원)라 불리는 비밀의 숲. 맑은 연못과 메타세쿼이아 길에서 인생샷을 찍어보세요.",
            ja: "「安東の秘密の森」と呼ばれる幻想的な公園。エメラルド色の池とメタセコイアの並木が絶景です。",
            zh: "被称为“安东的秘密森林”，有着翡翠般清澈的池塘和杉树林步道。"
        }
    },
    {
        id: "manhyujeong",
        name: {
            en: "Manhyujeong Pavilion",
            ko: "만휴정",
            ja: "晩休亭",
            zh: "晚休亭"
        },
        subtitle: "'Mr. Sunshine' Filming Spot",
        category: "scenic",
        image: "assets/wollyeonggyo.jpg",
        rating: 4.8,
        duration: "1.5 Hours",
        lat: 36.4385,
        lng: 128.8756,
        address: "42 Mukgye-gil, Gilan-myeon, Andong",
        addressKo: "경상북도 안동시 길안면 묵계길 42",
        taxiPhrase: "기사님, 길안면 만휴정으로 가주세요.",
        admission: "₩1,000",
        hours: "10:00 - 18:00",
        desc: {
            en: "Famous iconic single-log bridge across a cascading waterfall stream, featured prominently in the hit Netflix K-drama 'Mr. Sunshine'.",
            ko: "드라마 <미스터 션샤인>의 명대사 '합시다, 러브' 촬영지. 계곡 위 좁은 외나무다리가 자아내는 고즈넉한 풍경.",
            ja: "大ヒット韓国ドラマ『ミスター・サンシャイン』のロケ地。渓流にかかる一本橋が印象的です。",
            zh: "热门韩剧《阳光先生》的经典取景地。溪流上的独木桥十分引人瞩目。"
        }
    }
];

// --- DATA: GOURMET FOOD ---
const FOODS = [
    {
        name: { en: "Andong Jjimdak", ko: "안동찜닭", ja: "安東チムタク", zh: "安东炖鸡" },
        category: "Must-Eat Signature",
        image: "assets/jjimdak.jpg",
        desc: {
            en: "Braised chicken with chewy glass noodles, potatoes, and vegetables stewed in spicy-savory soy sauce.",
            ko: "닭고기, 당면, 감자, 채소를 매콤달콤한 간장 양념에 졸여낸 안동 대표 특산 요리.",
            ja: "甘辛い醤油タレで鶏肉、春雨、ジャガイモを煮込んだ安東の代表的料理。",
            zh: "将鸡肉、粉丝、土豆和蔬菜在咸辣适中的酱油汁中炖煮而成的传统名菜。"
        },
        tags: ["Spicy & Savory", "Popular Lunch", "Big Portions"],
        krName: "안동 찜닭"
    },
    {
        name: { en: "Gan-Godeungeo (Salted Mackerel)", ko: "안동 간고등어", ja: "安東塩サバ", zh: "安东腌青花鱼" },
        category: "Traditional Heritage Dish",
        image: "assets/jjimdak.jpg",
        desc: {
            en: "Fresh salted mackerel grilled over charcoal. Historically salted to preserve fish carried inland from coastal East Sea.",
            ko: "동해 해산물을 안동까지 수송하며 탄생한 전통 염장 고등어 구이.",
            ja: "内陸の安東に魚を運ぶために塩漬けされた伝統のサバ塩焼き。",
            zh: "炭火盐烤青花鱼，起源于古代将沿海海鲜运输至内陆安东的传统保存工艺。"
        },
        tags: ["Charcoal Grilled", "Seafood Lover", "Non-Spicy"],
        krName: "간고등어 구이"
    },
    {
        name: { en: "Heotjesatbap (Scholars' Meal)", ko: "헛제삿밥", ja: "ホッチェサッパプ", zh: "假祭祀饭" },
        category: "Confucian Scholar Tradition",
        image: "assets/hahoe.jpg",
        desc: {
            en: "A delicious Bibimbap variant modeled after ancestral ritual meals, served with seasoned mountain herbs, soy sauce, and fish.",
            ko: "제사를 지내지 않고도 제사 음식처럼 나물과 밥을 간장에 비벼 먹는 안동 선비들의 지혜가 담긴 비빔밥.",
            ja: "法事の料理を模したビビンバ。辛くなく、素材の味を活かした上品な料理。",
            zh: "模仿祭祀名菜制作的安东传统拌饭，不辣且原汁原味，配以各式山菜。"
        },
        tags: ["Healthy Bibimbap", "Mild & Elegant", "Vegetarian-Friendly"],
        krName: "헛제삿밥"
    },
    {
        name: { en: "Mammoth Bakery Cream Cheese Bread", ko: "맘모스베이커리", ja: "マンモスベーカリー", zh: "猛犸象面包店" },
        category: "Michelin Green Guide Bakery",
        image: "assets/wollyeonggyo.jpg",
        desc: {
            en: "Famous bakery operating since 1974. Famous for soft, chewy white bread filled with rich cream cheese.",
            ko: "미슐랭 그린가이드 수록 빵집. 쫀득한 빵 속에 고소한 크림치즈가 듬뿍 들어간 크림치즈빵이 명물.",
            ja: "ミシュラン・グリーンガイド掲載の有名店。濃厚なクリームチーズパンが大人気。",
            zh: "米其林绿色指南推荐面包店，以香浓的奶油芝士面包而闻名。"
        },
        tags: ["Michelin Recommended", "Dessert", "Top Souvenir"],
        krName: "맘모스 베이커리 크림치즈빵"
    }
];

// --- DATA: PHRASEBOOK ---
const PHRASES = [
    {
        cat: "greetings",
        kr: "안녕하세요",
        phonetic: "An-nyeong-ha-se-yo",
        en: "Hello / Good day"
    },
    {
        cat: "greetings",
        kr: "감사합니다",
        phonetic: "Gam-sa-ham-ni-da",
        en: "Thank you"
    },
    {
        cat: "taxi",
        kr: "하회마을로 가주세요",
        phonetic: "Hahoe-ma-eul-ro ga-ju-se-yo",
        en: "Please take me to Hahoe Village"
    },
    {
        cat: "taxi",
        kr: "월영교로 가주세요",
        phonetic: "Wollyeonggyo-ro ga-ju-se-yo",
        en: "Please take me to Wollyeonggyo Bridge"
    },
    {
        cat: "taxi",
        kr: "안동역으로 가주세요",
        phonetic: "Andong-yeok-eu-ro ga-ju-se-yo",
        en: "Please take me to Andong Station"
    },
    {
        cat: "restaurant",
        kr: "안동찜닭 하나 주세요",
        phonetic: "Andong-jjimdak ha-na ju-se-yo",
        en: "One Andong Jjimdak please"
    },
    {
        cat: "restaurant",
        kr: "덜 맵게 해주세요",
        phonetic: "Deol maep-ge hae-ju-se-yo",
        en: "Please make it less spicy"
    },
    {
        cat: "restaurant",
        kr: "계산해 주세요",
        phonetic: "Gye-san-hae ju-se-yo",
        en: "Check / Bill please"
    },
    {
        cat: "shopping",
        kr: "이거 얼마예요?",
        phonetic: "I-geo eol-ma-ye-yo?",
        en: "How much is this?"
    },
    {
        cat: "shopping",
        kr: "신용카드 돼요?",
        phonetic: "Sin-yong-ka-deu dwae-yo?",
        en: "Do you accept credit cards?"
    },
    {
        cat: "shopping",
        kr: "도와주세요!",
        phonetic: "Do-wa-ju-se-yo!",
        en: "Please help me! (Emergency)"
    }
];

// --- I18N DICTIONARY ---
const I18N = {
    en: {
        nav_home: "Home",
        nav_attractions: "Attractions",
        nav_map: "Interactive Map",
        nav_itinerary: "Itineraries",
        nav_food: "Gourmet Food",
        nav_essentials: "Travel Tips",
        nav_phrases: "Phrasebook",
        hero_badge: "UNESCO World Heritage City",
        hero_title: "Explore the Soul of Korea in Andong",
        hero_subtitle: "Step into 600 years of living history, majestic Hanok villages, tranquil moonlight bridges, and legendary culinary treasures.",
        stat_ktx: "2 Hours",
        stat_ktx_desc: "from Seoul via KTX Train",
        stat_unesco: "2 UNESCO Sites",
        stat_unesco_desc: "Hahoe & Seowon Academies",
        stat_food: "Famous Flavors",
        stat_food_desc: "Andong Jjimdak & Soju",
        btn_explore: "Explore Attractions",
        btn_planner: "Plan My Trip",
        btn_taxi_card: "Taxi Helper Card",
        search_placeholder: "Search spots, foods, locations... (e.g. Hahoe, Bridge, Jjimdak)",
        popular_searches: "Popular:",
        attractions_sub: "MUST-VISIT SPOTS",
        attractions_title: "Top Destinations in Andong",
        attractions_desc: "Discover historic Hanok villages, ancient wooden temples, and picturesque river landscapes.",
        filter_all: "All",
        filter_unesco: "UNESCO Heritage",
        filter_scenic: "Scenic & Nature",
        filter_historic: "History & Culture",
        filter_night: "Night Views",
        map_sub: "NAVIGATION & EXPLORER",
        map_title: "Interactive Andong Map",
        map_desc: "Locate attractions, traditional food markets, and transit hubs across Andong.",
        leg_unesco: "UNESCO",
        leg_scenic: "Scenic",
        leg_food: "Gourmet",
        leg_transit: "Station",
        itinerary_sub: "SMART TRAVEL PLANNING",
        itinerary_title: "Curated Itineraries & Custom Planner",
        itinerary_desc: "Select a battle-tested travel route or customize your own dream day in Andong.",
        tab_preset: "Recommended Routes",
        tab_custom: "My Custom Day Planner",
        add_places_title: "Available Places",
        add_places_hint: "Click '+ Add' to put a spot in your schedule.",
        my_schedule_title: "My Custom Schedule",
        empty_planner: "Your itinerary is empty. Click '+ Add' on the left spots or choose a preset route!",
        gourmet_sub: "GASTRONOMIC ADVENTURE",
        gourmet_title: "Famous Foods & Drinks of Andong",
        gourmet_desc: "Savory braised chicken, salted mackerel, royal ritual rice, and world-famous bakeries.",
        essentials_sub: "PRACTICAL ADVICE FOR FOREIGNERS",
        essentials_title: "Travel Essentials & Getting Around",
        essentials_desc: "Everything you need to know about train routes, buses, taxi tips, and emergency helplines.",
        phrasebook_sub: "AUDIO-ENABLED DICTIONARY",
        phrasebook_title: "Essential Korean Phrases for Visitors",
        phrasebook_desc: "Tap the 🔊 audio button to listen to native Korean pronunciation using text-to-speech!"
    },
    ko: {
        nav_home: "홈",
        nav_attractions: "관광 명소",
        nav_map: "인터랙티브 지도",
        nav_itinerary: "추천 여행 코스",
        nav_food: "안동 대표 먹거리",
        nav_essentials: "여행 꿀팁",
        nav_phrases: "여행 회화",
        hero_badge: "유네스코 세계문화유산의 도시",
        hero_title: "한국 정신문화의 수도, 안동으로 떠나보세요",
        hero_subtitle: "600년의 역사와 전통 한옥마을, 월영교의 야경, 그리고 깊은 맛의 안동찜닭이 당신을 기다립니다.",
        stat_ktx: "2시간 소요",
        stat_ktx_desc: "청량리역 KTX-이음 직통",
        stat_unesco: "유네스코 2개 보유",
        stat_unesco_desc: "하회마을 & 병산서원",
        stat_food: "미식의 향연",
        stat_food_desc: "안동찜닭 & 안동소주",
        btn_explore: "명소 둘러보기",
        btn_planner: "나만의 코스 짜기",
        btn_taxi_card: "택시 안내 카운터",
        search_placeholder: "명소, 음식, 장소를 검색하세요... (예: 하회마을, 월영교, 찜닭)",
        popular_searches: "인기 검색어:",
        attractions_sub: "MUST-VISIT SPOTS",
        attractions_title: "안동 최고의 관광 명소",
        attractions_desc: "역사 깊은 한옥마을부터 수려한 낙동강 수변공원까지 안동의 미를 느껴보세요.",
        filter_all: "전체",
        filter_unesco: "유네스코 문화유산",
        filter_scenic: "자연 & 힐링",
        filter_historic: "역사 & 사찰",
        filter_night: "야경 명소",
        map_sub: "NAVIGATION & EXPLORER",
        map_title: "안동 관광 지적 지도",
        map_desc: "주요 명소, 먹거리 골목, KTX역 위치를 한눈에 확인하세요.",
        leg_unesco: "유네스코",
        leg_scenic: "자연풍경",
        leg_food: "맛집골목",
        leg_transit: "교통허브",
        itinerary_sub: "SMART TRAVEL PLANNING",
        itinerary_title: "추천 코스 & 나만의 일정 플래너",
        itinerary_desc: "엄선된 대표 여행 코스를 선택하거나 직접 나만의 일정을 만들어 보세요.",
        tab_preset: "추천 대표 코스",
        tab_custom: "나만의 맞춤 플래너",
        add_places_title: "관광지 목록",
        add_places_hint: "'+ 추가' 버튼을 눌러 일정에 추가하세요.",
        my_schedule_title: "나의 여행 일정표",
        empty_planner: "일정이 비어 있습니다. 왼쪽 명소의 '+ 추가'를 클릭하거나 추천 코스를 불러오세요!",
        gourmet_sub: "GASTRONOMIC ADVENTURE",
        gourmet_title: "안동의 미식과 특산품",
        gourmet_desc: "안동찜닭, 간고등어, 헛제삿밥, 맘모스 베이커리의 크림치즈빵을 맛보세요.",
        essentials_sub: "PRACTICAL ADVICE FOR FOREIGNERS",
        essentials_title: "외국인을 위한 안동 여행 팁",
        essentials_desc: "KTX 이용법, 시내버스, 택시 팁 및 24시간 외국어 관광 통역안내 서비스.",
        phrasebook_sub: "AUDIO-ENABLED DICTIONARY",
        phrasebook_title: "필수 한국어 여행 회화",
        phrasebook_desc: "🔊 버튼을 눌러 정확한 발음을 듣고 따라 해보세요!"
    },
    ja: {
        nav_home: "ホーム",
        nav_attractions: "観光名所",
        nav_map: "地図",
        nav_itinerary: "モデルコース",
        nav_food: "グルメ",
        nav_essentials: "旅行ガイド",
        nav_phrases: "韓国語会話",
        hero_badge: "ユネスコ世界文化遺産の都市",
        hero_title: "韓国の精神文化の首都、安東（アンドン）へ",
        hero_subtitle: "600年の伝統を誇る韓屋村、月映橋の幻想的な夜景、名物アンドンチムタクを満喫しよう。",
        stat_ktx: "ソウルから2時間",
        stat_ktx_desc: "KTX-イム直通列車",
        stat_unesco: "世界遺産2箇所",
        stat_unesco_desc: "河回村 & 屏山書院",
        stat_food: "名物グルメ",
        stat_food_desc: "チムタク & 塩サバ",
        btn_explore: "名所を見る",
        btn_planner: "コースを作成",
        btn_taxi_card: "タクシーカード",
        search_placeholder: "場所、料理、名所を検索...",
        popular_searches: "人気キーワード:",
        attractions_sub: "MUST-VISIT SPOTS",
        attractions_title: "安東のおすすめ観光スポット",
        attractions_desc: "伝統的な韓屋村から素晴らしい景観の川辺公園まで楽しめます。",
        filter_all: "すべて",
        filter_unesco: "世界遺産",
        filter_scenic: "自然・景観",
        filter_historic: "歴史・書院",
        filter_night: "夜景スポット",
        map_sub: "NAVIGATION & EXPLORER",
        map_title: "インタラクティブマップ",
        map_desc: "観光名所やグルメスポット、駅の位置を簡単に確認できます。",
        leg_unesco: "世界遺産",
        leg_scenic: "自然景観",
        leg_food: "グルメ",
        leg_transit: "駅・ターミナル",
        itinerary_sub: "SMART TRAVEL PLANNING",
        itinerary_title: "おすすめコース & Myプランナー",
        itinerary_desc: "定番コースを選んだり、自分だけの旅のスケジュールを作成できます。",
        tab_preset: "おすすめコース",
        tab_custom: "Myプランナー",
        add_places_title: "スポット一覧",
        add_places_hint: "「+ 追加」をクリックしてスケジュールに追加。",
        my_schedule_title: "My旅行スケジュール",
        empty_planner: "スケジュールが空です。スポットを追加してください！",
        gourmet_sub: "GASTRONOMIC ADVENTURE",
        gourmet_title: "安東の名物グルメ",
        gourmet_desc: "チムタク、塩サバ、ビビンバ、有名パン屋の定番メニュー。",
        essentials_sub: "PRACTICAL ADVICE FOR FOREIGNERS",
        essentials_title: "アクセス・旅行のコツ",
        essentials_desc: "KTXの利用方法、バス・タクシー案内、通訳ホットライン情報。",
        phrasebook_sub: "AUDIO-ENABLED DICTIONARY",
        phrasebook_title: "便利な旅行韓国語フレーズ",
        phrasebook_desc: "🔊 ボタンを押すとネイティブ音声が再生されます！"
    },
    zh: {
        nav_home: "首页",
        nav_attractions: "景点探索",
        nav_map: "互动地图",
        nav_itinerary: "推荐行程",
        nav_food: "安东美食",
        nav_essentials: "实用指南",
        nav_phrases: "常用韩语",
        hero_badge: "联合国教科文组织世界文化遗产城市",
        hero_title: "探索韩国精神文化之都 —— 安东",
        hero_subtitle: "领略600年传统韩屋村落、月映桥清辉夜景，品尝正宗安东炖鸡。",
        stat_ktx: "约2小时",
        stat_ktx_desc: "从首尔乘坐KTX列车",
        stat_unesco: "2处世界遗产",
        stat_unesco_desc: "河回村与屏山书院",
        stat_food: "经典美食",
        stat_food_desc: "安东炖鸡与烧酒",
        btn_explore: "探索景点",
        btn_planner: "规划行程",
        btn_taxi_card: "出租车示意卡",
        search_placeholder: "搜索景点、美食、位置...",
        popular_searches: "热门搜索:",
        attractions_sub: "MUST-VISIT SPOTS",
        attractions_title: "安东必游景点",
        attractions_desc: "探索古老的韩屋村落、深厚的儒家书院与迷人的江畔风光。",
        filter_all: "全部",
        filter_unesco: "世界遗产",
        filter_scenic: "自然风光",
        filter_historic: "历史文化",
        filter_night: "绝美夜景",
        map_sub: "NAVIGATION & EXPLORER",
        map_title: "安东互动地图",
        map_desc: "轻松查找景点、美食街与交通枢纽的精确位置。",
        leg_unesco: "世界遗产",
        leg_scenic: "自然风光",
        leg_food: "美食街",
        leg_transit: "车站",
        itinerary_sub: "SMART TRAVEL PLANNING",
        itinerary_title: "精选路线与自定义行程 planner",
        itinerary_desc: "选择经典游览路线或自由定制属于您的安东一日游。",
        tab_preset: "推荐经典路线",
        tab_custom: "自定义行程规划",
        add_places_title: "可选景点列表",
        add_places_hint: "点击“+ 添加”加入您的行程清单。",
        my_schedule_title: "我的定制行程",
        empty_planner: "您的行程清单为空。点击左侧景点的“+ 添加”即可添加！",
        gourmet_sub: "GASTRONOMIC ADVENTURE",
        gourmet_title: "安东特色美食",
        gourmet_desc: "品尝安东炖鸡、腌青花鱼、假祭祀饭及米其林推荐面包。",
        essentials_sub: "PRACTICAL ADVICE FOR FOREIGNERS",
        essentials_title: "交通与实用出行指南",
        essentials_desc: "KTX列车指南、公交车与出租车使用技巧、24小时多语种协助热线。",
        phrasebook_sub: "AUDIO-ENABLED DICTIONARY",
        phrasebook_title: "旅行必备韩语会话",
        phrasebook_desc: "点击 🔊 语音按钮，聆听标准韩语发音！"
    }
};

// --- STATE APP MANAGEMENT ---
let currentLang = 'en';
let bookmarks = JSON.parse(localStorage.getItem('andong_bookmarks') || '[]');
let userSchedule = JSON.parse(localStorage.getItem('andong_schedule') || '[]');
let leafletMap = null;
let mapMarkers = [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initI18n();
    renderAttractions('all');
    renderFoodGrid();
    renderPhrases('all');
    initMap();
    initItineraryPlanner();
    updateBookmarkBadge();
    setupEventListeners();
});

// --- THEME SYSTEM ---
function initTheme() {
    const savedTheme = localStorage.getItem('andong_theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    const themeIcon = document.querySelector('#themeToggle i');
    if (themeIcon) {
        themeIcon.className = savedTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

function toggleTheme() {
    const current = document.body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('andong_theme', next);
    const themeIcon = document.querySelector('#themeToggle i');
    if (themeIcon) {
        themeIcon.className = next === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

// --- I18N SYSTEM ---
function initI18n() {
    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = (currentLang === 'en') ? 'ko' : 'en';
            applyLanguage(currentLang);
        });
    }
    updateLangToggleUI();
}

function updateLangToggleUI() {
    const label = document.getElementById('langToggleLabel');
    if (label) {
        label.textContent = currentLang === 'ko' ? '🇰🇷 한국어' : '🇺🇸 English';
    }
}

function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.en;
    
    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });

    updateLangToggleUI();

    // Re-render components with language dynamic text
    renderAttractions(getActiveCategoryFilter());
    renderFoodGrid();
    renderPlannerPool();
    renderScheduleTimeline();
}

function getActiveCategoryFilter() {
    const activeBtn = document.querySelector('#categoryFilter .filter-btn.active');
    return activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
}

// --- RENDER ATTRACTIONS ---
function renderAttractions(filter = 'all', searchQuery = '') {
    const grid = document.getElementById('attractionsGrid');
    grid.innerHTML = '';

    const filtered = ATTRACTIONS.filter(item => {
        const matchesFilter = (filter === 'all' || item.category === filter);
        const nameText = item.name[currentLang] || item.name.en;
        const matchesSearch = searchQuery === '' || 
            nameText.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.desc.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
            <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 1rem;"></i>
            <p>No attractions found matching your criteria.</p>
        </div>`;
        return;
    }

    filtered.forEach(item => {
        const isBookmarked = bookmarks.includes(item.id);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img-wrap">
                <img src="${item.image}" alt="${item.name.en}" class="card-img">
                <span class="card-tag">${item.category.toUpperCase()}</span>
                <button class="card-bookmark-btn ${isBookmarked ? 'active' : ''}" data-id="${item.id}" title="Bookmark">
                    <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
                </button>
            </div>
            <div class="card-body">
                <h3 class="card-title">${item.name[currentLang] || item.name.en}</h3>
                <div class="card-subtitle">${item.subtitle}</div>
                <p class="card-desc">${item.desc[currentLang] || item.desc.en}</p>
                <div class="card-meta">
                    <span><i class="fa-solid fa-clock text-gold"></i> ${item.duration}</span>
                    <span><i class="fa-solid fa-ticket text-gold"></i> ${item.admission}</span>
                    <span><i class="fa-solid fa-star text-gold"></i> ${item.rating}</span>
                </div>
                <div class="card-actions">
                    <button class="btn btn-xs btn-outline show-taxi-card-btn" data-id="${item.id}">
                        <i class="fa-solid fa-taxi"></i> Taxi Card
                    </button>
                    <button class="btn btn-xs btn-glass view-detail-btn" data-id="${item.id}">
                        <i class="fa-solid fa-circle-info"></i> Details
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Attach listeners
    grid.querySelectorAll('.card-bookmark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            toggleBookmark(id);
        });
    });

    grid.querySelectorAll('.show-taxi-card-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            openTaxiModal(id);
        });
    });

    grid.querySelectorAll('.view-detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            openDetailModal(id);
        });
    });
}

// --- RENDER GOURMET FOOD ---
function renderFoodGrid() {
    const grid = document.getElementById('foodGrid');
    grid.innerHTML = '';

    FOODS.forEach(food => {
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            <div class="food-img-wrap">
                <img src="${food.image}" alt="${food.name.en}">
            </div>
            <div class="food-body">
                <span class="text-xs text-gold font-bold uppercase">${food.category}</span>
                <h3 class="mt-1">${food.name[currentLang] || food.name.en} <span class="text-sm text-muted">(${food.krName})</span></h3>
                <p class="text-sm text-muted mt-2">${food.desc[currentLang] || food.desc.en}</p>
                <div class="food-meta-tags">
                    ${food.tags.map(t => `<span class="food-tag">#${t}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- RENDER PHRASEBOOK ---
function renderPhrases(cat = 'all') {
    const grid = document.getElementById('phraseGrid');
    grid.innerHTML = '';

    const filtered = PHRASES.filter(p => cat === 'all' || p.cat === cat);

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'phrase-card';
        card.innerHTML = `
            <div class="phrase-content">
                <h4>${p.kr}</h4>
                <div class="phrase-phonetic">${p.phonetic}</div>
                <div class="phrase-en">${p.en}</div>
            </div>
            <button class="audio-btn" data-speech="${p.kr}" title="Listen Pronunciation">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        `;
        grid.appendChild(card);
    });

    grid.querySelectorAll('.audio-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const text = e.currentTarget.getAttribute('data-speech');
            speakText(text);
        });
    });
}

// --- SPEECH SYNTHESIS (TTS) ---
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stop ongoing speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.85; // slightly slower for foreign learners
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Text-to-speech is not supported in this browser.");
    }
}

// --- LEAFLET MAP INTEGRATION ---
function initMap() {
    const mapElement = document.getElementById('andongMap');
    if (!mapElement) return;

    // Center near Andong City Center
    leafletMap = L.map('andongMap').setView([36.5684, 128.7294], 11);

    // Dark styled OSM tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 18
    }).addTo(leafletMap);

    // Add Markers for Attractions
    ATTRACTIONS.forEach(item => {
        const marker = L.marker([item.lat, item.lng]).addTo(leafletMap);
        const popupContent = `
            <div class="map-popup-card">
                <h4>${item.name[currentLang] || item.name.en}</h4>
                <p>${item.subtitle}</p>
                <div style="display:flex; gap:0.5rem;">
                    <button onclick="openTaxiModal('${item.id}')" style="background:var(--accent-gold); color:#000; border:none; padding:0.3rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:bold; cursor:pointer;">
                        🚕 Taxi Card
                    </button>
                </div>
            </div>
        `;
        marker.bindPopup(popupContent);
        mapMarkers.push(marker);
    });

    // Add KTX Andong Station Marker
    const ktxMarker = L.marker([36.5632, 128.6942]).addTo(leafletMap);
    ktxMarker.bindPopup(`
        <div class="map-popup-card">
            <h4 style="color:#3B82F6;">🚄 KTX Andong Station (안동역)</h4>
            <p>Main High-speed rail terminal connecting Seoul (Cheongnyangni) in 2 hours.</p>
        </div>
    `);
}

// --- ITINERARY PLANNER ---
function initItineraryPlanner() {
    renderPlannerPool();
    renderScheduleTimeline();
}

function renderPlannerPool() {
    const pool = document.getElementById('plannerPool');
    if (!pool) return;
    pool.innerHTML = '';

    ATTRACTIONS.forEach(item => {
        const isAdded = userSchedule.some(s => s.id === item.id);
        const el = document.createElement('div');
        el.className = 'pool-item';
        el.innerHTML = `
            <div>
                <h5>${item.name[currentLang] || item.name.en}</h5>
                <span>⏱️ ${item.duration}</span>
            </div>
            <button class="btn btn-xs ${isAdded ? 'btn-danger' : 'btn-outline'} planner-toggle-btn" data-id="${item.id}">
                ${isAdded ? 'Remove' : '+ Add'}
            </button>
        `;
        pool.appendChild(el);
    });

    pool.querySelectorAll('.planner-toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            toggleScheduleItem(id);
        });
    });
}

function toggleScheduleItem(id) {
    const index = userSchedule.findIndex(s => s.id === id);
    if (index >= 0) {
        userSchedule.splice(index, 1);
    } else {
        const attraction = ATTRACTIONS.find(a => a.id === id);
        if (attraction) {
            userSchedule.push(attraction);
        }
    }
    saveSchedule();
    renderPlannerPool();
    renderScheduleTimeline();
}

function renderScheduleTimeline() {
    const timeline = document.getElementById('plannerTimeline');
    const countEl = document.getElementById('scheduleCount');
    const timeEl = document.getElementById('scheduleTime');

    if (!timeline) return;

    if (userSchedule.length === 0) {
        timeline.innerHTML = `
            <div class="empty-planner-msg">
                <i class="fa-solid fa-calendar-plus"></i>
                <p data-i18n="empty_planner">${I18N[currentLang].empty_planner || I18N.en.empty_planner}</p>
            </div>
        `;
        if (countEl) countEl.textContent = '0';
        if (timeEl) timeEl.textContent = '0';
        return;
    }

    timeline.innerHTML = '';
    let totalHours = 0;

    userSchedule.forEach((item, index) => {
        // Estimate hours integer
        const hoursMatch = item.duration.match(/[\d.]+/);
        if (hoursMatch) totalHours += parseFloat(hoursMatch[0]);

        const el = document.createElement('div');
        el.className = 'timeline-item';
        el.innerHTML = `
            <div style="display:flex; align-items:center; gap:1rem;">
                <span class="btn-icon" style="width:32px; height:32px; font-size:0.85rem; font-weight:bold; background:var(--accent-gold); color:#000;">
                    ${index + 1}
                </span>
                <div>
                    <h4 style="font-size:1rem;">${item.name[currentLang] || item.name.en}</h4>
                    <span class="text-xs text-muted">Est. Duration: ${item.duration} | ${item.subtitle}</span>
                </div>
            </div>
            <button class="btn btn-xs btn-danger remove-schedule-item" data-id="${item.id}">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
        timeline.appendChild(el);
    });

    if (countEl) countEl.textContent = userSchedule.length;
    if (timeEl) timeEl.textContent = totalHours.toFixed(1);

    timeline.querySelectorAll('.remove-schedule-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            toggleScheduleItem(id);
        });
    });
}

function loadPresetItinerary(presetKey) {
    if (presetKey === 'express') {
        userSchedule = ATTRACTIONS.filter(a => ['hahoe', 'jjimdak-market', 'wollyeonggyo'].includes(a.id));
    } else if (presetKey === 'deep') {
        userSchedule = ATTRACTIONS.filter(a => ['hahoe', 'byeongsan', 'jjimdak-market', 'wollyeonggyo', 'dosan', 'nakgang'].includes(a.id));
    } else if (presetKey === 'photo') {
        userSchedule = ATTRACTIONS.filter(a => ['manhyujeong', 'nakgang', 'wollyeonggyo'].includes(a.id));
    }
    saveSchedule();
    
    // Switch to Custom Tab
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    document.querySelector('[data-tab="customTab"]').classList.add('active');
    document.getElementById('customTab').classList.add('active');

    renderPlannerPool();
    renderScheduleTimeline();
}

function saveSchedule() {
    localStorage.setItem('andong_schedule', JSON.stringify(userSchedule));
}

// --- BOOKMARKS ---
function toggleBookmark(id) {
    const idx = bookmarks.indexOf(id);
    if (idx >= 0) {
        bookmarks.splice(idx, 1);
    } else {
        bookmarks.push(id);
    }
    localStorage.setItem('andong_bookmarks', JSON.stringify(bookmarks));
    updateBookmarkBadge();
    renderAttractions(getActiveCategoryFilter());
    renderBookmarkList();
}

function updateBookmarkBadge() {
    const countEl = document.getElementById('bookmarkCount');
    if (countEl) countEl.textContent = bookmarks.length;
}

function renderBookmarkList() {
    const list = document.getElementById('bookmarkList');
    if (!list) return;

    if (bookmarks.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
            <i class="fa-regular fa-bookmark" style="font-size:2.5rem; margin-bottom:1rem;"></i>
            <p>No saved places yet. Click the bookmark icon on any attraction card to save it here!</p>
        </div>`;
        return;
    }

    list.innerHTML = '';
    bookmarks.forEach(id => {
        const item = ATTRACTIONS.find(a => a.id === id);
        if (!item) return;

        const el = document.createElement('div');
        el.className = 'pool-item';
        el.style.marginBottom = '0.75rem';
        el.innerHTML = `
            <div>
                <h5>${item.name[currentLang] || item.name.en}</h5>
                <span style="font-size:0.75rem; color:var(--accent-gold);">${item.subtitle}</span>
            </div>
            <div style="display:flex; gap:0.4rem;">
                <button class="btn btn-xs btn-outline open-taxi-from-bookmark" data-id="${item.id}">🚕 Taxi</button>
                <button class="btn btn-xs btn-danger remove-bookmark-item" data-id="${item.id}">&times;</button>
            </div>
        `;
        list.appendChild(el);
    });

    list.querySelectorAll('.open-taxi-from-bookmark').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            closeBookmarkModal();
            openTaxiModal(id);
        });
    });

    list.querySelectorAll('.remove-bookmark-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            toggleBookmark(id);
        });
    });
}

// --- MODAL CONTROLS ---
function openTaxiModal(attractionId = 'hahoe') {
    const item = ATTRACTIONS.find(a => a.id === attractionId) || ATTRACTIONS[0];
    const phraseEl = document.getElementById('taxiKrPhrase');
    const transEl = document.getElementById('taxiEnTrans');
    const addrEl = document.getElementById('taxiKrAddress');
    const modal = document.getElementById('taxiModal');

    if (phraseEl) phraseEl.textContent = item.taxiPhrase;
    if (transEl) transEl.textContent = `"Driver, please take me to ${item.name.en}."`;
    if (addrEl) addrEl.textContent = item.addressKo;

    document.getElementById('speakTaxiPhraseBtn').onclick = () => {
        speakText(item.taxiPhrase);
    };

    modal.classList.add('active');
}

function closeTaxiModal() {
    document.getElementById('taxiModal').classList.remove('active');
}

function openDetailModal(id) {
    const item = ATTRACTIONS.find(a => a.id === id);
    if (!item) return;

    const modal = document.getElementById('detailModal');
    document.getElementById('modalTitle').textContent = item.name[currentLang] || item.name.en;
    
    document.getElementById('detailModalBody').innerHTML = `
        <img src="${item.image}" style="width:100%; height:240px; object-fit:cover; border-radius:12px; margin-bottom:1.25rem;">
        <h4 style="color:var(--accent-gold); margin-bottom:0.5rem;">${item.subtitle}</h4>
        <p style="color:var(--text-secondary); margin-bottom:1.25rem;">${item.desc[currentLang] || item.desc.en}</p>
        
        <div style="background:rgba(255,255,255,0.04); padding:1rem; border-radius:10px; border:1px solid var(--border-color); display:flex; flex-direction:column; gap:0.6rem; font-size:0.9rem;">
            <div><strong>📍 Address (Korean):</strong> ${item.addressKo}</div>
            <div><strong>⏱️ Recommended Time:</strong> ${item.duration}</div>
            <div><strong>🎟️ Admission:</strong> ${item.admission}</div>
            <div><strong>🕒 Opening Hours:</strong> ${item.hours}</div>
        </div>

        <div style="margin-top:1.5rem; display:flex; gap:0.75rem;">
            <button class="btn btn-primary btn-full" onclick="openTaxiModal('${item.id}')">
                <i class="fa-solid fa-taxi"></i> Taxi Card
            </button>
        </div>
    `;

    modal.classList.add('active');
}

function closeDetailModal() {
    document.getElementById('detailModal').classList.remove('active');
}

function openBookmarkModal() {
    renderBookmarkList();
    document.getElementById('bookmarkModal').classList.add('active');
}

function closeBookmarkModal() {
    document.getElementById('bookmarkModal').classList.remove('active');
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderAttractions(getActiveCategoryFilter(), e.target.value);
        });
    }

    // Quick tags
    document.querySelectorAll('.quick-tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
            const tagVal = e.target.getAttribute('data-tag');
            const searchBox = document.getElementById('searchInput');
            if (searchBox) searchBox.value = tagVal;
            renderAttractions('all', tagVal);
        });
    });

    // Category Filter Buttons
    document.querySelectorAll('#categoryFilter .filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('#categoryFilter .filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const filter = e.target.getAttribute('data-filter');
            renderAttractions(filter, searchInput ? searchInput.value : '');
        });
    });

    // Preset route buttons
    document.querySelectorAll('.load-itinerary-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const preset = e.target.getAttribute('data-preset');
            loadPresetItinerary(preset);
        });
    });

    // Tab buttons for itinerary
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetTab = e.target.getAttribute('data-tab');
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            e.target.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Phrase tabs
    document.querySelectorAll('.phrase-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.phrase-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            const cat = e.target.getAttribute('data-cat');
            renderPhrases(cat);
        });
    });

    // Clear schedule button
    document.getElementById('clearScheduleBtn').addEventListener('click', () => {
        if (confirm("Reset your custom itinerary schedule?")) {
            userSchedule = [];
            saveSchedule();
            renderPlannerPool();
            renderScheduleTimeline();
        }
    });

    // Print schedule button
    document.getElementById('printScheduleBtn').addEventListener('click', () => {
        window.print();
    });

    // Share schedule summary
    document.getElementById('shareScheduleBtn').addEventListener('click', () => {
        if (userSchedule.length === 0) {
            alert("Your schedule is empty!");
            return;
        }
        const summary = "My Andong Travel Schedule:\n" + userSchedule.map((s, i) => `${i+1}. ${s.name.en} (${s.duration})`).join("\n");
        navigator.clipboard.writeText(summary).then(() => {
            alert("Schedule summary copied to clipboard!");
        });
    });

    // Taxi Modal Trigger
    document.getElementById('quickTaxiBtn').addEventListener('click', () => {
        openTaxiModal('hahoe');
    });

    // Bookmark Modal Trigger
    document.getElementById('bookmarkBtn').addEventListener('click', openBookmarkModal);
    document.getElementById('closeBookmarkModal').addEventListener('click', closeBookmarkModal);
    document.getElementById('closeTaxiModal').addEventListener('click', closeTaxiModal);
    document.getElementById('closeDetailModal').addEventListener('click', closeDetailModal);

    // Close Modals on Overlay Click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.remove('active');
        });
    });

    // Mobile Navbar Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '72px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'var(--bg-main)';
                navMenu.style.padding = '1.5rem';
                navMenu.style.borderBottom = '1px solid var(--border-color)';
            }
        });
    }
}
