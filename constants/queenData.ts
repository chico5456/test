export type QueenStats = {
  Acting: number;
  Dance: number;
  Comedy: number;
  Design: number;
  Runway: number;
  Singing: number;
};

export type Queen = {
  id: string;
  seasons: string;
  name: string;
  franchise: string;
  url: string;
  urls?: string[];
  stats?: QueenStats;
};

export const queens: Queen[] = [
  {
    "id": "ynhgkYtxYcYEicg4EDU0",
    "seasons": "1",
    "name": "Akashia",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a4/AkashiaS1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901220911",
  },
  {
    "id": "ygS9Yphd8K6oFU1mYu5d",
    "seasons": "1,AS3",
    "name": "BeBe Zahara Benet",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/40/BeBeZaharaBenetS1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901220954",
    "urls": [
      "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/40/BeBeZaharaBenetS1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901220954",
      "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/93/BeBeZaharaBenetAS3CastMug.png/revision/latest/scale-to-width-down/105?cb=20210902100331"
    ]
  },
  {
    "id": "MLqx8KGpXk7AWRg1SHUW",
    "seasons": "1",
    "name": "Jade Sotomayor",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/57/JadeSotomayorS1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901221034"
  },
  {
    "id": "69LARRc9IroxGxTisN84",
    "seasons": "1,AS1",
    "name": "Nina Flowers",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6f/NinaFlowersS1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901221108"
  },
  {
    "id": "vLbZCniWlga6Dy3BFWfM",
    "seasons": "1,AS5",
    "name": "Ongina",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/c3/OnginaS1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901221201"
  },
  {
    "id": "4vpfdIi0056xjzlCGtgU",
    "seasons": "1,AS9",
    "name": "Shannel",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a7/ShannelS1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901221334"
  },
  {
    "id": "luzWpObIapu146qe5vvi",
    "seasons": "1",
    "name": "Rebecca Glasscock",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ae/RebeccaGlasscockS1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901221254"
  },
  {
    "id": "2pptEiLWsi21qwFQoJ4j",
    "seasons": "1,AS1",
    "name": "Tammie Brown",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/96/TammieBrownS1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901221428"
  },
  {
    "id": "qcoymxap9ojQaVm6PwtT",
    "seasons": "1",
    "name": "Victoria Parker",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/5c/VictoriaParkerS1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901221612"
  },
  {
    "id": "N6zB4JjYyVq7kL9mLpST",
    "seasons": "2",
    "name": "Tyra Sanchez",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d5/TyraSanchezS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225535"
  },
  {
    "id": "O7aC5KkZzWr8mM0nNqUV",
    "seasons": "2,AS1",
    "name": "Raven",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/68/RavenS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225637"
  },
  {
    "id": "P8bD6LlYyXs9nO1pOrWX",
    "seasons": "2,AS1,AS5,UKvtW1",
    "name": "Jujubee",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/06/JujubeeS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225724"
  },
  {
    "id": "Q9cE7MmZzYt0pP2qPsYZ",
    "seasons": "2,AS2",
    "name": "Tatianna",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/63/TatiannaS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225734"
  },
  {
    "id": "R0dF8NnZzZu1qQ3rQtZA",
    "seasons": "2,AS1,AS6",
    "name": "Pandora Boxx",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/98/PandoraBoxxS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225746"
  },
  {
    "id": "S1eG9OoZzVv2rR4sRuAB",
    "seasons": "2,AS8",
    "name": "Jessica Wild",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/98/JessicaWildS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225756"
  },
  {
    "id": "T2fH0PpZzWw3sS5tSvBC",
    "seasons": "2",
    "name": "Sahara Davenport",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/b1/SaharaDavenportS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225810"
  },
  {
    "id": "T2fH0frt75w3sS5tSvBC",
    "seasons": "2",
    "name": "Morgan McMichaels",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/76/MorganMcMichaelsS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225820"
  },
  {
    "id": "T2fH0PpZzvtDD35tSvBC",
    "seasons": "2,AS6",
    "name": "Kylie Sonique Love",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/97/SoniqueS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225838"
  },
  {
    "id": "56g00PpZzWw3sS5tSvBC",
    "seasons": "2",
    "name": "Mystique Summers Madison",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d6/MystiqueSummersMadisonS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225847"
  },
  {
    "id": "56g00PpZz56g885tSvBC",
    "seasons": "2",
    "name": "Nicole Paige Brooks",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/c5/NicolePaigeBrooksS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225859"
  },
  {
    "id": "56g45gFFr56g885tSvBC",
    "seasons": "3,AW1",
    "name": "Raja",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f8/RajaS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901153542"
  },
  {
    "id": "B4mNp0XzWqJr1sU7aZfG",
    "seasons": "3,AS1,AS4",
    "name": "Manila Luzon",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/88/ManilaLuzonS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901153322"
  },
  {
    "id": "C5oQp1YyXrKs2tV8bAgH",
    "seasons": "3,AS1,AS5,CvtW2",
    "name": "Alexis Mateo",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ee/AlexisMateoS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901152949"
  },
  {
    "id": "D6pRr2ZzYsLt3uW9cBhI",
    "seasons": "3,AS1,AS6",
    "name": "Yara Sofia",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/c8/YaraSofiaS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901153820"
  },
  {
    "id": "E7qS5AaZzMt8vX0dCiJK",
    "seasons": "3",
    "name": "Carmen Carrera",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/66/CarmenCarreraS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901153024"
  },
  {
    "id": "F8rT6BbZzNu9wY1eDjKL",
    "seasons": "2,3,AS3",
    "name": "Shangela",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7f/ShangelaS2CastMug.png/revision/latest/scale-to-width-down/105?cb=20220212225914"
  },
  {
    "id": "G9sU7CcYyOv0xZ2fEkLM",
    "seasons": "3",
    "name": "Delta Work",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/95/DeltaWorkS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901153220"
  },
  {
    "id": "H0tV8DdZzPw1yA3gFlMN",
    "seasons": "3",
    "name": "Stacy Layne Matthews",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/53/StacyLayneMatthewsS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901153643"
  },
  {
    "id": "I1uW9EeZzQx2zB4hGkNO",
    "seasons": "3,AS5",
    "name": "Mariah",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/20/MariahParisBalenciagaS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901153356"
  },
  {
    "id": "J2vX0FfZzRy3aC5iHlOP",
    "seasons": "3,AS5",
    "name": "India Ferrah",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/06/IndiaFerrahS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901153250"
  },
  {
    "id": "K3wY1GgZzSz4bD6jImPQ",
    "seasons": "3,AS1",
    "name": "Mimi Imfurst",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/66/MimiImfurstS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901153428"
  },
  {
    "id": "L4xZ2HhZzTa5cE7kJnQR",
    "seasons": "3,AS10",
    "name": "Phoenix",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/44/PhoenixS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901153457"
  },
  {
    "id": "M5yA3IiZzUb6dF8lKoRS",
    "seasons": "3",
    "name": "Venus D-Lite",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8b/VenusD-LiteS3CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210901153732"
  },
  {
    "id": "aB3kLm9XyVPhQ0rT6z90",
    "seasons": "4",
    "name": "Alisa Summers",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/68/AlisaSummersS4CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901182614"
  },
  {
    "id": "bC4mNp0XzWqJr1sU7aZf",
    "seasons": "4,AS1",
    "name": "Chad Michaels",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ea/ChadMichaelsS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901182655"
  },
  {
    "id": "cD5oQp1YyXrKs2tV8bAg",
    "seasons": "4",
    "name": "Dida Ritz",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f9/DidaRitzS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901182729"
  },
  {
    "id": "dE6pRr2ZzYsLt3uW9cBh",
    "seasons": "4,AS6",
    "name": "Jiggly Caliente",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/af/JigglyCalienteS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901182804"
  },
  {
    "id": "eF7qS5AaZzMt8vX0dCiJ",
    "seasons": "4",
    "name": "Kenya Michaels",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/01/KenyaMichaelsS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901182838"
  },
  {
    "id": "fG8rT6BbZzNu9wY1eDjK",
    "seasons": "4",
    "name": "Lashauwn Beyond",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a5/LashauwnBeyondS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901182915"
  },
  {
    "id": "gH9sU7CcYyOv0xZ2fEkL",
    "seasons": "4,AS1,AS4",
    "name": "Latrice Royale",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7a/LatriceRoyaleS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901184848"
  },
  {
    "id": "hI0tV8DdZzPw1yA3gFlM",
    "seasons": "4",
    "name": "Madame LaQueer",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/04/MadameLaQueerS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901183034"
  },
  {
    "id": "iJ1uW9EeZzQx2zB4hGkN",
    "seasons": "4",
    "name": "Milan",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6f/MilanS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901183104"
  },
  {
    "id": "jK2vX0FfZzRy3aC5iHlO",
    "seasons": "4,AS2",
    "name": "Phi Phi O'Hara",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/46/PhiPhiO%27HaraS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901183241"
  },
  {
    "id": "kL3wY1GgZzSz4bD6jImP",
    "seasons": "4",
    "name": "Sharon Needles",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/fd/SharonNeedlesS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901183314"
  },
  {
    "id": "lM4xZ2HhZzTa5cE7kJnQ",
    "seasons": "4",
    "name": "The Princess",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d9/ThePrincessS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901183203"
  },
  {
    "id": "mN5yA3IiZzUb6dF8lKoR",
    "seasons": "4",
    "name": "Willam",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7c/WillamS4CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901183352"
  },
  {
    "id": "Zy5WvT3JkP8LrX2Yb1F6",
    "seasons": "5",
    "name": "Jade Jolie",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f2/JadeJolieS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901194014"
  },
  {
    "id": "aB3kLm9ayVPhQ0rT6zYg",
    "seasons": "5,AW1",
    "name": "Jinkx Monsoon",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/b4/JinkxMonsoonS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901194046"
  },
  {
    "id": "Xy7zQm2WvJkP8rU3LzVb",
    "seasons": "5,AS2",
    "name": "Alaska",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8e/AlaskaS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901193454"
  },
  {
    "id": "Qw9ErT4YbP2UoJ1KxV5Z",
    "seasons": "5,AS9",
    "name": "Roxxxy Andrews",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7e/RoxxxyAndrewsS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901194328"
  },
  {
    "id": "Zy8WvT3XcQ5LrP7JkY2N",
    "seasons": "5",
    "name": "Ivy Winters",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6c/IvyWintersS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901193930"
  },
  {
    "id": "Vb6QwR2JkP9LzX3YcT1F",
    "seasons": "5,AS2",
    "name": "Detox",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/96/DetoxS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901193714"
  },
  {
    "id": "Wz4XyT1JkQ7LrP9Vb2F3",
    "seasons": "5,AS2",
    "name": "Coco Montrese",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/00/CocoMontreseS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901193644"
  },
  {
    "id": "Uy2WvT5JkP8LrX3Zb7F1",
    "seasons": "5,AS2,GAS",
    "name": "Alyssa Edwards",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/45/AlyssaEdwardsS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901193559"
  },
  {
    "id": "Qw3ErYb9P2LkT1JxV5Z7",
    "seasons": "5",
    "name": "Honey Mahogany",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/90/HoneyMahoganyS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901193755"
  },
  {
    "id": "Zy1WvT4JkP6LrX2Yb3F8",
    "seasons": "5",
    "name": "Vivienne Pinay",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ea/ViviennePinayS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901194651"
  },
  {
    "id": "Vb7QwR3JkP5LzX1Yc2T9",
    "seasons": "5,AS6",
    "name": "Serena ChaCha",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/da/SerenaChaChaS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901194406"
  },
  {
    "id": "Wz3XyT2JkP8LrX4Zb1F7",
    "seasons": "5,AS8",
    "name": "Monica Beverly Hillz",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/2e/MonicaBeverlyHillzS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901194202"
  },
  {
    "id": "Uy4WvT1JkP9LrX2Zb3F8",
    "seasons": "5",
    "name": "Penny Tration",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f8/PennyTrationS5CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210901194246"
  },
  {
    "id": "aB3kLm9XyVPhQ0rT6zdg",
    "seasons": "6,AS2",
    "name": "Adore Delano",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d2/AdoreDelanoS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831221400"
  },
  {
    "id": "dF4jKp8VwUqL7zT5nM1J",
    "seasons": "6",
    "name": "April Carrion",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/cd/AprilCarri%C3%B3nS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831221431"
  },
  {
    "id": "eG5mNq2XrZsO8vP3kL0F",
    "seasons": "6,AS3",
    "name": "BenDeLaCreme",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/df/BenDeLaCremeS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831221456"
  },
  {
    "id": "fH6oPq3YrVtS9wQ4jM2K",
    "seasons": "6",
    "name": "Bianca Del Rio",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e7/BiancaDelRioS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831221642"
  },
  {
    "id": "gI7pRr4XsUuT0xN5kL3L",
    "seasons": "6",
    "name": "Courtney Act",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f6/CourtneyActS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831221731"
  },
  {
    "id": "hJ8qSx5YwVvU1yO6lM4M",
    "seasons": "6,AS8",
    "name": "Darienne Lake",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/61/DarienneLakeS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831221802"
  },
  {
    "id": "iK9rTz6Z45lfEzP7mN5N",
    "seasons": "6,AS4",
    "name": "Gia Gunn",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/2a/GiaGunnS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831221834"
  },
  {
    "id": "iK9rTz6ZxWwV2zP7mN5N",
    "seasons": "6",
    "name": "Joslyn Fox",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/dc/JoslynFoxS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831221905"
  },
  {
    "id": "iK34dCCZxWwV2zP7mN5N",
    "seasons": "6",
    "name": "Kelly Mantle",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ab/KellyMantleS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831221948"
  },
  {
    "id": "jL0sUu7YyXxW3zQ8nO6O",
    "seasons": "6",
    "name": "Laganja Estranja",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/55/LaganjaEstranjaS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831222017"
  },
  {
    "id": "kM1tVv8ZzYyX4wR9oP7P",
    "seasons": "6",
    "name": "Magnolia Crawford",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/43/MagnoliaCrawfordS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831222049"
  },
  {
    "id": "lN2uWw9ZzYzX5vS0pQ8Q",
    "seasons": "6,AS3",
    "name": "Milk",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/72/MilkS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831222122"
  },
  {
    "id": "mO3vXx0YyZzW6uR1qR9R",
    "seasons": "6,AS6",
    "name": "Trinity K. Bonet",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/00/TrinityKBonetS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831222201"
  },
  {
    "id": "nP4wYy1ZzZzX7vS2rS0S",
    "seasons": "6",
    "name": "Vivacious",
    "franchise": "US",
    "url": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1f/VivaciousS6CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831222243"
  },
  {
    id: 'aB3kpm9XyVPhQ0rT6zYg',
    seasons: '7,AS8',
    name: "Mrs. Kasha Davis",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/91/MrsKashaDavisS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831214011'
  },
  {
    id: 'aB3kLm3XyVPhQ0rTdzYg',
    seasons: '7,AS2',
    name: "Katya Zamolodchikova",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/23/KatyaS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831213652'
  },
  {
    id: 'N8fYgJ6L0RbQuMnsWVcT',
    seasons: '7',
    name: "Violet Chachki",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/c7/VioletChachkiS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831214337'
  },
  {
    id: 'Qx7TvP3cFe56Y56LudRo',
    seasons: '7,AS2,AS10',
    name: "Ginger Minj",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1d/GingerMinjS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831213428'
  },
  {
    id: 'O5uXbZ1mGhCvPqDkRQ8L',
    seasons: '7,AS3,CvtW2',
    name: "Kennedy Davenport",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/83/KennedyDavenportS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831213752'
  },
  {
    id: 'L34Nc0RPGqZdSy8xEuJT',
    seasons: '7',
    name: "Pearl",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/c0/PearlS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831214103'
  },
  {
    id: 'H2rKXTVqLNCiMfY7Pj9W',
    seasons: '7',
    name: "Miss Fame",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/95/MissFameS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831213916'
  },
  {
    id: 'M9ncJQYVpKuHz4t0gBoE',
    seasons: '7',
    name: "Jaidynn Diore Fierce",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/50/JaidynnDioreFierceS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831213517'
  },
  {
    id: 'U1XIr7G4kQvPmZBt0NjO',
    seasons: '7,AS4',
    name: "Jasmine Masters",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/19/JasmineMastersS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831213547'
  },
  {
    id: 'Z5otyld3DWk8Q4gIgSPb',
    seasons: '7,AS3',
    name: "Trixie Mattel",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6d/TrixieMattelS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831214237'
  },
  {
    id: 'D0UtEe5MHoSNw7pjIB2F',
    seasons: '7',
    name: "Max",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/27/MaxS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831213840'
  },
  {
    id: 'J8yZcPnBO3VXwLm45LLe',
    seasons: '7',
    name: "Kandy Ho",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e1/KandyHoS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831213618'
  },
  {
    id: 'C9s45g6LZxVNB2YdemIR',
    seasons: '7',
    name: "Tempest DuJour",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/9f/TempestDuJourS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831214209'
  },
  {
    id: 'bY42VqztrKPlh5Nc9UXe',
    seasons: '7',
    name: "Sasha Belle",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/21/SashaBelleS7CastMug.png/revision/latest/scale-to-width-down/105?cb=20210831214141'
  },
  {
    id: 'aB3kLm9XyVPsQ0rT6zYg',
    seasons: '8',
    name: "Bob the Drag Queen",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1a/BobTheDragQueenS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831180959'
  },
  {
    id: 'N890gJ6L0RbQuMnsWVcT',
    seasons: '8',
    name: "Kim Chi",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/5b/KimChiS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831181350'
  },
  {
    id: 'Qx7TvP3cFeW9YjKLudRo',
    seasons: '8,AS4',
    name: "Naomi Smalls",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/13/NaomiSmallsS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831181512'
  },
  {
    id: 'O5uXbZ1mGhCvPqDkRQ7L',
    seasons: '8,AS3',
    name: "Chi Chi DeVayne",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/2a/ChiChiDeVayneS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831181131'
  },
  {
    id: 'L4wNc0RPGqZdSy8xEuJT',
    seasons: '8,AS5',
    name: "Derrick Barry",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/aa/DerrickBarryS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831181307'
  },
  {
    id: 'H2rKXTVqLNCiMfY7P56W',
    seasons: '8,AS3',
    name: "Thorgy Thor",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/27/ThorgyThorS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831181822'
  },
  {
    id: 'M9ncJQYVpKuHz4t0gBoR',
    seasons: '8',
    name: "Robbie Turner",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f0/RobbieTurnerS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831181632'
  },
  {
    id: 'U1XIr7G4XXvPmZBt0NjO',
    seasons: '8,AS10',
    name: "Acid Betty",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/0b/AcidBettyS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831180922'
  },
  {
    id: 'Z5oLhRxYDWk8Q4gIgSPb',
    seasons: '8,AS8',
    name: "Naysha Lopez",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ac/NayshaLopezS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831181543'
  },
  {
    id: 'J8yZcPnBO3VXwLmi6rUg',
    seasons: '8',
    name: "Dax ExclamationPoint",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8b/DaxExclamationPointS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831181240'
  },
  {
    id: 'C9sOLf1PZxVNB2YdemIR',
    seasons: '8',
    name: "Laila McQueen",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a0/LailaMcQueenS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831181435'
  },
  {
    id: 'U0KAevjrECayIEJGY7Wm',
    seasons: '9,AS3,AS10',
    name: "Aja",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ed/AjaS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194632'
  },
  {
    id: '1z6dzjX2goNqHWdgXsaN',
    seasons: '9,AS8',
    name: "Alexis Michelle",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/4c/AlexisMichelleS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194528'
  },
  {
    id: 'DdWF9ov16cHSq0K2Hkh7',
    seasons: '9',
    name: "Charlie Hides",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1f/CharlieHidesS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194814'
  },
  {
    id: '2PXYu4SpMpjtoZuKGnVu',
    seasons: '8,9,AS10',
    name: "Cynthia Lee Fontaine",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/28/CynthiaLeeFontaineS8CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831181206'
  },
  {
    id: 'DO0JPbpliZmQSbgqla0D',
    seasons: '9,AS4',
    name: "Farrah Moan",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1a/FarrahMoanS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194152'
  },
  {
    id: 'PdQesVME2IrJllk4sgFQ',
    seasons: '9,AS8',
    name: "Jaymes Mansfield",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/53/JaymesMansfieldS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194226'
  },
  {
    id: 'xdYbVxVoiXzlNyyofvo2',
    seasons: '9',
    name: "Kimora Blac",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/39/KimoraBlacS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194237'
  },
  {
    id: 'QwVI9TtTZwafvuIeppqA',
    seasons: '9',
    name: "Nina Bo'nina Brown",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/cd/NinaBo%27ninaBrownS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194248'
  },
  {
    id: 'SlbTP6ng5DLHNPE6NjpD',
    seasons: '9',
    name: "Peppermint",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/25/PeppermintS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217195036'
  },
  {
    id: 'Z1ADxqc6DgxZXoQMTUPs',
    seasons: '9',
    name: "Sasha Velour",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3a/SashaVelourS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194339'
  },
  {
    id: 'Ve0MY4Dhe9h49XsF9HBg',
    seasons: '9,AS5,AW1',
    name: "Shea Couleé",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/2a/SheaCoule%C3%A9S9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194404'
  },
  {
    id: 'O6rn0N9b71qBZmmd7W9M',
    seasons: '9,AS4,AW1',
    name: "Trinity the Tuck",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/9d/TrinityTaylorS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194416'
  },
  {
    id: 'zeX2GjKRHNzwtwjvxTyj',
    seasons: '9,AS4',
    name: "Valentina",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/83/ValentinaS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194428'
  },
  {
    id: '89INJU5hNdXC0eE7MhYQ',
    seasons: '10',
    name: "Asia O'Hara",
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/09/AsiaO%27HaraS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831163151'
  },
  {
    id: 'GCPOER9gchnbUYypo6NE',
    seasons: '10,AS4,UKvtW1',
    name: 'Mo Heart',
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/fe/MoniqueHeartS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831163838'
  },
  {
    id: 'HpRBu08C9By6AItFjYXS',
    seasons: '10',
    name: 'Aquaria',
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a9/AquariaS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831163055'
  },
  {
    id: 'IuuiAIyabJzfcCfhhSFf',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f0/TheVixenS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831164009',
    name: 'The Vixen',
    franchise: 'US',
    seasons: '10'
  },
  {
    id: 'Orf65XZogioI5B3Dn0Pe',
    name: 'Eureka',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6b/EurekaS9CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240217194933',
    seasons: '9,10,AS6,CvtW2',
    franchise: 'US',
  },
  {
    id: 'VpS44N9gYCu1NfjXhYdZ',
    name: 'Mayhem Miller',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/96/MayhemMillerS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831163657',
    seasons: '10,AS5,UKvtW2',
    franchise: 'US'
  },
  {
    id: 'azOnO1m1uTeoFsHSBRS6',
    name: 'Dusty Ray Bottoms',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/9c/DustyRayBottomsS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831163312',
    seasons: '10',
    franchise: 'US'
  },
  {
    id: 'exRBLHWBm2DcOpU5PX9W',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/15/KalorieKarbdashianWilliamsS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831163436',
    seasons: '10',
    name: 'Kalorie Karbdashian Williams',
    franchise: 'US'
  },
  {
    id: 'f6GdfvE47XjaTx5B9SnI',
    name: 'Kameron Michaels',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6a/KameronMichaelsS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831163523',
    seasons: '10',
    franchise: 'US'
  },
  {
    id: 'lTWffBQjI3kDqV1zUv0s',
    seasons: '10,SR1',
    name: 'Yuhua Hamasaki',
    franchise: 'US',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/62/YuhuaHamasakiS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831164124'
  },
  {
    id: 'm6XuY2322yfiJi64irLQ',
    seasons: '10,AS5',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/dc/MizCrackerS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831163727',
    name: 'Miz Cracker',
    franchise: 'US'
  },
  {
    id: 'rxNyWgSFuvoLo3qu6NpX',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/06/VanessaVanjieMateoS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831163920',
    seasons: '10,11',
    name: 'Vanessa Vanjie Mateo',
    franchise: 'US'
  },
  {
    id: 't4C78lcMTQjKW0Igtxmw',
    name: 'Monét X Change',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ea/Mon%C3%A9tXChangeS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831163803',
    seasons: '10,AS4',
    franchise: 'US'
  },
  {
    id: 'zIAD00WTFnMvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e8/BlairStClairS10CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831163230',
    seasons: '10,AS5',
    name: 'Blair St. Clair',
    franchise: 'US'
  },
  {
    id: 'zIAD22WTFnMvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3a/A%27keriaCDavenportS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831152524',
    seasons: '11,AS6',
    name: "A'keria C. Davenport",
    franchise: 'US'
  },
  {
    id: 'zIAD22W56nMvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/42/ArielVersaceS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831152449',
    seasons: '11',
    name: "Ariel Versace",
    franchise: 'US'
  },
  {
    id: 'zIAD22WTFnMvEP4nBp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/75/BrookeLynnHytesS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831152558',
    seasons: '11',
    name: "Brooke Lynn Hytes",
    franchise: 'US'
  },
  {
    id: 'zISE22WTFnMvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f1/HoneyDavenportS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831152652',
    seasons: '11',
    name: "Honey Davenport",
    franchise: 'US'
  },
  {
    id: 'zISERRRTFnMvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8c/KahannaMontreseS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831152729',
    seasons: '11,AS8',
    name: "Kahanna Montrese",
    franchise: 'US'
  },
  {
    id: 'zISE22WTFnMvEP12D539',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8c/MercedesImanDiamondS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831152824',
    seasons: '11',
    name: "Mercedes Iman Diamond",
    franchise: 'US'
  },
  {
    id: 'zISE4k0oFnMvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/97/NinaWestS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831152853',
    seasons: '11,AS9',
    name: "Nina West",
    franchise: 'US'
  },
  {
    id: 'zISE22444nMvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/44/PlastiqueTiaraS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210907152402',
    seasons: '11,AS9',
    name: "Plastique Tiara",
    franchise: 'US'
  },
  {
    id: '4hSS32444nMvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f8/Ra%27JahO%27HaraS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831153040',
    seasons: '11,AS6,CvtW1',
    name: "Ra'Jah O'Hara",
    franchise: 'US'
  },
  {
    id: 'zISE22444nMvEP000OO9',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3b/ScarletEnvyS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831153122',
    seasons: '11,AS6,UKvtW2',
    name: "Scarlet Envy",
    franchise: 'US'
  },
  {
    id: 'zI3f35444nMvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d5/ShugaCainS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831153221',
    seasons: '11',
    name: "Shuga Cain",
    franchise: 'US'
  },
  {
    id: 'zIIIkl444nMvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/5e/SilkyNutmegGanacheS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831153343',
    seasons: '11,AS6,CvtW1',
    name: "Silky Nutmeg Ganache",
    franchise: 'US'
  },
  {
    id: 'zI3f35444nMvEP42tp40',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/02/SojuS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831153424',
    seasons: '11',
    name: "Soju",
    franchise: 'US'
  },
  {
    id: 'zI3f3f67S3fvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3c/YvieOddlyS11CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210831153546',
    seasons: '11,AW1',
    name: "Yvie Oddly",
    franchise: 'US'
  },
  {
    id: 'z4f7kX67S3fvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/21/A%27WhoraDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830112328',
    seasons: 'UK2',
    name: "A'Whora",
    franchise: 'GB'
  },
  {
    id: 'z4f7k9DD33fvEP42tp39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e1/AsttinaMandellaDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830112528',
    seasons: 'UK2',
    name: "Asttina Mandella",
    franchise: 'GB'
  },
  {
    id: 'z4f7kX67S3fvEP4fbNN3',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3c/BiminiBonBoulashDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830113012',
    seasons: 'UK2',
    name: "Bimini Bon-Boulash",
    franchise: 'GB'
  },
  {
    id: 'eN1tRG58s5CyDpwu576y',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8e/CherryValentineDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830113420',
    seasons: 'UK2',
    name: "Cherry Valentine",
    franchise: 'GB'
  },
  {
    id: 'xg7MtFees1vTbZUOTXvC',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/33/EllieDiamondDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830113452',
    seasons: 'UK2',
    name: "Ellie Diamond",
    franchise: 'GB'
  },
  {
    id: 'I9m1tCPKjegq6AWYcMeu',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7e/GinnyLemonDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830113522',
    seasons: 'UK2',
    name: "Ginny Lemon",
    franchise: 'GB'
  },
  {
    id: 'PoY029qjrljzW3wQ7fEf',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6b/JoeBlackDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830113555',
    seasons: 'UK2',
    name: "Joe Black",
    franchise: 'GB'
  },
  {
    id: 'c0J7kqtwIFFMOnC9CR4T',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/15/LawrenceChaneyDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830113630',
    seasons: 'UK2',
    name: "Lawrence Chaney",
    franchise: 'GB'
  },
  {
    id: 'oDlEZbTpLcjn8HxbjsSw',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/63/SisterSisterDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830113657',
    seasons: 'UK2',
    name: "Sister Sister",
    franchise: 'GB'
  },
  {
    id: 'f0fsflEgKqBiGFGZZ6e0',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ab/TayceDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830113905',
    seasons: 'UK2',
    name: "Tayce",
    franchise: 'GB'
  },
  {
    id: 'JMKBg2QZ1pVzNovlAsfb',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6e/TiaKofiDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830113939',
    seasons: 'UK2,UKvtW2',
    name: "Tia Kofi",
    franchise: 'GB'
  },
  {
    id: 'J4f7KKl0spVzNovlAsfb',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/59/VeronicaGreenDRUK2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830114014',
    seasons: 'UK2,UK3',
    name: "Veronica Green",
    franchise: 'GB'
  },
  {
    id: 'nPdLPVGIscMZ1tEoxy22',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/dc/AnastarziaAnaquwayCDR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830120919',
    seasons: 'C1',
    name: "Anastarzia Anaquway",
    franchise: 'CA'
  },
  {
    id: 'eCDSyGHbM1WougQVlBzs',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/06/BOACDR1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210830121121',
    seasons: 'C1',
    name: "BOA",
    franchise: 'CA'
  },
  {
    id: 'mviIxUz21QsTXMKUan9t',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6b/IlonaVerleyCDR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830121323',
    seasons: 'C1',
    name: "Ilona Verley",
    franchise: 'CA'
  },
  {
    id: 'xZlusEcJTi19F5Ii0bXz',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a3/JimboCDR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830122751',
    seasons: 'C1,UKvtW1,AS8',
    name: "Jimbo",
    franchise: 'CA'
  },
  {
    id: 'NbWnNPxnKgiYvgR2ytgO',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a7/JuiceBoxxCDR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830122923',
    seasons: 'C1',
    name: "Juice Boxx",
    franchise: 'CA'
  },
  {
    id: 'eqQcI61YGxb4leH7xtbi',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/87/KiaraCDR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830123128',
    seasons: 'C1',
    name: "Kiara",
    franchise: 'CA'
  },
  {
    id: 'BStMmP5D8ZvdtWPbvXXA',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/9a/KyneCDR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830123244',
    seasons: 'C1',
    name: "Kyne",
    franchise: 'CA'
  },
  {
    id: 'LSPbFPcfuqU3FxrYkp2q',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ab/LemonCDR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830123441',
    seasons: 'C1,CvtW2',
    name: "Lemon",
    franchise: 'CA'
  },
  {
    id: '1vKpHj4lQLKdxtdeJDc9',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a6/PriyankaCDR1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210830124123',
    seasons: 'C1',
    name: "Priyanka",
    franchise: 'CA'
  },
  {
    id: 'Ck4gLNsfjLqwpqM01L8X',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/fc/RitaBagaCDR1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210830124151',
    seasons: 'C1,CvtW1',
    name: "Rita Baga",
    franchise: 'CA'
  },
  {
    id: 'DIqZ501D1AZ9jFOwIcyT',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1a/ScarlettBoBoCDR1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210830124225',
    seasons: 'C1',
    name: "Scarlet BoBo",
    franchise: 'CA'
  },
  {
    id: 'jctebj2hRpCBpdU5yGlW',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/c6/TynomiBanksCDR1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210830124302',
    seasons: 'C1,CvtW2',
    name: "Tynomi Banks",
    franchise: 'CA'
  },
  {
    id: 'rDc82a529FEwSinLXiDh',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/45/AdrianaCDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210914205333',
    seasons: 'C2',
    name: "Adriana",
    franchise: 'CA'
  },
  {
    id: 'ObF2MxwMDM6pKtuSnNrq',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a7/BethCDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210914205404',
    seasons: 'C2',
    name: "Beth",
    franchise: 'CA'
  },
  {
    id: 'AiCHusQSXUfxl8WKbHe3',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/4b/Eve6000CDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210914205429',
    seasons: 'C2',
    name: "Eve 6000",
    franchise: 'CA'
  },
  {
    id: 'dUU6hWhkcQ9s4pJhbZh4',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/79/GiaMetricCDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210914205604',
    seasons: 'C2',
    name: "Gia Metric",
    franchise: 'CA'
  },
  {
    id: 'mJASXtZDfhapb3spKLmJ',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/55/IcesisCoutureCDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210914205635',
    seasons: 'C2',
    name: "Icesis Couture",
    franchise: 'CA'
  },
  {
    id: 'd50fTRhC1dcXZcHfszZ3',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1f/KendallGenderCDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210914205659',
    seasons: 'C2',
    name: "Kendall Gender",
    franchise: 'CA'
  },
  {
    id: '01TjWHDQwpdZP8tcTVnV',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ad/KimoraAmourCDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220725181818',
    seasons: 'C2',
    name: "Kimora Amour",
    franchise: 'CA'
  },
  {
    id: 'sIS0bwRGtC2J2l2Szgu3',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e4/Oc%C3%A9aneAqua-BlackCDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210914205759',
    seasons: 'C2',
    name: "Océane Aqua-Black",
    franchise: 'CA'
  },
  {
    id: 'iH7RFbkNLNu2LHimFCiV',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/12/PythiaCDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210914205835',
    seasons: 'C2,GAS1',
    name: "Pythia",
    franchise: 'CA'
  },
  {
    id: 'O0GIRmwdwhudAqxNntV5',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f5/StephaniePrinceCDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210914205858',
    seasons: 'C2,CvtW1',
    name: "Stephanie Prince",
    franchise: 'CA'
  },
  {
    id: '5ywHLWl8uW2OzJ7GP2cM',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d6/SukiDollCDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210914205923',
    seasons: 'C2,SR1',
    name: "Suki Doll",
    franchise: 'CA'
  },
  {
    id: 'EUYC9bCVccRELaoxWEKk',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/0a/SynthiaKissCDR2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210914205948',
    seasons: 'C2',
    name: "Synthia Kiss",
    franchise: 'CA'
  },

  {
    id: 'W9v56wQTLUPXbb442hMY',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/df/ArantxaCastillaLaManchaDRES1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210902173400',
    seasons: 'ES1,UKvtW2',
    name: "Arantxa Castilla La Mancha",
    franchise: 'ES'
  },
  {
    id: 'rhW7XEpJLNAVxjeRoOL2',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/94/CarmenFaralaDRES1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210902173440',
    seasons: 'ES1',
    name: "Carmen Farala",
    franchise: 'ES'
  },
  {
    id: 'I59kSghZXTEQDjOJSFU1',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/55/DovimaNurmiDRES1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210902173525',
    seasons: 'ES1',
    name: "Dovima Nurmi",
    franchise: 'ES'
  },
  {
    id: 'A1LhMLT6cjthzR7D8t39',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/0e/DragVulcanoDRES1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210902173559',
    seasons: 'ES1',
    name: "Drag Vulcano",
    franchise: 'ES'
  },
  {
    id: 'oYVUpLhGy7qWV1g1OmKW',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/81/Hug%C3%A1ceoCrujienteDRES1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210902173633',
    seasons: 'ES1',
    name: "Hugáceo Crujiente",
    franchise: 'ES'
  },
  {
    id: '8yJ8xiTV5AWqgqYZU4D6',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/29/IntiDRES1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210902173705',
    seasons: 'ES1',
    name: "Inti",
    franchise: 'ES'
  },
  {
    id: 'goeWbfm2IqODbmKaWv5P',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e7/KillerQueenDRES1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210902173749',
    seasons: 'ES1',
    name: "Killer Queen",
    franchise: 'ES'
  },
  {
    id: 'VgGLNNoQ8mUmAujmttX0',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/16/PupiPoissonDRES1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210902173831',
    seasons: 'ES1,ESAS1',
    name: "Pupi Poisson",
    franchise: 'ES'
  },

  {
    id: '23bt2oXQeevItWa71cCL',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/13/SagittariaDRES1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210902173904',
    seasons: 'ES1,ESAS1',
    name: "Sagittaria",
    franchise: 'ES'
  },
  {
    id: 'VNTZx8o3WYqUkW1o87fS',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/88/TheMacarenaDRES1CastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20210902173939',
    seasons: 'ES1,ES3',
    name: "The Macarena",
    franchise: 'ES'
  },
  {
    id: 'TAeDYw8IoUuLI3mUCJTY',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/26/AidenZhaneS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901203704',
    seasons: '12',
    name: "Aiden Zhane",
    franchise: 'US'
  },
  {
    id: 'QzaVzVIRTv6W9DWpfCWn',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3e/BritaS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901203733',
    seasons: '12',
    name: "Brita",
    franchise: 'US'
  },
  {
    id: 'nqSclxkel8lPyWGTOwja',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d8/CrystalMethydS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901203840',
    seasons: '12',
    name: "Crystal Methyd",
    franchise: 'US'
  },
  {
    id: 'zXWH0aaCC7WvDWUW86W6',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6a/DahliaSinS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901203910',
    seasons: '12',
    name: "Dahlia Sin",
    franchise: 'US'
  },
  {
    id: 'VcJDoxJVuyCDJJ0gwcHN',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/b8/GigiGoodeS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901203939',
    seasons: '12',
    name: "Gigi Goode",
    franchise: 'US'
  },
  {
    id: 'WoKqNMJ3G5JnY8Jxh5ER',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/56/HeidiNClosetS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901204007',
    seasons: '12,AS8',
    name: "Heidi N Closet",
    franchise: 'US'
  },
  {
    id: 'KieG26lvXl9JBkGVYsjL',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e7/JackieCoxS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901204041',
    seasons: '12',
    name: "Jackie Cox",
    franchise: 'US'
  },
  {
    id: 'XncIJESh2TDiVUu1YYWr',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8e/JaidaEssenceHallS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901204134',
    seasons: '12,AW1',
    name: "Jaida Essence Hall",
    franchise: 'US'
  },
  {
    id: 'CaAebo9SVT8vSkenW2yI',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a9/JanS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901204227',
    seasons: '12,AS6',
    name: "Jan",
    franchise: 'US'
  },
  {
    id: 'sccscsPOLvshQMPy8wLn',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/5f/NickyDollS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901204259',
    seasons: '12',
    name: "Nicky Doll",
    franchise: 'US'
  },
  {
    id: 'nNBc0j7IKeyhyjF2WAqx',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/dd/RockMSakuraS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901204420',
    seasons: '12',
    name: "Rock M. Sakura",
    franchise: 'US'
  },
  {
    id: 'LwcmqMVXmbRb2AUSQpeZ',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3d/WidowVon%27DuS12CastMug.png/revision/latest/scale-to-width-down/105?cb=20210901204655',
    seasons: '12',
    name: "Widow Von'Du",
    franchise: 'US'
  },
  {
    id: 'WQjSgfopsQuaqcAXkw7Q',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/36/DenaliS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902181626',
    seasons: '13,AS10',
    name: "Denali",
    franchise: 'US',
    stats: {
      Acting: 70,
      Dance: 95,
      Comedy: 65,
      Design: 60,
      Runway: 80,
      Singing: 55,
    }
  },
  {
    id: 'VDzrunSAdFpQsPiB22dI',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/0b/ElliottWith2T%27sS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902181745',
    seasons: '13',
    name: "Elliott With 2 Ts",
    franchise: 'US',
    stats: {
      Acting: 55,
      Dance: 85,
      Comedy: 50,
      Design: 45,
      Runway: 70,
      Singing: 60,
    }
  },
  {
    id: '4fCfJozI92fuhdLs2UDb',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a7/JoeyJayS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182023',
    seasons: '13',
    name: "Joey Jay",
    franchise: 'US',
    stats: {
      Acting: 50,
      Dance: 70,
      Comedy: 55,
      Design: 40,
      Runway: 60,
      Singing: 65,
    }
  },
  {
    id: 'auLfJozI92gMgdLs2UDb',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/bd/GottmikS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902181947',
    seasons: '13,AS9',
    name: "Gottmik",
    franchise: 'US',
    stats: {
      Acting: 80,
      Dance: 60,
      Comedy: 85,
      Design: 90,
      Runway: 95,
      Singing: 50,
    }
  },
  {
    id: '7iFdqehdbL0JjOcwdWBy',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e5/KahmoraHallS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182128',
    seasons: '13',
    name: "Kahmora Hall",
    franchise: 'US',
    stats: {
      Acting: 45,
      Dance: 40,
      Comedy: 35,
      Design: 70,
      Runway: 90,
      Singing: 40,
    }
  },
  {
    id: 'rhOn7RHexb27Hx02pd4u',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/63/KandyMuseS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182209',
    seasons: '13,AS8',
    name: "Kandy Muse",
    franchise: 'US',
    stats: {
      Acting: 75,
      Dance: 65,
      Comedy: 80,
      Design: 55,
      Runway: 70,
      Singing: 50,
    }
  },
  {
    id: 'G5HVACaVRzQcVzDRbzlY',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e0/LaLaRiS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182255',
    seasons: '13,AS8',
    name: "Lala Ri",
    franchise: 'US',
    stats: {
      Acting: 65,
      Dance: 80,
      Comedy: 60,
      Design: 45,
      Runway: 65,
      Singing: 55,
    }
  },
  {
    id: 'G4fVACaVRzQcVzDRbzlY',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/4f/OliviaLuxS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182353',
    seasons: '13,AS10',
    name: "Olivia Luxx",
    franchise: 'US',
    stats: {
      Acting: 70,
      Dance: 75,
      Comedy: 68,
      Design: 62,
      Runway: 72,
      Singing: 85,
    }
  },
  {
    id: '5jQ3YcBfH0fYLJZupGQL',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/74/Ros%C3%A9S13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182428',
    seasons: '13',
    name: "Rosé",
    franchise: 'US',
    stats: {
      Acting: 88,
      Dance: 80,
      Comedy: 82,
      Design: 70,
      Runway: 78,
      Singing: 92,
    }
  },
  {
    id: '5j4f5cBfH0fYLJZupGQL',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7d/SymoneS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211216235826',
    seasons: '13',
    name: "Symone",
    franchise: 'US',
    stats: {
      Acting: 85,
      Dance: 70,
      Comedy: 90,
      Design: 65,
      Runway: 88,
      Singing: 60,
    }
  },
  {
    id: 'tKLXASuGPeb05fVfW55Y',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/35/TamishaImanS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182545',
    seasons: '13',
    name: "Tamisha Iman",
    franchise: 'US',
    stats: {
      Acting: 72,
      Dance: 68,
      Comedy: 62,
      Design: 58,
      Runway: 75,
      Singing: 65,
    }
  },
  {
    id: 'E0PWgyI0x3sQ4ucHxhe4',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/44/TinaBurnerS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182624',
    seasons: '13,AS10',
    name: "Tina Burner",
    franchise: 'US',
    stats: {
      Acting: 78,
      Dance: 60,
      Comedy: 85,
      Design: 55,
      Runway: 60,
      Singing: 70,
    }
  },
  {
    id: 'jpacB8Bl9pJuxad0nSxA',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/dc/UticaQueenS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182704',
    seasons: '13',
    name: "Utica Queen",
    franchise: 'US',
    stats: {
      Acting: 65,
      Dance: 70,
      Comedy: 72,
      Design: 90,
      Runway: 85,
      Singing: 58,
    }
  },
  {
    id: 'ZsPFngAr2xqFXDayn1Vb',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ec/AlyssaHunterS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020245',
    seasons: '14',
    name: "Alyssa Hunter",
    franchise: 'US'
  },
  {
    id: 'wgnMnY9P2h5fHeiLX3BB',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/5e/AngeriaParisVanMichealsS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020203',
    seasons: '14,AS9',
    name: "Angeria Paris VanMicheals",
    franchise: 'US'
  },
  {
    id: 'L1Qda8yUt1o7MvAnij61',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/56/BoscoS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020202',
    seasons: '14,AS10',
    name: "Bosco",
    franchise: 'US'
  },
  {
    id: 'oVYLwoQI41EhceVYi2qM',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/69/DayaBettyS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020203',
    seasons: '14,AS10',
    name: "Daya Betty",
    franchise: 'US'
  },
  {
    id: '5gj96ennePcoB3c45aH1',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a4/DeJaSkyeS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020203',
    seasons: '14,AS10',
    name: "DeJa Skye",
    franchise: 'US'
  },
  {
    id: 'MLrF1VmwhtDp8XYZAYEJ',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/0c/JasmineKennedieS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020203',
    seasons: '14',
    name: "Jasmine Kennedie",
    franchise: 'US'
  },
  {
    id: '5s0SjjGdmoSxbE2guQKO',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/fa/JorgeousS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020203',
    seasons: '14,AS9,AS10',
    name: "Jorgeous",
    franchise: 'US'
  },
  {
    id: 'B69WdsFM6kqxFZYN2GEp',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3c/JuneJambalayaS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020203',
    seasons: '14',
    name: "June Jambalaya",
    franchise: 'US'
  },
  {
    id: 'Vvgaq9ZgFojXtY39foEj',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/30/KerriColbyS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020203',
    seasons: '14,AS10',
    name: "Kerri Colby",
    franchise: 'US'
  },
  {
    id: '6bJTwtVk1w04r0B1oKXe',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3c/KornbreadJet%C3%A9S14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020204',
    seasons: '14',
    name: 'Kornbread "The Snack" Jeté',
    franchise: 'US'
  },
  {
    id: 'h7mCrGerb2gEl1hkW9gw',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/c1/LadyCamdenS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020204',
    seasons: '14',
    name: "Lady Camden",
    franchise: 'US'
  },
  {
    id: 'CMQ5XCDtegywm5Wo8KYz',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/dd/MaddyMorphosisS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020204',
    seasons: '14',
    name: "Maddy Morphosis",
    franchise: 'US'
  },
  {
    id: 'yumYzSAEa8WDXZeUPXgt',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/4a/OrionStoryS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020204',
    seasons: '14',
    name: "Orion Story",
    franchise: 'US'
  },
  {
    id: 'h2P86re33bNzqQr61B6n',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/b4/WillowPillS14CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211203020201',
    seasons: '14',
    name: "Willow Pill",
    franchise: 'US'
  },
  {
    id: 'BVVBrI9porMz1TTEcNfI',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/bc/AmethystS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213180206',
    seasons: '15',
    name: "Amethyst",
    franchise: 'US'
  },
  {
    id: 'zN2dHW9HjlUoWNkOnSXc',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/c7/AnetraS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213193201',
    seasons: '15',
    name: "Anetra",
    franchise: 'US'
  },
  {
    id: 'CV87lyzA6W5zdm0oyXsf',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/0b/AuraMayariS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213184850',
    seasons: '15',
    name: "Aura Mayari",
    franchise: 'US'
  },
  {
    id: '7SsAxjSrc0ScusNUNHg3',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/72/IreneDuboisS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213180636',
    seasons: '15,AS10',
    name: "Irene The Alien",
    franchise: 'US'
  },
  {
    id: 'xfe6rAjJjgXeRvEWIwiO',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/27/JaxS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213185104',
    seasons: '15',
    name: "Jax",
    franchise: 'US'
  },
  {
    id: '6t8RyhRodLp1J8hRD7fK',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/31/LooseyLaDucaS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213190343',
    seasons: '15',
    name: "Loosey LaDuca",
    franchise: 'US'
  },
  {
    id: 'qgYaN4VqKdi31hIVCb1r',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f7/LuxxNoirLondonS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213185232',
    seasons: '15',
    name: "Luxx Noir London",
    franchise: 'US'
  },
  {
    id: '4f57FQpVpUc4OitdTMKL',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/ba/MalaysiaBabydollFoxxS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213181120',
    seasons: '15',
    name: "Malaysia Babydoll Foxx",
    franchise: 'US'
  },
  {
    id: 'FbiQFQpVpUc4OitdTMKL',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ae/MarciaMarciaMarciaS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213185337',
    seasons: '15',
    name: "Marcia Marcia Marcia",
    franchise: 'US'
  },
  {
    id: 'JeGCWGcECUW57Z6oK5np',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/3e/MistressIsabelleBrooksS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213185615',
    seasons: '15,AS10',
    name: "Mistress Isabelle Brooks",
    franchise: 'US'
  },
  {
    id: 'yTSb63LkzJBNVI6ywKKf',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/c0/RobinFierceS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213185708',
    seasons: '15',
    name: "Robin Fierce",
    franchise: 'US'
  },
  {
    id: '6hzgaTNLjsXtuh3PFhdZ',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/20/SalinaEsTittiesS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213185822',
    seasons: '15',
    name: "Salina EsTitties",
    franchise: 'US'
  },
  {
    id: '9jVOpGMYlrIboPySbXZA',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/60/SashaColbyS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213185937',
    seasons: '15',
    name: "Sasha Colby",
    franchise: 'US'
  },
  {
    id: 'WmeZ8u0tFhYA3xQpR2zU',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/15/SpiceS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213190113',
    seasons: '15',
    name: "Spice",
    franchise: 'US'
  },
  {
    id: 'kTROiBODPj35KYeRAnML',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/0a/SugarS15CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20221213190212',
    seasons: '15',
    name: "Sugar",
    franchise: 'US'
  },
  {
    id: 'iv3ydKqaORx0PaZkVghH',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d5/AmandaToriMeatingS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012214',
    seasons: '16',
    name: "Amanda Tori Meating",
    franchise: 'US'
  },
  {
    id: 'tGTtL0dB4OAXKYLHzrTX',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/de/DawnS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012730',
    seasons: '16',
    name: "Dawn",
    franchise: 'US'
  },
  {
    id: 'bAlnHvDplS4pBwiExYrR',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/57/GenevaKarrS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012706',
    seasons: '16',
    name: "Geneva Karr",
    franchise: 'US'
  },
  {
    id: 'RHm8hFqxAjc6MAThXHPm',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/08/HershiiLiqCour-Jet%C3%A9S16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012303',
    seasons: '16',
    name: "Hershii LiqCour-Jeté",
    franchise: 'US'
  },
  {
    id: '7p9ix01h3puOuAgImfIR',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/89/MegamiS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012313',
    seasons: '16',
    name: "Megami",
    franchise: 'US'
  },
  {
    id: 'ifqF2F3jQO9nXQg9aobg',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/61/Mhi%27yaImanLe%27PaigeS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012322',
    seasons: '16',
    name: "Mhi'ya Iman Le'Paige",
    franchise: 'US'
  },
  {
    id: 'm8pWKjkZ33hWBXXuCfnO',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/df/MirageS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012347',
    seasons: '16',
    name: "Mirage",
    franchise: 'US'
  },
  {
    id: 'thR67RFriQtHW32L6Q0q',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/2c/MorphineLoveDionS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012357',
    seasons: '16',
    name: "Morphine Love Dion",
    franchise: 'US'
  },
  {
    id: 'H5aklvC1kH3OnoOeZGvz',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ea/NymphiaWindS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012409',
    seasons: '16',
    name: "Nymphia Wind",
    franchise: 'US'
  },
  {
    id: 'RW06dhn5tvUlQBC5NBZi',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/5e/PlaneJaneS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012428',
    seasons: '16',
    name: "Plane Jane",
    franchise: 'US'
  },
  {
    id: '4fDDehn5tvUlQBC5NBZi',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f0/PlasmaS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012439',
    seasons: '16',
    name: "Plasma",
    franchise: 'US'
  },
  {
    id: '9UVjWqnI3WAULIRsWwZn',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/03/QS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012449',
    seasons: '16',
    name: "Q",
    franchise: 'US'
  },
  {
    id: 'vrzkyBhqXgA0ZsSFlCh6',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/df/SapphiraCrist%C3%A1lS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012501',
    seasons: '16',
    name: "Sapphira Cristál",
    franchise: 'US'
  },
  {
    id: 'U9cIr8fniCLoEdxXwbFj',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/dd/XunamiMuseS16CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240107012510',
    seasons: '16',
    name: "Xunami Muse",
    franchise: 'US'
  },
  {
    id: 'zxClwrDnG60i2q1uOZRZ',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/9a/AcaciaForgotS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241204225608',
    seasons: '17',
    name: "Acacia Forgot",
    franchise: 'US'
  },
  {
    id: 'WPejW1N1nNoFITlDuSTv',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/cd/ArriettyS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241204225754',
    seasons: '17',
    name: "Arrietty",
    franchise: 'US'
  },
  {
    id: 'MNX0vQCsnYiLfC9Zrsyn',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/69/CrystalEnvyS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241206064226',
    seasons: '17',
    name: "Crystal Envy",
    franchise: 'US'
  },
  {
    id: 'X0eNbS6D25nbznA21kAP',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/26/HormonaLisaS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241204224951',
    seasons: '17',
    name: "Hormona Lisa",
    franchise: 'US'
  },
  {
    id: 'baBDp4Ym8La79GAwH2mC',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/fb/JewelsSparklesS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241220192743',
    seasons: '17',
    name: "Jewels Sparkles",
    franchise: 'US'
  },
  {
    id: '2VQdzYZG3Sl8kqfx1075',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/ba/JoellaS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241204225658',
    seasons: '17',
    name: "Joella",
    franchise: 'US'
  },
  {
    id: 'xswuGhJ9WpBEJneBCPT6',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d7/KoriKingS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241204225634',
    seasons: '17',
    name: "Kori King",
    franchise: 'US'
  },
  {
    id: 'XUSNvOaAnPwyACUllmRF',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/09/LanaJa%27RaeS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241205014055',
    seasons: '17',
    name: "Lana Ja'Rae",
    franchise: 'US'
  },
  {
    id: 'b6DKH1ZCIbsWSMIH8w15',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e6/LexiLoveS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241205013840',
    seasons: '17',
    name: "Lexi Love",
    franchise: 'US'
  },
  {
    id: 'MzxS65pW9KZSsuBDwjgE',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/9a/LuckyStarzzzS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241205015218',
    seasons: '17',
    name: "Lucky Starzzz",
    franchise: 'US'
  },
  {
    id: '3lkExLsRZdseTau69kCb',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f2/LydiaBKollinsS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241204223017',
    seasons: '17,AS10',
    name: "Lydia B. Kollins",
    franchise: 'US'
  },
  {
    id: 'ilYjAMxitFINMqf87xYc',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ee/OnyaNurveS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241204224923',
    seasons: '17',
    name: "Onya Nurve",
    franchise: 'US'
  },
  {
    id: 'bLrPueaH3slDqI7S5LcZ',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f6/SamStarS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241204224524',
    seasons: '17',
    name: "Sam Star",
    franchise: 'US'
  },
  {
    id: 'ZkigO80U79pdRTGwCVvh',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/44/SuzieTootS17CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20241204223733',
    seasons: '17',
    name: "Suzie Toot",
    franchise: 'US'
  },
  {
    id: '5g6hO80U79pdRTGwCVvh',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a4/BagaChipzDRUK1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830095448',
    seasons: 'UK1,UKvtW1',
    name: "Baga Chipz",
    franchise: 'GB'
  },
  {
    id: 'Gx6AjBjxb1rmv8cUspDB',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/81/BluHydrangeaDRUK1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210907152327',
    seasons: 'UK1,UKvtW1',
    name: "Blu Hydrangea",
    franchise: 'GB'
  },
  {
    id: 'nzTOIHLA1GRXlQOTzhF7',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/64/CherylHoleDRUK1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830095648',
    seasons: 'UK1,CvtW2',
    name: "Cheryl Hole",
    franchise: 'GB'
  },
  {
    id: '5eMGXpFngu6b1lBJnZb5',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1d/CrystalDRUK1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830095718',
    seasons: 'UK1',
    name: "Crystal",
    franchise: 'GB'
  },
  {
    id: 'jpSuN2qvQzLQ5JLtfpK3',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e8/DivinaDeCampoDRUK1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830095754',
    seasons: 'UK1',
    name: "Divina De Campo",
    franchise: 'GB'
  },
  {
    id: 'inMtbtfXwGRl2UbWU9sm',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/b3/GothyKendollDRUK1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830095838',
    seasons: 'UK1,UKvtW2',
    name: "Gothy Kendoll",
    franchise: 'GB'
  },
  {
    id: 'wM34dcK87O2iyuoqqX8L',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/26/ScaredyKatDRUK1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830095933',
    seasons: 'UK1',
    name: "Scaredy Kat",
    franchise: 'GB'
  },
  {
    id: 'wM34w6K87O2iyuoqqX8L',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f1/SumTingWongDRUK1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830100017',
    seasons: 'UK1,SR1',
    name: "Sum Ting Wong",
    franchise: 'GB'
  },
  {
    id: '34owLWPsP5H3V18f1ogK',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/92/TheVivienneDRUK1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830100105',
    seasons: 'UK1,AW1',
    name: "The Vivienne",
    franchise: 'GB'
  },
  {
    id: 'qI4XWqNfHzQJA0LZmQ2I',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/56/VinegarStrokesDRUK1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210830100140',
    seasons: 'UK1',
    name: "Vinegar Strokes",
    franchise: 'GB'
  },
  {
    id: '4f5GGqNfHzQJA0LZmQ2I',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/fa/PanginaHealsUKvsTWCastMug.jpeg/revision/latest/scale-to-width-down/105?cb=20220117181132',
    seasons: 'UKvtW1',
    name: "Pangina Heals",
    franchise: 'GB'
  },
  {
    id: 'AcxD83FwZHzpj0XgUwiu',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1b/ArgennisDRMX1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20230808142758',
    seasons: 'MX1',
    name: "Argennis",
    franchise: 'MX'
  },
  {
    id: 'gXgQyBR3K9YcVSN0OdDw',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/38/CristianPeraltaDRMX1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20230808152413',
    seasons: 'MX1',
    name: "Cristian Peralta",
    franchise: 'MX'
  },
  {
    id: 'Z9eflznqLbpYUBpa6wkI',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/db/GalaVaroDRMX1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20230808155148',
    seasons: 'MX1,GAS1',
    name: "Gala Varo",
    franchise: 'MX'
  },
  {
    id: 'lxPnPOqmbCNMa5WnhbRH',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/11/LadyKeroDRMX1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20230808172448',
    seasons: 'MX1',
    name: "Lady Kero",
    franchise: 'MX'
  },
  {
    id: '28z2jrqceOJ8dVuNYp33',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/81/MargaretYYaDRMX1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20230808173405',
    seasons: 'MX1',
    name: "Margaret Y Ya",
    franchise: 'MX'
  },
  {
    id: 'iNPbRp7EaaaDEeKGkhHr',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d1/MatrakaDRMX1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20230809042921',
    seasons: 'MX1',
    name: "Matraka",
    franchise: 'MX'
  },
  {
    id: 'pWIYPb5xcBRVGAyYQclV',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/66/MissVallartaDRMX1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20230808193907',
    seasons: 'MX1',
    name: "Miss Vallarta",
    franchise: 'MX'
  },
  {
    id: '3KoRithFuIVtVZxmbx7x',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e8/PixiePixieDRMX1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20230809044243',
    seasons: 'MX1',
    name: "Pixie Pixie",
    franchise: 'MX'
  },
  {
    id: 'Q3YNoiK3gJt9WRTDyb8e',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a7/ReginaVoceDRMX1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20230809045939',
    seasons: 'MX1',
    name: "Regina Voce",
    franchise: 'MX'
  },
  {
    id: 'BTFsOWj8dXcdaNKoHOxh',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/68/SerenaMorenaDRMX1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20250211040907',
    seasons: 'MX1',
    name: "Serena Morena",
    franchise: 'MX'
  },
  {
    id: '5g6sOWjcdXcdaNKoHOxh',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/0d/VermelhaNoirDRMX1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20230809051254',
    seasons: 'MX1',
    name: "Vermelha Noir",
    franchise: 'MX'
  },
  {
    id: '0g6sOWfr4CCcdaNKoHOxh',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/00/BrigidingDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135130',
    seasons: 'PH1,SR1',
    name: 'Brigiding',
    franchise: 'PH'
  },
  {
    id: 'stNRIRWIs4qP8L3d26xL',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/48/CorazonDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135215',
    seasons: 'PH1',
    name: 'Corazon',
    franchise: 'PH'
  },
  {
    id: 'dlViH42rSYWc1bn7WpYQ',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7f/EvaLeQueenDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135244',
    seasons: 'PH1,GAS1',
    name: 'Eva Le Queen',
    franchise: 'PH'
  },
  {
    id: 'epNFen8i0gn1DIL7kft6',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/cc/GigiEraDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135316',
    seasons: 'PH1',
    name: 'Gigi Era',
    franchise: 'PH'
  },
  {
    id: 'nE0T9daRfjGepCfHqnpu',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/02/LadyMorganaDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135343',
    seasons: 'PH1',
    name: 'Lady Morgana',
    franchise: 'PH'
  },
  {
    id: 'XvK3EIhLnx48ZnjmSRcy',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/b6/MarinaSummersDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135409',
    seasons: 'PH1,UKvtW2',
    name: 'Marina Summers',
    franchise: 'PH'
  },
  {
    id: 'xMVSsjW0RoZrArPNY2Th',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/68/MintyFreshDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135453',
    seasons: 'PH1',
    name: 'Minty Fresh',
    franchise: 'PH'
  },
  {
    id: 'aaVwPbCKBFpryikpIQA7',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f4/PreciousPaulaNicoleDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135525',
    seasons: 'PH1',
    name: 'Precious Paula Nicole',
    franchise: 'PH'
  },
  {
    id: 'i7EK9KthnOWqQMcDg2E4',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8a/PrinceDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135559',
    seasons: 'PH1',
    name: 'Prince',
    franchise: 'PH'
  },
  {
    id: '3z7vMl9oxNOISo36Og6A',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f1/TuringDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135631',
    seasons: 'PH1',
    name: 'Turing',
    franchise: 'PH'
  },
  {
    id: 'Y8u7uWbJuFPjZTB4vWxx',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/cd/Vi%C3%B1asDeluxeDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135723',
    seasons: 'PH1,SR1',
    name: 'Viñas DeLuxe',
    franchise: 'PH'
  },
  {
    id: '1j0kbGuy0snagEXUnuFA',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/63/XilhoueteDRP1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220727135757',
    seasons: 'PH1',
    name: 'Xilhouete',
    franchise: 'PH'
  },
  {
    id: 'FM9XH4nPd28fJPX8KVl6',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/47/AmadivaDRTH1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210902150838',
    seasons: 'TH1',
    name: 'Amadiva',
    franchise: 'TH'
  },
  {
    id: 'KN8k4aiPGK1nTg2pFs4J',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/97/Ann%C3%A9eMaywongDRTH1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210902150924',
    seasons: 'TH1',
    name: 'Année Maywong',
    franchise: 'TH'
  },
  {
    id: 'pKwZ8Rj6wVkbiO3YRNvl',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ea/BEllaDRTH1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210902151010',
    seasons: 'TH1',
    name: 'B Ella',
    franchise: 'TH'
  },
  {
    id: '0uwS1IPOxwx4nBkHiu0U',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/bb/BunnyBeFlyDRTH1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210902151107',
    seasons: 'TH1',
    name: 'Bunny Be Fly',
    franchise: 'TH'
  },
  {
    id: 'RQvbVbInUARAplBJpiPi',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d4/DearisDollDRTH1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210902151143',
    seasons: 'TH1',
    name: 'Dearis Doll',
    franchise: 'TH'
  },
  {
    id: 'ddVJpPcS5vTOBVROL2cT',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/c/c3/JAJADRTH1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210902151227',
    seasons: 'TH1',
    name: 'JAJA',
    franchise: 'TH'
  },
  {
    id: 'ty3jHLNPyntzY7Qgxd9L',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8d/MeannieMinajDRTH1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210902151307',
    seasons: 'TH1',
    name: 'Meannie Minaj',
    franchise: 'TH'
  },
  {
    id: '8O09ZOFyClc1JYlSezJA',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d5/MorriganDRTH1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210902151349',
    seasons: 'TH1',
    name: 'Morrigan',
    franchise: 'TH'
  },
  {
    id: 'tQIlZEOJjnyGBjLFGYF5',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/2/21/NataliaPliacamDRTH1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210902151421',
    seasons: 'TH1',
    name: 'Natalia Pilacam',
    franchise: 'TH'
  },
  {
    id: '5Rap8ozdRWsBdUrbeRGA',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f8/PetchraDRTH1CastMug.png/revision/latest/scale-to-width-down/105?cb=20210902151527',
    seasons: 'TH1',
    name: 'Petchra',
    franchise: 'TH'
  },
  {
    id: 'dz6bxDdA0XGFXrRZm5Gr',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/65/ElipsDRFR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220603142739',
    seasons: 'FR1,FRAS1',
    name: 'Elips',
    franchise: 'FR'
  },
  {
    id: 'sI9dxeap0mNaR0aP9wIn',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/76/KamHughDRFR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220603143235',
    seasons: 'FR1,FRAS1',
    name: 'Kam Hugh',
    franchise: 'FR'
  },
  {
    id: 'LEP9HNO4tbZ4JUggj3ye',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7d/LaBigBerthaDRFR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220603143506',
    seasons: 'FR1,FRAS1',
    name: 'La Big Bertha',
    franchise: 'FR'
  },
  {
    id: 'zzeZrlLCL64gXwKa0H76',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8e/LaBrioch%C3%A9eDRFR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220603143810',
    seasons: 'FR1',
    name: 'La Briochée',
    franchise: 'FR'
  },
  {
    id: 'i77IIXzpHt5dbjW4ZboK',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7a/LaGrandeDameDRFR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220603144046',
    seasons: 'FR1,UKvtW2',
    name: 'La Grande Dame',
    franchise: 'FR'
  },
  {
    id: 'RKjLDvq9pj4u5JwvoJvM',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e0/LaKahenaDRFR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220603144352',
    seasons: 'FR1,CvtW2',
    name: 'La Kahena',
    franchise: 'FR'
  },
  {
    id: 'Psc6Ht8uv87wa6TnKhCH',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/46/LolitaBananaDRFR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220603144903',
    seasons: 'FR1',
    name: 'Lolita Banana',
    franchise: 'FR'
  },
  {
    id: 'LX08zTQ3CMZJMIFOOhc9',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/73/LovaLadivaDRFR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220603145857',
    seasons: 'FR1',
    name: 'Lova Ladiva',
    franchise: 'FR'
  },
  {
    id: 'IYlAy0pRtku7kSNNs97r',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7d/PalomaDRFR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220603151816',
    seasons: 'FR1',
    name: 'Paloma',
    franchise: 'FR'
  },
  {
    id: 'g3DlZJMHsP995stIVeZD',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/13/SoadeMuseDRFR1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220603152735',
    seasons: 'FR1,GAS1,FRAS1',
    name: 'Soa de Muse',
    franchise: 'FR'
  },
  {
    id: 'HXZ0Z7AhcxspI3pU45PQ',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6b/AnitaWigl%27itDRDU1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902161927',
    seasons: 'DU1,CvtW1',
    name: "Anita Wigl'it",
    franchise: 'AU'
  },
  {
    id: 'A8qyMddTPc99PGnn0hsV',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1b/ArtSimoneDRDU1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902162008',
    seasons: 'DU1',
    name: "Art Simone",
    franchise: 'AU'
  },
  {
    id: 'fYNncIGf0m9Xgtr9fZPK',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a1/CocoJumboDRDU1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902162056',
    seasons: 'DU1',
    name: "Coco Jumbo",
    franchise: 'AU'
  },
  {
    id: 'MNmIsb2lL0OaH7gOhtDb',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7c/ElektraShockDRDU1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902162217',
    seasons: 'DU1',
    name: "Elektra Shock",
    franchise: 'AU'
  },
  {
    id: 'KpEs7QjREo7IlyjN2olP',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/9e/EtceteraEtceteraDRDU1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902162137',
    seasons: 'DU1',
    name: "Etcetera Etcetera",
    franchise: 'AU'
  },
  {
    id: '4wWWPMmWnN6bieS27KnJ',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a7/JojoZahoDRDU1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902162259',
    seasons: 'DU1',
    name: "Jojo Zaho",
    franchise: 'AU'
  },
  {
    id: 'QEJTc3zLd4nfMcRjgPzZ',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/86/KarenFromFinanceDRDU1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902162337',
    seasons: 'DU1',
    name: "Karen From Finance",
    franchise: 'AU'
  },
  {
    id: 'V2jJxI6gU9xsYnnePLq7',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/69/KitaMeanDRDU1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902164338',
    seasons: 'DU1',
    name: "Kita Mean",
    franchise: 'AU'
  },
  {
    id: '0T3GmcxFE0P932Gog1Br',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e9/MaxiShieldDRDU1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902164433',
    seasons: 'DU1',
    name: "Maxi Shield",
    franchise: 'AU'
  },
  {
    id: 'ZEDg6wmkVde7D9ndDUCH',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ec/ScarletAdamsDRDU1CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902164511',
    seasons: 'DU1',
    name: "Scarlet Adams",
    franchise: 'AU'
  },
  {
    id: 'Y7sMXuhCR7crcIDYMJab',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/34/AvaPocketDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524033547',
    seasons: 'MX2',
    name: "Ava Pocket",
    franchise: 'MX'
  },
  {
    id: 'jb5AEVuAiC3hWuUF4Fwb',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/18/ElektraVandergeldDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524035155',
    seasons: 'MX2',
    name: "Elektra Vandergeld",
    franchise: 'MX'
  },
  {
    id: 'BPZuUJwrIhWyZWrXjTHK',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ed/EvaBluntDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524041009',
    seasons: 'MX2',
    name: "Eva Blunt",
    franchise: 'MX'
  },
  {
    id: 'dtLSzjWZKJbdVZ1ibQgF',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6c/Gar%C3%A7onneDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524041707',
    seasons: 'MX2',
    name: "Garçonne",
    franchise: 'MX'
  },
  {
    id: '58abtkI2X8MG85yHHgFA',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/31/HoracioPotasioDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524042138',
    seasons: 'MX2',
    name: "Horacio Potasio",
    franchise: 'MX'
  },
  {
    id: 'PpUOiqiqsu6LkYZ1UdWl',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/1b/IgnusArsDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524042558',
    seasons: 'MX2',
    name: "Ignus Ars",
    franchise: 'MX'
  },
  {
    id: 'EGFaAMnACARdOP6oQ00w',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/f/f4/JenaryBloomDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524043146',
    seasons: 'MX2',
    name: "Jenary Bloom",
    franchise: 'MX'
  },
  {
    id: 'VGTmMTxm2aewMDwS4MJb',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/82/LeexaFoxDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240526011935',
    seasons: 'MX2',
    name: "Leexa Fox",
    franchise: 'MX'
  },
  {
    id: 'FCkKxVQ6ewsxol8LdxNw',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8e/LunaLansmanDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524044019',
    seasons: 'MX2',
    name: "Luna Lansman",
    franchise: 'MX'
  },
  {
    id: 'BXngRBTh97yUY0gIj7Su',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/84/Mar%C3%ADaBonitaDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524045617',
    seasons: 'MX2',
    name: "María Bonita",
    franchise: 'MX'
  },
  {
    id: 'jr9UlKoNM9Wapi3tUUjG',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/41/NinadelaFuenteDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524053651',
    seasons: 'MX2',
    name: "Nina de la Fuente",
    franchise: 'MX'
  },
  {
    id: 'H6B0AOX0X05OV2JVxqBr',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/5/52/SuculentaDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524054419',
    seasons: 'MX2',
    name: "Suculenta",
    franchise: 'MX'
  },
  {
    id: 'oGtg2Kk0LQEDv9Kpgzo6',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/1/15/UniqueDRMX2CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20240524054733',
    seasons: 'MX2',
    name: "Unique",
    franchise: 'MX'
  },
  {
    id: 'K2ft5puJ7Dt6aOK6P9V3',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ec/BombaeCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615192425',
    seasons: 'CA3',
    name: "Bombae",
    franchise: 'CA'
  },
  {
    id: '5ijtkM3tXNLRlT3Kiuvz',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/ae/ChelazonLerouxCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615192602',
    seasons: 'CA3',
    name: "Chelazon Leroux",
    franchise: 'CA'
  },
  {
    id: 'hen4nrccRd3Wa0fqlSU1',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/34/Gis%C3%A8leLullabyCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615192743',
    seasons: 'CA3',
    name: "Gisèle Lullaby",
    franchise: 'CA'
  },
  {
    id: 'WZvVoW4yFY22tTFN6ETB',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/80/HalalBaeCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615192902',
    seasons: 'CA3',
    name: "Halal Bae",
    franchise: 'CA'
  },
  {
    id: 'lfU247wPlkovbE9G0cpe',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a1/IrmaGerdCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615193037',
    seasons: 'CA3',
    name: "Irma Gerd",
    franchise: 'CA'
  },
  {
    id: '2Gzqd4ctW1l33B2Fk8a1',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/9/9d/JadaShadaHudsonCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615193226',
    seasons: 'CA3',
    name: "Jada Shada Hudson",
    franchise: 'CA'
  },
  {
    id: 'jHwja0yTqfVOB3D4tU7Z',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ed/KaosCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615193334',
    seasons: 'CA3',
    name: "Kaos",
    franchise: 'CA'
  },
  {
    id: 'NDOxyPVJVwPblxV3cjct',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/44/KimmyCoutureCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615193430',
    seasons: 'CA3',
    name: "Kimmy Couture",
    franchise: 'CA'
  },
  {
    id: '7JDgeaymroOALN9q8QPG',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/be/LadyBoomBoomCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615193609',
    seasons: 'CA3',
    name: "Lady Boom Boom",
    franchise: 'CA'
  },
  {
    id: 'pICBIXAQWC8CMbSoo3Bl',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/72/MissFiercaliciousCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615193722',
    seasons: 'CA3,CvtW2',
    name: "Miss Fiercalicious",
    franchise: 'CA'
  },
  {
    id: 'k4qC6EbooPHzpeFHM5AG',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/6d/MissMo%C3%A7oCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615194134',
    seasons: 'CA3',
    name: "Miss Moço",
    franchise: 'CA'
  },
  {
    id: 'QsUKKv8GMpGupRwstZfq',
    url: 'https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/d5/VivianVanderpussCDR3CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20220615194241',
    seasons: 'CA3',
    name: "Vivian Vanderpuss",
    franchise: 'CA'
  },

].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export const episodes = [
  {
    id: 'EtQVuMqKSIH4wMfZ8BF2',
    title: 'Drag Con Panel Extravaganza',
    episodeNumber: 6,
    type: 'improv',
    description: "The queens have to produce and host their very own Drag Con panels on makeup, hair and body. The husband-and-wife duo behind the Oscar nominated film `The Big Sick', Kumail Nanjiani and Emily Gordon, guest judge.",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'F89MeVmUerDTNusFjy31',
    season: '10',
    title: 'The Last Ball on Earth',
    episodeNumber: 4,
    description: 'The queens cook up global-warming-friendly looks for the last ball ever as actresses Tisha Campbell Martin and Logan Browning guest judge.',
    type: 'design,ball',
    franchise: 'US'
  },
  {
    id: 'FbMPMlvB760zXuvsoDOu',
    title: 'Evil Twins',
    franchise: 'US',
    type: 'improv,design',
    episodeNumber: 11,
    season: '10',
    description: "The queens give some of today's hottest social media superstars drag makeovers. Actor Miles Heizer from `13 Reasons Why' and hip-hop artist Lizzo are the guest judges."

  },
  {
    id: 'MReanRyzunBSWtgsPr4Q',
    season: '10',
    title: '10s Across the Board',
    type: 'premiere,design',
    description: "Christina Aguilera stunts on the mainstage. Fan favourite queens from the past decade of Drag Race return as 14 new queens compete to become America's Next Drag Superstar and win $100,000.",
    episodeNumber: 1,
    franchise: 'US'
  },
  {
    id: 'RA7LXFcMgWuYEsPyR1fw',
    title: 'Grand Finale',
    description: "RuPaul crowns America's Next Drag Superstar as the top queens battle it out in an epic lip sync smackdown for the crown.",
    season: '10',
    type: 'finale,lipsyncSmackdown',
    episodeNumber: 14,
    franchise: 'US'
  },
  {
    id: 'RN7uhsO5IUuoJAfr39WR',
    title: 'Tap That App',
    episodeNumber: 3,
    type: 'branding,commercial',
    season: '10',
    franchise: 'US',
    description: 'The queens are tasked with making and starring in commercials for drag-themed dating apps. Courtney Love and Nico Tortorella join the judging panel.'
  },
  {
    id: 'fJZQA6dQ10RyeMahMGLg',
    description: "The queens' improvisational skills are put to the test for the new talk show, `Bossy Rossy', hosted by Ross Mathews. Country music singer Shania Twain and actress Carrie Preston are the guest judges.",
    season: '10',
    episodeNumber: 5,
    title: 'The Bossy Rossy Show',
    type: 'improv,comedy',
    franchise: 'US'
  },
  {
    id: 'iW7VprnyOIYCiz9fqglU',
    type: 'musicVideo',
    season: '10',
    title: 'American',
    description: "The top four queens must write a verse and execute it in a performance of RuPaul's hit single American, then guest on RuPaul's podcast with Michelle Visage. Later, choreographer Todrick Hall, style superstar Carson Kressley, and Ross Mathews join.",
    episodeNumber: 12,
    franchise: 'US'
  },
  {
    id: 'kQyRRmN1D43iWgNkiylw',
    title: 'PharmaRusical',
    episodeNumber: 2,
    type: 'musical',
    description: 'The queens must wow the judges in a lip-sync dance number inspired by pharmaceutical TV adverts, as Halsey and Padma Lakshmi guest judge. Andy Cohen and Alyssa Edwards make a guest appearance.',
    season: '10',
    franchise: 'US'
  },
  {
    id: 'nmJHLIF3qQYs94RTEbPj',
    episodeNumber: 10,
    type: 'makeover',
    description: "The queens give some of today's hottest social media superstars drag makeovers. Actor Miles Heizer from `13 Reasons Why' and hip-hop artist Lizzo are the guest judges.",
    season: '10',
    title: 'Social Media Kings Into Queens',
    franchise: 'US'
  },
  {
    id: 'oJdzm98pPR1WOg3fMBfE',
    title: 'The Unauthorized Rusical',
    type: 'musical',
    franchise: 'US',
    season: '10',
    episodeNumber: 8,
    description: 'The queens celebrate four decades of Cher in a mini-musical choreographed by Todrick Hall. Billy Eichner and Andrew Rannells guest judge.'
  },
  {
    id: 'pMEb04DWCKx6w0ndErv0',
    episodeNumber: 7,
    season: '10',
    description: 'The queens must impersonate their favourite celebrities for the legendary snatch game, as Audra McDonald and Kate Upton guest judge. Bianca Del Rio and Alex Trebek are special guests.',
    type: 'improv,comedy,snatchGame',
    title: 'Snatch Game',
    franchise: 'US'
  },
  {
    id: 'xfZoym7wWq8866itTNUR',
    episodeNumber: 9,
    season: '10',
    description: "The queens are assigned parts and must act in the new hit series, `Breastworld'. `Broad City' stars Ilana Glazer and Abbi Jacobson guest judge, with Randy Rainbow and Stephen Colbert as special guests.",
    title: 'Breastworld',
    type: 'acting',
    franchise: 'US'
  },
  {
    id: 'xfZoym7gIp0866itTNUR',
    episodeNumber: 1,
    season: '11',
    description: "Miley Cyrus goes undercover in the workroom to spy on the new cast of queens competing for $100,000. The first test is to create signature looks from materials belonging to former Drag Race legends.",
    title: 'Whatcha Unpackin?',
    type: 'premiere,design',
    franchise: 'US'
  },
  {
    id: 'xfZoym7wWq886f5IS2qR',
    episodeNumber: 2,
    season: '11',
    description: 'The queens are challenged to act in drag queen versions of blockbuster movies; actors Sydelle Noel ("Black Panther") and Bobby Moynihan ("Saturday Night Live") guest judge.',
    title: 'Good God Girl, Get Out',
    type: 'acting',
    franchise: 'US'
  },
  {
    id: 'xfZo4fgRRq886f5IS2qR',
    episodeNumber: 3,
    season: '11',
    description: 'The queens put their pop icon knowledge to the test when they have to perform in diva worship talk shows; actor Troye Sivan ("Boy Erased") and actor Guillermo Diaz ("Scandal") guest judge.',
    title: 'Diva Worship',
    type: 'acting,improv,comedy',
    franchise: 'US'
  },
  {
    id: 'E3S2eem7wWq886f5IS2qe',
    episodeNumber: 4,
    season: '11',
    description: "The queens hop into Rachel Maddow drag to present a breaking news story, and then get political with a Grease-inspired musical flavoured with women from Trump's world. Tiffany `New York' Pollard and Joel McHale guest judge.",
    title: 'Trump: The Rusical',
    type: 'musical',
    franchise: 'US'
  },
  {
    id: 'R4gIymg5hD3886fd3S2q',
    episodeNumber: 5,
    season: '11',
    description: 'The queens battle each other in a spooky pageant of monster-inspired couture and must showcase three Halloween-inspired looks. Supermodel Cara Delevingne and pop culture icon Elvira guest judge.',
    title: 'Monster Ball',
    type: 'design,ball',
    franchise: 'US'
  },
  {
    id: '5CqcsgCSbnLPKfDhcNt5',
    episodeNumber: 6,
    season: '11',
    description: 'The queens get physical in the 69th International Draglympics. Choreographer Travis Wall and Olympian figure skaters Mirai Nagasu and Adam Rippon guest judge. Camp aerobicise queen Love Connie makes a guest appearance.',
    title: 'The Draglympics',
    type: 'comedy,dancing',
    franchise: 'US'
  },
  {
    id: 'Dv1KWW78JmJcMkf3tHST',
    episodeNumber: 7,
    season: '11',
    description: ' The queens use organic ingredients to create sickening but sustainable high fashion looks. Supermodel Amber Valletta and reality star Kandi Burruss guest judge. Drag queen Alyssa Edwards makes a guest appearance.',
    title: 'From Farm To Runway',
    type: 'design',
    franchise: 'US'
  },
  {
    id: '76Y3kN5fZMsDR0b4EjcO',
    episodeNumber: 8,
    season: '11',
    description: 'The queens compete in a nautical-themed version of the legendary Snatch Game. Veep co-stars Tony Hale and Clea DuVall guest judge. Drag queens Morgan McMichaels and Jinkx Monsoon make guest appearances.',
    title: 'Snatch Game At Sea',
    type: 'improv,comedy,snatchGame',
    franchise: 'US'
  },
  {
    id: '5I5AqsAOIZNd1lYzzHjb',
    episodeNumber: 9,
    season: '11',
    description: 'The queens clash with the law in the hit TV series "Los Angeles Drag Patrol". Natasha Lyonne (Russian Doll), Cheyenne Jackson (American Horror Story) and Fortune Feimster (The Mindy Project) guest judge.',
    title: 'L.A.D.P.!',
    type: 'improv,comedy',
    franchise: 'US'
  },
  {
    id: 'aBd8gFafXT6BAhpgJjEk',
    episodeNumber: 10,
    season: '11',
    description: 'The queens must razzle and dazzle in their very own magic show. Gina Rodriguez (Jane the Virgin) and Katherine Langford (13 Reasons Why) guest judge.',
    title: 'Dragacadabra',
    type: 'improv,comedy',
    franchise: 'US'
  },
  {
    id: 'M0wDOnD45r1OmTqVKVVi',
    episodeNumber: 11,
    season: '11',
    description: 'The queens makeover returning queens, transforming them into a member of their own drag family. Lena Waithe (The Chi) and comedian Wanda Sykes guest judge.',
    title: 'Bring Back My Queens!',
    type: 'design,makeover',
    franchise: 'US'
  },
  {
    id: 'AnaYfx8Of9k0iAiONU0m',
    episodeNumber: 12,
    season: '11',
    description: "The queens must write and record a verse in a performance of RuPaul's hit single" + '"Queens Everywhere"' + ", and guest on RuPaul's podcast with Michelle Visage. Choreographer Todrick Hall, style superstar Carson Kressley and Ross Matthews guest judge.",
    title: 'Queens Everywhere',
    type: 'musicVideo',
    franchise: 'US'
  },
  {
    id: 'l5W2BuqQENF1Og1AZP5A',
    episodeNumber: 14,
    season: '11',
    description: "In the Season 11 grand finale, Christine and the Queens performs, the Top Four girls compete in an epic lip-sync smackdown, and RuPaul crowns America's next drag superstar.",
    title: 'Grand Finale',
    type: 'finale,lipsyncSmackdown',
    franchise: 'US'
  },
  {
    id: 'OTPg9KMZGWNuVAQqRDsk',
    episodeNumber: 1,
    season: '9',
    title: 'Oh. My. Gaga!',
    description: "Lady Gaga drops by to meet the new queens competing to become America's Next Drag Superstar. Their first test is to compete in the Miss Charisma Uniqueness Nerve and Talent pageant.",
    type: 'premiere,runway',
    franchise: 'US'
  },
  {
    id: 'ATraXNQflUpcoZRTFIZf',
    episodeNumber: 2,
    season: '9',
    title: 'She Done Already Done Brought It On',
    description: "Lisa Kudrow from Friends stops by. The queens are challenged to perform in an epic cheer battle, with the guest judges The B-52’s.",
    type: 'dancing,improv',
    franchise: 'US'
  },
  {
    id: 'iUPiamVEBO4dxDID3F6s',
    episodeNumber: 3,
    season: '9',
    title: 'Draggily Ever After',
    description: "The queens must create fairytale drag princesses, and transform themselves into sassy sidekicks. With guest judges Todrick Hall and Cheyenne Jackson.",
    type: 'makeover,design,improv',
    franchise: 'US'
  },
  {
    id: 'iXLtvOzPXaTPPX3suqkm',
    episodeNumber: 4,
    season: '9',
    title: 'Good Morning Bitches',
    description: "The queens join the cutthroat Morning Talk Show wars. Guest judges are Naya Rivera and Jeffrey Bowyer-Chapman.",
    type: 'imrprov,talkShow,comedy',
    franchise: 'US'
  },
  {
    id: 'fyK3OXw99aQbpDhV9Tfu',
    episodeNumber: 5,
    season: '9',
    title: 'Reality Stars: The Musical',
    description: "Todrick Hall directs the queens in Broadway's newest mega-sensation, the Kardashian musical. Singer Meghan Trainor guest judges.",
    type: 'musical,dancing',
    franchise: 'US'
  },
  {
    id: '0soY0RbssPvga5YoCmsW',
    episodeNumber: 6,
    season: '9',
    title: 'Snatch Game',
    description: "The queens impersonate celebrities in a quick-witted TV game show. Candis Cayne and Denis O'Hare guest judge.",
    type: 'snatchGame,comedy,improv',
    franchise: 'US'
  },
  {
    id: 'k722NWNSIuXDrpavK9YI',
    episodeNumber: 7,
    season: '9',
    title: '9021-HO',
    description: 'The queens act in a classic 90s high-school drama directed by original "Beverly Hills 90210" stars Tori Spelling and Jennie Garth.',
    type: 'acting',
    franchise: 'US'
  },
  {
    id: 'jlqTazlLkttWQy1LNp47',
    episodeNumber: 8,
    season: '9',
    title: 'RuPaul Roast',
    description: "The queens perform a comedy roast on Michelle Visage in front of a live audience. Singer Tamar Braxton and Fortune Feimster (The Mindy Project) guest judge.",
    type: 'roast,improv,comedy',
    franchise: 'US'
  },
  {
    id: 'pk7yeMiFqlRL3j27PnWk',
    episodeNumber: 9,
    season: '9',
    title: 'Your Pilot’s on Fire',
    description: "The queens create, write, and star in their TV pilots. Noah Galvin (The Real O'Neals) and QVC queen Lisa Robertson guest judge.",
    type: 'acting,comedy',
    franchise: 'US'
  },
  {
    id: 'ned2JjzQNPAdQcONYU2u',
    episodeNumber: 10,
    season: '9',
    title: 'Makeovers: Crew Better Work',
    description: "The remaining drag queens were asked by RuPaul to give make-overs of themselves, and six crew members of RuPaul's Drag Race.",
    type: 'makeover',
    franchise: 'US'
  },
  {
    id: 'x76U6ax4m3JtBlHoWm15',
    episodeNumber: 11,
    season: '9',
    title: 'Gayest Ball Ever',
    description: "The queens must participate in the Gayest Ball Ever and create three different outfits based off three categories: Rainbow-She-Betta-Do, Sexy Unicorn and Village People Eleganza Extravaganza.",
    type: 'ball,design',
    franchise: 'US'
  },
  {
    id: 'BHcrpcsTEnvYRjZJanmo',
    episodeNumber: 12,
    season: '9',
    title: 'Category Is',
    description: 'The four remaining drag queens were asked by RuPaul to write, produce and choreograph an original verse for the remix of his song "Category Is"; additionally, each queen were ask to guest star on RuPauls podcast Whats the Tee?, featuring panel judge Michelle Visage.',
    type: 'rap,dancing',
    franchise: 'US'
  },
  {
    id: 'kO4ipiO8hKZ0jyjIg4fh',
    episodeNumber: 14,
    season: '9',
    title: 'Grand Finale',
    description: "The final contestants lip-sync in groups of two to see who will become America's Next Drag Superstar.",
    type: 'finale,lipsyncSmackdown',
    franchise: 'US'
  },
  {
    id: 'Yt0QnL4pM1rSfW9hD6zU',
    episodeNumber: 1,
    season: '8',
    title: 'Keeping It 100!',
    description: "For the 100th episode, Ru challenges a new crop of hens to craft outfits based on design challenges from seasons past. Nicole Richie guest judges.",
    type: 'premiere,design',
    franchise: 'US'
  },
  {
    id: 'R8vJwKd7NxPlC0eGh5Uf',
    episodeNumber: 2,
    season: '8',
    title: 'Bitch Perfect',
    description: 'Ru divides the remaining queens into two competing teams to perform in a dance-driven, drag-appella sing-off dubbed "Bitch Perfect."',
    type: 'dancing,comedy',
    franchise: 'US'
  },
  {
    id: 'Q3mZsLu5XwTp9bFa8KoR',
    episodeNumber: 3,
    season: '8',
    title: "RuCo's Empire",
    description: 'After a stunning runway showdown, a dismissed queen gets a second chance in a team-based challenge: acting in a pilot inspired by the TV drama "Empire."',
    type: 'improv,comedy',
    franchise: 'US'
  },
  {
    id: 'Z1oPqAj6UgVmS8xDe4Yn',
    episodeNumber: 4,
    season: '8',
    title: 'New Wave Queens',
    description: "The remaining queens take the stage to sing live in a 1980s-style salute to New Wave girl bands. Guest judges include Blondie’s Debbie Harry.",
    type: 'sing',
    franchise: 'US'
  },
  {
    id: 'M5rXuKc9JbLp3fTa7sVe',
    episodeNumber: 5,
    season: '8',
    title: 'Supermodel Snatch Game',
    description: 'Competitive queens take on shades of well-known celebrities in another round of “Snatch Game.” Later, they all strike a pose in homage to Madonna.',
    type: 'snatchGame,improv,comedy',
    franchise: 'US'
  },
  {
    id: 'U7tBnFq0WoRvP6lXe1Kd',
    episodeNumber: 6,
    season: '8',
    title: 'Wizards of Drag',
    description: ' The queens dish out mini drag makeovers in the style of "The Wizard of Oz." Fashion designer Marc Jacobs and entertainer Todrick Hall guest judge.',
    type: 'design',
    franchise: 'US'
  },
  {
    id: 'L9dCgHn2KjXp8zRf3YoB',
    episodeNumber: 7,
    season: '8',
    title: 'Shady Politics',
    description: 'The top six queens campaign hard for the title of First Drag President of the United States. Guest judges include Vivica A. Fox ("Independence Day").',
    type: 'improv,comedy',
    franchise: 'US'
  },
  {
    id: 'V2pHxTz4MqEsY5uB1gDf',
    episodeNumber: 8,
    season: '8',
    title: 'RuPaul Book Ball',
    description: 'The queens prep paper-thin looks for a "Book Ball" and pay homage to "Strangers with Candy" icon Jerii Blank. Sibs Amy and David Sedaris guest judge.',
    type: 'ball,design',
    franchise: 'US'
  },
  {
    id: 'E0wQrKp3LhJuX8tZn5Mb',
    episodeNumber: 9,
    season: '8',
    title: 'The Realness',
    description: "No one's safe as the remaining four queens square off for their final challenge: starring in the music video for Ru's hit single 'The Realness.'",
    type: 'musicVideo,dancing',
    franchise: 'US'
  },
  {
    id: 'P4nFsL0ZxWvYrT1kB9qe',
    episodeNumber: 10,
    season: '8',
    title: 'Grand Finale',
    description: "Fabulousness flares when this season's queens reconvene for the crowning of Miss Congeniality -- and America's Next Drag Superstar.",
    type: 'finale',
    franchise: 'US'
  },
  {
    id: 'A1bC2dE3fG4hI5jK6lMn',
    episodeNumber: 1,
    season: '7',
    title: 'Born Naked',
    description: 'Fourteen queens enter the workroom, walk a spring and winter runway, then hit the main stage with nude illusion designs.',
    type: 'design,runway',
    franchise: 'US'
  },
  {
    id: 'B2cD3eF4gH5iJ6kL7mNo',
    episodeNumber: 2,
    season: '7',
    title: 'Glamazonian Airways',
    description: 'In this episode, the queens perform in Glamazonian Airways, a lip syncing group challenge. On the runway the queen show off their best first class jet setting looks.',
    type: 'dancing,comedy,musical',
    franchise: 'US'
  },
  {
    id: 'C3dE4fG5hI6jK7lM8nOp',
    episodeNumber: 3,
    season: '7',
    title: 'ShakesQueer',
    description: 'The queens perform in a Shakespeare-themed acting challenge then hit the main stage in their best bearded looks.',
    type: 'comedy,acting,parody',
    franchise: 'US'
  },
  {
    id: 'D4eF5gH6iJ7kL8mN9oPq',
    episodeNumber: 4,
    season: '7',
    title: 'Spoof! (There It Is)',
    description: ' Three teams of queens face off in a performance challenge, creating parodies of Rus "Dance with U," "Sissy That Walk," and "Let the Music Play."',
    type: 'comedy,parody',
    franchise: 'US'
  },
  {
    id: 'E5fG6hI7jK8lM9nO0pQr',
    episodeNumber: 5,
    season: '7',
    title: 'The DESPY Awards',
    description: 'The queens partner up and pay tribute to the iconic red carpet looks, then amp up the drama when they stage their own awards show.',
    type: 'comedy,hosting',
    franchise: 'US'
  },
  {
    id: 'F6gH7iJ8kL9mN0oPqRsT',
    episodeNumber: 6,
    season: '7',
    title: 'Ru-Hollywood Stories',
    description: 'The queens play Monster in Your Pants for the mini-challenge and re-enact a "Drag Race" scandal. Ariana Grande and Merle Ginsberg guest judge.',
    type: 'acting,comedy',
    franchise: 'US'
  },
  {
    id: 'G7hI8jK9lM0nOpQrStU',
    episodeNumber: 7,
    season: '7',
    title: 'Snatch Game',
    description: 'When "Snatch Game" returns, two queens pick the same famous fashionista to impersonate, while another contestant makes a shocking confession.',
    type: 'smatchGame,comedy,improv',
    franchise: 'US'
  },
  {
    id: 'H8iJ9kL0mN1oPqRsTuV',
    episodeNumber: 8,
    season: '7',
    title: 'Conjoined Queens',
    description: 'The seven eliminated queens pair up with current contestants in a conjoined drag twin challenge, fighting for a chance to get back in the game.',
    type: 'design,runway',
    franchise: 'US'
  },
  {
    id: 'I9jK0lM1nO2pQrStUvW',
    episodeNumber: 9,
    season: '7',
    title: 'Divine Inspiration',
    description: 'John Waters joins the judging panel when the queens performing musical versions of scenes from his movies in a tribute to drag legend Divine.',
    type: 'musical,singing,comedy',
    franchise: 'US'
  },
  {
    id: 'J0kL1mN2oP3qRsTuVwX',
    episodeNumber: 10,
    season: '7',
    title: 'Prancing Queens',
    description: 'The queens transform themselves into "Fake Housewives" then create half-man, half-woman looks for a dance challenge on the main stage.',
    type: 'dancing,comedy',
    franchise: 'US'
  },
  {
    id: 'K1lM2nO3pQ4rStUvWxY',
    episodeNumber: 11,
    season: '7',
    title: 'Hello, Kitty Girls!',
    description: 'Ru challenges the queens to create Hello-Kitty inspired looks for their runway looks. Rebecca Romijn and Santino Rice guest judge.',
    type: 'runway,design,comedy',
    franchise: 'US'
  },
  {
    id: 'L2mN3oP4qR5sTuVxWyZ',
    episodeNumber: 12,
    season: '7',
    title: 'And the Rest Is Drag',
    description: ' The final queens star with Ru in a music video for "Born Naked" and face off in an acting challenge before bringing their best drag to the runway.',
    type: 'musicVideo',
    franchise: 'US'
  },
  {
    id: 'N4oP5qR6sT7uVxYzAbB',
    episodeNumber: 14,
    season: '7',
    title: 'The Grand Finale',
    description: 'The eliminated queens and favourites from seasons past join Ru as Americas Next Drag Superstar and Miss Congeniality are crowned.',
    type: 'finale',
    franchise: 'US'
  },
  {
    id: 'A9xT7vP4kQmW2eR1sUfJ',
    episodeNumber: 1,
    season: '6',
    title: "RuPaul’s Big Opening: Part 1",
    description: ' The first half of contestants enter the work room, participate in a photo challenge and hit the runway in television inspired couture.',
    type: 'premiere,design',
    franchise: 'US'
  },
  {
    id: 'B3pL9kS2nVtR8yQ6oFdG',
    episodeNumber: 2,
    season: '6',
    title: "RuPaul’s Big Opening: Part 2",
    description: ' The second half of contestants enter the workroom, participate in a photo shoot and create couture from celebratory themed boxes.',
    type: 'premiere,design',
    franchise: 'US'
  },
  {
    id: 'C1oK8lQ5sXjM3aV9zRwP',
    episodeNumber: 3,
    season: '6',
    title: 'Scream Queens',
    description: 'The remaining queens participate in a horror movie acting challenge after being split into two teams. On the runway the queens don their best drag and stun the judges.',
    type: 'acting,comedy',
    franchise: 'US'
  },
  {
    id: 'D7qN2mR6wYvP5oL1cTfB',
    episodeNumber: 4,
    season: '6',
    title: 'Shade: The Rusical',
    description: 'The remaining queens participate in a musical called Shade: The Rusical. After, the contestants take on the runway in their best red carpet gowns.',
    type: 'musical,acting,dancing,singing',
    franchise: 'US'
  },
  {
    id: 'E5rT9uJ3kLpO6qF8vXcZ',
    episodeNumber: 5,
    season: '6',
    title: 'Snatch Game',
    description: 'The remaining queens compete as celebrities in the infamous Snatch Game. On the runway the dolls dress up in RuPaul inspired drag.',
    type: 'snatchGame,comedy,improv',
    franchise: 'US'
  },
  {
    id: 'F8yP3dS7vHbK1mN4oGtC',
    episodeNumber: 6,
    season: '6',
    title: "Oh No She Betta Don’t!",
    description: "The queens make a music video for Oh No She Betta Don't and wear their crazy, sexy cool that accentuate their favorite body part.",
    type: 'rap,musicVideo,dance,comedy',
    franchise: 'US'
  },
  {
    id: 'G6mQ2aV5xLnC9zK7rYpD',
    episodeNumber: 7,
    season: '6',
    title: 'Glamazon by Colorevolution',
    description: "On this episode, the remaining queens pair up into teams of two and create advertisements for RuPaul's Glamazon by Colorevolution. Then, the queens stomp the runway in black and white.",
    type: 'commercial,branding,comedy',
    franchise: 'US'
  },
  {
    id: 'I2kR7jM9pLbQ6vY4dNxF',
    episodeNumber: 8,
    season: '6',
    title: 'Drag Queens of Comedy',
    description: 'The remaining queens participate in a stand up comedy challenge that results in one of the girls becoming emotional.',
    type: 'comedy',
    franchise: 'US'
  },
  {
    id: 'H4nZ1cX6oKvR8bW3pJtE',
    episodeNumber: 9,
    season: '6',
    title: 'Drag Queens of Talk',
    description: 'The remaining contestants host a talk show segment then hit the runway in their best animal inspired drag.',
    type: 'talkShow,improv',
    franchise: 'US'
  },
  {
    id: 'J5uN8vP3sLqR1tK7yXbG',
    episodeNumber: 10,
    season: '6',
    title: 'Drag My Wedding',
    description: 'The queens are paired up with men that they must transform into wedding clad drag daughters before giving them away for marriage.',
    type: 'makeover',
    franchise: 'US'
  },
  {
    id: 'K3rY9xW5mNpO7jV1lTbH',
    episodeNumber: 11,
    season: '6',
    title: 'Glitter Ball',
    description: 'The finalists compete in The Glitter Ball where they must show three looks; Banjie Girl Realness, Executive Realness and Glitter Extravaganza.',
    type: 'ball,design',
    franchise: 'US'
  },
  {
    id: 'L2mN3oP4qR5sTuVxWyZq',
    episodeNumber: 12,
    season: '6',
    title: 'Sissy That Walk',
    description: "The final queens star in RuPaul's 'Sissy That Walk' music video then campaign their reasons for being America's Next Drag Superstar.",
    type: 'musicVideo',
    franchise: 'US'
  },
  {
    id: 'N4oP5qR6sT7uVxYzAbBc',
    episodeNumber: 14,
    season: '6',
    title: 'Reunited!',
    description: "The queens of season 6 of RuPaul's Drag Race reunite and a winner is crowned.",
    type: 'finale',
    franchise: 'US'
  },
  {
    id: 'A9kLmN0pQ1rS2tUvWxYz',
    episodeNumber: 1,
    season: '5',
    title: 'RuPaullywood or Bust',
    description: 'In the season five premiere, fourteen new drag queens compete for the title of Americas Next Drag Superstar with a prize package including a life time supply of Color Evolution cosmetics, a one of a kind trip courtesy of ALandCHUCK.travel, headline Logos Drag Race tour featuring Absolut Vodka cocktails perfected, and $100,000. In the mini challenge, they have an "underwater serving glamor" photo shoot. In the main challenge, they dumpster dive for materials to create an "award winning look that screams Hollywood red carpet couture" to wear on the runway.',
    type: 'premiere,design,runway',
    franchise: 'US'
  },
  {
    id: 'B8jKlM7nO6pQ5rStUvWx',
    episodeNumber: 2,
    season: '5',
    title: 'Lip Synch Extravaganza Eleganza',
    description: "The contestants must lip-synch to the spoken word, as they recreate classic moments from Drag Race history in scene-stealing viral videos.",
    type: 'comedy',
    franchise: 'US'
  },
  {
    id: 'C7iJkL8mN9oP0qRsTuVw',
    episodeNumber: 3,
    season: '5',
    title: 'Draggle Rock',
    description: "The queens connect with their inner child as they star in a fun-filled kids TV show!",
    type: 'acting,comedy',
    franchise: 'US'
  },
  {
    id: 'D6hIjK7lM8nO9pQrStUv',
    episodeNumber: 4,
    season: '5',
    title: 'Black Swan: Why It Gotta Be Black?',
    description: "This week, the queens are challenged to prove their elegance and dancing skills by starring in a ballet based on the life of RuPaul, and on the runway, are asked to present 'extravaganza' looks.",
    type: 'dancing,acting',
    franchise: 'US'
  },
  {
    id: 'E5gHiJ6kL7mN8oPqRsTu',
    episodeNumber: 5,
    season: '5',
    title: 'Snatch Game',
    description: "The one we've all been waiting for! The queens compete in a star-studded TV game show that showcases their celebrity impersonations.",
    type: 'snatchGame,comedy,improv',
    franchise: 'US'
  },
  {
    id: 'F4fGhI5jK6lM7nOpQrSt',
    episodeNumber: 6,
    season: '5',
    title: 'Can I Get an Amen?',
    description: 'The queens test their vocal abilities as they sing in RuPauls 1980s "We Are The World"-inspired charity single.',
    type: 'comedy,singing',
    franchise: 'US'
  },
  {
    id: 'G3eFgH4iJ5kL6mNoPqRs',
    episodeNumber: 7,
    season: '5',
    title: 'RuPaul Roast',
    description: "The queens' comedy skills are put on the spot as they must roast RuPaul and the celebrity judges in front of a live audience.",
    type: 'comedy,roast',
    franchise: 'US'
  },
  {
    id: 'H2dEfG3hI4jK5lMnOpQr',
    episodeNumber: 8,
    season: '5',
    title: 'Scent of a Drag Queen',
    description: "The queens create, market and film a commercial for their own signature fragrance, then celebrate with a launch party!",
    type: 'commerical,branding,design,comedy,acting',
    franchise: 'US'
  },
  {
    id: 'I1cDeF2gH3iJ4kLmNoPq',
    episodeNumber: 9,
    season: '5',
    title: 'Drama Queens',
    description: 'The competition gets spicy as the queens star with Wilmer Valderrama in a sexy Latin telenovela acting challenge."',
    type: 'acting,comedy',
    franchise: 'US'
  },
  {
    id: 'J0bCdE1fG2hI3jKlMnOp',
    episodeNumber: 10,
    season: '5',
    title: 'Super Troopers',
    description: "The queens transform gay veterans into gorgeous queens! Then, they perform a patriotic flag salute before walking the runway showing off their new drag mothers and sisters.",
    type: 'makeover',
    franchise: 'US'
  },
  {
    id: 'K9aBcD0eF1gH2iJkLmNo',
    episodeNumber: 11,
    season: '5',
    title: 'Sugar Ball',
    description: "The race gets sticky and sweet when the queens compete in a pageant of candy inspired couture.",
    type: 'ball,design,runway',
    franchise: 'US'
  },
  {
    id: 'L8zAbC9dE0fG1hIjKlMn',
    episodeNumber: 12,
    season: '5',
    title: 'The Final Three, Hunty',
    description: ' The top three queens go to court, as Judge Ru presents their final challenge - starring in the music video for RuPauls hit "The Beginning."',
    type: 'musicVideo',
    franchise: 'US'
  },
  {
    id: 'M7yZaB8cD9eF0gHiJkLm',
    episodeNumber: 13,
    season: '5',
    title: 'Reunited!',
    description: 'Wigs fly as the queens discuss the drama of the season. Plus, both "Americas Next Drag Superstar" and "Miss Congeniality" are crowned.',
    type: 'finale',
    franchise: 'US'
  },
  {
    id: 'cGBStvuIgLFTIKNVplsm',
    episodeNumber: 1,
    season: '1',
    title: 'Drag On A Dime',
    description: 'Nine contestants must re-invent their glam drag looks using thrift store clothing and tschotchkes from the 99-cent store. Guest judge Bob Mackie stops by to help RuPaul weed out the drag queen with the least style.',
    type: 'premiere,design',
    franchise: 'US'
  },
  {
    id: 'FHx5Ph7hErDEM6JN0DPc',
    episodeNumber: 2,
    season: '1',
    title: 'Girl Group Challenge',
    description: "Wigs fly when the contestants split up into 2 rival girl groups, something guest judge Michelle Williams of Destiny's Child would know plenty about. Can the girls impress RuPaul with their lip-synching skills",
    type: 'dancing',
    franchise: 'US'
  },
  {
    id: 'S7YzTvXaDt6W3B2OcIp3',
    episodeNumber: 3,
    season: '1',
    title: 'Queens of All Media',
    description: 'The queens are tested on their multi-media prowess as they show off their talents as newscaster, product spokesperson, and talk show host to RuPaul and guest judge Debra Wilson of MADtv.',
    type: 'acting,comedy',
    franchise: 'US'
  },
  {
    id: 'F0M90yUQYPkRry4DbtM9',
    episodeNumber: 4,
    season: '1',
    title: 'Mac Viva-Glam Challenge',
    description: "Hoping to follow in the footsteps of MAC Cosmetics' first Viva Glam girl, RuPaul, the queens make their own Viva Glam screen test. Jenny Shimizu joins the panel to help judge the girls' drag queen status.",
    type: 'commercial',
    franchise: 'US'
  },
  {
    id: 'sGzsYCeFnsRjQOD6ociw',
    episodeNumber: 5,
    season: '1',
    title: 'Drag School of Charm',
    description: "The contestants make over a group of female extreme fighters into their drag daughters. Xena herself, Lucy Lawless, makes a guest appearance to judge the girls' combat prowess.",
    type: 'makeover,runway',
    franchise: 'US'
  },
  {
    id: 'wGX2NriJBMVfbUQOGlQU',
    episodeNumber: 6,
    season: '1',
    title: 'Absolut Drag Ball',
    description: "RuPaul makes the queens hit the floor in a good old fashioned drag ball inspired by Absolut's real fruit flavored vodka.",
    type: 'ball,design,runway',
    franchise: 'US'
  },
  {
    id: 'IG9XLh7uB16yxQMWoAsP',
    episodeNumber: 8,
    season: '1',
    title: 'Grand Finale',
    description: 'The last 3 queens face their final challenge while shooting the music video for RuPauls new single "Cover Girl (Put The Bass In Your Walk)." Out artist Cazwell stops by to help the judges cast their final vote.',
    type: 'finale,musicVideo',
    franchise: 'US'
  },
  {
    id: 'Mqh1p3RiEqLPi70JjFeM',
    episodeNumber: 1,
    season: '2',
    title: 'Gone with the Windows',
    description: 'After walking into the workroom, the queens meet RuPaul on set for a windy photoshoot. Then, the queens hit the runway in Gone with the Wind Couture.',
    type: 'premiere,design',
    franchise: 'US'
  },
  {
    id: 'wMdueOt5UYnznKnMTwTS',
    episodeNumber: 2,
    season: '2',
    title: 'Starrbootylicious',
    description: 'The remaining queens make their own doll, then hit the streets and the club in an all out bootylicious challenge before hitting the runway on the main stage.',
    type: 'dancing,comedy',
    franchise: 'US'
  },
  {
    id: 'vSKD4lTiCZiYXIvsGJxl',
    episodeNumber: 3,
    season: '2',
    title: 'Country Queens',
    description: "The queens chow down on some good ole' southern hospitality before they participate in a commercial campaign for home goods. Then, they hit the runway in their best western wear.",
    type: 'acting,comedy',
    franchise: 'US'
  },
  {
    id: 'EzPSQolbsIBh6yco3xY9',
    episodeNumber: 4,
    season: '2',
    title: 'The Snatch Game',
    description: 'The queens participate in the first ever Snatch Game, where they must impersonate popular figures from pop culture.',
    type: 'snatchGame,improv,comedy',
    franchise: 'US'
  },
  {
    id: '5BRxr3tLWCpcqLWj2VGJ',
    episodeNumber: 5,
    season: '2',
    title: 'Here Comes the Bride',
    description: 'The queens participate in a photo challenge featuring the contestants in and out of drag before they hit the runway in their best wedding gown couture.',
    type: 'design,runway',
    franchise: 'US'
  },
  {
    id: 'hukxS7AGmOf0146zMbUd',
    episodeNumber: 6,
    season: '2',
    title: 'Rocker Chicks',
    description: 'The queens compete in a rock n roll challenge on the main stage. An emotional lip-sync leaves one queen on the floor.',
    type: 'singing,performance',
    franchise: 'US'
  },
  {
    id: 'lQWs3Io1NQoHGJKIdORx',
    episodeNumber: 7,
    season: '2',
    title: 'Once Upon a Queen',
    description: 'In the main challenge the queens write and start on the cover of their own book. On the runway, the queens show off their book release press part realness.',
    type: 'branding,commercial,comedy',
    franchise: 'US'
  },
  {
    id: 'wu7buBiBQcl57vgujpRy',
    episodeNumber: 8,
    season: '2',
    title: 'Golden Gals',
    description: 'The remaining queens are paired with older gay gentlemen who they must transform into their mothers complete with cohesive looks and a sickening performance.',
    type: 'makeover,runway',
    franchise: 'US'
  },
  {
    id: 'WkSA4I2rVa4Z0sLl5flm',
    episodeNumber: 9,
    season: '2',
    title: 'The Diva Awards',
    description: 'The remaining queens compete in the Diva Awards, a special awards show just for them. On the runway they must present multiple looks to the judges in the style of a classic NYC ball.',
    type: 'ball,design',
    franchise: 'US'
  },
  {
    id: 'jAeploDwll1q5mZYoQMh',
    episodeNumber: 11,
    season: '2',
    title: 'Music Video Finale',
    description: "One queen is crowned America's Next Drag Superstar!",
    type: 'finale',
    franchise: 'US'
  },
  {
    id: 'USX5aQ8jbUW8W0vp1n1v',
    episodeNumber: 2,
    season: '3',
    title: 'The Queen Who Mopped Xmas',
    description: "The claws come out in the first challenge of the season when the girls are asked to create a holiday look with nothing but some tinsel, ornaments and a few well placed mistletoe.",
    type: 'premiere,design',
    franchise: 'US'
  },
  {
    id: 'i5bbpMnn3H4aDLzZas3T',
    episodeNumber: 3,
    season: '3',
    title: 'Queens in Space',
    description: "The queens participate in a psychic challenge. After, they film spoof space films before hitting the runway in their best space themed drag.",
    type: 'acting,comedy',
    franchise: 'US'
  },
  {
    id: 'OaVBVOJKaqsy72qdNFOo',
    episodeNumber: 4,
    season: '3',
    title: 'Totally Leotarded',
    description: "The girls get physical as they produce their own inspirational workout videos directed by fitness guru Susan Powter.",
    type: 'improv,comedy',
    franchise: 'US'
  },
  {
    id: 'QbAanqihLBysriDdsqlM',
    episodeNumber: 5,
    season: '3',
    title: 'QNN News',
    description: "The queens get a wake up call in the competition when they're asked to produce two morning news shows.",
    type: 'improv,comedy',
    franchise: 'US'
  },
  {
    id: 'foraxhiWR17Dim5IgoeD',
    episodeNumber: 6,
    season: '3',
    title: 'The Snatch Game',
    description: "The queens compete in a star-studded TV game show where they must pull out their best celebrity impersonations.",
    type: 'snatchGame,improv,comedy',
    franchise: 'US'
  },
  {
    id: 'IpTW0Vk7xC894yhFBMFj',
    episodeNumber: 7,
    season: '3',
    title: 'Face,Face,Face of Cakes',
    description: "The queens look good enough to eat in this episode where they're challenged to find fashion inspiration from the world of cakes.",
    type: 'design,runway',
    franchise: 'US'
  },
  {
    id: 'cnjxax07mDwW4SADs6rF',
    episodeNumber: 8,
    season: '3',
    title: 'Ru Ha Ha',
    description: "The queens perform stand-up comedy routines in front of a live studio audience!",
    type: 'comedy',
    franchise: 'US'
  },
  {
    id: 'SSvOd0SCZQP529fGCt4o',
    episodeNumber: 9,
    season: '3',
    title: 'Life, Liberty & the Pursuit of Style',
    description: "The queens create patriotic video messages for the troops.",
    type: 'comedy,improv',
    franchise: 'US'
  },
  {
    id: 'SSvOd9SCZQP529fGCt4o',
    episodeNumber: 10,
    season: '3',
    title: 'RuPaul-a-Palooza',
    description: 'The queens record and perform their own version of Rus new song, "Superstar", in one of six distinct musical styles!',
    type: 'singing',
    franchise: 'US'
  },
  {
    id: 'eTyxjlhGRnpFSEKCmeEf',
    episodeNumber: 11,
    season: '3',
    title: "RuPaul's Hair Extravaganza",
    description: "The queens wig out when they have to compete in a fantasy hair show.",
    type: 'design,runway',
    franchise: 'US'
  },
  {
    id: 'tn0bBBhe7SQmFxJSSmBe',
    episodeNumber: 12,
    season: '3',
    title: 'Jocks in Frocks',
    description: "The queens must transform a group of All-American straight jocks into their drag sisters.",
    type: 'makeover,runway',
    franchise: 'US'
  },
  {
    id: 'qAg4vpHxUFLo4TecPkEi',
    episodeNumber: 13,
    season: '3',
    title: 'Make Dat Money',
    description: "The queens break the bank as they perform in a pageant of dresses made out of money.",
    type: 'design,runway',
    franchise: 'US'
  },
  {
    id: 'qqUvS27r16qHVVRUjH8i',
    episodeNumber: 15,
    season: '3',
    title: 'Grand Finale',
    description: 'The remaining three queens face their final challenge when they are asked to transform into video vixens for the music video to Rus latest single, "Champion."',
    type: 'finale',
    franchise: 'US'
  },
  {
    id: 'dMxaevygPUv9TfbTMY27',
    episodeNumber: 1,
    season: '4',
    title: 'RuPocalypse Now!',
    description: 'In the season 4 premiere, a new crop of queens enter the workroom, participate in an atomic photoshoot then hit the runway in their best post-apocalyptic drag.',
    type: 'premiere,design',
    franchise: 'US'
  },
  {
    id: 'roXKIrbcMD8Td8XeCnjG',
    episodeNumber: 2,
    season: '4',
    title: "WTF!: Wrestling's Trashiest Fighters",
    description: 'The remaining queens participate in a group acting challenge all about wrestling! On the runway, the queens don their most girly-girl drag.',
    type: 'acting,comedy',
    franchise: 'US'
  },
  {
    id: '3HRsnfjNSaUhcjrFv7zV',
    episodeNumber: 3,
    season: '4',
    title: 'Glamazons vs. Champions',
    description: 'The queens participate in an infomercial-style challenge where they must sell one of two albums, Glamazon and Champion. On the runway, the queens dress up in silver and gold.',
    type: '',
    franchise: 'US'
  },
  {
    id: 'pL7F8by3HhciEdqFNPgp',
    episodeNumber: 4,
    season: '4',
    title: 'Queens Behind Bars',
    description: 'The queens participate in an acting challenge where they split into two casts and create a spoof of a classic sitcom. On the runway, the queens are asked to dress up for their television premiere.',
    type: 'acting,comedy',
    franchise: 'US'
  },
  {
    id: 'cXFymOug9STDeSI8HRGv',
    episodeNumber: 5,
    season: '4',
    title: 'Snatch Game',
    description: 'The queens participate in the infamous Snatch Game, where they must impersonate pop culture celebrities. On the runway they are challenged to dress to impress.',
    type: 'snatchGame,comedy,improv',
    franchise: 'US'
  },
  {
    id: 'Nxbsvo7evL5hEJ0oOtky',
    episodeNumber: 6,
    season: '4',
    title: 'Float Your Boat',
    description: 'The remaining queens are assigned various colors of the pride flag and must decorate a parade boat to hit the main stage in.',
    type: 'design,runway',
    franchise: 'US'
  },
  {
    id: '5vZJvlAIEoTi2avwtRSn',
    episodeNumber: 7,
    season: '4',
    title: 'Dragazines',
    description: 'The remaining queens design magazine covers that are sure to sell hot off the press. On the runway, the queens dress for their magazine release party!',
    type: 'branding',
    franchise: 'US'
  },
  {
    id: 'VESroECLZ4qWifubH0z0',
    episodeNumber: 8,
    season: '4',
    title: 'Frenemies',
    description: 'The queens participate in a polygraph test. After, the queens participate in a musical challenge where they are paired up with their perfect frenemy.',
    type: 'singing,comedy',
    franchise: 'US'
  },
  {
    id: 'Ma66JpRr8v9x9sTS8sB9',
    episodeNumber: 9,
    season: '4',
    title: 'Frock the Vote!',
    description: 'The remaining queens participate in an election challenge hosted by Dan Savage. After, the dolls hit the runway in their best inaugural drag.',
    type: 'improv,comedy',
    franchise: 'US'
  },
  {
    id: 'WKMOia8CxtyXS7MKKWBD',
    episodeNumber: 10,
    season: '4',
    title: "DILFs: Dads I'd Like to Frock",
    description: 'The remaining queens must turn hot dads into their drag sisters.',
    type: 'makeover,runway',
    franchise: 'US'
  },
  {
    id: 'zfF9QJUuzukdxxE1qIzB',
    episodeNumber: 11,
    season: '4',
    title: 'The Fabulous Bitch Ball',
    description: 'The finalists must compete in the Fabulous Bitch Ball where they must serve their different looks and perform a musical number in front of the judges.',
    type: '',
    franchise: 'US'
  },
  {
    id: 'Hid9puJ8Yw5YAsSdtNvk',
    episodeNumber: 13,
    season: '4',
    title: 'The Final Three',
    description: "The final three film a music video for RuPaul's song Glamazon. Then the queens walk the runway in their best drag for their final walk on the main stage.",
    type: 'musicVideo',
    franchise: 'US'
  },
  {
    id: 'kRnUaFcMnBh5OQ0pkOtV',
    episodeNumber: 14,
    season: '4',
    title: 'Reunited',
    description: "The queens of season 4 of RuPaul's Drag Race Reunite and a winner is announced!",
    type: 'finale',
    franchise: 'US'
  },

].sort((a, b) => a.episodeNumber - b.episodeNumber);

