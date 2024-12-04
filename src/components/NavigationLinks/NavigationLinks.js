import { NavLink } from "react-router-dom";
import "./navigationLinks.scss";

const NavigationLinks = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeClassName="active">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservations" activeClassName="active">
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" activeClassName="active">
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
