import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changePage, closeMenu } from "../../redux/mainSlice";
import { Link } from "react-router-dom";

interface ListElementInterface {
  name: string;
}

export const ListElement = (props: ListElementInterface) => {
  const pageName = useSelector((state: RootState) => state.main.value);
  const dispatch = useDispatch();
  const clickHandler = () => {
    console.log("close");
    dispatch(changePage(props.name));
    dispatch(closeMenu());
  };

  return (
    <li onClick={clickHandler}>
      <Link className="listElement" to={"/" + props.name}>
        <div>{props.name}</div>
        {pageName === props.name ? <div className="underline"></div> : null}
      </Link>
    </li>
  );
};
