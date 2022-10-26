import React from "react";
import { NavigationBar } from "./app/components/NavigationBar";
import RoutesComponent from "./app/components/RoutesComponent";
import { Footer } from "./app/components/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <main>
        <RoutesComponent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