export const lipsyncs = [

  {
    id: 'Q9wErT7yLpZ2xV5nHaKb',
    title: "Supermodel (You Better Work)",
    episode: 'us1e1',
    genre: "dance,pop",
    artist: "RuPaul",
    season: '1',
    franchise: 'US'
  },
  {
    id: 'M2cVxT8nWpQ5zJ6rYfLh',
    title: "We Break the Dawn",
    episode: 'us1e2',
    genre: "dance,pop",
    artist: "Michelle Williams",
    season: '1',
    franchise: 'US'
  },
  {
    id: 'S1vXyT4kZ7rNpM6wQbUf',
    title: "The Greatest Love of All",
    episode: 'us1e3',
    genre: "ballad,pop",
    artist: "Whitney Houston",
    season: '1',
    franchise: 'US'
  },
  {
    id: 'P5zNwX8rLcY2jH9mTqVk',
    title: "Would I Lie to You?",
    episode: 'us1e4',
    genre: "pop,soul",
    artist: "Eurythmics",
    season: '1',
    franchise: 'US'
  },
  {
    id: 'R4kLpV2yW9xNtH5mQzJs',
    title: "Stronger",
    episode: 'us1e5',
    genre: "pop",
    artist: "Britney Spears",
    season: '1',
    franchise: 'US'
  },
  {
    id: 'A7kLpN3vX9bJtQ2rWsMf',
    title: "Shackles (Praise You)",
    episode: 'us1e6',
    genre: "gospel,R&B",
    artist: "Mary Mary",
    season: '1',
    franchise: 'US'
  },
  {
    id: 'J6nQwV3xP8zMrT1cYfKa',
    title: "Cover Girl",
    episode: 'us1e9',
    genre: "dance,pop",
    artist: "RuPaul",
    season: '1',
    franchise: 'US'
  },
  {
    id: 'F9tXwQ3pVb7sMz6hYcKr',
    title: "Cover Girl",
    episode: 'us2e1',
    genre: "dance,pop",
    artist: "RuPaul",
    season: '2',
    franchise: 'US'
  },
  {
    id: 'F9t5f6hg6b7sMz6hYcKr',
    title: "My Lovin' (You're Never Gonna Get It)",
    episode: 'us2e2',
    genre: "funk,pop,r&b",
    artist: "En Vogue",
    season: '2',
    franchise: 'US'
  },
  {
    id: 'F45g645g6b7sMz6h90Kr',
    title: "I Hear You Knocking",
    episode: 'us2e3',
    genre: "country",
    artist: "Wynonna Judd",
    season: '2',
    franchise: 'US'
  },
  {
    id: 'Q1sLpT9nXv4qMw6bHaYr',
    title: "Two of Hearts",
    episode: 'us2e4',
    genre: "dance,pop",
    artist: "Stacey Q",
    season: '2',
    franchise: 'US'
  },
  {
    id: 'T8mQwK5rVp1tLn3xHaFs',
    title: "Carry On",
    episode: 'us2e5',
    genre: "electronica,house,disco,techno",
    artist: "Martha Wash",
    season: '2',
    franchise: 'US'
  },
  {
    id: 'M7pXvB2mLq5sWn9tHaYs',
    title: "Black Velvet",
    episode: 'us2e6',
    genre: "rock,blues",
    artist: "Alannah Myles",
    season: '2',
    franchise: 'US'
  },
  {
    id: 'Z4nQxY2vLp6sHw9bMzFr',
    title: "He's the Greatest Dancer",
    episode: 'us2e7',
    genre: "disco,r&b,funk,soul",
    artist: "Sister Sledge",
    season: '2',
    franchise: 'US'
  },
  {
    id: 'Z4nQxY2vcd6sHw9bMzFr',
    title: "Shake Your Love",
    episode: 'us2e8',
    genre: "dance,pop",
    artist: "Debbie Gibson",
    season: '2',
    franchise: 'US'
  },
  {
    id: 'N6qVrP1lYb8tXw3sHaMz',
    title: "Something He Can Feel",
    episode: 'us2e9',
    genre: "r&b,soul",
    artist: "Aretha Franklin",
    season: '2',
    franchise: 'US'
  },
  {
    id: 'K2rLpN8yWb3tQx6sHaVm',
    title: "The Right Stuff",
    episode: 'us3e2',
    genre: "pop",
    artist: "Vanessa Williams",
    season: '3',
    franchise: 'US'
  },
  {
    id: 'qR3bVt9YkL6nFw2pxZdM',
    title: "Bad Romance",
    episode: 'us3e3',
    genre: "pop,rock",
    artist: "Lady Gaga",
    season: '3',
    franchise: 'US'
  },
  {
    id: 'tS5kNz1WoVrQ8hYdPfLg',
    title: "Don’t Leave Me This Way",
    episode: 'us3e4',
    genre: "soul,disco",
    artist: "Thelma Houston",
    season: '3',
    franchise: 'US'
  },
  {
    id: 'tS5kNz1W4f45GhYdPfL0',
    title: "Meeting in the Ladies Room",
    episode: 'us3e5',
    genre: "pop,r&b",
    artist: "Klymaxx",
    season: '3',
    franchise: 'US'
  },
  {
    id: '4f5cfV1W4f45GhYdPfL0',
    title: "Looking for a New Love",
    episode: 'us3e6',
    genre: "r&b,soul",
    artist: "Jody Watley",
    season: '3',
    franchise: 'US'
  },
  {
    id: '4f5gVV1W4f45GhYdPfL0',
    title: "Knock on Wood",
    episode: 'us3e7',
    genre: "pop,disco",
    artist: "Amii Stewart",
    season: '3',
    franchise: 'US'
  },
  {
    id: 'X8tQwL3pVr7sMz6hYbKe',
    title: "MacArthur Park",
    episode: 'us3e8',
    genre: "disco,pop",
    artist: "Donna Summer",
    season: '3',
    franchise: 'US'
  },
  {
    id: 'mH6zPt4YkL9qRv1jXbSw',
    title: "Mickey (Spanish Version)",
    episode: 'us3e9',
    genre: "dance,pop",
    artist: "Toni Basil",
    season: '3',
    franchise: 'US'
  },
  {
    id: 'zF9vWt8YoPlQ2rNkHsDm',
    title: "Believe",
    episode: 'us3e10',
    genre: "dance,pop",
    artist: "Cher",
    season: '3',
    franchise: 'US'
  },
  {
    id: 'zF9vWt845f672rNkHsDm',
    title: "Even Angels",
    episode: 'us3e11',
    genre: "r&b",
    artist: "Fantasia Barrino",
    season: '3',
    franchise: 'US'
  },
  {
    id: 'zF9vW909op672rNkHsDm',
    title: "Straight Up",
    episode: 'us3e12',
    genre: "dance pop,funk",
    artist: "Paula Abdul",
    season: '3',
    franchise: 'US'
  },
  {
    id: 'zed456S45f672rNkHsDm',
    title: "I Think About You",
    episode: 'us3e13',
    genre: "classic soul,disco",
    artist: "Patti LaBelle",
    season: '3',
    franchise: 'US'
  },
  {
    id: 'vP5qLr8YkMnW2xFaZtJs',
    title: "Champion (DJ BunJoe’s Olympic Mix)",
    episode: 'us3e15',
    genre: "dance,electronic",
    artist: "RuPaul",
    season: '3',
    franchise: 'US'
  },
  {
    id: 'Zfj7QxY3KdPmNrT9sLaH',
    title: "Toxic",
    episode: 'us4e1',
    genre: "pop",
    artist: "Britney Spears",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'Gq2WvN8yLpRmX5tHaUkM',
    title: "Bad Girls",
    episode: 'us4e2',
    genre: "disco,classic",
    artist: "Donna Summer",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'Yp4KtL9wQrXvM2hBaUsN',
    title: "This Will Be (An Everlasting Love)",
    episode: 'us4e3',
    genre: "soul",
    artist: "Natalie Cole",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'Nw6JrX1pLdQfY8tSvBaK',
    title: "Trouble",
    episode: 'us4e4',
    genre: "pop",
    artist: "Pink",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'Mt5XsV2yQoRjP9kLaUhG',
    title: "Vogue",
    episode: 'us4e5',
    genre: "dance,pop",
    artist: "Madonna",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'Fp8YzR7nKqLcB1vMaUsN',
    title: "Born This Way",
    episode: 'us4e6',
    genre: "pop",
    artist: "Lady Gaga",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'Ra3QvK5pLdXnM8hTyUsZ',
    title: "Mi Vida Loca (My Crazy Life)",
    episode: 'us4e7',
    genre: "country,pop",
    artist: "Pam Tillis",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'Uw1PzV9yQoRjX4kLaHtM',
    title: "It’s Raining Men... The Sequel",
    episode: 'us4e8',
    genre: "dance,house",
    artist: "Martha Wash & RuPaul",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'Bx6YnQ2wLoRtP9kMaUsZ',
    title: "I've Got to Use My Imagination",
    episode: 'us4e9',
    genre: "soul",
    artist: "Gladys Knight & the Pips",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'Cz7QtL5pRdVmB2nXaUsH',
    title: "(You Make Me Feel Like) A Natural Woman",
    episode: 'us4e10',
    genre: "soul,R&B",
    artist: "Aretha Franklin",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'Vz8LpK1yQwRmX3tHaUsN',
    title: "No One Else on Earth",
    episode: 'us4e11',
    genre: "country,rock",
    artist: "Wynonna Judd",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'Jy3RxQ5pLdTvM2hKaUsZ',
    title: "Glamazon",
    episode: 'us4e13',
    genre: "dance,pop",
    artist: "RuPaul",
    season: '4',
    franchise: 'US'
  },
  {
    id: 'T4hK9qLpW2xMvZ7bSdEr',
    title: "Party in the U.S.A.",
    episode: 'us5e1',
    genre: "pop",
    artist: "Miley Cyrus",
    season: '5',
    franchise: 'US'
  },
  {
    id: 'F8yUvB3pZ1nWqJ0mRgHt',
    title: "Only Girl (In the World)",
    episode: 'us5e2',
    genre: "dance,pop",
    artist: "Rihanna",
    season: '5',
    franchise: 'US'
  },
  {
    id: 'L2sFpY6mQ4rXzT9nVoJa',
    title: "When I Grow Up",
    episode: 'us5e3',
    genre: "pop",
    artist: "The Pussycat Dolls",
    season: '5',
    franchise: 'US'
  },
  {
    id: 'U1cJnK8tP5xRqY3bLmVz',
    title: "Oops!... I Did It Again",
    episode: 'us5e4',
    genre: "pop",
    artist: "Britney Spears",
    season: '5',
    franchise: 'US'
  },
  {
    id: 'M7dNxR2vK9bCeW0tPyLs',
    title: "Take Me Home",
    episode: 'us5e5',
    genre: "classic,pop",
    artist: "Cher",
    season: '5',
    franchise: 'US'
  },
  {
    id: 'E3vQkL8mBpX2fNtY4sUw',
    title: "I’m So Excited",
    episode: 'us5e6',
    genre: "pop,disco",
    artist: "The Pointer Sisters",
    season: '5',
    franchise: 'US'
  },
  {
    id: 'C5rJpN4uVmK7xQ1bWzHs',
    title: "Whip My Hair",
    episode: 'us5e7',
    genre: "pop",
    artist: "Willow Smith",
    season: '5',
    franchise: 'US'
  },
  {
    id: 'C5r456fGVmK7xQ1bWzHs',
    title: "Ain't Nothin' Goin' on But the Rent",
    episode: 'us5e8',
    genre: "dance,r&b",
    artist: "Gwen Guthrie",
    season: '5',
    franchise: 'US'
  },
  {
    id: '4f5S2N4uVmK7xQ1bWzHs',
    title: "Cold Hearted",
    episode: 'us5e9',
    genre: "pop,dance pop",
    artist: "Paula Abdul",
    season: '5',
    franchise: 'US'
  },
  {
    id: 'C5rJpN4ulolsWQ1bWzH0',
    title: "(It Takes) Two to Make It Right",
    episode: 'us5e10',
    genre: "pop,dance pop,house",
    artist: "Seduction",
    season: '5',
    franchise: 'US'
  },
  {
    id: '4f5RRp0ulolsWQ1bWzH0',
    title: "Malambo No. 1",
    episode: 'us5e11',
    genre: "classical,musica tropicale",
    artist: "Yma Sumac",
    season: '5',
    franchise: 'US'
  },
  {
    id: '4f54f5dEE3lsWQ1bWzH0',
    title: "The Beginning",
    episode: 'us5e12',
    genre: "dance,electronic",
    artist: "RuPaul",
    season: '5',
    franchise: 'US'
  },
  {
    id: 'Z1xW2vT3qE4rS5yU6oLp',
    title: "Express Yourself",
    episode: 'us6e1',
    genre: "pop,classic",
    artist: "Madonna",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'Y7kJ8hF9mN0bQlR2pXzS',
    title: "Turn the Beat Around",
    episode: 'us6e2',
    genre: "disco",
    artist: "Vicki Sue Robinson",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'X3dC4vB5nM6yL7qW8eRt',
    title: "Shake It Up",
    episode: 'us6e3',
    genre: "pop",
    artist: "Selena Gomez",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'W9fV0gH1jK2lM3oN4pQg',
    title: "I'm Every Woman",
    episode: 'us6e4',
    genre: "soul,disco",
    artist: "Chaka Khan",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'V5rN6tB7yU8iO9pA0sDf',
    title: "Head to Toe",
    episode: 'us6e5',
    genre: "pop",
    artist: "Lisa Lisa & Cult Jam",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'U1qJ2wK3eL4oZ5pX6cVb',
    title: "Whatta Man",
    episode: 'us6e6',
    genre: "hip-hop,r&b",
    artist: "Salt-N-Pepa, En Vogue",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'T7yH8uJ9iK0lM1nOpQrS',
    title: "Point of No Return",
    episode: 'us6e7',
    genre: "freestyle,pop",
    artist: "Exposé",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'S2dF3gH4jK5lM6nPoRtU',
    title: "Stupid Girls",
    episode: 'us6e8',
    genre: "pop",
    artist: "P!nk",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'R9zY0xC1vB2nM3oNpQwL',
    title: "Vibeology",
    episode: 'us6e9',
    genre: "pop,dance",
    artist: "Paula Abdul",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'Q8eR7tY6uI5oP4lK3pNz',
    title: "Think",
    episode: 'us6e10',
    genre: "soul,r&b",
    artist: "Aretha Franklin",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'P3oI4uY5tR6eW7qM8aSv',
    title: "Stronger (What Doesn’t Kill You)",
    episode: 'us6e11',
    genre: "pop,rock",
    artist: "Kelly Clarkson",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'O0pQ1wE2rT3yU4iO5pLa',
    title: "Sissy That Walk",
    episode: 'us6e12',
    genre: "dance,pop",
    artist: "RuPaul",
    season: '6',
    franchise: 'US'
  },
  {
    id: 'aH3kLm9XyVPq0rT6zHgS',
    title: "Geronimo",
    episode: 'us7e1',
    genre: "pop",
    artist: "RuPaul ft. Lucian Piane",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'B8fYgJ6L0RbQuMnsWVcT',
    title: "Twist of Fate",
    episode: 'us7e2',
    genre: "pop",
    artist: "Olivia Newton-John",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'Cq7TvP3cFeW9YjKLudRo',
    title: "I Was Gonna Cancel",
    episode: 'us7e3',
    genre: "dance,pop",
    artist: "Kylie Minogue",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'D5uXbZ1mGhCvPqDkRQ7L',
    title: "Dreaming",
    episode: 'us7e4',
    genre: "new wave,rock",
    artist: "Blondie",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'E4wNc0RPGqZdSy8xEuJT',
    title: "Lovergirl",
    episode: 'us7e5',
    genre: "r&b",
    artist: "Teena Marie",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'F2rKXTVqLNCiMfY7Pj9W',
    title: "Break Free",
    episode: 'us7e6',
    genre: "pop,dance",
    artist: "Ariana Grande ft. Zedd",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'G9ncJQYVpKuHz4t0gBoR',
    title: "No More Lies",
    episode: 'us7e7',
    genre: "r&b",
    artist: "Michel'le",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'H1XIr7G4kQvPmZBt0NjO',
    title: "I Think We're Alone Now",
    episode: 'us7e8',
    genre: "pop,rock",
    artist: "Tiffany",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'I5oLhRxYDWk8Q4gIgSPb',
    title: "Really Don't Care",
    episode: 'us7e9',
    genre: "pop",
    artist: "Demi Lovato ft. Cher Lloyd",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'J0UtEe5MHoSNw7pjIB2F',
    title: "Show Me Love",
    episode: 'us7e10',
    genre: "house,club",
    artist: "Robin S.",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'K7yZcPnBO3VXwLmi6rUg',
    title: "Roar",
    episode: 'us7e11',
    genre: "pop",
    artist: "Katy Perry",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'L9sOLf1PZxVNB2YdemIR',
    title: "Born Naked",
    episode: 'us7e12',
    genre: "dance,ruPaul",
    artist: "RuPaul",
    season: '7',
    franchise: 'US'
  },
  {
    id: 'bY56VqztrKPlh5Nc9UXe',
    title: "Love Shack",
    episode: 'us9e2',
    genre: "pop rock,dance rock,new wave",
    artist: "The B-52's",
    season: '9',
    franchise: 'US'
  },
  {
    id: 'Kmv0HzAGJ9XUILpRr2yE',
    title: "Holding Out for a Hero",
    episode: 'us9e3',
    genre: "pop rock,power pop",
    artist: "Bonnie Tyler",
    season: '9',
    franchise: 'US'
  },
  {
    id: 'nz7GSAqvHDMCoiRWXx9b',
    title: "I Wanna Go",
    episode: 'us9e4',
    genre: "dance pop,electropop",
    artist: "Britney Spears",
    season: '9',
    franchise: 'US'
  },
  {
    id: 'Q4lZRUyx5vEipMg2sOhT',
    title: "Woman Up",
    episode: 'us9e5',
    genre: "pop",
    artist: "Meghan Trainor",
    season: '9',
    franchise: 'US'
  },
  {
    id: 'wUeJmT3N0PbGl4qV5rk8',
    title: "Music",
    episode: 'us9e6',
    genre: "dance pop",
    artist: "Madonna",
    season: '9',
    franchise: 'US'
  },
  {
    id: 'pZMyuFNK0Gojtq9XiVc1',
    title: "Finally",
    episode: 'us9e7',
    genre: "house, dance",
    artist: "CeCe Peniston",
    season: '9',
    franchise: 'US'
  },
  {
    id: 'Rys2GBuvz9QXnpT0caYW',
    title: "Baby I'm Burnin'",
    episode: 'us9e8',
    genre: "country pop, country",
    artist: "Dolly Parton",
    season: '9',
    franchise: 'US'
  },
  {
    id: 'j5Q6XURsLYeIzt1nk7dv',
    title: "Greedy",
    episode: 'us9e9',
    genre: "pop",
    artist: "Ariana Grande",
    season: '9',
    franchise: 'US'
  },
  {
    id: 'D2wzjK4ILxoNqVS8Pm9c',
    title: "Cool For The Summer",
    episode: 'us9e10',
    genre: "electropop",
    artist: "Demi Lovato",
    season: '9',
    franchise: 'US'
  },
  {
    id: 'X0GnYfzEbHL9w5UtZsIr',
    title: "Macho Man",
    episode: 'us9e11',
    genre: "disco",
    artist: "Village People",
    season: '9',
    franchise: 'US'
  },
  {
    id: 'LwN5g9FUGaxIeTVR34oQ',
    title: "U Wear It Well",
    episode: 'us9e12',
    genre: "pop",
    artist: "RuPaul",
    season: '9',
    franchise: 'US'
  },
  {
    id: 'Dk5qXIHU1ZPjloNCdrsc',
    title: "Ain't No Other Man",
    episode: 'us10e1',
    genre: "pop,funk,r&b,soul",
    artist: "Christina Aguilera",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5qXIHU1ZPjloNCdrs',
    title: "Best of My Love",
    episode: 'us10e2',
    genre: "funk,disco,soul,r&b",
    artist: "The Emotions",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5qXIHU1ZPjloNCdr',
    title: "Celebrity Skin",
    episode: 'us10e3',
    genre: "rock,pop rock,grunge",
    artist: "Hole",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5qXIHU1ZPjloNCd',
    title: "Pound The Alarm",
    episode: 'us10e4',
    genre: "pop/hip-hop",
    artist: "Nicki Minaj",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5qXIHU1ZPjloN',
    title: "Man! I Feel Like a Woman",
    episode: 'us10e5',
    genre: "country pop,country,southern rock",
    artist: "Shania Twain",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5qXIHU1ZPjlo',
    title: "I'm Coming Out",
    episode: 'us10e6',
    genre: "r&b,pop,soul,dance,electronic",
    artist: "Diana Ross",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5qXIHU1ZPjloNCc',
    title: "Cut To The Feeling",
    episode: 'us10e7',
    genre: "pop",
    artist: "Carly Rae Jepsen",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5qXIPjloNCdrsc',
    title: "Groove Is in the Heart",
    episode: 'us10e8',
    genre: "pop,dance,electronic",
    artist: "Deee-Lite",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5qXIHU1ZCdrsc',
    title: "New Attitude",
    episode: 'us10e9',
    genre: "pop,synth-pop,r&b,new wave",
    artist: "Patti Labelle",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5q1ZPjloNCdrsc',
    title: "Good As Hell",
    episode: 'us10e10',
    genre: "alternative,indie,pop",
    artist: "Lizzo",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5qXZPjloNCdrsc',
    title: "Nasty Girl",
    episode: 'us10e11',
    genre: "synth-funk,disco",
    artist: "Vanity 6",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5qXPjloNCdrsc',
    title: "Call Me Mother",
    episode: 'us10e12',
    genre: "dance,electronic,pop",
    artist: "RuPaul",
    season: '10',
    franchise: 'US'
  },
  {
    id: 'Dk5qXPjld4frEsc',
    title: "Best of Both Worlds",
    episode: 'us11e1',
    genre: "pop,pop rock,teen pop,dance",
    artist: "Hannah Montana",
    season: '11',
    franchise: 'US'
  },
  {
    id: 'Dk545g9DDNCdrsc',
    title: "Work Bitch",
    episode: 'us11e2',
    genre: "dance, pop,dance pop,teen pop",
    artist: "Britney Spears",
    season: '11',
    franchise: 'US'
  },
  {
    id: 'Dk545g9DDNCd45g',
    title: "Waiting For Tonight (Hex Hector Remix)",
    episode: 'us11e3',
    genre: "dance,dance pop,r&b",
    artist: "Jennifer Lopez",
    season: '11',
    franchise: 'US'
  },
  {
    id: 'bgCNNnv0ilrI7kb4lpAL',
    title: "Living in America",
    episode: 'us11e4',
    genre: "funk,soul,r&b",
    artist: "James Brown",
    season: '11',
    franchise: 'US'
  },
  {
    id: 'STfIVOdzEW2V8GSYRHIM',
    title: "I’m Your Baby Tonight",
    episode: 'us11e5',
    genre: "pop,r&b",
    artist: "Whitney Houston",
    season: '11',
    franchise: 'US'
  },
  {
    id: 'net3ukhcy736Id2QlMI6',
    title: "Last Dance",
    episode: 'us11e6',
    genre: "disco",
    artist: "Donna Summer",
    season: '11',
    franchise: 'US'
  },
  {
    id: 'JbJ42DX4n2K06uSTyXYT',
    title: "Strut",
    episode: 'us11e7',
    genre: "pop,dance pop",
    artist: "Sheena Easton",
    season: '11',
    franchise: 'US'
  },
  {
    id: '3marpetpp2G72DCm6la2',
    title: "Sorry Not Sorry",
    episode: 'us11e8',
    genre: "pop,r&b",
    artist: "Demi Lovato",
    season: '11',
    franchise: 'US'
  },
  {
    id: '3marpetvy70S2DCm6la2',
    title: "Hood Boy",
    episode: 'us11e9',
    genre: "classic soul,dance pop",
    artist: "Fantasia Barrino",
    season: '11',
    franchise: 'US'
  },
  {
    id: 'dgw35bSkhHg5IckaObqy',
    title: "No More Drama",
    episode: 'us11e10',
    genre: "hip-hop,hip-hop soul,r&b",
    artist: "Mary J. Blige",
    season: '11',
    franchise: 'US'
  },
  {
    id: 'EskaT33TAByfYQ8uEvjS',
    title: "No Scrubs",
    episode: 'us11e11',
    genre: "r&b,hip hop soul",
    artist: "TLC",
    season: '11',
    franchise: 'US'
  },
  {
    id: 'EskaT34lPPyfYQ8uEvjS',
    title: "Pride: A Deeper Love",
    episode: 'us11e12',
    genre: "dance,electronic,house,amapiano",
    artist: "Aretha Franklin",
    season: '11',
    franchise: 'US'
  },
  {
    id: 'F3qLm7XyZpRt9Uv2KdHs',
    title: "Applause",
    episode: 'us8e1',
    genre: "pop,dance,electropop",
    artist: "Lady Gaga",
    season: '8',
    franchise: 'US'
  },
  {
    id: 'Q6pXo2JmVkNr9Lb7ZwTy',
    title: "I Will Survive",
    episode: 'us8e2',
    genre: "disco,soul,pop",
    artist: "Gloria Gaynor",
    season: '8',
    franchise: 'US'
  },
  {
    id: 'M7nYh5QvWxZo8Lp4EkJr',
    title: "Mesmerized (FreeMasons Remix)",
    episode: 'us8e3',
    genre: "pop,disco,funk",
    artist: "Faith Evans",
    season: '8',
    franchise: 'US'
  },
  {
    id: 'A9wTr2KjXpBm6Zn3VyLf',
    title: "Call Me",
    episode: 'us8e4',
    genre: "rock,new wave,pop",
    artist: "Blondie",
    season: '8',
    franchise: 'US'
  },
  {
    id: 'B1xVq8LzRpSn4Gy6KdPf',
    title: "Causing a Commotion",
    episode: 'us8e5',
    genre: "pop,dance,pop rock",
    artist: "Madonna",
    season: '8',
    franchise: 'US'
  },
  {
    id: 'K8rGh4WnDzLm7Jp3VsQy',
    title: "I Love It",
    episode: 'us8e6',
    genre: "pop,dance pop",
    artist: "Icona Pop",
    season: '8',
    franchise: 'US'
  },
  {
    id: 'R2mBn9XpWtQy3Fk6JsLv',
    title: "And I Am Telling You I'm Not Going",
    episode: 'us8e7',
    genre: "musical",
    artist: "Jennifer Holliday",
    season: '8',
    franchise: 'US'
  },
  {
    id: 'Z5lJr7TkVpQo8Xn4DhFs',
    title: "You Make Me Feel (Mighty Real)",
    episode: 'us8e8',
    genre: "disco,r&b",
    artist: "Sylvester",
    season: '8',
    franchise: 'US'
  },
  {
    id: 'N4dQm1YkZsWc6Jp8HvLt',
    title: "The Realness",
    episode: 'us8e9',
    genre: "dance,house,pop",
    artist: "RuPaul",
    season: '8',
    franchise: 'US'
  },
];

