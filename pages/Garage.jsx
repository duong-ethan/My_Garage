import { Link } from "react-router-dom";
import CarPreview from "../components/CarPreview";
import {
  describeConfig,
  calculateTotal,
  formatPrice,
} from "../utils/configuration";
export default function Garage({ savedConfigs, onDelete }) {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">04 / VOS CRÉATIONS</p>
          <h1>
            Mon garage<span className="dot">.</span>
          </h1>
          <p className="muted">
            {savedConfigs.length} configuration(s) dans votre collection.
          </p>
        </div>
        <Link to="/catalogue" className="btn">
          Nouvelle création ↗
        </Link>
      </div>
      {savedConfigs.length === 0 ? (
        <div className="empty">
          <div className="empty-symbol">M/G</div>
          <h2>Votre garage attend sa première voiture.</h2>
          <p>
            Composez votre modèle, puis enregistrez-le depuis le récapitulatif.
          </p>
          <Link to="/catalogue" className="btn">
            Explorer la collection ↗
          </Link>
        </div>
      ) : (
        <div className="vehicle-grid">
          {savedConfigs.map((saved) => {
            const { vehicle, color } = describeConfig(saved.config);
            return (
              <article className="vehicle-card" key={saved.id}>
                <div className="card-top">
                  <span className="eyebrow">
                    {vehicle.brand} / {vehicle.name}
                  </span>
                  <span className="pill">{color.label}</span>
                </div>
                <CarPreview
                  vehicle={vehicle}
                  color={color}
                  wheelId={saved.config.wheelId}
                  optionIds={saved.config.optionIds}
                  compact
                />
                <div className="card-bottom">
                  <h2>{saved.name}</h2>
                  <div className="card-action">
                    <strong>{formatPrice(calculateTotal(saved.config))}</strong>
                    <button
                      className="btn danger small"
                      onClick={() => onDelete(saved.id)}
                      aria-label={`Supprimer ${saved.name}`}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
      <p className="muted garage-note">
        Configurations conservées en mémoire pendant cette visite uniquement.
      </p>
    </section>
  );
}
