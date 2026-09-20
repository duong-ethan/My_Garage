import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VehicleCard from "../components/VehicleCard";
import { vehicles } from "../data/catalogue";
export default function Catalogue({ onSelect }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("all");
  // M1-FILTRES : deux critères combinés, recherche insensible à la casse.
  // TODO M1-FILTRES : remplacer ce tableau par le résultat de filter().
  // Garder un véhicule si son nom/marque correspond ET si sa marque convient.
const filteredVehicles = vehicles.filter((vehicle) => {
  const normalizedQuery = query.trim().toLowerCase();
  const matchesQuery =
    vehicle.name.toLowerCase().includes(normalizedQuery) ||
    vehicle.brand.toLowerCase().includes(normalizedQuery);
  const matchesBrand = brand === "all" || vehicle.brand === brand;
  return matchesQuery && matchesBrand;
});
  function choose(id) {
    onSelect(id);
    navigate("/configurateur");
  }
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">01 / TROUVEZ VOTRE POINT DE DÉPART</p>
          <h1>
            La collection<span className="dot">.</span>
          </h1>
          <p className="muted">
            Trois univers. Six caractères. Une seule signature : la vôtre.
          </p>
        </div>
        <span className="large-number">06</span>
      </div>
      <div className="filters">
        <label>
          Rechercher un modèle
          <input
            type="search"
            placeholder="Ex. Pulse, ATLAS…"
            value={query}
            onChange={(event) => {
              /* TODO M1-SAISIE : actualiser query */
              setQuery(event.target.value);
            }}
          />
        </label>
        <label>
          Marque
          <select
            aria-label="Marque"
            value={brand}
            onChange={(event) => {
              /* TODO M1-MARQUE : actualiser brand */
              setBrand(event.target.value);
            }}
          >
            <option value="all">Toutes les marques</option>
            {["NOVA", "ATLAS", "VELOX"].map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <p aria-live="polite">{filteredVehicles.length} modèle(s)</p>
      </div>
      <div className="vehicle-grid">
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} onSelect={choose} />
        ))}
      </div>
      {filteredVehicles.length === 0 && (
        <div className="empty">
          <h2>Aucun modèle trouvé</h2>
          <p>Essayez un autre nom ou une autre marque.</p>
          <button
            className="btn secondary"
            onClick={() => {
              setQuery("");
              setBrand("all");
            }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </section>
  );
}