export const seasons = [
  {
    id: '5KJbVdxQKsW8ON9ogXiq',
    seasonNumber: '1',
    franchise: 'US',
  },
  {
    id: 'en1MU7un0ZfxGHINEaZu',
    seasonNumber: '2',
    franchise: 'US',
  },
  {
    id: 'bQSUeaq0vyw92zHmKQ3f',
    seasonNumber: '3',
    franchise: 'US',
  },
  {
    id: 'H0laHTBJT4ApWASo0r17',
    seasonNumber: '4',
    franchise: 'US',
  },
  {
    id: 'txf84f43S7HHEZluh2Vl',
    seasonNumber: '5',
    franchise: 'US',
  },
  {
    id: 'txf8d5E897HHEZBcNCVl',
    seasonNumber: '6',
    franchise: 'US',
  },
  {
    id: 'txf8d5E2LXgwEZBcNCVl',
    seasonNumber: '7',
    franchise: 'US',
  },
  {
    id: 'txf8456ld0gwEZBOOCVl',
    seasonNumber: '8',
    franchise: 'US',
  },
  {
    id: 'txf82f5ld0gwEZBcNCVl',
    seasonNumber: '9',
    franchise: 'US',
  },
  {
    id: 'e4QVuMqKSe300LfZ8BF2',
    seasonNumber: '10',
    franchise: 'US',
  },
  {
    id: 'txf82x1awXgwEZBcNCVl',
    seasonNumber: '11',
    franchise: 'US',
  },
];
