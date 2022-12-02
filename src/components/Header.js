import { NavLink } from 'react-router-dom';

const Header = () => {
  const Links = [
    {
      id: 1,
      path: '/my-profile',
      text: 'My Profile',
    },
    {
      id: 1,
      path: '/my-profile',
      text: 'Appointment',
    },
    {
      id: 1,
      path: '/my-profile',
      text: 'About us',
    },
  ];
  return (
    <nav className="navbar">
      <img src="./logo.png" alt="logo" />
      <ul className="nav-links">
        {Links.map((link) => (
          <li className="nav-link" key={Links.id}>
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
