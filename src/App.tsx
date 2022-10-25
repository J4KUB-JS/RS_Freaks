import React from "react";
import { NavigationBar } from "./app/components/NavigationBar";
import RoutesComponent from "./app/components/RoutesComponent";

function App() {
  return (
    <div className="container">
      <NavigationBar />
      <RoutesComponent />
    </div>
  );
}

export default App;
