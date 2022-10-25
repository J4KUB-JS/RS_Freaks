import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/redux/store";
import { changePage } from "./app/redux/mainSlice";
import { NavigationBar } from "./app/components/NavigationBar";
// import imgLogo from "./rs-freaks-logo.svg";

function App() {
  return (
    <div>
      <div className="container">
        <NavigationBar />
      </div>
    </div>
  );
}

export default App;
