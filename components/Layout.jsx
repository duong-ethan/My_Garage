import { NavLink, Link } from "react-router-dom";
export default function Layout({ children, garageCount }) {
  return (
    <>
      <header className="topbar">
        <Link to="/" className="logo" aria-label="MyGarage accueil">
          <span className="logo-mark">
            M<span>/</span>G
          </span>{" "}
          MYGARAGE<span className="dot">.</span>
        </Link>
        <nav aria-label="Navigation principale">
          <NavLink to="/catalogue">Catalogue</NavLink>
          <NavLink to="/configurateur">Configurer</NavLink>
          <NavLink to="/garage">
            Mon garage <span className="count">{garageCount}</span>
          </NavLink>
        </nav>
      </header>
      <main id="main-content">{children}</main>
      <footer className="footer">
        <span>MYGARAGE / CREATE YOUR DRIVE</span>
        <span>Concept automobile fictif • Prix de simulation</span>
      </footer>
    </>
  );
}
