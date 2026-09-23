import heroShawayaImg from '../assets/images/hero_shawaya_chicken_1790147049085.jpg';
import shawarmaWrapImg from '../assets/images/shawarma_wrap_juicy_1790147065795.jpg';
import grilledSkewersImg from '../assets/images/grilled_skewers_platter_1790147086188.jpg';
import restaurantAmbianceImg from '../assets/images/restaurant_ambiance_dining_1790147101358.jpg';
import specialPlatterImg from '../assets/images/special_platter_feast_1790147116730.jpg';
import yamamaLogoImg from '../assets/images/yamama_logo_1790147701566.jpg';
import beneTibiMojitoImg from '../assets/images/bene_tibi_mojito_1790179771945.jpg';
import alfahamBishawariImg from '../assets/images/alfaham_bishawari_1790179786362.jpg';

export { yamamaLogoImg, beneTibiMojitoImg, alfahamBishawariImg };

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  isVeg: boolean;
  isPopular?: boolean;
  isSpicy?: boolean;
  portion?: string;
  prepTime?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  location?: string;
  avatarColor?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const RESTAURANT_INFO = {
  name: "YAMAMA SHAWAYA",
  logo: yamamaLogoImg,
  tagline: "Fresh. Juicy. Grilled to Perfection.",
  subTagline: "Experience delicious shawaya, juicy grilled chicken, and flavorful meals prepared fresh for you.",
  energySlogan: "REFILL YOUR ENERGY",
  trustStatement: "Fresh Ingredients • Authentic Flavours • Made Fresh Daily",
  phone: "9747362102",
  phoneDisplay: "9747362102",
  whatsapp: "+91 97473 62102",
  whatsappClean: "919747362102",
  email: "orders@yamamashawaya.com",
  address: "Oradampalam - Valiyaveettilpadi, Tirurkad, Perinthalmanna, Kerala - 679321",
  shortAddress: "Tirurkad, Perinthalmanna",
  landmark: "Oradampalam - Valiyaveettilpadi",
  hours: "Daily: 12:00 PM – 12:00 AM (Midnight Grill)",
  timingBadge: "Open Daily Till 12:00 AM Midnight",
  googleMapsUrl: "https://maps.google.com/?q=Oradampalam+-+Valiyaveettilpadi,+Tirurkad,+Perinthalmanna,+Kerala+679321",
  currency: "₹",
  currencySymbol: "₹",
  socials: {
    instagram: "https://instagram.com/yamamashawaya",
    facebook: "https://facebook.com/yamamashawaya",
    whatsapp: "https://wa.me/919747362102",
    youtube: "https://youtube.com/@yamamashawaya"
  }
};

export const QUICK_HIGHLIGHTS = [
  {
    id: "fresh",
    title: "Fresh Ingredients",
    description: "Fresh, premium grade poultry and locally sourced produce prepared daily.",
    icon: "Sparkles"
  },
  {
    id: "authentic",
    title: "Authentic Taste",
    description: "Rich, time-honored Arabian spice blends and open-flame rotisserie roasting.",
    icon: "Flame"
  },
  {
    id: "fast",
    title: "Fast Service",
    description: "Hot, juicy meals prepared swiftly with minimal wait times for dine-in & takeaway.",
    icon: "Clock"
  },
  {
    id: "hygiene",
    title: "Quality & Hygiene",
    description: "Prepared in an open, spotless kitchen with strict hygiene and halal standards.",
    icon: "ShieldCheck"
  }
];

export const MENU_CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "combos", label: "Popular Combos" },
  { id: "shawaya", label: "Shawaya & Al Faham" },
  { id: "rice", label: "Bishawari Rice" },
  { id: "mojitos", label: "Mojitos (Bene Tibi)" },
  { id: "shawarma", label: "Shawarma & Grills" }
];

