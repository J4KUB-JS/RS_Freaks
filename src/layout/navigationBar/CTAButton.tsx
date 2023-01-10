import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changePage } from "../../redux/mainSlice";

interface CTAButtonInterface {
  text: string;
}

export const CTAButton = ({ text }: CTAButtonInterface) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(changePage(text));
  };

  return (
    <Link to="/JoinClub">
      <div onClick={clickHandler} className="button-wrapper">
        <button className="button-cta">Join Club</button>
        <div className="button-effect"></div>
      </div>
    </Link>
  );
};
