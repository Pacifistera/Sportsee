import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="logo Sportsee" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
