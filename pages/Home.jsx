import { Link } from "react-router-dom";
import CarPreview from "../components/CarPreview";
import { vehicles, colors } from "../data/catalogue";
// FOURNI : page terminée servant de référence de style et de navigation.
export default function Home() {
  return (
    <section className="home">
      <div className="home-copy">
        <p className="eyebrow">
          <span className="live-dot" /> VOTRE STYLE. VOTRE SIGNATURE.
        </p>
        <h1>
          Le prochain
          <br />
          chapitre.
          <br />
          <em>À votre image.</em>
        </h1>
        <p className="lead">
          Choisissez votre modèle. Dessinez son caractère. Composez la voiture
          qui vous ressemble.
        </p>
        <Link to="/catalogue" className="btn">
          Créer ma configuration <span aria-hidden="true">↗</span>
        </Link>
        <div className="home-stats">
          <div>
            <strong>06</strong>
            <span>modèles</span>
          </div>
          <div>
            <strong>05</strong>
            <span>couleurs</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>inspiration</span>
          </div>
        </div>
      </div>
      <div className="home-visual">
        <div className="orbit" />
        <span className="giant-text" aria-hidden="true">
          PULSE
        </span>
        <CarPreview
          vehicle={vehicles[0]}
          color={colors[3]}
          wheelId="sport"
          optionIds={["spoiler"]}
        />
        <div className="hero-caption">
          <div>
            <span className="eyebrow">NOVA / COLLECTION</span>
            <h2>Pulse S</h2>
          </div>
          <span className="pill">Coupé • 150 ch</span>
        </div>
      </div>
    </section>
  );
}
