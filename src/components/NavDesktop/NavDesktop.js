import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Logo from "../../images/Logo.svg";
import "./navDesktop.scss";
import { Link } from "react-router-dom";

const namespace = "ui-core-nav--desktop";

const NavDesktop = () => {
  return (
    <nav>
      <div className={namespace}>
        <Link to="/">
          <img src={Logo} alt="Little Lemon Logo" />
        </Link>
        <NavigationLinks />
      </div>
    </nav>
  );
};

export default NavDesktop;
