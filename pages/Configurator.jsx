import { Link } from "react-router-dom";
import CarPreview from "../components/CarPreview";
import { colors, wheels, options } from "../data/catalogue";
import {
  describeConfig,
  calculateTotal,
  formatPrice,
} from "../utils/configuration";
export default function Configurator({ config, onChange, onToggleOption }) {
  const { vehicle, color, engine } = describeConfig(config);
  const total = calculateTotal(config);
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">02 / DONNEZ-LUI DU CARACTÈRE</p>
          <h1>
            Votre {vehicle.name}
            <span className="dot">.</span>
          </h1>
        </div>
        <Link className="text-link" to="/catalogue">
          Changer de modèle ↗
        </Link>
      </div>
      <div className="config-layout">
        <div className="showroom">
          <div className="showroom-meta">
            <span className="eyebrow">
              {vehicle.brand} / {vehicle.label}
            </span>
            <span className="pill">
              <span className="live-dot" /> Aperçu instantané
            </span>
          </div>
          <span className="showroom-word" aria-hidden="true">
            {vehicle.name.split(" ")[0]}
          </span>
          <CarPreview
            vehicle={vehicle}
            color={color}
            wheelId={config.wheelId}
            optionIds={config.optionIds}
          />
          <div className="showroom-info">
            <div>
              <span className="muted">Finition actuelle</span>
              <h2>{color.label}</h2>
            </div>
            <span>{engine.label}</span>
          </div>
          <div className="price-bar">
            <div>
              <small>Votre configuration</small>
              <strong data-testid="total">{formatPrice(total)}</strong>
            </div>
            <Link to="/recapitulatif" className="btn">
              Voir le récapitulatif ↗
            </Link>
          </div>
        </div>
        <div className="controls">
          <section className="control-section">
            <h2>
              <span>01</span> Carrosserie
            </h2>
            <div className="swatches">
              {colors.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`swatch ${config.colorId === item.id ? "selected" : ""}`}
                  style={{ "--swatch": item.hex }}
                  aria-label={`${item.label} ${formatPrice(item.price)}`}
                  aria-pressed={config.colorId === item.id}
                  onClick={() => onChange("colorId", item.id)}
                />
              ))}
            </div>
            <p className="muted">
              {color.label} ·{" "}
              {color.price ? `+ ${formatPrice(color.price)}` : "Inclus"}
            </p>
          </section>
          <section className="control-section">
            <h2>
              <span>02</span> Motorisation
            </h2>
            <label className="sr-only" htmlFor="engine">
              Motorisation
            </label>
            <select
              id="engine"
              value={config.engineId}
              onChange={(event) => onChange("engineId", event.target.value)}
            >
              {vehicle.engines.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label} ·{" "}
                  {item.price ? `+ ${formatPrice(item.price)}` : "Inclus"}
                </option>
              ))}
            </select>
          </section>
          <section className="control-section">
            <h2>
              <span>03</span> Jantes
            </h2>
            <div className="wheel-choices">
              {wheels.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={`choice ${config.wheelId === item.id ? "selected" : ""}`}
                  aria-pressed={config.wheelId === item.id}
                  onClick={() => onChange("wheelId", item.id)}
                >
                  <span className="wheel-icon" aria-hidden="true">
                    ◉
                  </span>
                  <span>
                    {item.label}
                    <small>
                      {item.price ? `+ ${formatPrice(item.price)}` : "Inclus"}
                    </small>
                  </span>
                </button>
              ))}
            </div>
          </section>
          <section className="control-section">
            <h2>
              <span>04</span> Équipements
            </h2>
            {options.map((item) => (
              <label key={item.id} className="option-row">
                <input
                  type="checkbox"
                  checked={config.optionIds.includes(item.id)}
                  onChange={() => onToggleOption(item.id)}
                />
                <span>
                  {item.label}
                  <small>{item.detail}</small>
                </span>
                <strong>+ {formatPrice(item.price)}</strong>
              </label>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
