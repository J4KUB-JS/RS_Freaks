import imgLogo from "../../logo.png";

export const NavigationBar = () => {
  return (
    <div className="navBar">
      <div className="navBarLeftSide">
        <img src={imgLogo} alt="RS freaks logo in square" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>Forum</li>
          <li>Contact</li>
        </ul>
      </div>
      <button>Join Club</button>
    </div>
  );
};
