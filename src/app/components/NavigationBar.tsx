import { Link } from "react-router-dom";
import rsFreaksLogo from "../../rs-freaks-logo.svg";
import { ListElement } from "./ListElement";

export const NavigationBar = () => {
  return (
    <div className="navBar">
      <div className="navBarLeftSide">
        <Link to="RS_Freaks/Home">
          <img src={rsFreaksLogo} alt="RS freaks logo in square" />
        </Link>
        <ul>
          <ListElement name="Home" />
          <ListElement name="About" />
          <ListElement name="Events" />
          <ListElement name="Forum" />
          <ListElement name="Contact" />
        </ul>
      </div>
      <Link to="RS_Freaks/JoinClub">
        <button className="button-cta">Join Club</button>
      </Link>
    </div>
  );
};
