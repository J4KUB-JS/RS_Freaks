import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/redux/store";
import { changePage } from "./app/redux/mainSlice";
import { NavigationBar } from "./app/components/NavigationBar";

function App() {
  const pageName = useSelector((state: RootState) => state.main.value);
  const dispatch = useDispatch();

  return (
    <body>
      <div className="container">
        <NavigationBar />
      </div>
    </body>
  );
}

export default App;
