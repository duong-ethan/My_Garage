import { vehicles, colors, wheels, options } from "../data/catalogue.js";

export const formatPrice = (value) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

// FOURNI : transforme les identifiants de la configuration en objets lisibles.
export function describeConfig(config) {
  const vehicle =
    vehicles.find((v) => v.id === config.vehicleId) || vehicles[0];
  return {
    vehicle,
    color: colors.find((c) => c.id === config.colorId) || colors[0],
    wheel: wheels.find((w) => w.id === config.wheelId) || wheels[0],
    engine:
      vehicle.engines.find((e) => e.id === config.engineId) ||
      vehicle.engines[0],
    selectedOptions: options.filter((o) => config.optionIds.includes(o.id)),
  };
}

export function calculateTotal(config) {
  const { vehicle, color, wheel, engine, selectedOptions } =
    describeConfig(config);
  // M4-PRIX : un total dérivé, pas un état supplémentaire.
  // TODO M4-PRIX : additionner base, couleur, jantes, moteur et options.
  // Une boucle for...of convient ; reduce() est une autre possibilité.
  return vehicle.basePrice; // Valeur provisoire pour garder le projet exécutable.
}

export function validateName(name) {
  // M5-VALIDATION : espaces seuls refusés, de 3 à 24 caractères après trim().
  // TODO M5-VALIDATION : renvoyer un message si invalide, sinon une chaîne vide.
  return "La validation du nom reste à compléter.";
}
