import NavigationLinks from "./NavigationLinks";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <a href="https://www.littlelemon.com">
          <img src="../images/Logo.svg" alt="Little Lemon Logo" />
        </a>
      </div>
      <NavigationLinks/>
    </nav>
  );
};

export default Nav;
