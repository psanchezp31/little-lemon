import Facebook from "../../utils/Facebook";
import Instagram from "../../utils/Instagram";
import Tiktok from "../../utils/Tiktok";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import "./footer.scss";
import verticalLogo from "../../images/little-lemon-vertical.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="ui-core-footer">
      <div className="ui-core-footer">
        <div className="logo">
          <Link to="/">
            <img src={verticalLogo} alt="Little Lemon Vertical Logo" />
          </Link>
        </div>
        <div className="navigation">
          <NavigationLinks />
        </div>
        <div className="contact">
          9978 S 84TH TER PALOS HILLS IL 60465-8202 USA +1 000 000 000
          littlelemon@restaurant.com
        </div>
        <div className="social">
          Follow us:
          <div className="social-icons">
            <a href="http://littlelemon.com/instagram">
              <Instagram />
            </a>
            <a href="http://littlelemon.com/facebook">
              <Facebook />
            </a>
            <a href="http://littlelemon.com/tiktok">
              <Tiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
