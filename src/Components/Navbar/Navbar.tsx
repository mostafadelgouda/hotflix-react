import './Navbar.css';
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li className="expand" id="home">
          HOME <FontAwesomeIcon icon={faChevronDown} />
          <ul className="expanded-list d-none" id="home-expand">
            <li>Home style 1</li>
            <li>Home style 2</li>
            <li>Home style 3</li>
          </ul>
        </li>
        <li className="expand" id="catalog">
          CATALOG <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li>PRICING PLAN</li>
        <li className="expand" id="pages">
          PAGES <FontAwesomeIcon icon={faChevronDown} />
        </li>
      </ul>
      <input placeholder="Search..." className="search-box" />
      <div className="username">NICKNAME</div>
    </header>
  );
};

export default Navbar;
