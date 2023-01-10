import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { changePage } from "../../redux/mainSlice";
import { RootState } from "../../redux/store";

interface ListElementInterface {
  name: string;
  closeMenu?: () => void;
}

export const ListElement = ({ name, closeMenu }: ListElementInterface) => {
  const pageName = useSelector((state: RootState) => state.main.value);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(changePage(name));
    if (closeMenu !== undefined) {
      closeMenu();
    }
  };

  return (
    <li onClick={clickHandler}>
      <Link className="listElement" to={"/" + name.split(" ").join("")}>
        <div>{name}</div>
        {pageName === name ? <div className="underline"></div> : null}
      </Link>
    </li>
  );
};
