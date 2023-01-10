import { Footer } from "./layout/footer/Footer";
import { NavigationBar } from "./layout/navigationBar/NavigationBar";
import RoutesComponent from "./routes/RoutesComponent";

function App() {
  return (
    <>
      <NavigationBar />

      <RoutesComponent />

      <Footer />
    </>
  );
}

export default App;
