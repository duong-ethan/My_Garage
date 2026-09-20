// Données fictives, prix pédagogiques en euros entiers.
// Les moteurs sont propres à chaque véhicule. Couleurs, jantes et options sont communes.
export const vehicles = [
  {
    id: "nova-s",
    brand: "NOVA",
    name: "Pulse S",
    type: "coupe",
    label: "Coupé",
    basePrice: 28000,
    power: 150,
    tagline: "Le quotidien, version sport.",
    engines: [
      { id: "eco", label: "Essence 150 ch", price: 0 },
      { id: "sport", label: "Essence 220 ch", price: 3200 },
    ],
  },
  {
    id: "nova-e",
    brand: "NOVA",
    name: "Pulse E",
    type: "sedan",
    label: "Berline",
    basePrice: 35000,
    power: 204,
    tagline: "Une autre idée du silence.",
    engines: [
      { id: "electric", label: "Électrique 204 ch", price: 0 },
      { id: "long", label: "Grande autonomie 250 ch", price: 4500 },
    ],
  },
  {
    id: "atlas-x",
    brand: "ATLAS",
    name: "Terra X",
    type: "suv",
    label: "SUV",
    basePrice: 34000,
    power: 180,
    tagline: "L’horizon vous appartient.",
    engines: [
      { id: "hybrid", label: "Hybride 180 ch", price: 0 },
      { id: "awd", label: "Hybride 4x4 240 ch", price: 4200 },
    ],
  },
  {
    id: "atlas-city",
    brand: "ATLAS",
    name: "City One",
    type: "sedan",
    label: "Berline",
    basePrice: 23000,
    power: 110,
    tagline: "La ville à votre rythme.",
    engines: [
      { id: "city", label: "Essence 110 ch", price: 0 },
      { id: "cityplus", label: "Hybride 140 ch", price: 2500 },
    ],
  },
  {
    id: "velox-r",
    brand: "VELOX",
    name: "Apex R",
    type: "coupe",
    label: "Coupé",
    basePrice: 42000,
    power: 260,
    tagline: "Le plaisir dans chaque courbe.",
    engines: [
      { id: "turbo", label: "Turbo 260 ch", price: 0 },
      { id: "track", label: "Turbo 320 ch", price: 5800 },
    ],
  },
  {
    id: "velox-cross",
    brand: "VELOX",
    name: "Cross GT",
    type: "suv",
    label: "SUV",
    basePrice: 39000,
    power: 220,
    tagline: "L’espace rencontre le caractère.",
    engines: [
      { id: "gt", label: "Hybride 220 ch", price: 0 },
      { id: "gtplus", label: "Hybride 300 ch", price: 5000 },
    ],
  },
];
export const colors = [
  { id: "pearl", label: "Blanc nacré", hex: "#e7edf0", price: 0 },
  { id: "blue", label: "Bleu électrique", hex: "#3979ea", price: 650 },
  { id: "red", label: "Rouge magma", hex: "#ed4b4b", price: 650 },
  { id: "green", label: "Vert signature", hex: "#aed34b", price: 850 },
  { id: "black", label: "Noir graphite", hex: "#444954", price: 500 },
];
export const wheels = [
  { id: "standard", label: "Aero 17 pouces", price: 0 },
  { id: "sport", label: "Sport 19 pouces", price: 1200 },
];
export const options = [
  {
    id: "roof",
    label: "Toit panoramique",
    detail: "Une touche de lumière.",
    price: 900,
  },
  {
    id: "spoiler",
    label: "Aileron sport",
    detail: "Une silhouette plus affirmée.",
    price: 450,
  },
  {
    id: "audio",
    label: "Audio premium",
    detail: "Le son prend une autre dimension.",
    price: 600,
  },
];
export const initialConfig = {
  vehicleId: "nova-s",
  colorId: "pearl",
  wheelId: "standard",
  engineId: "eco",
  optionIds: [],
};
