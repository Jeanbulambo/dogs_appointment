import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './header.css';

const Header = () => {
  const Links = [
    {
      path: '/my-profile',
      text: 'My Profile',
    },
    {
      path: '/about',
      text: 'About us',
    },
  ];
  return (
    <nav className="navbar">
      <NavLink className={(navData) => (navData.isActive ? 'actvie' : 'none')} to="/">
        <img src="./logo.png" alt="logo" />
      </NavLink>
      <ul className="nav-links">
        {Links.map((link) => (
          <li className="nav-link" key={uuidv4()}>
            <NavLink className={(navData) => (navData.isActive ? 'actvie' : 'none')} to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Header;
