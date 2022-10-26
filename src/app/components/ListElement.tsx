import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { changePage } from "../../app/redux/mainSlice";
import { Link } from "react-router-dom";

interface ListElementInterface {
  name: string;
}

export const ListElement = (props: ListElementInterface) => {
  const pageName = useSelector((state: RootState) => state.main.value);
  const dispatch = useDispatch();

  return (
    <li onClick={() => dispatch(changePage(props.name))}>
      <Link className="listElement" to={"/" + props.name}>
        <div>{props.name}</div>
        {pageName === props.name ? <div className="underline"></div> : null}
      </Link>
    </li>
  );
};
