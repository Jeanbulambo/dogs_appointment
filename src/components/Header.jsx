import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/my-Profile',
      text: 'My Profile',
    },
  ];
  return (
    <nav>
      <img src="./logo.png" alt="logo" />
      <ul className="nav-links">
        {links.map((link) => (
          <li className="nav-link" key={links.id}>
            <NavLink className={(navData) => (navData.isActive ? 'active' : 'none')} to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Header;
