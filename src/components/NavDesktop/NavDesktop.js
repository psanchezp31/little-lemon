import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Logo from '../../images/Logo.svg'

const namespace = "ui-core-nav--desktop";

const NavDesktop = () => {
  return (
    <nav>
      <div className={namespace}>
        <a href="https://www.littlelemon.com">
          <img src={Logo} alt="Little Lemon Logo" />
        </a>
      </div>
      <NavigationLinks/>
    </nav>
  );
};

export default NavDesktop;
