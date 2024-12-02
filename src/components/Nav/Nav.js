import NavDesktop from "../NavDesktop/NavDesktop";
import NavMobile from "../NavMobile/NavMobile";
import "./nav.scss";

const namespace = "ui-core-nav";

const Nav = () => {
  return (
    <div className={namespace}>
      <div className={`${namespace}--mobile`}>
        <NavMobile />
      </div>
      <div className={`${namespace}--desktop`}>
        <NavDesktop />
      </div>
    </div>
  );
};

export default Nav;
