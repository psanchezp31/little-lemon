import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Logo from '../../images/Logo.svg'
import './navDesktop.scss';

const namespace = "ui-core-nav--desktop";

const NavDesktop = () => {
  return (
    <nav>
      <div className={namespace}>
        <a href="https://www.littlelemon.com">
          <img src={Logo} alt="Little Lemon Logo" />
        </a>
      <NavigationLinks/>
      </div>
    </nav>
  );
};

export default NavDesktop;
