import { Link } from "react-router-dom";
import { ListElement } from "./ListElement";
import { CTAButton } from "./CTAButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changePage, openCloseMenu } from "../../redux/mainSlice";

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
            src={require("../../assets/icons/rs-logo.png")}
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
        <div className="menuIcon" onClick={menuButtonChandler}>
          <img src={require("../../assets/icons/menu.jpg")} alt="menu icon" />
        </div>
      </div>
      {isMenuOpen ? (
        <div className="navBarActionsMobile">
          <div className="closeIcon" onClick={menuButtonChandler}>
            <img
              src={require("../../assets/icons/close.jpg")}
              alt="menu icon"
            />
          </div>
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