export const MENU_ITEMS: MenuItem[] = [
  // ── Popular Combos (with Bishawari Rice & Dips) ──
  {
    id: "combo-1",
    name: "Shawaya Chicken",
    category: "combos",
    description: "(Rotisserie grilled) with bishawari rice and dips. Tender juicy chicken marinated in Arabic aromatics with signature garlic toum and red dip.",
    price: 200,
    image: heroShawayaImg,
    isVeg: false,
    isPopular: true,
    isSpicy: false,
    portion: "With bishawari rice and dips",
    prepTime: "12 mins"
  },
  {
    id: "combo-2",
    name: "Yamama's Normal Al Faham",
    category: "combos",
    description: "Charcoal grilled authentic Arabian Al Faham chicken with bishawari rice and dips.",
    price: 230,
    image: alfahamBishawariImg,
    isVeg: false,
    isPopular: true,
    isSpicy: false,
    portion: "With bishawari rice and dips",
    prepTime: "15 mins"
  },
  {
    id: "combo-3",
    name: "Al Faham Kondattam",
    category: "combos",
    description: "Coated with Kerala special sun-dried chili curd kondattam marinade, grilled over coals. With bishawari rice and dips.",
    price: 260,
    image: alfahamBishawariImg,
    isVeg: false,
    isPopular: true,
    isSpicy: true,
    portion: "With bishawari rice and dips",
    prepTime: "15 mins"
  },
  {
    id: "combo-4",
    name: "Al Faham Peri Peri",
    category: "combos",
    description: "Fiery peri-peri spice coated charcoal grilled chicken with bishawari rice and dip (special for chilly lovers).",
    price: 250,
    image: alfahamBishawariImg,
    isVeg: false,
    isPopular: true,
    isSpicy: true,
    portion: "With bishawari rice and dip",
    prepTime: "15 mins"
  },
  {
    id: "combo-5",
    name: "Beef Mashwi",
    category: "combos",
    description: "Succulent, smoky charred Arabian spiced beef pieces. With bishawari rice and dips.",
    price: 540,
    image: alfahamBishawariImg,
    isVeg: false,
    isPopular: true,
    isSpicy: false,
    portion: "With bishawari rice and dips",
    prepTime: "20 mins"
  },
  {
    id: "combo-6",
    name: "Shawaya Chicken With Bishawari Rice Combo",
    category: "combos",
    description: "Tender rotisserie shawaya chicken paired with fragrant bishawari rice and house dips. (Full, half, quarter).",
    price: 180,
    image: specialPlatterImg,
    isVeg: false,
    isPopular: true,
    isSpicy: false,
    portion: "(Full, half, quarter)",
    prepTime: "10 mins"
  },

  // ── Shawaya & Al Faham (With Kubus / Bread) ──
  {
    id: "sh-1",
    name: "Shawaya Chicken With Kubus",
    category: "shawaya",
    description: "Crisp golden-skin rotisserie roasted chicken served with fresh kubus, house garlic toum, and spicy dip. (Full, half, quarter).",
    price: 130,
    image: heroShawayaImg,
    isVeg: false,
    isPopular: true,
    isSpicy: false,
    portion: "(Full, half, quarter)",
    prepTime: "10 mins"
  },
  {
    id: "sh-2",
    name: "Yamama's Normal Al Faham (With Kubus)",
    category: "shawaya",
    description: "Signature charcoal grilled chicken served with warm kubus, fresh salad, and creamy garlic toum.",
    price: 150,
    image: alfahamBishawariImg,
    isVeg: false,
    isPopular: false,
    isSpicy: false,
    portion: "Served with Kubus & Dips",
    prepTime: "15 mins"
  },
  {
    id: "sh-3",
    name: "Al Faham Kondattam (With Kubus)",
    category: "shawaya",
    description: "Sun-dried curd chili kondattam masala grilled chicken served with hot kubus and cooling garlic dip.",
    price: 180,
    image: alfahamBishawariImg,
    isVeg: false,
    isPopular: false,
    isSpicy: true,
    portion: "Served with Kubus & Dips",
    prepTime: "15 mins"
  },
  {
    id: "sh-4",
    name: "Al Faham Peri Peri (With Kubus)",
    category: "shawaya",
    description: "Fiery peri peri charcoal grilled chicken served with fresh kubus and mayonnaise dips.",
    price: 170,
    image: alfahamBishawariImg,
    isVeg: false,
    isPopular: false,
    isSpicy: true,
    portion: "Served with Kubus & Dips",
    prepTime: "15 mins"
  },

  // ── Bishawari Rice ──
  {
    id: "rc-1",
    name: "Bishawari Rice Only",
    category: "rice",
    description: "Aromatic, seasoned long-grain Bishawari mandi rice cooked with whole spices, ghee, and golden fried onions. (Full, half, quarter).",
    price: 90,
    image: alfahamBishawariImg,
    isVeg: true,
    isPopular: true,
    isSpicy: false,
    portion: "(Full, half, quarter)",
    prepTime: "5 mins"
  },

  // ── Mojitos (Bene Tibi) ──
  {
    id: "moj-1",
    name: "Green Apple",
    category: "mojitos",
    description: "Crisp and tangy green apple with freshly muddled garden mint, zesty lime, and sparkling soda. (Bene Tibi)",
    price: 120,
    image: beneTibiMojitoImg,
    isVeg: true,
    isPopular: true,
    isSpicy: false,
    portion: "Chilled Tall Glass (Bene Tibi)",
    prepTime: "4 mins"
  },
  {
    id: "moj-2",
    name: "Passion Fruit",
    category: "mojitos",
    description: "Exotic tropical passion fruit pulp blended with muddled mint leaves, citrus, and chilled club soda. (Bene Tibi)",
    price: 120,
    image: beneTibiMojitoImg,
    isVeg: true,
    isPopular: true,
    isSpicy: false,
    portion: "Chilled Tall Glass (Bene Tibi)",
    prepTime: "4 mins"
  },
  {
    id: "moj-3",
    name: "Watermelon",
    category: "mojitos",
    description: "Sweet refreshing real watermelon crushed with garden mint, citrus lime, and fizzy soda. (Bene Tibi)",
    price: 120,
    image: beneTibiMojitoImg,
    isVeg: true,
    isPopular: false,
    isSpicy: false,
    portion: "Chilled Tall Glass (Bene Tibi)",
    prepTime: "4 mins"
  },
  {
    id: "moj-4",
    name: "Blue Berry",
    category: "mojitos",
    description: "Sweet wild blueberries muddled with aromatic mint sprigs, lime, and chilled bubbly soda. (Bene Tibi)",
    price: 120,
    image: beneTibiMojitoImg,
    isVeg: true,
    isPopular: true,
    isSpicy: false,
    portion: "Chilled Tall Glass (Bene Tibi)",
    prepTime: "4 mins"
  },
  {
    id: "moj-5",
    name: "Strawberry",
    category: "mojitos",
    description: "Ripe fresh strawberries crushed with cool mint, fresh lime juice, and sparkling soda. (Bene Tibi)",
    price: 120,
    image: beneTibiMojitoImg,
    isVeg: true,
    isPopular: false,
    isSpicy: false,
    portion: "Chilled Tall Glass (Bene Tibi)",
    prepTime: "4 mins"
  },
  {
    id: "moj-6",
    name: "Blackberry",
    category: "mojitos",
    description: "Deep tart blackberry reduction muddled with garden mint and chilled effervescent soda. (Bene Tibi)",
    price: 120,
    image: beneTibiMojitoImg,
    isVeg: true,
    isPopular: false,
    isSpicy: false,
    portion: "Chilled Tall Glass (Bene Tibi)",
    prepTime: "4 mins"
  },
  {
    id: "moj-7",
    name: "Mint",
    category: "mojitos",
    description: "The classic virgin mojito with double crushed fresh garden mint leaves, fresh lime, and soda. (Bene Tibi)",
    price: 120,
    image: beneTibiMojitoImg,
    isVeg: true,
    isPopular: false,
    isSpicy: false,
    portion: "Chilled Tall Glass (Bene Tibi)",
    prepTime: "4 mins"
  },
  {
    id: "moj-8",
    name: "Rose",
    category: "mojitos",
    description: "Fragrant sweet Arabian Damascus rose syrup muddled with mint leaves and sparkling soda. (Bene Tibi)",
    price: 120,
    image: beneTibiMojitoImg,
    isVeg: true,
    isPopular: false,
    isSpicy: false,
    portion: "Chilled Tall Glass (Bene Tibi)",
    prepTime: "4 mins"
  },
  {
    id: "moj-9",
    name: "Mango",
    category: "mojitos",
    description: "Sweet golden tropical mango puree muddled with garden mint and sparkling soda on ice. (Bene Tibi)",
    price: 120,
    image: beneTibiMojitoImg,
    isVeg: true,
    isPopular: false,
    isSpicy: false,
    portion: "Chilled Tall Glass (Bene Tibi)",
    prepTime: "4 mins"
  },
  {
    id: "moj-10",
    name: "Mumbai",
    category: "mojitos",
    description: "Yamama & Bene Tibi's exclusive specialty fusion mojito loaded with premium exotic spices, fruits, and sparkling fizz. (Bene Tibi)",
    price: 220,
    image: beneTibiMojitoImg,
    isVeg: true,
    isPopular: true,
    isSpicy: false,
    portion: "Signature Goblet (Bene Tibi)",
    prepTime: "5 mins"
  },

  // ── Shawarma & Grills ──
  {
    id: "sw-1",
    name: "Classic Chicken Shawarma Roll",
    category: "shawarma",
    description: "Juicy shaved spiced chicken wrapped in warm bread with creamy garlic toum, pickles, and crispy fries.",
    price: 110,
    image: shawarmaWrapImg,
    isVeg: false,
    isPopular: true,
    isSpicy: false,
    portion: "1 Wrap",
    prepTime: "6 mins"
  },
  {
    id: "sw-2",
    name: "Yamama Special Jumbo Shawarma",
    category: "shawarma",
    description: "Double portion of spiced spit-roasted chicken wrapped with melted cheese, extra toum, and chili pickles.",
    price: 160,
    image: shawarmaWrapImg,
    isVeg: false,
    isPopular: false,
    isSpicy: false,
    portion: "Jumbo Wrap",
    prepTime: "8 mins"
  },
  {
    id: "gr-1",
    name: "Arabian Mix Grill Platter",
    category: "shawarma",
    description: "Assorted chicken tikka, shish tawook, and kebab skewers served with kubus, hummus, and garlic sauce.",
    price: 380,
    originalPrice: 420,
    image: grilledSkewersImg,
    isVeg: false,
    isPopular: false,
    isSpicy: false,
    portion: "Serves 2-3 Guests",
    prepTime: "18 mins"
  }
];

