import React from "react";
import { Footer } from "./app/components/footer/Footer";
import { NavigationBar } from "./app/components/navigation/NavigationBar";
import RoutesComponent from "./app/components/RoutesComponent";

function App() {
  return (
    <>
      <div>{window.innerWidth}</div>
      <NavigationBar />

      <RoutesComponent />

      <Footer />
    </>
  );
}

export default App;
