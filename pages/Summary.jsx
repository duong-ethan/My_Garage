import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarPreview from "../components/CarPreview";
import {
  describeConfig,
  calculateTotal,
  formatPrice,
  validateName,
} from "../utils/configuration";
export default function Summary({ config, onSave }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { vehicle, color, wheel, engine, selectedOptions } =
    describeConfig(config);
  const total = calculateTotal(config);
  function handleSubmit(event) {
    // M5-FORMULAIRE : empêcher le rechargement, valider, puis sauvegarder.
    event.preventDefault(); // FOURNI : le navigateur ne recharge pas la page.
    // TODO M5-SOUMISSION : valider avec validateName, renseigner error.
    // Si une erreur existe, arrêter ici.
    // Sinon appeler onSave(name.trim()), puis navigate("/garage").
    setError("Complétez le traitement du formulaire.");
  }
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">03 / TOUT EST DANS LE DÉTAIL</p>
          <h1>
            Votre signature<span className="dot">.</span>
          </h1>
          <p className="muted">
            Vérifiez vos choix, puis donnez un nom à votre création.
          </p>
        </div>
        <Link to="/configurateur" className="text-link">
          Modifier les choix ↗
        </Link>
      </div>
      <div className="summary-layout">
        <div className="summary-car">
          <CarPreview
            vehicle={vehicle}
            color={color}
            wheelId={config.wheelId}
            optionIds={config.optionIds}
          />
          <p className="eyebrow">{vehicle.brand}</p>
          <h2>{vehicle.name}</h2>
          <p>{vehicle.tagline}</p>
        </div>
        <div className="summary-card">
          <h2>Le détail de votre configuration</h2>
          {/* TODO M5-DETAIL : construire le détail dans un dl.price-list.
        Chaque ligne : div contenant dt (libellé) et dd (prix formaté).
        Afficher le véhicule, la couleur, le moteur, les jantes, puis selectedOptions.map(). */}
          <div className="placeholder">
            Le détail des choix sera affiché ici.
          </div>
          {selectedOptions.length === 0 && (
            <p className="muted">Aucun équipement supplémentaire.</p>
          )}
          <div className="summary-total">
            <span>Montant total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="config-name">Nommez votre configuration</label>
            <input
              id="config-name"
              placeholder="Ex. Ma Pulse du week-end"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setError("");
              }}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "name-help name-error" : "name-help"}
            />
            <p id="name-help" className="muted small-text">
              De 3 à 24 caractères, hors espaces au début et à la fin.
            </p>
            {error && (
              <p id="name-error" className="error" role="alert">
                {error}
              </p>
            )}
            <button className="btn full" type="submit">
              Ajouter à mon garage ↗
            </button>
          </form>
          <p className="muted small-text">
            Le garage reste disponible pendant votre visite. Un rechargement le
            réinitialise.
          </p>
        </div>
      </div>
    </section>
  );
}