export const SPECIAL_OFFER = {
  badge: "CHEF'S SIGNATURE DEAL",
  title: "YAMAMA ROYAL FEAST",
  subtitle: "Taste more. Enjoy more.",
  description: "Experience the ultimate Arabian banquet. A whole golden roasted Shawaya chicken with fragrant Bishawari spiced rice, Al Faham skewers, warm kuboos, fresh fries, garlic toum, and signature dips.",
  originalPrice: 480,
  offerPrice: 399,
  savings: "Save ₹81",
  image: specialPlatterImg,
  highlights: [
    "1 Whole Golden Roasted Shawaya Chicken",
    "Fragrant Spiced Bishawari Rice Platter",
    "2 Classic Garlic Toum Shawarma Rolls",
    "Crispy Golden French Fries & 4 Sauces"
  ]
};

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Tariq Rahman",
    rating: 5,
    comment: "The chicken shawaya here is unmatched! Crispy spiced skin on the outside and unbelievably juicy inside. The garlic toum sauce is made authentically, not factory-made.",
    date: "2 days ago",
    location: "Perinthalmanna",
    avatarColor: "#FFD21F"
  },
  {
    id: "rev-2",
    name: "Shafi K.",
    rating: 5,
    comment: "Ordered the Yamama Royal Feast for family dinner. The food arrived piping hot, the Bukhari rice had incredible aroma, and the portion size was generous for all of us!",
    date: "1 week ago",
    location: "Tirurkad",
    avatarColor: "#E21B23"
  },
  {
    id: "rev-3",
    name: "Ahmed Nabeel",
    rating: 5,
    comment: "Best shawarma roll in town hands down! No soggy cabbage fillers — pure succulent marinated chicken, garlic paste, pickles, and crispy fries in toasted saj.",
    date: "2 weeks ago",
    location: "Valiyaveettilpadi",
    avatarColor: "#C0C0C0"
  },
  {
    id: "rev-4",
    name: "Fathima Noor",
    rating: 5,
    comment: "The cleanliness and open kitchen immediately give you confidence. Fast service and friendly staff. Chicken cooked to tender perfection every single time.",
    date: "3 weeks ago",
    location: "Malappuram",
    avatarColor: "#FFD21F"
  },
  {
    id: "rev-5",
    name: "Mark Henderson",
    rating: 5,
    comment: "Fresh, tasty and full of authentic flavour. The shawaya with spiced rice and mint lemonade is now my regular weekend dinner treat. Highly recommended!",
    date: "1 month ago",
    location: "Downtown",
    avatarColor: "#E21B23"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Golden Rotisserie Shawaya",
    category: "Shawaya",
    image: heroShawayaImg,
    description: "Slow-roasted whole chicken basted in olive oil and Arabic spices."
  },
  {
    id: "gal-2",
    title: "Gourmet Chicken Shawarma",
    category: "Shawarma",
    image: shawarmaWrapImg,
    description: "Toasted saj wrap filled with tender shaved rotisserie chicken and garlic toum."
  },
  {
    id: "gal-3",
    title: "Charcoal Shish Tawook & Grills",
    category: "Grills",
    image: grilledSkewersImg,
    description: "Marinated chicken skewers char-grilled over real wooden charcoal embers."
  },
  {
    id: "gal-4",
    title: "Yamama Royal Rice Platter",
    category: "Rice Dishes",
    image: specialPlatterImg,
    description: "Bukhari spiced rice adorned with roasted chicken, toasted almonds & raisins."
  },
  {
    id: "gal-5",
    title: "Modern Dining Atmosphere",
    category: "Interior",
    image: restaurantAmbianceImg,
    description: "Warm, sophisticated black & gold dining room with open grill theatre."
  },
  {
    id: "gal-6",
    title: "Chef's Flame Rotisserie",
    category: "Preparation",
    image: heroShawayaImg,
    description: "Continuous rotisserie spitting ensuring crispy golden outer skin and juicy meat."
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "freshly-prepared",
    title: "Freshly Prepared Food",
    description: "Every chicken is seasoned and roasted in batches throughout the day. Never reheated, never stale.",
    icon: "Utensils"
  },
  {
    id: "quality-ingredients",
    title: "Quality Ingredients",
    description: "100% Halal certified, Grade-A fresh chicken paired with authentic imported spices and extra virgin olive oil.",
    icon: "Award"
  },
  {
    id: "delicious-flavours",
    title: "Delicious Flavours",
    description: "Signature marinades developed over years to create the hallmark Yamama crispy skin and juicy core.",
    icon: "Flame"
  },
  {
    id: "hygienic-prep",
    title: "Hygienic Preparation",
    description: "Spotless open-concept grill kitchen complying with the highest municipal health & food safety standards.",
    icon: "ShieldCheck"
  },
  {
    id: "friendly-service",
    title: "Friendly Service",
    description: "Warm Arabian hospitality, welcoming atmosphere, and quick attentive service for every guest.",
    icon: "HeartHandshake"
  },
  {
    id: "great-value",
    title: "Great Value",
    description: "Generous portions, complimentary sauces & breads, and meal combos priced honestly for families and groups.",
    icon: "BadgePercent"
  }
];

export const ABOUT_CONTENT = {
  intro: "YAMAMA SHAWAYA is built around a simple idea — serve delicious, fresh and satisfying food with great flavour and quality. From juicy shawaya and shawarma to grilled favourites, every meal is prepared with care and served fresh.",
  story: "Founded out of deep passion for authentic Middle Eastern rotisserie traditions, Yamama Shawaya elevated the humble street-side shawaya into a modern culinary hallmark. We blend traditional charcoal and rotisserie flame roasting with contemporary culinary precision, welcoming guests to a stylish and warm dining destination.",
  food: "Our secret lies in time and fire. We marinate our poultry in citrus, garlic, coriander, cumin, cardamom, and gentle paprika for 24 hours before slow-turning on custom rotisseries. The natural fat renders downward, crisping the skin to a deep golden sheen while sealing inside every drop of flavor.",
  commitment: "We stand uncompromising on freshness and cleanliness. No artificial colors, no frozen meats, and no shortcuts. When you dine at Yamama Shawaya, you enjoy food made with integrity, heart, and pride."
};
