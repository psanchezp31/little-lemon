import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import "./navMobile.scss";

const NavMobile = () => {
  return (
    <nav className="nav-mobile">
      <HamburgerMenu>
        <NavigationLinks />
      </HamburgerMenu>
    </nav>
  );
};

export default NavMobile;
