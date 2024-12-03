import { useState } from "react";
import "./hamburgerMenu.scss";
import Menu from "../../utils/Menu";
import Close from "../../utils/Close";

const HamburgerMenu = ({ children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${className}`}>
      <button className="hamburger-menu__icon" onClick={toggleMenu}>
        <Menu />
      </button>
      {isOpen && (
        <div className="hamburger-menu__modal">
          <button className="hamburger-menu__close" onClick={toggleMenu}>
            <Close />
          </button>
          <div className="hamburger-menu__content">{children}</div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
