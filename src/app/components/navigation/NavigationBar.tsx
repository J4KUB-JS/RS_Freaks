import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { ListElement } from "./ListElement";

export const NavigationBarDesktop = () => {
  const isMenuOpen = useSelector((state: RootState) => state.main.isMenuOpen);
  const dispatch = useDispatch();

  return (
    <div className="navBar">
      <Link to="/">
        <img
          src={require("../../../images/rs-logo.png")}
          alt="RS freaks logo in square"
        />
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
