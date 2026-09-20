import CarPreview from "./CarPreview";
import { colors } from "../data/catalogue";
import { formatPrice } from "../utils/configuration";
// FOURNI : exemple complet de props et de fonction passée au clic.
export default function VehicleCard({ vehicle, onSelect }) {
  return (
    <article className="vehicle-card">
      <div className="card-top">
        <span className="eyebrow">{vehicle.brand}</span>
        <span className="pill">{vehicle.label}</span>
      </div>
      <CarPreview vehicle={vehicle} color={colors[1]} compact />
      <div className="card-bottom">
        <div>
          <h2>{vehicle.name}</h2>
          <p>{vehicle.tagline}</p>
        </div>
        <div className="card-action">
          <span>
            <small>À partir de</small>
            <strong>{formatPrice(vehicle.basePrice)}</strong>
          </span>
          <button
            onClick={() => onSelect(vehicle.id)}
            aria-label={`Configurer ${vehicle.name}`}
            className="btn small"
          >
            Configurer <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  );
}
