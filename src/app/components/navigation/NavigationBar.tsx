import { Link } from "react-router-dom";
import { ListElement } from "./ListElement";
import { CTAButton } from "./CTAButton";
import { changePage, openCloseMenu } from "../../redux/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const NavigationBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.main.isMenuOpen);

  const clickHandler = () => {
    dispatch(changePage("Home"));
  };

  const menuButtonChandler = () => {
    dispatch(openCloseMenu());
  };

  return (
    <>
      <div className="navBar">
        <Link to="/">
          <img
            onClick={clickHandler}
            src={require("../../../images/rs-logo.png")}
            alt="RS freaks logo in square"
          />
        </Link>
        <div className="navBarActionsDesktop">
          <ul>
            <ListElement name="Home" />
            <ListElement name="About" />
            <ListElement name="Events" />
            <ListElement name="Forum" />
            <ListElement name="Contact" />
          </ul>
          <CTAButton text="Join Club" />
        </div>
        <button className="MenuIcon" onClick={menuButtonChandler}>
          Open
        </button>
      </div>
      {isMenuOpen ? (
        <div className="navBarActionsMobile">
          <button onClick={menuButtonChandler}>Close</button>
          <ul>
            <ListElement name="Home" closeMenu={menuButtonChandler} />
            <ListElement name="About" closeMenu={menuButtonChandler} />
            <ListElement name="Events" closeMenu={menuButtonChandler} />
            <ListElement name="Forum" closeMenu={menuButtonChandler} />
            <ListElement name="Contact" closeMenu={menuButtonChandler} />
            <ListElement name="Join Club" closeMenu={menuButtonChandler} />
          </ul>
        </div>
      ) : null}
    </>
  );
};
