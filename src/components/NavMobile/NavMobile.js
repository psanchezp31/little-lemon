import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Logo from '../../images/little-lemon-icon.jpg'

const NavMobile = () => {
  return (
    <nav>
      <div className="logo">
        <a href="https://www.littlelemon.com">
          <img src={Logo} alt="Little Lemon Logo" />
        </a>
      </div>
      <NavigationLinks/>
    </nav>
  );
};

export default NavMobile;
