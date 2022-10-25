import console from "console";
import { useDispatch, useSelector } from "react-redux";
import rsFreaksLogo from "../../rs-freaks-logo.svg";
import { RootState } from "../redux/store";

export const NavigationBar = () => {
  const pageName = useSelector((state: RootState) => state.main.value);
  const dispatch = useDispatch();

  return (
    <div className="navBar">
      <div className="navBarLeftSide">
        <img src={rsFreaksLogo} alt="RS freaks logo in square" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>Forum</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="button-cta">Join Club</button>
    </div>
  );
};
