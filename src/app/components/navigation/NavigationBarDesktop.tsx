import { Link } from "react-router-dom";
import rsFreaksLogo from "../../../rs-freaks-logo.svg";
import { ListElement } from "./ListElement";

export const NavigationBarDesktop = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <img src={rsFreaksLogo} alt="RS freaks logo in square" />
      </Link>
      <div className="navBarActions">
        <ul>
          <ListElement name="Home" />
          <ListElement name="About" />
          <ListElement name="Events" />
          <ListElement name="Forum" />
          <ListElement name="Contact" />
        </ul>
        <Link to="/JoinClub">
          <button className="button-cta">Join Club</button>
        </Link>
      </div>
    </div>
  );
};
