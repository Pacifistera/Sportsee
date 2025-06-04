import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link to="/profil">Profil</Link>
        </li>
        <li className="nav-item">
          <Link to="/settings">Réglage</Link>
        </li>
        <li className="nav-item">
          <Link to="/community">Communauté</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
