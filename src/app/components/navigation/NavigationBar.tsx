import { Menu } from "./Menu";
import { Link } from "react-router-dom";
import { ListElement } from "./ListElement";

export const NavigationBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <img
          src={require("../../../images/rs-logo.png")}
          alt="RS freaks logo in square"
        />
      </Link>
      {window.innerWidth > 1000 ? (
        <div className="navBarActions">
          <ul>
            <ListElement name="Home" />
            <ListElement name="About" />
            <ListElement name="Events" />
            <ListElement name="Forum" />
            <ListElement name="Contact" />
          </ul>
          <Link to="/JoinClub">
            {/* <div className="button-wrapper"> */}
            <button className="button-cta">Join Club</button>
            {/* <div className="button-effect"></div> */}
            {/* </div> */}
          </Link>
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
};
