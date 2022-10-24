import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/redux/store";
import { changePage } from "./app/redux/mainSlice";

function App() {
  const pageName = useSelector((state: RootState) => state.main.value);
  const dispatch = useDispatch();

  return (
    <body>
      <ul>
        <li onClick={() => dispatch(changePage("home"))}>Home</li>
        <li onClick={() => dispatch(changePage("about"))}>About</li>
        <li onClick={() => dispatch(changePage("contact"))}>Contact</li>
      </ul>
      <div>Hello RS Freaks - {pageName}</div>
    </body>
  );
}

export default App;
