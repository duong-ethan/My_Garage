import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Configurator from "./pages/Configurator";
import Summary from "./pages/Summary";
import Garage from "./pages/Garage";
import { vehicles, initialConfig } from "./data/catalogue";

export default function App() {
  // FOURNI : App reste monté quand la route change. Les pages partagent ces états.
  const [config, setConfig] = useState(initialConfig);
  const [savedConfigs, setSavedConfigs] = useState([]);

  function selectVehicle(vehicleId) {
    // M2-MODELE : nouveau modèle = moteur de base, couleur blanche, jantes standard, aucune option.
    // TODO M2-MODELE : retrouver le véhicule avec find().
    // Remplacer config par les valeurs initiales et les identifiants du véhicule choisi.
    // Son moteur initial est vehicle.engines[0].id.
    // Pour l’instant, cette fonction ne change rien : comportement volontaire.
    const vehicle = vehicles.find((v) => v.id === vehicleId);
    if (!vehicle) return;

    setConfig({
      ...initialConfig,
      vehicleId: vehicle.id,
      engineId: vehicle.engines[0].id,
    });
  }
  function changeConfig(field, value) {
    // M3-CHOIX : conserver les autres propriétés de la configuration.
    // TODO M3-CHOIX : appeler setConfig avec une fonction de mise à jour.
    // Copier previous, puis remplacer la propriété [field] par value.
  }
  function toggleOption(optionId) {
    // M4-OPTIONS : présence = retirer ; absence = ajouter. Pas de doublons.
    // TODO M4-OPTIONS : construire un nouveau tableau optionIds.
    // includes() pour décider, filter() pour retirer, spread pour ajouter.
    // Conserver toutes les autres propriétés de config.
  }
  function saveConfig(name) {
    // M6-GARAGE : un instantané indépendant de la configuration en cours.
    // TODO M6-SAUVEGARDE : construire un objet avec id, name et config.
    // id : crypto.randomUUID() ; copier config ET son tableau optionIds.
    // Ajouter cet objet dans un nouveau tableau savedConfigs.
  }
  function deleteConfig(id) {
    // TODO M6-SUPPRESSION : conserver uniquement les entrées dont saved.id est différent de id.
  }

  return (
    <Layout garageCount={savedConfigs.length}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalogue"
          element={<Catalogue onSelect={selectVehicle} />}
        />
        <Route
          path="/configurateur"
          element={
            <Configurator
              config={config}
              onChange={changeConfig}
              onToggleOption={toggleOption}
            />
          }
        />
        {/* TODO M5-ROUTE : remplacer le contenu de element par Summary,
        en transmettant config et onSave. Les autres routes servent de modèle. */}
        <Route
          path="/recapitulatif"
          element={
            <section className="page">
              <p className="eyebrow">03 / VOTRE CONFIGURATION</p>
              <h1>Votre signature.</h1>
              <div className="placeholder">
                <h2>Récapitulatif en préparation</h2>
                <p>
                  Votre configuration reste disponible dans le configurateur.
                </p>
                <Link to="/configurateur" className="btn">
                  Revenir à ma voiture
                </Link>
              </div>
            </section>
          }
        />
        <Route
          path="/garage"
          element={
            <Garage savedConfigs={savedConfigs} onDelete={deleteConfig} />
          }
        />
        <Route
          path="*"
          element={
            <section className="page empty">
              <h1>Cette route n’existe pas.</h1>
              <Link to="/" className="btn">
                Retour à l’accueil
              </Link>
            </section>
          }
        />
      </Routes>
    </Layout>
  );
}
