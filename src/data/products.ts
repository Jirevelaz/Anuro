export type Badge = "AGOTADO" | "PREVENTA" | "1 POR PERSONA" | "NUEVO"

export type Product = {
  slug: string
  title: string
  artist?: string
  price: number
  subscriberPrice?: number
  originalPrice?: number
  image: string
  badges?: Badge[]
  collection: "disco-del-mes" | "ediciones-especiales" | "preventas" | "accesorios"
}

const fmt = (n: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(n)

export const formatPrice = fmt

export const discoDelMes: Product[] = [
  {
    slug: "adrian-quesada-boleros-psicodelicos-vol-2",
    title: "Boleros Psicodélicos Vol. 2 (DDM)",
    artist: "Adrian Quesada",
    price: 920,
    subscriberPrice: 820,
    image: "/images/album-05.jpg",
    badges: ["1 POR PERSONA"],
    collection: "disco-del-mes",
  },
  {
    slug: "caribou-honey-ddm",
    title: "Honey (DDM)",
    artist: "Caribou",
    price: 920,
    originalPrice: 920,
    subscriberPrice: 810,
    image: "/images/album-04.jpg",
    collection: "disco-del-mes",
  },
  {
    slug: "khruangbin-the-universe-smiles-upon-you-ii",
    title: "The Universe Smiles Upon You II",
    artist: "Khruangbin",
    price: 990,
    subscriberPrice: 890,
    originalPrice: 990,
    image: "/images/album-06.jpg",
    badges: ["AGOTADO"],
    collection: "disco-del-mes",
  },
  {
    slug: "buscabulla-se-amaba-asi-ddm",
    title: "Se Amaba Así (DDM)",
    artist: "Buscabulla",
    price: 820,
    originalPrice: 820,
    subscriberPrice: 720,
    image: "/images/album-12.jpg",
    collection: "disco-del-mes",
  },
  {
    slug: "wild-nothing-nocturne-ddm",
    title: "Nocturne (DDM)",
    artist: "Wild Nothing",
    price: 920,
    subscriberPrice: 820,
    image: "/images/album-08.jpg",
    badges: ["AGOTADO"],
    collection: "disco-del-mes",
  },
  {
    slug: "unknown-mortal-orchestra-v",
    title: "V (DDM)",
    artist: "Unknown Mortal Orchestra",
    price: 990,
    subscriberPrice: 890,
    image: "/images/album-05.jpg",
    badges: ["AGOTADO"],
    collection: "disco-del-mes",
  },
  {
    slug: "mei-semones-animaru",
    title: "Animaru (DDM)",
    artist: "Mei Semones",
    price: 890,
    subscriberPrice: 790,
    image: "/images/album-06.jpg",
    collection: "disco-del-mes",
  },
  {
    slug: "future-islands-people-who-arent",
    title: "People Who Aren't There Anymore",
    artist: "Future Islands",
    price: 990,
    subscriberPrice: 890,
    image: "/images/album-09.jpg",
    badges: ["AGOTADO"],
    collection: "disco-del-mes",
  },
]

export const edicionesEspeciales: Product[] = [
  {
    slug: "rosalia-lux",
    title: "Lux",
    artist: "Rosalía",
    price: 1100,
    subscriberPrice: 990,
    image: "/images/album-01.jpg",
    collection: "ediciones-especiales",
  },
  {
    slug: "rels-b-a-new-star",
    title: "a new star (1 9 9 3)",
    artist: "Rels B",
    price: 800,
    image: "/images/album-02.jpg",
    collection: "ediciones-especiales",
  },
  {
    slug: "harry-styles-kiss-all-the-time",
    title: "Kiss All The Time. Disco, Occasionally",
    artist: "Harry Styles",
    price: 990,
    subscriberPrice: 880,
    originalPrice: 990,
    image: "/images/album-03.jpg",
    collection: "ediciones-especiales",
  },
  {
    slug: "jamie-xx-in-colour-10th",
    title: "In Colour (10th Anniversary)",
    artist: "Jamie xx",
    price: 900,
    subscriberPrice: 800,
    originalPrice: 900,
    image: "/images/album-04.jpg",
    badges: ["AGOTADO"],
    collection: "ediciones-especiales",
  },
  {
    slug: "the-hidden-groove-vol-5",
    title: "The Hidden Groove Vol. 5",
    price: 990,
    image: "/images/album-08.jpg",
    badges: ["1 POR PERSONA"],
    collection: "ediciones-especiales",
  },
  {
    slug: "jungle-sunshine",
    title: "Sunshine",
    artist: "Jungle",
    price: 990,
    image: "/images/album-10.jpg",
    badges: ["PREVENTA"],
    collection: "ediciones-especiales",
  },
  {
    slug: "miles-kane-sunlight-firmado",
    title: "Sunlight in the Shadows (Firmado)",
    artist: "Miles Kane",
    price: 890,
    image: "/images/album-11.jpg",
    collection: "ediciones-especiales",
  },
  {
    slug: "the-strokes-reality-awaits",
    title: "Reality Awaits",
    artist: "The Strokes",
    price: 850,
    image: "/images/album-09.jpg",
    badges: ["AGOTADO", "PREVENTA"],
    collection: "ediciones-especiales",
  },
]

export const preventas: Product[] = [
  {
    slug: "soda-stereo-comfort",
    title: "Comfort y Música para Volar",
    artist: "Soda Stereo",
    price: 950,
    originalPrice: 950,
    subscriberPrice: 850,
    image: "/images/album-08.jpg",
    badges: ["AGOTADO", "PREVENTA"],
    collection: "preventas",
  },
  {
    slug: "el-mato-la-sintesis-okonor",
    title: "La Síntesis o'Konor",
    artist: "El mató a un policía motorizado",
    price: 750,
    originalPrice: 750,
    subscriberPrice: 650,
    image: "/images/album-07.jpg",
    badges: ["PREVENTA"],
    collection: "preventas",
  },
  {
    slug: "djo-decide",
    title: "Decide",
    artist: "DJO",
    price: 850,
    originalPrice: 850,
    subscriberPrice: 750,
    image: "/images/album-08.jpg",
    badges: ["PREVENTA"],
    collection: "preventas",
  },
  {
    slug: "meridian-brothers-ruido-tovar",
    title: "Ruido Tovar",
    artist: "Meridian Brothers & Mexican Institute of Sound",
    price: 850,
    originalPrice: 850,
    subscriberPrice: 750,
    image: "/images/album-12.jpg",
    badges: ["PREVENTA"],
    collection: "preventas",
  },
  {
    slug: "natalia-lafourcade-vol1",
    title: "El lugar de los sueños — Vol. 1",
    artist: "Natalia Lafourcade",
    price: 950,
    image: "/images/album-01.jpg",
    badges: ["PREVENTA"],
    collection: "preventas",
  },
  {
    slug: "natalia-lafourcade-vol2",
    title: "El lugar de los sueños — Vol. 2",
    artist: "Natalia Lafourcade",
    price: 950,
    image: "/images/album-02.jpg",
    badges: ["PREVENTA"],
    collection: "preventas",
  },
  {
    slug: "angine-de-poitrine",
    title: "Angine de Poitrine",
    price: 720,
    image: "/images/album-07.jpg",
    badges: ["PREVENTA"],
    collection: "preventas",
  },
  {
    slug: "the-strokes-reality-awaits-preventa",
    title: "Reality Awaits",
    artist: "The Strokes",
    price: 850,
    image: "/images/album-09.jpg",
    badges: ["AGOTADO", "PREVENTA"],
    collection: "preventas",
  },
]

export const accesorios: Product[] = [
  {
    slug: "daft-punk-funko-discovery-era",
    title: "Daft Punk Funko Pop Discovery Era",
    price: 780,
    originalPrice: 780,
    subscriberPrice: 680,
    image: "/images/accessory-funko.jpg",
    collection: "accesorios",
  },
  {
    slug: "mf-doom-reaction-figure",
    title: "MF DOOM ReAction Figure",
    price: 850,
    originalPrice: 850,
    subscriberPrice: 750,
    image: "/images/accessory-mfdoom.jpg",
    collection: "accesorios",
  },
  {
    slug: "hoodie-vaquero-monotypo",
    title: "Hoodie Vaquero x By Monotypo",
    price: 700,
    originalPrice: 700,
    subscriberPrice: 600,
    image: "/images/hero-hoodie.jpg",
    collection: "accesorios",
  },
  {
    slug: "daft-punk-reaction-human-after-all",
    title: "Daft Punk ReAction Figure / Human After All",
    price: 1500,
    originalPrice: 1500,
    subscriberPrice: 1300,
    image: "/images/accessory-reaction.jpg",
    collection: "accesorios",
  },
  {
    slug: "gift-card-muro",
    title: "Gift Card ANURO",
    price: 500,
    image: "/images/accessory-giftcard.jpg",
    collection: "accesorios",
  },
  {
    slug: "gyro-marvilla-puck",
    title: "GYRO x MARVILLA — 45 RPM Puck",
    price: 350,
    image: "/images/vinyl-knobs.jpg",
    badges: ["NUEVO"],
    collection: "accesorios",
  },
  {
    slug: "casete-twin-pack",
    title: "Casete Twin Pack",
    price: 280,
    image: "/images/accessory-cassettes.jpg",
    collection: "accesorios",
  },
  {
    slug: "misfits-reaction-figure",
    title: "Misfits ReAction Figure Set",
    price: 990,
    image: "/images/accessory-funko.jpg",
    collection: "accesorios",
  },
]

export const allProducts = [
  ...discoDelMes,
  ...edicionesEspeciales,
  ...preventas,
  ...accesorios,
]

export const collections = {
  "disco-del-mes": {
    title: "Disco del Mes",
    description:
      "Cada mes una selección curada en vinilo exclusivo, prensada en cantidades limitadas para nuestros suscriptores.",
    products: discoDelMes,
  },
  "ediciones-especiales": {
    title: "Ediciones Especiales",
    description:
      "Lanzamientos limitados, prensajes de color, gatefolds y artistas firmados — para coleccionistas serios.",
    products: edicionesEspeciales,
  },
  preventas: {
    title: "Preventas",
    description:
      "Asegura tu copia antes que nadie. Reservas abiertas, envíos cuando el disco aterriza en bodega.",
    products: preventas,
  },
  accesorios: {
    title: "Accesorios",
    description:
      "Merch, figuras, accesorios de tocadiscos y todo lo que no se puede poner a girar (pero sí lucir).",
    products: accesorios,
  },
} as const
