import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import rsFreaksLogo from "../../../rs-freaks-logo.svg";
import { closeMenu, openMenu } from "../../redux/mainSlice";
import { RootState } from "../../redux/store";
import { ListElement } from "./ListElement";

export const NavigationBarPhone = () => {
  const isMenuOpen = useSelector((state: RootState) => state.main.isMenuOpen);
  const dispatch = useDispatch();
  return (
    <div className="navBar">
      <Link to="/">
        <img src={rsFreaksLogo} alt="RS freaks logo in square" />
      </Link>
      {!isMenuOpen ? (
        <div onClick={() => dispatch(openMenu())}>Open</div>
      ) : null}
      {isMenuOpen ? (
        <div className="navBarActions">
          <div onClick={() => dispatch(closeMenu())}>Close</div>
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
      ) : null}
    </div>
  );
};
