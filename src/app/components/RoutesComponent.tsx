import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Events } from "./pages/Events";
import { Forum } from "./pages/Forum";
import { Home } from "./pages/Home";
import { JoinClub } from "./pages/JoinClub";
import { NoPage } from "./pages/NoPage";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Forum" element={<Forum />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/JoinClub" element={<JoinClub />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
